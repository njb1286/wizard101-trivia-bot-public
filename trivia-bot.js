(function(W){typeof define=="function"&&define.amd?define(W):W()})(function(){"use strict";var xs=Object.defineProperty;var Ss=(W,p,I)=>p in W?xs(W,p,{enumerable:!0,configurable:!0,writable:!0,value:I}):W[p]=I;var d=(W,p,I)=>(Ss(W,typeof p!="symbol"?p+"":p,I),I);const W=(e,t)=>e===t,p=Symbol("solid-proxy"),I=Symbol("solid-track"),ne={equals:W};let He=Ke;const M=1,se=2,Ge={owned:null,cleanups:null,context:null,owner:null};var w=null;let ve=null,yt=null,m=null,k=null,E=null,oe=0;function bt(e,t){const n=m,s=w,o=e.length===0,i=t===void 0?s:t,r=o?Ge:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=o?e:()=>e(()=>B(()=>le(r)));w=r,m=null;try{return R(a,!0)}finally{m=n,w=s}}function ie(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),Ue(n,o));return[Re.bind(n),s]}function A(e,t,n){const s=xe(e,t,!1,M);Y(s)}function G(e,t,n){He=At;const s=xe(e,t,!1,M);s.user=!0,E?E.push(s):Y(s)}function C(e,t,n){n=n?Object.assign({},ne,n):ne;const s=xe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,Y(s),Re.bind(s)}function qt(e){return R(e,!1)}function B(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function ke(){return m}function vt(e,t){const n=Symbol("context");return{id:n,Provider:Wt(n),defaultValue:e}}function kt(e){return w&&w.context&&w.context[e.id]!==void 0?w.context[e.id]:e.defaultValue}function xt(e){const t=C(e),n=C(()=>Se(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Re(){if(this.sources&&this.state)if(this.state===M)Y(this);else{const e=k;k=null,R(()=>ae(this),!1),k=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Ue(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&R(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],r=ve&&ve.running;r&&ve.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?k.push(i):E.push(i),i.observers&&Ye(i)),r||(i.state=M)}if(k.length>1e6)throw k=[],new Error},!1)),t}function Y(e){if(!e.fn)return;le(e);const t=oe;St(e,e.value,t)}function St(e,t,n){let s;const o=w,i=m;m=w=e;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(le),e.owned=null),e.updatedAt=n+1,Qe(r)}finally{m=i,w=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ue(e,s):e.value=s,e.updatedAt=n)}function xe(e,t,n,s=M,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==Ge&&(w.owned?w.owned.push(i):w.owned=[i]),i}function re(e){if(e.state===0)return;if(e.state===se)return ae(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<oe);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===M)Y(e);else if(e.state===se){const s=k;k=null,R(()=>ae(e,t[0]),!1),k=s}}function R(e,t){if(k)return e();let n=!1;t||(k=[]),E?n=!0:E=[],oe++;try{const s=e();return _t(n),s}catch(s){n||(E=null),k=null,Qe(s)}}function _t(e){if(k&&(Ke(k),k=null),e)return;const t=E;E=null,t.length&&R(()=>He(t),!1)}function Ke(e){for(let t=0;t<e.length;t++)re(e[t])}function At(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:re(s)}for(t=0;t<n;t++)re(e[t])}function ae(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===M?s!==t&&(!s.updatedAt||s.updatedAt<oe)&&re(s):o===se&&ae(s,t)}}}function Ye(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?k.push(n):E.push(n),n.observers&&Ye(n))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),r=n.observerSlots.pop();s<o.length&&(i.sourceSlots[r]=s,o[s]=i,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ct(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Qe(e,t=w){throw Ct(e)}function Se(e){if(typeof e=="function"&&!e.length)return Se(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Se(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Wt(e,t){return function(s){let o;return A(()=>o=B(()=>(w.context={...w.context,[e]:s.value},xt(()=>s.children))),void 0),o}}function f(e,t){return B(()=>e(t||{}))}function ce(){return!0}const _e={get(e,t,n){return t===p?n:e.get(t)},has(e,t){return t===p?!0:e.has(t)},set:ce,deleteProperty:ce,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ce,deleteProperty:ce}},ownKeys(e){return e.keys()}};function Ae(e){return(e=typeof e=="function"?e():e)?e:{}}function Tt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ce(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&p in a,e[r]=typeof a=="function"?(t=!0,C(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const l=Ae(e[a])[r];if(l!==void 0)return l}},has(r){for(let a=e.length-1;a>=0;a--)if(r in Ae(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(Ae(e[a])));return[...new Set(r)]}},_e);const n={},s=Object.create(null);for(let r=e.length-1;r>=0;r--){const a=e[r];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let h=l.length-1;h>=0;h--){const u=l[h];if(u==="__proto__"||u==="constructor")continue;const c=Object.getOwnPropertyDescriptor(a,u);if(!s[u])s[u]=c.get?{enumerable:!0,configurable:!0,get:Tt.bind(n[u]=[c.get.bind(a)])}:c.value!==void 0?c:void 0;else{const g=n[u];g&&(c.get?g.push(c.get.bind(a)):c.value!==void 0&&g.push(()=>c.value))}}}const o={},i=Object.keys(s);for(let r=i.length-1;r>=0;r--){const a=i[r],l=s[a];l&&l.get?Object.defineProperty(o,a,l):o[a]=l?l.value:void 0}return o}function Je(e,...t){if(p in e){const o=new Set(t.length>1?t.flat():t[0]),i=t.map(r=>new Proxy({get(a){return r.includes(a)?e[a]:void 0},has(a){return r.includes(a)&&a in e},keys(){return r.filter(a=>a in e)}},_e));return i.push(new Proxy({get(r){return o.has(r)?void 0:e[r]},has(r){return o.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!o.has(r))}},_e)),i}const n={},s=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,o),r=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let a=!1,l=0;for(const h of t)h.includes(o)&&(a=!0,r?s[l][o]=i.value:Object.defineProperty(s[l],o,i)),++l;a||(r?n[o]=i.value:Object.defineProperty(n,o,i))}return[...s,n]}const Et=e=>`Stale read from <${e}>.`;function We(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return C(()=>{const s=n();if(s){const o=e.children;return typeof o=="function"&&o.length>0?B(()=>o(t?s:()=>{if(!B(n))throw Et("Show");return e.when})):o}return e.fallback},void 0,void 0)}const Bt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Pt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Bt]),$t=new Set(["innerHTML","textContent","innerText","children"]),zt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),It=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Mt(e,t){const n=It[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),jt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Nt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Lt(e,t,n){let s=n.length,o=t.length,i=s,r=0,a=0,l=t[o-1].nextSibling,h=null;for(;r<o||a<i;){if(t[r]===n[a]){r++,a++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===r){const u=i<s?a?n[a-1].nextSibling:n[i-a]:l;for(;a<i;)e.insertBefore(n[a++],u)}else if(i===a)for(;r<o;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[i-1]&&n[a]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[a++],t[r++].nextSibling),e.insertBefore(n[--i],u),t[o]=n[i]}else{if(!h){h=new Map;let c=a;for(;c<i;)h.set(n[c],c++)}const u=h.get(t[r]);if(u!=null)if(a<u&&u<i){let c=r,g=1,H;for(;++c<o&&c<i&&!((H=h.get(t[c]))==null||H!==u+g);)g++;if(g>u-a){const Ve=t[r];for(;a<u;)e.insertBefore(n[a++],Ve)}else e.replaceChild(n[a++],t[r++])}else r++;else t[r++].remove()}}}const Xe="_$DX_DELEGATE";function Te(e,t,n,s={}){let o;return bt(i=>{o=i,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function y(e,t,n){let s;const o=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Ee(e,t=window.document){const n=t[Xe]||(t[Xe]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Ut))}}function x(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Dt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ze(e,t){t==null?e.removeAttribute("class"):e.className=t}function Be(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function Ft(e,t,n={}){const s=Object.keys(t||{}),o=Object.keys(n);let i,r;for(i=0,r=o.length;i<r;i++){const a=o[i];!a||a==="undefined"||t[a]||(tt(e,a,!1),delete n[a])}for(i=0,r=s.length;i<r;i++){const a=s[i],l=!!t[a];!a||a==="undefined"||n[a]===l||!l||(tt(e,a,!0),n[a]=l)}return n}function Vt(e,t,n){if(!t)return n?x(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(s.setProperty(i,o),n[i]=o);return n}function et(e,t={},n,s){const o={};return A(()=>o.children=Q(e,t.children,o.children)),A(()=>typeof t.ref=="function"?Ht(t.ref,e):t.ref=e),A(()=>Gt(e,t,n,!0,o,!0)),o}function Ht(e,t,n){return B(()=>e(t,n))}function _(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Q(e,t,s,n);A(o=>Q(e,t(),o,n),s)}function Gt(e,t,n,s,o={},i=!1){t||(t={});for(const r in o)if(!(r in t)){if(r==="children")continue;o[r]=nt(e,r,null,o[r],n,i)}for(const r in t){if(r==="children")continue;const a=t[r];o[r]=nt(e,r,a,o[r],n,i)}}function Rt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function tt(e,t,n){const s=t.trim().split(/\s+/);for(let o=0,i=s.length;o<i;o++)e.classList.toggle(s[o],n)}function nt(e,t,n,s,o,i){let r,a,l,h,u;if(t==="style")return Vt(e,n,s);if(t==="classList")return Ft(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),g=Ot.has(c);if(!g&&s){const H=Array.isArray(s)?s[0]:s;e.removeEventListener(c,H)}(g||n)&&(Be(e,c,n,g),g&&Ee([c]))}else if(t.slice(0,5)==="attr:")x(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(l=$t.has(t))||!o&&((h=Mt(t,e.tagName))||(a=Pt.has(t)))||(r=e.nodeName.includes("-")))u&&(t=t.slice(5),a=!0),t==="class"||t==="className"?Ze(e,n):r&&!a&&!l?e[Rt(t)]=n:e[h||t]=n;else{const c=o&&t.indexOf(":")>-1&&Nt[t.split(":")[0]];c?Dt(e,c,t,n):x(e,zt[t]||t,n)}return n}function Ut(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),r){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=U(e,n,s,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=U(e,n,s);else{if(i==="function")return A(()=>{let a=t();for(;typeof a=="function";)a=a();n=Q(e,a,n,s)}),()=>n;if(Array.isArray(t)){const a=[],l=n&&Array.isArray(n);if(Pe(a,t,n,o))return A(()=>n=Q(e,a,n,s,!0)),()=>n;if(a.length===0){if(n=U(e,n,s),r)return n}else l?n.length===0?st(e,a,s):Lt(e,n,a):(n&&U(e),st(e,a));n=a}else if(t.nodeType){if(Array.isArray(n)){if(r)return n=U(e,n,s,t);U(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Pe(e,t,n,s){let o=!1;for(let i=0,r=t.length;i<r;i++){let a=t[i],l=n&&n[e.length],h;if(!(a==null||a===!0||a===!1))if((h=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Pe(e,a,l)||o;else if(h==="function")if(s){for(;typeof a=="function";)a=a();o=Pe(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else e.push(a),o=!0;else{const u=String(a);l&&l.nodeType===3&&l.data===u?e.push(l):e.push(document.createTextNode(u))}}return o}function st(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function U(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const a=t[r];if(o!==a){const l=a.parentNode===e;!i&&!r?l?e.replaceChild(o,a):e.insertBefore(o,n):l&&a.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const Kt="http://www.w3.org/2000/svg";function Yt(e,t=!1){return t?document.createElementNS(Kt,e):document.createElement(e)}function Qt(e){const[t,n]=Je(e,["component"]),s=C(()=>t.component);return C(()=>{const o=s();switch(typeof o){case"function":return B(()=>o(n));case"string":const i=jt.has(o),r=Yt(o,i);return et(r,n,i),r}})}const Jt=["Eleventh Grade Vocabulary Trivia","Ninth Grade Vocabulary Trivia","Twelfth Grade Vocabulary Trivia","Tenth Grade Vocabulary Trivia","Texas Facts Trivia","Horse Trivia","Basketball Trivia","Solar System Trivia","Norse Mythology Trivia","Weather Trivia","Famous Poets","State Nicknames Trivia","English Punctuation Trivia","Big Cats Trivia","Ancient Egypt Trivia","Wizard101 Spellbinding Trivia","Soccer Trivia"],O=e=>e.trim().toLowerCase(),J=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),ot=[],P=async e=>new Promise(t=>{const n=setTimeout(()=>{t()},e);ot.push(n)}),Xt=()=>{ot.forEach(e=>{clearTimeout(e)})},$e={done:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345432/mch_uvkd4w.mp3"),error:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345442/minc_r17thf.mp3"),empty:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686346114/empty_h74hy6.mp3")};function Zt(e){return e===String?"string":e===Boolean?"boolean":e===Number?"number":""}const en=e=>Object.keys(e),tn=e=>Object.values(e),nn=e=>{try{return JSON.parse(e)}catch{return e}},ze=Symbol("store-raw"),K=Symbol("store-node"),$=Symbol("store-has"),it=Symbol("store-self");function rt(e){let t=e[p];if(!t&&(Object.defineProperty(e,p,{value:t=new Proxy(e,rn)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,i=n.length;o<i;o++){const r=n[o];s[r].get&&Object.defineProperty(e,r,{enumerable:s[r].enumerable,get:s[r].get.bind(t)})}}return t}function ue(e){let t;return e!=null&&typeof e=="object"&&(e[p]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function X(e,t=new Set){let n,s,o,i;if(n=e!=null&&e[ze])return n;if(!ue(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,a=e.length;r<a;r++)o=e[r],(s=X(o,t))!==o&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let l=0,h=r.length;l<h;l++)i=r[l],!a[i].get&&(o=e[i],(s=X(o,t))!==o&&(e[i]=s))}return e}function he(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Z(e,t,n){if(e[t])return e[t];const[s,o]=ie(n,{equals:!1,internal:!0});return s.$=o,e[t]=s}function sn(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===p||t===K||(delete n.value,delete n.writable,n.get=()=>e[p][t]),n}function at(e){ke()&&Z(he(e,K),it)()}function on(e){return at(e),Reflect.ownKeys(e)}const rn={get(e,t,n){if(t===ze)return e;if(t===p)return n;if(t===I)return at(e),n;const s=he(e,K),o=s[t];let i=o?o():e[t];if(t===K||t===$||t==="__proto__")return i;if(!o){const r=Object.getOwnPropertyDescriptor(e,t);ke()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(i=Z(s,t,i)())}return ue(i)?rt(i):i},has(e,t){return t===ze||t===p||t===I||t===K||t===$||t==="__proto__"?!0:(ke()&&Z(he(e,$),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:on,getOwnPropertyDescriptor:sn};function de(e,t,n,s=!1){if(!s&&e[t]===n)return;const o=e[t],i=e.length;n===void 0?(delete e[t],e[$]&&e[$][t]&&o!==void 0&&e[$][t].$()):(e[t]=n,e[$]&&e[$][t]&&o===void 0&&e[$][t].$());let r=he(e,K),a;if((a=Z(r,t,o))&&a.$(()=>n),Array.isArray(e)&&e.length!==i){for(let l=e.length;l<i;l++)(a=r[l])&&a.$();(a=Z(r,"length",i))&&a.$(e.length)}(a=r[it])&&a.$()}function lt(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const o=n[s];de(e,o,t[o])}}function an(e,t){if(typeof t=="function"&&(t=t(e)),t=X(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const o=t[n];e[n]!==o&&de(e,n,o)}de(e,"length",s)}else lt(e,t)}function ee(e,t,n=[]){let s,o=e;if(t.length>1){s=t.shift();const r=typeof s,a=Array.isArray(e);if(Array.isArray(s)){for(let l=0;l<s.length;l++)ee(e,[s[l]].concat(t),n);return}else if(a&&r==="function"){for(let l=0;l<e.length;l++)s(e[l],l)&&ee(e,[l].concat(t),n);return}else if(a&&r==="object"){const{from:l=0,to:h=e.length-1,by:u=1}=s;for(let c=l;c<=h;c+=u)ee(e,[c].concat(t),n);return}else if(t.length>1){ee(e[s],t,[s].concat(n));return}o=e[s],n=[s].concat(n)}let i=t[0];typeof i=="function"&&(i=i(o,n),i===o)||s===void 0&&i==null||(i=X(i),s===void 0||ue(o)&&ue(i)&&!Array.isArray(i)?lt(o,i):de(e,s,i))}function ln(...[e,t]){const n=X(e||{}),s=Array.isArray(n),o=rt(n);function i(...r){qt(()=>{s&&r.length===1?an(n,r[0]):ee(n,r)})}return[o,i]}class cn{constructor(t,n){d(this,"values");d(this,"setValue");d(this,"defaultValue");this.key=t,this.defaultValue=n??[];const[s,o]=ln(this.getDefaultValue());this.values=s,this.setValue=o}getDefaultValue(){const t=localStorage.getItem(this.key);return t?JSON.parse(t):(localStorage.setItem(this.key,JSON.stringify(this.defaultValue)),this.defaultValue)}set(t,n){if(Array.isArray(t)){this.setValue(t),localStorage.setItem(this.key,JSON.stringify(t));return}this.setValue(t,n),localStorage.setItem(this.key,JSON.stringify(this.values))}add(t,n){if(n===void 0){this.set([...this.values,t]);return}this.set([...this.values.slice(0,n),t,...this.values.slice(n)])}remove(t){const n=new Array(this.values.length-1);for(let s=0,o=0;s<this.values.length;s++)t!==s&&(n[o++]=this.values[s]);this.set(n)}reset(){localStorage.removeItem(this.key),this.setValue(this.defaultValue)}}class un{constructor(t,n,s){d(this,"get");d(this,"setValue");this.key=t,this.converter=n,this.defaultValue=s;const[o,i]=ie(this.getDefaultValue());this.get=o,this.setValue=i}getDefaultValue(){const t=localStorage.getItem(this.key);return t?this.converter(t):(localStorage.setItem(this.key,String(this.defaultValue)),this.defaultValue)}set(t){let n;typeof t=="function"?n=t(this.get()):n=t,this.setValue(n),localStorage.setItem(this.key,String(n))}clearValue(){this.get()!==this.defaultValue&&(this.setValue(this.defaultValue),localStorage.removeItem(this.key))}}class j extends un{constructor(t,n,s){super(n,nn,s??t())}}class Ie extends j{constructor(n,s,o,i){super(n,s,i);d(this,"type");this.title=o,this.type=Zt(n)}}class T extends Ie{constructor(t,n,s=!1){super(Boolean,t,n,s),this.title=n}}class ct extends Ie{constructor(t,n,s){super(Number,t,n,s==null?void 0:s.defaultValue),this.title=n,this.options=s}}class hn extends Ie{constructor(t,n,s){super(String,t,n,s==null?void 0:s.defaultValue),this.title=n,this.options=s}}const v={quiz:{pressNextButton:new T("pressNextButton","Press next question button",!0),highlightCorrectAnswer:new T("highlightCorrectAnswer","Highlight correct answer",!0),displayCorrectAnswer:new T("displayCorrectAnswer","Display correct answer under title"),highlightWrongAnswer:new T("highlightWrongAnswer","Highlight the wrong answer when it gets selected",!0),wrongAnswerCount:new ct("wrongAnswerCount","Max number of wrong answers to select",{max:3,defaultValue:2})},searcher:{autoClick:new T("autoClick","Automatically search for an available quiz, and click it when found",!0),autoReload:new T("autoReload","Automatically reload the page if no valid trivia was found",!0)},login:{autoLogin:new T("autoLogin","Automatically login to site (using given credentials)",!0),continueWithoutLogin:new T("continueWithoutLogin","Do quiz without login")},others:{attemptToPlaySounds:new T("attemptToPlaySounds","Attempt to play sounds when the trivia is done and when there is an error",!0),singlePageApp:new T("singlePageApp","Use single page application (SPA) mode",!1)}},Me=[];for(const e of en(v)){Me.push(e);const t=v[e];Me.push(tn(t))}const ut=()=>{G(()=>{v.others.attemptToPlaySounds.get()?$e.error.play():$e.error.pause()}),document.title="ERROR"};function b(e,t){const n=t??"Value is null or undefined";if(e==null)throw ut(),new Error(n)}class dn{constructor(t){d(this,"title");d(this,"used");d(this,"clickable");const n=t.querySelector("h3");b(n,"Title element not found"),this.title=O(n.innerText),this.used=t.classList.contains("notake");const s=t.querySelector("a");b(s,"Clickable element not found"),this.clickable=s}}function ht(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)+(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}function dt(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)-(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}const fe=new j(Number,"triviaCount",1),te=new j(Number,"questionCount",1);class ft{constructor(t){d(this,"get");d(this,"set");const[n,s]=ie(t);this.get=n,this.set=s}}const V=class V{constructor(){d(this,"usernameInput");d(this,"passwordInput");d(this,"signInBtn");this.usernameInput=document.querySelector("#loginUserName"),this.passwordInput=document.querySelector("#loginPassword"),this.signInBtn=document.querySelector('input[value="Login"]')}exists(){return!(!this.usernameInput||!this.passwordInput||!this.signInBtn)}getUsername(){return this.exists()?this.usernameInput.value:""}getPassword(){return this.exists()?this.passwordInput.value:""}setUsername(t){this.exists()&&(this.usernameInput.value=t)}setPassword(t){this.exists()&&(this.passwordInput.value=t)}static getInstance(){return V.instance||(V.instance=new V),V.instance}clickSignIn(){this.exists()&&this.signInBtn.click()}};d(V,"instance");let Oe=V;const N=new class{constructor(){d(this,"username");d(this,"password");d(this,"loggedIn");this.username=new j(String,"username",""),this.password=new j(String,"password",""),this.loggedIn=new ft(!1)}getUsername(){return C(()=>dt(this.username.get()))}getPassword(){return C(()=>dt(this.password.get()))}hasCredentials(){return this.username.get()!==""&&this.password.get()!==""}getLoggedIn(){return this.loggedIn.get()}useCredentials(e,t){if(!e||!t){alert("Please enter a username and password!");return}this.username.set(ht(e)),this.password.set(ht(t))}clearCredentials(){this.username.clearValue(),this.password.clearValue()}async autoLogin(){const e=Oe.getInstance();if(!e.exists()){this.loggedIn.set(!0);return}const t=this.getUsername(),n=this.getPassword();!t()||!n()||(e.setUsername(t()),e.setPassword(n()),await P(1e3),fe.clearValue(),te.clearValue(),e.clickSignIn())}},ge=new cn("wrongCount");function fn(){const e=v.quiz.wrongAnswerCount.options.max;if(e===0){ge.set([]);return}const t=Math.floor(Math.random()*(e+1)),n=Array.from({length:12},(o,i)=>i+1),s=[];for(let o=0;o<t;o++){const i=Math.floor(Math.random()*n.length);s.push(n[i]),n.splice(i,1)}ge.set(s)}async function gn(){let e;const t=document.querySelectorAll(".quiz-hub-category");for(const s of t)for(const o of s.querySelectorAll("li")){const i=new dn(o);if(n(i))break}function n(s){if(s.used)return!1;for(const o of Jt){const i=O(o);if(s.title===i)return e=s,!0}return!1}await P(J(5e3,1e4)),fn(),G(()=>{if(!(!v.login.continueWithoutLogin.get()&&!N.getLoggedIn())){if(!e){v.searcher.autoReload.get()&&window.location.reload();return}v.searcher.autoClick.get()&&e.clickable.click()}})}const L=new class{constructor(){d(this,"second",1e3);d(this,"minute",60*this.second);d(this,"hour",60*this.minute);d(this,"day",24*this.hour)}},wn=[{name:"Eleventh Grade Vocabulary Trivia",data:[{question:"Denotation",answers:["a word that names or signifies something specific"]},{question:"Discern",answers:["to recognize the difference "]},{question:"Ambiguity",answers:["doubtfulness or uncertainty of meaning or intention"]},{question:"Conceit",answers:["an excessively favorable opinion of one's own ability, importance or wit"]},{question:"Quandary",answers:["a state of extreme dishonor"]},{question:"Buoyancy",answers:["the power to float or rise in a fluid, the upward pressure exerted by the fluid in which a body is immersed"]},{question:"Annotated",answers:["supplied with or containing explanatory notes and textual comments"]},{question:"Enigma",answers:["a mystery "]},{question:"Allegory",answers:["a representation of an abstract or spiritual meaning through concrete or material forms"]},{question:"Procure",answers:["to obtain "]},{question:"Auspicious",answers:["favorable, noteworthy "]},{question:"Principle",answers:["a fundamental, primary, or general law or truth from which others are derived"]},{question:"Assuage",answers:["to relieve or soothe "]},{question:"Euphemism",answers:["the substitution of a mild, indirect, or vague expression for one thought to be offensive, harsh, or blunt"]},{question:"Conspicuous",answers:["noticeable, obvious "]},{question:"Anecdote",answers:["a short account of a particular incident or event of an interesting or amusing nature, often biographical."]}]},{name:"Ninth Grade Vocabulary Trivia",data:[{question:"Parsimony",answers:["extreme care in spending money"]},{question:"Tangible",answers:["possible to be treated as fact"]},{question:"Eccentric",answers:["a person of a specified kind (usually with many eccentricities)"]},{question:"Inadvertent",answers:["without intention (especially resulting from heedless action)"]},{question:"Verbose",answers:["using or containing too many words"]},{question:"Abstract",answers:["a concept or idea not associated with any specific instance"]},{question:"Belittle",answers:["lessen the authority, dignity, or reputation of"]},{question:"Guile",answers:["shrewdness as demonstrated by being skilled in deception"]},{question:"Heed",answers:["paying particular notice (as to children or helpless people)"]},{question:"Advocate",answers:["a person who pleads for a cause or propounds an idea"]},{question:"Mar",answers:["a mark or flaw that spoils the appearance of something (especially on a person's body)"]},{question:"Comply",answers:["act in accordance with someone's rules, commands, or wishes"]},{question:"Censure",answers:["harsh criticism or disapproval"]},{question:"Deference",answers:["a disposition or tendency to yield to the will of others"]},{question:"Facilitate",answers:["make easier"]},{question:"Recalcitrant",answers:["marked by stubborn resistance to authority"]}]},{name:"Twelfth Grade Vocabulary Trivia",data:[{question:"Peruse",answers:["reading with careful attention"]},{question:"Guru",answers:["religious teacher"]},{question:"Hegemony",answers:["one country/group has leadership over another"]},{question:"Jovial",answers:["happy, cheery"]},{question:"Enervate",answers:["to weaken, or to take energy from"]},{question:"Impetuous",answers:["characterized by undue haste and lack of thought or deliberation"]},{question:"Conundrum",answers:["a difficult problem"]},{question:"Benevolent",answers:["showing or motivated by sympathy and understanding and generosity"]},{question:"Loquacious",answers:["talkative, chatty"]},{question:"Evanescent",answers:["tending to vanish like vapor"]},{question:"Antithesis",answers:["the direct opposite or contrast to a previously given assertion"]},{question:"Fortuitous",answers:["occurring by happy chance"]},{question:"Brazen",answers:["unrestrained by convention or propriety"]},{question:"Deleterious",answers:["harmful to living things"]},{question:"Chicanery",answers:["deceiving someone, scam"]},{question:"Sensuous",answers:["all senses, dealing w/ all senses"]}]},{name:"Tenth Grade Vocabulary Trivia",data:[{question:"Gregarious",answers:["seeking and enjoying the company of others"]},{question:"Injunction",answers:["a formal command or admonition"]},{question:"Malevolent",answers:["wishing or appearing to wish evil to others"]},{question:"Phonetic",answers:["related to the sounds in a language"]},{question:"Malicious",answers:["wishing evil or harm upon others"]},{question:"Junction",answers:["an act of joining or adjoining things"]},{question:"Dialogue",answers:["a conversation between two persons"]},{question:"Segregate",answers:["separating into different groups"]},{question:"Congregate",answers:["To come together in a group, assemble."]},{question:"Soliloquy",answers:["the act of talking to oneself or a dramatic monologue"]},{question:"Eloquent",answers:["expressing yourself readily, clearly, effectively"]},{question:"Adjunct",answers:["something attached to but holding an inferior position"]},{question:"Juncture",answers:["a joining together; the point at which two things are joined; any important point in time"]},{question:"Malcontent",answers:["person dissatisfied with existing state of affairs"]},{question:"Malady",answers:["a sickness, illness, disease, disorder"]}]},{name:"Texas Facts Trivia",data:[{question:"Which Texan city is considered the live music capital of the world?",answers:["Austin"]},{question:"Texas comes from the Caddo word Tejas, which means what?",answers:["Friends or Allies"]},{question:"What is the largest city in Texas population wise?",answers:["Houston"]},{question:"What is the Texas state flower?",answers:["Bluebonnet"]},{question:"Remember the _____.",answers:["Alamo"]},{question:"What is the state bird of Texas?",answers:["Mockingbird"]},{question:"What natural resource gave Texas a large economic boom?",answers:["Oil"]},{question:"What is the capital of Texas?",answers:["Austin"]},{question:"How many cattle are estimated to exist in Texas?",answers:["16 million"]},{question:"What is the only US State with a larger land mass than Texas?",answers:["Alaska"]},{question:"Which popular soft drink originated in Texas?",answers:["Dr Pepper"]},{question:"What large body of water is off the Texas coast?",answers:["Gulf of Mexico"]},{question:"Texas is called the ______ state.",answers:["Lone Star"]},{question:"Texas has the country's largest herd of what kind of animal?",answers:["Whitetail Deer"]},{question:"Which US president was born in Texas?",answers:["Dwight D Eisenhower"]},{question:"What is the only US state with a larger population than Texas?",answers:["California"]},{question:"What is the state plant?",answers:["Prickly Pear Cactus"]},{question:"What is the state dish of Texas?",answers:["Chili"]}]},{name:"Horse Trivia",data:[{question:"Which breed is the fastest horse in the world over short distances?",answers:["American Quarter Horse"]},{question:"Which famous race horse most recently won the Triple Crown?",answers:["Affirmed"]},{question:"Which is a part that both english and western saddles have?",answers:["Cantle"]},{question:"In this equestrian sport the horse is judged on its jumping style and manners:",answers:["Hunters"]},{question:"This American breed is known for its high stepping gaits and showy style.",answers:["American Saddlebred"]},{question:"A hand is how many inches?",answers:["Four"]},{question:"This equestrian sport the horse is judged on its movement and manners in western tack:",answers:["Western Pleasure"]},{question:"Which of the following is not a recognized horse color?",answers:["Red"]},{question:"This special show jumping class is when a horse and rider jump as high as possible over a brick wall.",answers:["Puissance"]},{question:"Which of the following is not a type of Appaloosa color pattern?",answers:["Confetti"]},{question:"What is the oldest breed of horse?",answers:["Arabian"]},{question:"This popular breed is extremely versatile and especially good at endurance racing:",answers:["Arabian"]},{question:"A pony is any equine _____ hands high or below.",answers:["14.2"]},{question:"Which breed of horse performs at the Spanish riding school in Vienna?",answers:["Lipizzaner"]},{question:"Which of the following is not an Olympic equestrian sport?",answers:["Vaulting"]},{question:"How many beats are in the canter?",answers:["Three"]},{question:"When a horse limps, it's called _______.",answers:["Lame"]},{question:"What is the world's smallest breed of horse?",answers:["Falabella"]},{question:"This western sport includes a pattern of galloping, spins, and sliding stops.",answers:["Reining"]},{question:"Which type of horse is popular in high level Dressage competitions?",answers:["Warmbloods"]}]},{name:"Basketball Trivia",data:[{question:"What is the special shot called that is awarded to a player who has been fouled?",answers:["Free Throw"]},{question:"How many players per team can be on the basketball court at one time?",answers:["Five"]},{question:"How many quarters are in a single game of basketball?",answers:["Four"]},{question:"March Madness refers to which basketball tournament?",answers:["NCAA"]},{question:"As of 2014, how many teams are in the NBA?",answers:["30"]},{question:"In what country was basketball founded?",answers:["America"]},{question:"How many points is a field goal outside the three-point line?",answers:["Three"]},{question:"The original hoops were _____________.",answers:["Peach Baskets"]},{question:"What color were the first basketballs made in?",answers:["Brown"]},{question:"How many points is a free throw worth?",answers:["One"]},{question:"How long is each quarter of a basketball game?",answers:["12 Minutes"]},{question:"How tall is a basketball hoop?",answers:["10'"]},{question:"Most basketball courts have ________ flooring.",answers:["Wood"]},{question:"Unsportsmanlike conduct can result in a _____________.",answers:["Technical Foul"]},{question:"What is the diameter of a basketball hoop?",answers:['18"']},{question:"It is illegal to _______ the ball, or move without bouncing it.",answers:["Carry"]},{question:"How many points is a regular field goal?",answers:["Two"]},{question:"When did professional basketball teams start organizing?",answers:["1920s"]},{question:"What year was the NBA formed?",answers:["1949"]},{question:"Basketball was originally created by a gym teacher because ___________.",answers:["It was raining outside"]}]},{name:"Solar System Trivia",data:[{question:"What is the correct term for Pluto?",answers:["Dwarf Planet"]},{question:"Mars is known as the _____ planet.",answers:["Red"]},{question:"Jupiter has a ________ in its atmosphere but no solid surface.",answers:["Hurricane"]},{question:"What are comets made of?",answers:["Dirty Ice"]},{question:"Which is the smallest planet in the solar system?",answers:["Mercury"]},{question:"What man-made objects exist in our solar system?",answers:["Satellites & Space Junk"]},{question:"Saturn is famous for its ________ that rotate around it.",answers:["Rings"]},{question:"What separates the inner and outer solar system?",answers:["Band of asteroids"]},{question:"Uranus has a _______ glow to it.",answers:["Blue"]},{question:"Which planet is closest to the sun?",answers:["Mercury"]},{question:"Venus' atmosphere is primarily made up of what gas?",answers:["Carbon Dioxide"]},{question:`Which two planets are Earth's "neighbors"?`,answers:["Venus & Mars"]},{question:"What is the largest planet in the solar system?",answers:["Jupiter"]},{question:"Every object in our solar system revolves around the _______.",answers:["Sun"]},{question:"Which planet is furthest from the sun?",answers:["Neptune"]},{question:"How many planets are in our solar system?",answers:["Eight"]}]},{name:"Norse Mythology Trivia",data:[{question:'Who was the god of war and the "All Father"?',answers:["Odin"]},{question:"Who was the first Norse god?",answers:["Buri"]},{question:"Who was Odin's father?",answers:["Borr"]},{question:"Who was the goddess of healing?",answers:["Eir"]},{question:"Who was the god of poetry, music and the harp?",answers:["Bragi"]},{question:"Who was the goddess of the sea?",answers:["Ran"]},{question:"Baldr was the god of what?",answers:["Beauty, innocence, peace and rebirth"]},{question:"Who was the goddess of wisdom?",answers:["Vor"]},{question:"Who was the god of the daytime?",answers:["Dagr"]},{question:"Who was the god of thunder and battle?",answers:["Thor"]},{question:"Who was the wife of Thor and goddess of the harvest?",answers:["Sif"]},{question:"Who was the goddess of old age?",answers:["Elli"]},{question:"Who was the goddess of night?",answers:["Nott"]},{question:"Who was the goddess of spring?",answers:["Eostre"]},{question:"Who was the goddess of marriage and motherhood?",answers:["Frigg"]},{question:"Who was the god of mischief?",answers:["Loki"]},{question:"Who was the god of inspiration?",answers:["Kvasir"]},{question:"Who was the goddess of the sun?",answers:["Sol"]},{question:"Who was the god of dawn?",answers:["Delling"]},{question:"Who was the god of revenge?",answers:["Vali"]},{question:"Who was the goddess of joy and peace?",answers:["Nanna"]},{question:"Norse Mythology is the mythology from what group of people?",answers:["North Germanic"]},{question:"Who was the goddess of prudence?",answers:["Snotra"]},{question:"Who was the goddess of consolation and protection?",answers:["Hlin"]},{question:"Who was the god of strength and son of Thor?",answers:["Magni"]},{question:"Who was the god of skiing, winter, hunting and dueling?",answers:["Ullr"]},{question:"Who was the god of justice, peace and truth?",answers:["Forseti"]},{question:"Who was the goddess of fertility and plough?",answers:["Gefjun"]}]},{name:"Weather Trivia",data:[{question:"What is a tornado called before it hits the ground?",answers:["Funnel Cloud"]},{question:"Where do tornadoes come from?",answers:["Thunderstorms"]},{question:"What is the name of the strong radar that helps predict weather?",answers:["Doppler"]},{question:"In which two seasons are thunderstorms most likely to occur?",answers:["Winter & Spring"]},{question:"A waterspout is actually a weak ______ that forms over water.",answers:["Tornado"]},{question:"What type of cloud is between 6,500 feet to 18,000 feet in the atmosphere?",answers:["Alto"]},{question:"What is a monsoon?",answers:["Seasonal wind that often brings rain"]},{question:"What type of cloud usually looks white and puffy?",answers:["Cumulus"]},{question:"What does a Tornado Watch mean?",answers:["Tornadoes are possible in your area."]},{question:"What causes the electric current that result in lightning?",answers:["Ice particles bumping into each other"]},{question:"Which of the following is NOT needed to cause a blizzard?",answers:["Rotating storm clouds"]},{question:"What is sleet?",answers:["Rain that freezes into ice before it hits ground"]},{question:"The ______ is the center of a hurricane and also the calmest part of the storm.",answers:["Eye"]},{question:"Which of the following is not a characteristic of a hurricane?",answers:["Forms over mountains"]},{question:'Which of these states are not in "Tornado Alley"?',answers:["North Carolina"]},{question:"What type of cloud is above 18,000 feet in the atmosphere?",answers:["Cirrus"]},{question:"What type of cloud is below 6,500 feet in the atmosphere?",answers:["Stratus"]},{question:"How fast do raindrops fall?",answers:["7-18 miles per hour"]},{question:"How is snow formed?",answers:["Water vapor changes directly to ice high in the atmosphere"]},{question:"Tornadoes are rated on what kind of scale?",answers:["F Scale"]}]},{name:"Famous Poets",data:[{question:'Who wrote "A Dream Within A Dream"?',answers:["Edgar Allan Poe"]},{question:'Who wrote "The Road Not Taken"?',answers:["Robert Frost"]},{question:'Who wrote "Stopping by the Woods on a Snowy Evening"?',answers:["Robert Frost"]},{question:'Who wrote "Funeral Blues"?',answers:["W.H. Auden"]},{question:'Who wrote "Do Not Go Gentle To That Good Night"?',answers:["Dylan Thomas"]},{question:'Who wrote "If those I loved were lost"?',answers:["Emily Dickinson"]},{question:'Who wrote "Messy Room"?',answers:["Shel Silverstein"]},{question:'Who wrote "Where the Sidewalk Ends"?',answers:["Shel Silverstein"]},{question:'Who wrote "To You"?',answers:["Walt Whitman"]},{question:'Who wrote "Phenomenal Woman"?',answers:["Maya Angelou"]},{question:'Who Wrote "If You Forget Me"?',answers:["Pablo Neruda"]},{question:'Who wrote "A Girl"?',answers:["Ezra Pound"]},{question:'Who wrote "There is Another Sky"?',answers:["Emily Dickinson"]},{question:'Who Wrote "Let America Be America Again"?',answers:["Langston Hughes"]},{question:'Who wrote "Life is Fine"?',answers:["Langston Hughes"]},{question:'Who Wrote "I Carry Your Heart With Me"?',answers:["E.E. Cummings"]}]},{name:"State Nicknames Trivia",data:[{question:'Which state is known as the "Constitution State?"',answers:["Connecticut"]},{question:'Which state is known as the "Ocean State?"',answers:["Rhode Island"]},{question:'Which state is known as the "Garden State?"',answers:["New Jersey"]},{question:'Which state is known as the "Volunteer State?"',answers:["Tennessee"]},{question:'Which state is known as the "Silver State?"',answers:["Nevada"]},{question:'Which state is known as the "Evergreen State?"',answers:["Washington"]},{question:'Which state is known as the "Great Lakes State?"',answers:["Michigan"]},{question:'Which state is known as the "Aloha State?"',answers:["Hawaii"]},{question:'Which state is known as the "First State?"',answers:["Delaware"]},{question:'Which state is known as the "Magnolia State?"',answers:["Mississippi"]},{question:'Which state is known as the "Prairie State?"',answers:["Illinois"]},{question:'Which state is known as the "Bluegrass State?"',answers:["Kentucky"]},{question:'Which state is known as the "Pelican State?"',answers:["Louisiana"]},{question:'Which state is known as the "Pine Tree State?"',answers:["Maine"]},{question:'Which state is known as the "Empire State?"',answers:["New York"]},{question:'Which state is known as the "Lone Star State?"',answers:["Texas"]},{question:'Which state is known as the "Golden State?"',answers:["California"]},{question:'Which state is known as the "Beaver State?"',answers:["Oregon"]},{question:'Which state is known as the "Sunflower State?"',answers:["Kansas"]},{question:'Which state is known as the "Beehive State?"',answers:["Utah"]}]},{name:"English Punctuation Trivia",data:[{question:"Three periods in a row are called _________.",answers:["Ellipses"]},{question:"A semi-colon is primarily used to:",answers:["Join two connected sentences"]},{question:"Where does the period go in a sentence?",answers:["At the end"]},{question:"Which of the following is NOT a reason to use an exclamation mark (!) ?",answers:["Boredom"]},{question:"Which sentence uses a semi-colon correctly?",answers:["I set out on a quest; the enemies looked fierce."]},{question:"Which sentence below uses a comma(s) correctly?",answers:["Megan, who lives next door loves dogs."]},{question:"Quotation marks are used to do what?",answers:["Show speech"]},{question:"Which sentence correctly uses an apostrophe?",answers:["I cant do it, because it is too hard.","The horse's tail is so pretty."]},{question:"What is the apostrophe's main function?",answers:["Show ownership or posession"]},{question:"Which sentence uses quotation marks correctly?",answers:[`Sally said, "It's time to cook dinner."`]},{question:"An exclamation mark is often used to express what?",answers:["Excitement"]},{question:"Which sentence below uses a comma correctly?",answers:["I love to play video games, but they are hard.","Before you begin, let us learn to play."]},{question:"A period is also used to __________ words.",answers:["Abbreviate"]},{question:"Which date below uses a comma correctly?",answers:["January 1st, 2014"]}]},{name:"Big Cats Trivia",data:[{question:"Which big cat is in the genus Uncia?",answers:["Snow Leopard"]},{question:"Which big cat is not in the genus Panthera?",answers:["Cheetah"]},{question:"Which big cat is in the genus Acinonyx?",answers:["Cheetah"]},{question:"Which of these lions are recently extinct?",answers:["Barbary Lion"]},{question:"One common way to determine what is considered a big cat, is a feline that can ________.",answers:["Roar"]},{question:"Which is the best climber of all the big cats?",answers:["Leopard"]},{question:"A cheetah can run up to speeds of ____ miles an hour.",answers:["70"]},{question:"Which of these big cats purrs instead of roars?",answers:["Cheetah"]},{question:"Which type of tiger is extinct?",answers:["Caspian Tiger"]},{question:"Which is the only big cat that lives in groups?",answers:["Lion"]},{question:"How far can a lion's roar be heard from?",answers:["5 miles"]},{question:"Which is the most endangered big cat?",answers:["Amur Leopard"]},{question:"Tigers are often poached for their parts, used in traditional _________ medicine.",answers:["Chinese"]},{question:"Which of the following is not a criteria for an accredited US Fish & Wildlife Service animal sanctuary?",answers:["Must provide enrichment activities for big cats"]},{question:"Which of the following is not considered a big cat?",answers:["Bobcat"]},{question:"The main threats to big cats are ___________.",answers:["poaching and habitat destruction"]},{question:"Big cats are ________.",answers:["Carnivores"]},{question:"Which of these big cats is an excellent swimmer who loves water?",answers:["Tiger"]},{question:"Which big cat is in the genus Puma?",answers:["Cougar"]},{question:'Which big cat is named from the Native American word meaning "he who kills with one leap"?',answers:["Jaguar"]}]},{name:"Ancient Egypt Trivia",data:[{question:"How many pyramids have been discovered in Egypt so far?",answers:["Over 130"]},{question:"What type of animal did Ancient Egyptians not typically keep as a pet?",answers:["Hippo"]},{question:"What did Ancient Egyptians believe made the Nile River overflow every year?",answers:["The tears of Isis"]},{question:"What is the largest pyramid in Egypt?",answers:["Pyramid of Khufu"]},{question:"What is the name of the most popular board game developed by Ancient Egyptians?",answers:["Senet"]},{question:"Which of these animals was considered sacred by Ancient Egyptians?",answers:["Cat"]},{question:"The Egyptian alphabet consisted of more than ______ hieroglyphs.",answers:["700"]},{question:"Which is not considered a phase of the Ancient Egyptian society?",answers:["Glorious Kingdom"]},{question:"When did the Ancient Egyptian Empire begin to weaken?",answers:["700 BC"]},{question:"Which of the following was <b>not</b> invented by the Ancient Egyptians?",answers:["Horse saddles"]},{question:"Who is considered to be the most important Egyptian god?",answers:["Ra"]},{question:"Because they believed in ________, ancient Egyptians mummified bodies.",answers:["the afterlife"]},{question:"Roughly how many different deities did the Ancient Egyptians believe in?",answers:["More than 2,000"]},{question:"The famous Great Sphinx is missing what part?",answers:["Nose"]},{question:"Which empire was the first to conquer the Ancient Egyptians?",answers:["Assyrian Empire"]},{question:"Which of the following was a calendar not followed by the Ancient Egyptians?",answers:["Animal Calendar"]},{question:"The Ancient Egyptians were the first civilization to invent __________.",answers:["Writing"]},{question:"Who is considered to be the first Pharaoh of Egypt?",answers:["King Menes"]},{question:"A Pharaoh never let his ______ be seen.",answers:["Hair"]},{question:"Which of the following was not invented by the Ancient Egyptians?",answers:["Horse saddles"]}]},{name:"Wizard101 Spellbinding Trivia",data:[{question:'Who tells you to speak these words only unto your mentor: "Meena Korio Jajuka!"',answers:["Priya the Dryad"]},{question:"Who grants the first Shadow Magic spell?",answers:["Sophia DarkSide"]},{question:'Who taunts you with: "Prepare to be broken, kid!"',answers:["Clanker"]},{question:"Morganthe got the Horned Crown from the Spriggan:",answers:["Gisela"]},{question:"Who needs the healing potion from Master Yip?",answers:["Binh Hoa"]},{question:"Who is Haraku Yip's apprentice?",answers:["Binh Hoa"]},{question:"What does Silenus name you once you've defeated Hades?",answers:["Glorious Golden Archon"]},{question:'Who tells you: "A shield is just as much a weapon as the sword."',answers:["Mavra Flamewing"]},{question:"Who taunts: Why I oughta knock you to the moon, you pesky little creep!",answers:["Mugsy"]},{question:"Sumner Fieldgold twice asks you to recover what for him?",answers:["Shrubberies "]},{question:"What special plant was Barley developing in his Garden?",answers:["Cultivated Woodsmen"]},{question:"Who tries to raise a Gorgon Army?",answers:["Phorcys"]},{question:"What badge do you earn by defeating 100 Samoorai?",answers:["Yojimbo"]},{question:"Where has Pharenor been imprisoned?",answers:["Skythorn Tower"]},{question:"Who makes the harpsicord for Shelus?",answers:["Gretta Darkkettle"]},{question:'Who taunts you with: "Wizard, you will know the meaning of the word pain after we battle!"',answers:["Aiuchi"]},{question:"In Azteca, Morganthe enlisted the help of the:",answers:["The Black Sun Necromancers"]},{question:"Who thinks you are there to take their precious feathers?",answers:["Takeda Kanryu"]},{question:"The Swallows of Caliburn migrate to Avalon from where each year?",answers:["Zafaria and Marleybone"]},{question:"Who helps Morganthe find the Horn of Huracan?",answers:["Belloq"]}]},{name:"Soccer Trivia",data:[{question:"What is the circumference of an official soccer ball?",answers:["28 in"]},{question:"What is the international football (soccer) body called?",answers:["FIFA"]},{question:"What is the common name for soccer in Europe?",answers:["Football"]},{question:"What is the minimum number of players that can play on one soccer team?",answers:["Seven"]},{question:"How often does the FIFA World Cup take place?",answers:["Every Four Years"]},{question:"A _______ card dismisses a player from the game.",answers:["Red"]},{question:"Which of the following is not a field position in soccer?",answers:["Kicker"]},{question:'In what country did the name "soccer" instead of football originate?',answers:["England"]},{question:"What colors are a typical soccer ball?",answers:["Black and White"]},{question:"A _______ card cautions a player and marks a foul.",answers:["Yellow"]},{question:"When was The Footbal Association founded?",answers:["1863"]},{question:"Which is the only position where a player can use their hands?",answers:["Goalkeeper"]},{question:"What are the only parts of the body you can't use when playing soccer?",answers:["Hands and Arms"]},{question:"What is the main protective gear worn by soccer players?",answers:["Shin Guards"]},{question:"What is the major world soccer competition that takes place every four years?",answers:["FIFA World Cup"]},{question:"One of the earliest versions of soccer was recorded by this ancient civilization?",answers:["Greek"]},{question:'Which countries primarily use the word "soccer" to describe association football?',answers:["US & Canada"]},{question:"How many players are on a soccer team?",answers:["11"]},{question:"How long is a half of a soccer game?",answers:["Forty Five Minutes"]},{question:"Which college wrote early fundamental and influental rules for soccer?",answers:["Cambridge"]}]}],D=class D{constructor(t){d(this,"answerElmt");d(this,"checkboxElmt");d(this,"parentElmt");d(this,"radioId");this.parentElmt=t;const n=t.querySelector(".answerText");b(n,"Answer text not found"),this.answerElmt=n;const s=t.querySelector("a");b(s,"Checkbox not found"),this.checkboxElmt=s}setHighlightType(t){switch(t){case"default":this.parentElmt.style.backgroundColor=D.defaultColor;break;case"correct":this.parentElmt.style.backgroundColor=D.highlightColor;break;case"wrong":this.parentElmt.style.backgroundColor=D.wrongColor;break}}equals(t){return this.parentElmt===t.parentElmt}getAnswer(){return O(this.answerElmt.textContent)}setAnswer(t){this.answerElmt.textContent=t}check(){this.checkboxElmt.click()}getAnswerId(){if(!this.radioId){const t=this.parentElmt.querySelector("input[type='radio']");b(t,"Radio input not found"),this.radioId=t.value}return this.radioId}};d(D,"highlightColor","#28a745"),d(D,"defaultColor","transparent"),d(D,"wrongColor","#dc3545");let je=D;const q=class q{constructor(){d(this,"title");d(this,"question");d(this,"answers",[]);d(this,"nextButton");const t=document.querySelector("h1"),n=t==null?void 0:t.textContent;b(n,"Quiz title not found"),this.title=O(n);const s=document.querySelector(".quizQuestion"),o=s==null?void 0:s.textContent;b(o,"Quiz question not found"),this.question=O(o),document.querySelectorAll(".answer").forEach(a=>{this.answers.push(new je(a))});const r=document.querySelector("#nextQuestion");b(r,"Next button not found"),this.nextButton=r}static getInstance(){return q.instance||(q.instance=new q),q.instance}getCorrectAnswerBox(){if(q.correctAnswerBox)return q.correctAnswerBox;const t=wn.find(s=>this.title.includes(O(s.name)));b(t,"Quiz title not found in answers!");const n=t.data.find(s=>this.question.includes(O(s.question)));b(n,"Quiz question not found in answers!");for(const s of this.answers)for(const o of n.answers)if(s.getAnswer()===O(o)){q.correctAnswerBox=s;break}if(!q.correctAnswerBox)throw ut(),new Error("Correct answer not found!");return q.correctAnswerBox}getRandomAnswer(){const t=this.answers.filter(n=>!n.equals(this.getCorrectAnswerBox()));return t[Math.floor(Math.random()*t.length)]}getAnswer(){return q.selectedAnswerBox||(this.isWrongAnswer()?q.selectedAnswerBox=this.getRandomAnswer():q.selectedAnswerBox=this.getCorrectAnswerBox()),q.selectedAnswerBox}isWrongAnswer(){return ge.values.includes(te.get())}next(){this.nextButton.click()}};d(q,"instance"),d(q,"correctAnswerBox"),d(q,"selectedAnswerBox");let we=q;const mn=e=>{te.set(t=>t+1),e.next()};class pn{constructor(t){d(this,"formData");this.formData=new FormData(t)}setTAC(t){this.formData.set("t:ac",t)}setTSubmit(t){this.formData.set("t:submit",t)}setStk(t){this.formData.set("stk",t)}setTFormData(t){this.formData.set("t:formdata",t)}setQuestionId(t){this.formData.set("questionId",t)}setAnswerId(t){this.formData.set("answerId",t)}setContinue(t){this.formData.set("continue",t)}getRequestBody(){return new URLSearchParams([...this.formData])}}function yn(e){var s;const n=`; ${document.cookie}`.split(`; ${e}=`);return n.length===2&&((s=n.pop())==null?void 0:s.split(";").shift())||null}async function bn(){const t=we.getInstance().getAnswer();await P(J(7e3,2e4));const n=document.querySelector("#quizForm");b(n,"Form element not found");const s=new pn(n);s.setAnswerId(t.getAnswerId());const o=yn("stk");b(o,"stk cookie not found"),s.setStk(o),v.quiz.pressNextButton.get()&&await fetch("/quiz/trivia.dynamic.quizform.quizform",{method:"POST",body:s.getRequestBody(),headers:{"Content-Type":"application/x-www-form-urlencoded"}})}function qn(){const e=we.getInstance(),t=e.getCorrectAnswerBox();G(async()=>{const n=v.quiz.highlightCorrectAnswer.get();t.setHighlightType(n?"correct":"default");try{const i=document.querySelector(".quizQuestion");b(i),v.quiz.displayCorrectAnswer.get()&&(i.innerText=e.title+`
Correct answer: ${t.getAnswer()}`)}catch{}if(!v.login.continueWithoutLogin.get()&&!N.getLoggedIn())return;const s=e.getAnswer();if(v.quiz.highlightWrongAnswer.get()&&e.isWrongAnswer()&&s.setHighlightType("wrong"),v.others.singlePageApp.get()){bn();return}await P(J(L.second*5,L.second*8)),s.check(),await P(J(L.second,L.second*5)),v.quiz.pressNextButton.get()&&mn(e)})}let vn={data:""},kn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||vn,xn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Sn=/\/\*[^]*?\*\/|  +/g,gt=/\n+/g,F=(e,t)=>{let n="",s="",o="";for(let i in e){let r=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+r+";":s+=i[1]=="f"?F(r,i):i+"{"+F(r,i[1]=="k"?"":t)+"}":typeof r=="object"?s+=F(r,t?t.replace(/([^,])+/g,a=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):r!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=F.p?F.p(i,r):i+":"+r+";")}return n+(t&&o?t+"{"+o+"}":o)+s},z={},wt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+wt(e[n]);return t}return e},_n=(e,t,n,s,o)=>{let i=wt(e),r=z[i]||(z[i]=(l=>{let h=0,u=11;for(;h<l.length;)u=101*u+l.charCodeAt(h++)>>>0;return"go"+u})(i));if(!z[r]){let l=i!==e?e:(h=>{let u,c,g=[{}];for(;u=xn.exec(h.replace(Sn,""));)u[4]?g.shift():u[3]?(c=u[3].replace(gt," ").trim(),g.unshift(g[0][c]=g[0][c]||{})):g[0][u[1]]=u[2].replace(gt," ").trim();return g[0]})(e);z[r]=F(o?{["@keyframes "+r]:l}:l,n?"":"."+r)}let a=n&&z.g?z.g:null;return n&&(z.g=z[r]),((l,h,u,c)=>{c?h.data=h.data.replace(c,l):h.data.indexOf(l)===-1&&(h.data=u?l+h.data:h.data+l)})(z[r],t,s,a),r},An=(e,t,n)=>e.reduce((s,o,i)=>{let r=t[i];if(r&&r.call){let a=r(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;r=l?"."+l:a&&typeof a=="object"?a.props?"":F(a,""):a===!1?"":a}return s+o+(r??"")},"");function me(e){let t=this||{},n=e.call?e(t.p):e;return _n(n.unshift?n.raw?An(n,[].slice.call(arguments,1),t.p):n.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):n,kn(t.target),t.g,t.o,t.k)}me.bind({g:1}),me.bind({k:1});const Cn=vt();function Wn(e){let t=this||{};return(...n)=>{const s=o=>{const i=kt(Cn),r=Ce(o,{theme:i}),a=Ce(r,{get class(){const H=r.class,Ve="class"in r&&/^go[0-9]+/.test(H);let ks=me.apply({target:t.target,o:Ve,p:r,g:t.g},n);return[H,ks].filter(Boolean).join(" ")}}),[l,h]=Je(a,["as","theme"]),u=h,c=l.as||e;let g;return typeof c=="function"?g=c(u):t.g==1?(g=document.createElement(c),et(g,u)):g=Qt(Ce({component:c},u)),g};return s.class=o=>B(()=>me.apply({target:t.target,p:o,g:t.g},n)),s}}const S=new Proxy(Wn,{get(e,t){return e(t)}}),Tn=S.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-item {
    width: 113px;
  }

  .field {
    padding-left: 3px;
  }
`;var En=y("<div class=text>");const Bn=S.button`
  background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/wizardButton.png?bn=B1.0.99009");
  cursor: pointer;
  font-family: Comic Sans, Comic Sans MS, Arial, Helvetica, sans-serif;
  color: #f5e2a8;
  font-weight: bold;
  font-size: 12px;
  padding-left: 3px;
  padding-right: 3px;
  height: 25px;
  background-position: top right;
  position: relative;
  margin: 3px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/wizardButton.png?bn=B1.0.99009");
  }

  &::before {
    left: 0;
    width: 6px;
    background-position: top left;
  }

  .text {
    padding-bottom: 6px;
    position: relative;
  }

  &:hover {
    background-position: bottom right;
    /* color: white; */
    .text {
      filter: brightness(150%);
    }

    &::before {
      background-position: bottom left;
    }
  }

  * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`,Ne=e=>f(Bn,{get class(){return e.class},onClick:()=>{var n;(n=e.onClick)==null||n.call(e)},get type(){return e.type??"button"},get children(){var n=En();return _(n,()=>e.value),n}});var Pn=y('<input class="username field form-item"type=text name=username placeholder=Username>'),$n=y('<input class="password field form-item"type=password name=password placeholder=Password>');const zn=()=>{const e=n=>{n.preventDefault();const s=new FormData(n.target),o=s.get("username"),i=s.get("password");N.useCredentials(o,i)},t=()=>{N.clearCredentials()};return f(Tn,{onSubmit:e,get children(){return[Pn(),$n(),f(Ne,{type:"submit",value:"Use Credentials",class:"form-item"}),f(Ne,{value:"Clear Credentials",type:"button",onClick:t,class:"form-item"})]}})},In=S.span`
  width: 20px;
  height: 20px;

  background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/wizardButton.png?bn=B1.0.96267");
  background-position: top center;
  filter: brightness(180%);

  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 7px;
    top: 5px;
  }

  &::before {
    width: 2px;
    height: 9px;
    background-color: white;
    transform: rotate(45deg);
  }

  &::after {
    width: 2px;
    height: 6px;
    background-color: white;
    transform: rotate(-45deg) translateX(-6.5px) translateY(-1px);
  }
`,Mn=e=>f(In,{get class(){return e.class},get style(){return{visibility:e.visible?"visible":"hidden"}}}),On=S("div")`
  margin-bottom: 15px;

  .content-wrapper {
    position: relative;
    filter: drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.5));
    width: 100%;
    transition: width 0.15s ease-out;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
      width: calc(100% + 14px);
      .text {
        color: black;
      }
    }

    .content {
      display: grid;
      grid-template-columns: 10px 1fr 10px;

      .left {
        position: relative;

        .scroll {
          background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenuLeft_middle.webp?bn=B1.0.96267");
          position: absolute;
          inset: 0;
          z-index: 1;
          top: 3px;

          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 100%;
          }

          // https://akamai.wizard101.com/static/themes/wizard1…/common/images/sideMenu_middle.webp?bn=B1.0.99009

          &::before {
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenuLeft_top.webp?bn=B1.0.96267");
            height: 6px;
            top: -6px;
          }

          &::after {
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenuLeft_bottom.webp?bn=B1.0.96267");
            height: 11px;
            bottom: -11px;
          }
        }
      }

      .center {
        background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenu_middle.webp?bn=B1.0.96267");
        position: relative;

        * {
          align-self: center;
        }

        &::before,
        &::after {
          content: "";
          position: absolute;
          width: 100%;
        }

        &::before {
          height: 3px;
          top: -3px;
          background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenu_top.webp?bn=B1.0.96267");
        }

        &::after {
          height: 4px;
          bottom: -4px;
          background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenu_bottom.webp?bn=B1.0.96267");
        }

        .text {
          font-size: 14.4px;
          margin-left: 10px;
          margin-right: 10px;
          margin-bottom: 2px;
        }
      }

      .right {
        position: absolute;
        width: 10px;
        height: 100%;
        right: 0;
        top: -4px;
        bottom: -1px;
        filter: drop-shadow(-3px 2px 2px rgba(0, 0, 0, 0.3));

        .scroll {
          height: 100%;
          background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenuRight_middle.webp?bn=B1.0.96267");
          position: relative;

          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 100%;
          }

          &::before {
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenuRight_bottom.webp?bn=B1.0.96267");
            height: 7px;
            bottom: -7px;
            background-repeat: repeat-y;
            z-index: 1;
          }

          &::after {
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/sideMenuRight_top.webp?bn=B1.0.96267");
            height: 6px;
            top: -6px;
          }
        }
      }
    }
  }
`;var jn=y('<div class=content-wrapper role=button><div class=content><div class=left><div class=scroll></div></div><div class=center><div class="text text-content"></div></div><div class=right><div class=scroll>');const Le=e=>f(On,{get class(){return e.class??""},get children(){var t=jn(),n=t.firstChild,s=n.firstChild,o=s.nextSibling,i=o.firstChild;return Be(t,"focus",e.onClick),Be(t,"click",e.onClick,!0),_(i,()=>e.content),t}});Ee(["click"]);var Nn=y("<div class=container-wrapper><div class=container>"),Ln=y("<div><div class=container>");const mt=S("div")`
  margin-top: 5px;
  position: relative;

  .container-wrapper {
    margin: 0 10px 7px 25px;

    .container {
      min-width: 121px;
    }
  }
`,De=e=>{if(!e.foldable)return f(mt,{get class(){return e.class},get children(){return[f(Le,{get content(){return e.titleContent},get class(){return e.titleClass}}),(()=>{var s=Nn(),o=s.firstChild;return _(o,()=>e.children),s})()]}});const t=new j(Boolean,e.foldable.localStorageKey,e.foldable.defaultFolded??!1),n=()=>{var s,o;t.set(i=>!i),(o=(s=e.foldable).onFold)==null||o.call(s)};return f(mt,{get class(){return e.class},get children(){return[f(Le,{onClick:n,get content(){return e.titleContent},get class(){return e.titleClass}}),f(We,{get when(){return!t.get()},get children(){var s=Ln(),o=s.firstChild;return _(o,()=>e.children),A(()=>Ze(s,`container-wrapper ${t.get()?"":"folded"}`)),s}})]}})};var Dn=y("<div class=modal><div class=top><div class=left></div><div class=center><div class=title></div><div class=content></div></div><div class=right></div></div><div class=bottom><div class=left><div class=corner><div class=corner-slope></div></div></div><div class=center></div><div class=right><div class=corner><div class=corner-slope>"),Fn=y("<h1>");const Vn=e=>{const t=S.div`
    --side-width: 40px;
    --col: [left-s] var(--side-width) [left-e center-s] 1fr [center-e right-s]
      var(--side-width) [right-e];
    --modal-height: 500px;

    @keyframes popin {
      from {
        transform: translateY(calc(var(--modal-height) * -1));
      }

      to {
        transform: translateY(0);
      }
    }

    @keyframes popout {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(calc(var(--modal-height) * -1));
      }
    }

    /* animation: popin .5s ease-in-out; */
    animation-name: popin;
    animation-duration: ${e.openTimeMs.toString()}ms;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;

    &.close {
      animation-name: popout;
      animation-timing-function: ease-in;
    }

    position: fixed;
    inset: 0;
    z-index: 100000;
    display: flex;
    justify-content: center;

    .modal {
      width: 700px;
      height: var(--modal-height);
      display: grid;
      grid-template-rows: [top-s] 1fr [top-e bottom-s] 58px [bottom-e];
    }

    .top {
      grid-row: top-s/top-e;
      display: grid;
      grid-template-columns: var(--col);
      grid-template-rows: 1fr;

      .center {
        background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/contentpattern.jpg?bn=B1.0.96267");
        grid-column: center-s/center-e;
        display: grid;
        grid-template-rows: [title-s] 58px [title-e content-s] 1fr [content-e];
        padding-right: 18px;
        padding-left: 18px;

        .title {
          grid-row: title-s/title-e;
          h1 {
            font-size: 35px;
          }
        }

        .content {
          grid-row: content-s/content-e;
          height: 384px;
          overflow-y: auto;
          overflow-x: hidden;
        }
      }

      .left,
      .right {
        background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/contentbottom_right.png?bn=B1.0.96267");
      }

      .left {
        grid-column: left-s/left-e;
        transform: scaleX(-1);
      }

      .right {
        grid-column: right-s/right-e;
      }
    }

    .bottom {
      grid-row: bottom-s/bottom-e;
      display: grid;
      grid-template-columns: var(--col);

      .left,
      .right {
        position: relative;

        .corner {
          position: absolute;
          inset: 0;

          &::before {
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/contenttop_right3.png?bn=B1.0.96267");

            aspect-ratio: 87 / 65;
          }

          &::after {
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/contenttop_right.png?bn=B1.0.96267");

            aspect-ratio: 29 / 7;
            transform: translateY(1px);
          }

          &::before,
          &::after {
            content: "";
            display: block;
            background-size: cover;
            rotate: 180deg;
            width: 79px;
            translate: -38px;
          }

          .corner-slope {
            position: absolute;
            background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/contenttop_right2.png?bn=B1.0.96267");
            aspect-ratio: 3 / 1;
            width: 79px;
            rotate: 180deg;
            background-repeat: no-repeat;
            transform: translateX(-25px) translateY(7px);
          }
        }
      }

      .right {
        transform: scaleX(-1);
      }

      .center {
        background-image: url("https://akamai.wizard101.com/static/themes/wizard101A/common/images/contentpattern.jpg?bn=B1.0.96267");
      }
    }
  `;return f(t,{get onClick(){return e.onBackdropClick},get class(){return`${e.isOpen?"":"close"}`},id:"w101-trivia-bot-modal",get children(){var n=Dn(),s=n.firstChild,o=s.firstChild,i=o.nextSibling,r=i.firstChild,a=r.nextSibling;return _(r,(()=>{var l=C(()=>!!e.title);return()=>l()&&(()=>{var h=Fn();return _(h,()=>e.title),h})()})()),_(a,()=>e.children),n}})},Hn=e=>{const t=Math.max(e.openTimeMs/2,100),n=S.div`
    @keyframes fadein {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes fadeout {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    animation-name: fadein;
    animation-duration: ${t.toString()}ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;

    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, ${((e.opacity??35)/100).toString()});
    z-index: 99999;

    &.close {
      animation-name: fadeout;
    }
`;return f(n,{get class(){return e.isOpen?"":"close"}})},be=class be{constructor(){d(this,"backdropElmt");d(this,"modalElmt");this.backdropElmt=document.createElement("div"),this.backdropElmt.id="backdrop",this.modalElmt=document.createElement("div"),this.modalElmt.id="modal",document.body.appendChild(this.backdropElmt),document.body.appendChild(this.modalElmt)}static getInstance(){return this.instance||(this.instance=new be),this.instance}};d(be,"instance");let Fe=be;const Gn=(e,t)=>{const n=Fe.getInstance(),s=(t==null?void 0:t.openTimeMs)??300,o=new j(Boolean,"modalIsOpen"),[i,r]=ie(o.get());Te(()=>f(We,{get when(){return i()},get children(){return f(Vn,{get title(){return t==null?void 0:t.title},onBackdropClick:l,get isOpen(){return o.get()},openTimeMs:s,get children(){return e(u)}})}}),n.modalElmt),Te(()=>f(We,{get when(){return i()},get children(){return f(Hn,{get opacity(){return t==null?void 0:t.backdropOpacityPercent},get isOpen(){return o.get()},openTimeMs:s})}}),n.backdropElmt),G(()=>{if(i()){document.body.style.overflowY="hidden";return}document.body.style.overflowY="auto"});const a=c=>{o.get()&&c.key==="Escape"&&u()};addEventListener("keydown",a);function l(c){c.currentTarget===c.target&&u()}function h(){o.set(!0),r(!0)}function u(){o.set(!1),setTimeout(()=>{r(!1)},s)}return{openModal:h,closeModal:u}};var Rn=y("<input>");const Un=S.div`
  width: 26px;
  height: 26px;
  position: relative;
  cursor: pointer;
  background-image: url("https://akamai.wizard101.com/static/themes/global/images/kiaccountscheckbox.gif?bn=B1.0.96267");
  background-repeat: no-repeat;
  background-position: -25px top;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  aspect-ratio: 1 / 1;

  &:has(input:checked) {
    background-position: 0px top;
  }

  input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    inset: 0;
    margin: 0;
  }
`,Kn=e=>{const t=e.type??"checkbox",n=s=>{var r;const i=s.target.checked;(r=e.onCheck)==null||r.call(e,i)};return f(Un,{get class(){return e.class},get children(){var s=Rn();return s.$$click=n,x(s,"type",t),A(()=>x(s,"id",e.id)),A(()=>s.checked=e.checked),s}})};Ee(["click"]);const qe=class qe{static getId(){return`w101-trivia-bot-checkbox-${++qe.id}`}};d(qe,"id",0);let pe=qe;var Yn=y("<label>");const Qn=S.div`
  display: grid;
  grid-template-columns: 26px 1fr;
  align-items: center;
  grid-column-gap: 10px;

  label {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin-bottom: 0;
    margin-left: 3px;
    padding: 0;
    font-size: .8rem;
    cursor: pointer;
  }

  .checkbox {
    margin-right: 5px;
    margin-bottom: 5px;
  }
`,Jn=e=>{const t=e.name?e.name:pe.getId();return f(Qn,{get class(){return e.class},get children(){return[f(Kn,{id:t,class:"checkbox",get onCheck(){return e.onCheck},get checked(){return e.checked}}),(()=>{var n=Yn();return x(n,"for",t),_(n,()=>e.title),n})()]}})},Xn=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();var Zn=y("<label>"),es=y("<textarea>"),ts=y("<input>");const ns=S.div`
  display: grid;
  grid-template-columns: 26px 1fr;
  align-items: center;
  grid-column-gap: 10px;

  label {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    margin-bottom: 0;
    margin-left: 3px;
    padding: 0;
    font-size: 0.8rem;
    cursor: pointer;
  }

  input,
  textarea {
    width: 100%;
    resize: none;
  }
`,pt=e=>{const t=e.name?e.name:pe.getId(),n=s=>{var o;(o=e.onChange)==null||o.call(e,s.target.value)};return f(ns,{get class(){return e.class},get children(){return[C(()=>C(()=>!!e.asTextarea)()?(()=>{var s=es();return s.addEventListener("change",n),x(s,"id",t),A(o=>{var i=e.placeholder,r=e.max;return i!==o.e&&x(s,"placeholder",o.e=i),r!==o.t&&x(s,"maxlength",o.t=r),o},{e:void 0,t:void 0}),A(()=>s.value=e.value),s})():(()=>{var s=ts();return s.addEventListener("change",n),x(s,"id",t),A(o=>{var i=e.type??"text",r=e.placeholder,a=e.max,l=e.max,h=e.min;return i!==o.e&&x(s,"type",o.e=i),r!==o.t&&x(s,"placeholder",o.t=r),a!==o.a&&x(s,"maxlength",o.a=a),l!==o.o&&x(s,"max",o.o=l),h!==o.i&&x(s,"min",o.i=h),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),A(()=>s.value=e.value),s})()),(()=>{var s=Zn();return x(s,"for",t),_(s,()=>e.title),s})()]}})};var ss=y("<h3>"),os=y("<span class=setting-group>");const is=S.div`
  margin-top: calc(58px / 2);
  justify-content: space-evenly;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  h3 {
    text-align: center;
    font-size: 25px;
  }

  .setting-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    justify-items: center;

    .input-group {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      gap: 10px;

      textarea,
      input {
        width: 90%;
      }

      &.small input,
      textarea {
        width: 40%;
      }
    }
  }
`,rs=()=>f(is,{get children(){return Me.map(e=>typeof e=="string"?(()=>{var t=ss();return _(t,()=>e.split("_").map(n=>Xn(n)).join(" ")),t})():(()=>{var t=os();return _(t,()=>e.map(n=>n instanceof hn?f(pt,{get title(){return n.title},get value(){return n.get()},onChange:s=>n.set(s),class:"input-group",get asTextarea(){var s;return(s=n.options)==null?void 0:s.asTextArea},get max(){var s;return(s=n.options)==null?void 0:s.max}}):n instanceof ct?f(pt,{get title(){return n.title},type:"number",get max(){var s;return(s=n.options)==null?void 0:s.max},get min(){var s;return(s=n.options)==null?void 0:s.min},class:"input-group small",get value(){return n.get().toString()},onChange:s=>{let o=parseInt(s);if(!n.options){n.set(o);return}n.options.max&&(o=Math.min(o,n.options.max)),n.options.min&&(o=Math.max(o,n.options.min)),n.set(o)}}):f(Jn,{get title(){return n.title},get checked(){return n.get()},onCheck:s=>n.set(s)}))),t})())}}),as=()=>{const e=new j(String,"_grecaptcha",""),t=S.div`
    .clear-captcha {
      color: ${()=>e.get().length!==0?"#dc3545":"#f5e2a8"};
    }
  `;return f(De,{titleContent:"Actions",foldable:{localStorageKey:"actions-panel"},get children(){return f(t,{get children(){return f(Ne,{class:"clear-captcha",value:"Clear Captcha Storage",onClick:()=>e.set("")})}})}})};var ls=y("<h2>Trivia Q # <!> / 12"),cs=y("<h2>Trivia # <!> / 10"),us=y("<h2>Wrong Questions: ");const hs=()=>{const e=S.div`
    h2 {
      margin-left: 10px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  `;return f(e,{get children(){return f(De,{titleContent:"Trivia data",foldable:{localStorageKey:"trivia-data-panel"},get children(){return[(()=>{var t=ls(),n=t.firstChild,s=n.nextSibling;return s.nextSibling,_(t,()=>te.get(),s),t})(),(()=>{var t=cs(),n=t.firstChild,s=n.nextSibling;return s.nextSibling,_(t,()=>fe.get(),s),t})(),(()=>{var t=us();return t.firstChild,_(t,()=>ge.values.join(", "),null),t})()]}})}})};var ds=y("<div>Auto Login");const fs=S("div")`
  margin-left: 13px;
  margin-right: 13px;

  .logged-in .content {
    filter: hue-rotate(70deg) grayscale(25%);
  }
`,gs=S.div`
  display: grid;
  grid-template-columns: 1fr 20px;
`,ws=()=>{const{openModal:e}=Gn(()=>f(rs,{}),{title:"Trivia Bot Settings",backdropOpacityPercent:50}),t=f(gs,{get children(){return[ds(),f(Mn,{get visible(){return N.hasCredentials()}})]}});return f(fs,{get children(){return[f(De,{titleContent:t,get titleClass(){return N.hasCredentials()?"logged-in":""},foldable:{localStorageKey:"login-panel"},get children(){return f(zn,{})}}),f(Le,{onClick:e,content:"Trivia Bot Settings"}),f(as,{}),f(hs,{})]}})},ms=S("span")`
  .text-content {
    font-family: Comic Sans, Comic Sans MS, Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #673f16;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`,ps=()=>f(ms,{get children(){return f(ws,{})}}),ys=async()=>{te.clearValue();const e=()=>J(L.second,L.second*2);await P(e());const t=document.querySelector(".kiaccountsbuttongreen");b(t,"Results button not found!"),t.click(),await P(e());const n=document.querySelector("#jPopFrame_content");b(n,"jPopFrame not found!");const s=n.contentWindow;b(s,"Content window not found!");const o=s.document.querySelector("#submit");b(o,"Submit button not found!"),fe.set(i=>i+1),o.click(),await P(L.second*2),G(()=>{v.others.attemptToPlaySounds.get()&&$e.done.play()})},bs=async()=>{fe.clearValue(),await P(L.minute),location.reload()},qs=e=>{var n;const t=e.querySelector("h2");return(n=t==null?void 0:t.textContent)!=null&&n.trim().toLowerCase().includes("Come Back Tomorrow".trim().toLowerCase())?"end":e.querySelector(".quizQuestion")?"quiz":e.querySelector(".thumb")?"searching":"results"};new class{constructor(){d(this,"page");var t;const e=document.querySelector("h2");if((t=e==null?void 0:e.textContent)!=null&&t.trim().toLowerCase().includes("Come Back Tomorrow".trim().toLowerCase())){this.page="end";return}if(document.querySelector(".quizQuestion")){this.page="quiz";return}if(document.querySelector(".thumb")){this.page="searching";return}this.page="results"}get get(){return this.page}};const ye=new ft(qs(document));function vs(){const e=document.querySelector("dl");b(e,"Could not find parent element");const t=document.querySelector("#subMenu1_lockOpen");b(t,"Could not find before element");const n=document.createElement("div");e.insertBefore(n,t.nextSibling),Te(()=>f(ps,{}),n),G(()=>{if(Xt(),v.login.autoLogin.get()&&N.autoLogin(),!(!v.login.continueWithoutLogin.get()&&!N.getLoggedIn())){if(ye.get()==="searching"){gn();return}if(ye.get()==="quiz"){qn();return}if(ye.get()==="results"){ys();return}ye.get()==="end"&&bs()}})}vs()});
