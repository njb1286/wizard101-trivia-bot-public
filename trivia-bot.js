(function(W){typeof define=="function"&&define.amd?define(W):W()})(function(){"use strict";var qs=Object.defineProperty;var vs=(W,y,P)=>y in W?qs(W,y,{enumerable:!0,configurable:!0,writable:!0,value:P}):W[y]=P;var f=(W,y,P)=>(vs(W,typeof y!="symbol"?y+"":y,P),P);const W=(e,t)=>e===t,y=Symbol("solid-proxy"),P=Symbol("solid-track"),ee={equals:W};let De=Re;const O=1,te=2,Ve={owned:null,cleanups:null,context:null,owner:null};var w=null;let be=null,wt=null,m=null,q=null,C=null,ne=0;function mt(e,t){const n=m,s=w,o=e.length===0,i=t===void 0?s:t,r=o?Ve:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=o?e:()=>e(()=>T(()=>ie(r)));w=r,m=null;try{return V(a,!0)}finally{m=n,w=s}}function U(e,t){t=t?Object.assign({},ee,t):ee;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),Ge(n,o));return[He.bind(n),s]}function v(e,t,n){const s=ve(e,t,!1,O);K(s)}function M(e,t,n){De=xt;const s=ve(e,t,!1,O);s.user=!0,C?C.push(s):K(s)}function S(e,t,n){n=n?Object.assign({},ee,n):ee;const s=ve(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,K(s),He.bind(s)}function pt(e){return V(e,!1)}function T(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function qe(){return m}function yt(e,t){const n=Symbol("context");return{id:n,Provider:St(n),defaultValue:e}}function bt(e){return w&&w.context&&w.context[e.id]!==void 0?w.context[e.id]:e.defaultValue}function qt(e){const t=S(e),n=S(()=>_e(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function He(){if(this.sources&&this.state)if(this.state===O)K(this);else{const e=q;q=null,V(()=>oe(this),!1),q=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Ge(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],r=be&&be.running;r&&be.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?q.push(i):C.push(i),i.observers&&Ue(i)),r||(i.state=O)}if(q.length>1e6)throw q=[],new Error},!1)),t}function K(e){if(!e.fn)return;ie(e);const t=ne;vt(e,e.value,t)}function vt(e,t,n){let s;const o=w,i=m;m=w=e;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=O,e.owned&&e.owned.forEach(ie),e.owned=null),e.updatedAt=n+1,Ke(r)}finally{m=i,w=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ge(e,s):e.value=s,e.updatedAt=n)}function ve(e,t,n,s=O,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==Ve&&(w.owned?w.owned.push(i):w.owned=[i]),i}function se(e){if(e.state===0)return;if(e.state===te)return oe(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===O)K(e);else if(e.state===te){const s=q;q=null,V(()=>oe(e,t[0]),!1),q=s}}function V(e,t){if(q)return e();let n=!1;t||(q=[]),C?n=!0:C=[],ne++;try{const s=e();return _t(n),s}catch(s){n||(C=null),q=null,Ke(s)}}function _t(e){if(q&&(Re(q),q=null),e)return;const t=C;C=null,t.length&&V(()=>De(t),!1)}function Re(e){for(let t=0;t<e.length;t++)se(e[t])}function xt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:se(s)}for(t=0;t<n;t++)se(e[t])}function oe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===O?s!==t&&(!s.updatedAt||s.updatedAt<ne)&&se(s):o===te&&oe(s,t)}}}function Ue(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=te,n.pure?q.push(n):C.push(n),n.observers&&Ue(n))}}function ie(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),r=n.observerSlots.pop();s<o.length&&(i.sourceSlots[r]=s,o[s]=i,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ie(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function kt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ke(e,t=w){throw kt(e)}function _e(e){if(typeof e=="function"&&!e.length)return _e(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=_e(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function St(e,t){return function(s){let o;return v(()=>o=T(()=>(w.context={...w.context,[e]:s.value},qt(()=>s.children))),void 0),o}}function d(e,t){return T(()=>e(t||{}))}function re(){return!0}const xe={get(e,t,n){return t===y?n:e.get(t)},has(e,t){return t===y?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function ke(e){return(e=typeof e=="function"?e():e)?e:{}}function At(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Se(...e){let t=!1;for(let r=0;r<e.length;r++){const a=e[r];t=t||!!a&&y in a,e[r]=typeof a=="function"?(t=!0,S(a)):a}if(t)return new Proxy({get(r){for(let a=e.length-1;a>=0;a--){const l=ke(e[a])[r];if(l!==void 0)return l}},has(r){for(let a=e.length-1;a>=0;a--)if(r in ke(e[a]))return!0;return!1},keys(){const r=[];for(let a=0;a<e.length;a++)r.push(...Object.keys(ke(e[a])));return[...new Set(r)]}},xe);const n={},s=Object.create(null);for(let r=e.length-1;r>=0;r--){const a=e[r];if(!a)continue;const l=Object.getOwnPropertyNames(a);for(let h=l.length-1;h>=0;h--){const u=l[h];if(u==="__proto__"||u==="constructor")continue;const c=Object.getOwnPropertyDescriptor(a,u);if(!s[u])s[u]=c.get?{enumerable:!0,configurable:!0,get:At.bind(n[u]=[c.get.bind(a)])}:c.value!==void 0?c:void 0;else{const g=n[u];g&&(c.get?g.push(c.get.bind(a)):c.value!==void 0&&g.push(()=>c.value))}}}const o={},i=Object.keys(s);for(let r=i.length-1;r>=0;r--){const a=i[r],l=s[a];l&&l.get?Object.defineProperty(o,a,l):o[a]=l?l.value:void 0}return o}function Ye(e,...t){if(y in e){const o=new Set(t.length>1?t.flat():t[0]),i=t.map(r=>new Proxy({get(a){return r.includes(a)?e[a]:void 0},has(a){return r.includes(a)&&a in e},keys(){return r.filter(a=>a in e)}},xe));return i.push(new Proxy({get(r){return o.has(r)?void 0:e[r]},has(r){return o.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!o.has(r))}},xe)),i}const n={},s=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,o),r=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let a=!1,l=0;for(const h of t)h.includes(o)&&(a=!0,r?s[l][o]=i.value:Object.defineProperty(s[l],o,i)),++l;a||(r?n[o]=i.value:Object.defineProperty(n,o,i))}return[...s,n]}const Wt=e=>`Stale read from <${e}>.`;function Ae(e){const t=e.keyed,n=S(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return S(()=>{const s=n();if(s){const o=e.children;return typeof o=="function"&&o.length>0?T(()=>o(t?s:()=>{if(!T(n))throw Wt("Show");return e.when})):o}return e.fallback},void 0,void 0)}const Ct=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Tt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ct]),Et=new Set(["innerHTML","textContent","innerText","children"]),Bt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),$t=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Pt(e,t){const n=$t[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Mt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),It={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function zt(e,t,n){let s=n.length,o=t.length,i=s,r=0,a=0,l=t[o-1].nextSibling,h=null;for(;r<o||a<i;){if(t[r]===n[a]){r++,a++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===r){const u=i<s?a?n[a-1].nextSibling:n[i-a]:l;for(;a<i;)e.insertBefore(n[a++],u)}else if(i===a)for(;r<o;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[i-1]&&n[a]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[a++],t[r++].nextSibling),e.insertBefore(n[--i],u),t[o]=n[i]}else{if(!h){h=new Map;let c=a;for(;c<i;)h.set(n[c],c++)}const u=h.get(t[r]);if(u!=null)if(a<u&&u<i){let c=r,g=1,D;for(;++c<o&&c<i&&!((D=h.get(t[c]))==null||D!==u+g);)g++;if(g>u-a){const Fe=t[r];for(;a<u;)e.insertBefore(n[a++],Fe)}else e.replaceChild(n[a++],t[r++])}else r++;else t[r++].remove()}}}const Je="_$DX_DELEGATE";function We(e,t,n,s={}){let o;return mt(i=>{o=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function p(e,t,n){let s;const o=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function Ce(e,t=window.document){const n=t[Je]||(t[Je]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Ht))}}function b(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function jt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Qe(e,t){t==null?e.removeAttribute("class"):e.className=t}function Te(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function Lt(e,t,n={}){const s=Object.keys(t||{}),o=Object.keys(n);let i,r;for(i=0,r=o.length;i<r;i++){const a=o[i];!a||a==="undefined"||t[a]||(Ze(e,a,!1),delete n[a])}for(i=0,r=s.length;i<r;i++){const a=s[i],l=!!t[a];!a||a==="undefined"||n[a]===l||!l||(Ze(e,a,!0),n[a]=l)}return n}function Nt(e,t,n){if(!t)return n?b(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(s.setProperty(i,o),n[i]=o);return n}function Xe(e,t={},n,s){const o={};return v(()=>o.children=Y(e,t.children,o.children)),v(()=>typeof t.ref=="function"?Ft(t.ref,e):t.ref=e),v(()=>Dt(e,t,n,!0,o,!0)),o}function Ft(e,t,n){return T(()=>e(t,n))}function k(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return Y(e,t,s,n);v(o=>Y(e,t(),o,n),s)}function Dt(e,t,n,s,o={},i=!1){t||(t={});for(const r in o)if(!(r in t)){if(r==="children")continue;o[r]=et(e,r,null,o[r],n,i)}for(const r in t){if(r==="children")continue;const a=t[r];o[r]=et(e,r,a,o[r],n,i)}}function Vt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ze(e,t,n){const s=t.trim().split(/\s+/);for(let o=0,i=s.length;o<i;o++)e.classList.toggle(s[o],n)}function et(e,t,n,s,o,i){let r,a,l,h,u;if(t==="style")return Nt(e,n,s);if(t==="classList")return Lt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),g=Ot.has(c);if(!g&&s){const D=Array.isArray(s)?s[0]:s;e.removeEventListener(c,D)}(g||n)&&(Te(e,c,n,g),g&&Ce([c]))}else if(t.slice(0,5)==="attr:")b(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(l=Et.has(t))||!o&&((h=Pt(t,e.tagName))||(a=Tt.has(t)))||(r=e.nodeName.includes("-")))u&&(t=t.slice(5),a=!0),t==="class"||t==="className"?Qe(e,n):r&&!a&&!l?e[Vt(t)]=n:e[h||t]=n;else{const c=o&&t.indexOf(":")>-1&&It[t.split(":")[0]];c?jt(e,c,t,n):b(e,Bt[t]||t,n)}return n}function Ht(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Y(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),r){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=H(e,n,s,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=H(e,n,s);else{if(i==="function")return v(()=>{let a=t();for(;typeof a=="function";)a=a();n=Y(e,a,n,s)}),()=>n;if(Array.isArray(t)){const a=[],l=n&&Array.isArray(n);if(Ee(a,t,n,o))return v(()=>n=Y(e,a,n,s,!0)),()=>n;if(a.length===0){if(n=H(e,n,s),r)return n}else l?n.length===0?tt(e,a,s):zt(e,n,a):(n&&H(e),tt(e,a));n=a}else if(t.nodeType){if(Array.isArray(n)){if(r)return n=H(e,n,s,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ee(e,t,n,s){let o=!1;for(let i=0,r=t.length;i<r;i++){let a=t[i],l=n&&n[e.length],h;if(!(a==null||a===!0||a===!1))if((h=typeof a)=="object"&&a.nodeType)e.push(a);else if(Array.isArray(a))o=Ee(e,a,l)||o;else if(h==="function")if(s){for(;typeof a=="function";)a=a();o=Ee(e,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||o}else e.push(a),o=!0;else{const u=String(a);l&&l.nodeType===3&&l.data===u?e.push(l):e.push(document.createTextNode(u))}}return o}function tt(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function H(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const a=t[r];if(o!==a){const l=a.parentNode===e;!i&&!r?l?e.replaceChild(o,a):e.insertBefore(o,n):l&&a.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const Gt="http://www.w3.org/2000/svg";function Rt(e,t=!1){return t?document.createElementNS(Gt,e):document.createElement(e)}function Ut(e){const[t,n]=Ye(e,["component"]),s=S(()=>t.component);return S(()=>{const o=s();switch(typeof o){case"function":return T(()=>o(n));case"string":const i=Mt.has(o),r=Rt(o,i);return Xe(r,n,i),r}})}const ae=new class{constructor(){f(this,"page");var t;const e=document.querySelector("h2");if((t=e==null?void 0:e.textContent)!=null&&t.trim().toLowerCase().includes("Come Back Tomorrow".trim().toLowerCase())){this.page="end";return}if(document.querySelector(".quizQuestion")){this.page="quiz";return}if(document.querySelector(".thumb")){this.page="searching";return}this.page="results"}get get(){return this.page}},Kt=["Eleventh Grade Vocabulary Trivia","Ninth Grade Vocabulary Trivia","Twelfth Grade Vocabulary Trivia","Tenth Grade Vocabulary Trivia","Texas Facts Trivia","Horse Trivia","Basketball Trivia","Solar System Trivia","Norse Mythology Trivia","Weather Trivia","Famous Poets","State Nicknames Trivia","English Punctuation Trivia","Big Cats Trivia","Ancient Egypt Trivia","Wizard101 Spellbinding Trivia","Soccer Trivia"],I=e=>e.trim().toLowerCase(),le=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),nt=[],N=async e=>new Promise(t=>{const n=setTimeout(()=>{t()},e);nt.push(n)}),Yt=()=>{nt.forEach(e=>{clearTimeout(e)})},Be={done:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345432/mch_uvkd4w.mp3"),error:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345442/minc_r17thf.mp3"),empty:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686346114/empty_h74hy6.mp3")};function Jt(e){return e===String?"string":e===Boolean?"boolean":e===Number?"number":""}const Qt=e=>Object.keys(e),Xt=e=>Object.values(e),Zt=e=>{try{return JSON.parse(e)}catch{return e}},$e=Symbol("store-raw"),G=Symbol("store-node"),E=Symbol("store-has"),st=Symbol("store-self");function ot(e){let t=e[y];if(!t&&(Object.defineProperty(e,y,{value:t=new Proxy(e,nn)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let o=0,i=n.length;o<i;o++){const r=n[o];s[r].get&&Object.defineProperty(e,r,{enumerable:s[r].enumerable,get:s[r].get.bind(t)})}}return t}function ce(e){let t;return e!=null&&typeof e=="object"&&(e[y]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function J(e,t=new Set){let n,s,o,i;if(n=e!=null&&e[$e])return n;if(!ce(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,a=e.length;r<a;r++)o=e[r],(s=J(o,t))!==o&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),a=Object.getOwnPropertyDescriptors(e);for(let l=0,h=r.length;l<h;l++)i=r[l],!a[i].get&&(o=e[i],(s=J(o,t))!==o&&(e[i]=s))}return e}function ue(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function Q(e,t,n){if(e[t])return e[t];const[s,o]=U(n,{equals:!1,internal:!0});return s.$=o,e[t]=s}function en(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===y||t===G||(delete n.value,delete n.writable,n.get=()=>e[y][t]),n}function it(e){qe()&&Q(ue(e,G),st)()}function tn(e){return it(e),Reflect.ownKeys(e)}const nn={get(e,t,n){if(t===$e)return e;if(t===y)return n;if(t===P)return it(e),n;const s=ue(e,G),o=s[t];let i=o?o():e[t];if(t===G||t===E||t==="__proto__")return i;if(!o){const r=Object.getOwnPropertyDescriptor(e,t);qe()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(r&&r.get)&&(i=Q(s,t,i)())}return ce(i)?ot(i):i},has(e,t){return t===$e||t===y||t===P||t===G||t===E||t==="__proto__"?!0:(qe()&&Q(ue(e,E),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:tn,getOwnPropertyDescriptor:en};function he(e,t,n,s=!1){if(!s&&e[t]===n)return;const o=e[t],i=e.length;n===void 0?(delete e[t],e[E]&&e[E][t]&&o!==void 0&&e[E][t].$()):(e[t]=n,e[E]&&e[E][t]&&o===void 0&&e[E][t].$());let r=ue(e,G),a;if((a=Q(r,t,o))&&a.$(()=>n),Array.isArray(e)&&e.length!==i){for(let l=e.length;l<i;l++)(a=r[l])&&a.$();(a=Q(r,"length",i))&&a.$(e.length)}(a=r[st])&&a.$()}function rt(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const o=n[s];he(e,o,t[o])}}function sn(e,t){if(typeof t=="function"&&(t=t(e)),t=J(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const o=t[n];e[n]!==o&&he(e,n,o)}he(e,"length",s)}else rt(e,t)}function X(e,t,n=[]){let s,o=e;if(t.length>1){s=t.shift();const r=typeof s,a=Array.isArray(e);if(Array.isArray(s)){for(let l=0;l<s.length;l++)X(e,[s[l]].concat(t),n);return}else if(a&&r==="function"){for(let l=0;l<e.length;l++)s(e[l],l)&&X(e,[l].concat(t),n);return}else if(a&&r==="object"){const{from:l=0,to:h=e.length-1,by:u=1}=s;for(let c=l;c<=h;c+=u)X(e,[c].concat(t),n);return}else if(t.length>1){X(e[s],t,[s].concat(n));return}o=e[s],n=[s].concat(n)}let i=t[0];typeof i=="function"&&(i=i(o,n),i===o)||s===void 0&&i==null||(i=J(i),s===void 0||ce(o)&&ce(i)&&!Array.isArray(i)?rt(o,i):he(e,s,i))}function on(...[e,t]){const n=J(e||{}),s=Array.isArray(n),o=ot(n);function i(...r){pt(()=>{s&&r.length===1?sn(n,r[0]):X(n,r)})}return[o,i]}class rn{constructor(t,n){f(this,"values");f(this,"setValue");f(this,"defaultValue");this.key=t,this.defaultValue=n??[];const[s,o]=on(this.getDefaultValue());this.values=s,this.setValue=o}getDefaultValue(){const t=localStorage.getItem(this.key);return t?JSON.parse(t):(localStorage.setItem(this.key,JSON.stringify(this.defaultValue)),this.defaultValue)}set(t,n){if(Array.isArray(t)){this.setValue(t),localStorage.setItem(this.key,JSON.stringify(t));return}this.setValue(t,n),localStorage.setItem(this.key,JSON.stringify(this.values))}add(t,n){if(n===void 0){this.set([...this.values,t]);return}this.set([...this.values.slice(0,n),t,...this.values.slice(n)])}remove(t){const n=new Array(this.values.length-1);for(let s=0,o=0;s<this.values.length;s++)t!==s&&(n[o++]=this.values[s]);this.set(n)}reset(){localStorage.removeItem(this.key),this.setValue(this.defaultValue)}}class an{constructor(t,n,s){f(this,"get");f(this,"setValue");this.key=t,this.converter=n,this.defaultValue=s;const[o,i]=U(this.getDefaultValue());this.get=o,this.setValue=i}getDefaultValue(){const t=localStorage.getItem(this.key);return t?this.converter(t):(localStorage.setItem(this.key,String(this.defaultValue)),this.defaultValue)}set(t){let n;typeof t=="function"?n=t(this.get()):n=t,this.setValue(n),localStorage.setItem(this.key,String(n))}clearValue(){this.get()!==this.defaultValue&&(this.setValue(this.defaultValue),localStorage.removeItem(this.key))}}class R extends an{constructor(t,n,s){super(n,Zt,s??t())}}class Pe extends R{constructor(n,s,o,i){super(n,s,i);f(this,"type");this.title=o,this.type=Jt(n)}}class B extends Pe{constructor(t,n,s=!1){super(Boolean,t,n,s),this.title=n}}class at extends Pe{constructor(t,n,s){super(Number,t,n,s==null?void 0:s.defaultValue),this.title=n,this.options=s}}class ln extends Pe{constructor(t,n,s){super(String,t,n,s==null?void 0:s.defaultValue),this.title=n,this.options=s}}const de={quiz:{pressNextButton:new B("pressNextButton","Press next question button",!0),highlightCorrectAnswer:new B("highlightCorrectAnswer","Highlight correct answer",!0),displayCorrectAnswer:new B("displayCorrectAnswer","Display correct answer under title"),highlightWrongAnswer:new B("highlightWrongAnswer","Highlight the wrong answer when it gets selected",!0),wrongAnswerCount:new at("wrongAnswerCount","Max number of wrong answers to select",{max:3,defaultValue:2})},searcher:{autoClick:new B("autoClick","Automatically search for an available quiz, and click it when found",!0),autoReload:new B("autoReload","Automatically reload the page if no valid trivia was found",!0)},login:{autoLogin:new B("autoLogin","Automatically login to site (using given credentials)",!0),continueWithoutLogin:new B("continueWithoutLogin","Do quiz without login")},others:{attemptToPlaySounds:new B("attemptToPlaySounds","Attempt to play sounds when the trivia is done and when there is an error",!0)}},A=(e,t)=>de[e][t].get,Oe=[];for(const e of Qt(de)){Oe.push(e);const t=de[e];Oe.push(Xt(t))}const lt=()=>{M(()=>{A("others","attemptToPlaySounds")()?Be.error.play():Be.error.pause()}),document.title="ERROR"};function _(e,t){const n=t??"Value is null or undefined";if(e==null)throw lt(),new Error(n)}class cn{constructor(t){f(this,"title");f(this,"used");f(this,"clickable");const n=t.querySelector("h3");_(n,"Title element not found"),this.title=I(n.innerText),this.used=t.classList.contains("notake");const s=t.querySelector("a");_(s,"Clickable element not found"),this.clickable=s}}function ct(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)+(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}function ut(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)-(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}class Me{constructor(t){f(this,"get");f(this,"set");const[n,s]=U(t);this.get=n,this.set=s}}const fe=new R(Number,"triviaCount",1),Z=new R(Number,"questionCount",1),z=new class{constructor(){f(this,"username");f(this,"password");f(this,"loggedIn");this.username=new Me(this.getDefaultUsername()),this.password=new Me(this.getDefaultPassword()),this.loggedIn=new Me(this.getDefaultLoggedIn())}getUsername(){return S(()=>ut(this.username.get()))}getPassword(){return S(()=>ut(this.password.get()))}getLoggedIn(){return this.loggedIn.get()}getDefaultLoggedIn(){return JSON.parse(localStorage.getItem("loggedIn")??"false")}getDefaultUsername(){return localStorage.getItem("username")??""}getDefaultPassword(){return localStorage.getItem("password")??""}setIsLoggedIn(e){localStorage.setItem("loggedIn",e.toString()),this.loggedIn.set(e)}useCredentials(e,t){if(!e||!t){alert("Please enter a username and password!");return}const n=ct(e),s=ct(t);localStorage.setItem("username",n),localStorage.setItem("password",s),this.username.set(n),this.password.set(s),this.setIsLoggedIn(!0),this.autoLogin()}clearCredentials(){localStorage.removeItem("username"),localStorage.removeItem("password"),this.username.set(""),this.password.set(""),this.setIsLoggedIn(!1)}autoLogin(){const e=document.querySelector("#loginUserName"),t=document.querySelector("#loginPassword"),n=document.querySelector('input[value="Login"]');if(!e||!t||!n)return;const s=this.getUsername(),o=this.getPassword();return!s()||!o()?void 0:(e.value=s(),t.value=o(),setTimeout(()=>{fe.clearValue(),Z.clearValue(),n.click()},1e3))}},ge=new rn("wrongCount");function un(){const e=de.quiz.wrongAnswerCount.options.max;if(e===0){ge.set([]);return}const t=Math.floor(Math.random()*(e+1)),n=Array.from({length:12},(o,i)=>i+1),s=[];for(let o=0;o<t;o++){const i=Math.floor(Math.random()*n.length);s.push(n[i]),n.splice(i,1)}ge.set(s)}async function hn(){let e;const t=document.querySelectorAll(".quiz-hub-category");for(const s of t)for(const o of s.querySelectorAll("li")){const i=new cn(o);if(n(i))break}function n(s){if(s.used)return!1;for(const o of Kt){const i=I(o);if(s.title===i)return e=s,!0}return!1}await N(le(5e3,1e4)),un(),M(()=>{if(!(!A("login","continueWithoutLogin")()&&!z.getLoggedIn())){if(!e){A("searcher","autoReload")()&&window.location.reload();return}A("searcher","autoClick")()&&e.clickable.click()}})}const j=new class{constructor(){f(this,"second",1e3);f(this,"minute",60*this.second);f(this,"hour",60*this.minute);f(this,"day",24*this.hour)}},dn=(e,t)=>{const n=t.filter(s=>!s.equals(e));return n[Math.floor(Math.random()*n.length)]},fn=async(e,t)=>{let n,s=!1;ge.values.includes(Z.get())&&(s=!0,n=dn(e,t)),n||(n=e),M(()=>{if(!A("quiz","highlightWrongAnswer")()){n.parentElement.style.backgroundColor="transparent";return}s&&(n.parentElement.style.backgroundColor="#dc3545")}),await N(le(j.second*5,j.second*8)),n.checkbox.click()},gn=[{name:"Eleventh Grade Vocabulary Trivia",data:[{question:"Denotation",answers:["a word that names or signifies something specific"]},{question:"Discern",answers:["to recognize the difference "]},{question:"Ambiguity",answers:["doubtfulness or uncertainty of meaning or intention"]},{question:"Conceit",answers:["an excessively favorable opinion of one's own ability, importance or wit"]},{question:"Quandary",answers:["a state of extreme dishonor"]},{question:"Buoyancy",answers:["the power to float or rise in a fluid, the upward pressure exerted by the fluid in which a body is immersed"]},{question:"Annotated",answers:["supplied with or containing explanatory notes and textual comments"]},{question:"Enigma",answers:["a mystery "]},{question:"Allegory",answers:["a representation of an abstract or spiritual meaning through concrete or material forms"]},{question:"Procure",answers:["to obtain "]},{question:"Auspicious",answers:["favorable, noteworthy "]},{question:"Principle",answers:["a fundamental, primary, or general law or truth from which others are derived"]},{question:"Assuage",answers:["to relieve or soothe "]},{question:"Euphemism",answers:["the substitution of a mild, indirect, or vague expression for one thought to be offensive, harsh, or blunt"]},{question:"Conspicuous",answers:["noticeable, obvious "]},{question:"Anecdote",answers:["a short account of a particular incident or event of an interesting or amusing nature, often biographical."]}]},{name:"Ninth Grade Vocabulary Trivia",data:[{question:"Parsimony",answers:["extreme care in spending money"]},{question:"Tangible",answers:["possible to be treated as fact"]},{question:"Eccentric",answers:["a person of a specified kind (usually with many eccentricities)"]},{question:"Inadvertent",answers:["without intention (especially resulting from heedless action)"]},{question:"Verbose",answers:["using or containing too many words"]},{question:"Abstract",answers:["a concept or idea not associated with any specific instance"]},{question:"Belittle",answers:["lessen the authority, dignity, or reputation of"]},{question:"Guile",answers:["shrewdness as demonstrated by being skilled in deception"]},{question:"Heed",answers:["paying particular notice (as to children or helpless people)"]},{question:"Advocate",answers:["a person who pleads for a cause or propounds an idea"]},{question:"Mar",answers:["a mark or flaw that spoils the appearance of something (especially on a person's body)"]},{question:"Comply",answers:["act in accordance with someone's rules, commands, or wishes"]},{question:"Censure",answers:["harsh criticism or disapproval"]},{question:"Deference",answers:["a disposition or tendency to yield to the will of others"]},{question:"Facilitate",answers:["make easier"]},{question:"Recalcitrant",answers:["marked by stubborn resistance to authority"]}]},{name:"Twelfth Grade Vocabulary Trivia",data:[{question:"Peruse",answers:["reading with careful attention"]},{question:"Guru",answers:["religious teacher"]},{question:"Hegemony",answers:["one country/group has leadership over another"]},{question:"Jovial",answers:["happy, cheery"]},{question:"Enervate",answers:["to weaken, or to take energy from"]},{question:"Impetuous",answers:["characterized by undue haste and lack of thought or deliberation"]},{question:"Conundrum",answers:["a difficult problem"]},{question:"Benevolent",answers:["showing or motivated by sympathy and understanding and generosity"]},{question:"Loquacious",answers:["talkative, chatty"]},{question:"Evanescent",answers:["tending to vanish like vapor"]},{question:"Antithesis",answers:["the direct opposite or contrast to a previously given assertion"]},{question:"Fortuitous",answers:["occurring by happy chance"]},{question:"Brazen",answers:["unrestrained by convention or propriety"]},{question:"Deleterious",answers:["harmful to living things"]},{question:"Chicanery",answers:["deceiving someone, scam"]},{question:"Sensuous",answers:["all senses, dealing w/ all senses"]}]},{name:"Tenth Grade Vocabulary Trivia",data:[{question:"Gregarious",answers:["seeking and enjoying the company of others"]},{question:"Injunction",answers:["a formal command or admonition"]},{question:"Malevolent",answers:["wishing or appearing to wish evil to others"]},{question:"Phonetic",answers:["related to the sounds in a language"]},{question:"Malicious",answers:["wishing evil or harm upon others"]},{question:"Junction",answers:["an act of joining or adjoining things"]},{question:"Dialogue",answers:["a conversation between two persons"]},{question:"Segregate",answers:["separating into different groups"]},{question:"Congregate",answers:["To come together in a group, assemble."]},{question:"Soliloquy",answers:["the act of talking to oneself or a dramatic monologue"]},{question:"Eloquent",answers:["expressing yourself readily, clearly, effectively"]},{question:"Adjunct",answers:["something attached to but holding an inferior position"]},{question:"Juncture",answers:["a joining together; the point at which two things are joined; any important point in time"]},{question:"Malcontent",answers:["person dissatisfied with existing state of affairs"]},{question:"Malady",answers:["a sickness, illness, disease, disorder"]}]},{name:"Texas Facts Trivia",data:[{question:"Which Texan city is considered the live music capital of the world?",answers:["Austin"]},{question:"Texas comes from the Caddo word Tejas, which means what?",answers:["Friends or Allies"]},{question:"What is the largest city in Texas population wise?",answers:["Houston"]},{question:"What is the Texas state flower?",answers:["Bluebonnet"]},{question:"Remember the _____.",answers:["Alamo"]},{question:"What is the state bird of Texas?",answers:["Mockingbird"]},{question:"What natural resource gave Texas a large economic boom?",answers:["Oil"]},{question:"What is the capital of Texas?",answers:["Austin"]},{question:"How many cattle are estimated to exist in Texas?",answers:["16 million"]},{question:"What is the only US State with a larger land mass than Texas?",answers:["Alaska"]},{question:"Which popular soft drink originated in Texas?",answers:["Dr Pepper"]},{question:"What large body of water is off the Texas coast?",answers:["Gulf of Mexico"]},{question:"Texas is called the ______ state.",answers:["Lone Star"]},{question:"Texas has the country's largest herd of what kind of animal?",answers:["Whitetail Deer"]},{question:"Which US president was born in Texas?",answers:["Dwight D Eisenhower"]},{question:"What is the only US state with a larger population than Texas?",answers:["California"]},{question:"What is the state plant?",answers:["Prickly Pear Cactus"]},{question:"What is the state dish of Texas?",answers:["Chili"]}]},{name:"Horse Trivia",data:[{question:"Which breed is the fastest horse in the world over short distances?",answers:["American Quarter Horse"]},{question:"Which famous race horse most recently won the Triple Crown?",answers:["Affirmed"]},{question:"Which is a part that both english and western saddles have?",answers:["Cantle"]},{question:"In this equestrian sport the horse is judged on its jumping style and manners:",answers:["Hunters"]},{question:"This American breed is known for its high stepping gaits and showy style.",answers:["American Saddlebred"]},{question:"A hand is how many inches?",answers:["Four"]},{question:"This equestrian sport the horse is judged on its movement and manners in western tack:",answers:["Western Pleasure"]},{question:"Which of the following is not a recognized horse color?",answers:["Red"]},{question:"This special show jumping class is when a horse and rider jump as high as possible over a brick wall.",answers:["Puissance"]},{question:"Which of the following is not a type of Appaloosa color pattern?",answers:["Confetti"]},{question:"What is the oldest breed of horse?",answers:["Arabian"]},{question:"This popular breed is extremely versatile and especially good at endurance racing:",answers:["Arabian"]},{question:"A pony is any equine _____ hands high or below.",answers:["14.2"]},{question:"Which breed of horse performs at the Spanish riding school in Vienna?",answers:["Lipizzaner"]},{question:"Which of the following is not an Olympic equestrian sport?",answers:["Vaulting"]},{question:"How many beats are in the canter?",answers:["Three"]},{question:"When a horse limps, it's called _______.",answers:["Lame"]},{question:"What is the world's smallest breed of horse?",answers:["Falabella"]},{question:"This western sport includes a pattern of galloping, spins, and sliding stops.",answers:["Reining"]},{question:"Which type of horse is popular in high level Dressage competitions?",answers:["Warmbloods"]}]},{name:"Basketball Trivia",data:[{question:"What is the special shot called that is awarded to a player who has been fouled?",answers:["Free Throw"]},{question:"How many players per team can be on the basketball court at one time?",answers:["Five"]},{question:"How many quarters are in a single game of basketball?",answers:["Four"]},{question:"March Madness refers to which basketball tournament?",answers:["NCAA"]},{question:"As of 2014, how many teams are in the NBA?",answers:["30"]},{question:"In what country was basketball founded?",answers:["America"]},{question:"How many points is a field goal outside the three-point line?",answers:["Three"]},{question:"The original hoops were _____________.",answers:["Peach Baskets"]},{question:"What color were the first basketballs made in?",answers:["Brown"]},{question:"How many points is a free throw worth?",answers:["One"]},{question:"How long is each quarter of a basketball game?",answers:["12 Minutes"]},{question:"How tall is a basketball hoop?",answers:["10'"]},{question:"Most basketball courts have ________ flooring.",answers:["Wood"]},{question:"Unsportsmanlike conduct can result in a _____________.",answers:["Technical Foul"]},{question:"What is the diameter of a basketball hoop?",answers:['18"']},{question:"It is illegal to _______ the ball, or move without bouncing it.",answers:["Carry"]},{question:"How many points is a regular field goal?",answers:["Two"]},{question:"When did professional basketball teams start organizing?",answers:["1920s"]},{question:"What year was the NBA formed?",answers:["1949"]},{question:"Basketball was originally created by a gym teacher because ___________.",answers:["It was raining outside"]}]},{name:"Solar System Trivia",data:[{question:"What is the correct term for Pluto?",answers:["Dwarf Planet"]},{question:"Mars is known as the _____ planet.",answers:["Red"]},{question:"Jupiter has a ________ in its atmosphere but no solid surface.",answers:["Hurricane"]},{question:"What are comets made of?",answers:["Dirty Ice"]},{question:"Which is the smallest planet in the solar system?",answers:["Mercury"]},{question:"What man-made objects exist in our solar system?",answers:["Satellites & Space Junk"]},{question:"Saturn is famous for its ________ that rotate around it.",answers:["Rings"]},{question:"What separates the inner and outer solar system?",answers:["Band of asteroids"]},{question:"Uranus has a _______ glow to it.",answers:["Blue"]},{question:"Which planet is closest to the sun?",answers:["Mercury"]},{question:"Venus' atmosphere is primarily made up of what gas?",answers:["Carbon Dioxide"]},{question:`Which two planets are Earth's "neighbors"?`,answers:["Venus & Mars"]},{question:"What is the largest planet in the solar system?",answers:["Jupiter"]},{question:"Every object in our solar system revolves around the _______.",answers:["Sun"]},{question:"Which planet is furthest from the sun?",answers:["Neptune"]},{question:"How many planets are in our solar system?",answers:["Eight"]}]},{name:"Norse Mythology Trivia",data:[{question:'Who was the god of war and the "All Father"?',answers:["Odin"]},{question:"Who was the first Norse god?",answers:["Buri"]},{question:"Who was Odin's father?",answers:["Borr"]},{question:"Who was the goddess of healing?",answers:["Eir"]},{question:"Who was the god of poetry, music and the harp?",answers:["Bragi"]},{question:"Who was the goddess of the sea?",answers:["Ran"]},{question:"Baldr was the god of what?",answers:["Beauty, innocence, peace and rebirth"]},{question:"Who was the goddess of wisdom?",answers:["Vor"]},{question:"Who was the god of the daytime?",answers:["Dagr"]},{question:"Who was the god of thunder and battle?",answers:["Thor"]},{question:"Who was the wife of Thor and goddess of the harvest?",answers:["Sif"]},{question:"Who was the goddess of old age?",answers:["Elli"]},{question:"Who was the goddess of night?",answers:["Nott"]},{question:"Who was the goddess of spring?",answers:["Eostre"]},{question:"Who was the goddess of marriage and motherhood?",answers:["Frigg"]},{question:"Who was the god of mischief?",answers:["Loki"]},{question:"Who was the god of inspiration?",answers:["Kvasir"]},{question:"Who was the goddess of the sun?",answers:["Sol"]},{question:"Who was the god of dawn?",answers:["Delling"]},{question:"Who was the god of revenge?",answers:["Vali"]},{question:"Who was the goddess of joy and peace?",answers:["Nanna"]},{question:"Norse Mythology is the mythology from what group of people?",answers:["North Germanic"]},{question:"Who was the goddess of prudence?",answers:["Snotra"]},{question:"Who was the goddess of consolation and protection?",answers:["Hlin"]},{question:"Who was the god of strength and son of Thor?",answers:["Magni"]},{question:"Who was the god of skiing, winter, hunting and dueling?",answers:["Ullr"]},{question:"Who was the god of justice, peace and truth?",answers:["Forseti"]},{question:"Who was the goddess of fertility and plough?",answers:["Gefjun"]}]},{name:"Weather Trivia",data:[{question:"What is a tornado called before it hits the ground?",answers:["Funnel Cloud"]},{question:"Where do tornadoes come from?",answers:["Thunderstorms"]},{question:"What is the name of the strong radar that helps predict weather?",answers:["Doppler"]},{question:"In which two seasons are thunderstorms most likely to occur?",answers:["Winter & Spring"]},{question:"A waterspout is actually a weak ______ that forms over water.",answers:["Tornado"]},{question:"What type of cloud is between 6,500 feet to 18,000 feet in the atmosphere?",answers:["Alto"]},{question:"What is a monsoon?",answers:["Seasonal wind that often brings rain"]},{question:"What type of cloud usually looks white and puffy?",answers:["Cumulus"]},{question:"What does a Tornado Watch mean?",answers:["Tornadoes are possible in your area."]},{question:"What causes the electric current that result in lightning?",answers:["Ice particles bumping into each other"]},{question:"Which of the following is NOT needed to cause a blizzard?",answers:["Rotating storm clouds"]},{question:"What is sleet?",answers:["Rain that freezes into ice before it hits ground"]},{question:"The ______ is the center of a hurricane and also the calmest part of the storm.",answers:["Eye"]},{question:"Which of the following is not a characteristic of a hurricane?",answers:["Forms over mountains"]},{question:'Which of these states are not in "Tornado Alley"?',answers:["North Carolina"]},{question:"What type of cloud is above 18,000 feet in the atmosphere?",answers:["Cirrus"]},{question:"What type of cloud is below 6,500 feet in the atmosphere?",answers:["Stratus"]},{question:"How fast do raindrops fall?",answers:["7-18 miles per hour"]},{question:"How is snow formed?",answers:["Water vapor changes directly to ice high in the atmosphere"]},{question:"Tornadoes are rated on what kind of scale?",answers:["F Scale"]}]},{name:"Famous Poets",data:[{question:'Who wrote "A Dream Within A Dream"?',answers:["Edgar Allan Poe"]},{question:'Who wrote "The Road Not Taken"?',answers:["Robert Frost"]},{question:'Who wrote "Stopping by the Woods on a Snowy Evening"?',answers:["Robert Frost"]},{question:'Who wrote "Funeral Blues"?',answers:["W.H. Auden"]},{question:'Who wrote "Do Not Go Gentle To That Good Night"?',answers:["Dylan Thomas"]},{question:'Who wrote "If those I loved were lost"?',answers:["Emily Dickinson"]},{question:'Who wrote "Messy Room"?',answers:["Shel Silverstein"]},{question:'Who wrote "Where the Sidewalk Ends"?',answers:["Shel Silverstein"]},{question:'Who wrote "To You"?',answers:["Walt Whitman"]},{question:'Who wrote "Phenomenal Woman"?',answers:["Maya Angelou"]},{question:'Who Wrote "If You Forget Me"?',answers:["Pablo Neruda"]},{question:'Who wrote "A Girl"?',answers:["Ezra Pound"]},{question:'Who wrote "There is Another Sky"?',answers:["Emily Dickinson"]},{question:'Who Wrote "Let America Be America Again"?',answers:["Langston Hughes"]},{question:'Who wrote "Life is Fine"?',answers:["Langston Hughes"]},{question:'Who Wrote "I Carry Your Heart With Me"?',answers:["E.E. Cummings"]}]},{name:"State Nicknames Trivia",data:[{question:'Which state is known as the "Constitution State?"',answers:["Connecticut"]},{question:'Which state is known as the "Ocean State?"',answers:["Rhode Island"]},{question:'Which state is known as the "Garden State?"',answers:["New Jersey"]},{question:'Which state is known as the "Volunteer State?"',answers:["Tennessee"]},{question:'Which state is known as the "Silver State?"',answers:["Nevada"]},{question:'Which state is known as the "Evergreen State?"',answers:["Washington"]},{question:'Which state is known as the "Great Lakes State?"',answers:["Michigan"]},{question:'Which state is known as the "Aloha State?"',answers:["Hawaii"]},{question:'Which state is known as the "First State?"',answers:["Delaware"]},{question:'Which state is known as the "Magnolia State?"',answers:["Mississippi"]},{question:'Which state is known as the "Prairie State?"',answers:["Illinois"]},{question:'Which state is known as the "Bluegrass State?"',answers:["Kentucky"]},{question:'Which state is known as the "Pelican State?"',answers:["Louisiana"]},{question:'Which state is known as the "Pine Tree State?"',answers:["Maine"]},{question:'Which state is known as the "Empire State?"',answers:["New York"]},{question:'Which state is known as the "Lone Star State?"',answers:["Texas"]},{question:'Which state is known as the "Golden State?"',answers:["California"]},{question:'Which state is known as the "Beaver State?"',answers:["Oregon"]},{question:'Which state is known as the "Sunflower State?"',answers:["Kansas"]},{question:'Which state is known as the "Beehive State?"',answers:["Utah"]}]},{name:"English Punctuation Trivia",data:[{question:"Three periods in a row are called _________.",answers:["Ellipses"]},{question:"A semi-colon is primarily used to:",answers:["Join two connected sentences"]},{question:"Where does the period go in a sentence?",answers:["At the end"]},{question:"Which of the following is NOT a reason to use an exclamation mark (!) ?",answers:["Boredom"]},{question:"Which sentence uses a semi-colon correctly?",answers:["I set out on a quest; the enemies looked fierce."]},{question:"Which sentence below uses a comma(s) correctly?",answers:["Megan, who lives next door loves dogs."]},{question:"Quotation marks are used to do what?",answers:["Show speech"]},{question:"Which sentence correctly uses an apostrophe?",answers:["I cant do it, because it is too hard.","The horse's tail is so pretty."]},{question:"What is the apostrophe's main function?",answers:["Show ownership or posession"]},{question:"Which sentence uses quotation marks correctly?",answers:[`Sally said, "It's time to cook dinner."`]},{question:"An exclamation mark is often used to express what?",answers:["Excitement"]},{question:"Which sentence below uses a comma correctly?",answers:["I love to play video games, but they are hard.","Before you begin, let us learn to play."]},{question:"A period is also used to __________ words.",answers:["Abbreviate"]},{question:"Which date below uses a comma correctly?",answers:["January 1st, 2014"]}]},{name:"Big Cats Trivia",data:[{question:"Which big cat is in the genus Uncia?",answers:["Snow Leopard"]},{question:"Which big cat is not in the genus Panthera?",answers:["Cheetah"]},{question:"Which big cat is in the genus Acinonyx?",answers:["Cheetah"]},{question:"Which of these lions are recently extinct?",answers:["Barbary Lion"]},{question:"One common way to determine what is considered a big cat, is a feline that can ________.",answers:["Roar"]},{question:"Which is the best climber of all the big cats?",answers:["Leopard"]},{question:"A cheetah can run up to speeds of ____ miles an hour.",answers:["70"]},{question:"Which of these big cats purrs instead of roars?",answers:["Cheetah"]},{question:"Which type of tiger is extinct?",answers:["Caspian Tiger"]},{question:"Which is the only big cat that lives in groups?",answers:["Lion"]},{question:"How far can a lion's roar be heard from?",answers:["5 miles"]},{question:"Which is the most endangered big cat?",answers:["Amur Leopard"]},{question:"Tigers are often poached for their parts, used in traditional _________ medicine.",answers:["Chinese"]},{question:"Which of the following is not a criteria for an accredited US Fish & Wildlife Service animal sanctuary?",answers:["Must provide enrichment activities for big cats"]},{question:"Which of the following is not considered a big cat?",answers:["Bobcat"]},{question:"The main threats to big cats are ___________.",answers:["poaching and habitat destruction"]},{question:"Big cats are ________.",answers:["Carnivores"]},{question:"Which of these big cats is an excellent swimmer who loves water?",answers:["Tiger"]},{question:"Which big cat is in the genus Puma?",answers:["Cougar"]},{question:'Which big cat is named from the Native American word meaning "he who kills with one leap"?',answers:["Jaguar"]}]},{name:"Ancient Egypt Trivia",data:[{question:"How many pyramids have been discovered in Egypt so far?",answers:["Over 130"]},{question:"What type of animal did Ancient Egyptians not typically keep as a pet?",answers:["Hippo"]},{question:"What did Ancient Egyptians believe made the Nile River overflow every year?",answers:["The tears of Isis"]},{question:"What is the largest pyramid in Egypt?",answers:["Pyramid of Khufu"]},{question:"What is the name of the most popular board game developed by Ancient Egyptians?",answers:["Senet"]},{question:"Which of these animals was considered sacred by Ancient Egyptians?",answers:["Cat"]},{question:"The Egyptian alphabet consisted of more than ______ hieroglyphs.",answers:["700"]},{question:"Which is not considered a phase of the Ancient Egyptian society?",answers:["Glorious Kingdom"]},{question:"When did the Ancient Egyptian Empire begin to weaken?",answers:["700 BC"]},{question:"Which of the following was <b>not</b> invented by the Ancient Egyptians?",answers:["Horse saddles"]},{question:"Who is considered to be the most important Egyptian god?",answers:["Ra"]},{question:"Because they believed in ________, ancient Egyptians mummified bodies.",answers:["the afterlife"]},{question:"Roughly how many different deities did the Ancient Egyptians believe in?",answers:["More than 2,000"]},{question:"The famous Great Sphinx is missing what part?",answers:["Nose"]},{question:"Which empire was the first to conquer the Ancient Egyptians?",answers:["Assyrian Empire"]},{question:"Which of the following was a calendar not followed by the Ancient Egyptians?",answers:["Animal Calendar"]},{question:"The Ancient Egyptians were the first civilization to invent __________.",answers:["Writing"]},{question:"Who is considered to be the first Pharaoh of Egypt?",answers:["King Menes"]},{question:"A Pharaoh never let his ______ be seen.",answers:["Hair"]},{question:"Which of the following was not invented by the Ancient Egyptians?",answers:["Horse saddles"]}]},{name:"Wizard101 Spellbinding Trivia",data:[{question:'Who tells you to speak these words only unto your mentor: "Meena Korio Jajuka!"',answers:["Priya the Dryad"]},{question:"Who grants the first Shadow Magic spell?",answers:["Sophia DarkSide"]},{question:'Who taunts you with: "Prepare to be broken, kid!"',answers:["Clanker"]},{question:"Morganthe got the Horned Crown from the Spriggan:",answers:["Gisela"]},{question:"Who needs the healing potion from Master Yip?",answers:["Binh Hoa"]},{question:"Who is Haraku Yip's apprentice?",answers:["Binh Hoa"]},{question:"What does Silenus name you once you've defeated Hades?",answers:["Glorious Golden Archon"]},{question:'Who tells you: "A shield is just as much a weapon as the sword."',answers:["Mavra Flamewing"]},{question:"Who taunts: Why I oughta knock you to the moon, you pesky little creep!",answers:["Mugsy"]},{question:"Sumner Fieldgold twice asks you to recover what for him?",answers:["Shrubberies "]},{question:"What special plant was Barley developing in his Garden?",answers:["Cultivated Woodsmen"]},{question:"Who tries to raise a Gorgon Army?",answers:["Phorcys"]},{question:"What badge do you earn by defeating 100 Samoorai?",answers:["Yojimbo"]},{question:"Where has Pharenor been imprisoned?",answers:["Skythorn Tower"]},{question:"Who makes the harpsicord for Shelus?",answers:["Gretta Darkkettle"]},{question:'Who taunts you with: "Wizard, you will know the meaning of the word pain after we battle!"',answers:["Aiuchi"]},{question:"In Azteca, Morganthe enlisted the help of the:",answers:["The Black Sun Necromancers"]},{question:"Who thinks you are there to take their precious feathers?",answers:["Takeda Kanryu"]},{question:"The Swallows of Caliburn migrate to Avalon from where each year?",answers:["Zafaria and Marleybone"]},{question:"Who helps Morganthe find the Horn of Huracan?",answers:["Belloq"]}]},{name:"Soccer Trivia",data:[{question:"What is the circumference of an official soccer ball?",answers:["28 in"]},{question:"What is the international football (soccer) body called?",answers:["FIFA"]},{question:"What is the common name for soccer in Europe?",answers:["Football"]},{question:"What is the minimum number of players that can play on one soccer team?",answers:["Seven"]},{question:"How often does the FIFA World Cup take place?",answers:["Every Four Years"]},{question:"A _______ card dismisses a player from the game.",answers:["Red"]},{question:"Which of the following is not a field position in soccer?",answers:["Kicker"]},{question:'In what country did the name "soccer" instead of football originate?',answers:["England"]},{question:"What colors are a typical soccer ball?",answers:["Black and White"]},{question:"A _______ card cautions a player and marks a foul.",answers:["Yellow"]},{question:"When was The Footbal Association founded?",answers:["1863"]},{question:"Which is the only position where a player can use their hands?",answers:["Goalkeeper"]},{question:"What are the only parts of the body you can't use when playing soccer?",answers:["Hands and Arms"]},{question:"What is the main protective gear worn by soccer players?",answers:["Shin Guards"]},{question:"What is the major world soccer competition that takes place every four years?",answers:["FIFA World Cup"]},{question:"One of the earliest versions of soccer was recorded by this ancient civilization?",answers:["Greek"]},{question:'Which countries primarily use the word "soccer" to describe association football?',answers:["US & Canada"]},{question:"How many players are on a soccer team?",answers:["11"]},{question:"How long is a half of a soccer game?",answers:["Forty Five Minutes"]},{question:"Which college wrote early fundamental and influental rules for soccer?",answers:["Cambridge"]}]}];class wn{constructor(t,n,s){this.answer=t,this.checkbox=n,this.parentElement=s}equals(t){return this.answer===t.answer}}const L=class L{constructor(){f(this,"title");f(this,"question");f(this,"answers",[]);f(this,"nextButton");const t=document.querySelector("h1"),n=t==null?void 0:t.textContent;_(n,"Quiz title not found"),this.title=I(n);const s=document.querySelector(".quizQuestion"),o=s==null?void 0:s.textContent;_(o,"Quiz question not found"),this.question=I(o),document.querySelectorAll(".answer").forEach(a=>{const l=a.querySelector(".answerText");_(l,"Answer text not found");const h=l.textContent;_(h,"Answer text not found");const u=a.querySelector("a");this.answers.push(new wn(I(h),u,a))});const r=document.querySelector("#nextQuestion");_(r,"Next button not found"),this.nextButton=r}getCorrectAnswerBox(){if(L.correctAnswerBox)return L.correctAnswerBox;const t=gn.find(s=>this.title.includes(I(s.name)));_(t,"Quiz title not found in answers!");const n=t.data.find(s=>this.question.includes(I(s.question)));_(n,"Quiz question not found in answers!");for(const s of this.answers)for(const o of n.answers)if(s.answer===I(o)){L.correctAnswerBox=s;break}if(!L.correctAnswerBox)throw lt(),new Error("Correct answer not found!");return L.correctAnswerBox}next(){this.nextButton.click()}};f(L,"correctAnswerBox");let Ie=L;const mn=e=>{Z.set(t=>t+1),e.next()};function pn(){const e=new Ie,t=e.getCorrectAnswerBox();M(async()=>{t.parentElement.querySelectorAll("span").forEach(n=>{if(A("quiz","highlightCorrectAnswer")()){n.style.backgroundColor="#28a745";return}n.style.backgroundColor="transparent"});try{const n=document.querySelector(".quizQuestion");_(n);const s=`
Correct answer: ${t.answer}`;A("quiz","displayCorrectAnswer")()?n.innerText+=s:n.innerText=n.innerText.replace(s,"")}catch{}!A("login","continueWithoutLogin")()&&!z.getLoggedIn()||(await fn(t,e.answers),await N(le(j.second,j.second*5)),A("quiz","pressNextButton")()&&mn(e))})}let yn={data:""},bn=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||yn,qn=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vn=/\/\*[^]*?\*\/|  +/g,ht=/\n+/g,F=(e,t)=>{let n="",s="",o="";for(let i in e){let r=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+r+";":s+=i[1]=="f"?F(r,i):i+"{"+F(r,i[1]=="k"?"":t)+"}":typeof r=="object"?s+=F(r,t?t.replace(/([^,])+/g,a=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):r!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=F.p?F.p(i,r):i+":"+r+";")}return n+(t&&o?t+"{"+o+"}":o)+s},$={},dt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+dt(e[n]);return t}return e},_n=(e,t,n,s,o)=>{let i=dt(e),r=$[i]||($[i]=(l=>{let h=0,u=11;for(;h<l.length;)u=101*u+l.charCodeAt(h++)>>>0;return"go"+u})(i));if(!$[r]){let l=i!==e?e:(h=>{let u,c,g=[{}];for(;u=qn.exec(h.replace(vn,""));)u[4]?g.shift():u[3]?(c=u[3].replace(ht," ").trim(),g.unshift(g[0][c]=g[0][c]||{})):g[0][u[1]]=u[2].replace(ht," ").trim();return g[0]})(e);$[r]=F(o?{["@keyframes "+r]:l}:l,n?"":"."+r)}let a=n&&$.g?$.g:null;return n&&($.g=$[r]),((l,h,u,c)=>{c?h.data=h.data.replace(c,l):h.data.indexOf(l)===-1&&(h.data=u?l+h.data:h.data+l)})($[r],t,s,a),r},xn=(e,t,n)=>e.reduce((s,o,i)=>{let r=t[i];if(r&&r.call){let a=r(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;r=l?"."+l:a&&typeof a=="object"?a.props?"":F(a,""):a===!1?"":a}return s+o+(r??"")},"");function we(e){let t=this||{},n=e.call?e(t.p):e;return _n(n.unshift?n.raw?xn(n,[].slice.call(arguments,1),t.p):n.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):n,bn(t.target),t.g,t.o,t.k)}we.bind({g:1}),we.bind({k:1});const kn=yt();function Sn(e){let t=this||{};return(...n)=>{const s=o=>{const i=bt(kn),r=Se(o,{theme:i}),a=Se(r,{get class(){const D=r.class,Fe="class"in r&&/^go[0-9]+/.test(D);let bs=we.apply({target:t.target,o:Fe,p:r,g:t.g},n);return[D,bs].filter(Boolean).join(" ")}}),[l,h]=Ye(a,["as","theme"]),u=h,c=l.as||e;let g;return typeof c=="function"?g=c(u):t.g==1?(g=document.createElement(c),Xe(g,u)):g=Ut(Se({component:c},u)),g};return s.class=o=>T(()=>we.apply({target:t.target,p:o,g:t.g},n)),s}}const x=new Proxy(Sn,{get(e,t){return e(t)}}),An=x.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-item {
    width: 113px;
  }

  .field {
    padding-left: 3px;
  }
`;var Wn=p("<span>"),Cn=p('<div><input class="override width100">');const Tn=x.div`
  * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`,ze=e=>{const[t,n]=U(!1),s=()=>{n(!0)},o=()=>{n(!1)},i=()=>t()?"wizardButtonInputHover":"wizardButtonInput";return d(Tn,{get class(){return`${i()} ${e.class??""}`},onFocus:s,onBlur:o,onMouseOver:s,onMouseOut:o,onClick:a=>{var l;a.preventDefault(),(l=e.onClick)==null||l.call(e)},tabIndex:0,role:"button",get children(){return[Wn(),(()=>{var a=Cn(),l=a.firstChild;return v(()=>b(l,"type",e.type??"submit")),v(()=>l.value=e.value),a})()]}})};var En=p('<input class="username field form-item"type=text name=username placeholder=Username>'),Bn=p('<input class="password field form-item"type=password name=password placeholder=Password>');const $n=()=>{const e=n=>{n.preventDefault();const s=new FormData(n.target),o=s.get("username"),i=s.get("password");z.useCredentials(o,i)},t=()=>{z.clearCredentials()};return d(An,{onSubmit:e,get children(){return[En(),Bn(),d(ze,{value:"Use Credentials",class:"form-item"}),d(ze,{value:"Clear Credentials",type:"button",onClick:t,class:"form-item"})]}})},Pn=x.span`
  width: 20px;
  height: 20px;

  background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/wizardButton.png?bn=B1.0.96267");
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
`,On=e=>d(Pn,{get class(){return e.class},get style(){return{visibility:e.visible?"visible":"hidden"}}}),Mn=x("div")`
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
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenuLeft_middle.webp?bn=B1.0.96267");
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

          &::before {
            background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenuLeft_top.webp?bn=B1.0.96267");
            height: 6px;
            top: -6px;
          }

          &::after {
            background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenuLeft_bottom.webp?bn=B1.0.96267");
            height: 11px;
            bottom: -11px;
          }
        }
      }

      .center {
        background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenu_middle.webp?bn=B1.0.96267");
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
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenu_top.webp?bn=B1.0.96267");
        }

        &::after {
          height: 4px;
          bottom: -4px;
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenu_bottom.webp?bn=B1.0.96267");
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
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenuRight_middle.webp?bn=B1.0.96267");
          position: relative;

          &::before,
          &::after {
            content: "";
            position: absolute;
            width: 100%;
          }

          &::before {
            background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenuRight_bottom.webp?bn=B1.0.96267");
            height: 7px;
            bottom: -7px;
            background-repeat: repeat-y;
            z-index: 1;
          }

          &::after {
            background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/sideMenuRight_top.webp?bn=B1.0.96267");
            height: 6px;
            top: -6px;
          }
        }
      }
    }
  }
`;var In=p('<div class=content-wrapper role=button><div class=content><div class=left><div class=scroll></div></div><div class=center><div class="text text-content"></div></div><div class=right><div class=scroll>');const je=e=>d(Mn,{get class(){return e.class??""},get children(){var t=In(),n=t.firstChild,s=n.firstChild,o=s.nextSibling,i=o.firstChild;return Te(t,"focus",e.onClick),Te(t,"click",e.onClick,!0),k(i,()=>e.content),t}});Ce(["click"]);var zn=p("<div class=container-wrapper><div class=container>"),jn=p("<div><div class=container>");const ft=x("div")`
  margin-top: 5px;
  position: relative;

  .container-wrapper {
    margin: 0 10px 7px 25px;

    .container {
      min-width: 121px;
    }
  }
`,Le=e=>{if(!e.foldable)return d(ft,{get class(){return e.class},get children(){return[d(je,{get content(){return e.titleContent},get class(){return e.titleClass}}),(()=>{var s=zn(),o=s.firstChild;return k(o,()=>e.children),s})()]}});const t=new R(Boolean,e.foldable.localStorageKey,e.foldable.defaultFolded??!1),n=()=>{var s,o;console.log("onFold",t.get()),t.set(i=>!i),(o=(s=e.foldable).onFold)==null||o.call(s)};return d(ft,{get class(){return e.class},get children(){return[d(je,{onClick:n,get content(){return e.titleContent},get class(){return e.titleClass}}),d(Ae,{get when(){return!t.get()},get children(){var s=jn(),o=s.firstChild;return k(o,()=>e.children),v(()=>Qe(s,`container-wrapper ${t.get()?"":"folded"}`)),s}})]}})};var Ln=p("<div class=modal><div class=top><div class=left></div><div class=center><div class=title></div><div class=content></div></div><div class=right></div></div><div class=bottom><div class=left><div class=corner><div class=corner-slope></div></div></div><div class=center></div><div class=right><div class=corner><div class=corner-slope>"),Nn=p("<h1>");const Fn=e=>{const t=x.div`
  --side-width: 40px;
  --col: [left-s] var(--side-width) [left-e center-s] 1fr [center-e right-s] var(--side-width) [right-e];
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
      background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/contentpattern.jpg?bn=B1.0.96267");
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

    .left, .right {
      background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/contentbottom_right.png?bn=B1.0.96267");
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

    .left, .right {
      position: relative;

      .corner {
          position: absolute;
          inset: 0;

          &::before {
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/contenttop_right3.png?bn=B1.0.96267");

          aspect-ratio: 87 / 65;
        }
        
        &::after {
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/contenttop_right.png?bn=B1.0.96267");

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
          background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/contenttop_right2.png?bn=B1.0.96267");
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
      background-image: url("https://edgecast.wizard101.com/static/themes/wizard101A/common/images/contentpattern.jpg?bn=B1.0.96267");
    }
  }
`;return d(t,{get onClick(){return e.onBackdropClick},get class(){return`${e.isOpen?"":"close"}`},id:"w101-trivia-bot-modal",get children(){var n=Ln(),s=n.firstChild,o=s.firstChild,i=o.nextSibling,r=i.firstChild,a=r.nextSibling;return k(r,(()=>{var l=S(()=>!!e.title);return()=>l()&&(()=>{var h=Nn();return k(h,()=>e.title),h})()})()),k(a,()=>e.children),n}})},Dn=e=>{const t=Math.max(e.openTimeMs/2,100),n=x.div`
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
`;return d(n,{get class(){return e.isOpen?"":"close"}})},pe=class pe{constructor(){f(this,"backdropElmt");f(this,"modalElmt");this.backdropElmt=document.createElement("div"),this.backdropElmt.id="backdrop",this.modalElmt=document.createElement("div"),this.modalElmt.id="modal",document.body.appendChild(this.backdropElmt),document.body.appendChild(this.modalElmt)}static getInstance(){return this.instance||(this.instance=new pe),this.instance}};f(pe,"instance");let Ne=pe;const Vn=(e,t)=>{const n=Ne.getInstance(),s=(t==null?void 0:t.openTimeMs)??300,o=new R(Boolean,"modalIsOpen"),[i,r]=U(o.get());We(()=>d(Ae,{get when(){return i()},get children(){return d(Fn,{get title(){return t==null?void 0:t.title},onBackdropClick:l,get isOpen(){return o.get()},openTimeMs:s,get children(){return e(u)}})}}),n.modalElmt),We(()=>d(Ae,{get when(){return i()},get children(){return d(Dn,{get opacity(){return t==null?void 0:t.backdropOpacityPercent},get isOpen(){return o.get()},openTimeMs:s})}}),n.backdropElmt),M(()=>{if(i()){document.body.style.overflowY="hidden";return}document.body.style.overflowY="auto"});const a=c=>{o.get()&&c.key==="Escape"&&u()};addEventListener("keydown",a);function l(c){c.currentTarget===c.target&&u()}function h(){o.set(!0),r(!0)}function u(){o.set(!1),setTimeout(()=>{r(!1)},s)}return{openModal:h,closeModal:u}};var Hn=p("<input>");const Gn=x.div`
  width: 26px;
  height: 26px;
  position: relative;
  cursor: pointer;
  background-image: url("https://edgecast.wizard101.com/static/themes/global/images/kiaccountscheckbox.gif?bn=B1.0.96267");
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
`,Rn=e=>{const t=e.type??"checkbox",n=s=>{var r;const i=s.target.checked;(r=e.onCheck)==null||r.call(e,i)};return d(Gn,{get class(){return e.class},get children(){var s=Hn();return s.$$click=n,b(s,"type",t),v(()=>b(s,"id",e.id)),v(()=>s.checked=e.checked),s}})};Ce(["click"]);const ye=class ye{static getId(){return`w101-trivia-bot-checkbox-${++ye.id}`}};f(ye,"id",0);let me=ye;var Un=p("<label>");const Kn=x.div`
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
`,Yn=e=>{const t=e.name?e.name:me.getId();return d(Kn,{get class(){return e.class},get children(){return[d(Rn,{id:t,class:"checkbox",get onCheck(){return e.onCheck},get checked(){return e.checked}}),(()=>{var n=Un();return b(n,"for",t),k(n,()=>e.title),n})()]}})},Jn=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();var Qn=p("<label>"),Xn=p("<textarea>"),Zn=p("<input>");const es=x.div`
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
`,gt=e=>{const t=e.name?e.name:me.getId(),n=s=>{var o;(o=e.onChange)==null||o.call(e,s.target.value)};return d(es,{get class(){return e.class},get children(){return[S(()=>S(()=>!!e.asTextarea)()?(()=>{var s=Xn();return s.addEventListener("change",n),b(s,"id",t),v(o=>{var i=e.placeholder,r=e.max;return i!==o.e&&b(s,"placeholder",o.e=i),r!==o.t&&b(s,"maxlength",o.t=r),o},{e:void 0,t:void 0}),v(()=>s.value=e.value),s})():(()=>{var s=Zn();return s.addEventListener("change",n),b(s,"id",t),v(o=>{var i=e.type??"text",r=e.placeholder,a=e.max,l=e.max,h=e.min;return i!==o.e&&b(s,"type",o.e=i),r!==o.t&&b(s,"placeholder",o.t=r),a!==o.a&&b(s,"maxlength",o.a=a),l!==o.o&&b(s,"max",o.o=l),h!==o.i&&b(s,"min",o.i=h),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),v(()=>s.value=e.value),s})()),(()=>{var s=Qn();return b(s,"for",t),k(s,()=>e.title),s})()]}})};var ts=p("<h3>"),ns=p("<span class=setting-group>");const ss=x.div`
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
`,os=()=>d(ss,{get children(){return Oe.map(e=>typeof e=="string"?(()=>{var t=ts();return k(t,()=>e.split("_").map(n=>Jn(n)).join(" ")),t})():(()=>{var t=ns();return k(t,()=>e.map(n=>n instanceof ln?d(gt,{get title(){return n.title},get value(){return n.get()},onChange:s=>n.set(s),class:"input-group",get asTextarea(){var s;return(s=n.options)==null?void 0:s.asTextArea},get max(){var s;return(s=n.options)==null?void 0:s.max}}):n instanceof at?d(gt,{get title(){return n.title},type:"number",get max(){var s;return(s=n.options)==null?void 0:s.max},get min(){var s;return(s=n.options)==null?void 0:s.min},class:"input-group small",get value(){return n.get().toString()},onChange:s=>{let o=parseInt(s);if(!n.options){n.set(o);return}n.options.max&&(o=Math.min(o,n.options.max)),n.options.min&&(o=Math.max(o,n.options.min)),n.set(o)}}):d(Yn,{get title(){return n.title},get checked(){return n.get()},onCheck:s=>n.set(s)}))),t})())}}),is=()=>{const e=new R(String,"_grecaptcha",""),t=x.div`
    .clear-captcha input {
      color: ${()=>e.get().length!==0?"#dc3545":"#f5e2a8"};
    }
  `;return d(Le,{titleContent:"Actions",foldable:{localStorageKey:"actions-panel"},get children(){return d(t,{get children(){return d(ze,{class:"clear-captcha",value:"Clear Captcha Storage",onClick:()=>e.set("")})}})}})};var rs=p("<h2>Trivia Q # <!> / 12"),as=p("<h2>Trivia # <!> / 10"),ls=p("<h2>Wrong Questions: ");const cs=()=>{const e=x.div`
    h2 {
      margin-left: 10px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  `;return d(e,{get children(){return d(Le,{titleContent:"Trivia data",foldable:{localStorageKey:"trivia-data-panel"},get children(){return[(()=>{var t=rs(),n=t.firstChild,s=n.nextSibling;return s.nextSibling,k(t,()=>Z.get(),s),t})(),(()=>{var t=as(),n=t.firstChild,s=n.nextSibling;return s.nextSibling,k(t,()=>fe.get(),s),t})(),(()=>{var t=ls();return t.firstChild,k(t,()=>ge.values.join(", "),null),t})()]}})}})};var us=p("<div>Auto Login");const hs=x("div")`
  margin-left: 13px;
  margin-right: 13px;

  .logged-in .content {
    filter: hue-rotate(70deg) grayscale(25%);
  }
`,ds=x.div`
  display: grid;
  grid-template-columns: 1fr 20px;
`,fs=()=>{const{openModal:e}=Vn(()=>d(os,{}),{title:"Trivia Bot Settings",backdropOpacityPercent:50}),t=d(ds,{get children(){return[us(),d(On,{get visible(){return z.getLoggedIn()}})]}});return d(hs,{get children(){return[d(Le,{titleContent:t,get titleClass(){return z.getLoggedIn()?"logged-in":""},foldable:{localStorageKey:"login-panel"},get children(){return d($n,{})}}),d(je,{onClick:e,content:"Trivia Bot Settings"}),d(is,{}),d(cs,{})]}})},gs=x("span")`
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
`,ws=()=>d(gs,{get children(){return d(fs,{})}}),ms=async()=>{Z.clearValue();const e=()=>le(j.second,j.second*2);await N(e());const t=document.querySelector(".kiaccountsbuttongreen");_(t,"Results button not found!"),t.click(),await N(e());const n=document.querySelector("#jPopFrame_content");_(n,"jPopFrame not found!");const s=n.contentWindow;_(s,"Content window not found!");const o=s.document.querySelector("#submit");_(o,"Submit button not found!"),fe.set(i=>i+1),o.click(),await N(j.second*2),M(()=>{A("others","attemptToPlaySounds")()&&Be.done.play()})},ps=async()=>{fe.clearValue(),await N(j.minute),location.reload()};function ys(){const e=document.querySelector("dl");_(e,"Could not find parent element");const t=document.querySelector("#subMenu1_lockOpen");_(t,"Could not find before element");const n=document.createElement("div");e.insertBefore(n,t.nextSibling),We(()=>d(ws,{}),n),M(()=>{if(!A("login","autoLogin")())return;z.getLoggedIn();const s=z.autoLogin();return()=>{s&&clearTimeout(s)}}),M(()=>{if(Yt(),ae.get==="searching"){hn();return}if(ae.get==="quiz"){pn();return}if(ae.get==="results"){ms();return}ae.get==="end"&&ps()})}ys()});
