function Uv(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function K0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $u={exports:{}},Ja={},Zu={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Fv(){if(Sm)return bt;Sm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function S(L,se,Se){this.props=L,this.context=se,this.refs=R,this.updater=Se||M}S.prototype.isReactComponent={},S.prototype.setState=function(L,se){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,se,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=S.prototype;function N(L,se,Se){this.props=L,this.context=se,this.refs=R,this.updater=Se||M}var B=N.prototype=new _;B.constructor=N,T(B,S.prototype),B.isPureReactComponent=!0;var C=Array.isArray,P=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(L,se,Se){var We,Ge={},Oe=null,ae=null;if(se!=null)for(We in se.ref!==void 0&&(ae=se.ref),se.key!==void 0&&(Oe=""+se.key),se)P.call(se,We)&&!F.hasOwnProperty(We)&&(Ge[We]=se[We]);var ue=arguments.length-2;if(ue===1)Ge.children=Se;else if(1<ue){for(var Ae=Array(ue),Re=0;Re<ue;Re++)Ae[Re]=arguments[Re+2];Ge.children=Ae}if(L&&L.defaultProps)for(We in ue=L.defaultProps,ue)Ge[We]===void 0&&(Ge[We]=ue[We]);return{$$typeof:s,type:L,key:Oe,ref:ae,props:Ge,_owner:I.current}}function D(L,se){return{$$typeof:s,type:L.type,key:se,ref:L.ref,props:L.props,_owner:L._owner}}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function j(L){var se={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Se){return se[Se]})}var $=/\/+/g;function te(L,se){return typeof L=="object"&&L!==null&&L.key!=null?j(""+L.key):se.toString(36)}function q(L,se,Se,We,Ge){var Oe=typeof L;(Oe==="undefined"||Oe==="boolean")&&(L=null);var ae=!1;if(L===null)ae=!0;else switch(Oe){case"string":case"number":ae=!0;break;case"object":switch(L.$$typeof){case s:case e:ae=!0}}if(ae)return ae=L,Ge=Ge(ae),L=We===""?"."+te(ae,0):We,C(Ge)?(Se="",L!=null&&(Se=L.replace($,"$&/")+"/"),q(Ge,se,Se,"",function(Re){return Re})):Ge!=null&&(V(Ge)&&(Ge=D(Ge,Se+(!Ge.key||ae&&ae.key===Ge.key?"":(""+Ge.key).replace($,"$&/")+"/")+L)),se.push(Ge)),1;if(ae=0,We=We===""?".":We+":",C(L))for(var ue=0;ue<L.length;ue++){Oe=L[ue];var Ae=We+te(Oe,ue);ae+=q(Oe,se,Se,Ae,Ge)}else if(Ae=x(L),typeof Ae=="function")for(L=Ae.call(L),ue=0;!(Oe=L.next()).done;)Oe=Oe.value,Ae=We+te(Oe,ue++),ae+=q(Oe,se,Se,Ae,Ge);else if(Oe==="object")throw se=String(L),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ae}function Z(L,se,Se){if(L==null)return L;var We=[],Ge=0;return q(L,We,"","",function(Oe){return se.call(Se,Oe,Ge++)}),We}function fe(L){if(L._status===-1){var se=L._result;se=se(),se.then(function(Se){(L._status===0||L._status===-1)&&(L._status=1,L._result=Se)},function(Se){(L._status===0||L._status===-1)&&(L._status=2,L._result=Se)}),L._status===-1&&(L._status=0,L._result=se)}if(L._status===1)return L._result.default;throw L._result}var Q={current:null},O={transition:null},z={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:O,ReactCurrentOwner:I};function H(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:Z,forEach:function(L,se,Se){Z(L,function(){se.apply(this,arguments)},Se)},count:function(L){var se=0;return Z(L,function(){se++}),se},toArray:function(L){return Z(L,function(se){return se})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},bt.Component=S,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=N,bt.StrictMode=r,bt.Suspense=f,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,bt.act=H,bt.cloneElement=function(L,se,Se){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var We=T({},L.props),Ge=L.key,Oe=L.ref,ae=L._owner;if(se!=null){if(se.ref!==void 0&&(Oe=se.ref,ae=I.current),se.key!==void 0&&(Ge=""+se.key),L.type&&L.type.defaultProps)var ue=L.type.defaultProps;for(Ae in se)P.call(se,Ae)&&!F.hasOwnProperty(Ae)&&(We[Ae]=se[Ae]===void 0&&ue!==void 0?ue[Ae]:se[Ae])}var Ae=arguments.length-2;if(Ae===1)We.children=Se;else if(1<Ae){ue=Array(Ae);for(var Re=0;Re<Ae;Re++)ue[Re]=arguments[Re+2];We.children=ue}return{$$typeof:s,type:L.type,key:Ge,ref:Oe,props:We,_owner:ae}},bt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},bt.createElement=E,bt.createFactory=function(L){var se=E.bind(null,L);return se.type=L,se},bt.createRef=function(){return{current:null}},bt.forwardRef=function(L){return{$$typeof:d,render:L}},bt.isValidElement=V,bt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:fe}},bt.memo=function(L,se){return{$$typeof:m,type:L,compare:se===void 0?null:se}},bt.startTransition=function(L){var se=O.transition;O.transition={};try{L()}finally{O.transition=se}},bt.unstable_act=H,bt.useCallback=function(L,se){return Q.current.useCallback(L,se)},bt.useContext=function(L){return Q.current.useContext(L)},bt.useDebugValue=function(){},bt.useDeferredValue=function(L){return Q.current.useDeferredValue(L)},bt.useEffect=function(L,se){return Q.current.useEffect(L,se)},bt.useId=function(){return Q.current.useId()},bt.useImperativeHandle=function(L,se,Se){return Q.current.useImperativeHandle(L,se,Se)},bt.useInsertionEffect=function(L,se){return Q.current.useInsertionEffect(L,se)},bt.useLayoutEffect=function(L,se){return Q.current.useLayoutEffect(L,se)},bt.useMemo=function(L,se){return Q.current.useMemo(L,se)},bt.useReducer=function(L,se,Se){return Q.current.useReducer(L,se,Se)},bt.useRef=function(L){return Q.current.useRef(L)},bt.useState=function(L){return Q.current.useState(L)},bt.useSyncExternalStore=function(L,se,Se){return Q.current.useSyncExternalStore(L,se,Se)},bt.useTransition=function(){return Q.current.useTransition()},bt.version="18.3.1",bt}var Mm;function If(){return Mm||(Mm=1,Zu.exports=Fv()),Zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function Ov(){if(wm)return Ja;wm=1;var s=If(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var v,y={},x=null,M=null;m!==void 0&&(x=""+m),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(M=f.ref);for(v in f)r.call(f,v)&&!l.hasOwnProperty(v)&&(y[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)y[v]===void 0&&(y[v]=f[v]);return{$$typeof:e,type:d,key:x,ref:M,props:y,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var Em;function Bv(){return Em||(Em=1,$u.exports=Ov()),$u.exports}var p=Bv(),xe=If();const $0=K0(xe),zv=Uv({__proto__:null,default:$0},[xe]);var Cl={},Ju={exports:{}},qn={},Qu={exports:{}},ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Hv(){return bm||(bm=1,(function(s){function e(O,z){var H=O.length;O.push(z);e:for(;0<H;){var L=H-1>>>1,se=O[L];if(0<o(se,z))O[L]=z,O[H]=se,H=L;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],H=O.pop();if(H!==z){O[0]=H;e:for(var L=0,se=O.length,Se=se>>>1;L<Se;){var We=2*(L+1)-1,Ge=O[We],Oe=We+1,ae=O[Oe];if(0>o(Ge,H))Oe<se&&0>o(ae,Ge)?(O[L]=ae,O[Oe]=H,L=Oe):(O[L]=Ge,O[We]=H,L=We);else if(Oe<se&&0>o(ae,H))O[L]=ae,O[Oe]=H,L=Oe;else break e}}return z}function o(O,z){var H=O.sortIndex-z.sortIndex;return H!==0?H:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],m=[],v=1,y=null,x=3,M=!1,T=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(O){for(var z=t(m);z!==null;){if(z.callback===null)r(m);else if(z.startTime<=O)r(m),z.sortIndex=z.expirationTime,e(f,z);else break;z=t(m)}}function C(O){if(R=!1,B(O),!T)if(t(f)!==null)T=!0,fe(P);else{var z=t(m);z!==null&&Q(C,z.startTime-O)}}function P(O,z){T=!1,R&&(R=!1,_(E),E=-1),M=!0;var H=x;try{for(B(z),y=t(f);y!==null&&(!(y.expirationTime>z)||O&&!j());){var L=y.callback;if(typeof L=="function"){y.callback=null,x=y.priorityLevel;var se=L(y.expirationTime<=z);z=s.unstable_now(),typeof se=="function"?y.callback=se:y===t(f)&&r(f),B(z)}else r(f);y=t(f)}if(y!==null)var Se=!0;else{var We=t(m);We!==null&&Q(C,We.startTime-z),Se=!1}return Se}finally{y=null,x=H,M=!1}}var I=!1,F=null,E=-1,D=5,V=-1;function j(){return!(s.unstable_now()-V<D)}function $(){if(F!==null){var O=s.unstable_now();V=O;var z=!0;try{z=F(!0,O)}finally{z?te():(I=!1,F=null)}}else I=!1}var te;if(typeof N=="function")te=function(){N($)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Z=q.port2;q.port1.onmessage=$,te=function(){Z.postMessage(null)}}else te=function(){S($,0)};function fe(O){F=O,I||(I=!0,te())}function Q(O,z){E=S(function(){O(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,fe(P))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(O){switch(x){case 1:case 2:case 3:var z=3;break;default:z=x}var H=x;x=z;try{return O()}finally{x=H}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=x;x=O;try{return z()}finally{x=H}},s.unstable_scheduleCallback=function(O,z,H){var L=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?L+H:L):H=L,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=H+se,O={id:v++,callback:z,priorityLevel:O,startTime:H,expirationTime:se,sortIndex:-1},H>L?(O.sortIndex=H,e(m,O),t(f)===null&&O===t(m)&&(R?(_(E),E=-1):R=!0,Q(C,H-L))):(O.sortIndex=se,e(f,O),T||M||(T=!0,fe(P))),O},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(O){var z=x;return function(){var H=x;x=z;try{return O.apply(this,arguments)}finally{x=H}}}})(ed)),ed}var Tm;function Vv(){return Tm||(Tm=1,Qu.exports=Hv()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function Gv(){if(Am)return qn;Am=1;var s=If(),e=Vv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function x(n){return f.call(y,n)?!0:f.call(v,n)?!1:m.test(n)?y[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,N);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,N);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,N);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function B(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),j=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),O=Symbol.iterator;function z(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,L;function se(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var Se=!1;function We(n,i){if(!n||Se)return"";Se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){c=de}n.call(i.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var h=de.stack.split(`
`),g=c.stack.split(`
`),b=h.length-1,U=g.length-1;1<=b&&0<=U&&h[b]!==g[U];)U--;for(;1<=b&&0<=U;b--,U--)if(h[b]!==g[U]){if(b!==1||U!==1)do if(b--,U--,0>U||h[b]!==g[U]){var G=`
`+h[b].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=b&&0<=U);break}}}finally{Se=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function Ge(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function Oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case I:return"Portal";case D:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case q:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:Oe(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return Oe(n(i))}catch{}}return null}function ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(n){var i=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function we(n){n._valueTracker||(n._valueTracker=Re(n))}function ot(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ae(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ue(n,i){var a=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ue(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yt(n,i){i=i.checked,i!=null&&B(n,"checked",i,!1)}function ut(n,i){yt(n,i);var a=ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?pe(n,i.type,a):i.hasOwnProperty("defaultValue")&&pe(n,i.type,ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function St(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function pe(n,i,a){(i!=="number"||Et(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var be=Array.isArray;function st(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ue(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(be(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ue(a)}}function Gt(n,i){var a=ue(i.value),c=ue(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Tt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?k(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var De=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(n,i){if(i){if(De[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function tt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,dt=null,X=null;function Pe(n){if(n=Fa(n)){if(typeof at!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Go(i),at(n.stateNode,n.type,i))}}function ge(n){dt?X?X.push(n):X=[n]:dt=n}function Ie(){if(dt){var n=dt,i=X;if(X=dt=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Ve(n,i){return n(i)}function _e(){}var it=!1;function Je(n,i,a){if(it)return n(i,a);it=!0;try{return Ve(n,i,a)}finally{it=!1,(dt!==null||X!==null)&&(_e(),Ie())}}function kt(n,i){var a=n.stateNode;if(a===null)return null;var c=Go(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Pt=!1;if(d)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Pt=!1}function ii(n,i,a,c,h,g,b,U,G){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(Me){this.onError(Me)}}var Or=!1,ms=null,Br=!1,zr=null,_c={onError:function(n){Or=!0,ms=n}};function bo(n,i,a,c,h,g,b,U,G){Or=!1,ms=null,ii.apply(_c,arguments)}function To(n,i,a,c,h,g,b,U,G){if(bo.apply(this,arguments),Or){if(Or){var de=ms;Or=!1,ms=null}else throw Error(t(198));Br||(Br=!0,zr=de)}}function kn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function gs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ga(n){if(kn(n)!==n)throw Error(t(188))}function Ao(n){var i=n.alternate;if(!i){if(i=kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return ga(h),n;if(g===c)return ga(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var b=!1,U=h.child;U;){if(U===a){b=!0,a=h,c=g;break}if(U===c){b=!0,c=h,a=g;break}U=U.sibling}if(!b){for(U=g.child;U;){if(U===a){b=!0,a=g,c=h;break}if(U===c){b=!0,c=g,a=h;break}U=U.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Hr(n){return n=Ao(n),n!==null?xa(n):null}function xa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xa(n);if(i!==null)return i;n=n.sibling}return null}var Vr=e.unstable_scheduleCallback,va=e.unstable_cancelCallback,Co=e.unstable_shouldYield,yc=e.unstable_requestPaint,Zt=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,_a=e.unstable_ImmediatePriority,ya=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,Y=e.unstable_LowPriority,ce=e.unstable_IdlePriority,ie=null,ee=null;function ze(n){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(ie,n,void 0,(n.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:nt,Be=Math.log,Ke=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(Be(n)/Ke|0)|0}var mt=64,_t=4194304;function Xe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function At(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var U=b&~h;U!==0?c=Xe(U):(g&=b,g!==0&&(c=Xe(g)))}else b=a&~h,b!==0?c=Xe(b):g!==0&&(c=Xe(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Fe(i),h=1<<a,c|=n[a],i&=~h;return c}function tn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-Fe(g),U=1<<b,G=h[b];G===-1?((U&a)===0||(U&c)!==0)&&(h[b]=tn(U,i)):G<=i&&(n.expiredLanes|=U),g&=~U}}function Ot(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function cn(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function je(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function rn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Fe(i),n[i]=a}function Ct(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Fe(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function bn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Fe(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Mt=0;function pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ji,Ut,Yt,mi,Bt,ri=!1,gi=[],xi=null,cr=null,ur=null,Sa=new Map,Ma=new Map,dr=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(n,i){switch(n){case"focusin":case"focusout":xi=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(i.pointerId)}}function wa(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Fa(i),i!==null&&Ut(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function sx(n,i,a,c,h){switch(i){case"focusin":return xi=wa(xi,n,i,a,c,h),!0;case"dragenter":return cr=wa(cr,n,i,a,c,h),!0;case"mouseover":return ur=wa(ur,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Sa.set(g,wa(Sa.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Ma.set(g,wa(Ma.get(g)||null,n,i,a,c,h)),!0}return!1}function sh(n){var i=Gr(n.target);if(i!==null){var a=kn(i);if(a!==null){if(i=a.tag,i===13){if(i=gs(a),i!==null){n.blockedOn=i,Bt(n.priority,function(){Yt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=wc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Le=c,a.target.dispatchEvent(c),Le=null}else return i=Fa(a),i!==null&&Ut(i),n.blockedOn=a,!1;i.shift()}return!0}function ah(n,i,a){Ro(n)&&a.delete(i)}function ax(){ri=!1,xi!==null&&Ro(xi)&&(xi=null),cr!==null&&Ro(cr)&&(cr=null),ur!==null&&Ro(ur)&&(ur=null),Sa.forEach(ah),Ma.forEach(ah)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,ri||(ri=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ax)))}function ba(n){function i(h){return Ea(h,n)}if(0<gi.length){Ea(gi[0],n);for(var a=1;a<gi.length;a++){var c=gi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(xi!==null&&Ea(xi,n),cr!==null&&Ea(cr,n),ur!==null&&Ea(ur,n),Sa.forEach(i),Ma.forEach(i),a=0;a<dr.length;a++)c=dr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)sh(a),a.blockedOn===null&&dr.shift()}var xs=C.ReactCurrentBatchConfig,Lo=!0;function ox(n,i,a,c){var h=Mt,g=xs.transition;xs.transition=null;try{Mt=1,Mc(n,i,a,c)}finally{Mt=h,xs.transition=g}}function lx(n,i,a,c){var h=Mt,g=xs.transition;xs.transition=null;try{Mt=4,Mc(n,i,a,c)}finally{Mt=h,xs.transition=g}}function Mc(n,i,a,c){if(Lo){var h=wc(n,i,a,c);if(h===null)zc(n,i,c,No,a),rh(n,c);else if(sx(h,n,i,a,c))c.stopPropagation();else if(rh(n,c),i&4&&-1<rx.indexOf(n)){for(;h!==null;){var g=Fa(h);if(g!==null&&ji(g),g=wc(n,i,a,c),g===null&&zc(n,i,c,No,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else zc(n,i,c,null,a)}}var No=null;function wc(n,i,a,c){if(No=null,n=tt(c),n=Gr(n),n!==null)if(i=kn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=gs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return No=n,null}function oh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case _a:return 1;case ya:return 4;case A:case Y:return 16;case ce:return 536870912;default:return 16}default:return 16}}var fr=null,Ec=null,Po=null;function lh(){if(Po)return Po;var n,i=Ec,a=i.length,c,h="value"in fr?fr.value:fr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[g-c];c++);return Po=h.slice(n,1<c?1-c:void 0)}function Io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Do(){return!0}function ch(){return!1}function Xn(n){function i(a,c,h,g,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Do:ch,this.isPropagationStopped=ch,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=Xn(vs),Ta=H({},vs,{view:0,detail:0}),cx=Xn(Ta),Tc,Ac,Aa,ko=H({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(Tc=n.screenX-Aa.screenX,Ac=n.screenY-Aa.screenY):Ac=Tc=0,Aa=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),uh=Xn(ko),ux=H({},ko,{dataTransfer:0}),dx=Xn(ux),fx=H({},Ta,{relatedTarget:0}),Cc=Xn(fx),hx=H({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Xn(hx),mx=H({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gx=Xn(mx),xx=H({},vs,{data:0}),dh=Xn(xx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yx[n])?!!i[n]:!1}function Rc(){return Sx}var Mx=H({},Ta,{key:function(n){if(n.key){var i=vx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_x[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(n){return n.type==="keypress"?Io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wx=Xn(Mx),Ex=H({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Xn(Ex),bx=H({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),Tx=Xn(bx),Ax=H({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Xn(Ax),Rx=H({},ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Xn(Rx),Nx=[9,13,27,32],Lc=d&&"CompositionEvent"in window,Ca=null;d&&"documentMode"in document&&(Ca=document.documentMode);var Px=d&&"TextEvent"in window&&!Ca,hh=d&&(!Lc||Ca&&8<Ca&&11>=Ca),ph=" ",mh=!1;function gh(n,i){switch(n){case"keyup":return Nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function Ix(n,i){switch(n){case"compositionend":return xh(i);case"keypress":return i.which!==32?null:(mh=!0,ph);case"textInput":return n=i.data,n===ph&&mh?null:n;default:return null}}function Dx(n,i){if(_s)return n==="compositionend"||!Lc&&gh(n,i)?(n=lh(),Po=Ec=fr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hh&&i.locale!=="ko"?null:i.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!kx[n.type]:i==="textarea"}function _h(n,i,a,c){ge(c),i=zo(i,"onChange"),0<i.length&&(a=new bc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ra=null,La=null;function Ux(n){Fh(n,0)}function Uo(n){var i=Es(n);if(ot(i))return n}function Fx(n,i){if(n==="change")return i}var yh=!1;if(d){var Nc;if(d){var Pc="oninput"in document;if(!Pc){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Pc=typeof Sh.oninput=="function"}Nc=Pc}else Nc=!1;yh=Nc&&(!document.documentMode||9<document.documentMode)}function Mh(){Ra&&(Ra.detachEvent("onpropertychange",wh),La=Ra=null)}function wh(n){if(n.propertyName==="value"&&Uo(La)){var i=[];_h(i,La,n,tt(n)),Je(Ux,i)}}function Ox(n,i,a){n==="focusin"?(Mh(),Ra=i,La=a,Ra.attachEvent("onpropertychange",wh)):n==="focusout"&&Mh()}function Bx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uo(La)}function zx(n,i){if(n==="click")return Uo(i)}function Hx(n,i){if(n==="input"||n==="change")return Uo(i)}function Vx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:Vx;function Na(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!vi(n[h],i[h]))return!1}return!0}function Eh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bh(n,i){var a=Eh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Eh(a)}}function Th(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Th(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ah(){for(var n=window,i=Et();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Et(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Gx(n){var i=Ah(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Th(a.ownerDocument.documentElement,a)){if(c!==null&&Ic(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=bh(a,g);var b=bh(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Wx=d&&"documentMode"in document&&11>=document.documentMode,ys=null,Dc=null,Pa=null,kc=!1;function Ch(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||ys==null||ys!==Et(c)||(c=ys,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=zo(Dc,"onSelect"),0<c.length&&(i=new bc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ys)))}function Fo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Uc={},Rh={};d&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Oo(n){if(Uc[n])return Uc[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Rh)return Uc[n]=i[a];return n}var Lh=Oo("animationend"),Nh=Oo("animationiteration"),Ph=Oo("animationstart"),Ih=Oo("transitionend"),Dh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){Dh.set(n,i),l(i,[n])}for(var Fc=0;Fc<kh.length;Fc++){var Oc=kh[Fc],jx=Oc.toLowerCase(),qx=Oc[0].toUpperCase()+Oc.slice(1);hr(jx,"on"+qx)}hr(Lh,"onAnimationEnd"),hr(Nh,"onAnimationIteration"),hr(Ph,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(Ih,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Uh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,To(c,i,void 0,n),n.currentTarget=null}function Fh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var U=c[b],G=U.instance,de=U.currentTarget;if(U=U.listener,G!==g&&h.isPropagationStopped())break e;Uh(h,U,de),g=G}else for(b=0;b<c.length;b++){if(U=c[b],G=U.instance,de=U.currentTarget,U=U.listener,G!==g&&h.isPropagationStopped())break e;Uh(h,U,de),g=G}}}if(Br)throw n=zr,Br=!1,zr=null,n}function qt(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=n+"__bubble";a.has(c)||(Oh(i,n,2,!1),a.add(c))}function Bc(n,i,a){var c=0;i&&(c|=4),Oh(a,n,c,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Bo]){n[Bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Bc("selectionchange",!1,i))}}function Oh(n,i,a,c){switch(oh(i)){case 1:var h=ox;break;case 4:h=lx;break;default:h=Mc}a=h.bind(null,i,a,n),h=void 0,!Pt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function zc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var U=c.stateNode.containerInfo;if(U===h||U.nodeType===8&&U.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var G=b.tag;if((G===3||G===4)&&(G=b.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;b=b.return}for(;U!==null;){if(b=Gr(U),b===null)return;if(G=b.tag,G===5||G===6){c=g=b;continue e}U=U.parentNode}}c=c.return}Je(function(){var de=g,Me=tt(a),Ee=[];e:{var ye=Dh.get(n);if(ye!==void 0){var qe=bc,$e=n;switch(n){case"keypress":if(Io(a)===0)break e;case"keydown":case"keyup":qe=wx;break;case"focusin":$e="focus",qe=Cc;break;case"focusout":$e="blur",qe=Cc;break;case"beforeblur":case"afterblur":qe=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Tx;break;case Lh:case Nh:case Ph:qe=px;break;case Ih:qe=Cx;break;case"scroll":qe=cx;break;case"wheel":qe=Lx;break;case"copy":case"cut":case"paste":qe=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=fh}var Qe=(i&4)!==0,sn=!Qe&&n==="scroll",re=Qe?ye!==null?ye+"Capture":null:ye;Qe=[];for(var K=de,le;K!==null;){le=K;var Ce=le.stateNode;if(le.tag===5&&Ce!==null&&(le=Ce,re!==null&&(Ce=kt(K,re),Ce!=null&&Qe.push(ka(K,Ce,le)))),sn)break;K=K.return}0<Qe.length&&(ye=new qe(ye,$e,null,a,Me),Ee.push({event:ye,listeners:Qe}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",ye&&a!==Le&&($e=a.relatedTarget||a.fromElement)&&(Gr($e)||$e[qi]))break e;if((qe||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,qe?($e=a.relatedTarget||a.toElement,qe=de,$e=$e?Gr($e):null,$e!==null&&(sn=kn($e),$e!==sn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(qe=null,$e=de),qe!==$e)){if(Qe=uh,Ce="onMouseLeave",re="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=fh,Ce="onPointerLeave",re="onPointerEnter",K="pointer"),sn=qe==null?ye:Es(qe),le=$e==null?ye:Es($e),ye=new Qe(Ce,K+"leave",qe,a,Me),ye.target=sn,ye.relatedTarget=le,Ce=null,Gr(Me)===de&&(Qe=new Qe(re,K+"enter",$e,a,Me),Qe.target=le,Qe.relatedTarget=sn,Ce=Qe),sn=Ce,qe&&$e)t:{for(Qe=qe,re=$e,K=0,le=Qe;le;le=Ms(le))K++;for(le=0,Ce=re;Ce;Ce=Ms(Ce))le++;for(;0<K-le;)Qe=Ms(Qe),K--;for(;0<le-K;)re=Ms(re),le--;for(;K--;){if(Qe===re||re!==null&&Qe===re.alternate)break t;Qe=Ms(Qe),re=Ms(re)}Qe=null}else Qe=null;qe!==null&&Bh(Ee,ye,qe,Qe,!1),$e!==null&&sn!==null&&Bh(Ee,sn,$e,Qe,!0)}}e:{if(ye=de?Es(de):window,qe=ye.nodeName&&ye.nodeName.toLowerCase(),qe==="select"||qe==="input"&&ye.type==="file")var rt=Fx;else if(vh(ye))if(yh)rt=Hx;else{rt=Bx;var lt=Ox}else(qe=ye.nodeName)&&qe.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(rt=zx);if(rt&&(rt=rt(n,de))){_h(Ee,rt,a,Me);break e}lt&&lt(n,ye,de),n==="focusout"&&(lt=ye._wrapperState)&&lt.controlled&&ye.type==="number"&&pe(ye,"number",ye.value)}switch(lt=de?Es(de):window,n){case"focusin":(vh(lt)||lt.contentEditable==="true")&&(ys=lt,Dc=de,Pa=null);break;case"focusout":Pa=Dc=ys=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Ch(Ee,a,Me);break;case"selectionchange":if(Wx)break;case"keydown":case"keyup":Ch(Ee,a,Me)}var ct;if(Lc)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else _s?gh(n,a)&&(ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(hh&&a.locale!=="ko"&&(_s||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&_s&&(ct=lh()):(fr=Me,Ec="value"in fr?fr.value:fr.textContent,_s=!0)),lt=zo(de,ft),0<lt.length&&(ft=new dh(ft,n,null,a,Me),Ee.push({event:ft,listeners:lt}),ct?ft.data=ct:(ct=xh(a),ct!==null&&(ft.data=ct)))),(ct=Px?Ix(n,a):Dx(n,a))&&(de=zo(de,"onBeforeInput"),0<de.length&&(Me=new dh("onBeforeInput","beforeinput",null,a,Me),Ee.push({event:Me,listeners:de}),Me.data=ct))}Fh(Ee,i)})}function ka(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=kt(n,a),g!=null&&c.unshift(ka(n,g,h)),g=kt(n,i),g!=null&&c.push(ka(n,g,h))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bh(n,i,a,c,h){for(var g=i._reactName,b=[];a!==null&&a!==c;){var U=a,G=U.alternate,de=U.stateNode;if(G!==null&&G===c)break;U.tag===5&&de!==null&&(U=de,h?(G=kt(a,g),G!=null&&b.unshift(ka(a,G,U))):h||(G=kt(a,g),G!=null&&b.push(ka(a,G,U)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var Yx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function zh(n){return(typeof n=="string"?n:""+n).replace(Yx,`
`).replace(Kx,"")}function Ho(n,i,a){if(i=zh(i),zh(n)!==i&&a)throw Error(t(425))}function Vo(){}var Hc=null,Vc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(n){return Hh.resolve(null).then(n).catch(Jx)}:Wc;function Jx(n){setTimeout(function(){throw n})}function jc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ba(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Vh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Ri="__reactFiber$"+ws,Ua="__reactProps$"+ws,qi="__reactContainer$"+ws,qc="__reactEvents$"+ws,Qx="__reactListeners$"+ws,ev="__reactHandles$"+ws;function Gr(n){var i=n[Ri];if(i)return i;for(var a=n.parentNode;a;){if(i=a[qi]||a[Ri]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Vh(n);n!==null;){if(a=n[Ri])return a;n=Vh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[Ri]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Es(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Go(n){return n[Ua]||null}var Xc=[],bs=-1;function mr(n){return{current:n}}function Xt(n){0>bs||(n.current=Xc[bs],Xc[bs]=null,bs--)}function jt(n,i){bs++,Xc[bs]=n.current,n.current=i}var gr={},Tn=mr(gr),Hn=mr(!1),Wr=gr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Vn(n){return n=n.childContextTypes,n!=null}function Wo(){Xt(Hn),Xt(Tn)}function Gh(n,i,a){if(Tn.current!==gr)throw Error(t(168));jt(Tn,i),jt(Hn,a)}function Wh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ae(n)||"Unknown",h));return H({},a,c)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Wr=Tn.current,jt(Tn,n),jt(Hn,Hn.current),!0}function jh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Wh(n,i,Wr),c.__reactInternalMemoizedMergedChildContext=n,Xt(Hn),Xt(Tn),jt(Tn,n)):Xt(Hn),jt(Hn,a)}var Xi=null,qo=!1,Yc=!1;function qh(n){Xi===null?Xi=[n]:Xi.push(n)}function tv(n){qo=!0,qh(n)}function xr(){if(!Yc&&Xi!==null){Yc=!0;var n=0,i=Mt;try{var a=Xi;for(Mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xi=null,qo=!1}catch(h){throw Xi!==null&&(Xi=Xi.slice(n+1)),Vr(_a,xr),h}finally{Mt=i,Yc=!1}}return null}var As=[],Cs=0,Xo=null,Yo=0,si=[],ai=0,jr=null,Yi=1,Ki="";function qr(n,i){As[Cs++]=Yo,As[Cs++]=Xo,Xo=n,Yo=i}function Xh(n,i,a){si[ai++]=Yi,si[ai++]=Ki,si[ai++]=jr,jr=n;var c=Yi;n=Ki;var h=32-Fe(c)-1;c&=~(1<<h),a+=1;var g=32-Fe(i)+h;if(30<g){var b=h-h%5;g=(c&(1<<b)-1).toString(32),c>>=b,h-=b,Yi=1<<32-Fe(i)+h|a<<h|c,Ki=g+n}else Yi=1<<g|a<<h|c,Ki=n}function Kc(n){n.return!==null&&(qr(n,1),Xh(n,1,0))}function $c(n){for(;n===Xo;)Xo=As[--Cs],As[Cs]=null,Yo=As[--Cs],As[Cs]=null;for(;n===jr;)jr=si[--ai],si[ai]=null,Ki=si[--ai],si[ai]=null,Yi=si[--ai],si[ai]=null}var Yn=null,Kn=null,Kt=!1,_i=null;function Yh(n,i){var a=ui(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,Kn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,Kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=jr!==null?{id:Yi,overflow:Ki}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ui(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Yn=n,Kn=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(Kt){var i=Kn;if(i){var a=i;if(!Kh(n,i)){if(Zc(n))throw Error(t(418));i=pr(a.nextSibling);var c=Yn;i&&Kh(n,i)?Yh(c,a):(n.flags=n.flags&-4097|2,Kt=!1,Yn=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Yn=n}}}function $h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Ko(n){if(n!==Yn)return!1;if(!Kt)return $h(n),Kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=Kn)){if(Zc(n))throw Zh(),Error(t(418));for(;i;)Yh(n,i),i=pr(i.nextSibling)}if($h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Kn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Kn=null}}else Kn=Yn?pr(n.stateNode.nextSibling):null;return!0}function Zh(){for(var n=Kn;n;)n=pr(n.nextSibling)}function Rs(){Kn=Yn=null,Kt=!1}function Qc(n){_i===null?_i=[n]:_i.push(n)}var nv=C.ReactCurrentBatchConfig;function Oa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var U=h.refs;b===null?delete U[g]:U[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jh(n){var i=n._init;return i(n._payload)}function Qh(n){function i(re,K){if(n){var le=re.deletions;le===null?(re.deletions=[K],re.flags|=16):le.push(K)}}function a(re,K){if(!n)return null;for(;K!==null;)i(re,K),K=K.sibling;return null}function c(re,K){for(re=new Map;K!==null;)K.key!==null?re.set(K.key,K):re.set(K.index,K),K=K.sibling;return re}function h(re,K){return re=br(re,K),re.index=0,re.sibling=null,re}function g(re,K,le){return re.index=le,n?(le=re.alternate,le!==null?(le=le.index,le<K?(re.flags|=2,K):le):(re.flags|=2,K)):(re.flags|=1048576,K)}function b(re){return n&&re.alternate===null&&(re.flags|=2),re}function U(re,K,le,Ce){return K===null||K.tag!==6?(K=Wu(le,re.mode,Ce),K.return=re,K):(K=h(K,le),K.return=re,K)}function G(re,K,le,Ce){var rt=le.type;return rt===F?Me(re,K,le.props.children,Ce,le.key):K!==null&&(K.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===fe&&Jh(rt)===K.type)?(Ce=h(K,le.props),Ce.ref=Oa(re,K,le),Ce.return=re,Ce):(Ce=yl(le.type,le.key,le.props,null,re.mode,Ce),Ce.ref=Oa(re,K,le),Ce.return=re,Ce)}function de(re,K,le,Ce){return K===null||K.tag!==4||K.stateNode.containerInfo!==le.containerInfo||K.stateNode.implementation!==le.implementation?(K=ju(le,re.mode,Ce),K.return=re,K):(K=h(K,le.children||[]),K.return=re,K)}function Me(re,K,le,Ce,rt){return K===null||K.tag!==7?(K=es(le,re.mode,Ce,rt),K.return=re,K):(K=h(K,le),K.return=re,K)}function Ee(re,K,le){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Wu(""+K,re.mode,le),K.return=re,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case P:return le=yl(K.type,K.key,K.props,null,re.mode,le),le.ref=Oa(re,null,K),le.return=re,le;case I:return K=ju(K,re.mode,le),K.return=re,K;case fe:var Ce=K._init;return Ee(re,Ce(K._payload),le)}if(be(K)||z(K))return K=es(K,re.mode,le,null),K.return=re,K;$o(re,K)}return null}function ye(re,K,le,Ce){var rt=K!==null?K.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return rt!==null?null:U(re,K,""+le,Ce);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case P:return le.key===rt?G(re,K,le,Ce):null;case I:return le.key===rt?de(re,K,le,Ce):null;case fe:return rt=le._init,ye(re,K,rt(le._payload),Ce)}if(be(le)||z(le))return rt!==null?null:Me(re,K,le,Ce,null);$o(re,le)}return null}function qe(re,K,le,Ce,rt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return re=re.get(le)||null,U(K,re,""+Ce,rt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case P:return re=re.get(Ce.key===null?le:Ce.key)||null,G(K,re,Ce,rt);case I:return re=re.get(Ce.key===null?le:Ce.key)||null,de(K,re,Ce,rt);case fe:var lt=Ce._init;return qe(re,K,le,lt(Ce._payload),rt)}if(be(Ce)||z(Ce))return re=re.get(le)||null,Me(K,re,Ce,rt,null);$o(K,Ce)}return null}function $e(re,K,le,Ce){for(var rt=null,lt=null,ct=K,ft=K=0,gn=null;ct!==null&&ft<le.length;ft++){ct.index>ft?(gn=ct,ct=null):gn=ct.sibling;var Ft=ye(re,ct,le[ft],Ce);if(Ft===null){ct===null&&(ct=gn);break}n&&ct&&Ft.alternate===null&&i(re,ct),K=g(Ft,K,ft),lt===null?rt=Ft:lt.sibling=Ft,lt=Ft,ct=gn}if(ft===le.length)return a(re,ct),Kt&&qr(re,ft),rt;if(ct===null){for(;ft<le.length;ft++)ct=Ee(re,le[ft],Ce),ct!==null&&(K=g(ct,K,ft),lt===null?rt=ct:lt.sibling=ct,lt=ct);return Kt&&qr(re,ft),rt}for(ct=c(re,ct);ft<le.length;ft++)gn=qe(ct,re,ft,le[ft],Ce),gn!==null&&(n&&gn.alternate!==null&&ct.delete(gn.key===null?ft:gn.key),K=g(gn,K,ft),lt===null?rt=gn:lt.sibling=gn,lt=gn);return n&&ct.forEach(function(Tr){return i(re,Tr)}),Kt&&qr(re,ft),rt}function Qe(re,K,le,Ce){var rt=z(le);if(typeof rt!="function")throw Error(t(150));if(le=rt.call(le),le==null)throw Error(t(151));for(var lt=rt=null,ct=K,ft=K=0,gn=null,Ft=le.next();ct!==null&&!Ft.done;ft++,Ft=le.next()){ct.index>ft?(gn=ct,ct=null):gn=ct.sibling;var Tr=ye(re,ct,Ft.value,Ce);if(Tr===null){ct===null&&(ct=gn);break}n&&ct&&Tr.alternate===null&&i(re,ct),K=g(Tr,K,ft),lt===null?rt=Tr:lt.sibling=Tr,lt=Tr,ct=gn}if(Ft.done)return a(re,ct),Kt&&qr(re,ft),rt;if(ct===null){for(;!Ft.done;ft++,Ft=le.next())Ft=Ee(re,Ft.value,Ce),Ft!==null&&(K=g(Ft,K,ft),lt===null?rt=Ft:lt.sibling=Ft,lt=Ft);return Kt&&qr(re,ft),rt}for(ct=c(re,ct);!Ft.done;ft++,Ft=le.next())Ft=qe(ct,re,ft,Ft.value,Ce),Ft!==null&&(n&&Ft.alternate!==null&&ct.delete(Ft.key===null?ft:Ft.key),K=g(Ft,K,ft),lt===null?rt=Ft:lt.sibling=Ft,lt=Ft);return n&&ct.forEach(function(kv){return i(re,kv)}),Kt&&qr(re,ft),rt}function sn(re,K,le,Ce){if(typeof le=="object"&&le!==null&&le.type===F&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case P:e:{for(var rt=le.key,lt=K;lt!==null;){if(lt.key===rt){if(rt=le.type,rt===F){if(lt.tag===7){a(re,lt.sibling),K=h(lt,le.props.children),K.return=re,re=K;break e}}else if(lt.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===fe&&Jh(rt)===lt.type){a(re,lt.sibling),K=h(lt,le.props),K.ref=Oa(re,lt,le),K.return=re,re=K;break e}a(re,lt);break}else i(re,lt);lt=lt.sibling}le.type===F?(K=es(le.props.children,re.mode,Ce,le.key),K.return=re,re=K):(Ce=yl(le.type,le.key,le.props,null,re.mode,Ce),Ce.ref=Oa(re,K,le),Ce.return=re,re=Ce)}return b(re);case I:e:{for(lt=le.key;K!==null;){if(K.key===lt)if(K.tag===4&&K.stateNode.containerInfo===le.containerInfo&&K.stateNode.implementation===le.implementation){a(re,K.sibling),K=h(K,le.children||[]),K.return=re,re=K;break e}else{a(re,K);break}else i(re,K);K=K.sibling}K=ju(le,re.mode,Ce),K.return=re,re=K}return b(re);case fe:return lt=le._init,sn(re,K,lt(le._payload),Ce)}if(be(le))return $e(re,K,le,Ce);if(z(le))return Qe(re,K,le,Ce);$o(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,K!==null&&K.tag===6?(a(re,K.sibling),K=h(K,le),K.return=re,re=K):(a(re,K),K=Wu(le,re.mode,Ce),K.return=re,re=K),b(re)):a(re,K)}return sn}var Ls=Qh(!0),ep=Qh(!1),Zo=mr(null),Jo=null,Ns=null,eu=null;function tu(){eu=Ns=Jo=null}function nu(n){var i=Zo.current;Xt(Zo),n._currentValue=i}function iu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){Jo=n,eu=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function oi(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},Ns===null){if(Jo===null)throw Error(t(308));Ns=n,Jo.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return i}var Xr=null;function ru(n){Xr===null?Xr=[n]:Xr.push(n)}function tp(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,ru(i)):(a.next=h.next,h.next=a),i.interleaved=a,$i(n,c)}function $i(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var vr=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Dt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,$i(n,a)}return h=c.interleaved,h===null?(i.next=i,ru(c)):(i.next=h.next,h.next=i),c.interleaved=i,$i(n,a)}function Qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,bn(n,a)}}function ip(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function el(n,i,a,c){var h=n.updateQueue;vr=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var G=U,de=G.next;G.next=null,b===null?g=de:b.next=de,b=G;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==b&&(U===null?Me.firstBaseUpdate=de:U.next=de,Me.lastBaseUpdate=G))}if(g!==null){var Ee=h.baseState;b=0,Me=de=G=null,U=g;do{var ye=U.lane,qe=U.eventTime;if((c&ye)===ye){Me!==null&&(Me=Me.next={eventTime:qe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=n,Qe=U;switch(ye=i,qe=a,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Ee=$e.call(qe,Ee,ye);break e}Ee=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,ye=typeof $e=="function"?$e.call(qe,Ee,ye):$e,ye==null)break e;Ee=H({},Ee,ye);break e;case 2:vr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ye=h.effects,ye===null?h.effects=[U]:ye.push(U))}else qe={eventTime:qe,lane:ye,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(de=Me=qe,G=Ee):Me=Me.next=qe,b|=ye;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ye=U,U=ye.next,ye.next=null,h.lastBaseUpdate=ye,h.shared.pending=null}}while(!0);if(Me===null&&(G=Ee),h.baseState=G,h.firstBaseUpdate=de,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);$r|=b,n.lanes=b,n.memoizedState=Ee}}function rp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ba={},Li=mr(Ba),za=mr(Ba),Ha=mr(Ba);function Yr(n){if(n===Ba)throw Error(t(174));return n}function au(n,i){switch(jt(Ha,i),jt(za,n),jt(Li,Ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}Xt(Li),jt(Li,i)}function Is(){Xt(Li),Xt(za),Xt(Ha)}function sp(n){Yr(Ha.current);var i=Yr(Li.current),a=w(i,n.type);i!==a&&(jt(za,n),jt(Li,a))}function ou(n){za.current===n&&(Xt(Li),Xt(za))}var Jt=mr(0);function tl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function cu(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var nl=C.ReactCurrentDispatcher,uu=C.ReactCurrentBatchConfig,Kr=0,Qt=null,un=null,pn=null,il=!1,Va=!1,Ga=0,iv=0;function An(){throw Error(t(321))}function du(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vi(n[a],i[a]))return!1;return!0}function fu(n,i,a,c,h,g){if(Kr=g,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nl.current=n===null||n.memoizedState===null?ov:lv,n=a(c,h),Va){g=0;do{if(Va=!1,Ga=0,25<=g)throw Error(t(301));g+=1,pn=un=null,i.updateQueue=null,nl.current=cv,n=a(c,h)}while(Va)}if(nl.current=al,i=un!==null&&un.next!==null,Kr=0,pn=un=Qt=null,il=!1,i)throw Error(t(300));return n}function hu(){var n=Ga!==0;return Ga=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Qt.memoizedState=pn=n:pn=pn.next=n,pn}function li(){if(un===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=pn===null?Qt.memoizedState:pn.next;if(i!==null)pn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Qt.memoizedState=pn=n:pn=pn.next=n}return pn}function Wa(n,i){return typeof i=="function"?i(n):i}function pu(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var U=b=null,G=null,de=g;do{var Me=de.lane;if((Kr&Me)===Me)G!==null&&(G=G.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var Ee={lane:Me,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};G===null?(U=G=Ee,b=c):G=G.next=Ee,Qt.lanes|=Me,$r|=Me}de=de.next}while(de!==null&&de!==g);G===null?b=c:G.next=U,vi(c,i.memoizedState)||(Gn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Qt.lanes|=g,$r|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function mu(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);vi(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function ap(){}function op(n,i){var a=Qt,c=li(),h=i(),g=!vi(c.memoizedState,h);if(g&&(c.memoizedState=h,Gn=!0),c=c.queue,gu(up.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,ja(9,cp.bind(null,a,c,h,i),void 0,null),mn===null)throw Error(t(349));(Kr&30)!==0||lp(a,i,h)}return h}function lp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function cp(n,i,a,c){i.value=a,i.getSnapshot=c,dp(i)&&fp(n)}function up(n,i,a){return a(function(){dp(i)&&fp(n)})}function dp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vi(n,a)}catch{return!0}}function fp(n){var i=$i(n,1);i!==null&&wi(i,n,1,-1)}function hp(n){var i=Ni();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=av.bind(null,Qt,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function pp(){return li().memoizedState}function rl(n,i,a,c){var h=Ni();Qt.flags|=n,h.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function sl(n,i,a,c){var h=li();c=c===void 0?null:c;var g=void 0;if(un!==null){var b=un.memoizedState;if(g=b.destroy,c!==null&&du(c,b.deps)){h.memoizedState=ja(i,a,g,c);return}}Qt.flags|=n,h.memoizedState=ja(1|i,a,g,c)}function mp(n,i){return rl(8390656,8,n,i)}function gu(n,i){return sl(2048,8,n,i)}function gp(n,i){return sl(4,2,n,i)}function xp(n,i){return sl(4,4,n,i)}function vp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function _p(n,i,a){return a=a!=null?a.concat([n]):null,sl(4,4,vp.bind(null,i,n),a)}function xu(){}function yp(n,i){var a=li();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&du(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Sp(n,i){var a=li();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&du(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Mp(n,i,a){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=a):(vi(a,i)||(a=cn(),Qt.lanes|=a,$r|=a,n.baseState=!0),i)}function rv(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var c=uu.transition;uu.transition={};try{n(!1),i()}finally{Mt=a,uu.transition=c}}function wp(){return li().memoizedState}function sv(n,i,a){var c=wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Ep(n))bp(i,a);else if(a=tp(n,i,a,c),a!==null){var h=Fn();wi(a,n,c,h),Tp(a,i,c)}}function av(n,i,a){var c=wr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ep(n))bp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,U=g(b,a);if(h.hasEagerState=!0,h.eagerState=U,vi(U,b)){var G=i.interleaved;G===null?(h.next=h,ru(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=tp(n,i,h,c),a!==null&&(h=Fn(),wi(a,n,c,h),Tp(a,i,c))}}function Ep(n){var i=n.alternate;return n===Qt||i!==null&&i===Qt}function bp(n,i){Va=il=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Tp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,bn(n,a)}}var al={readContext:oi,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},ov={readContext:oi,useCallback:function(n,i){return Ni().memoizedState=[n,i===void 0?null:i],n},useContext:oi,useEffect:mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,rl(4194308,4,vp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return rl(4194308,4,n,i)},useInsertionEffect:function(n,i){return rl(4,2,n,i)},useMemo:function(n,i){var a=Ni();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ni();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=sv.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var i=Ni();return n={current:n},i.memoizedState=n},useState:hp,useDebugValue:xu,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=hp(!1),i=n[0];return n=rv.bind(null,n[1]),Ni().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Qt,h=Ni();if(Kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(Kr&30)!==0||lp(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,mp(up.bind(null,c,g,n),[n]),c.flags|=2048,ja(9,cp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ni(),i=mn.identifierPrefix;if(Kt){var a=Ki,c=Yi;a=(c&~(1<<32-Fe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=iv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},lv={readContext:oi,useCallback:yp,useContext:oi,useEffect:gu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:xp,useMemo:Sp,useReducer:pu,useRef:pp,useState:function(){return pu(Wa)},useDebugValue:xu,useDeferredValue:function(n){var i=li();return Mp(i,un.memoizedState,n)},useTransition:function(){var n=pu(Wa)[0],i=li().memoizedState;return[n,i]},useMutableSource:ap,useSyncExternalStore:op,useId:wp,unstable_isNewReconciler:!1},cv={readContext:oi,useCallback:yp,useContext:oi,useEffect:gu,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:xp,useMemo:Sp,useReducer:mu,useRef:pp,useState:function(){return mu(Wa)},useDebugValue:xu,useDeferredValue:function(n){var i=li();return un===null?i.memoizedState=n:Mp(i,un.memoizedState,n)},useTransition:function(){var n=mu(Wa)[0],i=li().memoizedState;return[n,i]},useMutableSource:ap,useSyncExternalStore:op,useId:wp,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=H({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function vu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:H({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ol={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Fn(),h=wr(n),g=Zi(c,h);g.payload=i,a!=null&&(g.callback=a),i=_r(n,g,h),i!==null&&(wi(i,n,h,c),Qo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Fn(),h=wr(n),g=Zi(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=_r(n,g,h),i!==null&&(wi(i,n,h,c),Qo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),c=wr(n),h=Zi(a,c);h.tag=2,i!=null&&(h.callback=i),i=_r(n,h,c),i!==null&&(wi(i,n,c,a),Qo(i,n,c))}};function Ap(n,i,a,c,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(h,g):!0}function Cp(n,i,a){var c=!1,h=gr,g=i.contextType;return typeof g=="object"&&g!==null?g=oi(g):(h=Vn(i)?Wr:Tn.current,c=i.contextTypes,g=(c=c!=null)?Ts(n,h):gr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Rp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function _u(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},su(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=oi(g):(g=Vn(i)?Wr:Tn.current,h.context=Ts(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(vu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ol.enqueueReplaceState(h,h.state,null),el(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ds(n,i){try{var a="",c=i;do a+=Ge(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function yu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Su(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var uv=typeof WeakMap=="function"?WeakMap:Map;function Lp(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){pl||(pl=!0,Uu=c),Su(n,i)},a}function Np(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Su(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Su(n,i),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Pp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new uv;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Ev.bind(null,n,i,a),i.then(n,n))}function Ip(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,_r(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var dv=C.ReactCurrentOwner,Gn=!1;function Un(n,i,a,c){i.child=n===null?ep(i,null,a,c):Ls(i,n.child,a,c)}function kp(n,i,a,c,h){a=a.render;var g=i.ref;return Ps(i,h),c=fu(n,i,a,c,g,h),a=hu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ji(n,i,h)):(Kt&&a&&Kc(i),i.flags|=1,Un(n,i,c,h),i.child)}function Up(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Gu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Fp(n,i,g,c,h)):(n=yl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(b,c)&&n.ref===i.ref)return Ji(n,i,h)}return i.flags|=1,n=br(g,c),n.ref=i.ref,n.return=i,i.child=n}function Fp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Na(g,c)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,Ji(n,i,h)}return Mu(n,i,a,c,h)}function Op(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Us,$n),$n|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,jt(Us,$n),$n|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,jt(Us,$n),$n|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,jt(Us,$n),$n|=c;return Un(n,i,h,a),i.child}function Bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Mu(n,i,a,c,h){var g=Vn(a)?Wr:Tn.current;return g=Ts(i,g),Ps(i,h),a=fu(n,i,a,c,g,h),c=hu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ji(n,i,h)):(Kt&&c&&Kc(i),i.flags|=1,Un(n,i,a,h),i.child)}function zp(n,i,a,c,h){if(Vn(a)){var g=!0;jo(i)}else g=!1;if(Ps(i,h),i.stateNode===null)cl(n,i),Cp(i,a,c),_u(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,U=i.memoizedProps;b.props=U;var G=b.context,de=a.contextType;typeof de=="object"&&de!==null?de=oi(de):(de=Vn(a)?Wr:Tn.current,de=Ts(i,de));var Me=a.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof b.getSnapshotBeforeUpdate=="function";Ee||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(U!==c||G!==de)&&Rp(i,b,c,de),vr=!1;var ye=i.memoizedState;b.state=ye,el(i,c,b,h),G=i.memoizedState,U!==c||ye!==G||Hn.current||vr?(typeof Me=="function"&&(vu(i,a,Me,c),G=i.memoizedState),(U=vr||Ap(i,a,U,c,ye,G,de))?(Ee||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),b.props=c,b.state=G,b.context=de,c=U):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,np(n,i),U=i.memoizedProps,de=i.type===i.elementType?U:yi(i.type,U),b.props=de,Ee=i.pendingProps,ye=b.context,G=a.contextType,typeof G=="object"&&G!==null?G=oi(G):(G=Vn(a)?Wr:Tn.current,G=Ts(i,G));var qe=a.getDerivedStateFromProps;(Me=typeof qe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(U!==Ee||ye!==G)&&Rp(i,b,c,G),vr=!1,ye=i.memoizedState,b.state=ye,el(i,c,b,h);var $e=i.memoizedState;U!==Ee||ye!==$e||Hn.current||vr?(typeof qe=="function"&&(vu(i,a,qe,c),$e=i.memoizedState),(de=vr||Ap(i,a,de,c,ye,$e,G)||!1)?(Me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,$e,G),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,$e,G)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),b.props=c,b.state=$e,b.context=G,c=de):(typeof b.componentDidUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return wu(n,i,a,c,g,h)}function wu(n,i,a,c,h,g){Bp(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&jh(i,a,!1),Ji(n,i,g);c=i.stateNode,dv.current=i;var U=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Ls(i,n.child,null,g),i.child=Ls(i,null,U,g)):Un(n,i,U,g),i.memoizedState=c.state,h&&jh(i,a,!0),i.child}function Hp(n){var i=n.stateNode;i.pendingContext?Gh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Gh(n,i.context,!1),au(n,i.containerInfo)}function Vp(n,i,a,c,h){return Rs(),Qc(h),i.flags|=256,Un(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function bu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,i,a){var c=i.pendingProps,h=Jt.current,g=!1,b=(i.flags&128)!==0,U;if((U=b)||(U=n!==null&&n.memoizedState===null?!1:(h&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),jt(Jt,h&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=Sl(b,c,0,null),n=es(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=bu(a),i.memoizedState=Eu,n):Tu(i,b));if(h=n.memoizedState,h!==null&&(U=h.dehydrated,U!==null))return fv(n,i,b,c,U,h,a);if(g){g=c.fallback,b=i.mode,h=n.child,U=h.sibling;var G={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=br(h,G),c.subtreeFlags=h.subtreeFlags&14680064),U!==null?g=br(U,g):(g=es(g,b,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=n.child.memoizedState,b=b===null?bu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return g=n.child,n=g.sibling,c=br(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Tu(n,i){return i=Sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ll(n,i,a,c){return c!==null&&Qc(c),Ls(i,n.child,null,a),n=Tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fv(n,i,a,c,h,g,b){if(a)return i.flags&256?(i.flags&=-257,c=yu(Error(t(422))),ll(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Sl({mode:"visible",children:c.children},h,0,null),g=es(g,h,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ls(i,n.child,null,b),i.child.memoizedState=bu(b),i.memoizedState=Eu,g);if((i.mode&1)===0)return ll(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var U=c.dgst;return c=U,g=Error(t(419)),c=yu(g,c,void 0),ll(n,i,b,c)}if(U=(b&n.childLanes)!==0,Gn||U){if(c=mn,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,$i(n,h),wi(c,n,h,-1))}return Vu(),c=yu(Error(t(421))),ll(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=bv.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Kn=pr(h.nextSibling),Yn=i,Kt=!0,_i=null,n!==null&&(si[ai++]=Yi,si[ai++]=Ki,si[ai++]=jr,Yi=n.id,Ki=n.overflow,jr=i),i=Tu(i,c.children),i.flags|=4096,i)}function Wp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),iu(n.return,i,a)}function Au(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function jp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Un(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wp(n,a,i);else if(n.tag===19)Wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(jt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&tl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Au(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&tl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Au(i,!0,a,null,g);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function hv(n,i,a){switch(i.tag){case 3:Hp(i),Rs();break;case 5:sp(i);break;case 1:Vn(i.type)&&jo(i);break;case 4:au(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;jt(Zo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(jt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Gp(n,i,a):(jt(Jt,Jt.current&1),n=Ji(n,i,a),n!==null?n.sibling:null);jt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return jp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),jt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Op(n,i,a)}return Ji(n,i,a)}var qp,Cu,Xp,Yp;qp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},Xp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Yr(Li.current);var g=null;switch(a){case"input":h=Ue(n,h),c=Ue(n,c),g=[];break;case"select":h=H({},h,{value:void 0}),c=H({},c,{value:void 0}),g=[];break;case"textarea":h=vt(n,h),c=vt(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Vo)}et(a,c);var b;a=null;for(de in h)if(!c.hasOwnProperty(de)&&h.hasOwnProperty(de)&&h[de]!=null)if(de==="style"){var U=h[de];for(b in U)U.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?g||(g=[]):(g=g||[]).push(de,null));for(de in c){var G=c[de];if(U=h!=null?h[de]:void 0,c.hasOwnProperty(de)&&G!==U&&(G!=null||U!=null))if(de==="style")if(U){for(b in U)!U.hasOwnProperty(b)||G&&G.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in G)G.hasOwnProperty(b)&&U[b]!==G[b]&&(a||(a={}),a[b]=G[b])}else a||(g||(g=[]),g.push(de,a)),a=G;else de==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(g=g||[]).push(de,G)):de==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(de,""+G):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(G!=null&&de==="onScroll"&&qt("scroll",n),g||U===G||(g=[])):(g=g||[]).push(de,G))}a&&(g=g||[]).push("style",a);var de=g;(i.updateQueue=de)&&(i.flags|=4)}},Yp=function(n,i,a,c){a!==c&&(i.flags|=4)};function qa(n,i){if(!Kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Cn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function pv(n,i,a){var c=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(i),null;case 1:return Vn(i.type)&&Wo(),Cn(i),null;case 3:return c=i.stateNode,Is(),Xt(Hn),Xt(Tn),cu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Bu(_i),_i=null))),Cu(n,i),Cn(i),null;case 5:ou(i);var h=Yr(Ha.current);if(a=i.type,n!==null&&i.stateNode!=null)Xp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Cn(i),null}if(n=Yr(Li.current),Ko(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ri]=i,c[Ua]=g,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(h=0;h<Ia.length;h++)qt(Ia[h],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":pt(c,g),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qt("invalid",c);break;case"textarea":W(c,g),qt("invalid",c)}et(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var U=g[b];b==="children"?typeof U=="string"?c.textContent!==U&&(g.suppressHydrationWarning!==!0&&Ho(c.textContent,U,n),h=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Ho(c.textContent,U,n),h=["children",""+U]):o.hasOwnProperty(b)&&U!=null&&b==="onScroll"&&qt("scroll",c)}switch(a){case"input":we(c),St(c,g,!0);break;case"textarea":we(c),Tt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Vo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Ri]=i,n[Ua]=c,qp(n,i,!1,!1),i.stateNode=n;e:{switch(b=ke(a,c),a){case"dialog":qt("cancel",n),qt("close",n),h=c;break;case"iframe":case"object":case"embed":qt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ia.length;h++)qt(Ia[h],n);h=c;break;case"source":qt("error",n),h=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),h=c;break;case"details":qt("toggle",n),h=c;break;case"input":pt(n,c),h=Ue(n,c),qt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=H({},c,{value:void 0}),qt("invalid",n);break;case"textarea":W(n,c),h=vt(n,c),qt("invalid",n);break;default:h=c}et(a,h),U=h;for(g in U)if(U.hasOwnProperty(g)){var G=U[g];g==="style"?ve(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&oe(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&he(n,G):typeof G=="number"&&he(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&qt("scroll",n):G!=null&&B(n,g,G,b))}switch(a){case"input":we(n),St(n,c,!1);break;case"textarea":we(n),Tt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ue(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?st(n,!!c.multiple,g,!1):c.defaultValue!=null&&st(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Vo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Cn(i),null;case 6:if(n&&i.stateNode!=null)Yp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(Ha.current),Yr(Li.current),Ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ri]=i,(g=c.nodeValue!==a)&&(n=Yn,n!==null))switch(n.tag){case 3:Ho(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ri]=i,i.stateNode=c}return Cn(i),null;case 13:if(Xt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&Kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Zh(),Rs(),i.flags|=98560,g=!1;else if(g=Ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ri]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Cn(i),g=!1}else _i!==null&&(Bu(_i),_i=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?dn===0&&(dn=3):Vu())),i.updateQueue!==null&&(i.flags|=4),Cn(i),null);case 4:return Is(),Cu(n,i),n===null&&Da(i.stateNode.containerInfo),Cn(i),null;case 10:return nu(i.type._context),Cn(i),null;case 17:return Vn(i.type)&&Wo(),Cn(i),null;case 19:if(Xt(Jt),g=i.memoizedState,g===null)return Cn(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)qa(g,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=tl(n),b!==null){for(i.flags|=128,qa(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return jt(Jt,Jt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>Fs&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304)}else{if(!c)if(n=tl(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Kt)return Cn(i),null}else 2*Zt()-g.renderingStartTime>Fs&&a!==1073741824&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,a=Jt.current,jt(Jt,c?a&1|2:a&1),i):(Cn(i),null);case 22:case 23:return Hu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?($n&1073741824)!==0&&(Cn(i),i.subtreeFlags&6&&(i.flags|=8192)):Cn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function mv(n,i){switch($c(i),i.tag){case 1:return Vn(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Is(),Xt(Hn),Xt(Tn),cu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ou(i),null;case 13:if(Xt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Jt),null;case 4:return Is(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var ul=!1,Rn=!1,gv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(n,i,c)}else a.current=null}function Ru(n,i,a){try{a()}catch(c){nn(n,i,c)}}var Kp=!1;function xv(n,i){if(Hc=Lo,n=Ah(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,U=-1,G=-1,de=0,Me=0,Ee=n,ye=null;t:for(;;){for(var qe;Ee!==a||h!==0&&Ee.nodeType!==3||(U=b+h),Ee!==g||c!==0&&Ee.nodeType!==3||(G=b+c),Ee.nodeType===3&&(b+=Ee.nodeValue.length),(qe=Ee.firstChild)!==null;)ye=Ee,Ee=qe;for(;;){if(Ee===n)break t;if(ye===a&&++de===h&&(U=b),ye===g&&++Me===c&&(G=b),(qe=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=qe}a=U===-1||G===-1?null:{start:U,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Lo=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,sn=$e.memoizedState,re=i.stateNode,K=re.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:yi(i.type,Qe),sn);re.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){nn(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return $e=Kp,Kp=!1,$e}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Ru(i,a,g)}h=h.next}while(h!==c)}}function dl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Lu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function $p(n){var i=n.alternate;i!==null&&(n.alternate=null,$p(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ri],delete i[Ua],delete i[qc],delete i[Qx],delete i[ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vo));else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}var yn=null,Si=!1;function yr(n,i,a){for(a=a.child;a!==null;)Qp(n,i,a),a=a.sibling}function Qp(n,i,a){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(ie,a)}catch{}switch(a.tag){case 5:Rn||ks(a,i);case 6:var c=yn,h=Si;yn=null,yr(n,i,a),yn=c,Si=h,yn!==null&&(Si?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(Si?(n=yn,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),ba(n)):jc(yn,a.stateNode));break;case 4:c=yn,h=Si,yn=a.stateNode.containerInfo,Si=!0,yr(n,i,a),yn=c,Si=h;break;case 0:case 11:case 14:case 15:if(!Rn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Ru(a,i,b),h=h.next}while(h!==c)}yr(n,i,a);break;case 1:if(!Rn&&(ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){nn(a,i,U)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(Rn=(c=Rn)||a.memoizedState!==null,yr(n,i,a),Rn=c):yr(n,i,a);break;default:yr(n,i,a)}}function em(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new gv),i.forEach(function(c){var h=Tv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Mi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,b=i,U=b;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,Si=!1;break e;case 3:yn=U.stateNode.containerInfo,Si=!0;break e;case 4:yn=U.stateNode.containerInfo,Si=!0;break e}U=U.return}if(yn===null)throw Error(t(160));Qp(g,b,h),yn=null,Si=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(de){nn(h,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)tm(i,n),i=i.sibling}function tm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Pi(n),c&4){try{Xa(3,n,n.return),dl(3,n)}catch(Qe){nn(n,n.return,Qe)}try{Xa(5,n,n.return)}catch(Qe){nn(n,n.return,Qe)}}break;case 1:Mi(i,n),Pi(n),c&512&&a!==null&&ks(a,a.return);break;case 5:if(Mi(i,n),Pi(n),c&512&&a!==null&&ks(a,a.return),n.flags&32){var h=n.stateNode;try{he(h,"")}catch(Qe){nn(n,n.return,Qe)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,U=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&yt(h,g),ke(U,b);var de=ke(U,g);for(b=0;b<G.length;b+=2){var Me=G[b],Ee=G[b+1];Me==="style"?ve(h,Ee):Me==="dangerouslySetInnerHTML"?oe(h,Ee):Me==="children"?he(h,Ee):B(h,Me,Ee,de)}switch(U){case"input":ut(h,g);break;case"textarea":Gt(h,g);break;case"select":var ye=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var qe=g.value;qe!=null?st(h,!!g.multiple,qe,!1):ye!==!!g.multiple&&(g.defaultValue!=null?st(h,!!g.multiple,g.defaultValue,!0):st(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ua]=g}catch(Qe){nn(n,n.return,Qe)}}break;case 6:if(Mi(i,n),Pi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Qe){nn(n,n.return,Qe)}}break;case 3:if(Mi(i,n),Pi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(Qe){nn(n,n.return,Qe)}break;case 4:Mi(i,n),Pi(n);break;case 13:Mi(i,n),Pi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(ku=Zt())),c&4&&em(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Rn=(de=Rn)||Me,Mi(i,n),Rn=de):Mi(i,n),Pi(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Me&&(n.mode&1)!==0)for(Ye=n,Me=n.child;Me!==null;){for(Ee=Ye=Me;Ye!==null;){switch(ye=Ye,qe=ye.child,ye.tag){case 0:case 11:case 14:case 15:Xa(4,ye,ye.return);break;case 1:ks(ye,ye.return);var $e=ye.stateNode;if(typeof $e.componentWillUnmount=="function"){c=ye,a=ye.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Qe){nn(c,a,Qe)}}break;case 5:ks(ye,ye.return);break;case 22:if(ye.memoizedState!==null){rm(Ee);continue}}qe!==null?(qe.return=ye,Ye=qe):rm(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{h=Ee.stateNode,de?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Ee.stateNode,G=Ee.memoizedProps.style,b=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=me("display",b))}catch(Qe){nn(n,n.return,Qe)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=de?"":Ee.memoizedProps}catch(Qe){nn(n,n.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:Mi(i,n),Pi(n),c&4&&em(n);break;case 21:break;default:Mi(i,n),Pi(n)}}function Pi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Zp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(he(h,""),c.flags&=-33);var g=Jp(n);Pu(n,g,h);break;case 3:case 4:var b=c.stateNode.containerInfo,U=Jp(n);Nu(n,U,b);break;default:throw Error(t(161))}}catch(G){nn(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function vv(n,i,a){Ye=n,nm(n)}function nm(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var h=Ye,g=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||ul;if(!b){var U=h.alternate,G=U!==null&&U.memoizedState!==null||Rn;U=ul;var de=Rn;if(ul=b,(Rn=G)&&!de)for(Ye=h;Ye!==null;)b=Ye,G=b.child,b.tag===22&&b.memoizedState!==null?sm(h):G!==null?(G.return=b,Ye=G):sm(h);for(;g!==null;)Ye=g,nm(g),g=g.sibling;Ye=h,ul=U,Rn=de}im(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ye=g):im(n)}}function im(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rn||dl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&rp(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}rp(i,b,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Me=de.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&ba(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||i.flags&512&&Lu(i)}catch(ye){nn(i,i.return,ye)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function rm(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function sm(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{dl(4,i)}catch(G){nn(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){nn(i,h,G)}}var g=i.return;try{Lu(i)}catch(G){nn(i,g,G)}break;case 5:var b=i.return;try{Lu(i)}catch(G){nn(i,b,G)}}}catch(G){nn(i,i.return,G)}if(i===n){Ye=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ye=U;break}Ye=i.return}}var _v=Math.ceil,fl=C.ReactCurrentDispatcher,Iu=C.ReactCurrentOwner,ci=C.ReactCurrentBatchConfig,Dt=0,mn=null,an=null,Sn=0,$n=0,Us=mr(0),dn=0,Ya=null,$r=0,hl=0,Du=0,Ka=null,Wn=null,ku=0,Fs=1/0,Qi=null,pl=!1,Uu=null,Sr=null,ml=!1,Mr=null,gl=0,$a=0,Fu=null,xl=-1,vl=0;function Fn(){return(Dt&6)!==0?Zt():xl!==-1?xl:xl=Zt()}function wr(n){return(n.mode&1)===0?1:(Dt&2)!==0&&Sn!==0?Sn&-Sn:nv.transition!==null?(vl===0&&(vl=cn()),vl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:oh(n.type)),n)}function wi(n,i,a,c){if(50<$a)throw $a=0,Fu=null,Error(t(185));rn(n,a,c),((Dt&2)===0||n!==mn)&&(n===mn&&((Dt&2)===0&&(hl|=a),dn===4&&Er(n,Sn)),jn(n,c),a===1&&Dt===0&&(i.mode&1)===0&&(Fs=Zt()+500,qo&&xr()))}function jn(n,i){var a=n.callbackNode;Wt(n,i);var c=At(n,n===mn?Sn:0);if(c===0)a!==null&&va(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&va(a),i===1)n.tag===0?tv(om.bind(null,n)):qh(om.bind(null,n)),Zx(function(){(Dt&6)===0&&xr()}),a=null;else{switch(pi(c)){case 1:a=_a;break;case 4:a=ya;break;case 16:a=A;break;case 536870912:a=ce;break;default:a=A}a=mm(a,am.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function am(n,i){if(xl=-1,vl=0,(Dt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Os()&&n.callbackNode!==a)return null;var c=At(n,n===mn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=_l(n,c);else{i=c;var h=Dt;Dt|=2;var g=cm();(mn!==n||Sn!==i)&&(Qi=null,Fs=Zt()+500,Jr(n,i));do try{Mv();break}catch(U){lm(n,U)}while(!0);tu(),fl.current=g,Dt=h,an!==null?i=0:(mn=null,Sn=0,i=dn)}if(i!==0){if(i===2&&(h=Ot(n),h!==0&&(c=h,i=Ou(n,h))),i===1)throw a=Ya,Jr(n,0),Er(n,c),jn(n,Zt()),a;if(i===6)Er(n,c);else{if(h=n.current.alternate,(c&30)===0&&!yv(h)&&(i=_l(n,c),i===2&&(g=Ot(n),g!==0&&(c=g,i=Ou(n,g))),i===1))throw a=Ya,Jr(n,0),Er(n,c),jn(n,Zt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Qr(n,Wn,Qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=ku+500-Zt(),10<i)){if(At(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Wc(Qr.bind(null,n,Wn,Qi),i);break}Qr(n,Wn,Qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-Fe(c);g=1<<b,b=i[b],b>h&&(h=b),c&=~g}if(c=h,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_v(c/1960))-c,10<c){n.timeoutHandle=Wc(Qr.bind(null,n,Wn,Qi),c);break}Qr(n,Wn,Qi);break;case 5:Qr(n,Wn,Qi);break;default:throw Error(t(329))}}}return jn(n,Zt()),n.callbackNode===a?am.bind(null,n):null}function Ou(n,i){var a=Ka;return n.current.memoizedState.isDehydrated&&(Jr(n,i).flags|=256),n=_l(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&Bu(i)),n}function Bu(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function yv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!vi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Du,i&=~hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Fe(i),c=1<<a;n[a]=-1,i&=~c}}function om(n){if((Dt&6)!==0)throw Error(t(327));Os();var i=At(n,0);if((i&1)===0)return jn(n,Zt()),null;var a=_l(n,i);if(n.tag!==0&&a===2){var c=Ot(n);c!==0&&(i=c,a=Ou(n,c))}if(a===1)throw a=Ya,Jr(n,0),Er(n,i),jn(n,Zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qr(n,Wn,Qi),jn(n,Zt()),null}function zu(n,i){var a=Dt;Dt|=1;try{return n(i)}finally{Dt=a,Dt===0&&(Fs=Zt()+500,qo&&xr())}}function Zr(n){Mr!==null&&Mr.tag===0&&(Dt&6)===0&&Os();var i=Dt;Dt|=1;var a=ci.transition,c=Mt;try{if(ci.transition=null,Mt=1,n)return n()}finally{Mt=c,ci.transition=a,Dt=i,(Dt&6)===0&&xr()}}function Hu(){$n=Us.current,Xt(Us)}function Jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$x(a)),an!==null)for(a=an.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Wo();break;case 3:Is(),Xt(Hn),Xt(Tn),cu();break;case 5:ou(c);break;case 4:Is();break;case 13:Xt(Jt);break;case 19:Xt(Jt);break;case 10:nu(c.type._context);break;case 22:case 23:Hu()}a=a.return}if(mn=n,an=n=br(n.current,null),Sn=$n=i,dn=0,Ya=null,Du=hl=$r=0,Wn=Ka=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,c.next=b}a.pending=c}Xr=null}return n}function lm(n,i){do{var a=an;try{if(tu(),nl.current=al,il){for(var c=Qt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}il=!1}if(Kr=0,pn=un=Qt=null,Va=!1,Ga=0,Iu.current=null,a===null||a.return===null){dn=1,Ya=i,an=null;break}e:{var g=n,b=a.return,U=a,G=i;if(i=Sn,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=G,Me=U,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var qe=Ip(b);if(qe!==null){qe.flags&=-257,Dp(qe,b,U,g,i),qe.mode&1&&Pp(g,de,i),i=qe,G=de;var $e=i.updateQueue;if($e===null){var Qe=new Set;Qe.add(G),i.updateQueue=Qe}else $e.add(G);break e}else{if((i&1)===0){Pp(g,de,i),Vu();break e}G=Error(t(426))}}else if(Kt&&U.mode&1){var sn=Ip(b);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Dp(sn,b,U,g,i),Qc(Ds(G,U));break e}}g=G=Ds(G,U),dn!==4&&(dn=2),Ka===null?Ka=[g]:Ka.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var re=Lp(g,G,i);ip(g,re);break e;case 1:U=G;var K=g.type,le=g.stateNode;if((g.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Sr===null||!Sr.has(le)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=Np(g,U,i);ip(g,Ce);break e}}g=g.return}while(g!==null)}dm(a)}catch(rt){i=rt,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function cm(){var n=fl.current;return fl.current=al,n===null?al:n}function Vu(){(dn===0||dn===3||dn===2)&&(dn=4),mn===null||($r&268435455)===0&&(hl&268435455)===0||Er(mn,Sn)}function _l(n,i){var a=Dt;Dt|=2;var c=cm();(mn!==n||Sn!==i)&&(Qi=null,Jr(n,i));do try{Sv();break}catch(h){lm(n,h)}while(!0);if(tu(),Dt=a,fl.current=c,an!==null)throw Error(t(261));return mn=null,Sn=0,dn}function Sv(){for(;an!==null;)um(an)}function Mv(){for(;an!==null&&!Co();)um(an)}function um(n){var i=pm(n.alternate,n,$n);n.memoizedProps=n.pendingProps,i===null?dm(n):an=i,Iu.current=null}function dm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=pv(a,i,$n),a!==null){an=a;return}}else{if(a=mv(a,i),a!==null){a.flags&=32767,an=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=n}while(i!==null);dn===0&&(dn=5)}function Qr(n,i,a){var c=Mt,h=ci.transition;try{ci.transition=null,Mt=1,wv(n,i,a,c)}finally{ci.transition=h,Mt=c}return null}function wv(n,i,a,c){do Os();while(Mr!==null);if((Dt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ct(n,g),n===mn&&(an=mn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ml||(ml=!0,mm(A,function(){return Os(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ci.transition,ci.transition=null;var b=Mt;Mt=1;var U=Dt;Dt|=4,Iu.current=null,xv(n,a),tm(a,n),Gx(Vc),Lo=!!Hc,Vc=Hc=null,n.current=a,vv(a),yc(),Dt=U,Mt=b,ci.transition=g}else n.current=a;if(ml&&(ml=!1,Mr=n,gl=h),g=n.pendingLanes,g===0&&(Sr=null),ze(a.stateNode),jn(n,Zt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(pl)throw pl=!1,n=Uu,Uu=null,n;return(gl&1)!==0&&n.tag!==0&&Os(),g=n.pendingLanes,(g&1)!==0?n===Fu?$a++:($a=0,Fu=n):$a=0,xr(),null}function Os(){if(Mr!==null){var n=pi(gl),i=ci.transition,a=Mt;try{if(ci.transition=null,Mt=16>n?16:n,Mr===null)var c=!1;else{if(n=Mr,Mr=null,gl=0,(Dt&6)!==0)throw Error(t(331));var h=Dt;for(Dt|=4,Ye=n.current;Ye!==null;){var g=Ye,b=g.child;if((Ye.flags&16)!==0){var U=g.deletions;if(U!==null){for(var G=0;G<U.length;G++){var de=U[G];for(Ye=de;Ye!==null;){var Me=Ye;switch(Me.tag){case 0:case 11:case 15:Xa(8,Me,g)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,Ye=Ee;else for(;Ye!==null;){Me=Ye;var ye=Me.sibling,qe=Me.return;if($p(Me),Me===de){Ye=null;break}if(ye!==null){ye.return=qe,Ye=ye;break}Ye=qe}}}var $e=g.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var sn=Qe.sibling;Qe.sibling=null,Qe=sn}while(Qe!==null)}}Ye=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Ye=b;else e:for(;Ye!==null;){if(g=Ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var re=g.sibling;if(re!==null){re.return=g.return,Ye=re;break e}Ye=g.return}}var K=n.current;for(Ye=K;Ye!==null;){b=Ye;var le=b.child;if((b.subtreeFlags&2064)!==0&&le!==null)le.return=b,Ye=le;else e:for(b=K;Ye!==null;){if(U=Ye,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:dl(9,U)}}catch(rt){nn(U,U.return,rt)}if(U===b){Ye=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,Ye=Ce;break e}Ye=U.return}}if(Dt=h,xr(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(ie,n)}catch{}c=!0}return c}finally{Mt=a,ci.transition=i}}return!1}function fm(n,i,a){i=Ds(a,i),i=Lp(n,i,1),n=_r(n,i,1),i=Fn(),n!==null&&(rn(n,1,i),jn(n,i))}function nn(n,i,a){if(n.tag===3)fm(n,n,a);else for(;i!==null;){if(i.tag===3){fm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){n=Ds(a,n),n=Np(i,n,1),i=_r(i,n,1),n=Fn(),i!==null&&(rn(i,1,n),jn(i,n));break}}i=i.return}}function Ev(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(Sn&a)===a&&(dn===4||dn===3&&(Sn&130023424)===Sn&&500>Zt()-ku?Jr(n,0):Du|=a),jn(n,i)}function hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var a=Fn();n=$i(n,i),n!==null&&(rn(n,i,a),jn(n,a))}function bv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),hm(n,a)}function Tv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),hm(n,a)}var pm;pm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Hn.current)Gn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gn=!1,hv(n,i,a);Gn=(n.flags&131072)!==0}else Gn=!1,Kt&&(i.flags&1048576)!==0&&Xh(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cl(n,i),n=i.pendingProps;var h=Ts(i,Tn.current);Ps(i,a),h=fu(null,i,c,n,h,a);var g=hu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Vn(c)?(g=!0,jo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,su(i),h.updater=ol,i.stateNode=h,h._reactInternals=i,_u(i,c,n,a),i=wu(null,i,c,!0,g,a)):(i.tag=0,Kt&&g&&Kc(i),Un(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(cl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Cv(c),n=yi(c,n),h){case 0:i=Mu(null,i,c,n,a);break e;case 1:i=zp(null,i,c,n,a);break e;case 11:i=kp(null,i,c,n,a);break e;case 14:i=Up(null,i,c,yi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),Mu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),zp(n,i,c,h,a);case 3:e:{if(Hp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,np(n,i),el(i,c,null,a);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ds(Error(t(423)),i),i=Vp(n,i,c,a,h);break e}else if(c!==h){h=Ds(Error(t(424)),i),i=Vp(n,i,c,a,h);break e}else for(Kn=pr(i.stateNode.containerInfo.firstChild),Yn=i,Kt=!0,_i=null,a=ep(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===h){i=Ji(n,i,a);break e}Un(n,i,c,a)}i=i.child}return i;case 5:return sp(i),n===null&&Jc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,Gc(c,h)?b=null:g!==null&&Gc(c,g)&&(i.flags|=32),Bp(n,i),Un(n,i,b,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return Gp(n,i,a);case 4:return au(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ls(i,null,c,a):Un(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),kp(n,i,c,h,a);case 7:return Un(n,i,i.pendingProps,a),i.child;case 8:return Un(n,i,i.pendingProps.children,a),i.child;case 12:return Un(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,jt(Zo,c._currentValue),c._currentValue=b,g!==null)if(vi(g.value,b)){if(g.children===h.children&&!Hn.current){i=Ji(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){b=g.child;for(var G=U.firstContext;G!==null;){if(G.context===c){if(g.tag===1){G=Zi(-1,a&-a),G.tag=2;var de=g.updateQueue;if(de!==null){de=de.shared;var Me=de.pending;Me===null?G.next=G:(G.next=Me.next,Me.next=G),de.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),iu(g.return,a,i),U.lanes|=a;break}G=G.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=a,U=b.alternate,U!==null&&(U.lanes|=a),iu(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}Un(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ps(i,a),h=oi(h),c=c(h),i.flags|=1,Un(n,i,c,a),i.child;case 14:return c=i.type,h=yi(c,i.pendingProps),h=yi(c.type,h),Up(n,i,c,h,a);case 15:return Fp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),cl(n,i),i.tag=1,Vn(c)?(n=!0,jo(i)):n=!1,Ps(i,a),Cp(i,c,h),_u(i,c,h,a),wu(null,i,c,!0,n,a);case 19:return jp(n,i,a);case 22:return Op(n,i,a)}throw Error(t(156,i.tag))};function mm(n,i){return Vr(n,i)}function Av(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(n,i,a,c){return new Av(n,i,a,c)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Cv(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===Z)return 14}return 2}function br(n,i){var a=n.alternate;return a===null?(a=ui(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function yl(n,i,a,c,h,g){var b=2;if(c=n,typeof n=="function")Gu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case F:return es(a.children,h,g,i);case E:b=8,h|=8;break;case D:return n=ui(12,a,i,h|2),n.elementType=D,n.lanes=g,n;case te:return n=ui(13,a,i,h),n.elementType=te,n.lanes=g,n;case q:return n=ui(19,a,i,h),n.elementType=q,n.lanes=g,n;case Q:return Sl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:b=10;break e;case j:b=9;break e;case $:b=11;break e;case Z:b=14;break e;case fe:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ui(b,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function es(n,i,a,c){return n=ui(7,n,c,i),n.lanes=a,n}function Sl(n,i,a,c){return n=ui(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=ui(6,n,null,i),n.lanes=a,n}function ju(n,i,a){return i=ui(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Rv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=je(0),this.expirationTimes=je(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function qu(n,i,a,c,h,g,b,U,G){return n=new Rv(n,i,a,U,G),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ui(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(g),n}function Lv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function gm(n){if(!n)return gr;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Vn(a))return Wh(n,a,i)}return i}function xm(n,i,a,c,h,g,b,U,G){return n=qu(a,c,!0,n,h,g,b,U,G),n.context=gm(null),a=n.current,c=Fn(),h=wr(a),g=Zi(c,h),g.callback=i??null,_r(a,g,h),n.current.lanes=h,rn(n,h,c),jn(n,c),n}function Ml(n,i,a,c){var h=i.current,g=Fn(),b=wr(h);return a=gm(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(g,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=_r(h,i,b),n!==null&&(wi(n,h,b,g),Qo(n,h,b)),b}function wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Xu(n,i){vm(n,i),(n=n.alternate)&&vm(n,i)}function Nv(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yu(n){this._internalRoot=n}El.prototype.render=Yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ml(n,i,null,null)},El.prototype.unmount=Yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zr(function(){Ml(null,n,null,null)}),i[qi]=null}};function El(n){this._internalRoot=n}El.prototype.unstable_scheduleHydration=function(n){if(n){var i=mi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<dr.length&&i!==0&&i<dr[a].priority;a++);dr.splice(a,0,n),a===0&&sh(n)}};function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function Pv(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var de=wl(b);g.call(de)}}var b=xm(i,c,n,0,null,!1,!1,"",ym);return n._reactRootContainer=b,n[qi]=b.current,Da(n.nodeType===8?n.parentNode:n),Zr(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var U=c;c=function(){var de=wl(G);U.call(de)}}var G=qu(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=G,n[qi]=G.current,Da(n.nodeType===8?n.parentNode:n),Zr(function(){Ml(i,G,a,c)}),G}function Tl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var U=h;h=function(){var G=wl(b);U.call(G)}}Ml(i,b,n,h)}else b=Pv(a,i,n,h,c);return wl(b)}ji=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Xe(i.pendingLanes);a!==0&&(bn(i,a|1),jn(i,Zt()),(Dt&6)===0&&(Fs=Zt()+500,xr()))}break;case 13:Zr(function(){var c=$i(n,1);if(c!==null){var h=Fn();wi(c,n,1,h)}}),Xu(n,1)}},Ut=function(n){if(n.tag===13){var i=$i(n,134217728);if(i!==null){var a=Fn();wi(i,n,134217728,a)}Xu(n,134217728)}},Yt=function(n){if(n.tag===13){var i=wr(n),a=$i(n,i);if(a!==null){var c=Fn();wi(a,n,i,c)}Xu(n,i)}},mi=function(){return Mt},Bt=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},at=function(n,i,a){switch(i){case"input":if(ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Go(c);if(!h)throw Error(t(90));ot(c),ut(c,h)}}}break;case"textarea":Gt(n,a);break;case"select":i=a.value,i!=null&&st(n,!!a.multiple,i,!1)}},Ve=zu,_e=Zr;var Iv={usingClientEntryPoint:!1,Events:[Fa,Es,Go,ge,Ie,zu]},Za={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dv={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Hr(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{ie=Al.inject(Dv),ee=Al}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv,qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(t(200));return Lv(n,i,null,a)},qn.createRoot=function(n,i){if(!Ku(n))throw Error(t(299));var a=!1,c="",h=_m;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=qu(n,1,!1,null,null,a,!1,c,h),n[qi]=i.current,Da(n.nodeType===8?n.parentNode:n),new Yu(i)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Hr(i),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return Zr(n)},qn.hydrate=function(n,i,a){if(!bl(i))throw Error(t(200));return Tl(null,n,i,!0,a)},qn.hydrateRoot=function(n,i,a){if(!Ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",b=_m;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=xm(i,null,n,1,a??null,h,!1,g,b),n[qi]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new El(i)},qn.render=function(n,i,a){if(!bl(i))throw Error(t(200));return Tl(null,n,i,!1,a)},qn.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){Tl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},qn.unstable_batchedUpdates=zu,qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!bl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Tl(n,i,a,!1,c)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Cm;function Z0(){if(Cm)return Ju.exports;Cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ju.exports=Gv(),Ju.exports}var Rm;function Wv(){if(Rm)return Cl;Rm=1;var s=Z0();return Cl.createRoot=s.createRoot,Cl.hydrateRoot=s.hydrateRoot,Cl}var jv=Wv();const qv=K0(jv);Z0();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},po.apply(null,arguments)}var Dr;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Dr||(Dr={}));const Lm="popstate";function Xv(s){s===void 0&&(s={});function e(r,o){let{pathname:l,search:u,hash:d}=r.location;return Fd("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:ac(o)}return Kv(e,t,null,s)}function ln(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function J0(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yv(){return Math.random().toString(36).substr(2,8)}function Nm(s,e){return{usr:s.state,key:s.key,idx:e}}function Fd(s,e,t,r){return t===void 0&&(t=null),po({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?da(e):e,{state:t,key:e&&e.key||r||Yv()})}function ac(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function da(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function Kv(s,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,u=o.history,d=Dr.Pop,f=null,m=v();m==null&&(m=0,u.replaceState(po({},u.state,{idx:m}),""));function v(){return(u.state||{idx:null}).idx}function y(){d=Dr.Pop;let S=v(),_=S==null?null:S-m;m=S,f&&f({action:d,location:R.location,delta:_})}function x(S,_){d=Dr.Push;let N=Fd(R.location,S,_);m=v()+1;let B=Nm(N,m),C=R.createHref(N);try{u.pushState(B,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(C)}l&&f&&f({action:d,location:R.location,delta:1})}function M(S,_){d=Dr.Replace;let N=Fd(R.location,S,_);m=v();let B=Nm(N,m),C=R.createHref(N);u.replaceState(B,"",C),l&&f&&f({action:d,location:R.location,delta:0})}function T(S){let _=o.location.origin!=="null"?o.location.origin:o.location.href,N=typeof S=="string"?S:ac(S);return N=N.replace(/ $/,"%20"),ln(_,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,_)}let R={get action(){return d},get location(){return s(o,u)},listen(S){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(Lm,y),f=S,()=>{o.removeEventListener(Lm,y),f=null}},createHref(S){return e(o,S)},createURL:T,encodeLocation(S){let _=T(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(S){return u.go(S)}};return R}var Pm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Pm||(Pm={}));function $v(s,e,t){return t===void 0&&(t="/"),Zv(s,e,t)}function Zv(s,e,t,r){let o=typeof e=="string"?da(e):e,l=Df(o.pathname||"/",t);if(l==null)return null;let u=Q0(s);Jv(u);let d=null,f=u_(l);for(let m=0;d==null&&m<u.length;++m)d=o_(u[m],f);return d}function Q0(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,u,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};f.relativePath.startsWith("/")&&(ln(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let m=kr([r,f.relativePath]),v=t.concat(f);l.children&&l.children.length>0&&(ln(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Q0(l.children,e,v,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:s_(m,l.index),routesMeta:v})};return s.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let f of eg(l.path))o(l,u,f)}),e}function eg(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let u=eg(r.join("/")),d=[];return d.push(...u.map(f=>f===""?l:[l,f].join("/"))),o&&d.push(...u),d.map(f=>s.startsWith("/")&&f===""?"/":f)}function Jv(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:a_(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Qv=/^:[\w-]+$/,e_=3,t_=2,n_=1,i_=10,r_=-2,Im=s=>s==="*";function s_(s,e){let t=s.split("/"),r=t.length;return t.some(Im)&&(r+=r_),e&&(r+=t_),t.filter(o=>!Im(o)).reduce((o,l)=>o+(Qv.test(l)?e_:l===""?n_:i_),r)}function a_(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function o_(s,e,t){let{routesMeta:r}=s,o={},l="/",u=[];for(let d=0;d<r.length;++d){let f=r[d],m=d===r.length-1,v=l==="/"?e:e.slice(l.length)||"/",y=l_({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},v),x=f.route;if(!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:kr([l,y.pathname]),pathnameBase:h_(kr([l,y.pathnameBase])),route:x}),y.pathnameBase!=="/"&&(l=kr([l,y.pathnameBase]))}return u}function l_(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=c_(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((m,v,y)=>{let{paramName:x,isOptional:M}=v;if(x==="*"){let R=d[y]||"";u=l.slice(0,l.length-R.length).replace(/(.)\/+$/,"$1")}const T=d[y];return M&&!T?m[x]=void 0:m[x]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:s}}function c_(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),J0(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function u_(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return J0(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function Df(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}function d_(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof s=="string"?da(s):s,l;return t?(t=ig(t),t.startsWith("/")?l=Dm(t.substring(1),"/"):l=Dm(t,e)):l=e,{pathname:l,search:p_(r),hash:m_(o)}}function Dm(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function td(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f_(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function tg(s,e){let t=f_(s);return e?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function ng(s,e,t,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=da(s):(o=po({},s),ln(!o.pathname||!o.pathname.includes("?"),td("?","pathname","search",o)),ln(!o.pathname||!o.pathname.includes("#"),td("#","pathname","hash",o)),ln(!o.search||!o.search.includes("#"),td("#","search","hash",o)));let l=s===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let y=e.length-1;if(!r&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),y-=1;o.pathname=x.join("/")}d=y>=0?e[y]:"/"}let f=d_(o,d),m=u&&u!=="/"&&u.endsWith("/"),v=(l||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||v)&&(f.pathname+="/"),f}const ig=s=>s.replace(/\/\/+/g,"/"),kr=s=>ig(s.join("/")),h_=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),p_=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,m_=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function g_(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const rg=["post","put","patch","delete"];new Set(rg);const x_=["get",...rg];new Set(x_);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},mo.apply(null,arguments)}const kf=xe.createContext(null),v_=xe.createContext(null),fs=xe.createContext(null),pc=xe.createContext(null),hs=xe.createContext({outlet:null,matches:[],isDataRoute:!1}),sg=xe.createContext(null);function __(s,e){let{relative:t}=e===void 0?{}:e;Mo()||ln(!1);let{basename:r,navigator:o}=xe.useContext(fs),{hash:l,pathname:u,search:d}=og(s,{relative:t}),f=u;return r!=="/"&&(f=u==="/"?r:kr([r,u])),o.createHref({pathname:f,search:d,hash:l})}function Mo(){return xe.useContext(pc)!=null}function fa(){return Mo()||ln(!1),xe.useContext(pc).location}function ag(s){xe.useContext(fs).static||xe.useLayoutEffect(s)}function y_(){let{isDataRoute:s}=xe.useContext(hs);return s?I_():S_()}function S_(){Mo()||ln(!1);let s=xe.useContext(kf),{basename:e,future:t,navigator:r}=xe.useContext(fs),{matches:o}=xe.useContext(hs),{pathname:l}=fa(),u=JSON.stringify(tg(o,t.v7_relativeSplatPath)),d=xe.useRef(!1);return ag(()=>{d.current=!0}),xe.useCallback(function(m,v){if(v===void 0&&(v={}),!d.current)return;if(typeof m=="number"){r.go(m);return}let y=ng(m,JSON.parse(u),l,v.relative==="path");s==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:kr([e,y.pathname])),(v.replace?r.replace:r.push)(y,v.state,v)},[e,r,u,l,s])}function og(s,e){let{relative:t}=e===void 0?{}:e,{future:r}=xe.useContext(fs),{matches:o}=xe.useContext(hs),{pathname:l}=fa(),u=JSON.stringify(tg(o,r.v7_relativeSplatPath));return xe.useMemo(()=>ng(s,JSON.parse(u),l,t==="path"),[s,u,l,t])}function M_(s,e){return w_(s,e)}function w_(s,e,t,r){Mo()||ln(!1);let{navigator:o}=xe.useContext(fs),{matches:l}=xe.useContext(hs),u=l[l.length-1],d=u?u.params:{};u&&u.pathname;let f=u?u.pathnameBase:"/";u&&u.route;let m=fa(),v;if(e){var y;let S=typeof e=="string"?da(e):e;f==="/"||(y=S.pathname)!=null&&y.startsWith(f)||ln(!1),v=S}else v=m;let x=v.pathname||"/",M=x;if(f!=="/"){let S=f.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=$v(s,{pathname:M}),R=C_(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:kr([f,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:kr([f,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,r);return e&&R?xe.createElement(pc.Provider,{value:{location:mo({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Dr.Pop}},R):R}function E_(){let s=P_(),e=g_(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return xe.createElement(xe.Fragment,null,xe.createElement("h2",null,"Unexpected Application Error!"),xe.createElement("h3",{style:{fontStyle:"italic"}},e),t?xe.createElement("pre",{style:o},t):null,null)}const b_=xe.createElement(E_,null);class T_ extends xe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?xe.createElement(hs.Provider,{value:this.props.routeContext},xe.createElement(sg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A_(s){let{routeContext:e,match:t,children:r}=s,o=xe.useContext(kf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),xe.createElement(hs.Provider,{value:e},r)}function C_(s,e,t,r){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),s==null){var l;if(!t)return null;if(t.errors)s=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let u=s,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=u.findIndex(y=>y.route.id&&(d==null?void 0:d[y.route.id])!==void 0);v>=0||ln(!1),u=u.slice(0,Math.min(u.length,v+1))}let f=!1,m=-1;if(t&&r&&r.v7_partialHydration)for(let v=0;v<u.length;v++){let y=u[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=v),y.route.id){let{loaderData:x,errors:M}=t,T=y.route.loader&&x[y.route.id]===void 0&&(!M||M[y.route.id]===void 0);if(y.route.lazy||T){f=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((v,y,x)=>{let M,T=!1,R=null,S=null;t&&(M=d&&y.route.id?d[y.route.id]:void 0,R=y.route.errorElement||b_,f&&(m<0&&x===0?(D_("route-fallback"),T=!0,S=null):m===x&&(T=!0,S=y.route.hydrateFallbackElement||null)));let _=e.concat(u.slice(0,x+1)),N=()=>{let B;return M?B=R:T?B=S:y.route.Component?B=xe.createElement(y.route.Component,null):y.route.element?B=y.route.element:B=v,xe.createElement(A_,{match:y,routeContext:{outlet:v,matches:_,isDataRoute:t!=null},children:B})};return t&&(y.route.ErrorBoundary||y.route.errorElement||x===0)?xe.createElement(T_,{location:t.location,revalidation:t.revalidation,component:R,error:M,children:N(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):N()},null)}var lg=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(lg||{}),cg=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(cg||{});function R_(s){let e=xe.useContext(kf);return e||ln(!1),e}function L_(s){let e=xe.useContext(v_);return e||ln(!1),e}function N_(s){let e=xe.useContext(hs);return e||ln(!1),e}function ug(s){let e=N_(),t=e.matches[e.matches.length-1];return t.route.id||ln(!1),t.route.id}function P_(){var s;let e=xe.useContext(sg),t=L_(),r=ug();return e!==void 0?e:(s=t.errors)==null?void 0:s[r]}function I_(){let{router:s}=R_(lg.UseNavigateStable),e=ug(cg.UseNavigateStable),t=xe.useRef(!1);return ag(()=>{t.current=!0}),xe.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,mo({fromRouteId:e},l)))},[s,e])}const km={};function D_(s,e,t){km[s]||(km[s]=!0)}function k_(s,e){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Od(s){ln(!1)}function U_(s){let{basename:e="/",children:t=null,location:r,navigationType:o=Dr.Pop,navigator:l,static:u=!1,future:d}=s;Mo()&&ln(!1);let f=e.replace(/^\/*/,"/"),m=xe.useMemo(()=>({basename:f,navigator:l,static:u,future:mo({v7_relativeSplatPath:!1},d)}),[f,d,l,u]);typeof r=="string"&&(r=da(r));let{pathname:v="/",search:y="",hash:x="",state:M=null,key:T="default"}=r,R=xe.useMemo(()=>{let S=Df(v,f);return S==null?null:{location:{pathname:S,search:y,hash:x,state:M,key:T},navigationType:o}},[f,v,y,x,M,T,o]);return R==null?null:xe.createElement(fs.Provider,{value:m},xe.createElement(pc.Provider,{children:t,value:R}))}function F_(s){let{children:e,location:t}=s;return M_(Bd(e),t)}new Promise(()=>{});function Bd(s,e){e===void 0&&(e=[]);let t=[];return xe.Children.forEach(s,(r,o)=>{if(!xe.isValidElement(r))return;let l=[...e,o];if(r.type===xe.Fragment){t.push.apply(t,Bd(r.props.children,l));return}r.type!==Od&&ln(!1),!r.props.index||!r.props.children||ln(!1);let u={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Bd(r.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zd(){return zd=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},zd.apply(null,arguments)}function O_(s,e){if(s==null)return{};var t={};for(var r in s)if({}.hasOwnProperty.call(s,r)){if(e.indexOf(r)!==-1)continue;t[r]=s[r]}return t}function B_(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function z_(s,e){return s.button===0&&(!e||e==="_self")&&!B_(s)}const H_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],V_="6";try{window.__reactRouterVersion=V_}catch{}const G_="startTransition",Um=zv[G_];function W_(s){let{basename:e,children:t,future:r,window:o}=s,l=xe.useRef();l.current==null&&(l.current=Xv({window:o,v5Compat:!0}));let u=l.current,[d,f]=xe.useState({action:u.action,location:u.location}),{v7_startTransition:m}=r||{},v=xe.useCallback(y=>{m&&Um?Um(()=>f(y)):f(y)},[f,m]);return xe.useLayoutEffect(()=>u.listen(v),[u,v]),xe.useEffect(()=>k_(r),[r]),xe.createElement(U_,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:r})}const j_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=xe.forwardRef(function(e,t){let{onClick:r,relative:o,reloadDocument:l,replace:u,state:d,target:f,to:m,preventScrollReset:v,viewTransition:y}=e,x=O_(e,H_),{basename:M}=xe.useContext(fs),T,R=!1;if(typeof m=="string"&&q_.test(m)&&(T=m,j_))try{let B=new URL(window.location.href),C=m.startsWith("//")?new URL(B.protocol+m):new URL(m),P=Df(C.pathname,M);C.origin===B.origin&&P!=null?m=P+C.search+C.hash:R=!0}catch{}let S=__(m,{relative:o}),_=X_(m,{replace:u,state:d,target:f,preventScrollReset:v,relative:o,viewTransition:y});function N(B){r&&r(B),B.defaultPrevented||_(B)}return xe.createElement("a",zd({},x,{href:T||S,onClick:R||l?r:N,ref:t,target:f}))});var Fm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Fm||(Fm={}));var Om;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Om||(Om={}));function X_(s,e){let{target:t,replace:r,state:o,preventScrollReset:l,relative:u,viewTransition:d}=e===void 0?{}:e,f=y_(),m=fa(),v=og(s,{relative:u});return xe.useCallback(y=>{if(z_(y,t)){y.preventDefault();let x=r!==void 0?r:ac(m)===ac(v);f(s,{replace:x,state:o,preventScrollReset:l,relative:u,viewTransition:d})}},[m,f,v,r,o,t,s,l,u,d])}const dg=xe.createContext(),Y_={name:"Manny Anchan",title:"Motivational Speaker & Founder, Happiness Quotient Global (HQGPL)",tagline:"This Is How The Good Companies Find The Good Company",philosophy:"Advocates simple living, positive feeling, transformational thinking. Resides in Mumbai, devoted father, and pet enthusiast.",experience:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB.",education:"Harvard & Columbia Business School alum.",globalExposure:"Worked and lived in Asia, Africa, Europe, & North America. Multicultural adaptability.",happinessExpertise:"Leading figure in the study and promotion of happiness, exploring concepts from Ikigai, Hygge, Lagom, Sisu, to Gross National Happiness.",purposeResearch:"Conducted extensive research on purpose-driven concepts and their implications in various cultural contexts.",communityEngagement:["Global Happiness Advocate","Mentor at startup school","Educational committee member","Adjunct professor","Delivered impactful TEDx Talks"],tedxTalks:[{city:"Allahabad",event:"TEDx - Katra"},{city:"Pune",event:"TEDx ElPro Intl School"},{city:"Jaipur",event:"TEDx Man Sagar Lake"},{city:"Vadodara",event:"TEDx Navrachana International"}],contactNumber:"+91 97001 00800",website:"https://happinesssamurai.com"},K_=[{id:"ikigai",title:"Ikigai",desc:"Discover your purpose, and find joy in the intersection of what you love, what you are good at, what the world needs, and what you can be paid for."},{id:"finance",title:"Finance",desc:"Foster financial literacy, make informed decisions, and create a secure future through effective money management."},{id:"stress",title:"Stress Management",desc:"Find peace and resilience amidst life's challenges, and stay equipped with effective coping strategies for healthier well-being."},{id:"fitness",title:"Fitness",desc:"Engage in regular physical activity, challenge your limits, and enhance your strength, endurance, and overall fitness."},{id:"leadership",title:"Leadership",desc:"Unlock potential by focusing on essential skills, effective communication, and a collaborative growth culture."},{id:"values",title:"Values",desc:"Embracing values that prioritize holistic practices, nurturing both the mind and body, fosters a balance essential for overall well-being and recovery."},{id:"balance",title:"Balance",desc:"Work-life balance is vital for well-being, reducing stress and burnout while enhancing overall life satisfaction and productivity."},{id:"meditation",title:"Meditation",desc:"Cultivate inner peace, reduce stress, and enhance mindfulness through focused breathing and present-moment awareness."},{id:"psychology-wealth",title:"Psychology of Wealth",desc:"Unlock mindset shifts for lasting financial confidence, abundance, and smarter money choices."},{id:"habit-building",title:"Habit Building",desc:"Empowering you to cultivate positive routines and achieve lasting personal growth."},{id:"healing",title:"Healing",desc:"Embrace holistic practices, nurture mind and body, and create a harmonious balance for overall wellbeing and recovery."},{id:"nutrition",title:"Nutrition",desc:"Nourish your body with wholesome foods, fuel your vitality, and cultivate a healthy relationship with what you eat."}],$_=[{title:"Enhances Intrinsic Motivation",desc:"Holistic development nurtures a positive self-image, aligning personal values with actions and fueling intrinsic motivation."},{title:"Increased Employee Productivity",desc:"Research suggests that employees who participate in workplace wellness programs tend to be more productive."},{title:"Improved Employee Retention",desc:"Wellness programs contribute to a positive work environment, fostering employee loyalty and reducing turnover."},{title:"Enhanced Employee Engagement",desc:"Engaged employees are more committed to their work, leading to improved job satisfaction and performance."}],Z_=["Keeps interest","Promotes Participation","Enhances Engagement","Boosts Productivity","Fosters Culture","Boosts Speaker Confidence","Increases Collaboration","Strengthens Culture","Enhances Memory Retention","Improves Understanding"],J_=["Maharashtra","Goa","Uttar Pradesh","Bihar","Haryana","Punjab","Rajasthan","Madhya Pradesh","Karnataka","Tamil Nadu","Jammu","Gujarat","Uttarakhand","West Bengal","Meghalaya","Assam"],Q_=["Mauritius","Bhutan","Finland","UAE","Costa Rica","Sri Lanka","Tanzania","Oman","Japan"],ey=[{publication:"Mid-Day",title:"Mid-Day Article",desc:"Manny Anchan, best selling author unveils his new book Happiness Samurai featuring Bollywood Superstar John Abraham's beautiful and heartfelt candid foreword."},{publication:"Influencive",title:"Influencive Article",desc:"Manny Anchan the author, entrepreneur and TEDx speaker from India who is inspiring impressionable minds with his recent TEDx talk, known as the Happiness Maverick of India."},{publication:"Fox Interviewer",title:"Fox Interviewer Article",desc:"Profiling Manny Anchan's global corporate leadership methodology and international well-being roadmaps."},{publication:"Net News Ledger",title:"Net News Ledger Article",desc:"Global perspective on purpose-driven leadership and eudaimonic transformation."},{publication:"US Times Now",title:"US Times Now Article",desc:"Best selling author and Happiness Maverick Manny Anchan speaking at TEDx about his journey."},{publication:"PressReader",title:"PressReader Global Feature",desc:"Feature on enterprise employee engagement, mental health, and functional well-being across Asia."},{publication:"News Track Live",title:"News Track Live Article",desc:"In-depth coverage of the 100-day Ikigai program and nationwide wellness footprint."}],ty={corporate:["TATA Motors","Cipla","HDFC Life","HDFC ERGO","Barclays","TATA Capital","TATA AIG","Ageas Federal Insurance","IDFC First Bank","Axis Bank","SBI Life","YES Bank","Aditya Birla Capital","Mahindra","Tricolite","Hyundai Electronics","Reliance","Entrepreneurs' Organization","SMFG India","UGRO Capital","Absa Bank","Shapoorji Pallonji","Turtlemint Pro","Saint-Gobain","Bandhan Mutual Fund","Mango Sciences","Motilal Oswal","Amana Bank","Primarc","Skipper Limited","Amal Embroidery","Alizz Islamic Bank","NBO (Oman)","BankDhofar","APAR Industries","NetApp","Burns & McDonnell","Indigo Airlines","Uniworld Logistics"],institutions:["Harvard Club (Sri Lanka X APAC)","IIM","Masters' Union","IISM (Sports Management)","Indira Group","Podar International","TCS iON","MET Institute","ASM Group","StartupYou","Aditya Birla World Academy","Global Indian International School (Dubai)","IES MCRC","Amber Valley","Indus International School","Jamnabai Narsee","Oberoi International","Mondrian High","Safari Kid","Pathways World School"]},Bm=[{id:"f-meera",name:"Meera Chauhan",category:"Mindfulness",title:"Director at Tricolite Electrical Industries | Warwick & Yale Fellow",bio:"Meera Chauhan is a Director with Tricolite Electrical Industries. She has done her Master's Degree in Industrial Relations and Personnel Management from Warwick Business School and also a mid career Fellowship at Yale University.",image:"/team/meera-chauhan.png",active:!0,featured:!0},{id:"f-anil",name:"Anil Kumar",category:"Personal Leadership",title:"Recipient of 'SHAURYA CHAKRA' | LBS & ISB Alumnus",bio:"Anil, recipient of 'SHAURYA CHAKRA' award is a former military officer, motivational speaker, leadership expert, and fundraiser for alternative investment funds. Alumnus of London Business School and ISB.",image:"/team/anil-kumar.png",active:!0,featured:!0},{id:"f-carolin",name:"Carolin Nytra",category:"Spirituality",title:"Retired German Olympic Hurdler & Holistic Well-Being Advocate",bio:"Carolin Nytra is a retired German Olympic hurdler, now a holistic well-being advocate. Now, a Cacao Priestess, she empowers others through mindset and spiritual guidance.",image:"/team/carolin-nytra.png",active:!0,featured:!0},{id:"f-ajay",name:"Ajay Srinivasan",category:"Business Leadership",title:"Seasoned Business Leader & Strategic Advisor",bio:"Ajay Srinivasan is a seasoned business leader with a diverse career, founding and expanding businesses in India and abroad, showcasing leadership across different organizational structures and industries.",image:"/team/ajay-srinivasan.png",active:!0,featured:!0},{id:"f-rupinder",name:"Rupinder Singh",category:"Sports",title:"Olympic Field Hockey Star & International Champion",bio:"Rupinder Pal Singh, born on Nov 11, 1990, in Faridkot, Punjab, is an Indian hockey star known for powerful drag-flicks, international victories, and inspiring young players.",image:"/team/rupinder-singh.png",active:!0,featured:!0},{id:"f-parvej",name:"Parvej Mantrri",category:"Fit Panda",title:"Versatile Entertainer & Celebrity Fitness Coach",bio:"Parvej, a versatile entertainer, excels as an actor, host, voice-over artist, and celebrity fitness coach, earning acclaim in various roles.",image:"/team/parvej-mantrri.png",active:!0,featured:!0},{id:"f-bhakti",name:"Bhakti Kapoor",category:"HealthTech professional",title:"Founder of HEALTHY HIGH & Nutritional Wellness Advisor",bio:"Bhakti is the founder of HEALTHY HIGH a virtual nutrition counselling platform. She is also on the advisory panel for Vitalyse wellness strips and Green Protein.",image:"/team/bhakti-kapoor.png",active:!0,featured:!0},{id:"f-bijay",name:"Bijay Anand",category:"Kundalini Yoga",title:"Esteemed Kundalini Yoga Instructor & Holistic Wellness Mentor",bio:"Esteemed Kundalini Yoga instructor Bijay Anand fosters holistic wellness, integrating ancient wisdom and contemporary insights for a balanced, transformative practice.",image:"/team/bijay-anand.png",active:!0,featured:!0},{id:"f-rajiv",name:"Rajiv Gupta",category:"Japanese Life lessons",title:"Manufacturing CEO & Author | HBS Alumnus & Ex-VP Honda Cars",bio:`Mr. Gupta is currently the CEO of a leading manufacturing company. Author of "The Good Indian Employee's Guide to Surviving a Lala Company." Ex-VP and National Head of Sales & Marketing at Honda Cars. Alumnus of HBS.`,image:"/team/rajiv-gupta.png",active:!0,featured:!0},{id:"f-soha",name:"Soha Ali Khan",category:"Parenting",title:"Acclaimed Author & Modern Family Mentor | Oxford & LSE Alumna",bio:'Soha Ali Khan, Indian actress from a noble lineage, blends regal charm with cinematic brilliance, symbolizing cultural richness in Bollywood. She also the author to the book "The Perils of being Moderately Famous"',image:"/team/soha-ali-khan.png",active:!0,featured:!0},{id:"f-sanjay",name:"Sanjay Arora",category:"Entrepreneurship Leader",title:"Healthcare Pioneer & Founder of Suburban Diagnostics",bio:"Dr. Sanjay Arora, healthcare pioneer, founded Suburban Diagnostics, prioritizing precision and patient care. Awards recognize his leadership, innovation, and entrepreneurial excellence.",image:"/team/sanjay-arora.png",active:!0,featured:!0},{id:"f-bharati",name:"Bharati Jaisingh",category:"Well Being Practitioner",title:"Well Being Practitioner & Founder of IDHA",bio:"Bharati K. Jaisingh, Well Being Practitioner and founder of IDHA, utilizes dance and expressive arts to foster therapeutic experiences for individuals and communities.",image:"/team/bharati-jaisingh.png",active:!0,featured:!0},{id:"f-manny",name:"Manny Anchan",category:"Personal Leadership",title:"Founder & Chief Happiness Officer | Harvard & Columbia Alum",bio:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Researched Ikigai, Hygge, Lagom, Sisu, and Gross National Happiness.",image:"/team/manny-anchan.png",active:!0,featured:!0}],zm=[{id:"c1",title:"Finding Your Ikigai",duration:"100 Days",price:"₹4,999",enrollmentUrl:"#enroll",icon:"compass",description:"Discover your core purpose by harmonizing what you love, what you excel at, what the world needs, and what sustains you financially.",modules:14,enrolledCount:1840,active:!0},{id:"c2",title:"Passion Quest",duration:"100 Days",price:"₹4,999",enrollmentUrl:"#enroll",icon:"sparkles",description:"Systematically explore intrinsic motivators, eliminate self-sabotaging friction, and architect a lifestyle aligned with your highest authentic interests.",modules:12,enrolledCount:1250,active:!0},{id:"c3",title:"Happiness in Money (Psychology of Wealth)",duration:"100 Days",price:"₹4,999",enrollmentUrl:"#enroll",icon:"wallet",description:"Unlock mindset shifts for lasting financial confidence, abundance, and smarter money choices. Decode the neuro-economics of contentment.",modules:16,enrolledCount:2190,active:!0},{id:"c4",title:"The Resilience & Stress Blueprint",duration:"100 Days",price:"₹5,999",enrollmentUrl:"#enroll",icon:"shield",description:"Find peace and resilience amidst life's challenges, equipped with effective coping strategies, somatic breathing, and neuroplastic habit formation.",modules:15,enrolledCount:960,active:!0}],Hm=[{id:"b1",year:"2020",title:"Happiness Samurai",subtitle:"The Discipline of Purpose",description:"The foundational philosophy linking ancient samurai mental fortitude with modern workplace joy.",cover:"/books/4.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Defining book of the moment. A must read!",endorser:"John Abraham",featured:!0},{id:"b2",year:"2021",title:"Happiness Memoir",subtitle:"Lessons from 25 Years of Global Leadership",description:"A candid reflection on executive burnout in corporate towers at GE Capital, Barclays & ABN AMRO, and the path to genuine eudaimonia.",cover:"/books/2.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Raw, honest, and profoundly transformative."},{id:"b3",year:"2022",title:"Happiness Conversations",subtitle:"Dialogue with Titans & Thinkers",description:"Interviews with world champions, CEOs, and spiritual masters exploring concepts from Ikigai, Hygge, Lagom, to Gross National Happiness.",cover:"/books/5.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Every chapter holds a gem of practical wisdom."},{id:"b4",year:"2023",title:"Happiness & Money",subtitle:"Psychology of Wealth & Stewardship",description:"Foster financial literacy, make informed decisions, and create a secure future through effective money management and mindset shifts.",cover:"/books/3.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Demystifies financial anxiety with elegance and clarity."},{id:"b5",year:"2024",title:"Happiness Decoded",subtitle:"The HQ Functional Enhancement Model",description:"The definitive clinical and corporate framework unveiling the five levers of behavioral transformation.",cover:"/books/1.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"The ultimate operating system for modern business vitality."},{id:"b6",year:"2025",title:"Happiness Habits",subtitle:"Daily Micro-Rituals for Peak Performance",description:"Empowering leaders to cultivate positive routines and achieve lasting personal and organizational growth.",cover:"/books/6.jpg",purchaseUrl:"https://happinesssamurai.com/index.html",quote:"Daily micro-rituals that separate good companies from great companies.",endorser:"John Abraham",featured:!0}],Vm=[{id:"yt-SF72EvyPp_s",youtubeId:"SF72EvyPp_s",title:"Building Purposeful Ventures & Strategic Narrative",guest:"Rachna Baruah",category:"Founder, Madchatter | HBS Alum",date:"Season 2026",duration:"46:57",summary:"HQx podcast Season 2026 featuring Rachna Baruah, Founder of Madchatter and Harvard Business School alum, exploring high performance, mental resilience, and purpose-driven branding.",thumbnail:"https://i.ytimg.com/vi/SF72EvyPp_s/hqdefault.jpg"},{id:"yt-DP-Yr5vdr14",youtubeId:"DP-Yr5vdr14",title:"Mindful Gastronomy, Creative Energy & Wellness",guest:"Master Chef Vicky Ratnani",category:"Celebrity Master Chef & Author",date:"Season 2026",duration:"46:34",summary:"Celebrated culinary author and Master Chef Vicky Ratnani explores nutrition, creative stamina, and conscious living in high-stress culinary environments.",thumbnail:"https://i.ytimg.com/vi/DP-Yr5vdr14/hqdefault.jpg"},{id:"yt-eLQ7tmv7rgQ",youtubeId:"eLQ7tmv7rgQ",title:"Scaling Organizations with Ethical Resilience",guest:"Dr R Ramakrishnan",category:"Former CEO & Joint MD, Polycab Group",date:"Season 2026",duration:"1:11:06",summary:"Deep corporate leadership masterclass on scaling multi-billion dollar enterprises with values-based integrity, executive calm, and strategic endurance.",thumbnail:"https://i.ytimg.com/vi/eLQ7tmv7rgQ/hqdefault.jpg"},{id:"yt-llQ8JBBsfVs",youtubeId:"llQ8JBBsfVs",title:"Success With Soul: Leadership, Mental Health & Purpose",guest:"Preeti Chandrashekar",category:"Executive Leadership & Mental Health",date:"Season 2026",duration:"45:15",summary:"Season 26 Episode 1 dialogue on unlocking high-impact corporate performance without sacrificing personal mental health, empathy, and soul.",thumbnail:"https://i.ytimg.com/vi/llQ8JBBsfVs/hqdefault.jpg"},{id:"yt-kwzqH88DWYg",youtubeId:"kwzqH88DWYg",title:"Holistic Well-Being, Inner Harmony & Performance",guest:"Sanaa Vasi",category:"Wellness & Lifestyle Authority",date:"Season 2026",duration:"38:56",summary:"Sanaa Vasi shares practical daily micro-rituals for achieving sustained physiological balance and psychological clarity in fast-paced worlds.",thumbnail:"https://i.ytimg.com/vi/kwzqH88DWYg/hqdefault.jpg"},{id:"yt-4_1Ov8vxMWU",youtubeId:"4_1Ov8vxMWU",title:"Corporate Leadership, Strategic Vision & Empathy",guest:"Rakesh Singh",category:"Corporate Leadership & Strategy",date:"Season 2026",duration:"42:59",summary:"Industry veteran Rakesh Singh dives into enterprise transformation, empathetic team alignment, and steering cross-functional excellence.",thumbnail:"https://i.ytimg.com/vi/4_1Ov8vxMWU/hqdefault.jpg"},{id:"yt-zjvE87o09JY",youtubeId:"zjvE87o09JY",title:"Nourishing Mind & Body: The Eat Heal Love Philosophy",guest:"Avantika Shah",category:"Founder, Eat Heal Love",date:"Season 2026",duration:"52:36",summary:"Founder Avantika Shah shares integrative wellness paradigms, gut-brain connectivity, and healing burnout from within.",thumbnail:"https://i.ytimg.com/vi/zjvE87o09JY/hqdefault.jpg"},{id:"yt-rLC9VyVGCVA",youtubeId:"rLC9VyVGCVA",title:"Empathetic Execution & Executive Endurance",guest:"Jitendra Karsan",category:"Business Leader & Mentor",date:"Season 2025",duration:"47:45",summary:"Jitendra Karsan unpacks decades of corporate insights on sustained executive vigor, emotional discipline, and team loyalty.",thumbnail:"https://i.ytimg.com/vi/rLC9VyVGCVA/hqdefault.jpg"},{id:"yt-JbpocGaW9F4",youtubeId:"JbpocGaW9F4",title:"Mindfulness, Transformation & Inner Mastery",guest:"Ajay S",category:"Transformation Coach",date:"Season 2025",duration:"39:38",summary:"Ajay S breaks down how mental de-cluttering directly enhances decision-making velocity and creative breakthroughs under deadlines.",thumbnail:"https://i.ytimg.com/vi/JbpocGaW9F4/hqdefault.jpg"},{id:"yt-ivt09jBp_Zc",youtubeId:"ivt09jBp_Zc",title:"Preventive Healthcare & Corporate Health Architecture",guest:"Mayank Bathwal",category:"CEO, Aditya Birla Health Insurance",date:"Season 2025",duration:"53:50",summary:"CEO Mayank Bathwal discusses institutional health ecosystems, preventive wellness insurance models, and corporate vitality metrics.",thumbnail:"https://i.ytimg.com/vi/ivt09jBp_Zc/hqdefault.jpg"},{id:"yt-5G8FUWsrWjc",youtubeId:"5G8FUWsrWjc",title:"Venture Capital, Founder Resilience & Long-Term Value",guest:"Sasha Mirchandani",category:"Founder & Managing Partner, Kae Capital",date:"Season 2025",duration:"48:32",summary:"Venture capital icon Sasha Mirchandani discusses mental grit in startup founders, weathering market turbulence, and ethical investing.",thumbnail:"https://i.ytimg.com/vi/5G8FUWsrWjc/hqdefault.jpg"},{id:"yt-uSF7SPnpxqc",youtubeId:"uSF7SPnpxqc",title:"Vocal Power, Creative Resilience & Overcoming Adversity",guest:"Manasi Scott",category:"Renowned Singer, Performer & Actor",date:"Season 2025",duration:"44:20",summary:"Manasi Scott shares an electrifying dialogue on personal courage, overcoming major life health hurdles, and living with unapologetic joy.",thumbnail:"https://i.ytimg.com/vi/uSF7SPnpxqc/hqdefault.jpg"},{id:"yt-MZBkbZH123M",youtubeId:"MZBkbZH123M",title:"Artisanal Craft, Coffee Culture & Culinary Mindfulness",guest:"Daniel Trulson",category:"Co-founder & Head Chef, Subko Coffee",date:"Season 2025",duration:"1:02:36",summary:"Subko Coffee head chef Daniel Trulson shares how culinary discipline, ingredient reverence, and mindfulness drive world-class excellence.",thumbnail:"https://i.ytimg.com/vi/MZBkbZH123M/hqdefault.jpg"},{id:"yt-w9QzkeZs1-8",youtubeId:"w9QzkeZs1-8",title:"Gen Z Perspectives: Depth, Curiosity & Stoic Spirit",guest:"Sohm Anchan",category:"Gen Z Dialogue",date:"Season 2025",duration:"34:31",summary:"Heartfelt cross-generational dialogue between Manny and Sohm on modern youth ambition, digital burnout, and finding stoic inner grounding.",thumbnail:"https://i.ytimg.com/vi/w9QzkeZs1-8/hqdefault.jpg"},{id:"yt-j960Obyyv74",youtubeId:"j960Obyyv74",title:"The Mentalist Edge: Perception, Influence & Mind Hacks",guest:"Praveen Nair",category:"Top Mentalist & Hypnotist",date:"Season 2025",duration:"36:17",summary:"Master mentalist Praveen Nair deconstructs the architecture of human perception, subconscious cues, and cognitive resilience.",thumbnail:"https://i.ytimg.com/vi/j960Obyyv74/hqdefault.jpg"},{id:"yt-fdtxBTBgKk0",youtubeId:"fdtxBTBgKk0",title:"Sustained High Performance in Corporate Ecosystems",guest:"Executive Panel",category:"Executive Masterclass",date:"Season 2025",duration:"43:41",summary:"In-depth exploration of corporate fatigue, cognitive rest periods, and designing workspaces that nurture productivity.",thumbnail:"https://i.ytimg.com/vi/fdtxBTBgKk0/hqdefault.jpg"},{id:"yt-sHEH9k2cOv4",youtubeId:"sHEH9k2cOv4",title:"Cross-Cultural Leadership & Executive Neuroplasticity",guest:"Margie Blanton",category:"Global Executive Educator",date:"Season 2025",duration:"22:40",summary:"Margie Blanton reveals how top executives rewire cognitive habits through continuous curiosity, travel, and beginner’s mind philosophy.",thumbnail:"https://i.ytimg.com/vi/sHEH9k2cOv4/hqdefault.jpg"},{id:"yt-CK-r2GbXs6Y",youtubeId:"CK-r2GbXs6Y",title:"Legal Rigor, Complex Negotiations & Emotional Boundaries",guest:"Radhika Dudhat",category:"Senior Partner, Shardul Amarchand Mangaldas",date:"Season 2025",duration:"27:32",summary:"Senior legal partner Radhika Dudhat unpacks managing multi-million-dollar high-stakes legal negotiations while safeguarding mental peace.",thumbnail:"https://i.ytimg.com/vi/CK-r2GbXs6Y/hqdefault.jpg"},{id:"yt-jgw_EOkmBSE",youtubeId:"jgw_EOkmBSE",title:"Philanthropy, Altruism & The Science of Giving",guest:"Noopur Desai",category:"Philanthropy & Social Impact",date:"Season 2025",duration:"25:56",summary:"Exploring how service and meaningful community giveback stimulate neurological happiness centers and counter corporate cynicism.",thumbnail:"https://i.ytimg.com/vi/jgw_EOkmBSE/hqdefault.jpg"},{id:"yt-z-DpZS9KgwQ",youtubeId:"z-DpZS9KgwQ",title:"Workplace Well-Being as a Strategic Enterprise Pillar",guest:"Corporate Leadership",category:"Enterprise Strategy",date:"Season 2025",duration:"32:39",summary:"Why human-centered organizational design outpaces purely transactional management models in long-term enterprise valuation.",thumbnail:"https://i.ytimg.com/vi/z-DpZS9KgwQ/hqdefault.jpg"},{id:"yt-iMJEgUtXl5w",youtubeId:"iMJEgUtXl5w",title:"The Eudaimonic Enterprise: Inception of HQx",guest:"Manny Anchan",category:"Host & Founder, HQx",date:"Season 2025",duration:"45:40",summary:"Manny Anchan sets the foundational vision for HQx: blending global executive discipline with timeless eudaimonic happiness philosophies.",thumbnail:"https://i.ytimg.com/vi/iMJEgUtXl5w/hqdefault.jpg"},{id:"yt-EI6SNlfIn54",youtubeId:"EI6SNlfIn54",title:"Embracing Authenticity, Mental Grace & Overcoming Pressure",guest:"Sameera Reddy",category:"Actor & Happiness Advocate",date:"Featured Special",duration:"50:39",summary:"Celebrated actor Sameera Reddy shares candid reflections on overcoming postpartum depression, corporate pressure, and finding genuine self-love.",thumbnail:"https://i.ytimg.com/vi/EI6SNlfIn54/hqdefault.jpg"},{id:"yt-17t_VxbPOVc",youtubeId:"17t_VxbPOVc",title:"Happy Conversations: Micro Moments of Joy",guest:"Manny Anchan",category:"Micro-Insight",date:"Micro Series",duration:"0:39",summary:"Short reflection by Manny Anchan on noticing everyday spontaneous joy and building intentional connections.",thumbnail:"https://i.ytimg.com/vi/17t_VxbPOVc/hqdefault.jpg"},{id:"yt-4xvmWMBFii8",youtubeId:"4xvmWMBFii8",title:"Journey Is The Destination: Mindset Shifts",guest:"Manny Anchan",category:"Micro-Insight",date:"Micro Series",duration:"0:53",summary:"A powerful 53-second insight on detachment from outcomes and rediscovering meaning in daily practice.",thumbnail:"https://i.ytimg.com/vi/4xvmWMBFii8/hqdefault.jpg"},{id:"yt-BHpaC1ObaVA",youtubeId:"BHpaC1ObaVA",title:"What Makes You Happy? Corporate Voices at Aditya Birla Capital",guest:"Aditya Birla Capital Team",category:"Corporate Spotlight",date:"Enterprise Voice",duration:"4:09",summary:"Direct employee stories and perspectives on what fuels happiness, purpose, and camaraderie at Aditya Birla Capital.",thumbnail:"https://i.ytimg.com/vi/BHpaC1ObaVA/hqdefault.jpg"},{id:"yt-NTdduGwLilQ",youtubeId:"NTdduGwLilQ",title:"Culture & Joy at Work: Voices at Tata Capital",guest:"Tata Capital Team",category:"Corporate Spotlight",date:"Enterprise Voice",duration:"2:47",summary:"Exploring employee well-being culture, trust, and mutual encouragement across teams at Tata Capital.",thumbnail:"https://i.ytimg.com/vi/NTdduGwLilQ/hqdefault.jpg"},{id:"yt-8OROLKExUbY",youtubeId:"8OROLKExUbY",title:"Finding Joy in Everyday Craft: Interviewing My Favorite Barista",guest:"Special Guest",category:"Everyday Happiness",date:"Human Connection",duration:"4:23",summary:"Manny sits down with a skilled barista to discuss presence, craftsmanship, and how small genuine interactions brighten human days.",thumbnail:"https://i.ytimg.com/vi/8OROLKExUbY/hqdefault.jpg"},{id:"yt-oHdbLEax_a0",youtubeId:"oHdbLEax_a0",title:"What Is Your Life’s Design? Taking Charge & Shaping Destiny",guest:"Manny Anchan",category:"Masterclass",date:"Life Design",duration:"4:09",summary:"Practical frameworks by Manny Anchan on moving from passive reaction to intentional life architecture and proactive design.",thumbnail:"https://i.ytimg.com/vi/oHdbLEax_a0/hqdefault.jpg"},{id:"yt-JurW3HRo3V4",youtubeId:"JurW3HRo3V4",title:"The Transformative Power of Daily Journaling",guest:"Manny Anchan",category:"Habit Mastery",date:"Behavioral Practice",duration:"1:37",summary:"Manny Anchan explains the neuroscience of daily journaling: clarity, stress release, and cognitive crystallization.",thumbnail:"https://i.ytimg.com/vi/JurW3HRo3V4/hqdefault.jpg"},{id:"yt-uMDEotodPD4",youtubeId:"uMDEotodPD4",title:"Happiness Samurai Book Signing & Keynote Address",guest:"Manny Anchan",category:"Keynote Event",date:"Book Launch",duration:"40:20",summary:"Full video recording of the high-energy Happiness Samurai book launch, keynote address, and audience Q&A with Manny Anchan.",thumbnail:"https://i.ytimg.com/vi/uMDEotodPD4/hqdefault.jpg"}],Gm=[{id:"eng-1",client:"Ageas Federal Insurance",location:"Mumbai, India",scope:"Domestic",category:"Corporate Wellness & Leadership",date:"2024-2026",attendees:"Senior Leadership & Sales Teams",impact:"Transformational wellness keynote cultivating resilience across national branches."},{id:"eng-2",client:"Tricolite",location:"Delhi, India",scope:"Domestic",category:"100 Days Ikigai Program",date:"2024-2026",attendees:"300+ Engineering & Leadership Staff",impact:"End-to-end 100-day Ikigai deployment driving sustained workplace purpose."},{id:"eng-3",client:"HDFC ERGO",location:"Mumbai, India",scope:"Domestic",category:"Staff Engagement & Wellness Confluence",date:"2025-2026",attendees:"500+ Across Regional Divisions",impact:"Keynote and experiential workshops on psychological well-being and productivity."},{id:"eng-4",client:"TATA Motors",location:"Pune, India",scope:"Domestic",category:"Leadership Deep Dive & Executive Resilience",date:"2025-2026",attendees:"Senior Engineering & Operations Leaders",impact:"94% reported enhanced resilience in team management and crisis turnaround."},{id:"eng-5",client:"Cipla Pharmaceuticals",location:"Goa, India",scope:"Domestic",category:"Engaging Well-Being Workshop",date:"2025",attendees:"Global Pharma Leaders & Research Directors",impact:"Somatic mindfulness and eudaimonic performance workshop in Goa retreat."},{id:"eng-6",client:"HDFC Life",location:"Mumbai, India",scope:"Domestic",category:"Culture Transformation & Motivation",date:"2024-2025",attendees:"800+ Across Regional Hubs",impact:"Institutional adoption of daily micro-wellness checkpoints."},{id:"eng-7",client:"Indigo Airlines",location:"Delhi, India",scope:"Domestic",category:"Aviation Well-Being & Stress Management",date:"2024",attendees:"Flight Operations & Crew Leadership",impact:"Equipped teams with acute stress recovery and focus protocols."},{id:"eng-8",client:"Shardul Amarchand Mangaldas",location:"Mumbai, India",scope:"Domestic",category:"Executive Composure in Law",date:"2024",attendees:"Partners & Senior Associates",impact:"Stress mitigation and mental clarity masterclasses for top legal counsel."},{id:"eng-9",client:"TATA AIG",location:"Connor, India",scope:"Domestic",category:"Annual Leadership Summit",date:"2024",attendees:"Executive Committee & VPs",impact:"Grit, purpose alignment, and customer empathy frameworks."},{id:"eng-10",client:"Turtlemint Insurance",location:"Maharashtra, India",scope:"Domestic",category:"Staff Engagement & Motivation",date:"2024",attendees:"InsurTech Growth Leaders",impact:"Fostered high-trust collaborative growth culture."},{id:"eng-11",client:"ELP (Economic Laws Practice)",location:"Pune, India",scope:"Domestic",category:"Corporate Legal Wellness",date:"2024",attendees:"Corporate Law Professionals",impact:"Work-life balance and high-stakes decision clarity."},{id:"eng-12",client:"Burns & McDonnell",location:"Mumbai, India",scope:"Domestic",category:"Engineering Wellness Masterclass",date:"2025",attendees:"Design & Construction Engineers",impact:"Practical cognitive ergonomics for complex technical deliveries."},{id:"eng-13",client:"Mango Sciences",location:"Goa, India",scope:"Domestic",category:"Healthcare Tech Offsite",date:"2024",attendees:"HealthTech Innovators",impact:"Mindset shifts and resilience training for high-velocity startup pace."},{id:"eng-14",client:"Uniworld Logistics",location:"Delhi, India",scope:"Domestic",category:"Supply Chain Stress Mastery",date:"2024",attendees:"Logistics Managers",impact:"High-pressure communication and crisis composure."},{id:"eng-15",client:"APAR Industries (Holistic Health & Workout)",location:"Mumbai, India",scope:"Domestic",category:"Manufacturing Well-Being Conclave",date:"2024",attendees:"Industrial Workforce & Plant Managers",impact:"Physical fitness, posture ergonomics, and mental wellness."},{id:"eng-int-1",client:"Absa Bank",location:"Mauritius",scope:"Global",category:"International Corporate Well-Being Summit",date:"2025",attendees:"500+ International Corporate Bankers",impact:"Rated best leadership keynote of the annual African convention."},{id:"eng-int-2",client:"Amana Bank",location:"Tanzania",scope:"Global",category:"East African Banking Convention",date:"2024",attendees:"Executive Directors & Bank Leadership",impact:"Cross-cultural purpose alignment and customer-centric motivation."},{id:"eng-int-3",client:"Harvard Club : Sri Lanka x APAC",location:"Colombo, Sri Lanka",scope:"Global",category:"Harvard Alumni Global Keynote",date:"2024",attendees:"APAC Harvard Alumni & Regional CXOs",impact:'Standing ovation on "This Is How The Good Companies Find The Good Company".'},{id:"eng-int-4",client:"Alizz Islamic Bank",location:"Oman",scope:"Global",category:"Middle East Leadership Symposium",date:"2024",attendees:"Oman Banking Leaders",impact:"Values-based leadership and mental resilience."},{id:"eng-int-5",client:"Global Indian School (Teachers & Students)",location:"Dubai, UAE",scope:"Global",category:"Educational Well-Being & Youth Mentorship",date:"2024",attendees:"Faculty Educators & Senior Students",impact:"Empowering future leaders with emotional intelligence and Ikigai purpose."}],Wm=[{id:"inq-1",name:"Vikram Malhotra",company:"Reliance Industries",email:"vikram.m@example.com",phone:"+91 98200 12345",program:"Leadership Deep Dive",headcount:"50-100 Executives",preferredDate:"November 2026",message:"Seeking a 2-day offsite intervention for our VP cohort on resilience and emotional intelligence.",status:"Contacted",date:"2026-10-14"},{id:"inq-2",name:"Priya Nambiar",company:"Deloitte Consulting",email:"priya.n@example.com",phone:"+91 98450 67890",program:"Engaging Workshops",headcount:"200+ Team Members",preferredDate:"December 2026",message:"Interested in a mindfulness & productivity workshop before our annual sprint cycle.",status:"Pending",date:"2026-10-15"}];function ny({children:s}){const[e,t]=xe.useState(()=>{const O=localStorage.getItem("hqx_faculty_v2");return O?JSON.parse(O):Bm}),[r,o]=xe.useState(()=>{const O=localStorage.getItem("hqx_courses_v2");return O?JSON.parse(O):zm}),[l,u]=xe.useState(()=>{const O=localStorage.getItem("hqx_books_v2");return O?JSON.parse(O):Hm}),[d,f]=xe.useState(()=>{const O=localStorage.getItem("hqx_podcasts_v3");return O?JSON.parse(O):Vm}),[m,v]=xe.useState(()=>{const O=localStorage.getItem("hqx_engagements_v2");return O?JSON.parse(O):Gm}),[y,x]=xe.useState(()=>{const O=localStorage.getItem("hqx_inquiries_v2");return O?JSON.parse(O):Wm}),[M,T]=xe.useState(()=>{const O=localStorage.getItem("hqx_richtext_v2");return O?JSON.parse(O):{bannerTagline:'"This Is How The Good Companies Find The Good Company"',heroHeadline:"Manny Anchan",heroSubtext:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Harvard & Columbia Business School alum. Researched Ikigai, Hygge, Lagom, Sisu, to Gross National Happiness.",quoteText:"Those who feel better work better.",quoteSubtext:"Employee well-being is a strategic, hands-on, immersive, and disciplined investment that enhances intrinsic motivation, increases productivity, and elevates retention.",fontSize:"text-base",fontWeight:"font-normal",fontColor:"#0A0A0A"}});xe.useEffect(()=>{localStorage.setItem("hqx_faculty_v2",JSON.stringify(e))},[e]),xe.useEffect(()=>{localStorage.setItem("hqx_courses_v2",JSON.stringify(r))},[r]),xe.useEffect(()=>{localStorage.setItem("hqx_books_v2",JSON.stringify(l))},[l]),xe.useEffect(()=>{localStorage.setItem("hqx_podcasts_v3",JSON.stringify(d))},[d]),xe.useEffect(()=>{localStorage.setItem("hqx_engagements_v2",JSON.stringify(m))},[m]),xe.useEffect(()=>{localStorage.setItem("hqx_inquiries_v2",JSON.stringify(y))},[y]),xe.useEffect(()=>{localStorage.setItem("hqx_richtext_v2",JSON.stringify(M))},[M]);const R=O=>{const z={...O,id:`inq-${Date.now()}`,date:new Date().toISOString().split("T")[0],status:"Pending"};return x(H=>[z,...H]),z},S=(O,z)=>{x(H=>H.map(L=>L.id===O?{...L,status:z}:L))},_=O=>{const z={...O,id:`f-${Date.now()}`};t(H=>[...H,z])},N=(O,z)=>{t(H=>H.map(L=>L.id===O?{...L,...z}:L))},B=O=>{t(z=>z.filter(H=>H.id!==O))},C=O=>{const z={...O,id:`c-${Date.now()}`};o(H=>[...H,z])},P=(O,z)=>{o(H=>H.map(L=>L.id===O?{...L,...z}:L))},I=O=>{o(z=>z.filter(H=>H.id!==O))},F=O=>{const z={...O,id:`b-${Date.now()}`};u(H=>[...H,z])},E=(O,z)=>{u(H=>H.map(L=>L.id===O?{...L,...z}:L))},D=O=>{u(z=>z.filter(H=>H.id!==O))},V=O=>{const z={...O,id:`p-${Date.now()}`};f(H=>[z,...H])},j=(O,z)=>{f(H=>H.map(L=>L.id===O?{...L,...z}:L))},$=O=>{f(z=>z.filter(H=>H.id!==O))},te=O=>{const z={...O,id:`e-${Date.now()}`};v(H=>[z,...H])},q=(O,z)=>{v(H=>H.map(L=>L.id===O?{...L,...z}:L))},Z=O=>{v(z=>z.filter(H=>H.id!==O))},fe=O=>{T(z=>({...z,...O}))},Q=()=>{localStorage.removeItem("hqx_faculty_v2"),localStorage.removeItem("hqx_courses_v2"),localStorage.removeItem("hqx_books_v2"),localStorage.removeItem("hqx_podcasts_v3"),localStorage.removeItem("hqx_engagements_v2"),localStorage.removeItem("hqx_inquiries_v2"),localStorage.removeItem("hqx_richtext_v2"),t(Bm),o(zm),u(Hm),f(Vm),v(Gm),x(Wm)};return p.jsx(dg.Provider,{value:{faculty:e,courses:r,books:l,podcasts:d,engagements:m,inquiries:y,cmsRichText:M,founderProfile:Y_,keyThemes:K_,wellbeingPillars:$_,engagementBenefits:Z_,statesCovered:J_,globalCountries:Q_,printMedia:ey,trustedBrands:ty,addInquiry:R,updateInquiryStatus:S,addFaculty:_,updateFaculty:N,deleteFaculty:B,addCourse:C,updateCourse:P,deleteCourse:I,addBook:F,updateBook:E,deleteBook:D,addPodcast:V,updatePodcast:j,deletePodcast:$,addEngagement:te,updateEngagement:q,deleteEngagement:Z,updateCmsRichText:fe,resetToDefaults:Q},children:s})}function fg(){const s=xe.useContext(dg);if(!s)throw new Error("useData must be used within a DataProvider");return s}const hg=xe.createContext({theme:"light",isDark:!1,toggleTheme:()=>{},setTheme:()=>{}});function iy({children:s}){const[e,t]=xe.useState(()=>{if(typeof window<"u"){const u=localStorage.getItem("hqx-theme");if(u==="light"||u==="dark")return u;if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"}),r=e==="dark";xe.useEffect(()=>{const u=document.documentElement;e==="dark"?(u.classList.add("dark"),u.classList.remove("light"),u.style.colorScheme="dark"):(u.classList.remove("dark"),u.classList.add("light"),u.style.colorScheme="light");try{localStorage.setItem("hqx-theme",e)}catch{}},[e]),xe.useEffect(()=>{if(typeof window>"u"||!window.matchMedia)return;const u=window.matchMedia("(prefers-color-scheme: dark)"),d=f=>{localStorage.getItem("hqx-theme")||t(f.matches?"dark":"light")};return u.addEventListener("change",d),()=>u.removeEventListener("change",d)},[]);const o=()=>{t(u=>u==="dark"?"light":"dark")},l=u=>{(u==="dark"||u==="light")&&t(u)};return p.jsx(hg.Provider,{value:{theme:e,isDark:r,toggleTheme:o,setTheme:l},children:s})}function pg(){const s=xe.useContext(hg);if(!s)throw new Error("useTheme must be used within a ThemeProvider");return s}/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mg=(...s)=>s.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=xe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>xe.createElement("svg",{ref:f,...sy,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:mg("lucide",o),...d},[...u.map(([m,v])=>xe.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(s,e)=>{const t=xe.forwardRef(({className:r,...o},l)=>xe.createElement(ay,{ref:l,iconNode:e,className:mg(`lucide-${ry(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Vt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Vt("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=Vt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Vt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=Vt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Vt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Vt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=Vt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Vt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Vt("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Vt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Vt("Dumbbell",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=Vt("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Vt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=Vt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=Vt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=Vt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Vt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=Vt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=Vt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=Vt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=Vt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=Vt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=Vt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=Vt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=Vt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=Vt("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=Vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function qm({className:s="",showLabel:e=!1}){const{theme:t,toggleTheme:r,isDark:o}=pg();return p.jsxs("button",{type:"button",onClick:r,className:`relative inline-flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full border transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-hq-yellow/50 ${o?"bg-[#15161A] text-hq-yellow border-white/15 hover:border-hq-yellow hover:bg-hq-yellow hover:text-hq-black":"bg-white text-hq-black border-hq-black/15 hover:border-hq-black hover:bg-hq-yellow hover:text-hq-black shadow-sm"} ${s}`,"aria-label":`Switch to ${o?"light":"dark"} mode`,title:`Switch to ${o?"light":"dark"} mode`,children:[p.jsx("div",{className:"relative w-4 h-4 flex items-center justify-center",children:o?p.jsx(Ty,{className:"w-4 h-4 text-hq-yellow group-hover:text-hq-black transition-transform duration-300 group-hover:rotate-45"}):p.jsx(Sy,{className:"w-4 h-4 text-hq-black group-hover:text-hq-black transition-transform duration-300 group-hover:-rotate-12"})}),e&&p.jsx("span",{className:"font-mono text-xs uppercase tracking-wider font-semibold",children:o?"Light Mode":"Dark Mode"})]})}function Hd({className:s="h-8 w-auto",iconOnly:e=!1,textColor:t,yellowFill:r="#FFCD00",swooshFill:o="#0A0A0A",squircleStroke:l="none",squircleStrokeWidth:u=0,...d}){return e?p.jsxs("svg",{viewBox:"0 0 252 253",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,...d,children:[p.jsx("rect",{x:"0",y:"0",width:"252",height:"253",rx:"52",ry:"52",fill:r,stroke:l,strokeWidth:u}),p.jsx("path",{d:"M 110.00 184.50 L 96.00 184.50 L 95.00 183.50 L 91.00 183.50 L 90.00 182.50 L 85.00 181.50 L 81.00 179.50 L 79.00 177.50 L 76.00 176.50 L 66.00 167.50 L 65.00 167.50 L 54.50 156.00 L 54.50 155.00 L 48.50 148.00 L 46.50 144.00 L 40.50 136.00 L 36.50 128.00 L 34.50 126.00 L 29.50 115.00 L 30.00 114.50 L 32.00 115.50 L 40.00 122.50 L 41.00 122.50 L 55.00 132.50 L 75.00 142.50 L 81.00 143.50 L 82.00 144.50 L 86.00 144.50 L 87.00 145.50 L 102.00 145.50 L 103.00 144.50 L 109.00 144.50 L 110.00 143.50 L 113.00 143.50 L 114.00 142.50 L 121.00 141.50 L 127.00 138.50 L 132.00 137.50 L 137.00 134.50 L 139.00 134.50 L 149.00 129.50 L 151.00 127.50 L 158.00 124.50 L 160.00 122.50 L 163.00 121.50 L 165.00 119.50 L 166.00 119.50 L 180.00 109.50 L 181.00 109.50 L 184.00 106.50 L 185.00 106.50 L 188.00 103.50 L 189.00 103.50 L 192.00 100.50 L 193.00 100.50 L 197.00 96.50 L 198.00 96.50 L 207.50 88.00 L 203.00 83.50 L 202.00 83.50 L 198.50 80.00 L 199.00 79.50 L 206.00 79.50 L 207.00 80.50 L 210.00 80.50 L 211.00 79.50 L 218.00 79.50 L 219.00 78.50 L 222.00 78.50 L 223.00 77.50 L 226.00 77.50 L 227.00 76.50 L 230.50 77.00 L 230.50 78.00 L 222.50 89.00 L 222.50 90.00 L 219.50 93.00 L 219.50 94.00 L 216.50 97.00 L 216.50 98.00 L 210.50 105.00 L 210.50 106.00 L 206.50 110.00 L 206.50 111.00 L 201.50 116.00 L 201.50 117.00 L 196.50 122.00 L 196.50 123.00 L 188.50 131.00 L 188.50 132.00 L 171.00 149.50 L 170.00 149.50 L 157.00 161.50 L 156.00 161.50 L 153.00 164.50 L 152.00 164.50 L 141.00 172.50 L 127.00 179.50 L 125.00 179.50 L 122.00 181.50 L 116.00 182.50 L 115.00 183.50 L 111.00 183.50 L 110.00 184.50 Z",fill:o})]}):p.jsxs("svg",{viewBox:"0 0 606 270",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s,...d,children:[p.jsx("rect",{x:"0",y:"0",width:"252",height:"253",rx:"52",ry:"52",fill:r,stroke:l,strokeWidth:u}),p.jsx("path",{d:"M 110.00 184.50 L 96.00 184.50 L 95.00 183.50 L 91.00 183.50 L 90.00 182.50 L 85.00 181.50 L 81.00 179.50 L 79.00 177.50 L 76.00 176.50 L 66.00 167.50 L 65.00 167.50 L 54.50 156.00 L 54.50 155.00 L 48.50 148.00 L 46.50 144.00 L 40.50 136.00 L 36.50 128.00 L 34.50 126.00 L 29.50 115.00 L 30.00 114.50 L 32.00 115.50 L 40.00 122.50 L 41.00 122.50 L 55.00 132.50 L 75.00 142.50 L 81.00 143.50 L 82.00 144.50 L 86.00 144.50 L 87.00 145.50 L 102.00 145.50 L 103.00 144.50 L 109.00 144.50 L 110.00 143.50 L 113.00 143.50 L 114.00 142.50 L 121.00 141.50 L 127.00 138.50 L 132.00 137.50 L 137.00 134.50 L 139.00 134.50 L 149.00 129.50 L 151.00 127.50 L 158.00 124.50 L 160.00 122.50 L 163.00 121.50 L 165.00 119.50 L 166.00 119.50 L 180.00 109.50 L 181.00 109.50 L 184.00 106.50 L 185.00 106.50 L 188.00 103.50 L 189.00 103.50 L 192.00 100.50 L 193.00 100.50 L 197.00 96.50 L 198.00 96.50 L 207.50 88.00 L 203.00 83.50 L 202.00 83.50 L 198.50 80.00 L 199.00 79.50 L 206.00 79.50 L 207.00 80.50 L 210.00 80.50 L 211.00 79.50 L 218.00 79.50 L 219.00 78.50 L 222.00 78.50 L 223.00 77.50 L 226.00 77.50 L 227.00 76.50 L 230.50 77.00 L 230.50 78.00 L 222.50 89.00 L 222.50 90.00 L 219.50 93.00 L 219.50 94.00 L 216.50 97.00 L 216.50 98.00 L 210.50 105.00 L 210.50 106.00 L 206.50 110.00 L 206.50 111.00 L 201.50 116.00 L 201.50 117.00 L 196.50 122.00 L 196.50 123.00 L 188.50 131.00 L 188.50 132.00 L 171.00 149.50 L 170.00 149.50 L 157.00 161.50 L 156.00 161.50 L 153.00 164.50 L 152.00 164.50 L 141.00 172.50 L 127.00 179.50 L 125.00 179.50 L 122.00 181.50 L 116.00 182.50 L 115.00 183.50 L 111.00 183.50 L 110.00 184.50 Z",fill:o}),p.jsx("path",{d:"M 391.00 244.50 L 345.50 244.00 L 345.00 138.50 L 322.50 139.00 L 322.50 244.00 L 277.50 244.00 L 278.00 11.50 L 322.50 12.00 L 323.00 94.50 L 345.50 94.00 L 345.50 12.00 L 391.50 12.00 L 391.00 244.50 Z",fill:t||"currentColor"}),p.jsx("path",{d:"M 515.00 268.50 L 511.00 266.50 L 509.00 264.50 L 508.00 264.50 L 500.00 258.50 L 499.00 258.50 L 479.00 244.50 L 477.00 244.50 L 476.00 245.50 L 472.00 245.50 L 471.00 246.50 L 457.00 246.50 L 456.00 245.50 L 451.00 245.50 L 450.00 244.50 L 447.00 244.50 L 446.00 243.50 L 441.00 242.50 L 433.00 238.50 L 431.00 236.50 L 430.00 236.50 L 421.50 228.00 L 419.50 224.00 L 417.50 222.00 L 414.50 216.00 L 413.50 211.00 L 412.50 210.00 L 412.50 207.00 L 411.50 206.00 L 411.50 203.00 L 410.50 202.00 L 410.50 196.00 L 409.50 195.00 L 409.50 59.00 L 410.50 58.00 L 410.50 53.00 L 411.50 52.00 L 411.50 48.00 L 412.50 47.00 L 413.50 42.00 L 419.50 30.00 L 430.00 19.50 L 431.00 19.50 L 436.00 15.50 L 440.00 14.50 L 446.00 11.50 L 449.00 11.50 L 450.00 10.50 L 455.00 10.50 L 456.00 9.50 L 477.00 9.50 L 478.00 10.50 L 483.00 10.50 L 484.00 11.50 L 487.00 11.50 L 491.00 13.50 L 493.00 13.50 L 502.00 18.50 L 510.50 26.00 L 510.50 27.00 L 515.50 33.00 L 519.50 41.00 L 519.50 43.00 L 521.50 47.00 L 521.50 50.00 L 522.50 51.00 L 522.50 56.00 L 523.50 57.00 L 523.50 197.00 L 522.50 198.00 L 522.50 203.00 L 521.50 204.00 L 521.50 207.00 L 520.50 208.00 L 519.50 214.00 L 514.50 224.00 L 512.50 226.00 L 511.50 229.00 L 522.00 236.50 L 528.00 239.50 L 530.50 242.00 L 530.50 243.00 L 528.50 245.00 L 526.50 250.00 L 524.50 252.00 L 518.50 264.00 L 515.00 268.50 Z M 471.50 203.00 L 475.50 198.00 L 475.50 196.00 L 476.50 195.00 L 476.50 190.00 L 477.50 189.00 L 477.50 64.00 L 476.50 63.00 L 475.50 57.00 L 473.00 53.50 L 469.00 51.50 L 464.00 51.50 L 463.00 52.50 L 461.00 52.50 L 457.50 56.00 L 457.50 58.00 L 455.50 62.00 L 455.50 194.00 L 456.50 195.00 L 457.50 199.00 L 462.00 203.50 L 471.50 203.00 Z",fill:t||"currentColor",fillRule:"evenodd"}),p.jsx("path",{d:"M 593.00 105.50 L 573.00 105.50 L 571.50 104.00 L 571.50 102.00 L 569.50 99.00 L 569.50 97.00 L 568.50 96.00 L 568.50 94.00 L 567.50 93.00 L 567.50 91.00 L 564.50 85.00 L 564.50 83.00 L 563.50 82.00 L 563.00 79.50 L 561.50 80.00 L 561.50 82.00 L 560.50 83.00 L 560.50 85.00 L 559.50 86.00 L 559.50 88.00 L 558.50 89.00 L 558.50 91.00 L 557.50 92.00 L 557.50 94.00 L 556.50 95.00 L 556.50 97.00 L 555.50 98.00 L 555.50 100.00 L 554.50 101.00 L 553.50 105.00 L 537.50 105.00 L 537.50 103.00 L 538.50 102.00 L 540.50 94.00 L 542.50 91.00 L 542.50 89.00 L 543.50 88.00 L 544.50 83.00 L 546.50 79.00 L 546.50 77.00 L 548.50 73.00 L 549.50 68.00 L 550.50 67.00 L 550.50 65.00 L 551.50 64.00 L 552.50 59.00 L 553.50 58.00 L 553.50 56.00 L 554.50 55.00 L 553.50 54.00 L 552.50 49.00 L 550.50 46.00 L 548.50 38.00 L 546.50 35.00 L 546.50 33.00 L 545.50 32.00 L 543.50 24.00 L 541.50 21.00 L 541.50 19.00 L 540.50 18.00 L 539.50 13.00 L 538.50 12.00 L 539.00 11.50 L 560.00 11.50 L 561.50 13.00 L 562.50 18.00 L 564.50 21.00 L 565.50 26.00 L 566.50 27.00 L 567.50 32.00 L 569.00 34.50 L 570.50 33.00 L 570.50 31.00 L 571.50 30.00 L 571.50 28.00 L 572.50 27.00 L 572.50 25.00 L 573.50 24.00 L 574.50 19.00 L 575.50 18.00 L 575.50 16.00 L 578.00 11.50 L 593.50 12.00 L 592.50 13.00 L 592.50 15.00 L 591.50 16.00 L 591.50 18.00 L 590.50 19.00 L 590.50 21.00 L 589.50 22.00 L 589.50 24.00 L 587.50 28.00 L 586.50 33.00 L 584.50 36.00 L 583.50 41.00 L 582.50 42.00 L 581.50 47.00 L 580.50 48.00 L 578.50 56.00 L 577.50 57.00 L 577.50 60.00 L 579.50 63.00 L 579.50 65.00 L 580.50 66.00 L 580.50 68.00 L 581.50 69.00 L 581.50 71.00 L 583.50 75.00 L 583.50 77.00 L 585.50 80.00 L 585.50 82.00 L 586.50 83.00 L 588.50 91.00 L 590.50 94.00 L 590.50 96.00 L 591.50 97.00 L 592.50 102.00 L 593.50 103.00 L 593.00 105.50 Z",fill:t||"currentColor"})]})}function Ry(){const[s,e]=xe.useState(!1),[t,r]=xe.useState(!1),o=fa(),l=o.pathname==="/",u=s||!l;xe.useEffect(()=>{const f=()=>{e(window.scrollY>40)};return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),xe.useEffect(()=>{r(!1)},[o.pathname]);const d=(f,m)=>{if(f&&f.preventDefault&&f.preventDefault(),r(!1),!m||m==="top"){window.scrollTo({top:0,behavior:"smooth"});return}const v=document.getElementById(m);v?v.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})};return p.jsxs(p.Fragment,{children:[p.jsx("nav",{id:"navbar",className:`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex items-center ${u?"bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md text-hq-black dark:text-white shadow-md dark:shadow-2xl py-4 border-b border-hq-black/10 dark:border-white/10":"bg-transparent text-white py-6 border-b border-transparent shadow-none"}`,children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center",children:[p.jsxs(Ze,{to:"/",onClick:f=>d(f,"top"),className:"flex items-center gap-3 group","aria-label":"HQX Home",children:[p.jsx(Hd,{className:"h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105"}),p.jsx("span",{className:`hidden sm:inline-block pl-3 border-l text-[11px] tracking-widest font-body uppercase font-medium ${u?"border-hq-black/20 text-hq-black/60 dark:border-white/20 dark:text-white/60":"border-white/20 text-white/60"}`,children:"Happiness Samurai"})]}),p.jsxs("div",{className:"hidden lg:flex items-center gap-7 font-body text-[13.5px] tracking-widest uppercase font-medium",children:[p.jsxs("div",{className:"group relative",children:[p.jsxs("button",{onClick:f=>d(f,"reasons-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["ABOUT US ",p.jsx(Qa,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),p.jsx("div",{className:"absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:p.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[p.jsxs(Ze,{to:"/#top",onClick:f=>d(f,"top"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"FOUNDER"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"MANNY ANCHAN"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#team-section",onClick:f=>d(f,"team-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"TEAM"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"ADVISORY FACULTY & MENTORS"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#reasons-section",onClick:f=>d(f,"reasons-section"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"WHY HQX"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"THE EUDAIMONIC ADVANTAGE"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]})]})})]}),p.jsxs("div",{className:"group relative",children:[p.jsxs("button",{onClick:f=>d(f,"worklife-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["ETHOS ",p.jsx(Qa,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),p.jsx("div",{className:"absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:p.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[p.jsxs(Ze,{to:"/#worklife-section",onClick:f=>d(f,"worklife-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase",children:[p.jsx("span",{className:"uppercase",children:"EUDAIMONIC TRANSFORMATION"}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#reasons-section",onClick:f=>d(f,"reasons-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase",children:[p.jsx("span",{className:"uppercase",children:"WELL-BEING ETHOS (5 PILLARS)"}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#top",onClick:f=>d(f,"top"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase",children:[p.jsx("span",{className:"uppercase",children:"MEET MANNY ANCHAN"}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]})]})})]}),p.jsxs("div",{className:"group relative",children:[p.jsxs("button",{onClick:f=>d(f,"key-themes-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["PROGRAMS ",p.jsx(Qa,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),p.jsx("div",{className:"absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:p.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[p.jsxs(Ze,{to:"/#key-themes-section",onClick:f=>d(f,"key-themes-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"LEADERSHIP DEEP DIVE"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"EXECUTIVE RETREAT & PURPOSE ALIGNMENT"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#key-themes-section",onClick:f=>d(f,"key-themes-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"ENGAGING WORKSHOPS"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"MINDFULNESS, PRODUCTIVITY & GRIT"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#key-themes-section",onClick:f=>d(f,"key-themes-section"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"KEYNOTES & FRIDAY TALKS"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"DISRUPTIVE CORPORATE TOWNHALLS"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]})]})})]}),p.jsxs("div",{className:"group relative",children:[p.jsxs("button",{onClick:f=>d(f,"benefits-section"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["DIGITAL ",p.jsx(Qa,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),p.jsx("div",{className:"absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:p.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[p.jsxs(Ze,{to:"/#benefits-section",onClick:f=>d(f,"benefits-section"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"MICRO COURSES"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"100-DAY MASTERY BLUEPRINTS"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#benefits-section",onClick:f=>d(f,"benefits-section"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"HAPPYU APP"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"MEDITATION, GRATITUDE & MOOD TRACK"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]})]})})]}),p.jsxs("div",{className:"group relative",children:[p.jsxs("button",{onClick:f=>d(f,"podcast"),className:"flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer",children:["MEDIA & BOOKS ",p.jsx(Qa,{className:"w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300"})]}),p.jsx("div",{className:"absolute top-full right-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']",children:p.jsxs("div",{className:"bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden",children:[p.jsxs(Ze,{to:"/#podcast",onClick:f=>d(f,"podcast"),className:"px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"HQX PODCAST"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"FORTNIGHTLY EXECUTIVE INSIGHTS"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]}),p.jsxs(Ze,{to:"/#books",onClick:f=>d(f,"books"),className:"px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold text-[13.5px] uppercase",children:"LITERATURE & BOOKS"}),p.jsx("div",{className:"text-[11px] text-hq-black/60 font-medium uppercase tracking-wider",children:"2020 TO 2025 ROADMAP"})]}),p.jsx(Zn,{className:"w-4 h-4 opacity-60"})]})]})})]})]}),p.jsxs("div",{className:"flex items-center gap-2.5 sm:gap-3",children:[p.jsx(qm,{}),p.jsxs(Ze,{to:"#contact",onClick:f=>d(f,"contact"),className:"nav-book-btn font-display text-[13.5px] uppercase tracking-wider bg-hq-yellow text-[#0A0A0A] hover:!bg-[#0A0A0A] hover:!text-white dark:hover:!bg-white dark:hover:!text-[#0A0A0A] px-5 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg shadow-hq-yellow/20 flex items-center gap-2.5 group cursor-pointer",children:[p.jsx("span",{className:"text-[#0A0A0A] group-hover:!text-white dark:group-hover:!text-[#0A0A0A] transition-colors",children:"BOOK MANNY"}),p.jsxs("svg",{className:"w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 text-[#0A0A0A] group-hover:!text-white dark:group-hover:!text-[#0A0A0A]",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1.2"}),p.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),p.jsx("button",{onClick:()=>r(!t),className:`lg:hidden p-2 transition-colors rounded-xl ${u?"text-hq-black dark:text-white hover:text-hq-yellow":"text-white hover:text-hq-yellow"}`,"aria-label":"Toggle menu",children:t?p.jsx(xg,{className:"w-6 h-6"}):p.jsx(yy,{className:"w-6 h-6"})})]})]})}),t&&p.jsxs("div",{className:"fixed inset-0 z-40 bg-hq-black text-hq-white pt-24 px-6 pb-12 overflow-y-auto lg:hidden flex flex-col justify-between",children:[p.jsxs("div",{className:"flex flex-col gap-6 font-display text-xl uppercase tracking-wider",children:[p.jsx(Ze,{to:"/",onClick:f=>d(f,"top"),className:"py-2 border-b border-white/10 hover:text-hq-yellow uppercase",children:"HOME"}),p.jsxs("div",{className:"py-2 border-b border-white/10",children:[p.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"ABOUT US"}),p.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[p.jsx(Ze,{to:"/#top",onClick:f=>d(f,"top"),className:"hover:text-hq-yellow uppercase",children:"FOUNDER (MANNY ANCHAN)"}),p.jsx(Ze,{to:"/#team-section",onClick:f=>d(f,"team-section"),className:"hover:text-hq-yellow uppercase",children:"TEAM (ADVISORY FACULTY)"}),p.jsx(Ze,{to:"/#reasons-section",onClick:f=>d(f,"reasons-section"),className:"hover:text-hq-yellow uppercase",children:"WHY HQX"})]})]}),p.jsxs("div",{className:"py-2 border-b border-white/10",children:[p.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"ETHOS"}),p.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[p.jsx(Ze,{to:"/#worklife-section",onClick:f=>d(f,"worklife-section"),className:"hover:text-hq-yellow uppercase",children:"EUDAIMONIC TRANSFORMATION"}),p.jsx(Ze,{to:"/#reasons-section",onClick:f=>d(f,"reasons-section"),className:"hover:text-hq-yellow uppercase",children:"WELL-BEING ETHOS (5 PILLARS)"}),p.jsx(Ze,{to:"/#top",onClick:f=>d(f,"top"),className:"hover:text-hq-yellow uppercase",children:"MEET MANNY ANCHAN"})]})]}),p.jsxs("div",{className:"py-2 border-b border-white/10",children:[p.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"CORPORATE PROGRAMS"}),p.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[p.jsx(Ze,{to:"/#key-themes-section",onClick:f=>d(f,"key-themes-section"),className:"hover:text-hq-yellow uppercase",children:"LEADERSHIP DEEP DIVE"}),p.jsx(Ze,{to:"/#key-themes-section",onClick:f=>d(f,"key-themes-section"),className:"hover:text-hq-yellow uppercase",children:"ENGAGING WORKSHOPS"}),p.jsx(Ze,{to:"/#key-themes-section",onClick:f=>d(f,"key-themes-section"),className:"hover:text-hq-yellow uppercase",children:"KEYNOTES & FRIDAY TALKS"})]})]}),p.jsxs("div",{className:"py-2 border-b border-white/10",children:[p.jsx("div",{className:"text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono",children:"DIGITAL PRODUCTS"}),p.jsxs("div",{className:"flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider",children:[p.jsx(Ze,{to:"/#benefits-section",onClick:f=>d(f,"benefits-section"),className:"hover:text-hq-yellow uppercase",children:"MICRO COURSES (100-DAY)"}),p.jsx(Ze,{to:"/#benefits-section",onClick:f=>d(f,"benefits-section"),className:"hover:text-hq-yellow uppercase",children:"HAPPYU APP"})]})]}),p.jsx(Ze,{to:"/#podcast",onClick:f=>d(f,"podcast"),className:"py-2 border-b border-white/10 hover:text-hq-yellow uppercase",children:"HQX PODCAST"}),p.jsx(Ze,{to:"/#books",onClick:f=>d(f,"books"),className:"py-2 border-b border-white/10 hover:text-hq-yellow uppercase",children:"BOOKS & ROADMAP"})]}),p.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col gap-4",children:[p.jsxs("div",{className:"flex items-center justify-between py-1 px-1",children:[p.jsx("span",{className:"font-mono text-xs uppercase tracking-widest text-white/70",children:"THEME MODE"}),p.jsx(qm,{showLabel:!0})]}),p.jsx(Ze,{to:"#contact",onClick:f=>d(f,"contact"),className:"w-full text-center bg-hq-yellow text-[#0A0A0A] font-display font-semibold uppercase tracking-widest py-4 rounded-full text-sm hover:bg-white transition-colors",children:"Book Corporate Session"}),p.jsxs("a",{href:"tel:+919700100800",className:"text-center font-mono text-xs tracking-widest text-white/70 hover:text-hq-yellow flex items-center justify-center gap-2",children:[p.jsx(gg,{className:"w-3.5 h-3.5 text-hq-yellow"}),"Direct: +91 97001 00800"]})]})]})]})}function Ly(){const{addInquiry:s}=fg(),[e,t]=xe.useState(""),[r,o]=xe.useState(!1);return p.jsxs("footer",{id:"contact",className:"section-reveal bg-hq-yellow text-hq-black pt-20 md:pt-24 pb-6 sm:pb-8 relative overflow-hidden",children:[p.jsx("div",{className:"absolute right-0 bottom-16 sm:bottom-20 md:bottom-24 select-none pointer-events-none pr-4 sm:pr-8 md:pr-12 overflow-visible opacity-10 md:opacity-[0.12] transition-all",children:p.jsx(Hd,{className:"w-[300px] sm:w-[460px] md:w-[620px] lg:w-[760px] h-auto",textColor:"#000000",yellowFill:"rgba(0,0,0,0.12)",swooshFill:"#000000"})}),p.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10",children:[p.jsx("div",{className:"mb-8",children:p.jsx(Hd,{className:"h-12 md:h-14 w-auto",textColor:"#0A0A0A"})}),p.jsx("blockquote",{className:"font-serif italic text-xl md:text-2xl mb-4 tracking-wide text-hq-black/80",children:'"The Future of Work is Eudaimonic"'}),p.jsxs("h2",{className:"font-display text-6xl sm:text-7xl md:text-[8rem] tracking-tighter leading-[0.88] mb-8 font-semibold",children:["Shape ",p.jsx("br",{}),"Tomorrow"]}),p.jsx("p",{className:"font-body text-xl md:text-[22px] font-light mb-10 max-w-xl text-hq-black/85 leading-relaxed",children:"Ready to integrate the Functional Enhancement Model into your organization? Connect with Manny Anchan directly."}),p.jsxs("div",{className:"flex flex-wrap gap-4 sm:gap-5 justify-center items-center my-8 mb-16",children:[p.jsx(Ze,{to:"#contact",onClick:l=>{l.preventDefault();const u=document.getElementById("contact");u&&u.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center justify-center bg-hq-black text-hq-white font-display font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all shadow-xl hover:-translate-y-0.5",children:"Book Corporate Session Now"}),p.jsx("a",{href:"tel:+919700100800",className:"inline-flex items-center justify-center bg-white text-hq-black border border-hq-black font-display font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-black hover:text-white transition-all shadow-md hover:-translate-y-0.5",children:"CALL: +91 97001 00800"})]}),p.jsxs("div",{className:"w-full bg-hq-black text-hq-white p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16 shadow-2xl",children:[p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0",children:p.jsx(gg,{className:"w-5 h-5"})}),p.jsxs("div",{children:[p.jsx("div",{className:"text-[11px] uppercase font-display tracking-widest text-hq-white/50",children:"Direct Priority Hotline"}),p.jsx("a",{href:"tel:+919700100800",className:"font-display text-[20px] text-hq-yellow hover:underline tracking-tight font-semibold",children:"+91 97001 00800"}),p.jsx("div",{className:"text-[13.5px] text-hq-white/60 font-light mt-0.5",children:"Corporate Bookings & Retainers"})]})]}),p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0",children:p.jsx(vy,{className:"w-5 h-5"})}),p.jsxs("div",{children:[p.jsx("div",{className:"text-[11px] uppercase font-display tracking-widest text-hq-white/50",children:"Official Inquiries"}),p.jsx("a",{href:"mailto:connect@happinesssamurai.com",className:"font-display text-[20px] text-hq-white hover:text-hq-yellow hover:underline tracking-tight",children:"connect@happinesssamurai.com"}),p.jsx("div",{className:"text-[13.5px] text-hq-white/60 font-light mt-0.5",children:"Keynotes & Workshop Inquiries"})]})]}),p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0",children:p.jsx(_y,{className:"w-5 h-5"})}),p.jsxs("div",{children:[p.jsx("div",{className:"text-[11px] uppercase font-display tracking-widest text-hq-white/50",children:"Registered Headquarters"}),p.jsxs("div",{className:"font-body text-[13.5px] text-hq-white/90 leading-tight",children:["Happiness Quotient Global Pvt Ltd",p.jsx("br",{}),"203/B Koteshwar Palace, Andheri East, Mumbai"]}),p.jsx("div",{className:"text-[11px] font-mono text-hq-white/50 mt-1",children:"GSTIN: 27AAFCH1083G1ZP"})]})]})]}),p.jsxs("div",{className:"w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-left py-8 sm:py-9 border-t border-b border-hq-black/20 text-[13.5px] tracking-wider uppercase font-display",children:[p.jsxs("div",{children:[p.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"About & Ethos"}),p.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[p.jsx("li",{children:p.jsx(Ze,{to:"#reasons-section",onClick:()=>{var l;return(l=document.getElementById("reasons-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline font-semibold",children:"About Us"})}),p.jsx("li",{children:p.jsx(Ze,{to:"/#top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"hover:underline",children:"Founder (Manny Anchan)"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#team-section",onClick:()=>{var l;return(l=document.getElementById("team-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Our Team & Faculty"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#reasons-section",onClick:()=>{var l;return(l=document.getElementById("reasons-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Why HQX"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#worklife-section",onClick:()=>{var l;return(l=document.getElementById("worklife-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Eudaimonic Transformation"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#reasons-section",onClick:()=>{var l;return(l=document.getElementById("reasons-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"5 Well-Being Pillars"})})]})]}),p.jsxs("div",{children:[p.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"Corporate Interventions"}),p.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[p.jsx("li",{children:p.jsx(Ze,{to:"#key-themes-section",onClick:()=>{var l;return(l=document.getElementById("key-themes-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Leadership Deep Dive"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#key-themes-section",onClick:()=>{var l;return(l=document.getElementById("key-themes-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Engaging Workshops"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#key-themes-section",onClick:()=>{var l;return(l=document.getElementById("key-themes-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Keynotes & Friday Talks"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#contact",onClick:()=>{var l;return(l=document.getElementById("contact"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Custom Executive Coaching"})})]})]}),p.jsxs("div",{children:[p.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"Digital Offerings"}),p.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[p.jsx("li",{children:p.jsx(Ze,{to:"#benefits-section",onClick:()=>{var l;return(l=document.getElementById("benefits-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"HappyU App (iOS / Android)"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#benefits-section",onClick:()=>{var l;return(l=document.getElementById("benefits-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"100-Day Micro Courses"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#benefits-section",onClick:()=>{var l;return(l=document.getElementById("benefits-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Finding Your Ikigai"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#benefits-section",onClick:()=>{var l;return(l=document.getElementById("benefits-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Happiness in Money"})})]})]}),p.jsxs("div",{children:[p.jsx("div",{className:"font-bold text-[15.5px] mb-4 text-hq-black",children:"Media & Publications"}),p.jsxs("ul",{className:"space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80",children:[p.jsx("li",{children:p.jsx(Ze,{to:"#podcast",onClick:()=>{var l;return(l=document.getElementById("podcast"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"HQX Fortnightly Podcast"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#books",onClick:()=>{var l;return(l=document.getElementById("books"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Books (2020-2025)"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#team-section",onClick:()=>{var l;return(l=document.getElementById("team-section"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Global Faculty Directory"})}),p.jsx("li",{children:p.jsx(Ze,{to:"#contact",onClick:()=>{var l;return(l=document.getElementById("contact"))==null?void 0:l.scrollIntoView({behavior:"smooth"})},className:"hover:underline",children:"Book Manny Anchan"})})]})]})]}),p.jsxs("div",{className:"w-full flex flex-col md:flex-row justify-between items-center gap-5 font-display text-[13.5px] tracking-widest uppercase pt-5 pb-1 text-hq-black/85",children:[p.jsxs("div",{children:["© ",new Date().getFullYear()," HAPPINESS QUOTIENT GLOBAL PRIVATE LIMITED. ALL RIGHTS RESERVED."]}),p.jsxs("div",{className:"flex gap-8",children:[p.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"LinkedIn"}),p.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"YouTube"}),p.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"Instagram"}),p.jsx("a",{href:"https://spotify.com",target:"_blank",rel:"noreferrer",className:"hover:opacity-60 transition-opacity",children:"Spotify"})]}),p.jsxs("button",{type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"group inline-flex flex-col items-center gap-2 text-hq-black hover:opacity-60 transition-all cursor-pointer py-1 select-none","aria-label":"Back to top",children:[p.jsxs("svg",{width:"14",height:"46",viewBox:"0 0 14 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"group-hover:-translate-y-2 transition-transform duration-300",children:[p.jsx("line",{x1:"7",y1:"46",x2:"7",y2:"3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),p.jsx("polyline",{points:"2 8.5, 7 3, 12 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),p.jsx("span",{className:"font-display text-[11px] font-bold uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180",children:"Back to top"})]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="186",Ny=0,Xm=1,Py=2,ec=1,Iy=2,uo=3,cs=0,Dn=1,Ui=2,ar=0,ho=1,Ym=2,Km=3,$m=4,Dy=5,ia=100,ky=101,Uy=102,Fy=103,Oy=104,By=200,zy=201,Hy=202,Vy=203,vg=204,_g=205,Gy=206,Wy=207,jy=208,qy=209,Xy=210,Yy=211,Ky=212,$y=213,Zy=214,Vd=0,Gd=1,Wd=2,go=3,jd=4,qd=5,Xd=6,Yd=7,yg=0,Jy=1,Qy=2,zi=0,Sg=1,Mg=2,wg=3,Eg=4,bg=5,Tg=6,Ag=7,Cg=300,us=301,ca=302,nd=303,id=304,mc=306,Kd=1e3,sr=1001,$d=1002,Mn=1003,e1=1004,Rl=1005,In=1006,rd=1007,os=1008,ti=1009,Rg=1010,Lg=1011,xo=1012,Ff=1013,Vi=1014,Oi=1015,Gi=1016,Of=1017,Bf=1018,vo=1020,Ng=35902,Pg=35899,Ig=1021,Dg=1022,Ai=1023,lr=1026,ls=1027,kg=1028,zf=1029,ds=1030,Hf=1031,Vf=1033,tc=33776,nc=33777,ic=33778,rc=33779,Zd=35840,Jd=35841,Qd=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37488,af=37489,oc=37490,of=37491,lf=37808,cf=37809,uf=37810,df=37811,ff=37812,hf=37813,pf=37814,mf=37815,gf=37816,xf=37817,vf=37818,_f=37819,yf=37820,Sf=37821,Mf=36492,wf=36494,Ef=36495,bf=36283,Tf=36284,lc=36285,Af=36286,t1=3200,Cf=0,n1=1,Ir="",ei="srgb",cc="srgb-linear",uc="linear",zt="srgb",sd=7680,i1=519,r1=512,s1=513,a1=514,Gf=515,o1=516,l1=517,Wf=518,c1=519,Ug=35044,Zm="300 es",Bi=2e3,_o=2001;function u1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function d1(){const s=yo("canvas");return s.style.display="block",s}const Jm={};function dc(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ht(...s){s=Fg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function It(...s){s=Fg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function oa(...s){const e=s.join(" ");e in Jm||(Jm[e]=!0,ht(...s))}function f1(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const h1={[Vd]:Gd,[Wd]:Xd,[jd]:Yd,[go]:qd,[Gd]:Vd,[Xd]:Wd,[Yd]:jd,[qd]:go};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,Rf=180/Math.PI;function Ur(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function p1(s,e){return(s%e+e)%e}function od(s,e,t){return(1-t)*s+t*e}function Fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qf=class Qf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qf.prototype.isVector2=!0;let xt=Qf;class ha{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],m=r[o+1],v=r[o+2],y=r[o+3],x=l[u+0],M=l[u+1],T=l[u+2],R=l[u+3];if(y!==R||f!==x||m!==M||v!==T){let S=f*x+m*M+v*T+y*R;S<0&&(x=-x,M=-M,T=-T,R=-R,S=-S);let _=1-d;if(S<.9995){const N=Math.acos(S),B=Math.sin(N);_=Math.sin(_*N)/B,d=Math.sin(d*N)/B,f=f*_+x*d,m=m*_+M*d,v=v*_+T*d,y=y*_+R*d}else{f=f*_+x*d,m=m*_+M*d,v=v*_+T*d,y=y*_+R*d;const N=1/Math.sqrt(f*f+m*m+v*v+y*y);f*=N,m*=N,v*=N,y*=N}}e[t]=f,e[t+1]=m,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],m=r[o+2],v=r[o+3],y=l[u],x=l[u+1],M=l[u+2],T=l[u+3];return e[t]=d*T+v*y+f*M-m*x,e[t+1]=f*T+v*x+m*y-d*M,e[t+2]=m*T+v*M+d*x-f*y,e[t+3]=v*T-d*y-f*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,m=d(r/2),v=d(o/2),y=d(l/2),x=f(r/2),M=f(o/2),T=f(l/2);switch(u){case"XYZ":this._x=x*v*y+m*M*T,this._y=m*M*y-x*v*T,this._z=m*v*T+x*M*y,this._w=m*v*y-x*M*T;break;case"YXZ":this._x=x*v*y+m*M*T,this._y=m*M*y-x*v*T,this._z=m*v*T-x*M*y,this._w=m*v*y+x*M*T;break;case"ZXY":this._x=x*v*y-m*M*T,this._y=m*M*y+x*v*T,this._z=m*v*T+x*M*y,this._w=m*v*y-x*M*T;break;case"ZYX":this._x=x*v*y-m*M*T,this._y=m*M*y+x*v*T,this._z=m*v*T-x*M*y,this._w=m*v*y+x*M*T;break;case"YZX":this._x=x*v*y+m*M*T,this._y=m*M*y+x*v*T,this._z=m*v*T-x*M*y,this._w=m*v*y-x*M*T;break;case"XZY":this._x=x*v*y-m*M*T,this._y=m*M*y-x*v*T,this._z=m*v*T+x*M*y,this._w=m*v*y+x*M*T;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],m=t[2],v=t[6],y=t[10],x=r+d+y;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-f)*M,this._y=(l-m)*M,this._z=(u-o)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(v-f)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+m)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(l-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(f+v)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(u-o)/M,this._x=(l+m)/M,this._y=(f+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,m=t._z,v=t._w;return this._x=r*v+u*d+o*m-l*f,this._y=o*v+u*f+l*d-r*m,this._z=l*v+u*m+r*f-o*d,this._w=u*v-r*d-o*f-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let f=1-t;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);f=Math.sin(f*m)/v,t=Math.sin(t*m)/v,this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const eh=class eh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,m=2*(u*o-d*r),v=2*(d*t-l*o),y=2*(l*r-u*t);return this.x=t+f*m+u*y-d*v,this.y=r+f*v+d*m-l*y,this.z=o+f*y+l*v-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;let ne=eh;const ld=new ne,Qm=new ha,th=class th{constructor(e,t,r,o,l,u,d,f,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,m)}set(e,t,r,o,l,u,d,f,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=f,v[6]=r,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],m=r[1],v=r[4],y=r[7],x=r[2],M=r[5],T=r[8],R=o[0],S=o[3],_=o[6],N=o[1],B=o[4],C=o[7],P=o[2],I=o[5],F=o[8];return l[0]=u*R+d*N+f*P,l[3]=u*S+d*B+f*I,l[6]=u*_+d*C+f*F,l[1]=m*R+v*N+y*P,l[4]=m*S+v*B+y*I,l[7]=m*_+v*C+y*F,l[2]=x*R+M*N+T*P,l[5]=x*S+M*B+T*I,l[8]=x*_+M*C+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],m=e[7],v=e[8];return t*u*v-t*d*m-r*l*v+r*d*f+o*l*m-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],m=e[7],v=e[8],y=v*u-d*m,x=d*f-v*l,M=m*l-u*f,T=t*y+r*x+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=y*R,e[1]=(o*m-v*r)*R,e[2]=(d*r-o*u)*R,e[3]=x*R,e[4]=(v*t-o*f)*R,e[5]=(o*l-d*t)*R,e[6]=M*R,e[7]=(r*f-m*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),m=Math.sin(l);return this.set(r*f,r*m,-r*(f*u+m*d)+u+e,-o*m,o*f,-o*(-m*u+f*d)+d+t,0,0,1),this}scale(e,t){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(e,t)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-e)),this}translate(e,t){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};th.prototype.isMatrix3=!0;let gt=th;const cd=new gt,e0=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t0=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m1(){const s={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===zt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=la(o.r),o.g=la(o.g),o.b=la(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?uc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[cc]:{primaries:e,whitePoint:r,transfer:uc,toXYZ:e0,fromXYZ:t0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:e0,fromXYZ:t0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Rt=m1();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class g1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=yo("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(or(t[r]/255)*255):t[r]=or(t[r]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x1=0;class jf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(ud(o[u].image)):l.push(ud(o[u]))}else l=ud(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ud(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?g1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let v1=0;const dd=new ne;class wn extends ps{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,r=sr,o=sr,l=In,u=os,d=Ai,f=ti,m=wn.DEFAULT_ANISOTROPY,v=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=Ur(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=f,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Cg;wn.DEFAULT_ANISOTROPY=1;const nh=class nh{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,m=f[0],v=f[4],y=f[8],x=f[1],M=f[5],T=f[9],R=f[2],S=f[6],_=f[10];if(Math.abs(v-x)<.01&&Math.abs(y-R)<.01&&Math.abs(T-S)<.01){if(Math.abs(v+x)<.1&&Math.abs(y+R)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const B=(m+1)/2,C=(M+1)/2,P=(_+1)/2,I=(v+x)/4,F=(y+R)/4,E=(T+S)/4;return B>C&&B>P?B<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(B),o=I/r,l=F/r):C>P?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=I/o,l=E/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=F/l,o=E/l),this.set(r,o,l,t),this}let N=Math.sqrt((S-T)*(S-T)+(y-R)*(y-R)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(y-R)/N,this.z=(x-v)/N,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nh.prototype.isVector4=!0;let en=nh;class _1 extends ps{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new wn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new jf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends _1{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Og extends wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y1 extends wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const hc=class hc{constructor(e,t,r,o,l,u,d,f,m,v,y,x,M,T,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,m,v,y,x,M,T,R,S)}set(e,t,r,o,l,u,d,f,m,v,y,x,M,T,R,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=f,_[2]=m,_[6]=v,_[10]=y,_[14]=x,_[3]=M,_[7]=T,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),u=1/zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),m=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*y,T=d*v,R=d*y;t[0]=f*v,t[4]=-f*y,t[8]=m,t[1]=M+T*m,t[5]=x-R*m,t[9]=-d*f,t[2]=R-x*m,t[6]=T+M*m,t[10]=u*f}else if(e.order==="YXZ"){const x=f*v,M=f*y,T=m*v,R=m*y;t[0]=x+R*d,t[4]=T*d-M,t[8]=u*m,t[1]=u*y,t[5]=u*v,t[9]=-d,t[2]=M*d-T,t[6]=R+x*d,t[10]=u*f}else if(e.order==="ZXY"){const x=f*v,M=f*y,T=m*v,R=m*y;t[0]=x-R*d,t[4]=-u*y,t[8]=T+M*d,t[1]=M+T*d,t[5]=u*v,t[9]=R-x*d,t[2]=-u*m,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const x=u*v,M=u*y,T=d*v,R=d*y;t[0]=f*v,t[4]=T*m-M,t[8]=x*m+R,t[1]=f*y,t[5]=R*m+x,t[9]=M*m-T,t[2]=-m,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const x=u*f,M=u*m,T=d*f,R=d*m;t[0]=f*v,t[4]=R-x*y,t[8]=T*y+M,t[1]=y,t[5]=u*v,t[9]=-d*v,t[2]=-m*v,t[6]=M*y+T,t[10]=x-R*y}else if(e.order==="XZY"){const x=u*f,M=u*m,T=d*f,R=d*m;t[0]=f*v,t[4]=-y,t[8]=m*v,t[1]=x*y+R,t[5]=u*v,t[9]=M*y-T,t[2]=T*y-M,t[6]=d*v,t[10]=R*y+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S1,e,M1)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ar.crossVectors(r,Jn),Ar.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ar.crossVectors(r,Jn)),Ar.normalize(),Ll.crossVectors(Jn,Ar),o[0]=Ar.x,o[4]=Ll.x,o[8]=Jn.x,o[1]=Ar.y,o[5]=Ll.y,o[9]=Jn.y,o[2]=Ar.z,o[6]=Ll.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],m=r[12],v=r[1],y=r[5],x=r[9],M=r[13],T=r[2],R=r[6],S=r[10],_=r[14],N=r[3],B=r[7],C=r[11],P=r[15],I=o[0],F=o[4],E=o[8],D=o[12],V=o[1],j=o[5],$=o[9],te=o[13],q=o[2],Z=o[6],fe=o[10],Q=o[14],O=o[3],z=o[7],H=o[11],L=o[15];return l[0]=u*I+d*V+f*q+m*O,l[4]=u*F+d*j+f*Z+m*z,l[8]=u*E+d*$+f*fe+m*H,l[12]=u*D+d*te+f*Q+m*L,l[1]=v*I+y*V+x*q+M*O,l[5]=v*F+y*j+x*Z+M*z,l[9]=v*E+y*$+x*fe+M*H,l[13]=v*D+y*te+x*Q+M*L,l[2]=T*I+R*V+S*q+_*O,l[6]=T*F+R*j+S*Z+_*z,l[10]=T*E+R*$+S*fe+_*H,l[14]=T*D+R*te+S*Q+_*L,l[3]=N*I+B*V+C*q+P*O,l[7]=N*F+B*j+C*Z+P*z,l[11]=N*E+B*$+C*fe+P*H,l[15]=N*D+B*te+C*Q+P*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],m=e[13],v=e[2],y=e[6],x=e[10],M=e[14],T=e[3],R=e[7],S=e[11],_=e[15],N=f*M-m*x,B=d*M-m*y,C=d*x-f*y,P=u*M-m*v,I=u*x-f*v,F=u*y-d*v;return t*(R*N-S*B+_*C)-r*(T*N-S*P+_*I)+o*(T*B-R*P+_*F)-l*(T*C-R*I+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],d=e[9],f=e[2],m=e[6],v=e[10];return t*(u*v-d*m)-r*(l*v-d*f)+o*(l*m-u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],m=e[7],v=e[8],y=e[9],x=e[10],M=e[11],T=e[12],R=e[13],S=e[14],_=e[15],N=t*d-r*u,B=t*f-o*u,C=t*m-l*u,P=r*f-o*d,I=r*m-l*d,F=o*m-l*f,E=v*R-y*T,D=v*S-x*T,V=v*_-M*T,j=y*S-x*R,$=y*_-M*R,te=x*_-M*S,q=N*te-B*$+C*j+P*V-I*D+F*E;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/q;return e[0]=(d*te-f*$+m*j)*Z,e[1]=(o*$-r*te-l*j)*Z,e[2]=(R*F-S*I+_*P)*Z,e[3]=(x*I-y*F-M*P)*Z,e[4]=(f*V-u*te-m*D)*Z,e[5]=(t*te-o*V+l*D)*Z,e[6]=(S*C-T*F-_*B)*Z,e[7]=(v*F-x*C+M*B)*Z,e[8]=(u*$-d*V+m*E)*Z,e[9]=(r*V-t*$-l*E)*Z,e[10]=(T*I-R*C+_*N)*Z,e[11]=(y*C-v*I-M*N)*Z,e[12]=(d*D-u*j-f*E)*Z,e[13]=(t*j-r*D+o*E)*Z,e[14]=(R*B-T*P-S*N)*Z,e[15]=(v*P-y*B+x*N)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,m=l*u,v=l*d;return this.set(m*u+r,m*d-o*f,m*f+o*d,0,m*d+o*f,v*d+r,v*f-o*u,0,m*f-o*d,v*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,m=l+l,v=u+u,y=d+d,x=l*m,M=l*v,T=l*y,R=u*v,S=u*y,_=d*y,N=f*m,B=f*v,C=f*y,P=r.x,I=r.y,F=r.z;return o[0]=(1-(R+_))*P,o[1]=(M+C)*P,o[2]=(T-B)*P,o[3]=0,o[4]=(M-C)*I,o[5]=(1-(x+_))*I,o[6]=(S+N)*I,o[7]=0,o[8]=(T+B)*F,o[9]=(S-N)*F,o[10]=(1-(x+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=zs.set(o[0],o[1],o[2]).length();const d=zs.set(o[4],o[5],o[6]).length(),f=zs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ei.copy(this);const m=1/u,v=1/d,y=1/f;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=y,Ei.elements[9]*=y,Ei.elements[10]*=y,t.setFromRotationMatrix(Ei),r.x=u,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,u,d=Bi,f=!1){const m=this.elements,v=2*l/(t-e),y=2*l/(r-o),x=(t+e)/(t-e),M=(r+o)/(r-o);let T,R;if(f)T=l/(u-l),R=u*l/(u-l);else if(d===Bi)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===_o)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=y,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Bi,f=!1){const m=this.elements,v=2/(t-e),y=2/(r-o),x=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,R;if(f)T=1/(u-l),R=u/(u-l);else if(d===Bi)T=-2/(u-l),R=-(u+l)/(u-l);else if(d===_o)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=y,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};hc.prototype.isMatrix4=!0;let $t=hc;const zs=new ne,Ei=new $t,S1=new ne(0,0,0),M1=new ne(1,1,1),Ar=new ne,Ll=new ne,Jn=new ne,n0=new $t,i0=new ha;class Fr{constructor(e=0,t=0,r=0,o=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],m=o[5],v=o[9],y=o[2],x=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Lt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return n0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return i0.setFromEuler(this),this.setFromQuaternion(i0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w1=0;const r0=new ne,Hs=new ha,er=new $t,Nl=new ne,eo=new ne,E1=new ne,b1=new ha,s0=new ne(1,0,0),a0=new ne(0,1,0),o0=new ne(0,0,1),l0={type:"added"},T1={type:"removed"},Vs={type:"childadded",child:null},fd={type:"childremoved",child:null};class En extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new ne,t=new Fr,r=new ha,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new gt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(a0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,t){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(a0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt(eo,Nl,this.up):er.lookAt(Nl,eo,this.up),this.quaternion.setFromRotationMatrix(er),o&&(er.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(er),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(T1),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l0),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,E1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,b1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let m=0,v=f.length;m<v;m++){const y=f[m];l(e.shapes,y)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,m=this.material.length;f<m;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),m=u(e.textures),v=u(e.images),y=u(e.shapes),x=u(e.skeletons),M=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const f=[];for(const m in d){const v=d[m];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}En.DEFAULT_UP=new ne(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ra extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,r),_=this._getHandJoint(m,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],x=v.position.distanceTo(y.position),M=.02,T=.005;m.inputState.pinching&&x>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function pd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=p1(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=pd(u,l,e+1/3),this.g=pd(u,l,e),this.b=pd(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=ei){function r(l){l!==void 0&&parseFloat(l)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Bg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Rt.workingToColorSpace(Nn.copy(this),e),Math.round(Lt(Nn.r*255,0,255))*65536+Math.round(Lt(Nn.g*255,0,255))*256+Math.round(Lt(Nn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Nn.copy(this),t);const r=Nn.r,o=Nn.g,l=Nn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,m;const v=(d+u)/2;if(d===u)f=0,m=0;else{const y=u-d;switch(m=v<=.5?y/(u+d):y/(2-u-d),u){case r:f=(o-l)/y+(o<l?6:0);break;case o:f=(l-r)/y+2;break;case l:f=(r-o)/y+4;break}f/=6}return e.h=f,e.s=m,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ei){Rt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,r=Nn.g,o=Nn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Pl);const r=od(Cr.h,Pl.h,t),o=od(Cr.s,Pl.s,t),l=od(Cr.l,Pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Nt;Nt.NAMES=Bg;class C1 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new ne,tr=new ne,md=new ne,nr=new ne,Gs=new ne,Ws=new ne,c0=new ne,gd=new ne,xd=new ne,vd=new ne,_d=new en,yd=new en,Sd=new en;class hi{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){bi.subVectors(o,t),tr.subVectors(r,t),md.subVectors(e,t);const u=bi.dot(bi),d=bi.dot(tr),f=bi.dot(md),m=tr.dot(tr),v=tr.dot(md),y=u*m-d*d;if(y===0)return l.set(0,0,0),null;const x=1/y,M=(m*f-d*v)*x,T=(u*v-d*f)*x;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,nr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,nr.x),f.addScaledVector(u,nr.y),f.addScaledVector(d,nr.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return _d.setScalar(0),yd.setScalar(0),Sd.setScalar(0),_d.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,r),Sd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(_d,l.x),u.addScaledVector(yd,l.y),u.addScaledVector(Sd,l.z),u}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),tr.subVectors(e,t),bi.cross(tr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),bi.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Gs.subVectors(o,r),Ws.subVectors(l,r),gd.subVectors(e,r);const f=Gs.dot(gd),m=Ws.dot(gd);if(f<=0&&m<=0)return t.copy(r);xd.subVectors(e,o);const v=Gs.dot(xd),y=Ws.dot(xd);if(v>=0&&y<=v)return t.copy(o);const x=f*y-v*m;if(x<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(r).addScaledVector(Gs,u);vd.subVectors(e,l);const M=Gs.dot(vd),T=Ws.dot(vd);if(T>=0&&M<=T)return t.copy(l);const R=M*m-f*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(Ws,d);const S=v*T-M*y;if(S<=0&&y-v>=0&&M-T>=0)return c0.subVectors(l,o),d=(y-v)/(y-v+(M-T)),t.copy(o).addScaledVector(c0,d);const _=1/(S+R+x);return u=R*_,d=x*_,t.copy(r).addScaledVector(Gs,u).addScaledVector(Ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ti):Ti.fromBufferAttribute(l,u),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Il.copy(r.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Dl.subVectors(this.max,to),js.subVectors(e.a,to),qs.subVectors(e.b,to),Xs.subVectors(e.c,to),Rr.subVectors(qs,js),Lr.subVectors(Xs,qs),ts.subVectors(js,Xs);let t=[0,-Rr.z,Rr.y,0,-Lr.z,Lr.y,0,-ts.z,ts.y,Rr.z,0,-Rr.x,Lr.z,0,-Lr.x,ts.z,0,-ts.x,-Rr.y,Rr.x,0,-Lr.y,Lr.x,0,-ts.y,ts.x,0];return!Md(t,js,qs,Xs,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,js,qs,Xs,Dl))?!1:(kl.crossVectors(Rr,Lr),t=[kl.x,kl.y,kl.z],Md(t,js,qs,Xs,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ir=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ti=new ne,Il=new wo,js=new ne,qs=new ne,Xs=new ne,Rr=new ne,Lr=new ne,ts=new ne,to=new ne,Dl=new ne,kl=new ne,ns=new ne;function Md(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const d=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),f=e.dot(ns),m=t.dot(ns),v=r.dot(ns);if(Math.max(-Math.max(f,m,v),Math.min(f,m,v))>d)return!1}return!0}const on=new ne,Ul=new xt;let R1=0;class Hi extends ps{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ug,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array),l=Ht(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zg extends Hi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Hg extends Hi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class vn extends Hi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const L1=new wo,no=new ne,wd=new ne;class Xf{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):L1.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(wd)),this.expandByPoint(no.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let N1=0;const di=new $t,Ed=new En,Ys=new ne,Qn=new wo,io=new wo,xn=new ne;class ni extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u1(e)?Hg:zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,r){return di.makeTranslation(e,t,r),this.applyMatrix4(di),this}scale(e,t,r){return di.makeScale(e,t,r),this.applyMatrix4(di),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new vn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];io.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(Qn.min,io.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,io.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(io.min),Qn.expandByPoint(io.max))}Qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(xn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)xn.fromBufferAttribute(d,m),f&&(Ys.fromBufferAttribute(e,m),xn.add(Ys)),o=Math.max(o,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Hi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],f=[];for(let E=0;E<r.count;E++)d[E]=new ne,f[E]=new ne;const m=new ne,v=new ne,y=new ne,x=new xt,M=new xt,T=new xt,R=new ne,S=new ne;function _(E,D,V){m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,D),y.fromBufferAttribute(r,V),x.fromBufferAttribute(l,E),M.fromBufferAttribute(l,D),T.fromBufferAttribute(l,V),v.sub(m),y.sub(m),M.sub(x),T.sub(x);const j=1/(M.x*T.y-T.x*M.y);isFinite(j)&&(R.copy(v).multiplyScalar(T.y).addScaledVector(y,-M.y).multiplyScalar(j),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(j),d[E].add(R),d[D].add(R),d[V].add(R),f[E].add(S),f[D].add(S),f[V].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let E=0,D=N.length;E<D;++E){const V=N[E],j=V.start,$=V.count;for(let te=j,q=j+$;te<q;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const B=new ne,C=new ne,P=new ne,I=new ne;function F(E){P.fromBufferAttribute(o,E),I.copy(P);const D=d[E];B.copy(D),B.sub(P.multiplyScalar(P.dot(D))).normalize(),C.crossVectors(I,D);const j=C.dot(f[E])<0?-1:1;u.setXYZW(E,B.x,B.y,B.z,j)}for(let E=0,D=N.length;E<D;++E){const V=N[E],j=V.start,$=V.count;for(let te=j,q=j+$;te<q;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Hi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const o=new ne,l=new ne,u=new ne,d=new ne,f=new ne,m=new ne,v=new ne,y=new ne;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),R=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,S),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),d.add(v),f.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,f.x,f.y,f.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,M=t.count;x<M;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,l),y.subVectors(o,l),v.cross(y),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,f){const m=d.array,v=d.itemSize,y=d.normalized,x=new m.constructor(f.length*v);let M=0,T=0;for(let R=0,S=f.length;R<S;R++){d.isInterleavedBufferAttribute?M=f[R]*d.data.stride+d.offset:M=f[R]*v;for(let _=0;_<v;_++)x[T++]=m[M++]}return new Hi(x,v,y)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],m=e(f,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const f=[],m=l[d];for(let v=0,y=m.length;v<y;v++){const x=m[v],M=e(x,r);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const m=r[f];e.data.attributes[f]=m.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],v=[];for(let y=0,x=m.length;y<x;y++){const M=m[y];v.push(M.toJSON(e.data))}v.length>0&&(o[f]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],y=l[m];for(let x=0,M=y.length;x<M;x++)v.push(y[x].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,v=u.length;m<v;m++){const y=u[m];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class P1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ug,this.updateRanges=[],this.version=0,this.uuid=Ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const On=new ne;class fc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Fi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ht(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),r=Ht(r,this.array),o=Ht(o,this.array),l=Ht(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){dc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new Hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){dc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bd=new ne,I1=new ne,D1=new gt;class Pr{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=bd.subVectors(r,t).cross(I1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(bd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||D1.getNormalMatrix(e),o=this.coplanarPoint(bd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let k1=0;class pa extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=ho,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vg,this.blendDst=_g,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sd,this.stencilZFail=sd,this.stencilZPass=sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Pr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vg extends pa{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ks;const ro=new ne,$s=new ne,Zs=new ne,Js=new xt,so=new xt,Gg=new $t,Fl=new ne,ao=new ne,Ol=new ne,u0=new xt,Td=new xt,d0=new xt;class U1 extends En{constructor(e=new Vg){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new ni;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new P1(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new fc(r,3,0,!1)),Ks.setAttribute("uv",new fc(r,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new xt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Gg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Zs.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Bl(Fl.set(-.5,-.5,0),Zs,u,$s,o,l),Bl(ao.set(.5,-.5,0),Zs,u,$s,o,l),Bl(Ol.set(.5,.5,0),Zs,u,$s,o,l),u0.set(0,0),Td.set(1,0),d0.set(1,1);let d=e.ray.intersectTriangle(Fl,ao,Ol,!1,ro);if(d===null&&(Bl(ao.set(-.5,.5,0),Zs,u,$s,o,l),Td.set(0,1),d=e.ray.intersectTriangle(Fl,Ol,ao,!1,ro),d===null))return;const f=e.ray.origin.distanceTo(ro);f<e.near||f>e.far||t.push({distance:f,point:ro.clone(),uv:hi.getInterpolation(ro,Fl,ao,Ol,u0,Td,d0,new xt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Bl(s,e,t,r,o,l){Js.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(so.x=l*Js.x-o*Js.y,so.y=o*Js.x+l*Js.y):so.copy(Js),s.copy(e),s.x+=so.x,s.y+=so.y,s.applyMatrix4(Gg)}const rr=new ne,Ad=new ne,zl=new ne,Hl=new ne;class Wg{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,t),rr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ad.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Hl.copy(this.origin).sub(Ad);const l=e.distanceTo(t)*.5,u=-this.direction.dot(zl),d=Hl.dot(this.direction),f=-Hl.dot(zl),m=Hl.lengthSq(),v=Math.abs(1-u*u);let y,x,M,T;if(v>0)if(y=u*f-d,x=u*d-f,T=l*v,y>=0)if(x>=-T)if(x<=T){const R=1/v;y*=R,x*=R,M=y*(y+u*x+2*d)+x*(u*y+x+2*f)+m}else x=l,y=Math.max(0,-(u*x+d)),M=-y*y+x*(x+2*f)+m;else x=-l,y=Math.max(0,-(u*x+d)),M=-y*y+x*(x+2*f)+m;else x<=-T?(y=Math.max(0,-(-u*l+d)),x=y>0?-l:Math.min(Math.max(-l,-f),l),M=-y*y+x*(x+2*f)+m):x<=T?(y=0,x=Math.min(Math.max(-l,-f),l),M=x*(x+2*f)+m):(y=Math.max(0,-(u*l+d)),x=y>0?l:Math.min(Math.max(-l,-f),l),M=-y*y+x*(x+2*f)+m);else x=u>0?-l:l,y=Math.max(0,-(u*x+d)),M=-y*y+x*(x+2*f)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Ad).addScaledVector(zl,x),M}intersectSphere(e,t){if(e.radius<0)return null;rr.subVectors(e.center,this.origin);const r=rr.dot(this.direction),o=rr.dot(rr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,o=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,o=(e.min.x-x.x)*m),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-x.z)*y,f=(e.max.z-x.z)*y):(d=(e.max.z-x.z)*y,f=(e.min.z-x.z)*y),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,d=this.direction,f=d.x,m=d.y,v=d.z,y=e.x-u.x,x=e.y-u.y,M=e.z-u.z,T=t.x-u.x,R=t.y-u.y,S=t.z-u.z,_=r.x-u.x,N=r.y-u.y,B=r.z-u.z,C=Math.abs(f),P=Math.abs(m),I=Math.abs(v);let F,E,D,V,j,$,te,q,Z,fe,Q,O;if(C>=P&&C>=I?(D=f,$=y,Z=T,O=_,f>=0?(F=m,E=v,V=x,j=M,te=R,q=S,fe=N,Q=B):(F=v,E=m,V=M,j=x,te=S,q=R,fe=B,Q=N)):P>=I?(D=m,$=x,Z=R,O=N,m>=0?(F=v,E=f,V=M,j=y,te=S,q=T,fe=B,Q=_):(F=f,E=v,V=y,j=M,te=T,q=S,fe=_,Q=B)):(D=v,$=M,Z=S,O=B,v>=0?(F=f,E=m,V=y,j=x,te=T,q=R,fe=_,Q=N):(F=m,E=f,V=x,j=y,te=R,q=T,fe=N,Q=_)),D===0)return null;const z=F/D,H=E/D,L=1/D,se=V-z*$,Se=j-H*$,We=te-z*Z,Ge=q-H*Z,Oe=fe-z*O,ae=Q-H*O,ue=Oe*Ge-ae*We,Ae=se*ae-Se*Oe,Re=We*Se-Ge*se;if(o){if(ue<0||Ae<0||Re<0)return null}else if((ue<0||Ae<0||Re<0)&&(ue>0||Ae>0||Re>0))return null;const we=ue+Ae+Re;if(we===0)return null;const ot=L*(ue*$+Ae*Z+Re*O);return(we>0?ot<0:ot>0)?null:this.at(ot/we,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class as extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const f0=new $t,is=new Wg,Vl=new Xf,h0=new ne,Gl=new ne,Wl=new ne,jl=new ne,Cd=new ne,ql=new ne,p0=new ne,Xl=new ne;class zn extends En{constructor(e=new ni,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){ql.set(0,0,0);for(let f=0,m=l.length;f<m;f++){const v=d[f],y=l[f];v!==0&&(Cd.fromBufferAttribute(y,e),u?ql.addScaledVector(Cd,v):ql.addScaledVector(Cd.sub(t),v))}t.add(ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Vl.containsPoint(is.origin)===!1&&(is.intersectSphere(Vl,h0)===null||is.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(f0.copy(l).invert(),is.copy(e.ray).applyMatrix4(f0),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,R=x.length;T<R;T++){const S=x[T],_=u[S.materialIndex],N=Math.max(S.start,M.start),B=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=N,P=B;C<P;C+=3){const I=d.getX(C),F=d.getX(C+1),E=d.getX(C+2);o=Yl(this,_,e,r,m,v,y,I,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let S=T,_=R;S<_;S+=3){const N=d.getX(S),B=d.getX(S+1),C=d.getX(S+2);o=Yl(this,u,e,r,m,v,y,N,B,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let T=0,R=x.length;T<R;T++){const S=x[T],_=u[S.materialIndex],N=Math.max(S.start,M.start),B=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let C=N,P=B;C<P;C+=3){const I=C,F=C+1,E=C+2;o=Yl(this,_,e,r,m,v,y,I,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let S=T,_=R;S<_;S+=3){const N=S,B=S+1,C=S+2;o=Yl(this,u,e,r,m,v,y,N,B,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function F1(s,e,t,r,o,l,u,d){let f;if(e.side===Dn?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===cs,d),f===null)return null;Xl.copy(d),Xl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Xl);return m<t.near||m>t.far?null:{distance:m,point:Xl.clone(),object:s}}function Yl(s,e,t,r,o,l,u,d,f,m){s.getVertexPosition(d,Gl),s.getVertexPosition(f,Wl),s.getVertexPosition(m,jl);const v=F1(s,e,t,r,Gl,Wl,jl,p0);if(v){const y=new ne;hi.getBarycoord(p0,Gl,Wl,jl,y),o&&(v.uv=hi.getInterpolatedAttribute(o,d,f,m,y,new xt)),l&&(v.uv1=hi.getInterpolatedAttribute(l,d,f,m,y,new xt)),u&&(v.normal=hi.getInterpolatedAttribute(u,d,f,m,y,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:f,c:m,normal:new ne,materialIndex:0};hi.getNormal(Gl,Wl,jl,x.normal),v.face=x,v.barycoord=y}return v}class O1 extends wn{constructor(e=null,t=1,r=1,o,l,u,d,f,m=Mn,v=Mn,y,x){super(null,u,d,f,m,v,o,l,y,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new Xf,B1=new xt(.5,.5),Kl=new ne;class Yf{constructor(e=new Pr,t=new Pr,r=new Pr,o=new Pr,l=new Pr,u=new Pr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Bi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],f=l[2],m=l[3],v=l[4],y=l[5],x=l[6],M=l[7],T=l[8],R=l[9],S=l[10],_=l[11],N=l[12],B=l[13],C=l[14],P=l[15];if(o[0].setComponents(m-u,M-v,_-T,P-N).normalize(),o[1].setComponents(m+u,M+v,_+T,P+N).normalize(),o[2].setComponents(m+d,M+y,_+R,P+B).normalize(),o[3].setComponents(m-d,M-y,_-R,P-B).normalize(),r)o[4].setComponents(f,x,S,C).normalize(),o[5].setComponents(m-f,M-x,_-S,P-C).normalize();else if(o[4].setComponents(m-f,M-x,_-S,P-C).normalize(),t===Bi)o[5].setComponents(m+f,M+x,_+S,P+C).normalize();else if(t===_o)o[5].setComponents(f,x,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=B1.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Kl.x=o.normal.x>0?e.max.x:e.min.x,Kl.y=o.normal.y>0?e.max.y:e.min.y,Kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jg extends wn{constructor(e=[],t=us,r,o,l,u,d,f,m,v){super(e,t,r,o,l,u,d,f,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z1 extends wn{constructor(e,t,r,o,l,u,d,f,m){super(e,t,r,o,l,u,d,f,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends wn{constructor(e,t,r=Vi,o,l,u,d=Mn,f=Mn,m,v=lr,y=1){if(v!==lr&&v!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:y};super(x,o,l,u,d,f,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class H1 extends So{constructor(e,t=Vi,r=us,o,l,u=Mn,d=Mn,f,m=lr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,d,f,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qg extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends ni{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],m=[],v=[],y=[];let x=0,M=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new vn(m,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(y,2));function T(R,S,_,N,B,C,P,I,F,E,D){const V=C/F,j=P/E,$=C/2,te=P/2,q=I/2,Z=F+1,fe=E+1;let Q=0,O=0;const z=new ne;for(let H=0;H<fe;H++){const L=H*j-te;for(let se=0;se<Z;se++){const Se=se*V-$;z[R]=Se*N,z[S]=L*B,z[_]=q,m.push(z.x,z.y,z.z),z[R]=0,z[S]=0,z[_]=I>0?1:-1,v.push(z.x,z.y,z.z),y.push(se/F),y.push(1-H/E),Q+=1}}for(let H=0;H<E;H++)for(let L=0;L<F;L++){const se=x+L+Z*H,Se=x+L+Z*(H+1),We=x+(L+1)+Z*(H+1),Ge=x+(L+1)+Z*H;f.push(se,Se,Ge),f.push(Se,We,Ge),O+=6}d.addGroup(M,O,D),M+=O,x+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kf extends ni{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const m=this;o=Math.floor(o),l=Math.floor(l);const v=[],y=[],x=[],M=[];let T=0;const R=[],S=r/2;let _=0;N(),u===!1&&(e>0&&B(!0),t>0&&B(!1)),this.setIndex(v),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(M,2));function N(){const C=new ne,P=new ne;let I=0;const F=(t-e)/r;for(let E=0;E<=l;E++){const D=[],V=E/l,j=V*(t-e)+e;for(let $=0;$<=o;$++){const te=$/o,q=te*f+d,Z=Math.sin(q),fe=Math.cos(q);P.x=j*Z,P.y=-V*r+S,P.z=j*fe,y.push(P.x,P.y,P.z),C.set(Z,F,fe).normalize(),x.push(C.x,C.y,C.z),M.push(te,1-V),D.push(T++)}R.push(D)}for(let E=0;E<o;E++)for(let D=0;D<l;D++){const V=R[D][E],j=R[D+1][E],$=R[D+1][E+1],te=R[D][E+1];(e>0||D!==0)&&(v.push(V,j,te),I+=3),(t>0||D!==l-1)&&(v.push(j,$,te),I+=3)}m.addGroup(_,I,0),_+=I}function B(C){const P=T,I=new xt,F=new ne;let E=0;const D=C===!0?e:t,V=C===!0?1:-1;for(let $=1;$<=o;$++)y.push(0,S*V,0),x.push(0,V,0),M.push(.5,.5),T++;const j=T;for(let $=0;$<=o;$++){const q=$/o*f+d,Z=Math.cos(q),fe=Math.sin(q);F.x=D*fe,F.y=S*V,F.z=D*Z,y.push(F.x,F.y,F.z),x.push(0,V,0),I.x=Z*.5+.5,I.y=fe*.5*V+.5,M.push(I.x,I.y),T++}for(let $=0;$<o;$++){const te=P+$,q=j+$;C===!0?v.push(q,q+1,te):v.push(q+1,q,te),E+=3}m.addGroup(_,E,C===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gc extends ni{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),m=d+1,v=f+1,y=e/d,x=t/f,M=[],T=[],R=[],S=[];for(let _=0;_<v;_++){const N=_*x-u;for(let B=0;B<m;B++){const C=B*y-l;T.push(C,-N,0),R.push(0,0,1),S.push(B/d),S.push(1-_/f)}}for(let _=0;_<f;_++)for(let N=0;N<d;N++){const B=N+m*_,C=N+m*(_+1),P=N+1+m*(_+1),I=N+1+m*_;M.push(B,C,I),M.push(C,P,I)}this.setIndex(M),this.setAttribute("position",new vn(T,3)),this.setAttribute("normal",new vn(R,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $f extends ni{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],f=[],m=[],v=[];let y=e;const x=(t-e)/o,M=new ne,T=new xt;for(let R=0;R<=o;R++){for(let S=0;S<=r;S++){const _=l+S/r*u;M.x=y*Math.cos(_),M.y=y*Math.sin(_),f.push(M.x,M.y,M.z),m.push(0,0,1),T.x=(M.x/t+1)/2,T.y=(M.y/t+1)/2,v.push(T.x,T.y)}y+=x}for(let R=0;R<o;R++){const S=R*(r+1);for(let _=0;_<r;_++){const N=_+S,B=N,C=N+r+1,P=N+r+2,I=N+1;d.push(B,C,I),d.push(C,P,I)}}this.setIndex(d),this.setAttribute("position",new vn(f,3)),this.setAttribute("normal",new vn(m,3)),this.setAttribute("uv",new vn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sa extends ni{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let m=0;const v=[],y=new ne,x=new ne,M=[],T=[],R=[],S=[];for(let _=0;_<=r;_++){const N=[],B=_/r,C=u+B*d,P=e*Math.cos(C),I=Math.sqrt(e*e-P*P);let F=0;_===0&&u===0?F=.5/t:_===r&&f===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){const D=E/t,V=o+D*l;y.x=-I*Math.cos(V),y.y=P,y.z=I*Math.sin(V),T.push(y.x,y.y,y.z),x.copy(y).normalize(),R.push(x.x,x.y,x.z),S.push(D+F,1-B),N.push(m++)}v.push(N)}for(let _=0;_<r;_++)for(let N=0;N<t;N++){const B=v[_][N+1],C=v[_][N],P=v[_+1][N],I=v[_+1][N+1];(_!==0||u>0)&&M.push(B,C,I),(_!==r-1||f<Math.PI)&&M.push(C,P,I)}this.setIndex(M),this.setAttribute("position",new vn(T,3)),this.setAttribute("normal",new vn(R,3)),this.setAttribute("uv",new vn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ua(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(m0(o))o.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(m0(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Bn(s){const e={};for(let t=0;t<s.length;t++){const r=ua(s[t]);for(const o in r)e[o]=r[o]}return e}function m0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function V1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const G1={clone:ua,merge:Bn};var W1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W1,this.fragmentShader=j1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ua(e.uniforms),this.uniformsGroups=V1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[r].value=new en().fromArray(o.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new $t().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class q1 extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class X1 extends pa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cf,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y1 extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K1 extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(g0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!g0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function g0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $1{constructor(e,t,r){const o=this;let l=!1,u=0,d=0,f;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){d++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),f?f(v):v},this.setURLModifier=function(v){return f=v,this},this.addHandler=function(v,y){return m.push(v,y),this},this.removeHandler=function(v){const y=m.indexOf(v);return y!==-1&&m.splice(y,2),this},this.getHandler=function(v){for(let y=0,x=m.length;y<x;y+=2){const M=m[y],T=m[y+1];if(M.global&&(M.lastIndex=0),M.test(v))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Z1=new $1;class Zf{constructor(e){this.manager=e!==void 0?e:Z1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qs=new WeakMap;class J1 extends Zf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Rd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let y=Qs.get(u);y===void 0&&(y=[],Qs.set(u,y)),y.push({onLoad:t,onError:o})}return u}const d=yo("img");function f(){v(),t&&t(this);const y=Qs.get(this)||[];for(let x=0;x<y.length;x++){const M=y[x];M.onLoad&&M.onLoad(this)}Qs.delete(this),l.manager.itemEnd(e)}function m(y){v(),o&&o(y),Rd.remove(`image:${e}`);const x=Qs.get(this)||[];for(let M=0;M<x.length;M++){const T=x[M];T.onError&&T.onError(y)}Qs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){d.removeEventListener("load",f,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Rd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class Q1 extends Zf{constructor(e){super(e)}load(e,t,r,o){const l=new wn,u=new J1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Yg extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ld=new $t,x0=new ne,v0=new ne;class eS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yf,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;x0.setFromMatrixPosition(e.matrixWorld),t.position.copy(x0),v0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(v0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Ld.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Ld,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,f=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===_o||e.reversedDepth?t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+f,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),t.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $l=new ne,Zl=new ha,Ii=new ne;class Kg extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Zl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Zl,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose($l,Zl,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Zl,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new ne,_0=new xt,y0=new xt;class fi extends Kg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,_0,y0),t.subVectors(y0,_0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ad*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/m,o*=u.width/f,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Jf extends Kg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tS extends eS{constructor(){super(new Jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class S0 extends Yg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new tS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class nS extends Yg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ea=-90,ta=1;class iS extends En{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(ea,ta,e,t);o.layers=this.layers,this.add(o);const l=new fi(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new fi(ea,ta,e,t);u.layers=this.layers,this.add(u);const d=new fi(ea,ta,e,t);d.layers=this.layers,this.add(d);const f=new fi(ea,ta,e,t);f.layers=this.layers,this.add(f);const m=new fi(ea,ta,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const m of t)this.remove(m);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===_o)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,m,v]=this.children,y=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class rS extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const M0=new $t;class sS{constructor(e,t,r=0,o=1/0){this.ray=new Wg(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):It("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return M0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(M0),this}intersectObject(e,t=!0,r=[]){return Lf(e,this,r,t),r.sort(w0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Lf(e[o],this,r,t);return r.sort(w0),r}}function w0(s,e){return s.distance-e.distance}function Lf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Lf(l[u],e,t,!0)}}class aS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ht("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ih=class ih{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};ih.prototype.isMatrix2=!0;let E0=ih;function b0(s,e,t,r){const o=oS(r);switch(t){case Ig:return s*e;case kg:return s*e/o.components*o.byteLength;case zf:return s*e/o.components*o.byteLength;case ds:return s*e*2/o.components*o.byteLength;case Hf:return s*e*2/o.components*o.byteLength;case Dg:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case Vf:return s*e*4/o.components*o.byteLength;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jd:case ef:return Math.max(s,16)*Math.max(e,8)/4;case Zd:case Qd:return Math.max(s,8)*Math.max(e,8)/2;case tf:case nf:case sf:case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rf:case oc:case of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mf:case wf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16;case bf:case Tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case Af:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oS(s){switch(s){case ti:case Rg:return{byteLength:1,components:1};case xo:case Lg:case Gi:return{byteLength:2,components:1};case Of:case Bf:return{byteLength:2,components:4};case Vi:case Ff:case Oi:return{byteLength:4,components:1};case Ng:case Pg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $g(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function lS(s){const e=new WeakMap;function t(d,f){const m=d.array,v=d.usage,y=m.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,f,m){const v=f.array,y=f.updateRanges;if(s.bindBuffer(m,d),y.length===0)s.bufferSubData(m,0,v);else{y.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<y.length;M++){const T=y[x],R=y[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,y[x]=R)}y.length=x+1;for(let M=0,T=y.length;M<T;M++){const R=y[M];s.bufferSubData(m,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,f));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,f),m.version=d.version}}return{get:o,remove:l,update:u}}var cS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uS=`#ifdef USE_ALPHAHASH
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
#endif`,dS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
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
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MS=`#ifdef USE_IRIDESCENCE
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
#endif`,wS=`#ifdef USE_BUMPMAP
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PS=`#define PI 3.141592653589793
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
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DS=`vec3 transformedNormal = objectNormal;
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
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,oM=`uniform sampler2D dfgLUT;
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
}`,lM=`
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
#endif`,cM=`#if defined( RE_IndirectDiffuse )
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_M=`#if defined( USE_POINTS_UV )
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
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
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
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YM=`float getShadowMask() {
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
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,rw=`#ifdef USE_TRANSMISSION
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uw=`uniform sampler2D t2D;
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`#include <common>
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
}`,gw=`#if DEPTH_PACKING == 3200
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
}`,xw=`#define DISTANCE
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
}`,vw=`#define DISTANCE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`uniform float scale;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,ww=`#include <common>
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
}`,Ew=`uniform vec3 diffuse;
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
}`,bw=`#define LAMBERT
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
}`,Tw=`#define LAMBERT
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
}`,Aw=`#define MATCAP
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
}`,Cw=`#define MATCAP
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
}`,Rw=`#define NORMAL
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
}`,Lw=`#define NORMAL
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
}`,Nw=`#define PHONG
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
}`,Pw=`#define PHONG
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
}`,Iw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
}`,kw=`#define TOON
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
}`,Uw=`#define TOON
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
}`,Fw=`uniform float size;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Bw=`#include <common>
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
}`,zw=`uniform vec3 color;
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
}`,Hw=`uniform float rotation;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:cS,alphahash_pars_fragment:uS,alphamap_fragment:dS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:xS,batching_vertex:vS,begin_vertex:_S,beginnormal_vertex:yS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:wS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:bS,clipping_planes_pars_vertex:TS,clipping_planes_vertex:AS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:LS,color_vertex:NS,common:PS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:DS,displacementmap_pars_vertex:kS,displacementmap_vertex:US,emissivemap_fragment:FS,emissivemap_pars_fragment:OS,colorspace_fragment:BS,colorspace_pars_fragment:zS,envmap_fragment:HS,envmap_common_pars_fragment:VS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:tM,envmap_vertex:jS,fog_vertex:qS,fog_pars_vertex:XS,fog_fragment:YS,fog_pars_fragment:KS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:ZS,lights_lambert_fragment:JS,lights_lambert_pars_fragment:QS,lights_pars_begin:eM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:rM,lights_phong_pars_fragment:sM,lights_physical_fragment:aM,lights_physical_pars_fragment:oM,lights_fragment_begin:lM,lights_fragment_maps:cM,lights_fragment_end:uM,lightprobes_pars_fragment:dM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:xM,map_particle_fragment:vM,map_particle_pars_fragment:_M,metalnessmap_fragment:yM,metalnessmap_pars_fragment:SM,morphinstance_vertex:MM,morphcolor_vertex:wM,morphnormal_vertex:EM,morphtarget_pars_vertex:bM,morphtarget_vertex:TM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:LM,normal_vertex:NM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:UM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:BM,project_vertex:zM,dithering_fragment:HM,dithering_pars_fragment:VM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:qM,shadowmap_vertex:XM,shadowmask_pars_fragment:YM,skinbase_vertex:KM,skinning_pars_vertex:$M,skinning_vertex:ZM,skinnormal_vertex:JM,specularmap_fragment:QM,specularmap_pars_fragment:ew,tonemapping_fragment:tw,tonemapping_pars_fragment:nw,transmission_fragment:iw,transmission_pars_fragment:rw,uv_pars_fragment:sw,uv_pars_vertex:aw,uv_vertex:ow,worldpos_vertex:lw,background_vert:cw,background_frag:uw,backgroundCube_vert:dw,backgroundCube_frag:fw,cube_vert:hw,cube_frag:pw,depth_vert:mw,depth_frag:gw,distance_vert:xw,distance_frag:vw,equirect_vert:_w,equirect_frag:yw,linedashed_vert:Sw,linedashed_frag:Mw,meshbasic_vert:ww,meshbasic_frag:Ew,meshlambert_vert:bw,meshlambert_frag:Tw,meshmatcap_vert:Aw,meshmatcap_frag:Cw,meshnormal_vert:Rw,meshnormal_frag:Lw,meshphong_vert:Nw,meshphong_frag:Pw,meshphysical_vert:Iw,meshphysical_frag:Dw,meshtoon_vert:kw,meshtoon_frag:Uw,points_vert:Fw,points_frag:Ow,shadow_vert:Bw,shadow_frag:zw,sprite_vert:Hw,sprite_frag:Vw},He={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ki={basic:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Bn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Bn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Nt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Bn([He.points,He.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Bn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Bn([He.common,He.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Bn([He.sprite,He.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Bn([He.common,He.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Bn([He.lights,He.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ki.physical={uniforms:Bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Jl={r:0,b:0,g:0},Gw=new $t,Zg=new gt;Zg.set(-1,0,0,0,1,0,0,0,1);function Ww(s,e,t,r,o,l){const u=new Nt(0);let d=o===!0?0:1,f,m,v=null,y=0,x=null;function M(N){let B=N.isScene===!0?N.background:null;if(B&&B.isTexture){const C=N.backgroundBlurriness>0;B=e.get(B,C)}return B}function T(N){let B=!1;const C=M(N);C===null?S(u,d):C&&C.isColor&&(S(C,1),B=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||B)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(N,B){const C=M(B);C&&(C.isCubeTexture||C.mapping===mc)?(m===void 0&&(m=new zn(new Eo(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:ua(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Zg),m.material.toneMapped=Rt.getTransfer(C.colorSpace)!==zt,(v!==C||y!==C.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=C,y=C.version,x=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new zn(new gc(2,2),new Wi({name:"BackgroundMaterial",uniforms:ua(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(C.colorSpace)!==zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||y!==C.version||x!==s.toneMapping)&&(f.material.needsUpdate=!0,v=C,y=C.version,x=s.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function S(N,B){N.getRGB(Jl,Xg(s)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,B,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,B=1){u.set(N),d=B,S(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,S(u,d)},render:T,addToRenderList:R,dispose:_}}function jw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function d(j,$,te,q,Z){let fe=!1;const Q=y(j,q,te,$);l!==Q&&(l=Q,m(l.object)),fe=M(j,q,te,Z),fe&&T(j,q,te,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,C(j,$,te,q),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return s.createVertexArray()}function m(j){return s.bindVertexArray(j)}function v(j){return s.deleteVertexArray(j)}function y(j,$,te,q){const Z=q.wireframe===!0;let fe=r[$.id];fe===void 0&&(fe={},r[$.id]=fe);const Q=j.isInstancedMesh===!0?j.id:0;let O=fe[Q];O===void 0&&(O={},fe[Q]=O);let z=O[te.id];z===void 0&&(z={},O[te.id]=z);let H=z[Z];return H===void 0&&(H=x(f()),z[Z]=H),H}function x(j){const $=[],te=[],q=[];for(let Z=0;Z<t;Z++)$[Z]=0,te[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:te,attributeDivisors:q,object:j,attributes:{},index:null}}function M(j,$,te,q){const Z=l.attributes,fe=$.attributes;let Q=0;const O=te.getAttributes();for(const z in O)if(O[z].location>=0){const L=Z[z];let se=fe[z];if(se===void 0&&(z==="instanceMatrix"&&j.instanceMatrix&&(se=j.instanceMatrix),z==="instanceColor"&&j.instanceColor&&(se=j.instanceColor)),L===void 0||L.attribute!==se||se&&L.data!==se.data)return!0;Q++}return l.attributesNum!==Q||l.index!==q}function T(j,$,te,q){const Z={},fe=$.attributes;let Q=0;const O=te.getAttributes();for(const z in O)if(O[z].location>=0){let L=fe[z];L===void 0&&(z==="instanceMatrix"&&j.instanceMatrix&&(L=j.instanceMatrix),z==="instanceColor"&&j.instanceColor&&(L=j.instanceColor));const se={};se.attribute=L,L&&L.data&&(se.data=L.data),Z[z]=se,Q++}l.attributes=Z,l.attributesNum=Q,l.index=q}function R(){const j=l.newAttributes;for(let $=0,te=j.length;$<te;$++)j[$]=0}function S(j){_(j,0)}function _(j,$){const te=l.newAttributes,q=l.enabledAttributes,Z=l.attributeDivisors;te[j]=1,q[j]===0&&(s.enableVertexAttribArray(j),q[j]=1),Z[j]!==$&&(s.vertexAttribDivisor(j,$),Z[j]=$)}function N(){const j=l.newAttributes,$=l.enabledAttributes;for(let te=0,q=$.length;te<q;te++)$[te]!==j[te]&&(s.disableVertexAttribArray(te),$[te]=0)}function B(j,$,te,q,Z,fe,Q){Q===!0?s.vertexAttribIPointer(j,$,te,Z,fe):s.vertexAttribPointer(j,$,te,q,Z,fe)}function C(j,$,te,q){R();const Z=q.attributes,fe=te.getAttributes(),Q=$.defaultAttributeValues;for(const O in fe){const z=fe[O];if(z.location>=0){let H=Z[O];if(H===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(H=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(H=j.instanceColor)),H!==void 0){const L=H.normalized,se=H.itemSize,Se=e.get(H);if(Se===void 0)continue;const We=Se.buffer,Ge=Se.type,Oe=Se.bytesPerElement,ae=Ge===s.INT||Ge===s.UNSIGNED_INT||H.gpuType===Ff;if(H.isInterleavedBufferAttribute){const ue=H.data,Ae=ue.stride,Re=H.offset;if(ue.isInstancedInterleavedBuffer){for(let we=0;we<z.locationSize;we++)_(z.location+we,ue.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let we=0;we<z.locationSize;we++)S(z.location+we);s.bindBuffer(s.ARRAY_BUFFER,We);for(let we=0;we<z.locationSize;we++)B(z.location+we,se/z.locationSize,Ge,L,Ae*Oe,(Re+se/z.locationSize*we)*Oe,ae)}else{if(H.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)_(z.location+ue,H.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ue=0;ue<z.locationSize;ue++)S(z.location+ue);s.bindBuffer(s.ARRAY_BUFFER,We);for(let ue=0;ue<z.locationSize;ue++)B(z.location+ue,se/z.locationSize,Ge,L,se*Oe,se/z.locationSize*ue*Oe,ae)}}else if(Q!==void 0){const L=Q[O];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(z.location,L);break;case 3:s.vertexAttrib3fv(z.location,L);break;case 4:s.vertexAttrib4fv(z.location,L);break;default:s.vertexAttrib1fv(z.location,L)}}}}N()}function P(){D();for(const j in r){const $=r[j];for(const te in $){const q=$[te];for(const Z in q){const fe=q[Z];for(const Q in fe)v(fe[Q].object),delete fe[Q];delete q[Z]}}delete r[j]}}function I(j){if(r[j.id]===void 0)return;const $=r[j.id];for(const te in $){const q=$[te];for(const Z in q){const fe=q[Z];for(const Q in fe)v(fe[Q].object),delete fe[Q];delete q[Z]}}delete r[j.id]}function F(j){for(const $ in r){const te=r[$];for(const q in te){const Z=te[q];if(Z[j.id]===void 0)continue;const fe=Z[j.id];for(const Q in fe)v(fe[Q].object),delete fe[Q];delete Z[j.id]}}}function E(j){for(const $ in r){const te=r[$],q=j.isInstancedMesh===!0?j.id:0,Z=te[q];if(Z!==void 0){for(const fe in Z){const Q=Z[fe];for(const O in Q)v(Q[O].object),delete Q[O];delete Z[fe]}delete te[q],Object.keys(te).length===0&&delete r[$]}}}function D(){V(),u=!0,l!==o&&(l=o,m(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:S,disableUnusedAttributes:N}}function qw(s,e,t){let r;function o(f){r=f}function l(f,m){s.drawArrays(r,f,m),t.update(m,r,1)}function u(f,m,v){v!==0&&(s.drawArraysInstanced(r,f,m,v),t.update(m,r,v))}function d(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,m,0,v);let x=0;for(let M=0;M<v;M++)x+=m[M];t.update(x,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Xw(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const E=F===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ti&&F!==Oi&&!E&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=f(m);v!==m&&(ht("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),B=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:y,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:B,maxFragmentUniforms:C,maxSamples:P,samples:I}}function Yw(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Pr,d=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,x){const M=y.length!==0||x||r!==0||o;return o=x,r=y.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,x){t=v(y,x,0)},this.setState=function(y,x,M){const T=y.clippingPlanes,R=y.clipIntersection,S=y.clipShadows,_=s.get(y);if(!o||T===null||T.length===0||l&&!S)l?v(null):m();else{const N=l?0:r,B=N*4;let C=_.clippingState||null;f.value=C,C=v(T,x,B,M);for(let P=0;P!==B;++P)C[P]=t[P];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,x,M,T){const R=y!==null?y.length:0;let S=null;if(R!==0){if(S=f.value,T!==!0||S===null){const _=M+R*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let B=0,C=M;B!==R;++B,C+=4)u.copy(y[B]).applyMatrix4(N,d),u.normal.toArray(S,C),S[C+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const aa=4,Kw=6,$w=20,Zw=256,oo=new Jf,T0=new Nt;let Nd=null,Pd=0,Id=0,Dd=!1;const Jw=new ne,ss=new ne;class A0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=Jw}=l;Nd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Pd,Id),this._renderer.xr.enabled=Dd,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:Gi,format:Ai,colorSpace:cc,depthBuffer:!1},o=C0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qw(l)),this._blurMaterial=tE(l,e,t),this._ggxMaterial=eE(l,e,t)}return o}_compileMaterial(e){const t=new zn(new ni,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,r,o,l){const f=new fi(90,1,t,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,x=y.autoClear,M=y.toneMapping;y.getClearColor(T0),y.toneMapping=zi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zn(new Eo,new as({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let _=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,_=!0):(S.color.copy(T0),_=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(f.up.set(0,m[B],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+v[B],l.y,l.z)):C===1?(f.up.set(0,0,m[B]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+v[B],l.z)):(f.up.set(0,m[B],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+v[B]));const P=this._cubeSize;na(o,C*P,B>2?P:0,P,P),y.setRenderTarget(o),_&&y.render(R,f),y.render(e,f)}y.toneMapping=M,y.autoClear=x,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===us||e.mapping===ca;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;na(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,oo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,m=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(m*m-v*v),x=m*1.25,M=y*x,{_lodMax:T}=this,R=this._sizeLods[r],S=3*R*(r>T-aa?r-T+aa:0),_=4*(this._cubeSize-R);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=T-t,na(l,S,_,3*R,2*R),o.setRenderTarget(l),o.render(d,oo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=T-r,na(e,S,_,3*R,2*R),o.setRenderTarget(e),o.render(d,oo)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,d=this._blurMaterial,f=this._lodMeshes[o];f.material=d;const m=d.uniforms;m.envMap.value=e.texture,m.sigma.value=l,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],y=3*v*(o>this._lodMax-aa?o-this._lodMax+aa:0),x=4*(this._cubeSize-v);na(t,y,x,3*v,2*v),u.setRenderTarget(t),u.render(f,oo)}}function Qw(s){const e=[],t=[];let r=s;const o=s-aa+1+Kw;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const d=1/(u-2),f=-d,m=1+d,v=[f,f,m,f,m,m,f,f,m,m,f,m],y=6,x=6,M=3,T=new Float32Array(M*x*y),R=new Float32Array(M*x*y);for(let _=0;_<y;_++){const N=_%3*2/3-1,B=_>2?0:-1,C=[N,B,0,N+2/3,B,0,N+2/3,B+1,0,N,B,0,N+2/3,B+1,0,N,B+1,0];T.set(C,M*x*_);for(let P=0;P<x;P++){const I=v[P*2]*2-1,F=v[P*2+1]*2-1;_===0?ss.set(1,F,I):_===1?ss.set(-I,1,-F):_===2?ss.set(-I,F,1):_===3?ss.set(-1,F,-I):_===4?ss.set(-I,-1,F):ss.set(I,F,-1),ss.toArray(R,(_*x+P)*M)}}const S=new ni;S.setAttribute("position",new Hi(T,M)),S.setAttribute("outputDirection",new Hi(R,M)),t.push(new zn(S,null)),r>aa&&r--}return{lodMeshes:t,sizeLods:e}}function C0(s,e,t){const r=new Ci(s,e,t);return r.texture.mapping=mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function na(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function eE(s,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function tE(s,e,t){return new Wi({name:"SphericalGaussianBlur",defines:{SAMPLES:$w,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function R0(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function L0(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jg extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Eo(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:ua(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:ar});l.uniforms.tEquirect.value=t;const u=new zn(o,l),d=t.minFilter;return t.minFilter===os&&(t.minFilter=In),new iS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function nE(s){let e=new WeakMap,t=new WeakMap,r=null;function o(x,M=!1){return x==null?null:M?u(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===nd||M===id)if(e.has(x)){const T=e.get(x).texture;return d(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const R=new Jg(T.height);return R.fromEquirectangularTexture(s,x),e.set(x,R),x.addEventListener("dispose",m),d(R.texture,x.mapping)}else return null}}return x}function u(x){if(x&&x.isTexture){const M=x.mapping,T=M===nd||M===id,R=M===us||M===ca;if(T||R){let S=t.get(x);const _=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==_)return r===null&&(r=new A0(s)),S=T?r.fromEquirectangular(x,S):r.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),S.texture;if(S!==void 0)return S.texture;{const N=x.image;return T&&N&&N.height>0||R&&N&&f(N)?(r===null&&(r=new A0(s)),S=T?r.fromEquirectangular(x):r.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),x.addEventListener("dispose",v),S.texture):null}}}return x}function d(x,M){return M===nd?x.mapping=us:M===id&&(x.mapping=ca),x}function f(x){let M=0;const T=6;for(let R=0;R<T;R++)x[R]!==void 0&&M++;return M===T}function m(x){const M=x.target;M.removeEventListener("dispose",m);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function v(x){const M=x.target;M.removeEventListener("dispose",v);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function iE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&oa("WebGLRenderer: "+r+" extension not supported."),o}}}function rE(s,e,t,r){const o={},l=new WeakMap;function u(y){const x=y.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete o[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(y,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function f(y){const x=y.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function m(y){const x=[],M=y.index,T=y.attributes.position;let R=0;if(T===void 0)return;if(M!==null){const N=M.array;R=M.version;for(let B=0,C=N.length;B<C;B+=3){const P=N[B+0],I=N[B+1],F=N[B+2];x.push(P,I,I,F,F,P)}}else{const N=T.array;R=T.version;for(let B=0,C=N.length/3-1;B<C;B+=3){const P=B+0,I=B+1,F=B+2;x.push(P,I,I,F,F,P)}}const S=new(T.count>=65535?Hg:zg)(x,1);S.version=R;const _=l.get(y);_&&e.remove(_),l.set(y,S)}function v(y){const x=l.get(y);if(x){const M=y.index;M!==null&&x.version<M.version&&m(y)}else m(y);return l.get(y)}return{get:d,update:f,getWireframeAttribute:v}}function sE(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function f(y,x){s.drawElements(r,x,l,y*u),t.update(x,r,1)}function m(y,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,y*u,M),t.update(x,r,M))}function v(y,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,y,0,M);let R=0;for(let S=0;S<M;S++)R+=x[S];t.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=m,this.renderMultiDraw=v}function aE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function oE(s,e,t){const r=new WeakMap,o=new en;function l(u,d,f){const m=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==y){let V=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",V)};var M=V;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),S===!0&&(C=3);let P=d.attributes.position.count*C,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*I*4*y),E=new Og(F,P,I,y);E.type=Oi,E.needsUpdate=!0;const D=C*4;for(let j=0;j<y;j++){const $=_[j],te=N[j],q=B[j],Z=P*I*4*j;for(let fe=0;fe<$.count;fe++){const Q=fe*D;T===!0&&(o.fromBufferAttribute($,fe),F[Z+Q+0]=o.x,F[Z+Q+1]=o.y,F[Z+Q+2]=o.z,F[Z+Q+3]=0),R===!0&&(o.fromBufferAttribute(te,fe),F[Z+Q+4]=o.x,F[Z+Q+5]=o.y,F[Z+Q+6]=o.z,F[Z+Q+7]=0),S===!0&&(o.fromBufferAttribute(q,fe),F[Z+Q+8]=o.x,F[Z+Q+9]=o.y,F[Z+Q+10]=o.z,F[Z+Q+11]=q.itemSize===4?o.w:1)}}x={count:y,texture:E,size:new xt(P,I)},r.set(d,x),d.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const R=d.morphTargetsRelative?1:1-T;f.getUniforms().setValue(s,"morphTargetBaseInfluence",R),f.getUniforms().setValue(s,"morphTargetInfluences",m)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function lE(s,e,t,r,o){let l=new WeakMap;function u(m){const v=o.render.frame,y=m.geometry,x=e.get(m,y);if(l.get(x)!==v&&(e.update(x),l.set(x,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),l.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return x}function d(){l=new WeakMap}function f(m){const v=m.target;v.removeEventListener("dispose",f),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const cE={[Sg]:"LINEAR_TONE_MAPPING",[Mg]:"REINHARD_TONE_MAPPING",[wg]:"CINEON_TONE_MAPPING",[Eg]:"ACES_FILMIC_TONE_MAPPING",[Tg]:"AGX_TONE_MAPPING",[Ag]:"NEUTRAL_TONE_MAPPING",[bg]:"CUSTOM_TONE_MAPPING"};function uE(s,e,t,r,o,l){const u=new Ci(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null;const m=new ni;m.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new vn([0,2,0,0,2,0],2));const v=new q1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),y=new zn(m,v),x=new Jf(-1,1,1,-1,0,1);let M=null,T=null,R=!1,S,_=null,N=[],B=!1;this.setSize=function(C,P){u.setSize(C,P),d!==null&&d.setSize(C,P),f!==null&&f.setSize(C,P);for(let I=0;I<N.length;I++){const F=N[I];F.setSize&&F.setSize(C,P)}},this.setEffects=function(C){N=C,B=N.length>0&&N[0].isRenderPass===!0;const P=u.width,I=u.height;N.length>0&&d===null&&(d=new Ci(P,I,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),f=new Ci(P,I,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<N.length;F++){const E=N[F];E.setSize&&E.setSize(P,I)}},this.begin=function(C,P){if(R||C.toneMapping===zi&&N.length===0)return!1;if(_=P,P!==null){const I=P.width,F=P.height;(u.width!==I||u.height!==F)&&this.setSize(I,F)}return B===!1&&C.setRenderTarget(u),S=C.toneMapping,C.toneMapping=zi,!0},this.hasRenderPass=function(){return B},this.end=function(C,P){C.toneMapping=S,R=!0;let I=u,F=d;for(let E=0;E<N.length;E++){const D=N[E];D.enabled!==!1&&(D.render(C,F,I,P),D.needsSwap!==!1&&(I=F,F=F===d?f:d))}if(M!==C.outputColorSpace||T!==C.toneMapping){M=C.outputColorSpace,T=C.toneMapping,v.defines={},Rt.getTransfer(M)===zt&&(v.defines.SRGB_TRANSFER="");const E=cE[T];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=I.texture,C.setRenderTarget(_),C.render(y,x),_=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),m.dispose(),v.dispose()}}const Qg=new wn,Nf=new So(1,1),ex=new Og,tx=new y1,nx=new jg,N0=[],P0=[],I0=new Float32Array(16),D0=new Float32Array(9),k0=new Float32Array(4);function ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=N0[o];if(l===void 0&&(l=new Float32Array(o),N0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function vc(s,e){let t=P0[e];t===void 0&&(t=new Int32Array(e),P0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function dE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function mE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;k0.set(r),s.uniformMatrix2fv(this.addr,!1,k0),hn(t,r)}}function gE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;D0.set(r),s.uniformMatrix3fv(this.addr,!1,D0),hn(t,r)}}function xE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;I0.set(r),s.uniformMatrix4fv(this.addr,!1,I0),hn(t,r)}}function vE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function ME(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function bE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function TE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Nf.compareFunction=t.isReversedDepthBuffer()?Wf:Gf,l=Nf):l=Qg,t.setTexture2D(e||l,o)}function AE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||tx,o)}function CE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||nx,o)}function RE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||ex,o)}function LE(s){switch(s){case 5126:return dE;case 35664:return fE;case 35665:return hE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return xE;case 5124:case 35670:return vE;case 35667:case 35671:return _E;case 35668:case 35672:return yE;case 35669:case 35673:return SE;case 5125:return ME;case 36294:return wE;case 36295:return EE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return RE}}function NE(s,e){s.uniform1fv(this.addr,e)}function PE(s,e){const t=ma(e,this.size,2);s.uniform2fv(this.addr,t)}function IE(s,e){const t=ma(e,this.size,3);s.uniform3fv(this.addr,t)}function DE(s,e){const t=ma(e,this.size,4);s.uniform4fv(this.addr,t)}function kE(s,e){const t=ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function UE(s,e){const t=ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function FE(s,e){const t=ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function OE(s,e){s.uniform1iv(this.addr,e)}function BE(s,e){s.uniform2iv(this.addr,e)}function zE(s,e){s.uniform3iv(this.addr,e)}function HE(s,e){s.uniform4iv(this.addr,e)}function VE(s,e){s.uniform1uiv(this.addr,e)}function GE(s,e){s.uniform2uiv(this.addr,e)}function WE(s,e){s.uniform3uiv(this.addr,e)}function jE(s,e){s.uniform4uiv(this.addr,e)}function qE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Nf:u=Qg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function XE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||tx,l[u])}function YE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||nx,l[u])}function KE(s,e,t){const r=this.cache,o=e.length,l=vc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||ex,l[u])}function $E(s){switch(s){case 5126:return NE;case 35664:return PE;case 35665:return IE;case 35666:return DE;case 35674:return kE;case 35675:return UE;case 35676:return FE;case 5124:case 35670:return OE;case 35667:case 35671:return BE;case 35668:case 35672:return zE;case 35669:case 35673:return HE;case 5125:return VE;case 36294:return GE;case 36295:return WE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return KE}}class ZE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=LE(t.type)}}class JE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$E(t.type)}}class QE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function U0(s,e){s.seq.push(e),s.map[e.id]=e}function eb(s,e,t){const r=s.name,o=r.length;for(kd.lastIndex=0;;){const l=kd.exec(r),u=kd.lastIndex;let d=l[1];const f=l[2]==="]",m=l[3];if(f&&(d=d|0),m===void 0||m==="["&&u+2===o){U0(t,m===void 0?new ZE(d,s,e):new JE(d,s,e));break}else{let y=t.map[d];y===void 0&&(y=new QE(d),U0(t,y)),t=y}}}class sc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),f=e.getUniformLocation(t,d.name);eb(d,f,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function F0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const tb=37297;let nb=0;function ib(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const O0=new gt;function rb(s){Rt._getMatrix(O0,Rt.workingColorSpace,s);const e=`mat3( ${O0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case uc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function B0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+ib(s.getShaderSource(e),d)}else return l}function sb(s,e){const t=rb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ab={[Sg]:"Linear",[Mg]:"Reinhard",[wg]:"Cineon",[Eg]:"ACESFilmic",[Tg]:"AgX",[Ag]:"Neutral",[bg]:"Custom"};function ob(s,e){const t=ab[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new ne;function lb(){Rt.getLuminanceCoefficients(Ql);const s=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function ub(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function db(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function fo(s){return s!==""}function z0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(s){return s.replace(fb,pb)}const hb=new Map;function pb(s,e){let t=wt[e];if(t===void 0){const r=hb.get(e);if(r!==void 0)t=wt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pf(t)}const mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(s){return s.replace(mb,gb)}function gb(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function G0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xb={[ec]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function vb(s){return xb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _b={[us]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function yb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":_b[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sb={[ca]:"ENVMAP_MODE_REFRACTION"};function Mb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wb={[yg]:"ENVMAP_BLENDING_MULTIPLY",[Jy]:"ENVMAP_BLENDING_MIX",[Qy]:"ENVMAP_BLENDING_ADD"};function Eb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wb[s.combine]||"ENVMAP_BLENDING_NONE"}function bb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Tb(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=vb(t),m=yb(t),v=Mb(t),y=Eb(t),x=bb(t),M=cb(t),T=ub(l),R=o.createProgram();let S,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),_.length>0&&(_+=`
`)):(S=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),_=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?wt.tonemapping_pars_fragment:"",t.toneMapping!==zi?ob("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,sb("linearToOutputTexel",t.outputColorSpace),lb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),u=Pf(u),u=z0(u,t),u=H0(u,t),d=Pf(d),d=z0(d,t),d=H0(d,t),u=V0(u),d=V0(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const B=N+S+u,C=N+_+d,P=F0(o,o.VERTEX_SHADER,B),I=F0(o,o.FRAGMENT_SHADER,C);o.attachShader(R,P),o.attachShader(R,I),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(j){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",te=o.getShaderInfoLog(P)||"",q=o.getShaderInfoLog(I)||"",Z=$.trim(),fe=te.trim(),Q=q.trim();let O=!0,z=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,P,I);else{const H=B0(o,P,"vertex"),L=B0(o,I,"fragment");It("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+Z+`
`+H+`
`+L)}else Z!==""?ht("WebGLProgram: Program Info Log:",Z):(fe===""||Q==="")&&(z=!1);z&&(j.diagnostics={runnable:O,programLog:Z,vertexShader:{log:fe,prefix:S},fragmentShader:{log:Q,prefix:_}})}o.deleteShader(P),o.deleteShader(I),E=new sc(o,R),D=db(o,R)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(R,tb)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=I,this}let Ab=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Rb(e),t.set(e,r)),r}}class Rb{constructor(e){this.id=Ab++,this.code=e,this.usedTimes=0}}function Lb(s){return s===ds||s===oc||s===lc}function Nb(s,e,t,r,o,l){const u=new qf,d=new Cb,f=new Set,m=[],v=new Map,y=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return f.add(E),E===0?"uv":`uv${E}`}function R(E,D,V,j,$,te){const q=j.fog,Z=$.geometry,fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?j.environment:null,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,O=e.get(E.envMap||fe,Q),z=O&&O.mapping===mc?O.image.height:null,H=M[E.type];E.precision!==null&&(x=r.getMaxPrecision(E.precision),x!==E.precision&&ht("WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));const L=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=L!==void 0?L.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let We,Ge,Oe,ae;if(H){const kt=ki[H];We=kt.vertexShader,Ge=kt.fragmentShader}else{We=E.vertexShader,Ge=E.fragmentShader;const kt=d.getVertexShaderStage(E),Pt=d.getFragmentShaderStage(E);d.update(E,kt,Pt),Oe=kt.id,ae=Pt.id}const ue=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Re=$.isInstancedMesh===!0,we=$.isBatchedMesh===!0,ot=!!E.map,Et=!!E.matcap,Ue=!!O,pt=!!E.aoMap,yt=!!E.lightMap,ut=!!E.bumpMap&&E.wireframe===!1,St=!!E.normalMap,pe=!!E.displacementMap,be=!!E.emissiveMap,st=!!E.metalnessMap,vt=!!E.roughnessMap,W=E.anisotropy>0,Gt=E.clearcoat>0,Tt=E.dispersion>0,k=E.retroreflectivity>0,w=E.iridescence>0,J=E.sheen>0,oe=E.transmission>0,he=W&&!!E.anisotropyMap,Te=Gt&&!!E.clearcoatMap,Ne=Gt&&!!E.clearcoatNormalMap,me=Gt&&!!E.clearcoatRoughnessMap,ve=w&&!!E.iridescenceMap,De=w&&!!E.iridescenceThicknessMap,et=J&&!!E.sheenColorMap,ke=J&&!!E.sheenRoughnessMap,Le=!!E.specularMap,tt=!!E.specularColorMap,at=!!E.specularIntensityMap,dt=oe&&!!E.transmissionMap,X=oe&&!!E.thicknessMap,Pe=!!E.gradientMap,ge=!!E.alphaMap,Ie=E.alphaTest>0,Ve=!!E.alphaHash,_e=!!E.extensions;let it=zi;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=s.toneMapping);const Je={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:We,fragmentShader:Ge,defines:E.defines,customVertexShaderID:Oe,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,batching:we,batchingColor:we&&$._colorsTexture!==null,instancing:Re,instancingColor:Re&&$.instanceColor!==null,instancingMorph:Re&&$.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ot,matcap:Et,envMap:Ue,envMapMode:Ue&&O.mapping,envMapCubeUVHeight:z,aoMap:pt,lightMap:yt,bumpMap:ut,normalMap:St,displacementMap:pe,emissiveMap:be,normalMapObjectSpace:St&&E.normalMapType===n1,normalMapTangentSpace:St&&E.normalMapType===Cf,packedNormalMap:St&&E.normalMapType===Cf&&Lb(E.normalMap.format),metalnessMap:st,roughnessMap:vt,anisotropy:W,anisotropyMap:he,clearcoat:Gt,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:me,dispersion:Tt,retroreflection:k,iridescence:w,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:J,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:Le,specularColorMap:tt,specularIntensityMap:at,transmission:oe,transmissionMap:dt,thicknessMap:X,gradientMap:Pe,opaque:E.transparent===!1&&E.blending===ho&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Ve,combine:E.combine,mapUv:ot&&T(E.map.channel),aoMapUv:pt&&T(E.aoMap.channel),lightMapUv:yt&&T(E.lightMap.channel),bumpMapUv:ut&&T(E.bumpMap.channel),normalMapUv:St&&T(E.normalMap.channel),displacementMapUv:pe&&T(E.displacementMap.channel),emissiveMapUv:be&&T(E.emissiveMap.channel),metalnessMapUv:st&&T(E.metalnessMap.channel),roughnessMapUv:vt&&T(E.roughnessMap.channel),anisotropyMapUv:he&&T(E.anisotropyMap.channel),clearcoatMapUv:Te&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(E.sheenRoughnessMap.channel),specularMapUv:Le&&T(E.specularMap.channel),specularColorMapUv:tt&&T(E.specularColorMap.channel),specularIntensityMapUv:at&&T(E.specularIntensityMap.channel),transmissionMapUv:dt&&T(E.transmissionMap.channel),thicknessMapUv:X&&T(E.thicknessMap.channel),alphaMapUv:ge&&T(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(St||W),vertexNormals:!!Z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Z.attributes.uv&&(ot||ge),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Z.attributes.normal===void 0&&St===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ae,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:ot&&E.map.isVideoTexture===!0&&Rt.getTransfer(E.map.colorSpace)===zt,decodeVideoTextureEmissive:be&&E.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(E.emissiveMap.colorSpace)===zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ui,flipSided:E.side===Dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_e&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&E.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=f.has(1),Je.vertexUv2s=f.has(2),Je.vertexUv3s=f.has(3),f.clear(),Je}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)D.push(V),D.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(_(D,E),N(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function _(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function N(E,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function B(E){const D=M[E.type];let V;if(D){const j=ki[D];V=G1.clone(j.uniforms)}else V=E.uniforms;return V}function C(E,D){let V=v.get(D);return V!==void 0?++V.usedTimes:(V=new Tb(s,D,E,o),m.push(V),v.set(D,V)),V}function P(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function I(E){d.remove(E)}function F(){d.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:B,acquireProgram:C,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:F}}function Pb(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Ib(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function W0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function j0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function d(x,M,T,R,S,_){let N=s[e];return N===void 0?(N={id:x.id,object:x,geometry:M,material:T,materialVariant:u(x),groupOrder:R,renderOrder:x.renderOrder,z:S,group:_},s[e]=N):(N.id=x.id,N.object=x,N.geometry=M,N.material=T,N.materialVariant=u(x),N.groupOrder=R,N.renderOrder=x.renderOrder,N.z=S,N.group=_),e++,N}function f(x,M,T,R,S,_,N){N.reversedDepth===!0&&(S=-S);const B=d(x,M,T,R,S,_);T.transmission>0?r.push(B):T.transparent===!0?o.push(B):t.push(B)}function m(x,M,T,R,S,_){const N=d(x,M,T,R,S,_);T.transmission>0?r.unshift(N):T.transparent===!0?o.unshift(N):t.unshift(N)}function v(x,M){t.length>1&&t.sort(x||Ib),r.length>1&&r.sort(M||W0),o.length>1&&o.sort(M||W0)}function y(){for(let x=e,M=s.length;x<M;x++){const T=s[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:m,finish:y,sort:v}}function Db(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new j0,s.set(r,[u])):o>=l.length?(u=new j0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function kb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ne,color:new Nt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=t,t}}}function Ub(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Fb=0;function Ob(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bb(s){const e=new kb,t=Ub(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const o=new ne,l=new $t,u=new $t;function d(m){let v=0,y=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let M=0,T=0,R=0,S=0,_=0,N=0,B=0,C=0,P=0,I=0,F=0,E=0,D=0,V=0;m.sort(Ob);for(let $=0,te=m.length;$<te;$++){const q=m[$],Z=q.color,fe=q.intensity,Q=q.distance;let O=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===ds?O=q.shadow.map.texture:O=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)v+=Z.r*fe,y+=Z.g*fe,x+=Z.b*fe;else if(q.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(q.sh.coefficients[z],fe);V++}else if(q.isSunLight){const z=e.get(q);if(z.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const H=q.shadow,L=t.get(q);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),r.sunShadow[T]=L,r.sunShadowMap[T]=O;const se=H.getViewportCount();for(let Se=0;Se<se;Se++)r.sunShadowMatrix[R+Se]=H.getMatrix(Se),r.sunShadowCascade[R+Se]=H._cascadeData[Se];R+=se,T++}r.sun[M]=z,M++}else if(q.isDirectionalLight){const z=e.get(q);if(z.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const H=q.shadow,L=t.get(q);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,r.directionalShadow[S]=L,r.directionalShadowMap[S]=O,r.directionalShadowMatrix[S]=q.shadow.matrix,P++}r.directional[S]=z,S++}else if(q.isSpotLight){const z=e.get(q);z.position.setFromMatrixPosition(q.matrixWorld),z.color.copy(Z).multiplyScalar(fe),z.distance=Q,z.coneCos=Math.cos(q.angle),z.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),z.decay=q.decay,r.spot[N]=z;const H=q.shadow;if(q.map&&(r.spotLightMap[E]=q.map,E++,H.updateMatrices(q),q.castShadow&&D++),r.spotLightMatrix[N]=H.matrix,q.castShadow){const L=t.get(q);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,r.spotShadow[N]=L,r.spotShadowMap[N]=O,F++}N++}else if(q.isRectAreaLight){const z=e.get(q);z.color.copy(Z).multiplyScalar(fe),z.halfWidth.set(q.width*.5,0,0),z.halfHeight.set(0,q.height*.5,0),r.rectArea[B]=z,B++}else if(q.isPointLight){const z=e.get(q);if(z.color.copy(q.color).multiplyScalar(q.intensity),z.distance=q.distance,z.decay=q.decay,q.castShadow){const H=q.shadow,L=t.get(q);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,r.pointShadow[_]=L,r.pointShadowMap[_]=O,r.pointShadowMatrix[_]=q.shadow.matrix,I++}r.point[_]=z,_++}else if(q.isHemisphereLight){const z=e.get(q);z.skyColor.copy(q.color).multiplyScalar(fe),z.groundColor.copy(q.groundColor).multiplyScalar(fe),r.hemi[C]=z,C++}}B>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=x;const j=r.hash;(j.sunLength!==M||j.directionalLength!==S||j.pointLength!==_||j.spotLength!==N||j.rectAreaLength!==B||j.hemiLength!==C||j.numSunShadows!==T||j.numDirectionalShadows!==P||j.numPointShadows!==I||j.numSpotShadows!==F||j.numSpotMaps!==E||j.numLightProbes!==V)&&(r.sun.length=M,r.directional.length=S,r.spot.length=N,r.rectArea.length=B,r.point.length=_,r.hemi.length=C,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.directionalShadowMatrix.length=P,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=V,j.sunLength=M,j.directionalLength=S,j.pointLength=_,j.spotLength=N,j.rectAreaLength=B,j.hemiLength=C,j.numSunShadows=T,j.numDirectionalShadows=P,j.numPointShadows=I,j.numSpotShadows=F,j.numSpotMaps=E,j.numLightProbes=V,r.version=Fb++)}function f(m,v){let y=0,x=0,M=0,T=0,R=0,S=0;const _=v.matrixWorldInverse;for(let N=0,B=m.length;N<B;N++){const C=m[N];if(C.isSunLight){const P=r.sun[y];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(_),y++}else if(C.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),x++}else if(C.isSpotLight){const P=r.spot[T];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),T++}else if(C.isRectAreaLight){const P=r.rectArea[R];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(_),u.identity(),l.copy(C.matrixWorld),l.premultiply(_),u.extractRotation(l),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const P=r.point[M];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(_),M++}else if(C.isHemisphereLight){const P=r.hemi[S];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(_),S++}}}return{setup:d,setupView:f,state:r}}function q0(s){const e=new Bb(s),t=[],r=[],o=[];function l(x){y.camera=x,t.length=0,r.length=0,o.length=0}function u(x){t.push(x)}function d(x){r.push(x)}function f(x){o.push(x)}function m(){e.setup(t)}function v(x){e.setupView(t,x)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:m,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:f}}function zb(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new q0(s),e.set(o,[d])):l>=u.length?(d=new q0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const Hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vb=`uniform sampler2D shadow_pass;
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
}`,Gb=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],Wb=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],X0=new $t,lo=new ne,Ud=new ne;function jb(s,e,t){let r=new Yf;const o=new xt,l=new xt,u=new en,d=new Y1,f=new K1,m={},v=t.maxTextureSize,y={[cs]:Dn,[Dn]:cs,[Ui]:Ui},x=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Hb,fragmentShader:Vb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new ni;T.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new zn(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let _=this.type;this.render=function(I,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;this.type===Iy&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ec);const D=s.getRenderTarget(),V=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ar),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=_!==this.type;te&&F.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Z=>Z.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Z=I.length;q<Z;q++){const fe=I[q],Q=fe.shadow;if(Q===void 0){ht("WebGLShadowMap:",fe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const O=Q.getFrameExtents();o.multiply(O),l.copy(Q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/O.x),o.x=l.x*O.x,Q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/O.y),o.y=l.y*O.y,Q.mapSize.y=l.y));const z=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=z,Q.map===null||te===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===uo){if(fe.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Ci(o.x,o.y,{format:ds,type:Gi,minFilter:In,magFilter:In,generateMipmaps:!1}),Q.map.texture.name=fe.name+".shadowMap",Q.map.depthTexture=new So(o.x,o.y,Oi),Q.map.depthTexture.name=fe.name+".shadowMapDepth",Q.map.depthTexture.format=lr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Mn,Q.map.depthTexture.magFilter=Mn}else fe.isPointLight?(Q.map=new Jg(o.x),Q.map.depthTexture=new H1(o.x,Vi)):(Q.map=new Ci(o.x,o.y),Q.map.depthTexture=new So(o.x,o.y,Vi)),Q.map.depthTexture.name=fe.name+".shadowMap",Q.map.depthTexture.format=lr,this.type===ec?(Q.map.depthTexture.compareFunction=z?Wf:Gf,Q.map.depthTexture.minFilter=In,Q.map.depthTexture.magFilter=In):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Mn,Q.map.depthTexture.magFilter=Mn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==o.x||Q.map.height!==o.y)&&Q.map.setSize(o.x,o.y);const H=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();fe.isPointLight!==!0&&Q.updateMatrices(fe,E);for(let L=0;L<H;L++){const se=Q.getCamera(L);if(fe.isPointLight){const Se=Q.camera,We=Q.matrix,Ge=fe.distance||Se.far;Ge!==Se.far&&(Se.far=Ge,Se.updateProjectionMatrix()),lo.setFromMatrixPosition(fe.matrixWorld),Se.position.copy(lo),Ud.copy(Se.position),Ud.add(Gb[L]),Se.up.copy(Wb[L]),Se.lookAt(Ud),Se.updateMatrixWorld(),We.makeTranslation(-lo.x,-lo.y,-lo.z),X0.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(X0,Se.coordinateSystem,Se.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,L),s.clear();else{L===0&&(s.setRenderTarget(Q.map),s.clear());const Se=Q.getViewport(L);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),$.viewport(u)}r=Q.getFrustum(L),C(F,E,se,fe,this.type)}Q.isPointLightShadow!==!0&&this.type===uo&&N(Q,E),Q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,V,j)};function N(I,F){const E=e.update(R);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null?I.mapPass=new Ci(o.x,o.y,{format:ds,type:Gi}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),x.uniforms.shadow_pass.value=I.map.depthTexture,x.uniforms.resolution.value.set(I.map.width,I.map.height),x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,E,x,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value.set(I.map.width,I.map.height),M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,E,M,R,null)}function B(I,F,E,D){let V=null;const j=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(j!==void 0)V=j;else if(V=E.isPointLight===!0?f:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=V.uuid,te=F.uuid;let q=m[$];q===void 0&&(q={},m[$]=q);let Z=q[te];Z===void 0&&(Z=V.clone(),q[te]=Z,F.addEventListener("dispose",P)),V=Z}if(V.visible=F.visible,V.wireframe=F.wireframe,D===uo?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:y[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const $=s.properties.get(V);$.light=E}return V}function C(I,F,E,D,V){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&V===uo)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const te=e.update(I),q=I.material;if(Array.isArray(q)){const Z=te.groups;for(let fe=0,Q=Z.length;fe<Q;fe++){const O=Z[fe],z=q[O.materialIndex];if(z&&z.visible){const H=B(I,z,D,V);I.onBeforeShadow(s,I,F,E,te,H,O),s.renderBufferDirect(E,null,te,H,I,O),I.onAfterShadow(s,I,F,E,te,H,O)}}}else if(q.visible){const Z=B(I,q,D,V);I.onBeforeShadow(s,I,F,E,te,Z,null),s.renderBufferDirect(E,null,te,Z,I,null),I.onAfterShadow(s,I,F,E,te,Z,null)}}const $=I.children;for(let te=0,q=$.length;te<q;te++)C($[te],F,E,D,V)}function P(I){I.target.removeEventListener("dispose",P);for(const E in m){const D=m[E],V=I.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function qb(s,e){function t(){let X=!1;const Pe=new en;let ge=null;const Ie=new en(0,0,0,0);return{setMask:function(Ve){ge!==Ve&&!X&&(s.colorMask(Ve,Ve,Ve,Ve),ge=Ve)},setLocked:function(Ve){X=Ve},setClear:function(Ve,_e,it,Je,kt){kt===!0&&(Ve*=Je,_e*=Je,it*=Je),Pe.set(Ve,_e,it,Je),Ie.equals(Pe)===!1&&(s.clearColor(Ve,_e,it,Je),Ie.copy(Pe))},reset:function(){X=!1,ge=null,Ie.set(-1,0,0,0)}}}function r(){let X=!1,Pe=!1,ge=null,Ie=null,Ve=null;return{setReversed:function(_e){if(Pe!==_e){const it=e.get("EXT_clip_control");_e?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Pe=_e;const Je=Ve;Ve=null,this.setClear(Je)}},getReversed:function(){return Pe},setTest:function(_e){_e?ue(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(_e){ge!==_e&&!X&&(s.depthMask(_e),ge=_e)},setFunc:function(_e){if(Pe&&(_e=h1[_e]),Ie!==_e){switch(_e){case Vd:s.depthFunc(s.NEVER);break;case Gd:s.depthFunc(s.ALWAYS);break;case Wd:s.depthFunc(s.LESS);break;case go:s.depthFunc(s.LEQUAL);break;case jd:s.depthFunc(s.EQUAL);break;case qd:s.depthFunc(s.GEQUAL);break;case Xd:s.depthFunc(s.GREATER);break;case Yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ve!==_e&&(Ve=_e,Pe&&(_e=1-_e),s.clearDepth(_e))},reset:function(){X=!1,ge=null,Ie=null,Ve=null,Pe=!1}}}function o(){let X=!1,Pe=null,ge=null,Ie=null,Ve=null,_e=null,it=null,Je=null,kt=null;return{setTest:function(Pt){X||(Pt?ue(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Pt){Pe!==Pt&&!X&&(s.stencilMask(Pt),Pe=Pt)},setFunc:function(Pt,_n,ii){(ge!==Pt||Ie!==_n||Ve!==ii)&&(s.stencilFunc(Pt,_n,ii),ge=Pt,Ie=_n,Ve=ii)},setOp:function(Pt,_n,ii){(_e!==Pt||it!==_n||Je!==ii)&&(s.stencilOp(Pt,_n,ii),_e=Pt,it=_n,Je=ii)},setLocked:function(Pt){X=Pt},setClear:function(Pt){kt!==Pt&&(s.clearStencil(Pt),kt=Pt)},reset:function(){X=!1,Pe=null,ge=null,Ie=null,Ve=null,_e=null,it=null,Je=null,kt=null}}}const l=new t,u=new r,d=new o,f=new WeakMap,m=new WeakMap;let v={},y={},x={},M=new WeakMap,T=[],R=null,S=!1,_=null,N=null,B=null,C=null,P=null,I=null,F=null,E=new Nt(0,0,0),D=0,V=!1,j=null,$=null,te=null,q=null,Z=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,O=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),Q=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Q=O>=2);let H=null,L={};const se=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),We=new en().fromArray(se),Ge=new en().fromArray(Se);function Oe(X,Pe,ge,Ie){const Ve=new Uint8Array(4),_e=s.createTexture();s.bindTexture(X,_e),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ge;it++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Ve):s.texImage2D(Pe+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ve);return _e}const ae={};ae[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),u.setFunc(go),ut(!1),St(Xm),ue(s.CULL_FACE),pt(ar);function ue(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function Ae(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Re(X,Pe){return x[X]!==Pe?(s.bindFramebuffer(X,Pe),x[X]=Pe,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Pe),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function we(X,Pe){let ge=T,Ie=!1;if(X){ge=M.get(Pe),ge===void 0&&(ge=[],M.set(Pe,ge));const Ve=X.textures;if(ge.length!==Ve.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,it=Ve.length;_e<it;_e++)ge[_e]=s.COLOR_ATTACHMENT0+_e;ge.length=Ve.length,Ie=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(ge)}function ot(X){return R!==X?(s.useProgram(X),R=X,!0):!1}const Et={[ia]:s.FUNC_ADD,[ky]:s.FUNC_SUBTRACT,[Uy]:s.FUNC_REVERSE_SUBTRACT};Et[Fy]=s.MIN,Et[Oy]=s.MAX;const Ue={[By]:s.ZERO,[zy]:s.ONE,[Hy]:s.SRC_COLOR,[vg]:s.SRC_ALPHA,[Xy]:s.SRC_ALPHA_SATURATE,[jy]:s.DST_COLOR,[Gy]:s.DST_ALPHA,[Vy]:s.ONE_MINUS_SRC_COLOR,[_g]:s.ONE_MINUS_SRC_ALPHA,[qy]:s.ONE_MINUS_DST_COLOR,[Wy]:s.ONE_MINUS_DST_ALPHA,[Yy]:s.CONSTANT_COLOR,[Ky]:s.ONE_MINUS_CONSTANT_COLOR,[$y]:s.CONSTANT_ALPHA,[Zy]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(X,Pe,ge,Ie,Ve,_e,it,Je,kt,Pt){if(X===ar){S===!0&&(Ae(s.BLEND),S=!1);return}if(S===!1&&(ue(s.BLEND),S=!0),X!==Dy){if(X!==_||Pt!==V){if((N!==ia||P!==ia)&&(s.blendEquation(s.FUNC_ADD),N=ia,P=ia),Pt)switch(X){case ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ym:s.blendFunc(s.ONE,s.ONE);break;case Km:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $m:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",X);break}else switch(X){case ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ym:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Km:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $m:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",X);break}B=null,C=null,I=null,F=null,E.set(0,0,0),D=0,_=X,V=Pt}return}Ve=Ve||Pe,_e=_e||ge,it=it||Ie,(Pe!==N||Ve!==P)&&(s.blendEquationSeparate(Et[Pe],Et[Ve]),N=Pe,P=Ve),(ge!==B||Ie!==C||_e!==I||it!==F)&&(s.blendFuncSeparate(Ue[ge],Ue[Ie],Ue[_e],Ue[it]),B=ge,C=Ie,I=_e,F=it),(Je.equals(E)===!1||kt!==D)&&(s.blendColor(Je.r,Je.g,Je.b,kt),E.copy(Je),D=kt),_=X,V=!1}function yt(X,Pe){X.side===Ui?Ae(s.CULL_FACE):ue(s.CULL_FACE);let ge=X.side===Dn;Pe&&(ge=!ge),ut(ge),X.blending===ho&&X.transparent===!1?pt(ar):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Ie=X.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),be(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(X){j!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),j=X)}function St(X){X!==Ny?(ue(s.CULL_FACE),X!==$&&(X===Xm?s.cullFace(s.BACK):X===Py?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),$=X}function pe(X){X!==te&&(Q&&s.lineWidth(X),te=X)}function be(X,Pe,ge){X?(ue(s.POLYGON_OFFSET_FILL),(q!==Pe||Z!==ge)&&(q=Pe,Z=ge,u.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,ge))):Ae(s.POLYGON_OFFSET_FILL)}function st(X){X?ue(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function vt(X){X===void 0&&(X=s.TEXTURE0+fe-1),H!==X&&(s.activeTexture(X),H=X)}function W(X,Pe,ge){ge===void 0&&(H===null?ge=s.TEXTURE0+fe-1:ge=H);let Ie=L[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},L[ge]=Ie),(Ie.type!==X||Ie.texture!==Pe)&&(H!==ge&&(s.activeTexture(ge),H=ge),s.bindTexture(X,Pe||ae[X]),Ie.type=X,Ie.texture=Pe)}function Gt(){const X=L[H];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Tt(){try{s.compressedTexImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function w(){try{s.texSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function J(){try{s.texSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function Te(){try{s.texStorage2D(...arguments)}catch(X){It("WebGLState:",X)}}function Ne(){try{s.texStorage3D(...arguments)}catch(X){It("WebGLState:",X)}}function me(){try{s.texImage2D(...arguments)}catch(X){It("WebGLState:",X)}}function ve(){try{s.texImage3D(...arguments)}catch(X){It("WebGLState:",X)}}function De(X){return y[X]!==void 0?y[X]:s.getParameter(X)}function et(X,Pe){y[X]!==Pe&&(s.pixelStorei(X,Pe),y[X]=Pe)}function ke(X){We.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),We.copy(X))}function Le(X){Ge.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ge.copy(X))}function tt(X,Pe){let ge=m.get(Pe);ge===void 0&&(ge=new WeakMap,m.set(Pe,ge));let Ie=ge.get(X);Ie===void 0&&(Ie=s.getUniformBlockIndex(Pe,X.name),ge.set(X,Ie))}function at(X,Pe){const Ie=m.get(Pe).get(X);f.get(Pe)!==Ie&&(s.uniformBlockBinding(Pe,Ie,X.__bindingPointIndex),f.set(Pe,Ie))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},H=null,L={},x={},M=new WeakMap,T=[],R=null,S=!1,_=null,N=null,B=null,C=null,P=null,I=null,F=null,E=new Nt(0,0,0),D=0,V=!1,j=null,$=null,te=null,q=null,Z=null,We.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ue,disable:Ae,bindFramebuffer:Re,drawBuffers:we,useProgram:ot,setBlending:pt,setMaterial:yt,setFlipSided:ut,setCullFace:St,setLineWidth:pe,setPolygonOffset:be,setScissorTest:st,activeTexture:vt,bindTexture:W,unbindTexture:Gt,compressedTexImage2D:Tt,compressedTexImage3D:k,texImage2D:me,texImage3D:ve,pixelStorei:et,getParameter:De,updateUBOMapping:tt,uniformBlockBinding:at,texStorage2D:Te,texStorage3D:Ne,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:ke,viewport:Le,reset:dt}}function Xb(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xt,v=new WeakMap,y=new Set;let x;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(k,w){return T?new OffscreenCanvas(k,w):yo("canvas")}function S(k,w,J){let oe=1;const he=Tt(k);if((he.width>J||he.height>J)&&(oe=J/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Te=Math.floor(oe*he.width),Ne=Math.floor(oe*he.height);x===void 0&&(x=R(Te,Ne));const me=w?R(Te,Ne):x;return me.width=Te,me.height=Ne,me.getContext("2d").drawImage(k,0,0,Te,Ne),ht("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Ne+")."),me}else return"data"in k&&ht("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),k;return k}function _(k){return k.generateMipmaps}function N(k){s.generateMipmap(k)}function B(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(k,w,J,oe,he,Te=!1){if(k!==null){if(s[k]!==void 0)return s[k];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ne;oe&&(Ne=e.get("EXT_texture_norm16"),Ne||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=w;if(w===s.RED&&(J===s.FLOAT&&(me=s.R32F),J===s.HALF_FLOAT&&(me=s.R16F),J===s.UNSIGNED_BYTE&&(me=s.R8),J===s.UNSIGNED_SHORT&&Ne&&(me=Ne.R16_EXT),J===s.SHORT&&Ne&&(me=Ne.R16_SNORM_EXT)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.R8UI),J===s.UNSIGNED_SHORT&&(me=s.R16UI),J===s.UNSIGNED_INT&&(me=s.R32UI),J===s.BYTE&&(me=s.R8I),J===s.SHORT&&(me=s.R16I),J===s.INT&&(me=s.R32I)),w===s.RG&&(J===s.FLOAT&&(me=s.RG32F),J===s.HALF_FLOAT&&(me=s.RG16F),J===s.UNSIGNED_BYTE&&(me=s.RG8),J===s.UNSIGNED_SHORT&&Ne&&(me=Ne.RG16_EXT),J===s.SHORT&&Ne&&(me=Ne.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RG8UI),J===s.UNSIGNED_SHORT&&(me=s.RG16UI),J===s.UNSIGNED_INT&&(me=s.RG32UI),J===s.BYTE&&(me=s.RG8I),J===s.SHORT&&(me=s.RG16I),J===s.INT&&(me=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RGB8UI),J===s.UNSIGNED_SHORT&&(me=s.RGB16UI),J===s.UNSIGNED_INT&&(me=s.RGB32UI),J===s.BYTE&&(me=s.RGB8I),J===s.SHORT&&(me=s.RGB16I),J===s.INT&&(me=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),J===s.UNSIGNED_INT&&(me=s.RGBA32UI),J===s.BYTE&&(me=s.RGBA8I),J===s.SHORT&&(me=s.RGBA16I),J===s.INT&&(me=s.RGBA32I)),w===s.RGB&&(J===s.UNSIGNED_SHORT&&Ne&&(me=Ne.RGB16_EXT),J===s.SHORT&&Ne&&(me=Ne.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),w===s.RGBA){const ve=Te?uc:Rt.getTransfer(he);J===s.FLOAT&&(me=s.RGBA32F),J===s.HALF_FLOAT&&(me=s.RGBA16F),J===s.UNSIGNED_BYTE&&(me=ve===zt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ne&&(me=Ne.RGBA16_EXT),J===s.SHORT&&Ne&&(me=Ne.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function P(k,w){let J;return k?w===null||w===Vi||w===vo?J=s.DEPTH24_STENCIL8:w===Oi?J=s.DEPTH32F_STENCIL8:w===xo&&(J=s.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===vo?J=s.DEPTH_COMPONENT24:w===Oi?J=s.DEPTH_COMPONENT32F:w===xo&&(J=s.DEPTH_COMPONENT16),J}function I(k,w){return _(k)===!0||k.isFramebufferTexture&&k.minFilter!==Mn&&k.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?w.mipmaps.length:1}function F(k){const w=k.target;w.removeEventListener("dispose",F),D(w),w.isVideoTexture&&v.delete(w),w.isHTMLTexture&&y.delete(w)}function E(k){const w=k.target;w.removeEventListener("dispose",E),j(w)}function D(k){const w=r.get(k);if(w.__webglInit===void 0)return;const J=k.source,oe=M.get(J);if(oe){const he=oe[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&V(k),Object.keys(oe).length===0&&M.delete(J)}r.remove(k)}function V(k){const w=r.get(k);s.deleteTexture(w.__webglTexture);const J=k.source,oe=M.get(J);delete oe[w.__cacheKey],u.memory.textures--}function j(k){const w=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(w.__webglFramebuffer[oe]))for(let he=0;he<w.__webglFramebuffer[oe].length;he++)s.deleteFramebuffer(w.__webglFramebuffer[oe][he]);else s.deleteFramebuffer(w.__webglFramebuffer[oe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[oe])}else{if(Array.isArray(w.__webglFramebuffer))for(let oe=0;oe<w.__webglFramebuffer.length;oe++)s.deleteFramebuffer(w.__webglFramebuffer[oe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let oe=0;oe<w.__webglColorRenderbuffer.length;oe++)w.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[oe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=k.textures;for(let oe=0,he=J.length;oe<he;oe++){const Te=r.get(J[oe]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),u.memory.textures--),r.remove(J[oe])}r.remove(k)}let $=0;function te(){$=0}function q(){return $}function Z(k){$=k}function fe(){const k=$;return k>=o.maxTextures&&ht("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,k}function Q(k){const w=[];return w.push(k.wrapS),w.push(k.wrapT),w.push(k.wrapR||0),w.push(k.magFilter),w.push(k.minFilter),w.push(k.anisotropy),w.push(k.internalFormat),w.push(k.format),w.push(k.type),w.push(k.generateMipmaps),w.push(k.premultiplyAlpha),w.push(k.flipY),w.push(k.unpackAlignment),w.push(k.colorSpace),w.join()}function O(k,w){const J=r.get(k);if(k.isVideoTexture&&W(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&J.__version!==k.version){const oe=k.image;if(oe===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(J,k,w);return}}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function z(k,w){const J=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){Ae(J,k,w);return}else k.isExternalTexture&&(J.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function H(k,w){const J=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&J.__version!==k.version){Ae(J,k,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function L(k,w){const J=r.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&J.__version!==k.version){Re(J,k,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const se={[Kd]:s.REPEAT,[sr]:s.CLAMP_TO_EDGE,[$d]:s.MIRRORED_REPEAT},Se={[Mn]:s.NEAREST,[e1]:s.NEAREST_MIPMAP_NEAREST,[Rl]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[rd]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},We={[r1]:s.NEVER,[c1]:s.ALWAYS,[s1]:s.LESS,[Gf]:s.LEQUAL,[a1]:s.EQUAL,[Wf]:s.GEQUAL,[o1]:s.GREATER,[l1]:s.NOTEQUAL};function Ge(k,w){if(w.type===Oi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===rd||w.magFilter===Rl||w.magFilter===os||w.minFilter===In||w.minFilter===rd||w.minFilter===Rl||w.minFilter===os)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,se[w.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,se[w.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,se[w.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,Se[w.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,We[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==Rl&&w.minFilter!==os||w.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(k,w){let J=!1;k.__webglInit===void 0&&(k.__webglInit=!0,w.addEventListener("dispose",F));const oe=w.source;let he=M.get(oe);he===void 0&&(he={},M.set(oe,he));const Te=Q(w);if(Te!==k.__cacheKey){he[Te]===void 0&&(he[Te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),he[Te].usedTimes++;const Ne=he[k.__cacheKey];Ne!==void 0&&(he[k.__cacheKey].usedTimes--,Ne.usedTimes===0&&V(w)),k.__cacheKey=Te,k.__webglTexture=he[Te].texture}return J}function ae(k,w,J){return Math.floor(Math.floor(k/J)/w)}function ue(k,w,J,oe){const Te=k.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,J,oe,w.data);else{Te.sort((et,ke)=>et.start-ke.start);let Ne=0;for(let et=1;et<Te.length;et++){const ke=Te[Ne],Le=Te[et],tt=ke.start+ke.count,at=ae(Le.start,w.width,4),dt=ae(ke.start,w.width,4);Le.start<=tt+1&&at===dt&&ae(Le.start+Le.count-1,w.width,4)===at?ke.count=Math.max(ke.count,Le.start+Le.count-ke.start):(++Ne,Te[Ne]=Le)}Te.length=Ne+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let et=0,ke=Te.length;et<ke;et++){const Le=Te[et],tt=Math.floor(Le.start/4),at=Math.ceil(Le.count/4),dt=tt%w.width,X=Math.floor(tt/w.width),Pe=at,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,dt,X,Pe,ge,J,oe,w.data)}k.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function Ae(k,w,J){let oe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(oe=s.TEXTURE_3D);const he=Oe(k,w),Te=w.source;t.bindTexture(oe,k.__webglTexture,s.TEXTURE0+J);const Ne=r.get(Te);if(Te.version!==Ne.__version||he===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ge=Rt.getPrimaries(Rt.workingColorSpace),Ie=w.colorSpace===Ir?null:Rt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Ir||ge===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ve=S(w.image,!1,o.maxTextureSize);ve=Gt(w,ve);const De=l.convert(w.format,w.colorSpace),et=l.convert(w.type);let ke=C(w.internalFormat,De,et,w.normalized,w.colorSpace,w.isVideoTexture);Ge(oe,w);let Le;const tt=w.mipmaps,at=w.isVideoTexture!==!0,dt=Ne.__version===void 0||he===!0,X=Te.dataReady,Pe=I(w,ve);if(w.isDepthTexture)ke=P(w.format===ls,w.type),dt&&(at?t.texStorage2D(s.TEXTURE_2D,1,ke,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,ke,ve.width,ve.height,0,De,et,null));else if(w.isDataTexture)if(tt.length>0){at&&dt&&t.texStorage2D(s.TEXTURE_2D,Pe,ke,tt[0].width,tt[0].height);for(let ge=0,Ie=tt.length;ge<Ie;ge++)Le=tt[ge],at?X&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,De,et,Le.data):t.texImage2D(s.TEXTURE_2D,ge,ke,Le.width,Le.height,0,De,et,Le.data);w.generateMipmaps=!1}else at?(dt&&t.texStorage2D(s.TEXTURE_2D,Pe,ke,ve.width,ve.height),X&&ue(w,ve,De,et)):t.texImage2D(s.TEXTURE_2D,0,ke,ve.width,ve.height,0,De,et,ve.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ke,tt[0].width,tt[0].height,ve.depth);for(let ge=0,Ie=tt.length;ge<Ie;ge++)if(Le=tt[ge],w.format!==Ai)if(De!==null)if(at){if(X)if(w.layerUpdates.size>0){const Ve=b0(Le.width,Le.height,w.format,w.type);for(const _e of w.layerUpdates){const it=Le.data.subarray(_e*Ve/Le.data.BYTES_PER_ELEMENT,(_e+1)*Ve/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,_e,Le.width,Le.height,1,De,it)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ve.depth,De,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,ke,Le.width,Le.height,ve.depth,0,Le.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,ve.depth,De,et,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,ke,Le.width,Le.height,ve.depth,0,De,et,Le.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{at&&dt&&t.texStorage2D(s.TEXTURE_2D,Pe,ke,tt[0].width,tt[0].height);for(let ge=0,Ie=tt.length;ge<Ie;ge++)Le=tt[ge],w.format!==Ai?De!==null?at?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,ke,Le.width,Le.height,0,Le.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?X&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Le.width,Le.height,De,et,Le.data):t.texImage2D(s.TEXTURE_2D,ge,ke,Le.width,Le.height,0,De,et,Le.data)}else if(w.isDataArrayTexture)if(at){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,ke,ve.width,ve.height,ve.depth),X)if(w.layerUpdates.size>0){const ge=b0(ve.width,ve.height,w.format,w.type);for(const Ie of w.layerUpdates){const Ve=ve.data.subarray(Ie*ge/ve.data.BYTES_PER_ELEMENT,(Ie+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ie,ve.width,ve.height,1,De,et,Ve)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,De,et,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,ve.width,ve.height,ve.depth,0,De,et,ve.data);else if(w.isData3DTexture)at?(dt&&t.texStorage3D(s.TEXTURE_3D,Pe,ke,ve.width,ve.height,ve.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,De,et,ve.data)):t.texImage3D(s.TEXTURE_3D,0,ke,ve.width,ve.height,ve.depth,0,De,et,ve.data);else if(w.isFramebufferTexture){if(dt)if(at)t.texStorage2D(s.TEXTURE_2D,Pe,ke,ve.width,ve.height);else{let ge=ve.width,Ie=ve.height;for(let Ve=0;Ve<Pe;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,ke,ge,Ie,0,De,et,null),ge>>=1,Ie>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),y.add(w),ge.onpaint=Ie=>{const Ve=Ie.changedElements;for(const _e of y)Ve.includes(_e.image)&&(_e.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ve);else{const Ve=s.RGBA,_e=s.RGBA,it=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,_e,it,ve)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(tt.length>0){if(at&&dt){const ge=Tt(tt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,ke,ge.width,ge.height)}for(let ge=0,Ie=tt.length;ge<Ie;ge++)Le=tt[ge],at?X&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,De,et,Le):t.texImage2D(s.TEXTURE_2D,ge,ke,De,et,Le);w.generateMipmaps=!1}else if(at){if(dt){const ge=Tt(ve);t.texStorage2D(s.TEXTURE_2D,Pe,ke,ge.width,ge.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,et,ve)}else t.texImage2D(s.TEXTURE_2D,0,ke,De,et,ve);_(w)&&N(oe),Ne.__version=Te.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function Re(k,w,J){if(w.image.length!==6)return;const oe=Oe(k,w),he=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+J);const Te=r.get(he);if(he.version!==Te.__version||oe===!0){t.activeTexture(s.TEXTURE0+J);const Ne=Rt.getPrimaries(Rt.workingColorSpace),me=w.colorSpace===Ir?null:Rt.getPrimaries(w.colorSpace),ve=w.colorSpace===Ir||Ne===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let _e=0;_e<6;_e++)!De&&!et?ke[_e]=S(w.image[_e],!0,o.maxCubemapSize):ke[_e]=et?w.image[_e].image:w.image[_e],ke[_e]=Gt(w,ke[_e]);const Le=ke[0],tt=l.convert(w.format,w.colorSpace),at=l.convert(w.type),dt=C(w.internalFormat,tt,at,w.normalized,w.colorSpace),X=w.isVideoTexture!==!0,Pe=Te.__version===void 0||oe===!0,ge=he.dataReady;let Ie=I(w,Le);Ge(s.TEXTURE_CUBE_MAP,w);let Ve;if(De){X&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,dt,Le.width,Le.height);for(let _e=0;_e<6;_e++){Ve=ke[_e].mipmaps;for(let it=0;it<Ve.length;it++){const Je=Ve[it];w.format!==Ai?tt!==null?X?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it,0,0,Je.width,Je.height,tt,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it,dt,Je.width,Je.height,0,Je.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it,0,0,Je.width,Je.height,tt,at,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it,dt,Je.width,Je.height,0,tt,at,Je.data)}}}else{if(Ve=w.mipmaps,X&&Pe){Ve.length>0&&Ie++;const _e=Tt(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,dt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(et){X?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ke[_e].width,ke[_e].height,tt,at,ke[_e].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,dt,ke[_e].width,ke[_e].height,0,tt,at,ke[_e].data);for(let it=0;it<Ve.length;it++){const kt=Ve[it].image[_e].image;X?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it+1,0,0,kt.width,kt.height,tt,at,kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it+1,dt,kt.width,kt.height,0,tt,at,kt.data)}}else{X?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,tt,at,ke[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,dt,tt,at,ke[_e]);for(let it=0;it<Ve.length;it++){const Je=Ve[it];X?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it+1,0,0,tt,at,Je.image[_e]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,it+1,dt,tt,at,Je.image[_e])}}}_(w)&&N(s.TEXTURE_CUBE_MAP),Te.__version=he.version,w.onUpdate&&w.onUpdate(w)}k.__version=w.version}function we(k,w,J,oe,he,Te){const Ne=l.convert(J.format,J.colorSpace),me=l.convert(J.type),ve=C(J.internalFormat,Ne,me,J.normalized,J.colorSpace),De=r.get(w),et=r.get(J);if(et.__renderTarget=w,!De.__hasExternalTextures){const ke=Math.max(1,w.width>>Te),Le=Math.max(1,w.height>>Te);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Te,ve,ke,Le,w.depth,0,Ne,me,null):t.texImage2D(he,Te,ve,ke,Le,0,Ne,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),vt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,he,et.__webglTexture,0,st(w)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,he,et.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(k,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,k),w.depthBuffer){const oe=w.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,Te=P(w.stencilBuffer,he),Ne=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;vt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st(w),Te,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,st(w),Te,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Te,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,k)}else{const oe=w.textures;for(let he=0;he<oe.length;he++){const Te=oe[he],Ne=l.convert(Te.format,Te.colorSpace),me=l.convert(Te.type),ve=C(Te.internalFormat,Ne,me,Te.normalized,Te.colorSpace);vt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st(w),ve,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,st(w),ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(k,w,J){const oe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(w.depthTexture);if(he.__renderTarget=w,(!he.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe){if(he.__webglInit===void 0&&(he.__webglInit=!0,w.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,w.depthTexture);const De=l.convert(w.depthTexture.format),et=l.convert(w.depthTexture.type);let ke;w.depthTexture.format===lr?ke=s.DEPTH_COMPONENT24:w.depthTexture.format===ls&&(ke=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,ke,w.width,w.height,0,De,et,null)}}else O(w.depthTexture,0);const Te=he.__webglTexture,Ne=st(w),me=oe?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,ve=w.depthTexture.format===ls?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===lr)vt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Te,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Te,0);else if(w.depthTexture.format===ls)vt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Te,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(k){const w=r.get(k),J=k.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==k.depthTexture){const oe=k.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),oe){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=oe}if(k.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let oe=0;oe<6;oe++)Et(w.__webglFramebuffer[oe],k,oe);else{const oe=k.texture.mipmaps;oe&&oe.length>0?Et(w.__webglFramebuffer[0],k,0):Et(w.__webglFramebuffer,k,0)}else if(J){w.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[oe]),w.__webglDepthbuffer[oe]===void 0)w.__webglDepthbuffer[oe]=s.createRenderbuffer(),ot(w.__webglDepthbuffer[oe],k,!1);else{const he=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Te)}}else{const oe=k.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ot(w.__webglDepthbuffer,k,!1);else{const he=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(k,w,J){const oe=r.get(k);w!==void 0&&we(oe.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ue(k)}function yt(k){const w=k.texture,J=r.get(k),oe=r.get(w);k.addEventListener("dispose",E);const he=k.textures,Te=k.isWebGLCubeRenderTarget===!0,Ne=he.length>1;if(Ne||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=w.version,u.memory.textures++),Te){J.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[me]=[];for(let ve=0;ve<w.mipmaps.length;ve++)J.__webglFramebuffer[me][ve]=s.createFramebuffer()}else J.__webglFramebuffer[me]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)J.__webglFramebuffer[me]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let me=0,ve=he.length;me<ve;me++){const De=r.get(he[me]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(k.samples>0&&vt(k)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const ve=he[me];J.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[me]);const De=l.convert(ve.format,ve.colorSpace),et=l.convert(ve.type),ke=C(ve.internalFormat,De,et,ve.normalized,ve.colorSpace,k.isXRRenderTarget===!0),Le=st(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ke,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,J.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(J.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)we(J.__webglFramebuffer[me][ve],k,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else we(J.__webglFramebuffer[me],k,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(w)&&N(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let me=0,ve=he.length;me<ve;me++){const De=he[me],et=r.get(De);let ke=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ke=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ke,et.__webglTexture),Ge(ke,De),we(J.__webglFramebuffer,k,De,s.COLOR_ATTACHMENT0+me,ke,0),_(De)&&N(ke)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(me=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),Ge(me,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)we(J.__webglFramebuffer[ve],k,w,s.COLOR_ATTACHMENT0,me,ve);else we(J.__webglFramebuffer,k,w,s.COLOR_ATTACHMENT0,me,0);_(w)&&N(me),t.unbindTexture()}k.depthBuffer&&Ue(k)}function ut(k){const w=k.textures;for(let J=0,oe=w.length;J<oe;J++){const he=w[J];if(_(he)){const Te=B(k),Ne=r.get(he).__webglTexture;t.bindTexture(Te,Ne),N(Te),t.unbindTexture()}}}const St=[],pe=[];function be(k){if(k.samples>0){if(vt(k)===!1){const w=k.textures,J=k.width,oe=k.height;let he=s.COLOR_BUFFER_BIT;const Te=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(k),me=w.length>1;if(me)for(let De=0;De<w.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const ve=k.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let De=0;De<w.length;De++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const et=r.get(w[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,J,oe,0,0,J,oe,he,s.NEAREST),f===!0&&(St.length=0,pe.length=0,St.push(s.COLOR_ATTACHMENT0+De),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(St.push(Te),pe.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let De=0;De<w.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const et=r.get(w[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&f){const w=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function st(k){return Math.min(o.maxSamples,k.samples)}function vt(k){const w=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(k){const w=u.render.frame;v.get(k)!==w&&(v.set(k,w),k.update())}function Gt(k,w){const J=k.colorSpace,oe=k.format,he=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||J!==cc&&J!==Ir&&(Rt.getTransfer(J)===zt?(oe!==Ai||he!==ti)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",J)),w}function Tt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(m.width=k.naturalWidth||k.width,m.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(m.width=k.displayWidth,m.height=k.displayHeight):(m.width=k.width,m.height=k.height),m}this.allocateTextureUnit=fe,this.resetTextureUnits=te,this.getTextureUnits=q,this.setTextureUnits=Z,this.setTexture2D=O,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=L,this.rebindTextures=pt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=we,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Yb(s,e){function t(r,o=Ir){let l;const u=Rt.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===Of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ng)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Pg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Rg)return s.BYTE;if(r===Lg)return s.SHORT;if(r===xo)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===Gi)return s.HALF_FLOAT;if(r===Ig)return s.ALPHA;if(r===Dg)return s.RGB;if(r===Ai)return s.RGBA;if(r===lr)return s.DEPTH_COMPONENT;if(r===ls)return s.DEPTH_STENCIL;if(r===kg)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===ds)return s.RG;if(r===Hf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===tc||r===nc||r===ic||r===rc)if(u===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===tc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===tc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Jd||r===Qd||r===ef)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ef)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tf||r===nf||r===rf||r===sf||r===af||r===oc||r===of)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===tf||r===nf)return u===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===rf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===sf)return l.COMPRESSED_R11_EAC;if(r===af)return l.COMPRESSED_SIGNED_R11_EAC;if(r===oc)return l.COMPRESSED_RG11_EAC;if(r===of)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===lf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===df)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ff)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_f)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sf)return u===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mf||r===wf||r===Ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Mf)return u===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bf||r===Tf||r===lc||r===Af)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===bf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Af)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$b=`
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

}`;class Zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new qg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:Kb,fragmentShader:$b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zn(new gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jb extends ps{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,m=null,v=null,y=null,x=null,M=null,T=null;const R=typeof XRWebGLBinding<"u",S=new Zb,_={},N=t.getContextAttributes();let B=null,C=null;const P=[],I=[],F=new xt;let E=null,D=null;const V=new fi;V.viewport=new en;const j=new fi;j.viewport=new en;const $=[V,j],te=new rS;let q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=P[ae];return ue===void 0&&(ue=new hd,P[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=P[ae];return ue===void 0&&(ue=new hd,P[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=P[ae];return ue===void 0&&(ue=new hd,P[ae]=ue),ue.getHandSpace()};function fe(ae){const ue=I.indexOf(ae.inputSource);if(ue===-1)return;const Ae=P[ue];Ae!==void 0&&(Ae.update(ae.inputSource,ae.frame,m||u),Ae.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Q(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",O);for(let ae=0;ae<P.length;ae++){const ue=I[ae];ue!==null&&(I[ae]=null,P[ae].disconnect(ue))}q=null,Z=null,S.reset();for(const ae in _)delete _[ae];if(e.setRenderTarget(B),M=null,x=null,y=null,o=null,C=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),D!==null){const ae=D.camera;ae.fov=D.fov,ae.zoom=D.zoom,ae.updateProjectionMatrix(),D=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ae){m=ae},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return y===null&&R&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(B=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",O),N.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Re=null,we=null;N.depth&&(we=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=N.stencil?ls:lr,Re=N.stencil?vo:Vi);const ot={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};y=this.getBinding(),x=y.createProjectionLayer(ot),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new Ci(x.textureWidth,x.textureHeight,{format:Ai,type:ti,depthTexture:new So(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Ae={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Ae),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Ci(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),m=null,u=await o.requestReferenceSpace(d),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function O(ae){for(let ue=0;ue<ae.removed.length;ue++){const Ae=ae.removed[ue],Re=I.indexOf(Ae);Re>=0&&(I[Re]=null,P[Re].disconnect(Ae))}for(let ue=0;ue<ae.added.length;ue++){const Ae=ae.added[ue];let Re=I.indexOf(Ae);if(Re===-1){for(let ot=0;ot<P.length;ot++)if(ot>=I.length){I.push(Ae),Re=ot;break}else if(I[ot]===null){I[ot]=Ae,Re=ot;break}if(Re===-1)break}const we=P[Re];we&&we.connect(Ae)}}const z=new ne,H=new ne;function L(ae,ue,Ae){z.setFromMatrixPosition(ue.matrixWorld),H.setFromMatrixPosition(Ae.matrixWorld);const Re=z.distanceTo(H),we=ue.projectionMatrix.elements,ot=Ae.projectionMatrix.elements,Et=we[14]/(we[10]-1),Ue=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],yt=(we[9]-1)/we[5],ut=(we[8]-1)/we[0],St=(ot[8]+1)/ot[0],pe=Et*ut,be=Et*St,st=Re/(-ut+St),vt=st*-ut;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(vt),ae.translateZ(st),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),we[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const W=Et+st,Gt=Ue+st,Tt=pe-vt,k=be+(Re-vt),w=pt*Ue/Gt*W,J=yt*Ue/Gt*W;ae.projectionMatrix.makePerspective(Tt,k,w,J,W,Gt),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function se(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ue=ae.near,Ae=ae.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),te.near=j.near=V.near=ue,te.far=j.far=V.far=Ae,(q!==te.near||Z!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),q=te.near,Z=te.far),te.layers.mask=ae.layers.mask|6,V.layers.mask=te.layers.mask&-5,j.layers.mask=te.layers.mask&-3;const Re=ae.parent,we=te.cameras;se(te,Re);for(let ot=0;ot<we.length;ot++)se(we[ot],Re);we.length===2?L(te,V,j):te.projectionMatrix.copy(V.projectionMatrix),D===null&&ae.isPerspectiveCamera&&(D={camera:ae,fov:ae.fov,zoom:ae.zoom}),Se(ae,te,Re)};function Se(ae,ue,Ae){Ae===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(Ae.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Rf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&M===null))return f},this.setFoveation=function(ae){f=ae,x!==null&&(x.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(te)},this.getCameraTexture=function(ae){return _[ae]};let We=null;function Ge(ae,ue){if(v=ue.getViewerPose(m||u),T=ue,v!==null){const Ae=v.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Re=!1;Ae.length!==te.cameras.length&&(te.cameras.length=0,Re=!0);for(let Ue=0;Ue<Ae.length;Ue++){const pt=Ae[Ue];let yt=null;if(M!==null)yt=M.getViewport(pt);else{const St=y.getViewSubImage(x,pt);yt=St.viewport,Ue===0&&(e.setRenderTargetTextures(C,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(C))}let ut=$[Ue];ut===void 0&&(ut=new fi,ut.layers.enable(Ue),ut.viewport=new en,$[Ue]=ut),ut.matrix.fromArray(pt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(pt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(yt.x,yt.y,yt.width,yt.height),Ue===0&&(te.matrix.copy(ut.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Re===!0&&te.cameras.push(ut)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){y=r.getBinding();const Ue=y.getDepthInformation(Ae[0]);Ue&&Ue.isValid&&Ue.texture&&S.init(Ue,o.renderState)}if(we&&we.includes("camera-access")&&R){e.state.unbindTexture(),y=r.getBinding();for(let Ue=0;Ue<Ae.length;Ue++){const pt=Ae[Ue].camera;if(pt){let yt=_[pt];yt||(yt=new qg,_[pt]=yt);const ut=y.getCameraImage(pt);yt.sourceTexture=ut}}}}for(let Ae=0;Ae<P.length;Ae++){const Re=I[Ae],we=P[Ae];Re!==null&&we!==void 0&&we.update(Re,ue,m||u)}We&&We(ae,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Oe=new $g;Oe.setAnimationLoop(Ge),this.setAnimationLoop=function(ae){We=ae},this.dispose=function(){}}}const Qb=new $t,ix=new gt;ix.set(-1,0,0,0,1,0,0,0,1);function e2(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Xg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,N,B,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(S,_):_.isMeshLambertMaterial?(l(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(S,_),y(S,_)):_.isMeshPhongMaterial?(l(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(S,_),x(S,_),_.isMeshPhysicalMaterial&&M(S,_,C)):_.isMeshMatcapMaterial?(l(S,_),T(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),R(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?f(S,_,N,B):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Dn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Dn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),B=N.envMap,C=N.envMapRotation;B&&(S.envMap.value=B,S.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(ix),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function f(S,_,N,B){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=B*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Dn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function t2(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,P){const I=P.program;r.uniformBlockBinding(C,I)}function m(C,P){let I=o[C.id];I===void 0&&(S(C),I=v(C),o[C.id]=I,C.addEventListener("dispose",N));const F=P.program;r.updateUBOMapping(C,F);const E=e.render.frame;l[C.id]!==E&&(x(C),l[C.id]=E)}function v(C){const P=y();C.__bindingPointIndex=P;const I=s.createBuffer(),F=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,F,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,I),I}function y(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const P=o[C.id],I=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,D=I.length;E<D;E++){const V=I[E];if(Array.isArray(V))for(let j=0,$=V.length;j<$;j++)M(V[j],E,j,F);else M(V,E,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,P,I,F){if(R(C,P,I,F)===!0){const E=C.__offset,D=C.value;if(Array.isArray(D)){let V=0;for(let j=0;j<D.length;j++){const $=D[j],te=_($);T($,C.__data,V),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function T(C,P,I){typeof C=="number"||typeof C=="boolean"?P[0]=C:C.isMatrix3?(P[0]=C.elements[0],P[1]=C.elements[1],P[2]=C.elements[2],P[3]=0,P[4]=C.elements[3],P[5]=C.elements[4],P[6]=C.elements[5],P[7]=0,P[8]=C.elements[6],P[9]=C.elements[7],P[10]=C.elements[8],P[11]=0):ArrayBuffer.isView(C)?P.set(new C.constructor(C.buffer,C.byteOffset,P.length)):C.toArray(P,I)}function R(C,P,I,F){const E=C.value,D=P+"_"+I;if(F[D]===void 0)return typeof E=="number"||typeof E=="boolean"?F[D]=E:ArrayBuffer.isView(E)?F[D]=E.slice():F[D]=E.clone(),!0;{const V=F[D];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return F[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function S(C){const P=C.uniforms;let I=0;const F=16;for(let D=0,V=P.length;D<V;D++){const j=Array.isArray(P[D])?P[D]:[P[D]];for(let $=0,te=j.length;$<te;$++){const q=j[$],Z=Array.isArray(q.value)?q.value:[q.value];for(let fe=0,Q=Z.length;fe<Q;fe++){const O=Z[fe],z=_(O),H=I%F,L=H%z.boundary,se=H+L;I+=L,se!==0&&F-se<z.storage&&(I+=F-se),q.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=I,I+=z.storage}}}const E=I%F;return E>0&&(I+=F-E),C.__size=I,C.__cache={},this}function _(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",C),P}function N(C){const P=C.target;P.removeEventListener("dispose",N);const I=u.indexOf(P.__bindingPointIndex);u.splice(I,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function B(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:f,update:m,dispose:B}}const n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function i2(){return Di===null&&(Di=new O1(n2,16,16,ds,Gi),Di.name="DFG_LUT",Di.minFilter=In,Di.magFilter=In,Di.wrapS=sr,Di.wrapT=sr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class r2{constructor(e={}){const{canvas:t=d1(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ti}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const R=M,S=new Set([Vf,Hf,zf]),_=new Set([ti,Vi,xo,vo,Of,Bf]),N=new Uint32Array(4),B=new Int32Array(4),C=new ne;let P=null,I=null;const F=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let j=!1,$=null,te=null,q=null,Z=null;this._outputColorSpace=ei;let fe=0,Q=0,O=null,z=-1,H=null;const L=new en,se=new en;let Se=null;const We=new Nt(0);let Ge=0,Oe=t.width,ae=t.height,ue=1,Ae=null,Re=null;const we=new en(0,0,Oe,ae),ot=new en(0,0,Oe,ae);let Et=!1;const Ue=new Yf;let pt=!1,yt=!1;const ut=new $t,St=new ne,pe=new en,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function vt(){return O===null?ue:1}let W=r;function Gt(A,Y){return t.getContext(A,Y)}let Tt,k,w,J,oe,he,Te,Ne,me,ve,De,et,ke,Le,tt,at,dt,X,Pe,ge,Ie,Ve,_e;try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",_n,!1),W===null){const Y="webgl2";if(W=Gt(Y,A),W===null)throw Gt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(A){throw t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),It("WebGLRenderer: "+A.message),A}function it(){Tt=new iE(W),Tt.init(),Ie=new Yb(W,Tt),k=new Xw(W,Tt,e,Ie),w=new qb(W,Tt),k.reversedDepthBuffer&&x&&w.buffers.depth.setReversed(!0),te=W.createFramebuffer(),q=W.createFramebuffer(),Z=W.createFramebuffer(),J=new aE(W),oe=new Pb,he=new Xb(W,Tt,w,oe,k,Ie,J),Te=new nE(V),Ne=new lS(W),Ve=new jw(W,Ne),me=new rE(W,Ne,J,Ve),ve=new lE(W,me,Ne,Ve,J),X=new oE(W,k,he),tt=new Yw(oe),De=new Nb(V,Te,Tt,k,Ve,tt),et=new e2(V,oe),ke=new Db,Le=new zb(Tt),dt=new Ww(V,Te,w,ve,T,f),at=new jb(V,ve,k),_e=new t2(W,J,k,w),Pe=new qw(W,Tt,J),ge=new sE(W,Tt,J),J.programs=De.programs,V.capabilities=k,V.extensions=Tt,V.properties=oe,V.renderLists=ke,V.shadowMap=at,V.state=w,V.info=J}R!==ti&&(D=new uE(R,t.width,t.height,d,o,l));const Je=new Jb(V,W);this.xr=Je,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(Oe,ae,!1))},this.getSize=function(A){return A.set(Oe,ae)},this.setSize=function(A,Y,ce=!0){if(Je.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=A,ae=Y,t.width=Math.floor(A*ue),t.height=Math.floor(Y*ue),ce===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(Oe*ue,ae*ue).floor()},this.setDrawingBufferSize=function(A,Y,ce){Oe=A,ae=Y,ue=ce,t.width=Math.floor(A*ce),t.height=Math.floor(Y*ce),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===ti){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,Y,ce,ie){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,Y,ce,ie),w.viewport(L.copy(we).multiplyScalar(ue).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,Y,ce,ie){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,Y,ce,ie),w.scissor(se.copy(ot).multiplyScalar(ue).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){w.setScissorTest(Et=A)},this.setOpaqueSort=function(A){Ae=A},this.setTransparentSort=function(A){Re=A},this.getClearColor=function(A){return A.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,ce=!0){let ie=0;if(A){let ee=!1;if(O!==null){const ze=O.texture.format;ee=S.has(ze)}if(ee){const ze=O.texture.type,Fe=_.has(ze),Be=dt.getClearColor(),Ke=dt.getClearAlpha(),nt=Be.r,mt=Be.g,_t=Be.b;Fe?(N[0]=nt,N[1]=mt,N[2]=_t,N[3]=Ke,W.clearBufferuiv(W.COLOR,0,N)):(B[0]=nt,B[1]=mt,B[2]=_t,B[3]=Ke,W.clearBufferiv(W.COLOR,0,B))}else ie|=W.COLOR_BUFFER_BIT}Y&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),dt.dispose(),ke.dispose(),Le.dispose(),oe.dispose(),Te.dispose(),ve.dispose(),Ve.dispose(),_e.dispose(),De.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",bo),Je.removeEventListener("sessionend",To),kn.stop()};function kt(A){A.preventDefault(),dc("WebGLRenderer: Context Lost."),j=!0}function Pt(){dc("WebGLRenderer: Context Restored."),j=!1;const A=J.autoReset,Y=at.enabled,ce=at.autoUpdate,ie=at.needsUpdate,ee=at.type;it(),J.autoReset=A,at.enabled=Y,at.autoUpdate=ce,at.needsUpdate=ie,at.type=ee}function _n(A){It("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ii(A){const Y=A.target;Y.removeEventListener("dispose",ii),Or(Y)}function Or(A){ms(A),oe.remove(A)}function ms(A){const Y=oe.get(A).programs;Y!==void 0&&(Y.forEach(function(ce){De.releaseProgram(ce)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,ce,ie,ee,ze){Y===null&&(Y=be);const Fe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Be=Zt(A,Y,ce,ie,ee);w.setMaterial(ie,Fe);let Ke=ce.index,nt=1;if(ie.wireframe===!0){if(Ke=me.getWireframeAttribute(ce),Ke===void 0)return;nt=2}const mt=ce.drawRange,_t=ce.attributes.position;let Xe=mt.start*nt,At=(mt.start+mt.count)*nt;ze!==null&&(Xe=Math.max(Xe,ze.start*nt),At=Math.min(At,(ze.start+ze.count)*nt)),Ke!==null?(Xe=Math.max(Xe,0),At=Math.min(At,Ke.count)):_t!=null&&(Xe=Math.max(Xe,0),At=Math.min(At,_t.count));const tn=At-Xe;if(tn<0||tn===1/0)return;Ve.setup(ee,ie,Be,ce,Ke);let Wt,Ot=Pe;if(Ke!==null&&(Wt=Ne.get(Ke),Ot=ge,Ot.setIndex(Wt)),ee.isMesh)ie.wireframe===!0?(w.setLineWidth(ie.wireframeLinewidth*vt()),Ot.setMode(W.LINES)):Ot.setMode(W.TRIANGLES);else if(ee.isLine){let cn=ie.linewidth;cn===void 0&&(cn=1),w.setLineWidth(cn*vt()),ee.isLineSegments?Ot.setMode(W.LINES):ee.isLineLoop?Ot.setMode(W.LINE_LOOP):Ot.setMode(W.LINE_STRIP)}else ee.isPoints?Ot.setMode(W.POINTS):ee.isSprite&&Ot.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const cn=ee._multiDrawStarts,je=ee._multiDrawCounts,rn=ee._multiDrawCount,Ct=Ke?Ne.get(Ke).bytesPerElement:1,bn=oe.get(ie).currentProgram.getUniforms();for(let Mt=0;Mt<rn;Mt++)bn.setValue(W,"_gl_DrawID",Mt),Ot.render(cn[Mt]/Ct,je[Mt])}else if(ee.isInstancedMesh)Ot.renderInstances(Xe,tn,ee.count);else if(ce.isInstancedBufferGeometry){const cn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,je=Math.min(ce.instanceCount,cn);Ot.renderInstances(Xe,tn,je)}else Ot.render(Xe,tn)};function Br(A,Y,ce,ie){$!==null&&A.isNodeMaterial&&$.setObject(ie,A),pt===!0&&tt.setState(A,ce,!1),A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=Dn,A.needsUpdate=!0,Vr(A,Y,ie),A.side=cs,A.needsUpdate=!0,Vr(A,Y,ie),A.side=Ui):Vr(A,Y,ie)}this.compile=function(A,Y,ce=null){ce===null&&(ce=A),$!==null&&$.renderStart(A,Y,ce),I=Le.get(ce),I.init(Y),E.push(I),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(I.pushLight(ee),ee.castShadow&&I.pushShadow(ee))}),A!==ce&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(I.pushLight(ee),ee.castShadow&&I.pushShadow(ee))}),I.setupLights(),$!==null&&$.updateLights(I.state.lightsArray),yt=this.localClippingEnabled,pt=tt.init(this.clippingPlanes,yt),pt===!0&&tt.setGlobalState(this.clippingPlanes,Y),$!==null&&at.render(I.state.shadowsArray,ce,Y);const ie=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const ze=ee.material;if(ze)if(Array.isArray(ze))for(let Fe=0;Fe<ze.length;Fe++){const Be=ze[Fe];Br(Be,ce,Y,ee),ie.add(Be)}else Br(ze,ce,Y,ee),ie.add(ze)}),I=E.pop(),$!==null&&$.renderEnd(),ie},this.compileAsync=function(A,Y,ce=null){const ie=this.compile(A,Y,ce);return new Promise(ee=>{function ze(){if(ie.forEach(function(Fe){const Ke=oe.get(Fe).currentProgram;(Ke===void 0||Ke.isReady())&&ie.delete(Fe)}),ie.size===0){ee(A);return}setTimeout(ze,10)}Tt.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let zr=null;function _c(A){zr&&zr(A)}function bo(){kn.stop()}function To(){kn.start()}const kn=new $g;kn.setAnimationLoop(_c),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){zr=A,Je.setAnimationLoop(A),A===null?kn.stop():kn.start()},Je.addEventListener("sessionstart",bo),Je.addEventListener("sessionend",To),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;$!==null&&$.renderStart(A,Y);const ce=Je.enabled===!0&&Je.isPresenting===!0,ie=D!==null&&(O===null||ce)&&D.begin(V,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(Y),Y=Je.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,Y,O),I=Le.get(A,E.length),I.init(Y),I.state.textureUnits=he.getTextureUnits(),E.push(I),ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ue.setFromProjectionMatrix(ut,Bi,Y.reversedDepth),yt=this.localClippingEnabled,pt=tt.init(this.clippingPlanes,yt),P=ke.get(A,F.length),P.init(),F.push(P),Je.enabled===!0&&Je.isPresenting===!0){const Fe=V.xr.getDepthSensingMesh();Fe!==null&&gs(Fe,Y,-1/0,V.sortObjects)}gs(A,Y,0,V.sortObjects),P.finish(),$!==null&&$.updateLights(I.state.lightsArray),V.sortObjects===!0&&P.sort(Ae,Re),st=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,st&&dt.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&tt.beginShadows();const ee=I.state.shadowsArray;if(at.render(ee,A,Y),pt===!0&&tt.endShadows(),(ie&&D.hasRenderPass())===!1){const Fe=P.opaque,Be=P.transmissive;if(I.setupLights(),Y.isArrayCamera){const Ke=Y.cameras;if(Be.length>0)for(let nt=0,mt=Ke.length;nt<mt;nt++){const _t=Ke[nt];Ao(Fe,Be,A,_t)}st&&dt.render(A);for(let nt=0,mt=Ke.length;nt<mt;nt++){const _t=Ke[nt];ga(P,A,_t,_t.viewport)}}else Be.length>0&&Ao(Fe,Be,A,Y),st&&dt.render(A),ga(P,A,Y)}O!==null&&Q===0&&(he.updateMultisampleRenderTarget(O),he.updateRenderTargetMipmap(O)),ie&&D.end(V),A.isScene===!0&&A.onAfterRender(V,A,Y),Ve.resetDefaultState(),z=-1,H=null,E.pop(),E.length>0?(I=E[E.length-1],he.setTextureUnits(I.state.textureUnits),pt===!0&&tt.setGlobalState(V.clippingPlanes,I.state.camera)):I=null,F.pop(),F.length>0?P=F[F.length-1]:P=null,$!==null&&$.renderEnd()};function gs(A,Y,ce,ie){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)I.pushLightProbeGrid(A);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Ue)){ie&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const Fe=ve.update(A),Be=A.material;Be.visible&&P.push(A,Fe,Be,ce,pe.z,null,Y)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Ue))){const Fe=ve.update(A),Be=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),pe.copy(Fe.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Be)){const Ke=Fe.groups;for(let nt=0,mt=Ke.length;nt<mt;nt++){const _t=Ke[nt],Xe=Be[_t.materialIndex];Xe&&Xe.visible&&P.push(A,Fe,Xe,ce,pe.z,_t,Y)}}else Be.visible&&P.push(A,Fe,Be,ce,pe.z,null,Y)}}const ze=A.children;for(let Fe=0,Be=ze.length;Fe<Be;Fe++)gs(ze[Fe],Y,ce,ie)}function ga(A,Y,ce,ie){const{opaque:ee,transmissive:ze,transparent:Fe}=A;I.setupLightsView(ce),pt===!0&&tt.setGlobalState(V.clippingPlanes,ce),ie&&w.viewport(L.copy(ie)),ee.length>0&&Hr(ee,Y,ce),ze.length>0&&Hr(ze,Y,ce),Fe.length>0&&Hr(Fe,Y,ce),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ao(A,Y,ce,ie){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ie.id]===void 0){const Xe=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ie.id]=new Ci(1,1,{generateMipmaps:!0,type:Xe?Gi:ti,minFilter:os,samples:Math.max(4,k.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const ze=I.state.transmissionRenderTarget[ie.id],Fe=ie.viewport||L;ze.setSize(Fe.z*V.transmissionResolutionScale,Fe.w*V.transmissionResolutionScale);const Be=V.getRenderTarget(),Ke=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(ze),V.getClearColor(We),Ge=V.getClearAlpha(),Ge<1&&V.setClearColor(16777215,.5),V.clear(),st&&dt.render(ce);const mt=V.toneMapping;V.toneMapping=zi;const _t=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),I.setupLightsView(ie),pt===!0&&tt.setGlobalState(V.clippingPlanes,ie),Hr(A,ce,ie),he.updateMultisampleRenderTarget(ze),he.updateRenderTargetMipmap(ze),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let At=0,tn=Y.length;At<tn;At++){const Wt=Y[At],{object:Ot,geometry:cn,material:je,group:rn}=Wt;if(je.side===Ui&&Ot.layers.test(ie.layers)){const Ct=je.side;je.side=Dn,je.needsUpdate=!0,xa(Ot,ce,ie,cn,je,rn),je.side=Ct,je.needsUpdate=!0,Xe=!0}}Xe===!0&&(he.updateMultisampleRenderTarget(ze),he.updateRenderTargetMipmap(ze))}V.setRenderTarget(Be,Ke,nt),V.setClearColor(We,Ge),_t!==void 0&&(ie.viewport=_t),V.toneMapping=mt}function Hr(A,Y,ce){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,ze=A.length;ee<ze;ee++){const Fe=A[ee],{object:Be,geometry:Ke,group:nt}=Fe;let mt=Fe.material;mt.allowOverride===!0&&ie!==null&&(mt=ie),Be.layers.test(ce.layers)&&xa(Be,Y,ce,Ke,mt,nt)}}function xa(A,Y,ce,ie,ee,ze){$!==null&&ee.isNodeMaterial&&$.setObject(A,ee),A.onBeforeRender(V,Y,ce,ie,ee,ze),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(V,Y,ce,ie,A,ze),ee.transparent===!0&&ee.side===Ui&&ee.forceSinglePass===!1?(ee.side=Dn,ee.needsUpdate=!0,V.renderBufferDirect(ce,Y,ie,ee,A,ze),ee.side=cs,ee.needsUpdate=!0,V.renderBufferDirect(ce,Y,ie,ee,A,ze),ee.side=Ui):V.renderBufferDirect(ce,Y,ie,ee,A,ze),A.onAfterRender(V,Y,ce,ie,ee,ze)}function Vr(A,Y,ce){Y.isScene!==!0&&(Y=be);const ie=oe.get(A),ee=I.state.lights,ze=I.state.shadowsArray,Fe=ee.state.version,Be=De.getParameters(A,ee.state,ze,Y,ce,I.state.lightProbeGridArray),Ke=De.getProgramCacheKey(Be);let nt=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Te.get(A.envMap||ie.environment,mt),ie.envMapRotation=ie.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",ii),nt=new Map,ie.programs=nt);let _t=nt.get(Ke);if(_t!==void 0){if(ie.currentProgram===_t&&ie.lightsStateVersion===Fe)return Co(A,Be),_t}else Be.uniforms=De.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,ce,Be),A.onBeforeCompile(Be,V),_t=De.acquireProgram(Be,Ke),nt.set(Ke,_t),ie.uniforms=Be.uniforms;const Xe=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=tt.uniform),Co(A,Be),ie.needsLights=_a(A),ie.lightsStateVersion=Fe,ie.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.sunLights.value=ee.state.sun,Xe.sunLightShadows.value=ee.state.sunShadow,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.sunShadowMatrix.value=ee.state.sunShadowMatrix,Xe.sunShadowCascade.value=ee.state.sunShadowCascade,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ee.state.spotLightMatrix,Xe.spotLightMap.value=ee.state.spotLightMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.lightProbeGrid=I.state.lightProbeGridArray.length>0,ie.currentProgram=_t,ie.uniformsList=null,_t}function va(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=sc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Co(A,Y){const ce=oe.get(A);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function yc(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let ce=0,ie=A.length;ce<ie;ce++){const ee=A[ce];if(ee.texture!==null&&ee.boundingBox.containsPoint(C))return ee}return null}function Zt(A,Y,ce,ie,ee){Y.isScene!==!0&&(Y=be),he.resetTextureUnits();const ze=Y.fog,Fe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Be=O===null?V.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Rt.workingColorSpace,Ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,nt=Te.get(ie.envMap||Fe,Ke),mt=ie.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,_t=!!ce.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Xe=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,tn=!!ce.morphAttributes.color;let Wt=zi;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Wt=V.toneMapping);const Ot=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,cn=Ot!==void 0?Ot.length:0,je=oe.get(ie),rn=I.state.lights;if(pt===!0&&(yt===!0||A!==H)){const Bt=A===H&&ie.id===z;tt.setState(ie,A,Bt)}let Ct=!1;ie.version===je.__version?(je.needsLights&&je.lightsStateVersion!==rn.state.version||je.outputColorSpace!==Be||ee.isBatchedMesh&&je.batching===!1||!ee.isBatchedMesh&&je.batching===!0||ee.isBatchedMesh&&je.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&je.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&je.instancing===!1||!ee.isInstancedMesh&&je.instancing===!0||ee.isSkinnedMesh&&je.skinning===!1||!ee.isSkinnedMesh&&je.skinning===!0||ee.isInstancedMesh&&je.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&je.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&je.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&je.instancingMorph===!1&&ee.morphTexture!==null||je.envMap!==nt||ie.fog===!0&&je.fog!==ze||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==tt.numPlanes||je.numIntersection!==tt.numIntersection)||je.vertexAlphas!==mt||je.vertexTangents!==_t||je.morphTargets!==Xe||je.morphNormals!==At||je.morphColors!==tn||je.toneMapping!==Wt||je.morphTargetsCount!==cn||!!je.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,je.__version=ie.version);let bn=je.currentProgram;Ct===!0&&(bn=Vr(ie,Y,ee),$&&ie.isNodeMaterial&&$.onUpdateProgram(ie,bn,je));let Mt=!1,pi=!1,ji=!1;const Ut=bn.getUniforms(),Yt=je.uniforms;if(w.useProgram(bn.program)&&(Mt=!0,pi=!0,ji=!0),ie.id!==z&&(z=ie.id,pi=!0),je.needsLights){const Bt=yc(I.state.lightProbeGridArray,ee);je.lightProbeGrid!==Bt&&(je.lightProbeGrid=Bt,pi=!0)}if(Mt||H!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ut.setValue(W,"projectionMatrix",A.projectionMatrix),Ut.setValue(W,"viewMatrix",A.matrixWorldInverse);const ri=Ut.map.cameraPosition;ri!==void 0&&ri.setValue(W,St.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Ut.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ut.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,pi=!0,ji=!0)}if(je.needsLights&&(rn.state.sunShadowMap.length>0&&Ut.setValue(W,"sunShadowMap",rn.state.sunShadowMap,he),rn.state.directionalShadowMap.length>0&&Ut.setValue(W,"directionalShadowMap",rn.state.directionalShadowMap,he),rn.state.spotShadowMap.length>0&&Ut.setValue(W,"spotShadowMap",rn.state.spotShadowMap,he),rn.state.pointShadowMap.length>0&&Ut.setValue(W,"pointShadowMap",rn.state.pointShadowMap,he)),ee.isSkinnedMesh){Ut.setOptional(W,ee,"bindMatrix"),Ut.setOptional(W,ee,"bindMatrixInverse");const Bt=ee.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ut.setValue(W,"boneTexture",Bt.boneTexture,he))}ee.isBatchedMesh&&(Ut.setOptional(W,ee,"batchingTexture"),Ut.setValue(W,"batchingTexture",ee._matricesTexture,he),Ut.setOptional(W,ee,"batchingIdTexture"),Ut.setValue(W,"batchingIdTexture",ee._indirectTexture,he),Ut.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ut.setValue(W,"batchingColorTexture",ee._colorsTexture,he));const mi=ce.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&X.update(ee,ce,bn),(pi||je.receiveShadow!==ee.receiveShadow)&&(je.receiveShadow=ee.receiveShadow,Ut.setValue(W,"receiveShadow",ee.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Yt.envMapIntensity.value=Y.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=i2()),pi){if(Ut.setValue(W,"toneMappingExposure",V.toneMappingExposure),je.needsLights&&Sc(Yt,ji),ze&&ie.fog===!0&&et.refreshFogUniforms(Yt,ze),et.refreshMaterialUniforms(Yt,ie,ue,ae,I.state.transmissionRenderTarget[A.id]),je.needsLights&&je.lightProbeGrid){const Bt=je.lightProbeGrid;Yt.probesSH.value=Bt.texture,Yt.probesMin.value.copy(Bt.boundingBox.min),Yt.probesMax.value.copy(Bt.boundingBox.max),Yt.probesResolution.value.copy(Bt.resolution)}sc.upload(W,va(je),Yt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(sc.upload(W,va(je),Yt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ut.setValue(W,"center",ee.center),Ut.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Ut.setValue(W,"normalMatrix",ee.normalMatrix),Ut.setValue(W,"modelMatrix",ee.matrixWorld),ie.uniformsGroups!==void 0){const Bt=ie.uniformsGroups;for(let ri=0,gi=Bt.length;ri<gi;ri++){const xi=Bt[ri];_e.update(xi,bn),_e.bind(xi,bn)}}return bn}function Sc(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.sunLights.needsUpdate=Y,A.sunLightShadows.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function _a(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,Y,ce){const ie=oe.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),oe.get(A.texture).__webglTexture=Y,oe.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ce,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const ce=oe.get(A);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,ce=0){O=A,fe=Y,Q=ce;let ie=null,ee=!1,ze=!1;if(A){const Be=oe.get(A);if(Be.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(W.FRAMEBUFFER,Be.__webglFramebuffer),L.copy(A.viewport),se.copy(A.scissor),Se=A.scissorTest,w.viewport(L),w.scissor(se),w.setScissorTest(Se),z=-1;return}else if(Be.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Be.__hasExternalTextures)he.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const mt=A.depthTexture;if(Be.__boundDepthTexture!==mt){if(mt!==null&&oe.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ze=!0);const nt=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?ie=nt[Y][ce]:ie=nt[Y],ee=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ie=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[ce]:ie=nt,L.copy(A.viewport),se.copy(A.scissor),Se=A.scissorTest}else L.copy(we).multiplyScalar(ue).floor(),se.copy(ot).multiplyScalar(ue).floor(),Se=Et;if(ce!==0&&(ie=te),w.bindFramebuffer(W.FRAMEBUFFER,ie)&&w.drawBuffers(A,ie),w.viewport(L),w.scissor(se),w.setScissorTest(Se),ee){const Be=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,ce)}else if(ze){const Be=Y;for(let Ke=0;Ke<A.textures.length;Ke++){const nt=oe.get(A.textures[Ke]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ke,nt.__webglTexture,ce,Be)}}else if(A!==null&&ce!==0){const Be=oe.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Be.__webglTexture,ce)}z=-1};function ya(A){const Y=oe.get(A);return(Y.__readFormat!==A.format||Y.__readType!==A.type)&&(Y.__readFormat=A.format,Y.__readType=A.type,Y.__formatReadable=k.textureFormatReadable(A.format),Y.__typeReadable=k.textureTypeReadable(A.type)),Y}this.readRenderTargetPixels=function(A,Y,ce,ie,ee,ze,Fe,Be=0){if(!(A&&A.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ke=Ke[Fe]),Ke){w.bindFramebuffer(W.FRAMEBUFFER,Ke);try{const nt=A.textures[Be],mt=nt.format,_t=nt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be);const Xe=ya(nt);if(Xe.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ie&&ce>=0&&ce<=A.height-ee&&W.readPixels(Y,ce,ie,ee,Ie.convert(mt),Ie.convert(_t),ze)}finally{const nt=O!==null?oe.get(O).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,ce,ie,ee,ze,Fe,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ke=Ke[Fe]),Ke)if(Y>=0&&Y<=A.width-ie&&ce>=0&&ce<=A.height-ee){w.bindFramebuffer(W.FRAMEBUFFER,Ke);const nt=A.textures[Be],mt=nt.format,_t=nt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be);const Xe=ya(nt);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,At),W.bufferData(W.PIXEL_PACK_BUFFER,ze.byteLength,W.STREAM_READ),W.readPixels(Y,ce,ie,ee,Ie.convert(mt),Ie.convert(_t),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const tn=O!==null?oe.get(O).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,tn);const Wt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await f1(W,Wt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,At),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ze),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(At),W.deleteSync(Wt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,ce=0){const ie=Math.pow(2,-ce),ee=Math.floor(A.image.width*ie),ze=Math.floor(A.image.height*ie),Fe=Y!==null?Y.x:0,Be=Y!==null?Y.y:0;he.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Fe,Be,ee,ze),w.unbindTexture()},this.copyTextureToTexture=function(A,Y,ce=null,ie=null,ee=0,ze=0){let Fe,Be,Ke,nt,mt,_t,Xe,At,tn;const Wt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(ce!==null)Fe=ce.max.x-ce.min.x,Be=ce.max.y-ce.min.y,Ke=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,mt=ce.min.y,_t=ce.isBox3?ce.min.z:0;else{const Yt=Math.pow(2,-ee);Fe=Math.floor(Wt.width*Yt),Be=Math.floor(Wt.height*Yt),A.isDataArrayTexture?Ke=Wt.depth:A.isData3DTexture?Ke=Math.floor(Wt.depth*Yt):Ke=1,nt=0,mt=0,_t=0}ie!==null?(Xe=ie.x,At=ie.y,tn=ie.z):(Xe=0,At=0,tn=0);const Ot=Ie.convert(Y.format),cn=Ie.convert(Y.type);let je;Y.isData3DTexture?(he.setTexture3D(Y,0),je=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(he.setTexture2DArray(Y,0),je=W.TEXTURE_2D_ARRAY):(he.setTexture2D(Y,0),je=W.TEXTURE_2D),w.activeTexture(W.TEXTURE0),w.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),w.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),w.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);const rn=w.getParameter(W.UNPACK_ROW_LENGTH),Ct=w.getParameter(W.UNPACK_IMAGE_HEIGHT),bn=w.getParameter(W.UNPACK_SKIP_PIXELS),Mt=w.getParameter(W.UNPACK_SKIP_ROWS),pi=w.getParameter(W.UNPACK_SKIP_IMAGES);w.pixelStorei(W.UNPACK_ROW_LENGTH,Wt.width),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wt.height),w.pixelStorei(W.UNPACK_SKIP_PIXELS,nt),w.pixelStorei(W.UNPACK_SKIP_ROWS,mt),w.pixelStorei(W.UNPACK_SKIP_IMAGES,_t);const ji=A.isDataArrayTexture||A.isData3DTexture,Ut=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Yt=oe.get(A),mi=oe.get(Y),Bt=oe.get(Yt.__renderTarget),ri=oe.get(mi.__renderTarget);w.bindFramebuffer(W.READ_FRAMEBUFFER,Bt.__webglFramebuffer),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let gi=0;gi<Ke;gi++)ji&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(A).__webglTexture,ee,_t+gi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,ze,tn+gi)),W.blitFramebuffer(nt,mt,Fe,Be,Xe,At,Fe,Be,W.DEPTH_BUFFER_BIT,W.NEAREST);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||oe.has(A)){const Yt=oe.get(A),mi=oe.get(Y);w.bindFramebuffer(W.READ_FRAMEBUFFER,q),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,Z);for(let Bt=0;Bt<Ke;Bt++)ji?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Yt.__webglTexture,ee,_t+Bt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Yt.__webglTexture,ee),Ut?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,mi.__webglTexture,ze,tn+Bt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,mi.__webglTexture,ze),ee!==0?W.blitFramebuffer(nt,mt,Fe,Be,Xe,At,Fe,Be,W.COLOR_BUFFER_BIT,W.NEAREST):Ut?W.copyTexSubImage3D(je,ze,Xe,At,tn+Bt,nt,mt,Fe,Be):W.copyTexSubImage2D(je,ze,Xe,At,nt,mt,Fe,Be);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ut?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(je,ze,Xe,At,tn,Fe,Be,Ke,Ot,cn,Wt.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(je,ze,Xe,At,tn,Fe,Be,Ke,Ot,Wt.data):W.texSubImage3D(je,ze,Xe,At,tn,Fe,Be,Ke,Ot,cn,Wt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,ze,Xe,At,Fe,Be,Ot,cn,Wt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,ze,Xe,At,Wt.width,Wt.height,Ot,Wt.data):W.texSubImage2D(W.TEXTURE_2D,ze,Xe,At,Fe,Be,Ot,cn,Wt);w.pixelStorei(W.UNPACK_ROW_LENGTH,rn),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ct),w.pixelStorei(W.UNPACK_SKIP_PIXELS,bn),w.pixelStorei(W.UNPACK_SKIP_ROWS,Mt),w.pixelStorei(W.UNPACK_SKIP_IMAGES,pi),ze===0&&Y.generateMipmaps&&W.generateMipmap(je),w.unbindTexture()},this.initRenderTarget=function(A){oe.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){fe=0,Q=0,O=null,w.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const s2=[{id:"mumbai",place:"Mumbai",country:"India",lat:19.076,lng:72.8777,companies:["HDFC Bank","HDFC Life","HDFC ERGO","Ageas Federal","Shardul Amarchand","Burns & McDonnell","APAR Industries"],scope:"Domestic Headquarter & Multi-Division Summits"},{id:"delhi",place:"Delhi NCR",country:"India",lat:28.6139,lng:77.209,companies:["Indigo Airlines","Tricolite","Uniworld Logistics","Pathways World School"],scope:"Aviation Well-Being & 100-Day Ikigai Deployments"},{id:"pune",place:"Pune",country:"India",lat:18.5204,lng:73.8567,companies:["TATA Motors","ELP (Economic Laws Practice)","SMFG India"],scope:"Automotive Leadership & Corporate Law Wellness"},{id:"goa",place:"Goa",country:"India",lat:15.2993,lng:74.124,companies:["Cipla Pharmaceuticals","Mango Sciences"],scope:"Global Pharma & HealthTech Executive Retreats"},{id:"bengaluru",place:"Bengaluru",country:"India",lat:12.9716,lng:77.5946,companies:["NetApp","Tech Leaders Consortium","TCS iON"],scope:"Technology Executive Resilience & Innovation"},{id:"dubai",place:"Dubai",country:"UAE",lat:25.2048,lng:55.2708,companies:["Global Indian International School","MENA Corporate Leaders"],scope:"Educational Well-Being & Youth Mentorship"},{id:"muscat",place:"Muscat",country:"Oman",lat:23.588,lng:58.3829,companies:["Alizz Islamic Bank","BankDhofar","NBO (National Bank of Oman)"],scope:"Middle East Banking Leadership Symposium"},{id:"mauritius",place:"Port Louis",country:"Mauritius",lat:-20.1609,lng:57.5012,companies:["Absa Bank (Africa)"],scope:"African Corporate Banking Convention (500+ CXOs)"},{id:"tanzania",place:"Dar es Salaam",country:"Tanzania",lat:-6.7924,lng:39.2083,companies:["Amana Bank"],scope:"East African Banking Convention & Purpose Alignment"},{id:"srilanka",place:"Colombo",country:"Sri Lanka",lat:6.9271,lng:79.8612,companies:["Harvard Club : Sri Lanka x APAC"],scope:"Harvard Alumni Global Keynote"},{id:"japan",place:"Tokyo",country:"Japan",lat:35.6762,lng:139.6503,companies:["Ikigai Research Foundation & Tokyo Partners"],scope:"Gross Life Satisfaction & Purpose Fieldwork"},{id:"finland",place:"Helsinki",country:"Finland",lat:60.1699,lng:24.9384,companies:["Nordic Well-Being Council","Sisu Research Institute"],scope:"Sisu & Mental Stamina Research Interventions"},{id:"bhutan",place:"Thimphu",country:"Bhutan",lat:27.4728,lng:89.6393,companies:["Gross National Happiness Institute"],scope:"National Well-Being Metrics & Compassionate Governance"},{id:"costarica",place:"San José",country:"Costa Rica",lat:9.9281,lng:-84.0907,companies:["Blue Zone Human Flourishing Alliance"],scope:"Pura Vida & Biological Longevity Frameworks"}];function a2(s,e,t){const r=(90-s)*(Math.PI/180),o=(e+180)*(Math.PI/180),l=-(t*Math.sin(r)*Math.cos(o)),u=t*Math.sin(r)*Math.sin(o),d=t*Math.cos(r);return new ne(l,d,u)}function o2(){const s=document.createElement("canvas");s.width=128,s.height=128;const e=s.getContext("2d"),t=e.createRadialGradient(64,64,18,64,64,62);return t.addColorStop(0,"rgba(255, 199, 44, 0.7)"),t.addColorStop(.5,"rgba(255, 199, 44, 0.25)"),t.addColorStop(1,"rgba(255, 199, 44, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.strokeStyle="#FFC72C",e.lineWidth=3.5,e.beginPath(),e.arc(64,64,38,0,Math.PI*2),e.stroke(),e.fillStyle="#08090C",e.beginPath(),e.arc(64,64,34,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.3)",e.lineWidth=1.5,e.stroke(),e.fillStyle="#FFC72C",e.beginPath(),e.moveTo(64,42),e.quadraticCurveTo(64,58,76,64),e.quadraticCurveTo(64,70,64,86),e.quadraticCurveTo(64,70,52,64),e.quadraticCurveTo(64,58,64,42),e.fill(),e.fillStyle="#FFFFFF",e.beginPath(),e.arc(64,64,4,0,Math.PI*2),e.fill(),new z1(s)}function l2({className:s="",heightClass:e=""}){const t=xe.useRef(null),[r,o]=xe.useState(null),[l,u]=xe.useState("mumbai"),d=xe.useRef({scene:null,camera:null,renderer:null,globeGroup:null,pulseRings:[],markerHitSpheres:[],isHovered:!1,isDragging:!1,reqId:null});return xe.useEffect(()=>{const f=t.current;if(!f)return;const m=f.clientWidth,v=f.clientHeight,y=new C1;d.current.scene=y;const x=new fi(45,m/v,.1,1e3);x.position.z=5.2,d.current.camera=x;const M=new r2({antialias:!0,alpha:!0});M.setSize(m,v),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setClearColor(0,0),f.appendChild(M.domElement),d.current.renderer=M;const T=new nS(16777215,.65);y.add(T);const R=new S0(14544639,1.4);R.position.set(-5,3,-3),y.add(R);const S=new S0(16765276,1);S.position.set(5,2,4),y.add(S);const _=new ra;_.rotation.x=.22,_.rotation.y=-1.2,y.add(_),d.current.globeGroup=_;const N=1.85,C=new Q1().load("/earth-night.png");C.colorSpace=ei;const P=new sa(N,64,64),I=new X1({map:C,emissiveMap:C,emissive:new Nt(16770723),emissiveIntensity:1.35,roughness:.8,metalness:.1,color:460810}),F=new zn(P,I);_.add(F);const E=new sa(N*1.022,64,64),D=new as({color:4026546,transparent:!0,opacity:.15,side:Dn}),V=new zn(E,D);y.add(V);const j=new sa(N*1.035,48,48),$=new as({color:16763904,transparent:!0,opacity:.08,side:Dn}),te=new zn(j,$);y.add(te);const q=o2(),Z=[];s2.forEach((Re,we)=>{const ot=a2(Re.lat,Re.lng,N),Et=ot.clone().normalize(),Ue=new ra;Ue.position.copy(ot),Ue.visible=!1;const pt=new $f(.018,.045,24),yt=new as({color:16763904,side:Ui,transparent:!0,opacity:0,depthTest:!0}),ut=new zn(pt,yt);ut.lookAt(Et),Ue.add(ut);const St=.22,pe=new Kf(.003,.003,St,8),be=new as({color:16765276,transparent:!0,opacity:0,depthTest:!0}),st=new zn(pe,be);st.position.copy(Et.clone().multiplyScalar(St/2)),st.quaternion.setFromUnitVectors(new ne(0,1,0),Et),Ue.add(st);const vt=new Vg({map:q,transparent:!0,opacity:0,depthTest:!0}),W=new U1(vt);W.scale.set(.18,.18,1),W.position.copy(Et.clone().multiplyScalar(St+.04)),Ue.add(W);const Gt=new sa(.2,12,12),Tt=new as({visible:!1}),k=new zn(Gt,Tt);k.position.copy(Et.clone().multiplyScalar(St)),k.userData={location:Re,pinGroup:Ue,iconSprite:W,ringMesh:ut,index:we},k.visible=!1,Ue.add(k),_.add(Ue),Z.push({loc:Re,pinGroup:Ue,iconSprite:W,ringMesh:ut,beamMesh:st,hitMesh:k,phase:we*.6})}),d.current.locationPins=Z;const fe=new sS,Q=new xt(-999,-999),O=Re=>{const we=M.domElement.getBoundingClientRect();Q.x=(Re.clientX-we.left)/we.width*2-1,Q.y=-((Re.clientY-we.top)/we.height)*2+1,fe.setFromCamera(Q,x);const ot=Z.filter(Ue=>Ue.pinGroup.visible&&Ue.hitMesh.visible).map(Ue=>Ue.hitMesh),Et=fe.intersectObjects(ot);if(Et.length>0){d.current.isHovered=!0;const Ue=Et[0].object,pt=Ue.userData.location;Z.forEach(st=>{st.hitMesh===Ue?st.iconSprite.scale.set(.26,.26,1):st.iconSprite.scale.set(.18,.18,1)});const yt=new ne;Ue.getWorldPosition(yt),yt.project(x);const ut=(yt.x+1)/2*we.width+we.left,St=(-yt.y+1)/2*we.height+we.top,pe=Math.max(160,Math.min(window.innerWidth-160,ut)),be=Math.max(150,St);o({...pt,screenX:pe,screenY:be})}else d.current.isHovered=!1,Z.forEach(Ue=>{Ue.iconSprite.scale.set(.18,.18,1)}),o(null)},z=()=>{d.current.isHovered=!1,Z.forEach(Re=>{Re.iconSprite.scale.set(.18,.18,1)}),o(null)};let H=!1,L=0,se=0;const Se=Re=>{H=!0,d.current.isDragging=!0,L=Re.clientX,se=Re.clientY},We=Re=>{if(!H)return;const we=Re.clientX-L,ot=Re.clientY-se;_.rotation.y+=we*.005,_.rotation.x+=ot*.005,_.rotation.x=Math.max(-.6,Math.min(.6,_.rotation.x)),L=Re.clientX,se=Re.clientY},Ge=()=>{H=!1,d.current.isDragging=!1},Oe=M.domElement;Oe.addEventListener("pointermove",O),Oe.addEventListener("pointerleave",z),Oe.addEventListener("pointerdown",Se),window.addEventListener("pointermove",We),window.addEventListener("pointerup",Ge);const ae=()=>{if(!f)return;const Re=f.clientWidth,we=f.clientHeight;x.aspect=Re/we,x.updateProjectionMatrix(),M.setSize(Re,we)};window.addEventListener("resize",ae);let ue=new aS;const Ae=()=>{d.current.reqId=requestAnimationFrame(Ae);const Re=ue.getDelta(),we=ue.getElapsedTime();!H&&!d.current.isHovered&&(_.rotation.y+=Re*.1);const ot=x.position,Et=new ne;_.getWorldPosition(Et),Z.forEach(Ue=>{const pt=new ne;Ue.hitMesh.getWorldPosition(pt);const yt=pt.clone().sub(ot).normalize(),St=pt.clone().sub(Et).normalize().dot(yt);if(St<-.15){const pe=Math.min(1,Math.max(0,(-St-.15)/.2));Ue.pinGroup.visible=!0,Ue.iconSprite.material.opacity=pe,Ue.ringMesh.material.opacity=pe*.85,Ue.beamMesh.material.opacity=pe*.85,Ue.hitMesh.visible=pe>.45;const be=1+Math.sin(we*2.8+Ue.phase)*.35;Ue.ringMesh.scale.set(be,be,1)}else Ue.pinGroup.visible=!1,Ue.iconSprite.material.opacity=0,Ue.ringMesh.material.opacity=0,Ue.beamMesh.material.opacity=0,Ue.hitMesh.visible=!1}),M.render(y,x)};return Ae(),()=>{cancelAnimationFrame(d.current.reqId),Oe.removeEventListener("pointermove",O),Oe.removeEventListener("pointerleave",z),Oe.removeEventListener("pointerdown",Se),window.removeEventListener("pointermove",We),window.removeEventListener("pointerup",Ge),window.removeEventListener("resize",ae),Oe&&Oe.parentNode&&Oe.parentNode.removeChild(Oe),M.dispose()}},[]),p.jsx("div",{className:`relative w-full ${s}`,children:p.jsx("div",{ref:t,className:`w-full ${e||"h-[520px] sm:h-[600px] md:h-[700px]"} cursor-grab active:cursor-grabbing relative overflow-hidden flex items-center justify-center bg-transparent rounded-none border-none`,children:r&&p.jsxs("div",{className:"fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-4 w-72 sm:w-80 bg-[#0A0A0A]/95 text-white border border-hq-yellow p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-md rounded-xl transition-all duration-200 animate-fadeIn",style:{left:`${r.screenX}px`,top:`${r.screenY-14}px`},children:[p.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/15 mb-3",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-hq-yellow animate-ping"}),p.jsxs("span",{className:"font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-white",children:[r.place,", ",r.country]})]}),p.jsxs("span",{className:"bg-hq-yellow text-hq-black font-display font-bold text-[10px] tracking-widest px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1 shadow-sm",children:[p.jsx(co,{className:"w-3 h-3 text-hq-black"}),p.jsx("span",{children:"GLOBAL HUB"})]})]}),p.jsxs("div",{className:"mb-3",children:[p.jsxs("div",{className:"text-[10px] font-mono uppercase tracking-widest text-hq-yellow mb-1 font-semibold flex items-center gap-1.5",children:[p.jsx(uy,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Interacting Corporate Clients:"})]}),p.jsx("div",{className:"flex flex-wrap gap-1.5 mt-1",children:r.companies.map((f,m)=>p.jsx("span",{className:"text-xs font-body font-medium bg-white/10 text-white/95 px-2.5 py-1 rounded-md border border-white/10",children:f},m))})]}),p.jsxs("div",{className:"pt-2.5 border-t border-white/10 text-[11px] font-body text-white/70 italic",children:['"',r.scope,'"']})]})})})}function Pn({direction:s="right",className:e=""}){return s==="left"?p.jsxs("svg",{className:`w-[20px] h-[10px] inline-block flex-shrink-0 transition-transform duration-300 ${e}`,viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("line",{x1:"20",y1:"5",x2:"0",y2:"5",stroke:"currentColor",strokeWidth:"1"}),p.jsx("polyline",{points:"5 1, 0 5, 5 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}):p.jsxs("svg",{className:`w-[20px] h-[10px] inline-block flex-shrink-0 transition-transform duration-300 ${e}`,viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1"}),p.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Y0(){const{faculty:s,courses:e,books:t,podcasts:r,engagements:o,cmsRichText:l,founderProfile:u,keyThemes:d,wellbeingPillars:f,engagementBenefits:m,statesCovered:v,globalCountries:y}=fg(),x={ikigai:p.jsx(py,{className:"w-5 h-5 stroke-[1.8]"}),finance:p.jsx(hy,{className:"w-5 h-5 stroke-[1.8]"}),stress:p.jsx(by,{className:"w-5 h-5 stroke-[1.8]"}),fitness:p.jsx(oy,{className:"w-5 h-5 stroke-[1.8]"}),leadership:p.jsx(cy,{className:"w-5 h-5 stroke-[1.8]"}),values:p.jsx(xy,{className:"w-5 h-5 stroke-[1.8]"}),balance:p.jsx(Cy,{className:"w-5 h-5 stroke-[1.8]"}),meditation:p.jsx(co,{className:"w-5 h-5 stroke-[1.8]"}),"psychology-wealth":p.jsx(jm,{className:"w-5 h-5 stroke-[1.8]"}),"habit-building":p.jsx(Ay,{className:"w-5 h-5 stroke-[1.8]"}),healing:p.jsx(gy,{className:"w-5 h-5 stroke-[1.8]"}),nutrition:p.jsx(ly,{className:"w-5 h-5 stroke-[1.8]"})},[M,T]=xe.useState("resilience"),[R,S]=xe.useState(null),_=R||(r&&r.length>0?r[0]:null),[N,B]=xe.useState(0),C=xe.useRef(null),P=xe.useRef(!1),[I,F]=xe.useState(null),[E,D]=xe.useState(!1),V=xe.useRef(null),[j,$]=xe.useState(!1),[te,q]=xe.useState(0),[Z,fe]=xe.useState(0),[Q,O]=xe.useState(!1),z=pe=>{if(pe.button!==0)return;const be=V.current;be&&($(!0),O(!1),q(pe.pageX-be.offsetLeft),fe(be.scrollLeft))},H=pe=>{if(!j)return;const be=V.current;if(!be)return;pe.preventDefault();const vt=(pe.pageX-be.offsetLeft-te)*1.25;Math.abs(vt)>5&&O(!0),be.scrollLeft=Z-vt},L=()=>{$(!1),setTimeout(()=>{O(!1)},60)},se=()=>{j&&($(!1),setTimeout(()=>{O(!1)},60)),D(!1)};xe.useEffect(()=>{if(!j)return;const pe=()=>{$(!1),setTimeout(()=>O(!1),60)};return window.addEventListener("mouseup",pe),()=>window.removeEventListener("mouseup",pe)},[j]),xe.useEffect(()=>{V.current&&(V.current.scrollLeft=0)},[]),xe.useEffect(()=>{if(E||j)return;const pe=setInterval(()=>{const be=V.current;if(!be)return;const st=420,vt=be.scrollWidth-be.clientWidth;be.scrollLeft>=vt-30?be.scrollTo({left:0,behavior:"smooth"}):be.scrollBy({left:st,behavior:"smooth"})},2800);return()=>clearInterval(pe)},[E,j]),xe.useEffect(()=>{const pe=C.current;if(!pe)return;const be=st=>{const vt=pe.getBoundingClientRect();vt.top<=140&&vt.bottom>=window.innerHeight-140&&(st.deltaY>20?N<5&&(st.preventDefault(),P.current||(P.current=!0,B(Gt=>Math.min(Gt+1,5)),setTimeout(()=>{P.current=!1},420))):st.deltaY<-20&&N>0&&(st.preventDefault(),P.current||(P.current=!0,B(Gt=>Math.max(Gt-1,0)),setTimeout(()=>{P.current=!1},420))))};return pe.addEventListener("wheel",be,{passive:!1}),()=>pe.removeEventListener("wheel",be)},[N]);const Se=pe=>{V.current&&V.current.scrollBy({left:pe==="left"?-420:420,behavior:"smooth"})},We=[{id:"leadership",title:"Leadership",left:"13%",top:"80%",iconType:"leader"},{id:"adaptability",title:"Adaptability",left:"27.5%",top:"38%",iconType:"adaptability"},{id:"resilience",title:"Resilience",left:"50%",top:"18%",iconType:"resilience"},{id:"discipline",title:"Discipline",left:"72.5%",top:"38%",iconType:"discipline"},{id:"flexibility",title:"Flexibility",left:"87%",top:"80%",iconType:"flexibility"}];We.find(pe=>pe.id===M)||We[2];const Ge=pe=>{switch(pe){case"leader":return p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black",children:[p.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"4.5",strokeWidth:"2.5"}),p.jsx("line",{x1:"6.5",y1:"4.5",x2:"8",y2:"6.5",strokeWidth:"2.5"}),p.jsx("line",{x1:"17.5",y1:"4.5",x2:"16",y2:"6.5",strokeWidth:"2.5"}),p.jsx("circle",{cx:"12",cy:"11.5",r:"3.5",fill:"currentColor"}),p.jsx("path",{d:"M6 21v-1.5a4.5 4.5 0 0 1 9 0V21",fill:"currentColor"})]});case"adaptability":return p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black",children:[p.jsx("line",{x1:"3",y1:"10",x2:"7",y2:"10",strokeWidth:"2"}),p.jsx("line",{x1:"2",y1:"14",x2:"6",y2:"14",strokeWidth:"2"}),p.jsx("line",{x1:"4",y1:"18",x2:"8",y2:"18",strokeWidth:"2"}),p.jsx("circle",{cx:"15",cy:"14",r:"6.5",strokeWidth:"2"}),p.jsx("polyline",{points:"15 11 15 14 17.5 15.5",strokeWidth:"2"}),p.jsx("path",{d:"M13 4.5h4M15 4.5v3",strokeWidth:"2"})]});case"resilience":return p.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black",children:[p.jsx("path",{d:"M12 21V10",strokeWidth:"2.5"}),p.jsx("path",{d:"M12 10a4 4 0 0 0-4-4 4 4 0 0 0 0 8 4 4 0 0 0 4-4Z",strokeWidth:"2",fill:"currentColor"}),p.jsx("path",{d:"M12 14a4 4 0 0 1 4-4 4 4 0 0 1 0 8 4 4 0 0 1-4-4Z",strokeWidth:"2",fill:"currentColor"}),p.jsx("path",{d:"M6.5 21c1.8-1.5 3.6-1.5 5.5 0s3.6 1.5 5.5 0",strokeWidth:"2.5"})]});case"discipline":return p.jsx(jm,{className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black stroke-[2]"});case"flexibility":return p.jsx(my,{className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black stroke-[2]"});default:return p.jsx(co,{className:"w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black"})}},Oe=[{id:"f-meera",name:"MEERA CHAUHAN",category:"Mindfulness",title:"Director at Tricolite Electrical Industries | Warwick & Yale Fellow",areaExpertise:"Mindfulness & Industrial Relations",bio:"Meera Chauhan is a Director with Tricolite Electrical Industries. She has done her Master's Degree in Industrial Relations and Personnel Management from Warwick Business School and also a mid career Fellowship at Yale University",image:"/team/meera-chauhan.png"},{id:"f-bijay",name:"BIJAY ANAND",category:"Kundalini Yoga",title:"Esteemed Kundalini Yoga Instructor & Holistic Wellness Mentor",areaExpertise:"Kundalini Yoga, Ancient Wisdom & Breath Science",bio:"Esteemed Kundalini Yoga instructor Bijay Anand fosters holistic wellness, integrating ancient wisdom and contemporary insights for a balanced, transformative practice.",image:"/team/bijay-anand.png"},{id:"f-rajiv",name:"RAJIV GUPTA",category:"Japanese Life lessons",title:"Manufacturing CEO & Author | HBS Alumnus & Ex-VP Honda Cars",areaExpertise:"Japanese Management Philosophy & Corporate Culture",bio:`Mr. Gupta is currently the CEO of a leading manufacturing company. Author of "The Good Indian Employee's Guide to Surviving a Lala Company." Ex-VP and National Head of Sales & Marketing at Honda Cars. Alumnus of HBS.`,image:"/team/rajiv-gupta.png"},{id:"f-soha",name:"SOHA ALI KHAN",category:"Parenting",title:"Acclaimed Author & Modern Family Mentor | Oxford & LSE Alumna",areaExpertise:"Work-Life Integration & Emotional Intelligence",bio:'Soha Ali Khan, Indian actress from a noble lineage, blends regal charm with cinematic brilliance, symbolizing cultural richness in Bollywood. She also the author to the book "The Perils of being Moderately Famous"',image:"/team/soha-ali-khan.png"},{id:"f-sanjay",name:"SANJAY ARORA",category:"Entrepreneurship Leader",title:"Healthcare Pioneer & Founder of Suburban Diagnostics",areaExpertise:"Diagnostic Innovation, Entrepreneurial Scaling & Patient Care",bio:"Dr. Sanjay Arora, healthcare pioneer, founded Suburban Diagnostics, prioritizing precision and patient care. Awards recognize his leadership, innovation, and entrepreneurial excellence.",image:"/team/sanjay-arora.png"},{id:"f-bharati",name:"BHARATI JAISINGH",category:"Well Being Practitioner",title:"Well Being Practitioner & Founder of IDHA",areaExpertise:"Dance & Expressive Movement Therapy",bio:"Bharati K. Jaisingh, Well Being Practitioner and founder of IDHA, utilizes dance and expressive arts to foster therapeutic experiences for individuals and communities.",image:"/team/bharati-jaisingh.png"},{id:"f-manny",name:"MANNY ANCHAN",category:"Founder & Chief Happiness Officer",title:"Founder & Chief Happiness Officer | Harvard & Columbia Alum",areaExpertise:"Personal Leadership, Ikigai & Purpose Alignment",bio:"25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Researched Ikigai, Hygge, Lagom, Sisu, and Gross National Happiness.",image:"/team/manny-anchan.png"},{id:"f-anil",name:"ANIL KUMAR",category:"Personal Leadership",title:"Recipient of 'SHAURYA CHAKRA' | LBS & ISB Alumnus",areaExpertise:"Personal Leadership & High-Stakes Resilience",bio:"Anil, recipient of 'SHAURYA CHAKRA' award is a former military officer, motivational speaker, leadership expert, and fundraiser for alternative investment funds. Alumnus of London Business School and ISB.",image:"/team/anil-kumar.png"},{id:"f-carolin",name:"CAROLIN NYTRA",category:"Spirituality",title:"Retired German Olympic Hurdler & Holistic Well-Being Advocate",areaExpertise:"Spirituality, Mindset & Cacao Guidance",bio:"Carolin Nytra is a retired German Olympic hurdler, now a holistic well-being advocate. Now, a Cacao Priestess, she empowers others through mindset and spiritual guidance.",image:"/team/carolin-nytra.png"},{id:"f-ajay",name:"AJAY SRINIVASAN",category:"Business Leadership",title:"Seasoned Business Leader & Strategic Advisor",areaExpertise:"Enterprise Scaling & Executive Resilience",bio:"Ajay Srinivasan is a seasoned business leader with a diverse career, founding and expanding businesses in India and abroad, showcasing leadership across different organizational structures and industries.",image:"/team/ajay-srinivasan.png"},{id:"f-rupinder",name:"RUPINDER SINGH",category:"Sports",title:"Olympic Field Hockey Star & International Champion",areaExpertise:"Athletic Tenacity & Clutch Mindset Under Pressure",bio:"Rupinder Pal Singh, born on Nov 11, 1990, in Faridkot, Punjab, is an Indian hockey star known for powerful drag-flicks, international victories, and inspiring young players.",image:"/team/rupinder-singh.png"},{id:"f-parvej",name:"PARVEJ MANTRRI",category:"Fit Panda",title:"Versatile Entertainer & Celebrity Fitness Coach",areaExpertise:"Physical Fitness, Motivation & Creative Energy",bio:"Parvej, a versatile entertainer, excels as an actor, host, voice-over artist, and celebrity fitness coach, earning acclaim in various roles.",image:"/team/parvej-mantrri.png"},{id:"f-bhakti",name:"BHAKTI KAPOOR",category:"HealthTech professional",title:"Founder of HEALTHY HIGH & Nutritional Wellness Advisor",areaExpertise:"Clinical Nutrition & Metabolic Vitality",bio:"Bhakti is the founder of HEALTHY HIGH a virtual nutrition counselling platform. She is also on the advisory panel for Vitalyse wellness strips and Green Protein.",image:"/team/bhakti-kapoor.png"}],[ae,ue]=xe.useState("mental"),[Ae,Re]=xe.useState(null),{isDark:we}=pg(),[ot,Et]=xe.useState(!1),[Ue,pt]=xe.useState(!1);xe.useEffect(()=>{const pe=()=>{const be=document.getElementById("reasons-section"),st=document.getElementById("contact");if(!be)return;const vt=be.getBoundingClientRect(),W=st?st.getBoundingClientRect():null,Gt=vt.top<=window.innerHeight*.7,Tt=W?W.top>window.innerHeight*.92:!0;Et(!!(Gt&&Tt));const k=window.innerHeight-80,w=[{id:"worklife-section",isDarkSection:!0},{id:"team-section",isDarkSection:!0},{id:"footprint-section",isDarkSection:!0},{id:"books",isDarkSection:!0},{id:"reasons-section",isDarkSection:we},{id:"key-themes-section",isDarkSection:we},{id:"benefits-section",isDarkSection:we},{id:"podcast",isDarkSection:we}];let J=we;for(const oe of w){const he=document.getElementById(oe.id);if(he){const Te=he.getBoundingClientRect();if(Te.top<=k&&Te.bottom>=k){J=oe.isDarkSection;break}}}pt(J)};return window.addEventListener("scroll",pe,{passive:!0}),pe(),()=>window.removeEventListener("scroll",pe)},[we]),xe.useEffect(()=>{const pe=document.querySelectorAll(".section-reveal");if(!pe.length)return;const be=new IntersectionObserver((st,vt)=>{st.forEach(W=>{W.isIntersecting&&(W.target.classList.add("section-revealed"),vt.unobserve(W.target))})},{threshold:.05,rootMargin:"0px 0px -40px 0px"});return pe.forEach(st=>{const vt=st.getBoundingClientRect();vt.top<window.innerHeight*.95&&vt.bottom>0?st.classList.add("section-revealed"):be.observe(st)}),()=>be.disconnect()},[]);const[yt,ut]=xe.useState("All");(o||[]).filter(pe=>yt==="All"||pe.scope===yt);const St=[{name:"TATA Motors",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 32 32",fill:"currentColor",children:p.jsx("path",{d:"M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z"})})},{name:"Barclays",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 2.5c-.8 0-1.5.7-1.5 1.5 0 .3.1.5.2.7L7 7.5l-4-1 2 4.5-3 2 4.5 1L7 19h10l.5-5 4.5-1-3-2 2-4.5-4 1-3.7-2.8c.1-.2.2-.4.2-.7 0-.8-.7-1.5-1.5-1.5zm0 4.5l2 2.5h-4l2-2.5zm-3 4h6l1.5 3h-9l1.5-3zm.5 4.5h5l.5 2h-6l.5-2z"})})},{name:"HDFC Life",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("rect",{x:"2.5",y:"2.5",width:"19",height:"19",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2.2"}),p.jsx("path",{d:"M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z"})]})},{name:"Cipla",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("circle",{cx:"12",cy:"12",r:"9.5",fill:"none",stroke:"currentColor",strokeWidth:"2"}),p.jsx("path",{d:"M12 6v12M6 12h12M8 8l8 8M8 16l8-8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})},{name:"Harvard Club",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 2L4 5v6c0 5.5 3.5 10.2 8 11 4.5-.8 8-5.5 8-11V5l-8-3zm-3 6h2v3h2V8h2v8h-2v-3h-2v3H9V8z"})})},{name:"IndiGo Airlines",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("circle",{cx:"5",cy:"16",r:"1.5"}),p.jsx("circle",{cx:"9",cy:"14",r:"1.5"}),p.jsx("circle",{cx:"13",cy:"12",r:"1.5"}),p.jsx("circle",{cx:"17",cy:"10",r:"1.5"}),p.jsx("circle",{cx:"21",cy:"8",r:"1.5"}),p.jsx("circle",{cx:"9",cy:"18",r:"1.5"}),p.jsx("circle",{cx:"13",cy:"16",r:"1.5"}),p.jsx("circle",{cx:"17",cy:"14",r:"1.5"}),p.jsx("circle",{cx:"13",cy:"20",r:"1.5"}),p.jsx("circle",{cx:"17",cy:"18",r:"1.5"})]})},{name:"HDFC ERGO",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("rect",{x:"2.5",y:"2.5",width:"19",height:"19",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2.2"}),p.jsx("path",{d:"M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z"})]})},{name:"Absa Bank",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("circle",{cx:"12",cy:"12",r:"9.5",fill:"none",stroke:"currentColor",strokeWidth:"2"}),p.jsx("text",{x:"12",y:"16",textAnchor:"middle",fontSize:"11",fontWeight:"800",fontFamily:"sans-serif",fill:"currentColor",children:"a"})]})},{name:"Ageas Federal",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 2l2.5 6.5L21 11l-5.5 4.5L17 22l-5-3.5L7 22l1.5-6.5L3 11l6.5-2.5L12 2z"})})},{name:"Burns & McDonnell",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[p.jsx("rect",{x:"2.5",y:"2.5",width:"19",height:"19",rx:"3"}),p.jsx("path",{d:"M7 7h4a2 2 0 010 4H7v6h5a2.5 2.5 0 000-5H7M15 7l2 5 2-5v10",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},{name:"Shardul Amarchand",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:p.jsx("path",{d:"M12 3v18M6 8h12M4 14l2-6 2 6a2 2 0 01-4 0zm12 0l2-6 2 6a2 2 0 01-4 0zM9 21h6",strokeLinecap:"round",strokeLinejoin:"round"})})},{name:"Tricolite",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:p.jsx("path",{d:"M12 2L2 20h20L12 2zm0 4.5L18.5 18H5.5L12 6.5zm-1 4.5v3.5h2V11h-2zm0 4.5v1.5h2v-1.5h-2z"})})},{name:"TATA AIG",monogram:p.jsx("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 32 32",fill:"currentColor",children:p.jsx("path",{d:"M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z"})})},{name:"GE Capital",monogram:p.jsxs("svg",{className:"w-5 h-5 md:w-6 md:h-6 flex-shrink-0",viewBox:"0 0 24 24",fill:"currentColor",children:[p.jsx("circle",{cx:"12",cy:"12",r:"9.5",fill:"none",stroke:"currentColor",strokeWidth:"2"}),p.jsx("path",{d:"M9.5 8.5C8 9.5 7.5 11 7.5 12.5c0 2 1.5 3.5 3.5 3.5 1.5 0 2.5-.8 3-1.8h-2.5v-1.2h4v.5c0 2.5-2 3.8-4.5 3.8-3 0-4.8-2-4.8-4.8 0-2.5 1.8-4.5 4.5-4.5 1.2 0 2.2.4 2.8 1l-.9.9c-.5-.5-1.1-.7-1.9-.7zm4 0h3.5v1.3H15v1.8h1.8v1.3H15v2h2.2v1.3h-3.7V8.5z"})]})}];return p.jsxs("div",{className:"w-full bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200 relative",children:[p.jsx("div",{className:`fixed right-4 sm:right-6 lg:right-8 bottom-8 z-40 hidden md:flex flex-col items-center gap-2 transition-all duration-300 pointer-events-auto select-none ${ot?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:p.jsxs("button",{type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 p-2 cursor-pointer bg-transparent border-none shadow-none ${Ue?"text-white hover:text-hq-yellow":"text-[#0A0A0A] hover:text-hq-yellow"}`,"aria-label":"Back to top",title:"Back to top",children:[p.jsxs("svg",{width:"14",height:"46",viewBox:"0 0 14 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform duration-300 group-hover:-translate-y-1.5 flex-shrink-0",children:[p.jsx("line",{x1:"7",y1:"4",x2:"7",y2:"44",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),p.jsx("polyline",{points:"2,11 7,3 12,11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),p.jsx("span",{className:"font-display uppercase text-[10px] tracking-[0.25em] font-bold select-none group-hover:text-hq-yellow transition-colors duration-300",style:{writingMode:"vertical-rl",transform:"rotate(180deg)"},children:"Back to top"})]})}),p.jsxs("header",{className:"relative w-full min-h-screen min-h-[820px] lg:h-[96vh] flex flex-col justify-end pb-12 overflow-hidden bg-[#111213]",children:[p.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[p.jsx("div",{className:"absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[900px] h-[450px] md:h-[650px] bg-hq-yellow/[0.08] rounded-full blur-[130px] animate-hero-glow"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#161719]/40 via-transparent to-[#0A0A0A]"})]}),p.jsxs("div",{className:"absolute inset-x-0 top-[41%] sm:top-[42%] md:top-[43%] -translate-y-1/2 z-10 px-6 sm:px-10 md:px-14 lg:px-20 pointer-events-none select-none max-w-[1550px] mx-auto animate-hero-name",children:[p.jsx("h1",{className:"sr-only",children:"Manny Anchan - The Happiness Samurai"}),p.jsxs("div",{className:"w-full flex justify-between items-center",children:[p.jsx("span",{className:"font-semibold tracking-tight select-none text-[#FFEFD6] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] inline-block translate-x-2 sm:translate-x-4 md:translate-x-7",style:{fontFamily:'"Bebas Neue", "Anton", "Oswald", sans-serif',fontSize:"clamp(4.2rem, 14vw, 14.5rem)",lineHeight:.88,transform:"scaleY(1.08)",transformOrigin:"bottom left",WebkitTextStroke:"0.4px #FFEFD6",letterSpacing:"0.02em"},children:"MANNY"}),p.jsx("span",{className:"font-semibold tracking-tight select-none text-[#FFEFD6] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] inline-block -translate-x-2 sm:-translate-x-4 md:-translate-x-7",style:{fontFamily:'"Bebas Neue", "Anton", "Oswald", sans-serif',fontSize:"clamp(4.2rem, 14vw, 14.5rem)",lineHeight:.88,transform:"scaleY(1.08)",transformOrigin:"bottom right",WebkitTextStroke:"0.4px #FFEFD6",letterSpacing:"0.02em"},children:"ANCHAN"})]})]}),p.jsx("div",{className:"absolute inset-x-0 bottom-0 z-20 flex justify-center pointer-events-none animate-hero-manny",children:p.jsx("img",{src:"/manny-cutout.png",alt:"Manny Anchan - The Happiness Samurai",className:"h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[86vh] max-h-[850px] w-auto object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700"})}),p.jsxs("div",{className:"relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8",children:[p.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 flex flex-col items-start text-left animate-hero-left",children:[p.jsx("h2",{className:"font-prata text-xl sm:text-2xl lg:text-[1.76rem] text-[#F3EFEA] font-normal leading-snug mb-3 tracking-wide",style:{fontFamily:'"Prata", serif'},children:"Feel Better. Work Better. Live Better."}),p.jsx("p",{className:"font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-sm",children:"Enterprise well-being and peak performance interventions designed to eradicate executive burnout, instill psychological safety, and drive measurable organizational happiness."}),p.jsxs(Ze,{to:"#key-themes-section",onClick:pe=>{var be;pe.preventDefault(),(be=document.getElementById("key-themes-section"))==null||be.scrollIntoView({behavior:"smooth"})},className:"group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display font-medium text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300",children:[p.jsx("span",{className:"absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"}),p.jsx("span",{className:"relative z-10",children:"Explore Interventions"}),p.jsxs("svg",{className:"w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1"}),p.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}),p.jsx("span",{className:"absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"})]})]}),p.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 flex flex-col items-start md:items-end text-left md:text-right animate-hero-right",children:[p.jsx("div",{className:"font-display text-white text-base sm:text-lg font-normal mb-2",children:"25+ Years Corporate Stewardship"}),p.jsx("p",{className:"font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-5 font-light max-w-xs",children:"Harvard & Columbia alum. Former executive at GE Capital, HDFC, Barclays & ABN AMRO. Trusted across 16 states & 9 countries."}),p.jsxs(Ze,{to:"#team-section",onClick:pe=>{var be;pe.preventDefault(),(be=document.getElementById("team-section"))==null||be.scrollIntoView({behavior:"smooth"})},className:"group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300",children:[p.jsx("span",{className:"absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"}),p.jsx("span",{className:"relative z-10",children:"Know more"}),p.jsxs("svg",{className:"w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[p.jsx("line",{x1:"0",y1:"5",x2:"20",y2:"5",stroke:"currentColor",strokeWidth:"1"}),p.jsx("polyline",{points:"15 1, 20 5, 15 9",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round"})]}),p.jsx("span",{className:"absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"})]})]})]})]}),p.jsxs("div",{className:"w-full bg-hq-yellow py-5 overflow-hidden relative shadow-inner text-[#0A0A0A] dark:text-[#0A0A0A]",children:[p.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hq-yellow to-transparent z-10 pointer-events-none"}),p.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hq-yellow to-transparent z-10 pointer-events-none"}),p.jsx("div",{className:"marquee-partners-track animate-marquee whitespace-nowrap inline-flex gap-10 md:gap-14 items-center px-4 select-none text-[#0A0A0A] dark:text-[#0A0A0A]",children:[...St,...St].map((pe,be)=>p.jsxs("div",{className:"inline-flex items-center gap-2.5 h-8 flex-shrink-0 group text-[#0A0A0A] dark:text-[#0A0A0A]",children:[p.jsx("span",{className:"flex items-center justify-center text-[#0A0A0A] dark:text-[#0A0A0A] group-hover:scale-110 transition-transform duration-200",children:pe.monogram}),p.jsx("span",{className:"font-display uppercase tracking-widest text-[#0A0A0A] dark:text-[#0A0A0A] font-bold text-xs sm:text-sm md:text-base leading-none whitespace-nowrap",children:pe.name}),p.jsx("span",{className:"marquee-partners-dot ml-8 md:ml-10 text-[#0A0A0A]/40 dark:text-[#0A0A0A]/40 font-light",children:"•"})]},be))})]}),p.jsx("section",{id:"reasons-section",className:"section-reveal py-20 lg:py-24 bg-hq-white dark:bg-[#07080B] border-b border-hq-black/10 dark:border-white/10 relative",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[p.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-0 pb-6 border-b border-hq-black/15 dark:border-white/15",children:[p.jsx("div",{className:"max-w-3xl",children:p.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-hq-black dark:text-white leading-[1.1]",children:"4 reason why Manny will make your Employee Productive"})}),p.jsx("div",{className:"lg:text-right",children:p.jsxs("p",{className:"font-serif italic text-2xl md:text-3xl text-hq-black/85 dark:text-white/85 leading-tight",children:['"Hands-on. Immersive. ',p.jsx("br",{className:"hidden lg:inline"}),'Experiential. Disciplined."']})})]}),p.jsx("div",{children:f.map((pe,be)=>p.jsxs("div",{className:"group py-6 md:py-7 border-b border-hq-black/15 dark:border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-16 hover:bg-hq-gray/40 dark:hover:bg-white/[0.02] px-4 md:px-8 -mx-4 md:-mx-8 transition-colors duration-300",children:[p.jsxs("div",{className:"flex items-start sm:items-center gap-6 md:gap-10 w-full lg:w-5/12",children:[p.jsxs("span",{className:"font-serif text-2xl sm:text-3xl md:text-4xl text-hq-black/25 dark:text-white/25 group-hover:text-hq-yellow font-normal transition-colors shrink-0",children:["0",be+1]}),p.jsx("div",{children:p.jsx("h3",{className:"font-display text-lg sm:text-xl md:text-2xl lg:text-[27px] tracking-tight font-semibold text-hq-black dark:text-white group-hover:translate-x-2 transition-transform duration-300",children:pe.title})})]}),p.jsx("div",{className:"w-full lg:w-6/12 font-body text-xs sm:text-sm md:text-[15px] text-hq-black/75 dark:text-white/70 font-light leading-relaxed",children:pe.desc}),p.jsxs("div",{className:"w-full lg:w-1/12 flex lg:justify-end text-xs font-mono uppercase text-hq-black/40 dark:text-white/40 group-hover:text-hq-black dark:group-hover:text-white font-semibold transition-colors",children:[p.jsx("span",{className:"hidden lg:inline-block group-hover:translate-x-1.5 transition-transform text-lg",children:p.jsx(Pn,{})}),p.jsxs("span",{className:"lg:hidden inline-flex items-center gap-1.5 text-[11px] text-hq-black/60 dark:text-white/60",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-hq-yellow inline-block"}),"Verified Metric"]})]})]},be))}),p.jsxs("div",{className:"pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-hq-black/50 dark:text-white/50",children:[p.jsx("span",{children:"Clinical & Corporate Productivity Benchmarks • Page 3 Profile Integration"}),p.jsxs(Ze,{to:"#worklife-section",onClick:pe=>{var be;pe.preventDefault(),(be=document.getElementById("worklife-section"))==null||be.scrollIntoView({behavior:"smooth"})},className:"font-display font-semibold uppercase tracking-wider text-hq-black dark:text-white hover:text-hq-yellow transition-colors flex items-center gap-1.5",children:[p.jsx("span",{children:"Explore The 5-Pillar Ethos Model"}),p.jsx(Pn,{})]})]})]})}),p.jsxs("section",{id:"worklife-section",className:"section-reveal relative bg-[#000000] text-hq-white min-h-screen min-h-[660px] lg:h-screen flex flex-col justify-between pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden border-b border-white/10 select-none",children:[p.jsx("div",{className:"absolute inset-0 pointer-events-none",children:p.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-hq-yellow/[0.08] rounded-full blur-[140px]"})}),p.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-10 pt-2 sm:pt-4",children:p.jsxs("div",{className:"max-w-3xl mx-auto",children:[p.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-semibold tracking-tight text-white mb-4 sm:mb-5",children:"BALANCE WITHIN WORKLIFE"}),p.jsx("p",{className:"font-body text-xs sm:text-sm md:text-base text-white/70 max-w-3xl mx-auto font-light leading-relaxed",children:"Perpetual employee evolution is a comprehensive notion that acknowledges the interrelation between various facets of an employee's life within a corporate setting. Here are pivotal elements contributing to employee well-being:"})]})}),p.jsxs("div",{className:"relative w-full max-w-7xl mx-auto px-6 md:px-12 aspect-[16/8] sm:aspect-[16/7.5] md:aspect-[16/7] flex items-end justify-center mt-auto overflow-hidden",children:[p.jsxs("svg",{viewBox:"0 0 1000 500",className:"absolute inset-0 w-full h-full overflow-visible select-none pointer-events-none",preserveAspectRatio:"xMidYMax meet",children:[p.jsxs("defs",{children:[p.jsxs("radialGradient",{id:"horizonGlow1",cx:"50%",cy:"100%",r:"90%",children:[p.jsx("stop",{offset:"0%",stopColor:"#E5A93C",stopOpacity:"0.35"}),p.jsx("stop",{offset:"40%",stopColor:"#9C731A",stopOpacity:"0.20"}),p.jsx("stop",{offset:"75%",stopColor:"#4A380A",stopOpacity:"0.08"}),p.jsx("stop",{offset:"100%",stopColor:"#000000",stopOpacity:"0"})]}),p.jsxs("radialGradient",{id:"horizonGlow2",cx:"50%",cy:"100%",r:"65%",children:[p.jsx("stop",{offset:"0%",stopColor:"#FFD15C",stopOpacity:"0.50"}),p.jsx("stop",{offset:"45%",stopColor:"#B3861E",stopOpacity:"0.26"}),p.jsx("stop",{offset:"85%",stopColor:"#4A380A",stopOpacity:"0.05"}),p.jsx("stop",{offset:"100%",stopColor:"#000000",stopOpacity:"0"})]}),p.jsxs("radialGradient",{id:"horizonCore",cx:"50%",cy:"100%",r:"42%",children:[p.jsx("stop",{offset:"0%",stopColor:"#FFC72C",stopOpacity:"0.75"}),p.jsx("stop",{offset:"60%",stopColor:"#B3861E",stopOpacity:"0.35"}),p.jsx("stop",{offset:"100%",stopColor:"#000000",stopOpacity:"0"})]}),p.jsxs("linearGradient",{id:"cleanArcShine",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[p.jsx("stop",{offset:"0%",stopColor:"#E5A93C",stopOpacity:"0.6"}),p.jsx("stop",{offset:"25%",stopColor:"#FFD15C",stopOpacity:"0.9"}),p.jsx("stop",{offset:"50%",stopColor:"#FFFFFF",stopOpacity:"1"}),p.jsx("stop",{offset:"75%",stopColor:"#FFD15C",stopOpacity:"0.9"}),p.jsx("stop",{offset:"100%",stopColor:"#E5A93C",stopOpacity:"0.6"})]})]}),p.jsx("path",{d:"M 40 500 A 460 410 0 0 1 960 500 Z",fill:"url(#horizonGlow1)"}),p.jsx("path",{d:"M 140 500 A 360 320 0 0 1 860 500 Z",fill:"url(#horizonGlow2)"}),p.jsx("path",{d:"M 260 500 A 240 200 0 0 1 740 500 Z",fill:"url(#horizonCore)"}),p.jsx("path",{d:"M 80 500 A 430 380 0 0 1 920 500",fill:"none",stroke:"rgba(255, 255, 255, 0.28)",strokeWidth:"1.75",strokeLinecap:"round"}),p.jsx("path",{d:"M 80 500 A 430 380 0 0 1 920 500",fill:"none",stroke:"url(#cleanArcShine)",strokeWidth:"2",strokeLinecap:"round",className:"animate-line-clean-shine"}),p.jsx("path",{d:"M 50 500 A 460 410 0 0 1 950 500",fill:"none",stroke:"rgba(229, 169, 60, 0.22)",strokeWidth:"1",strokeDasharray:"4 6"})]}),We.map(pe=>{const be=M===pe.id;return p.jsxs("div",{style:{left:pe.left,top:pe.top},className:"absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20",onMouseEnter:()=>T(pe.id),onClick:()=>T(pe.id),children:[p.jsx("span",{className:`font-display text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-2 sm:mb-3 transition-all duration-300 select-none whitespace-nowrap ${be?"text-hq-yellow scale-105 drop-shadow-[0_0_14px_rgba(255,199,44,0.7)] font-bold":"text-white/90 group-hover:text-hq-yellow"}`,children:pe.title}),p.jsxs("div",{className:`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-hq-yellow text-hq-black flex items-center justify-center transition-all duration-300 relative ${be?"scale-110 shadow-[0_0_35px_rgba(255,204,0,0.85)] ring-4 ring-hq-yellow/40":"shadow-[0_0_20px_rgba(255,204,0,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,204,0,0.6)]"}`,children:[Ge(pe.iconType),be&&p.jsx("span",{className:"absolute inset-0 rounded-full border-2 border-hq-yellow animate-ping opacity-30 pointer-events-none"})]})]},pe.id)}),p.jsx("div",{className:"absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-hq-yellow/60 to-transparent pointer-events-none"})]})]}),p.jsxs("section",{id:"key-themes-section",ref:C,className:"section-reveal py-12 lg:py-0 bg-white dark:bg-[#07080B] border-b border-hq-black/10 dark:border-white/10 relative overflow-hidden lg:h-screen lg:max-h-[950px] lg:min-h-[700px] flex items-center",children:[p.jsx("div",{className:"absolute inset-0 pointer-events-none hidden lg:flex items-center justify-center opacity-25 dark:opacity-20 z-0",children:p.jsxs("svg",{viewBox:"0 0 96 1762",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-full w-auto max-w-none text-hq-yellow/40 dark:text-hq-yellow/30",style:{maskImage:"linear-gradient(180deg, transparent 5%, #000 25%, #000 75%, transparent 95%)",WebkitMaskImage:"linear-gradient(180deg, transparent 5%, #000 25%, #000 75%, transparent 95%)"},children:[p.jsx("path",{d:"M95.5 1762V726.469C95.5 691.615 77.6743 659.182 48.25 640.5C18.8257 621.818 0.999998 589.385 1 554.531L1.00002 0",stroke:"currentColor",strokeWidth:"2",className:"text-hq-yellow blur-[2px]"}),p.jsx("path",{d:"M95.5 1762V726.469C95.5 691.615 77.6743 659.182 48.25 640.5C18.8257 621.818 0.999998 589.385 1 554.531L1.00002 0",stroke:"currentColor",strokeWidth:"1",className:"text-hq-black/15 dark:text-white/15"})]})}),p.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10",children:p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[p.jsx("div",{className:"lg:col-span-5",children:p.jsxs("div",{className:"space-y-6 sm:space-y-8",children:[p.jsxs("div",{className:"select-none",children:[p.jsxs("div",{className:"flex items-baseline gap-4 sm:gap-6",children:[p.jsx("span",{className:"font-display text-[100px] sm:text-[135px] lg:text-[155px] font-black leading-[0.8] tracking-tighter text-black dark:text-white drop-shadow-sm",children:"12"}),p.jsxs("div",{className:"flex flex-col justify-end pb-3",children:[p.jsx("span",{className:"font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black dark:text-white leading-none",children:"Key"}),p.jsx("span",{className:"font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-hq-yellow leading-none mt-1",children:"Theme"}),p.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.2em] text-hq-black/50 dark:text-white/50 mt-2 font-semibold",children:"Systemic Well-Being"})]})]}),p.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mt-4 max-w-md",children:"Through the seamless integration of our 12 Key Themes, we cultivate executive endurance, emotional equilibrium, and measurable enterprise thriving."})]}),p.jsx("div",{className:"pt-2",children:p.jsxs(Ze,{to:"#contact",onClick:pe=>{var be;pe.preventDefault(),(be=document.getElementById("contact"))==null||be.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-3 bg-hq-black text-white dark:bg-white dark:text-black dark:hover:bg-hq-yellow dark:hover:text-black font-display text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold shadow-lg group",children:[p.jsx("span",{children:"Book Modular Workshop Track"}),p.jsx(Pn,{className:"group-hover:translate-x-1"})]})})]})}),p.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-between",children:[p.jsxs("div",{className:"space-y-4 sm:space-y-6 transition-all duration-400 ease-out",children:[d[N*2]&&p.jsxs("div",{className:"relative py-5 sm:py-6 border-t border-hq-black/10 dark:border-white/10 group",children:[p.jsxs("div",{className:"flex items-start justify-between gap-4",children:[p.jsxs("div",{className:"flex items-center gap-3.5 sm:gap-4 flex-wrap",children:[p.jsxs("span",{className:"text-[2rem] font-bold text-hq-yellow shrink-0 leading-none",style:{fontFamily:'"Google Sans", "Product Sans", sans-serif'},children:[String(N*2+1).padStart(2,"0"),"."]}),p.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-semibold tracking-tight text-hq-black dark:text-white",children:d[N*2].title})]}),p.jsx("div",{className:"p-2 rounded-xl text-hq-black dark:text-white bg-hq-yellow/15 scale-110 shrink-0",children:x[d[N*2].id]||p.jsx(co,{className:"w-5 h-5 stroke-[1.8]"})})]}),p.jsxs("div",{className:"mt-3.5 max-w-2xl",children:[p.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed",children:d[N*2].desc}),p.jsx("div",{className:"mt-3.5",children:p.jsxs(Ze,{to:"#contact",onClick:pe=>{var be;pe.preventDefault(),(be=document.getElementById("contact"))==null||be.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-hq-black dark:text-white hover:text-hq-yellow transition-all group/btn",children:[p.jsx("span",{children:"Explore Intervention Track"}),p.jsx(Pn,{className:"text-hq-yellow group-hover/btn:translate-x-1"})]})})]})]}),d[N*2+1]&&p.jsxs("div",{className:"relative py-5 sm:py-6 border-t border-hq-black/10 dark:border-white/10 group",children:[p.jsxs("div",{className:"flex items-start justify-between gap-4",children:[p.jsxs("div",{className:"flex items-center gap-3.5 sm:gap-4 flex-wrap",children:[p.jsxs("span",{className:"text-[2rem] font-bold text-hq-yellow shrink-0 leading-none",style:{fontFamily:'"Google Sans", "Product Sans", sans-serif'},children:[String(N*2+2).padStart(2,"0"),"."]}),p.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-semibold tracking-tight text-hq-black/90 dark:text-white/90 group-hover:text-hq-black dark:group-hover:text-white transition-colors",children:d[N*2+1].title})]}),p.jsx("div",{className:"p-2 rounded-xl text-hq-black/40 dark:text-white/40 group-hover:text-hq-black dark:group-hover:text-white group-hover:bg-hq-yellow/15 transition-all shrink-0",children:x[d[N*2+1].id]||p.jsx(co,{className:"w-5 h-5 stroke-[1.8]"})})]}),p.jsxs("div",{className:"mt-3.5 max-w-2xl",children:[p.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed",children:d[N*2+1].desc}),p.jsx("div",{className:"mt-3.5",children:p.jsxs(Ze,{to:"#contact",onClick:pe=>{var be;pe.preventDefault(),(be=document.getElementById("contact"))==null||be.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-hq-black dark:text-white hover:text-hq-yellow transition-all group/btn",children:[p.jsx("span",{children:"Explore Intervention Track"}),p.jsx(Pn,{className:"text-hq-yellow group-hover/btn:translate-x-1"})]})})]})]})]},N),p.jsxs("div",{className:"mt-6 pt-5 border-t border-hq-black/10 dark:border-white/10 flex items-center justify-between",children:[p.jsxs("button",{type:"button",onClick:()=>B(pe=>Math.max(pe-1,0)),disabled:N===0,className:`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold transition-all group py-2 select-none ${N===0?"opacity-20 cursor-not-allowed text-hq-black/40 dark:text-white/40":"text-hq-black dark:text-white hover:text-hq-yellow cursor-pointer"}`,"aria-label":"Previous 2 Themes",children:[p.jsx(Pn,{direction:"left",className:"group-hover:-translate-x-1"}),p.jsx("span",{children:"Prev"})]}),p.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs select-none",children:[p.jsxs("span",{className:"uppercase tracking-[0.2em] font-bold text-hq-yellow",children:[String(N*2+1).padStart(2,"0"),"–",String(N*2+2).padStart(2,"0")]}),p.jsx("span",{className:"text-hq-black/40 dark:text-white/40",children:"/ 12"})]}),p.jsxs("button",{type:"button",onClick:()=>B(pe=>Math.min(pe+1,5)),disabled:N===5,className:`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold transition-all group py-2 select-none ${N===5?"opacity-20 cursor-not-allowed text-hq-black/40 dark:text-white/40":"text-hq-black dark:text-white hover:text-hq-yellow cursor-pointer"}`,"aria-label":"Next 2 Themes",children:[p.jsx("span",{children:"Next"}),p.jsx(Pn,{direction:"right",className:"group-hover:translate-x-1"})]})]})]})]})})]}),p.jsxs("section",{id:"team-section",className:"section-reveal py-24 bg-[#0A0A0A] text-hq-white border-b border-white/10 overflow-hidden relative",children:[p.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6",children:[p.jsxs("div",{children:[p.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white mb-2 leading-[1.1]",children:["Our ",p.jsx("span",{className:"text-hq-yellow",children:"Team"})]}),p.jsx("p",{className:"font-body text-[16px] text-white/70 font-light max-w-xl",children:"World champions, Olympic medalists, seasoned business leaders, and renowned wellness authorities collaborating to cultivate enterprise potential."})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("button",{onClick:()=>Se("left"),className:"p-3 rounded-full border border-white/20 text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-all duration-200","aria-label":"Scroll left",children:p.jsx(Pn,{direction:"left"})}),p.jsx("button",{onClick:()=>Se("right"),className:"p-3 rounded-full border border-white/20 text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-all duration-200","aria-label":"Scroll right",children:p.jsx(Pn,{direction:"right"})}),p.jsx(Ze,{to:"#team-section",className:"ml-2 font-display text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-hq-yellow transition-colors underline underline-offset-4",children:"VIEW ALL"})]})]}),p.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:p.jsx("div",{ref:V,onMouseEnter:()=>D(!0),onMouseLeave:se,onMouseDown:z,onMouseMove:H,onMouseUp:L,onTouchStart:()=>D(!0),onTouchEnd:()=>D(!1),className:`flex gap-8 sm:gap-12 md:gap-16 overflow-x-auto no-scrollbar py-4 select-none ${j?"cursor-grabbing scroll-auto":"cursor-grab scroll-smooth"}`,style:{userSelect:"none"},children:Oe.map(pe=>p.jsxs("div",{className:"flex items-center gap-5 sm:gap-6 flex-shrink-0 group cursor-pointer select-none",onClick:()=>{Q||F(pe)},children:[p.jsx("div",{className:"w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[3px] bg-neutral-900 overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-hq-yellow transition-colors pointer-events-none",children:p.jsx("img",{src:pe.image,alt:pe.name,draggable:"false",className:"w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 pointer-events-none select-none rounded-[3px]"})}),p.jsxs("div",{className:"flex flex-col justify-center text-left max-w-[220px] sm:max-w-[260px] md:max-w-[290px] select-none",children:[p.jsx("h3",{className:"font-display text-lg sm:text-xl md:text-2xl font-medium font-[500] uppercase tracking-tight text-white mb-1 group-hover:text-hq-yellow transition-colors leading-tight",children:pe.name}),p.jsx("div",{className:"text-[16px] font-body text-white/70 font-light leading-snug mb-1 line-clamp-2",children:pe.title}),p.jsx("div",{className:"text-[10px] sm:text-[11px] font-mono text-hq-yellow uppercase tracking-wider mb-3 line-clamp-1",children:pe.areaExpertise||pe.category}),p.jsxs("button",{type:"button",onClick:be=>{be.stopPropagation(),Q||F(pe)},className:"inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-bold text-white group-hover:text-hq-yellow transition-colors pb-0.5 border-b border-white group-hover:border-hq-yellow w-fit mt-1",children:[p.jsx("span",{children:"KNOW MORE"}),p.jsx(Pn,{className:"group-hover:translate-x-1"})]})]})]},pe.id))})})]}),p.jsx("section",{id:"benefits-section",className:"section-reveal py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#0D0E12] border-b border-hq-black/10 dark:border-white/10 transition-colors",children:p.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center",children:[p.jsxs("div",{className:"lg:col-span-5 flex flex-col items-start",children:[p.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-hq-black dark:text-white leading-[1.1] mb-4",children:["Benefits of ",p.jsx("br",{className:"hidden sm:inline"}),p.jsx("span",{className:"text-hq-yellow",children:"Engagement"})]}),p.jsx("p",{className:"font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mb-8 max-w-md",children:"The compounding power of immersive, experiential learning."}),p.jsx("div",{children:p.jsxs(Ze,{to:"#key-themes-section",className:"inline-flex items-center gap-3 bg-[#1E2024] text-white hover:bg-hq-yellow hover:text-hq-black dark:bg-white dark:text-black dark:hover:bg-hq-yellow dark:hover:text-black font-display text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition-all shadow-md group",children:[p.jsx("span",{children:"Explore Interventions"}),p.jsx(Pn,{className:"group-hover:translate-x-1"})]})})]}),p.jsx("div",{className:"lg:col-span-7",children:p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 sm:gap-y-6",children:[p.jsx("div",{className:"space-y-4 sm:space-y-5",children:m.slice(0,5).map((pe,be)=>p.jsxs("div",{className:"group flex items-center gap-3.5 cursor-default select-none py-1 sm:py-1.5",children:[p.jsx("span",{className:"w-[20px] h-[1.5px] bg-hq-yellow shrink-0 group-hover:w-[26px] transition-all duration-200 rounded-full"}),p.jsx("span",{className:"font-body text-[19.2px] font-[400] text-hq-black/85 dark:text-white/85 group-hover:text-hq-black dark:group-hover:text-white transition-colors leading-normal",children:pe})]},be))}),p.jsx("div",{className:"space-y-4 sm:space-y-5",children:m.slice(5,10).map((pe,be)=>p.jsxs("div",{className:"group flex items-center gap-3.5 cursor-default select-none py-1 sm:py-1.5",children:[p.jsx("span",{className:"w-[20px] h-[1.5px] bg-hq-yellow shrink-0 group-hover:w-[26px] transition-all duration-200 rounded-full"}),p.jsx("span",{className:"font-body text-[19.2px] font-[400] text-hq-black/85 dark:text-white/85 group-hover:text-hq-black dark:group-hover:text-white transition-colors leading-normal",children:pe})]},be))})]})})]})})}),p.jsx("section",{id:"footprint-section",className:"section-reveal bg-[#07080B] text-white overflow-hidden relative lg:h-screen lg:min-h-[700px] lg:max-h-[950px] flex items-center py-16 lg:py-0 border-b border-white/10",children:p.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10",children:p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[p.jsxs("div",{className:"lg:col-span-5 flex flex-col items-start space-y-6",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-3 block",children:"Corporate Interactions"}),p.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]",children:["Global ",p.jsx("br",{className:"hidden sm:inline"}),p.jsx("span",{className:"text-hq-yellow",children:"Footprint"})]})]}),p.jsx("p",{className:"font-body text-[16px] font-[400] text-white/70 max-w-md leading-relaxed",children:"Nationwide presence across 16 Indian states and international executive engagements spanning 9 countries."}),p.jsxs("div",{className:"grid grid-cols-2 gap-4 pt-2 w-full max-w-xs",children:[p.jsxs("div",{className:"border border-white/10 rounded-2xl p-4 bg-white/[0.02]",children:[p.jsx("div",{className:"font-display text-2xl sm:text-3xl font-bold text-white mb-0.5",children:"16"}),p.jsx("div",{className:"font-mono text-[11px] uppercase tracking-wider text-hq-yellow font-medium",children:"Indian States"})]}),p.jsxs("div",{className:"border border-white/10 rounded-2xl p-4 bg-white/[0.02]",children:[p.jsx("div",{className:"font-display text-2xl sm:text-3xl font-bold text-white mb-0.5",children:"9+"}),p.jsx("div",{className:"font-mono text-[11px] uppercase tracking-wider text-hq-yellow font-medium",children:"Global Hubs"})]})]}),p.jsx("div",{className:"pt-2",children:p.jsxs(Ze,{to:"#key-themes-section",className:"inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-semibold text-white hover:text-hq-yellow transition-colors group",children:[p.jsx("span",{children:"Explore Nationwide Summits"}),p.jsx(Pn,{className:"text-hq-yellow group-hover:translate-x-1"})]})})]}),p.jsx("div",{className:"lg:col-span-7 flex justify-center lg:justify-end items-center",children:p.jsx("div",{className:"w-full max-w-[640px]",children:p.jsx(l2,{heightClass:"h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[600px]"})})})]})})}),p.jsx("section",{id:"podcast",className:"section-reveal py-20 lg:py-24 bg-[#FAF7F2] dark:bg-[#0D0E12] text-hq-black dark:text-white border-b border-hq-black/10 dark:border-white/10 transition-colors",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-2 block",children:"Stories, Mindset and Insights"}),p.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] tracking-tight font-bold text-hq-black dark:text-white leading-[1.1]",children:["HQX ",p.jsx("span",{className:"text-hq-yellow",children:"Podcast"})]})]}),p.jsxs(Ze,{to:"#podcast",className:"inline-flex items-center gap-2.5 text-xs font-display tracking-widest uppercase text-hq-black dark:text-white hover:text-hq-yellow dark:hover:text-hq-yellow font-semibold group",children:[p.jsx("span",{children:"View All 10 Episodes & Channels"}),p.jsx(Pn,{className:"text-hq-yellow group-hover:translate-x-1"})]})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start",children:[p.jsxs("div",{className:"lg:col-span-7 flex flex-col space-y-4",children:[p.jsx("div",{className:"relative aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-hq-black/15 dark:border-white/15 group",children:_?p.jsx("iframe",{className:"w-full h-full",src:`https://www.youtube.com/embed/${_.youtubeId}?autoplay=0&rel=0`,title:_.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},_.id):null}),_&&p.jsxs("div",{className:"p-6 bg-white dark:bg-white/[0.03] border border-hq-black/10 dark:border-white/10 rounded-2xl shadow-sm transition-all duration-300",children:[p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 mb-2",children:[p.jsxs("span",{className:"inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-hq-yellow font-bold bg-hq-black px-2.5 py-1 rounded",children:[p.jsx(Ey,{className:"w-3 h-3 text-hq-yellow"}),p.jsx("span",{children:_.category||"Featured Episode"})]}),p.jsxs("div",{className:"flex items-center gap-3 text-xs text-hq-black/60 dark:text-white/60",children:[p.jsxs("span",{className:"flex items-center gap-1 font-mono",children:[p.jsx(dy,{className:"w-3.5 h-3.5 text-hq-yellow"})," ",_.date]}),p.jsxs("span",{className:"flex items-center gap-1 font-mono",children:[p.jsx(fy,{className:"w-3.5 h-3.5 text-hq-yellow"})," ",_.duration]})]})]}),p.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-bold text-hq-black dark:text-white mb-1.5 leading-snug",children:_.title}),p.jsxs("div",{className:"text-sm font-semibold text-hq-yellow mb-3 font-display",children:["Guest: ",_.guest]}),p.jsx("p",{className:"font-body text-[15px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mb-4",children:_.summary}),p.jsx("div",{className:"flex items-center gap-4 pt-1",children:p.jsxs(Ze,{to:"#podcast",className:"inline-flex items-center gap-2 bg-hq-black text-white hover:bg-hq-yellow hover:text-hq-black dark:bg-white dark:text-black dark:hover:bg-hq-yellow text-xs font-display uppercase tracking-widest font-semibold px-6 py-2.5 rounded-full transition-all group/btn shadow",children:[p.jsx("span",{children:"Full Episode Notes"}),p.jsx(Pn,{className:"group-hover/btn:translate-x-1"})]})})]})]}),p.jsxs("div",{className:"lg:col-span-5 flex flex-col space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-hq-black/10 dark:border-white/10",children:[p.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-hq-black/60 dark:text-white/60 font-semibold",children:"Select Episode Preview"}),p.jsxs("span",{className:"text-xs font-mono text-hq-yellow font-bold",children:[r.length," Episodes"]})]}),p.jsx("div",{className:"space-y-3 max-h-[580px] overflow-y-auto pr-1 select-none no-scrollbar",children:r.map(pe=>{const be=(_==null?void 0:_.id)===pe.id;return p.jsxs("div",{onClick:()=>S(pe),className:`p-3 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all duration-300 group ${be?"bg-hq-yellow/20 dark:bg-hq-yellow/15 border-hq-yellow ring-2 ring-hq-yellow/60 shadow-lg shadow-hq-yellow/15 scale-[1.02]":"bg-white dark:bg-white/[0.03] border-hq-black/10 dark:border-white/10 hover:border-hq-yellow hover:bg-hq-yellow/[0.06]"}`,children:[p.jsxs("div",{className:`relative w-28 sm:w-32 aspect-video bg-black rounded-xl overflow-hidden shrink-0 shadow-sm border transition-all ${be?"border-hq-yellow ring-2 ring-hq-yellow/50":"border-black/10"}`,children:[p.jsx("img",{src:`https://img.youtube.com/vi/${pe.youtubeId}/mqdefault.jpg`,alt:pe.guest,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"}),p.jsx("div",{className:"absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center",children:p.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${be?"bg-hq-yellow text-hq-black scale-110":"bg-black/70 text-white group-hover:bg-hq-yellow group-hover:text-hq-black"}`,children:p.jsx(My,{className:"w-3.5 h-3.5 fill-current ml-0.5"})})}),p.jsx("span",{className:"absolute bottom-1 right-1 text-[9px] bg-black/80 text-white px-1.5 py-0.5 rounded font-mono",children:pe.duration})]}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("div",{className:"text-[10px] uppercase tracking-wider text-hq-yellow font-bold truncate mb-0.5",children:pe.category||pe.publication}),p.jsx("h4",{className:`font-display text-sm sm:text-base font-bold truncate leading-tight transition-colors ${be?"text-hq-yellow font-extrabold":"text-hq-black dark:text-white group-hover:text-hq-yellow"}`,children:pe.guest}),p.jsx("p",{className:"text-xs text-hq-black/60 dark:text-white/60 line-clamp-1 font-body mt-0.5",children:pe.title}),be&&p.jsx("span",{className:"inline-block mt-1 text-[9px] font-mono uppercase tracking-wider font-bold text-hq-yellow",children:"● Now Playing on Left"})]})]},pe.id)})})]})]})]})}),p.jsxs("section",{id:"books",className:"section-reveal py-24 bg-[#0A0A0A] text-white border-b border-white/10 relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 pointer-events-none",children:p.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-hq-yellow/[0.03] rounded-full blur-[140px]"})}),p.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 relative z-10",children:[p.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b border-white/10",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-3",children:"6 Seminal Publications • 2020 to 2025"}),p.jsxs("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]",children:["Books on ",p.jsx("span",{className:"text-hq-yellow",children:"Well-Being & Happiness"})]}),p.jsx("p",{className:"font-body text-sm sm:text-base text-white/70 font-light max-w-xl mt-2",children:"From Happiness Samurai (2020) to Happiness Habits (2025) — practical behavioral frameworks for sustained enterprise performance and personal thriving."})]}),p.jsx("div",{className:"flex items-center gap-4 shrink-0",children:p.jsxs(Ze,{to:"#books",className:"inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-hq-yellow transition-colors group/nav",children:[p.jsx("span",{children:"Explore All Books"}),p.jsx(Pn,{className:"group-hover/nav:translate-x-1"})]})})]}),p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16",children:t.map(pe=>{const be=pe.year==="2025",st={"Happiness Samurai":"/books/4.jpg","Happiness Memoir":"/books/2.jpg","Happiness Conversations":"/books/5.jpg","Happiness & Money":"/books/3.jpg","Happiness Decoded":"/books/1.jpg","Happiness Habits":"/books/6.jpg",2020:"/books/4.jpg",2021:"/books/2.jpg",2022:"/books/5.jpg",2023:"/books/3.jpg",2024:"/books/1.jpg",2025:"/books/6.jpg"},vt=st[pe.title]||st[pe.year]||pe.cover||"/books/1.jpg";return p.jsxs("div",{className:`p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl ${be?"bg-[#15161A] text-white border-hq-yellow/60 shadow-xl ring-1 ring-hq-yellow/50":"bg-[#121316] hover:bg-[#181920] text-white border-white/10 hover:border-hq-yellow/50 shadow-md"}`,children:[p.jsxs("div",{children:[p.jsxs("div",{className:"relative aspect-[3/4] w-full mb-3 rounded-xl overflow-hidden shadow-md",children:[p.jsx("img",{src:vt,alt:pe.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",loading:"lazy"}),p.jsx("span",{className:`absolute top-2 left-2 text-[10px] sm:text-[11px] font-display font-bold px-2.5 py-0.5 rounded-full shadow-md ${be?"bg-hq-yellow text-hq-black":"bg-black/75 backdrop-blur-sm text-hq-yellow border border-hq-yellow/30"}`,children:pe.year})]}),p.jsx("h4",{className:"font-display text-sm sm:text-base font-bold leading-tight mb-1 text-white group-hover:text-hq-yellow transition-colors line-clamp-1",children:pe.title}),p.jsx("p",{className:"font-body text-[11px] font-light leading-relaxed mb-3 line-clamp-2 text-white/60 group-hover:text-white/80 transition-colors",children:pe.subtitle})]}),p.jsxs(Ze,{to:"#books",className:"text-[10px] sm:text-[11px] font-display uppercase font-bold tracking-wider pt-2 border-t border-white/10 inline-flex items-center gap-2 group/bk text-white/70 group-hover:text-hq-yellow transition-colors",children:[p.jsx("span",{children:"View Details"}),p.jsx(Pn,{className:"group-hover/bk:translate-x-1"})]})]},pe.id)})}),p.jsxs("div",{className:"max-w-3xl mx-auto bg-gradient-to-br from-[#141416] to-[#0A0A0C] text-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center relative overflow-hidden group hover:border-hq-yellow/40 transition-colors",children:[p.jsx("div",{className:"absolute inset-0 bg-radial-gradient from-hq-yellow/[0.08] via-transparent to-transparent opacity-60 pointer-events-none"}),p.jsx(wy,{className:"w-10 h-10 mx-auto mb-4 stroke-1 text-hq-yellow opacity-80"}),p.jsx("blockquote",{className:"font-serif italic text-2xl md:text-3xl font-semibold leading-snug text-white/95",children:'"Defining Book of The Moment. A Must Read!"'}),p.jsx("div",{className:"font-display uppercase tracking-widest text-xs mt-4 font-bold text-hq-yellow",children:"— John Abraham, Celebrated Actor & Youth Fitness Icon"})]})]})]}),I&&p.jsx("div",{className:"fixed inset-0 z-50 bg-hq-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6",onClick:()=>F(null),children:p.jsxs("div",{className:"bg-white text-slate-900 max-w-2xl w-full p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200",onClick:pe=>pe.stopPropagation(),children:[p.jsx("button",{onClick:()=>F(null),className:"absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors","aria-label":"Close modal",children:p.jsx(xg,{className:"w-6 h-6"})}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 items-start",children:[p.jsx("div",{className:"relative w-32 sm:w-40 aspect-square rounded-[3px] overflow-hidden bg-slate-100 flex-shrink-0 shadow-md border border-slate-200",children:p.jsx("img",{src:I.image,alt:I.name,className:"w-full h-full object-cover object-center rounded-[3px]"})}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex flex-wrap gap-2 mb-2",children:[p.jsx("span",{className:"text-xs font-bold bg-[#141B2D] text-white px-3 py-1 rounded-full shadow-sm",children:I.category}),I.areaExpertise&&p.jsx("span",{className:"text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold",children:I.areaExpertise})]}),p.jsx("h3",{className:"font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#141B2D] mb-1",children:I.name}),p.jsx("div",{className:"text-xs font-mono text-slate-500 mb-4 leading-relaxed",children:I.title}),p.jsx("p",{className:"font-body text-sm text-slate-700 font-normal leading-relaxed mb-6",children:I.bio}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsx(Ze,{to:"#contact",onClick:()=>{F(null);const pe=document.getElementById("contact");pe&&pe.scrollIntoView({behavior:"smooth"})},className:"bg-[#141B2D] text-white hover:bg-amber-500 hover:text-black text-xs font-display uppercase tracking-widest px-5 py-2.5 font-bold rounded-full transition-colors shadow-sm",children:"Request Advisory Session"}),p.jsx(Ze,{to:"#team-section",onClick:()=>{F(null);const pe=document.getElementById("team-section");pe&&pe.scrollIntoView({behavior:"smooth"})},className:"border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-display uppercase tracking-widest px-5 py-2.5 font-bold rounded-full transition-colors",children:"View Faculty Profile"})]})]})]})]})})]})}function c2(){const{pathname:s,hash:e}=fa();return xe.useEffect(()=>{e||window.scrollTo(0,0)},[s,e]),null}function u2(){return p.jsx(iy,{children:p.jsx(ny,{children:p.jsxs(W_,{children:[p.jsx(c2,{}),p.jsxs("div",{className:"flex flex-col min-h-screen bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200",children:[p.jsx(Ry,{}),p.jsx("main",{className:"flex-1",children:p.jsxs(F_,{children:[p.jsx(Od,{path:"/",element:p.jsx(Y0,{})}),p.jsx(Od,{path:"*",element:p.jsx(Y0,{})})]})}),p.jsx(Ly,{})]})]})})})}qv.createRoot(document.getElementById("root")).render(p.jsx($0.StrictMode,{children:p.jsx(u2,{})}));
