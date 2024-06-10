(function(S){typeof define=="function"&&define.amd?define(S):S()})(function(){"use strict";var Fn=Object.defineProperty;var Dn=(S,_,W)=>_ in S?Fn(S,_,{enumerable:!0,configurable:!0,writable:!0,value:W}):S[_]=W;var f=(S,_,W)=>(Dn(S,typeof _!="symbol"?_+"":_,W),W);const S=(e,t)=>e===t,_=Symbol("solid-proxy"),W={equals:S};let _e=We;const M=1,R=2,ke={owned:null,cleanups:null,context:null,owner:null};var w=null;let ie=null,Ye=null,m=null,p=null,T=null,U=0;function Ke(e,t){const n=m,s=w,o=e.length===0,i=t===void 0?s:t,a=o?ke:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=o?e:()=>e(()=>E(()=>J(a)));w=a,m=null;try{return G(r,!0)}finally{m=n,w=s}}function Y(e,t){t=t?Object.assign({},W,t):W;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),Se(n,o));return[xe.bind(n),s]}function v(e,t,n){const s=re(e,t,!1,M);H(s)}function I(e,t,n){_e=tt;const s=re(e,t,!1,M);s.user=!0,T?T.push(s):H(s)}function A(e,t,n){n=n?Object.assign({},W,n):W;const s=re(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,H(s),xe.bind(s)}function E(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Qe(e,t){const n=Symbol("context");return{id:n,Provider:st(n),defaultValue:e}}function Je(e){return w&&w.context&&w.context[e.id]!==void 0?w.context[e.id]:e.defaultValue}function Xe(e){const t=A(e),n=A(()=>ae(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function xe(){if(this.sources&&this.state)if(this.state===M)H(this);else{const e=p;p=null,G(()=>Q(this),!1),p=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Se(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&G(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],a=ie&&ie.running;a&&ie.disposed.has(i),(a?!i.tState:!i.state)&&(i.pure?p.push(i):T.push(i),i.observers&&Ae(i)),a||(i.state=M)}if(p.length>1e6)throw p=[],new Error},!1)),t}function H(e){if(!e.fn)return;J(e);const t=U;Ze(e,e.value,t)}function Ze(e,t,n){let s;const o=w,i=m;m=w=e;try{s=e.fn(t)}catch(a){return e.pure&&(e.state=M,e.owned&&e.owned.forEach(J),e.owned=null),e.updatedAt=n+1,Ce(a)}finally{m=i,w=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Se(e,s):e.value=s,e.updatedAt=n)}function re(e,t,n,s=M,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==ke&&(w.owned?w.owned.push(i):w.owned=[i]),i}function K(e){if(e.state===0)return;if(e.state===R)return Q(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===M)H(e);else if(e.state===R){const s=p;p=null,G(()=>Q(e,t[0]),!1),p=s}}function G(e,t){if(p)return e();let n=!1;t||(p=[]),T?n=!0:T=[],U++;try{const s=e();return et(n),s}catch(s){n||(T=null),p=null,Ce(s)}}function et(e){if(p&&(We(p),p=null),e)return;const t=T;T=null,t.length&&G(()=>_e(t),!1)}function We(e){for(let t=0;t<e.length;t++)K(e[t])}function tt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:K(s)}for(t=0;t<n;t++)K(e[t])}function Q(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===M?s!==t&&(!s.updatedAt||s.updatedAt<U)&&K(s):o===R&&Q(s,t)}}}function Ae(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=R,n.pure?p.push(n):T.push(n),n.observers&&Ae(n))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),a=n.observerSlots.pop();s<o.length&&(i.sourceSlots[a]=s,o[s]=i,n.observerSlots[s]=a)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function nt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ce(e,t=w){throw nt(e)}function ae(e){if(typeof e=="function"&&!e.length)return ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ae(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function st(e,t){return function(s){let o;return v(()=>o=E(()=>(w.context={...w.context,[e]:s.value},Xe(()=>s.children))),void 0),o}}function d(e,t){return E(()=>e(t||{}))}function X(){return!0}const le={get(e,t,n){return t===_?n:e.get(t)},has(e,t){return t===_?!0:e.has(t)},set:X,deleteProperty:X,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:X,deleteProperty:X}},ownKeys(e){return e.keys()}};function ce(e){return(e=typeof e=="function"?e():e)?e:{}}function ot(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ue(...e){let t=!1;for(let a=0;a<e.length;a++){const r=e[a];t=t||!!r&&_ in r,e[a]=typeof r=="function"?(t=!0,A(r)):r}if(t)return new Proxy({get(a){for(let r=e.length-1;r>=0;r--){const l=ce(e[r])[a];if(l!==void 0)return l}},has(a){for(let r=e.length-1;r>=0;r--)if(a in ce(e[r]))return!0;return!1},keys(){const a=[];for(let r=0;r<e.length;r++)a.push(...Object.keys(ce(e[r])));return[...new Set(a)]}},le);const n={},s=Object.create(null);for(let a=e.length-1;a>=0;a--){const r=e[a];if(!r)continue;const l=Object.getOwnPropertyNames(r);for(let h=l.length-1;h>=0;h--){const c=l[h];if(c==="__proto__"||c==="constructor")continue;const u=Object.getOwnPropertyDescriptor(r,c);if(!s[c])s[c]=u.get?{enumerable:!0,configurable:!0,get:ot.bind(n[c]=[u.get.bind(r)])}:u.value!==void 0?u:void 0;else{const g=n[c];g&&(u.get?g.push(u.get.bind(r)):u.value!==void 0&&g.push(()=>u.value))}}}const o={},i=Object.keys(s);for(let a=i.length-1;a>=0;a--){const r=i[a],l=s[r];l&&l.get?Object.defineProperty(o,r,l):o[r]=l?l.value:void 0}return o}function Te(e,...t){if(_ in e){const o=new Set(t.length>1?t.flat():t[0]),i=t.map(a=>new Proxy({get(r){return a.includes(r)?e[r]:void 0},has(r){return a.includes(r)&&r in e},keys(){return a.filter(r=>r in e)}},le));return i.push(new Proxy({get(a){return o.has(a)?void 0:e[a]},has(a){return o.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!o.has(a))}},le)),i}const n={},s=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,o),a=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let r=!1,l=0;for(const h of t)h.includes(o)&&(r=!0,a?s[l][o]=i.value:Object.defineProperty(s[l],o,i)),++l;r||(a?n[o]=i.value:Object.defineProperty(n,o,i))}return[...s,n]}const it=e=>`Stale read from <${e}>.`;function Ee(e){const t=e.keyed,n=A(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return A(()=>{const s=n();if(s){const o=e.children;return typeof o=="function"&&o.length>0?E(()=>o(t?s:()=>{if(!E(n))throw it("Show");return e.when})):o}return e.fallback},void 0,void 0)}const rt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],at=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...rt]),lt=new Set(["innerHTML","textContent","innerText","children"]),ct=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ut=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ht(e,t){const n=ut[e];return typeof n=="object"?n[t]?n.$:void 0:n}const dt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ft=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),gt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function wt(e,t,n){let s=n.length,o=t.length,i=s,a=0,r=0,l=t[o-1].nextSibling,h=null;for(;a<o||r<i;){if(t[a]===n[r]){a++,r++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===a){const c=i<s?r?n[r-1].nextSibling:n[i-r]:l;for(;r<i;)e.insertBefore(n[r++],c)}else if(i===r)for(;a<o;)(!h||!h.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[i-1]&&n[r]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[r++],t[a++].nextSibling),e.insertBefore(n[--i],c),t[o]=n[i]}else{if(!h){h=new Map;let u=r;for(;u<i;)h.set(n[u],u++)}const c=h.get(t[a]);if(c!=null)if(r<c&&c<i){let u=a,g=1,F;for(;++u<o&&u<i&&!((F=h.get(t[u]))==null||F!==c+g);)g++;if(g>c-r){const ve=t[a];for(;r<c;)e.insertBefore(n[r++],ve)}else e.replaceChild(n[r++],t[a++])}else a++;else t[a++].remove()}}}const Be="_$DX_DELEGATE";function he(e,t,n,s={}){let o;return Ke(i=>{o=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function b(e,t,n){let s;const o=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function de(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,kt))}}function k(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function mt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function pt(e,t){t==null?e.removeAttribute("class"):e.className=t}function fe(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function yt(e,t,n={}){const s=Object.keys(t||{}),o=Object.keys(n);let i,a;for(i=0,a=o.length;i<a;i++){const r=o[i];!r||r==="undefined"||t[r]||(Me(e,r,!1),delete n[r])}for(i=0,a=s.length;i<a;i++){const r=s[i],l=!!t[r];!r||r==="undefined"||n[r]===l||!l||(Me(e,r,!0),n[r]=l)}return n}function bt(e,t,n){if(!t)return n?k(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(s.setProperty(i,o),n[i]=o);return n}function Pe(e,t={},n,s){const o={};return v(()=>o.children=V(e,t.children,o.children)),v(()=>typeof t.ref=="function"?qt(t.ref,e):t.ref=e),v(()=>vt(e,t,n,!0,o,!0)),o}function qt(e,t,n){return E(()=>e(t,n))}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return V(e,t,s,n);v(o=>V(e,t(),o,n),s)}function vt(e,t,n,s,o={},i=!1){t||(t={});for(const a in o)if(!(a in t)){if(a==="children")continue;o[a]=Ie(e,a,null,o[a],n,i)}for(const a in t){if(a==="children")continue;const r=t[a];o[a]=Ie(e,a,r,o[a],n,i)}}function _t(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Me(e,t,n){const s=t.trim().split(/\s+/);for(let o=0,i=s.length;o<i;o++)e.classList.toggle(s[o],n)}function Ie(e,t,n,s,o,i){let a,r,l,h,c;if(t==="style")return bt(e,n,s);if(t==="classList")return yt(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),g=dt.has(u);if(!g&&s){const F=Array.isArray(s)?s[0]:s;e.removeEventListener(u,F)}(g||n)&&(fe(e,u,n,g),g&&de([u]))}else if(t.slice(0,5)==="attr:")k(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(l=lt.has(t))||!o&&((h=ht(t,e.tagName))||(r=at.has(t)))||(a=e.nodeName.includes("-")))c&&(t=t.slice(5),r=!0),t==="class"||t==="className"?pt(e,n):a&&!r&&!l?e[_t(t)]=n:e[h||t]=n;else{const u=o&&t.indexOf(":")>-1&&gt[t.split(":")[0]];u?mt(e,u,t,n):k(e,ct[t]||t,n)}return n}function kt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function V(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,a=s!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),a){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=D(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=D(e,n,s);else{if(i==="function")return v(()=>{let r=t();for(;typeof r=="function";)r=r();n=V(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],l=n&&Array.isArray(n);if(ge(r,t,n,o))return v(()=>n=V(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=D(e,n,s),a)return n}else l?n.length===0?ze(e,r,s):wt(e,n,r):(n&&D(e),ze(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ge(e,t,n,s){let o=!1;for(let i=0,a=t.length;i<a;i++){let r=t[i],l=n&&n[e.length],h;if(!(r==null||r===!0||r===!1))if((h=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=ge(e,r,l)||o;else if(h==="function")if(s){for(;typeof r=="function";)r=r();o=ge(e,Array.isArray(r)?r:[r],Array.isArray(l)?l:[l])||o}else e.push(r),o=!0;else{const c=String(r);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return o}function ze(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){const r=t[a];if(o!==r){const l=r.parentNode===e;!i&&!a?l?e.replaceChild(o,r):e.insertBefore(o,n):l&&r.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const xt="http://www.w3.org/2000/svg";function St(e,t=!1){return t?document.createElementNS(xt,e):document.createElement(e)}function Wt(e){const[t,n]=Te(e,["component"]),s=A(()=>t.component);return A(()=>{const o=s();switch(typeof o){case"function":return E(()=>o(n));case"string":const i=ft.has(o),a=St(o,i);return Pe(a,n,i),a}})}const Z=new class{constructor(){f(this,"page");var t;const e=document.querySelector("h2");if((t=e==null?void 0:e.textContent)!=null&&t.trim().toLowerCase().includes("Come Back Tomorrow".trim().toLowerCase())){this.page="end";return}if(document.querySelector(".quizQuestion")){this.page="quiz";return}if(document.querySelector(".thumb")){this.page="searching";return}this.page="results"}get get(){return this.page}},At=["Eleventh Grade Vocabulary Trivia","Ninth Grade Vocabulary Trivia","Twelfth Grade Vocabulary Trivia","Tenth Grade Vocabulary Trivia","Texas Facts Trivia","Horse Trivia","Basketball Trivia","Solar System Trivia","Norse Mythology Trivia","Weather Trivia","Famous Poets","State Nicknames Trivia","English Punctuation Trivia","Big Cats Trivia","Ancient Egypt Trivia","Wizard101 Spellbinding Trivia","Soccer Trivia"],z=e=>e.trim().toLowerCase(),ee=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),Le=[],j=async e=>new Promise(t=>{const n=setTimeout(()=>{t()},e);Le.push(n)}),Ct=()=>{Le.forEach(e=>{clearTimeout(e)})},we={done:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345432/mch_uvkd4w.mp3"),error:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345442/minc_r17thf.mp3"),empty:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686346114/empty_h74hy6.mp3")};function Tt(e){return e===String?"string":e===Boolean?"boolean":e===Number?"number":""}const Et=e=>Object.keys(e),Bt=e=>Object.values(e),Pt=e=>e==="true",$e=e=>{try{return JSON.parse(e)}catch{return e}};class Ne{constructor(t,n,s){f(this,"get");f(this,"setValue");this.key=t,this.converter=n,this.defaultValue=s;const[o,i]=Y(this.getDefaultValue());this.get=o,this.setValue=i}getDefaultValue(){const t=localStorage.getItem(this.key);return t?this.converter(t):(localStorage.setItem(this.key,String(this.defaultValue)),this.defaultValue)}set(t){this.setValue(t),localStorage.setItem(this.key,String(t))}clearValue(){this.setValue(this.defaultValue),localStorage.removeItem(this.key)}}class Mt extends Ne{constructor(t,n,s){super(n,$e,s??t())}}class It extends Mt{constructor(n,s,o,i){super(n,s,i);f(this,"type");this.title=o,this.type=Tt(n)}}class B extends It{constructor(t,n,s=!1){super(Boolean,t,n,s),this.title=n}}const me={quiz:{pressNextButton:new B("pressNextButton","Press next question button",!0),highlightCorrectAnswer:new B("highlightCorrectAnswer","Highlight correct answer",!0),displayCorrectAnswer:new B("displayCorrectAnswer","Display correct answer under title"),highlightWrongAnswer:new B("highlightWrongAnswer","Highlight the wrong answer when it gets selected",!0)},searcher:{autoClick:new B("autoClick","Automatically search for an available quiz, and click it when found",!0),autoReload:new B("autoReload","Automatically reload the page if no valid trivia was found",!0)},login:{autoLogin:new B("autoLogin","Automatically login to site (using given credentials)",!0),continueWithoutLogin:new B("continueWithoutLogin","Do quiz without login")},others:{attemptToPlaySounds:new B("attemptToPlaySounds","Attempt to play sounds when the trivia is done and when there is an error",!0)}},x=(e,t)=>me[e][t].get,pe=[];for(const e of Et(me)){pe.push(e);const t=me[e];pe.push(Bt(t))}const je=()=>{I(()=>{x("others","attemptToPlaySounds")()?we.error.play():we.error.pause()}),document.title="ERROR"};function y(e,t){const n=t??"Value is null or undefined";if(e==null)throw je(),new Error(n)}class zt{constructor(t){f(this,"title");f(this,"used");f(this,"clickable");const n=t.querySelector("h3");y(n,"Title element not found"),this.title=z(n.innerText),this.used=t.classList.contains("notake");const s=t.querySelector("a");y(s,"Clickable element not found"),this.clickable=s}}function Oe(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)+(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}function Fe(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)-(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}class ye{constructor(t){f(this,"get");f(this,"set");const[n,s]=Y(t);this.get=n,this.set=s}}const L=new class{constructor(){f(this,"username");f(this,"password");f(this,"loggedIn");this.username=new ye(this.getDefaultUsername()),this.password=new ye(this.getDefaultPassword()),this.loggedIn=new ye(this.getDefaultLoggedIn())}getUsername(){return A(()=>Fe(this.username.get()))}getPassword(){return A(()=>Fe(this.password.get()))}getLoggedIn(){return this.loggedIn.get()}getDefaultLoggedIn(){return JSON.parse(localStorage.getItem("loggedIn")??"false")}getDefaultUsername(){return localStorage.getItem("username")??""}getDefaultPassword(){return localStorage.getItem("password")??""}setIsLoggedIn(e){localStorage.setItem("loggedIn",e.toString()),this.loggedIn.set(e)}useCredentials(e,t){if(!e||!t){alert("Please enter a username and password!");return}const n=Oe(e),s=Oe(t);localStorage.setItem("username",n),localStorage.setItem("password",s),this.username.set(n),this.password.set(s),this.setIsLoggedIn(!0),this.autoLogin()}clearCredentials(){localStorage.removeItem("username"),localStorage.removeItem("password"),this.username.set(""),this.password.set(""),this.setIsLoggedIn(!1)}autoLogin(){const e=document.querySelector("#loginUserName"),t=document.querySelector("#loginPassword"),n=document.querySelector('input[value="Login"]');if(!e||!t||!n)return;const s=this.getUsername(),o=this.getPassword();return!s()||!o()?void 0:(e.value=s(),t.value=o(),setTimeout(()=>{n.click()},1e3))}},De="wrongAnswer",Lt=()=>{const e=localStorage.getItem(De);return e?$e(e):!1},He=e=>{localStorage.setItem(De,e.toString())};async function $t(){He(!1);let e;const t=document.querySelectorAll(".quiz-hub-category");for(const s of t)for(const o of s.querySelectorAll("li")){const i=new zt(o);if(n(i))break}function n(s){if(s.used)return!1;for(const o of At){const i=z(o);if(s.title===i)return e=s,!0}return!1}await j(ee(5e3,1e4)),I(()=>{if(!(!x("login","continueWithoutLogin")()&&!L.getLoggedIn())){if(!e){x("searcher","autoReload")()&&window.location.reload();return}x("searcher","autoClick")()&&e.clickable.click()}})}const $=new class{constructor(){f(this,"second",1e3);f(this,"minute",60*this.second);f(this,"hour",60*this.minute);f(this,"day",24*this.hour)}},Nt=async(e,t)=>{let n,s=!1;Lt()||Math.floor(Math.random()*100)<=25&&(n=t[Math.floor(Math.random()*t.length)],He(!0),s=!0),n||(n=e),I(()=>{if(!x("quiz","highlightWrongAnswer")()){n.parentElement.style.backgroundColor="transparent";return}s&&(n.parentElement.style.backgroundColor="#dc3545")}),await j(ee($.second*5,$.second*8)),n.checkbox.click()},jt=[{name:"Eleventh Grade Vocabulary Trivia",data:[{question:"Denotation",answers:["a word that names or signifies something specific"]},{question:"Discern",answers:["to recognize the difference "]},{question:"Ambiguity",answers:["doubtfulness or uncertainty of meaning or intention"]},{question:"Conceit",answers:["an excessively favorable opinion of one's own ability, importance or wit"]},{question:"Quandary",answers:["a state of extreme dishonor"]},{question:"Buoyancy",answers:["the power to float or rise in a fluid, the upward pressure exerted by the fluid in which a body is immersed"]},{question:"Annotated",answers:["supplied with or containing explanatory notes and textual comments"]},{question:"Enigma",answers:["a mystery "]},{question:"Allegory",answers:["a representation of an abstract or spiritual meaning through concrete or material forms"]},{question:"Procure",answers:["to obtain "]},{question:"Auspicious",answers:["favorable, noteworthy "]},{question:"Principle",answers:["a fundamental, primary, or general law or truth from which others are derived"]},{question:"Assuage",answers:["to relieve or soothe "]},{question:"Euphemism",answers:["the substitution of a mild, indirect, or vague expression for one thought to be offensive, harsh, or blunt"]},{question:"Conspicuous",answers:["noticeable, obvious "]},{question:"Anecdote",answers:["a short account of a particular incident or event of an interesting or amusing nature, often biographical."]}]},{name:"Ninth Grade Vocabulary Trivia",data:[{question:"Parsimony",answers:["extreme care in spending money"]},{question:"Tangible",answers:["possible to be treated as fact"]},{question:"Eccentric",answers:["a person of a specified kind (usually with many eccentricities)"]},{question:"Inadvertent",answers:["without intention (especially resulting from heedless action)"]},{question:"Verbose",answers:["using or containing too many words"]},{question:"Abstract",answers:["a concept or idea not associated with any specific instance"]},{question:"Belittle",answers:["lessen the authority, dignity, or reputation of"]},{question:"Guile",answers:["shrewdness as demonstrated by being skilled in deception"]},{question:"Heed",answers:["paying particular notice (as to children or helpless people)"]},{question:"Advocate",answers:["a person who pleads for a cause or propounds an idea"]},{question:"Mar",answers:["a mark or flaw that spoils the appearance of something (especially on a person's body)"]},{question:"Comply",answers:["act in accordance with someone's rules, commands, or wishes"]},{question:"Censure",answers:["harsh criticism or disapproval"]},{question:"Deference",answers:["a disposition or tendency to yield to the will of others"]},{question:"Facilitate",answers:["make easier"]},{question:"Recalcitrant",answers:["marked by stubborn resistance to authority"]}]},{name:"Twelfth Grade Vocabulary Trivia",data:[{question:"Peruse",answers:["reading with careful attention"]},{question:"Guru",answers:["religious teacher"]},{question:"Hegemony",answers:["one country/group has leadership over another"]},{question:"Jovial",answers:["happy, cheery"]},{question:"Enervate",answers:["to weaken, or to take energy from"]},{question:"Impetuous",answers:["characterized by undue haste and lack of thought or deliberation"]},{question:"Conundrum",answers:["a difficult problem"]},{question:"Benevolent",answers:["showing or motivated by sympathy and understanding and generosity"]},{question:"Loquacious",answers:["talkative, chatty"]},{question:"Evanescent",answers:["tending to vanish like vapor"]},{question:"Antithesis",answers:["the direct opposite or contrast to a previously given assertion"]},{question:"Fortuitous",answers:["occurring by happy chance"]},{question:"Brazen",answers:["unrestrained by convention or propriety"]},{question:"Deleterious",answers:["harmful to living things"]},{question:"Chicanery",answers:["deceiving someone, scam"]},{question:"Sensuous",answers:["all senses, dealing w/ all senses"]}]},{name:"Tenth Grade Vocabulary Trivia",data:[{question:"Gregarious",answers:["seeking and enjoying the company of others"]},{question:"Injunction",answers:["a formal command or admonition"]},{question:"Malevolent",answers:["wishing or appearing to wish evil to others"]},{question:"Phonetic",answers:["related to the sounds in a language"]},{question:"Malicious",answers:["wishing evil or harm upon others"]},{question:"Junction",answers:["an act of joining or adjoining things"]},{question:"Dialogue",answers:["a conversation between two persons"]},{question:"Segregate",answers:["separating into different groups"]},{question:"Congregate",answers:["To come together in a group, assemble."]},{question:"Soliloquy",answers:["the act of talking to oneself or a dramatic monologue"]},{question:"Eloquent",answers:["expressing yourself readily, clearly, effectively"]},{question:"Adjunct",answers:["something attached to but holding an inferior position"]},{question:"Juncture",answers:["a joining together; the point at which two things are joined; any important point in time"]},{question:"Malcontent",answers:["person dissatisfied with existing state of affairs"]},{question:"Malady",answers:["a sickness, illness, disease, disorder"]}]},{name:"Texas Facts Trivia",data:[{question:"Which Texan city is considered the live music capital of the world?",answers:["Austin"]},{question:"Texas comes from the Caddo word Tejas, which means what?",answers:["Friends or Allies"]},{question:"What is the largest city in Texas population wise?",answers:["Houston"]},{question:"What is the Texas state flower?",answers:["Bluebonnet"]},{question:"Remember the _____.",answers:["Alamo"]},{question:"What is the state bird of Texas?",answers:["Mockingbird"]},{question:"What natural resource gave Texas a large economic boom?",answers:["Oil"]},{question:"What is the capital of Texas?",answers:["Austin"]},{question:"How many cattle are estimated to exist in Texas?",answers:["16 million"]},{question:"What is the only US State with a larger land mass than Texas?",answers:["Alaska"]},{question:"Which popular soft drink originated in Texas?",answers:["Dr Pepper"]},{question:"What large body of water is off the Texas coast?",answers:["Gulf of Mexico"]},{question:"Texas is called the ______ state.",answers:["Lone Star"]},{question:"Texas has the country's largest herd of what kind of animal?",answers:["Whitetail Deer"]},{question:"Which US president was born in Texas?",answers:["Dwight D Eisenhower"]},{question:"What is the only US state with a larger population than Texas?",answers:["California"]},{question:"What is the state plant?",answers:["Prickly Pear Cactus"]},{question:"What is the state dish of Texas?",answers:["Chili"]}]},{name:"Horse Trivia",data:[{question:"Which breed is the fastest horse in the world over short distances?",answers:["American Quarter Horse"]},{question:"Which famous race horse most recently won the Triple Crown?",answers:["Affirmed"]},{question:"Which is a part that both english and western saddles have?",answers:["Cantle"]},{question:"In this equestrian sport the horse is judged on its jumping style and manners:",answers:["Hunters"]},{question:"This American breed is known for its high stepping gaits and showy style.",answers:["American Saddlebred"]},{question:"A hand is how many inches?",answers:["Four"]},{question:"This equestrian sport the horse is judged on its movement and manners in western tack:",answers:["Western Pleasure"]},{question:"Which of the following is not a recognized horse color?",answers:["Red"]},{question:"This special show jumping class is when a horse and rider jump as high as possible over a brick wall.",answers:["Puissance"]},{question:"Which of the following is not a type of Appaloosa color pattern?",answers:["Confetti"]},{question:"What is the oldest breed of horse?",answers:["Arabian"]},{question:"This popular breed is extremely versatile and especially good at endurance racing:",answers:["Arabian"]},{question:"A pony is any equine _____ hands high or below.",answers:["14.2"]},{question:"Which breed of horse performs at the Spanish riding school in Vienna?",answers:["Lipizzaner"]},{question:"Which of the following is not an Olympic equestrian sport?",answers:["Vaulting"]},{question:"How many beats are in the canter?",answers:["Three"]},{question:"When a horse limps, it's called _______.",answers:["Lame"]},{question:"What is the world's smallest breed of horse?",answers:["Falabella"]},{question:"This western sport includes a pattern of galloping, spins, and sliding stops.",answers:["Reining"]},{question:"Which type of horse is popular in high level Dressage competitions?",answers:["Warmbloods"]}]},{name:"Basketball Trivia",data:[{question:"What is the special shot called that is awarded to a player who has been fouled?",answers:["Free Throw"]},{question:"How many players per team can be on the basketball court at one time?",answers:["Five"]},{question:"How many quarters are in a single game of basketball?",answers:["Four"]},{question:"March Madness refers to which basketball tournament?",answers:["NCAA"]},{question:"As of 2014, how many teams are in the NBA?",answers:["30"]},{question:"In what country was basketball founded?",answers:["America"]},{question:"How many points is a field goal outside the three-point line?",answers:["Three"]},{question:"The original hoops were _____________.",answers:["Peach Baskets"]},{question:"What color were the first basketballs made in?",answers:["Brown"]},{question:"How many points is a free throw worth?",answers:["One"]},{question:"How long is each quarter of a basketball game?",answers:["12 Minutes"]},{question:"How tall is a basketball hoop?",answers:["10'"]},{question:"Most basketball courts have ________ flooring.",answers:["Wood"]},{question:"Unsportsmanlike conduct can result in a _____________.",answers:["Technical Foul"]},{question:"What is the diameter of a basketball hoop?",answers:['18"']},{question:"It is illegal to _______ the ball, or move without bouncing it.",answers:["Carry"]},{question:"How many points is a regular field goal?",answers:["Two"]},{question:"When did professional basketball teams start organizing?",answers:["1920s"]},{question:"What year was the NBA formed?",answers:["1949"]},{question:"Basketball was originally created by a gym teacher because ___________.",answers:["It was raining outside"]}]},{name:"Solar System Trivia",data:[{question:"What is the correct term for Pluto?",answers:["Dwarf Planet"]},{question:"Mars is known as the _____ planet.",answers:["Red"]},{question:"Jupiter has a ________ in its atmosphere but no solid surface.",answers:["Hurricane"]},{question:"What are comets made of?",answers:["Dirty Ice"]},{question:"Which is the smallest planet in the solar system?",answers:["Mercury"]},{question:"What man-made objects exist in our solar system?",answers:["Satellites & Space Junk"]},{question:"Saturn is famous for its ________ that rotate around it.",answers:["Rings"]},{question:"What separates the inner and outer solar system?",answers:["Band of asteroids"]},{question:"Uranus has a _______ glow to it.",answers:["Blue"]},{question:"Which planet is closest to the sun?",answers:["Mercury"]},{question:"Venus' atmosphere is primarily made up of what gas?",answers:["Carbon Dioxide"]},{question:`Which two planets are Earth's "neighbors"?`,answers:["Venus & Mars"]},{question:"What is the largest planet in the solar system?",answers:["Jupiter"]},{question:"Every object in our solar system revolves around the _______.",answers:["Sun"]},{question:"Which planet is furthest from the sun?",answers:["Neptune"]},{question:"How many planets are in our solar system?",answers:["Eight"]}]},{name:"Norse Mythology Trivia",data:[{question:'Who was the god of war and the "All Father"?',answers:["Odin"]},{question:"Who was the first Norse god?",answers:["Buri"]},{question:"Who was Odin's father?",answers:["Borr"]},{question:"Who was the goddess of healing?",answers:["Eir"]},{question:"Who was the god of poetry, music and the harp?",answers:["Bragi"]},{question:"Who was the goddess of the sea?",answers:["Ran"]},{question:"Baldr was the god of what?",answers:["Beauty, innocence, peace and rebirth"]},{question:"Who was the goddess of wisdom?",answers:["Vor"]},{question:"Who was the god of the daytime?",answers:["Dagr"]},{question:"Who was the god of thunder and battle?",answers:["Thor"]},{question:"Who was the wife of Thor and goddess of the harvest?",answers:["Sif"]},{question:"Who was the goddess of old age?",answers:["Elli"]},{question:"Who was the goddess of night?",answers:["Nott"]},{question:"Who was the goddess of spring?",answers:["Eostre"]},{question:"Who was the goddess of marriage and motherhood?",answers:["Frigg"]},{question:"Who was the god of mischief?",answers:["Loki"]},{question:"Who was the god of inspiration?",answers:["Kvasir"]},{question:"Who was the goddess of the sun?",answers:["Sol"]},{question:"Who was the god of dawn?",answers:["Delling"]},{question:"Who was the god of revenge?",answers:["Vali"]},{question:"Who was the goddess of joy and peace?",answers:["Nanna"]},{question:"Norse Mythology is the mythology from what group of people?",answers:["North Germanic"]},{question:"Who was the goddess of prudence?",answers:["Snotra"]},{question:"Who was the goddess of consolation and protection?",answers:["Hlin"]},{question:"Who was the god of strength and son of Thor?",answers:["Magni"]},{question:"Who was the god of skiing, winter, hunting and dueling?",answers:["Ullr"]},{question:"Who was the god of justice, peace and truth?",answers:["Forseti"]},{question:"Who was the goddess of fertility and plough?",answers:["Gefjun"]}]},{name:"Weather Trivia",data:[{question:"What is a tornado called before it hits the ground?",answers:["Funnel Cloud"]},{question:"Where do tornadoes come from?",answers:["Thunderstorms"]},{question:"What is the name of the strong radar that helps predict weather?",answers:["Doppler"]},{question:"In which two seasons are thunderstorms most likely to occur?",answers:["Winter & Spring"]},{question:"A waterspout is actually a weak ______ that forms over water.",answers:["Tornado"]},{question:"What type of cloud is between 6,500 feet to 18,000 feet in the atmosphere?",answers:["Alto"]},{question:"What is a monsoon?",answers:["Seasonal wind that often brings rain"]},{question:"What type of cloud usually looks white and puffy?",answers:["Cumulus"]},{question:"What does a Tornado Watch mean?",answers:["Tornadoes are possible in your area."]},{question:"What causes the electric current that result in lightning?",answers:["Ice particles bumping into each other"]},{question:"Which of the following is NOT needed to cause a blizzard?",answers:["Rotating storm clouds"]},{question:"What is sleet?",answers:["Rain that freezes into ice before it hits ground"]},{question:"The ______ is the center of a hurricane and also the calmest part of the storm.",answers:["Eye"]},{question:"Which of the following is not a characteristic of a hurricane?",answers:["Forms over mountains"]},{question:'Which of these states are not in "Tornado Alley"?',answers:["North Carolina"]},{question:"What type of cloud is above 18,000 feet in the atmosphere?",answers:["Cirrus"]},{question:"What type of cloud is below 6,500 feet in the atmosphere?",answers:["Stratus"]},{question:"How fast do raindrops fall?",answers:["7-18 miles per hour"]},{question:"How is snow formed?",answers:["Water vapor changes directly to ice high in the atmosphere"]},{question:"Tornadoes are rated on what kind of scale?",answers:["F Scale"]}]},{name:"Famous Poets",data:[{question:'Who wrote "A Dream Within A Dream"?',answers:["Edgar Allan Poe"]},{question:'Who wrote "The Road Not Taken"?',answers:["Robert Frost"]},{question:'Who wrote "Stopping by the Woods on a Snowy Evening"?',answers:["Robert Frost"]},{question:'Who wrote "Funeral Blues"?',answers:["W.H. Auden"]},{question:'Who wrote "Do Not Go Gentle To That Good Night"?',answers:["Dylan Thomas"]},{question:'Who wrote "If those I loved were lost"?',answers:["Emily Dickinson"]},{question:'Who wrote "Messy Room"?',answers:["Shel Silverstein"]},{question:'Who wrote "Where the Sidewalk Ends"?',answers:["Shel Silverstein"]},{question:'Who wrote "To You"?',answers:["Walt Whitman"]},{question:'Who wrote "Phenomenal Woman"?',answers:["Maya Angelou"]},{question:'Who Wrote "If You Forget Me"?',answers:["Pablo Neruda"]},{question:'Who wrote "A Girl"?',answers:["Ezra Pound"]},{question:'Who wrote "There is Another Sky"?',answers:["Emily Dickinson"]},{question:'Who Wrote "Let America Be America Again"?',answers:["Langston Hughes"]},{question:'Who wrote "Life is Fine"?',answers:["Langston Hughes"]},{question:'Who Wrote "I Carry Your Heart With Me"?',answers:["E.E. Cummings"]}]},{name:"State Nicknames Trivia",data:[{question:'Which state is known as the "Constitution State?"',answers:["Connecticut"]},{question:'Which state is known as the "Ocean State?"',answers:["Rhode Island"]},{question:'Which state is known as the "Garden State?"',answers:["New Jersey"]},{question:'Which state is known as the "Volunteer State?"',answers:["Tennessee"]},{question:'Which state is known as the "Silver State?"',answers:["Nevada"]},{question:'Which state is known as the "Evergreen State?"',answers:["Washington"]},{question:'Which state is known as the "Great Lakes State?"',answers:["Michigan"]},{question:'Which state is known as the "Aloha State?"',answers:["Hawaii"]},{question:'Which state is known as the "First State?"',answers:["Delaware"]},{question:'Which state is known as the "Magnolia State?"',answers:["Mississippi"]},{question:'Which state is known as the "Prairie State?"',answers:["Illinois"]},{question:'Which state is known as the "Bluegrass State?"',answers:["Kentucky"]},{question:'Which state is known as the "Pelican State?"',answers:["Louisiana"]},{question:'Which state is known as the "Pine Tree State?"',answers:["Maine"]},{question:'Which state is known as the "Empire State?"',answers:["New York"]},{question:'Which state is known as the "Lone Star State?"',answers:["Texas"]},{question:'Which state is known as the "Golden State?"',answers:["California"]},{question:'Which state is known as the "Beaver State?"',answers:["Oregon"]},{question:'Which state is known as the "Sunflower State?"',answers:["Kansas"]},{question:'Which state is known as the "Beehive State?"',answers:["Utah"]}]},{name:"English Punctuation Trivia",data:[{question:"Three periods in a row are called _________.",answers:["Ellipses"]},{question:"A semi-colon is primarily used to:",answers:["Join two connected sentences"]},{question:"Where does the period go in a sentence?",answers:["At the end"]},{question:"Which of the following is NOT a reason to use an exclamation mark (!) ?",answers:["Boredom"]},{question:"Which sentence uses a semi-colon correctly?",answers:["I set out on a quest; the enemies looked fierce."]},{question:"Which sentence below uses a comma(s) correctly?",answers:["Megan, who lives next door loves dogs."]},{question:"Quotation marks are used to do what?",answers:["Show speech"]},{question:"Which sentence correctly uses an apostrophe?",answers:["I cant do it, because it is too hard.","The horse's tail is so pretty."]},{question:"What is the apostrophe's main function?",answers:["Show ownership or posession"]},{question:"Which sentence uses quotation marks correctly?",answers:[`Sally said, "It's time to cook dinner."`]},{question:"An exclamation mark is often used to express what?",answers:["Excitement"]},{question:"Which sentence below uses a comma correctly?",answers:["I love to play video games, but they are hard.","Before you begin, let us learn to play."]},{question:"A period is also used to __________ words.",answers:["Abbreviate"]},{question:"Which date below uses a comma correctly?",answers:["January 1st, 2014"]}]},{name:"Big Cats Trivia",data:[{question:"Which big cat is in the genus Uncia?",answers:["Snow Leopard"]},{question:"Which big cat is not in the genus Panthera?",answers:["Cheetah"]},{question:"Which big cat is in the genus Acinonyx?",answers:["Cheetah"]},{question:"Which of these lions are recently extinct?",answers:["Barbary Lion"]},{question:"One common way to determine what is considered a big cat, is a feline that can ________.",answers:["Roar"]},{question:"Which is the best climber of all the big cats?",answers:["Leopard"]},{question:"A cheetah can run up to speeds of ____ miles an hour.",answers:["70"]},{question:"Which of these big cats purrs instead of roars?",answers:["Cheetah"]},{question:"Which type of tiger is extinct?",answers:["Caspian Tiger"]},{question:"Which is the only big cat that lives in groups?",answers:["Lion"]},{question:"How far can a lion's roar be heard from?",answers:["5 miles"]},{question:"Which is the most endangered big cat?",answers:["Amur Leopard"]},{question:"Tigers are often poached for their parts, used in traditional _________ medicine.",answers:["Chinese"]},{question:"Which of the following is not a criteria for an accredited US Fish & Wildlife Service animal sanctuary?",answers:["Must provide enrichment activities for big cats"]},{question:"Which of the following is not considered a big cat?",answers:["Bobcat"]},{question:"The main threats to big cats are ___________.",answers:["poaching and habitat destruction"]},{question:"Big cats are ________.",answers:["Carnivores"]},{question:"Which of these big cats is an excellent swimmer who loves water?",answers:["Tiger"]},{question:"Which big cat is in the genus Puma?",answers:["Cougar"]},{question:'Which big cat is named from the Native American word meaning "he who kills with one leap"?',answers:["Jaguar"]}]},{name:"Ancient Egypt Trivia",data:[{question:"How many pyramids have been discovered in Egypt so far?",answers:["Over 130"]},{question:"What type of animal did Ancient Egyptians not typically keep as a pet?",answers:["Hippo"]},{question:"What did Ancient Egyptians believe made the Nile River overflow every year?",answers:["The tears of Isis"]},{question:"What is the largest pyramid in Egypt?",answers:["Pyramid of Khufu"]},{question:"What is the name of the most popular board game developed by Ancient Egyptians?",answers:["Senet"]},{question:"Which of these animals was considered sacred by Ancient Egyptians?",answers:["Cat"]},{question:"The Egyptian alphabet consisted of more than ______ hieroglyphs.",answers:["700"]},{question:"Which is not considered a phase of the Ancient Egyptian society?",answers:["Glorious Kingdom"]},{question:"When did the Ancient Egyptian Empire begin to weaken?",answers:["700 BC"]},{question:"Which of the following was <b>not</b> invented by the Ancient Egyptians?",answers:["Horse saddles"]},{question:"Who is considered to be the most important Egyptian god?",answers:["Ra"]},{question:"Because they believed in ________, ancient Egyptians mummified bodies.",answers:["the afterlife"]},{question:"Roughly how many different deities did the Ancient Egyptians believe in?",answers:["More than 2,000"]},{question:"The famous Great Sphinx is missing what part?",answers:["Nose"]},{question:"Which empire was the first to conquer the Ancient Egyptians?",answers:["Assyrian Empire"]},{question:"Which of the following was a calendar not followed by the Ancient Egyptians?",answers:["Animal Calendar"]},{question:"The Ancient Egyptians were the first civilization to invent __________.",answers:["Writing"]},{question:"Who is considered to be the first Pharaoh of Egypt?",answers:["King Menes"]},{question:"A Pharaoh never let his ______ be seen.",answers:["Hair"]},{question:"Which of the following was not invented by the Ancient Egyptians?",answers:["Horse saddles"]}]},{name:"Wizard101 Spellbinding Trivia",data:[{question:'Who tells you to speak these words only unto your mentor: "Meena Korio Jajuka!"',answers:["Priya the Dryad"]},{question:"Who grants the first Shadow Magic spell?",answers:["Sophia DarkSide"]},{question:'Who taunts you with: "Prepare to be broken, kid!"',answers:["Clanker"]},{question:"Morganthe got the Horned Crown from the Spriggan:",answers:["Gisela"]},{question:"Who needs the healing potion from Master Yip?",answers:["Binh Hoa"]},{question:"Who is Haraku Yip's apprentice?",answers:["Binh Hoa"]},{question:"What does Silenus name you once you've defeated Hades?",answers:["Glorious Golden Archon"]},{question:'Who tells you: "A shield is just as much a weapon as the sword."',answers:["Mavra Flamewing"]},{question:"Who taunts: Why I oughta knock you to the moon, you pesky little creep!",answers:["Mugsy"]},{question:"Sumner Fieldgold twice asks you to recover what for him?",answers:["Shrubberies "]},{question:"What special plant was Barley developing in his Garden?",answers:["Cultivated Woodsmen"]},{question:"Who tries to raise a Gorgon Army?",answers:["Phorcys"]},{question:"What badge do you earn by defeating 100 Samoorai?",answers:["Yojimbo"]},{question:"Where has Pharenor been imprisoned?",answers:["Skythorn Tower"]},{question:"Who makes the harpsicord for Shelus?",answers:["Gretta Darkkettle"]},{question:'Who taunts you with: "Wizard, you will know the meaning of the word pain after we battle!"',answers:["Aiuchi"]},{question:"In Azteca, Morganthe enlisted the help of the:",answers:["The Black Sun Necromancers"]},{question:"Who thinks you are there to take their precious feathers?",answers:["Takeda Kanryu"]},{question:"The Swallows of Caliburn migrate to Avalon from where each year?",answers:["Zafaria and Marleybone"]},{question:"Who helps Morganthe find the Horn of Huracan?",answers:["Belloq"]}]},{name:"Soccer Trivia",data:[{question:"What is the circumference of an official soccer ball?",answers:["28 in"]},{question:"What is the international football (soccer) body called?",answers:["FIFA"]},{question:"What is the common name for soccer in Europe?",answers:["Football"]},{question:"What is the minimum number of players that can play on one soccer team?",answers:["Seven"]},{question:"How often does the FIFA World Cup take place?",answers:["Every Four Years"]},{question:"A _______ card dismisses a player from the game.",answers:["Red"]},{question:"Which of the following is not a field position in soccer?",answers:["Kicker"]},{question:'In what country did the name "soccer" instead of football originate?',answers:["England"]},{question:"What colors are a typical soccer ball?",answers:["Black and White"]},{question:"A _______ card cautions a player and marks a foul.",answers:["Yellow"]},{question:"When was The Footbal Association founded?",answers:["1863"]},{question:"Which is the only position where a player can use their hands?",answers:["Goalkeeper"]},{question:"What are the only parts of the body you can't use when playing soccer?",answers:["Hands and Arms"]},{question:"What is the main protective gear worn by soccer players?",answers:["Shin Guards"]},{question:"What is the major world soccer competition that takes place every four years?",answers:["FIFA World Cup"]},{question:"One of the earliest versions of soccer was recorded by this ancient civilization?",answers:["Greek"]},{question:'Which countries primarily use the word "soccer" to describe association football?',answers:["US & Canada"]},{question:"How many players are on a soccer team?",answers:["11"]},{question:"How long is a half of a soccer game?",answers:["Forty Five Minutes"]},{question:"Which college wrote early fundamental and influental rules for soccer?",answers:["Cambridge"]}]}];class Ot{constructor(t,n,s){this.answer=t,this.checkbox=n,this.parentElement=s}}const N=class N{constructor(){f(this,"title");f(this,"question");f(this,"answers",[]);f(this,"nextButton");const t=document.querySelector("h1"),n=t==null?void 0:t.textContent;y(n,"Quiz title not found"),this.title=z(n);const s=document.querySelector(".quizQuestion"),o=s==null?void 0:s.textContent;y(o,"Quiz question not found"),this.question=z(o),document.querySelectorAll(".answer").forEach(r=>{const l=r.querySelector(".answerText");y(l,"Answer text not found");const h=l.textContent;y(h,"Answer text not found");const c=r.querySelector("a");this.answers.push(new Ot(z(h),c,r))});const a=document.querySelector("#nextQuestion");y(a,"Next button not found"),this.nextButton=a}getCorrectAnswerBox(){if(N.correctAnswerBox)return N.correctAnswerBox;const t=jt.find(s=>this.title.includes(z(s.name)));y(t,"Quiz title not found in answers!");const n=t.data.find(s=>this.question.includes(z(s.question)));y(n,"Quiz question not found in answers!");for(const s of this.answers)for(const o of n.answers)if(s.answer===z(o)){N.correctAnswerBox=s;break}if(!N.correctAnswerBox)throw je(),new Error("Correct answer not found!");return N.correctAnswerBox}next(){this.nextButton.click()}};f(N,"correctAnswerBox");let be=N;function Ft(){const e=new be,t=e.getCorrectAnswerBox();I(async()=>{t.parentElement.querySelectorAll("span").forEach(n=>{if(x("quiz","highlightCorrectAnswer")()){n.style.backgroundColor="#28a745";return}n.style.backgroundColor="transparent"});try{const n=document.querySelector(".quizQuestion");y(n);const s=`
Correct answer: ${t.answer}`;x("quiz","displayCorrectAnswer")()?n.innerText+=s:n.innerText=n.innerText.replace(s,"")}catch{}!x("login","continueWithoutLogin")()&&!L.getLoggedIn()||(await Nt(t,e.answers),await j(ee($.second,$.second*5)),x("quiz","pressNextButton")()&&e.next())})}let Dt={data:""},Ht=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Dt,Gt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Vt=/\/\*[^]*?\*\/|  +/g,Ge=/\n+/g,O=(e,t)=>{let n="",s="",o="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+a+";":s+=i[1]=="f"?O(a,i):i+"{"+O(a,i[1]=="k"?"":t)+"}":typeof a=="object"?s+=O(a,t?t.replace(/([^,])+/g,r=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,r):r?r+" "+l:l)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=O.p?O.p(i,a):i+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+s},P={},Ve=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Ve(e[n]);return t}return e},Rt=(e,t,n,s,o)=>{let i=Ve(e),a=P[i]||(P[i]=(l=>{let h=0,c=11;for(;h<l.length;)c=101*c+l.charCodeAt(h++)>>>0;return"go"+c})(i));if(!P[a]){let l=i!==e?e:(h=>{let c,u,g=[{}];for(;c=Gt.exec(h.replace(Vt,""));)c[4]?g.shift():c[3]?(u=c[3].replace(Ge," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][c[1]]=c[2].replace(Ge," ").trim();return g[0]})(e);P[a]=O(o?{["@keyframes "+a]:l}:l,n?"":"."+a)}let r=n&&P.g?P.g:null;return n&&(P.g=P[a]),((l,h,c,u)=>{u?h.data=h.data.replace(u,l):h.data.indexOf(l)===-1&&(h.data=c?l+h.data:h.data+l)})(P[a],t,s,r),a},Ut=(e,t,n)=>e.reduce((s,o,i)=>{let a=t[i];if(a&&a.call){let r=a(n),l=r&&r.props&&r.props.className||/^go/.test(r)&&r;a=l?"."+l:r&&typeof r=="object"?r.props?"":O(r,""):r===!1?"":r}return s+o+(a??"")},"");function te(e){let t=this||{},n=e.call?e(t.p):e;return Rt(n.unshift?n.raw?Ut(n,[].slice.call(arguments,1),t.p):n.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):n,Ht(t.target),t.g,t.o,t.k)}te.bind({g:1}),te.bind({k:1});const Yt=Qe();function Kt(e){let t=this||{};return(...n)=>{const s=o=>{const i=Je(Yt),a=ue(o,{theme:i}),r=ue(a,{get class(){const F=a.class,ve="class"in a&&/^go[0-9]+/.test(F);let On=te.apply({target:t.target,o:ve,p:a,g:t.g},n);return[F,On].filter(Boolean).join(" ")}}),[l,h]=Te(r,["as","theme"]),c=h,u=l.as||e;let g;return typeof u=="function"?g=u(c):t.g==1?(g=document.createElement(u),Pe(g,c)):g=Wt(ue({component:u},c)),g};return s.class=o=>E(()=>te.apply({target:t.target,p:o,g:t.g},n)),s}}const q=new Proxy(Kt,{get(e,t){return e(t)}}),Qt=q.form`
  .field {
    width: 113px;
    padding-left: 3px;
  }
`;var Jt=b("<span>"),Xt=b('<div><input class="override width100">');const Zt=q.div`
  * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`,Re=e=>{const[t,n]=Y(!1),s=()=>{n(!0)},o=()=>{n(!1)},i=()=>t()?"wizardButtonInputHover":"wizardButtonInput";return d(Zt,{get class(){return i()},onFocus:s,onBlur:o,onMouseOver:s,onMouseOut:o,get onClick(){return e.onClick},tabIndex:0,role:"button",get children(){return[Jt(),(()=>{var a=Xt(),r=a.firstChild;return v(()=>k(r,"type",e.type??"submit")),v(()=>r.value=e.value),a})()]}})};var en=b('<input class="username field"type=text name=username placeholder=Username>'),tn=b('<input class="password field"type=password name=password placeholder=Password>');const nn=()=>{const e=n=>{n.preventDefault();const s=new FormData(n.target),o=s.get("username"),i=s.get("password");L.useCredentials(o,i)},t=()=>{L.clearCredentials()};return d(Qt,{onSubmit:e,get children(){return[en(),tn(),d(Re,{value:"Use Credentials"}),d(Re,{value:"Clear Credentials",type:"button",onClick:t})]}})},sn=q.span`
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
`,on=e=>d(sn,{get class(){return e.class},get style(){return{visibility:e.visible?"visible":"hidden"}}}),rn=q("div")`
  margin-bottom: 15px;

  .content-wrapper {
    position: relative;
    filter: drop-shadow(2px 4px 2px rgba(0,0,0,0.5));
    width: 100%;
    transition: width .15s ease-out;
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
        filter: drop-shadow(-3px 2px 2px rgba(0,0,0,0.3));

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
`;var an=b('<div class=content-wrapper role=button><div class=content><div class=left><div class=scroll></div></div><div class=center><div class="text text-content"></div></div><div class=right><div class=scroll>');const Ue=e=>d(rn,{get class(){return e.class??""},get children(){var t=an(),n=t.firstChild,s=n.firstChild,o=s.nextSibling,i=o.firstChild;return fe(t,"focus",e.onClick),fe(t,"click",e.onClick,!0),C(i,()=>e.content),t}});de(["click"]);var ln=b("<div class=container>");const cn=q("div")`
  margin-top: 5px;
  position: relative;

  .container {
    margin: 0 20px 7px 38px;
  }
`,un=e=>d(cn,{get class(){return e.class},get children(){return[d(Ue,{get content(){return e.titleContent},get class(){return e.titleClass}}),(()=>{var t=ln();return C(t,()=>e.children),t})()]}});var hn=b("<div class=modal><div class=top><div class=left></div><div class=center><div class=title></div><div class=content></div></div><div class=right></div></div><div class=bottom><div class=left><div class=corner><div class=corner-slope></div></div></div><div class=center></div><div class=right><div class=corner><div class=corner-slope>"),dn=b("<h1>");const fn=e=>{const t=q.div`
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
`;return d(t,{get onClick(){return e.onBackdropClick},get class(){return`${e.isOpen?"":"close"}`},id:"w101-trivia-bot-modal",get children(){var n=hn(),s=n.firstChild,o=s.firstChild,i=o.nextSibling,a=i.firstChild,r=a.nextSibling;return C(a,(()=>{var l=A(()=>!!e.title);return()=>l()&&(()=>{var h=dn();return C(h,()=>e.title),h})()})()),C(r,()=>e.children),n}})},gn=e=>{const t=Math.max(e.openTimeMs/2,100),n=q.div`
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
`;return d(n,{get class(){return e.isOpen?"":"close"}})},se=class se{constructor(){f(this,"backdropElmt");f(this,"modalElmt");this.backdropElmt=document.createElement("div"),this.backdropElmt.id="backdrop",this.modalElmt=document.createElement("div"),this.modalElmt.id="modal",document.body.appendChild(this.backdropElmt),document.body.appendChild(this.modalElmt)}static getInstance(){return this.instance||(this.instance=new se),this.instance}};f(se,"instance");let qe=se;const wn=(e,t)=>{const n=qe.getInstance(),s=(t==null?void 0:t.openTimeMs)??300,o=new Ne("modalIsOpen",Pt,!1),[i,a]=Y(o.get());he(()=>d(Ee,{get when(){return i()},get children(){return d(fn,{get title(){return t==null?void 0:t.title},onBackdropClick:l,get isOpen(){return o.get()},openTimeMs:s,get children(){return e(c)}})}}),n.modalElmt),he(()=>d(Ee,{get when(){return i()},get children(){return d(gn,{get opacity(){return t==null?void 0:t.backdropOpacityPercent},get isOpen(){return o.get()},openTimeMs:s})}}),n.backdropElmt),I(()=>{if(i()){document.body.style.overflowY="hidden";return}document.body.style.overflowY="auto"});const r=u=>{o.get()&&u.key==="Escape"&&c()};addEventListener("keydown",r);function l(u){u.currentTarget===u.target&&c()}function h(){o.set(!0),a(!0)}function c(){o.set(!1),setTimeout(()=>{a(!1)},s)}return{openModal:h,closeModal:c}};var mn=b("<input>");const pn=q.div`
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
`,yn=e=>{const t=e.type??"checkbox",n=s=>{var a;const i=s.target.checked;(a=e.onCheck)==null||a.call(e,i)};return d(pn,{get class(){return e.class},get children(){var s=mn();return s.$$click=n,k(s,"type",t),v(()=>k(s,"id",e.id)),v(()=>s.checked=e.checked),s}})};de(["click"]);const oe=class oe{static getId(){return`w101-trivia-bot-checkbox-${++oe.id}`}};f(oe,"id",0);let ne=oe;var bn=b("<label>");const qn=q.div`
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
`,vn=e=>{const t=e.name?e.name:ne.getId();return d(qn,{get class(){return e.class},get children(){return[d(yn,{id:t,class:"checkbox",get onCheck(){return e.onCheck},get checked(){return e.checked}}),(()=>{var n=bn();return k(n,"for",t),C(n,()=>e.title),n})()]}})},_n=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();var kn=b("<input>"),xn=b("<label>");const Sn=q.div`
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
`,Wn=e=>{const t=e.name?e.name:ne.getId(),n=s=>{var o;(o=e.onChange)==null||o.call(e,s.target.value)};return d(Sn,{get class(){return e.class},get children(){return[(()=>{var s=kn();return s.addEventListener("change",n),k(s,"id",t),v(o=>{var i=e.type??"text",a=e.placeholder;return i!==o.e&&k(s,"type",o.e=i),a!==o.t&&k(s,"placeholder",o.t=a),o},{e:void 0,t:void 0}),v(()=>s.value=e.value),s})(),(()=>{var s=xn();return k(s,"for",t),C(s,()=>e.title),s})()]}})};var An=b("<h3>"),Cn=b("<span class=setting-group>");const Tn=q.div`
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
  }
`,En=()=>d(Tn,{get children(){return pe.map(e=>typeof e=="string"?(()=>{var t=An();return C(t,()=>e.split("_").map(n=>_n(n)).join(" ")),t})():(()=>{var t=Cn();return C(t,()=>e.map(n=>n.type==="string"?d(Wn,{get title(){return n.title},get value(){return n.get()},onChange:s=>n.set(s)}):d(vn,{get title(){return n.title},get checked(){return n.get()},onCheck:s=>n.set(s)}))),t})())}});var Bn=b("<div>Auto Login");const Pn=q("div")`
  margin-left: 13px;
  margin-right: 13px;

  .logged-in .content  {
    filter: hue-rotate( 70deg ) grayscale(25%);
  }
`,Mn=q.div`
  display: grid;
  grid-template-columns: 1fr 20px;
`,In=()=>{const{openModal:e}=wn(()=>d(En,{}),{title:"Trivia Bot Settings",backdropOpacityPercent:50}),t=d(Mn,{get children(){return[Bn(),d(on,{get visible(){return L.getLoggedIn()}})]}});return d(Pn,{get children(){return[d(un,{titleContent:t,get titleClass(){return L.getLoggedIn()?"logged-in":""},get children(){return d(nn,{})}}),d(Ue,{onClick:e,content:"Trivia Bot Settings"})]}})},zn=q("span")`
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
`,Ln=()=>d(zn,{get children(){return d(In,{})}}),$n=async()=>{const e=()=>ee($.second,$.second*2);await j(e());const t=document.querySelector(".kiaccountsbuttongreen");y(t,"Results button not found!"),t.click(),await j(e());const n=document.querySelector("#jPopFrame_content");y(n,"jPopFrame not found!");const s=n.contentWindow;y(s,"Content window not found!");const o=s.document.querySelector("#submit");y(o,"Submit button not found!"),o.click(),await j($.second*2),I(()=>{x("others","attemptToPlaySounds")()&&we.done.play()})},Nn=async()=>{await j($.minute),location.reload()};function jn(){const e=document.querySelector("dl");y(e,"Could not find parent element");const t=document.querySelector("#subMenu1_lockOpen");y(t,"Could not find before element");const n=document.createElement("div");e.insertBefore(n,t.nextSibling),he(()=>d(Ln,{}),n),I(()=>{if(!x("login","autoLogin")())return;L.getLoggedIn();const s=L.autoLogin();return()=>{s&&clearTimeout(s)}}),I(()=>{if(Ct(),Z.get==="searching"){$t();return}if(Z.get==="quiz"){Ft();return}if(Z.get==="results"){$n();return}Z.get==="end"&&Nn()})}jn()});
