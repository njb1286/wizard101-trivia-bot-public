(function(W){typeof define=="function"&&define.amd?define(W):W()})(function(){"use strict";var Un=Object.defineProperty;var Kn=(W,k,A)=>k in W?Un(W,k,{enumerable:!0,configurable:!0,writable:!0,value:A}):W[k]=A;var f=(W,k,A)=>(Kn(W,typeof k!="symbol"?k+"":k,A),A);const W=(e,t)=>e===t,k=Symbol("solid-proxy"),A={equals:W};let Te=$e;const $=1,U=2,Ee={owned:null,cleanups:null,context:null,owner:null};var w=null;let re=null,Ze=null,m=null,y=null,T=null,K=0;function et(e,t){const n=m,s=w,o=e.length===0,i=t===void 0?s:t,a=o?Ee:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=o?e:()=>e(()=>E(()=>X(a)));w=a,m=null;try{return V(r,!0)}finally{m=n,w=s}}function Y(e,t){t=t?Object.assign({},A,t):A;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=o=>(typeof o=="function"&&(o=o(n.value)),Pe(n,o));return[Be.bind(n),s]}function v(e,t,n){const s=ae(e,t,!1,$);G(s)}function M(e,t,n){Te=rt;const s=ae(e,t,!1,$);s.user=!0,T?T.push(s):G(s)}function C(e,t,n){n=n?Object.assign({},A,n):A;const s=ae(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,G(s),Be.bind(s)}function E(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function tt(e,t){const n=Symbol("context");return{id:n,Provider:lt(n),defaultValue:e}}function nt(e){return w&&w.context&&w.context[e.id]!==void 0?w.context[e.id]:e.defaultValue}function st(e){const t=C(e),n=C(()=>le(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Be(){if(this.sources&&this.state)if(this.state===$)G(this);else{const e=y;y=null,V(()=>J(this),!1),y=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function Pe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],a=re&&re.running;a&&re.disposed.has(i),(a?!i.tState:!i.state)&&(i.pure?y.push(i):T.push(i),i.observers&&Me(i)),a||(i.state=$)}if(y.length>1e6)throw y=[],new Error},!1)),t}function G(e){if(!e.fn)return;X(e);const t=K;ot(e,e.value,t)}function ot(e,t,n){let s;const o=w,i=m;m=w=e;try{s=e.fn(t)}catch(a){return e.pure&&(e.state=$,e.owned&&e.owned.forEach(X),e.owned=null),e.updatedAt=n+1,Ie(a)}finally{m=i,w=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Pe(e,s):e.value=s,e.updatedAt=n)}function ae(e,t,n,s=$,o){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==Ee&&(w.owned?w.owned.push(i):w.owned=[i]),i}function Q(e){if(e.state===0)return;if(e.state===U)return J(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===$)G(e);else if(e.state===U){const s=y;y=null,V(()=>J(e,t[0]),!1),y=s}}function V(e,t){if(y)return e();let n=!1;t||(y=[]),T?n=!0:T=[],K++;try{const s=e();return it(n),s}catch(s){n||(T=null),y=null,Ie(s)}}function it(e){if(y&&($e(y),y=null),e)return;const t=T;T=null,t.length&&V(()=>Te(t),!1)}function $e(e){for(let t=0;t<e.length;t++)Q(e[t])}function rt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:Q(s)}for(t=0;t<n;t++)Q(e[t])}function J(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const o=s.state;o===$?s!==t&&(!s.updatedAt||s.updatedAt<K)&&Q(s):o===U&&J(s,t)}}}function Me(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?y.push(n):T.push(n),n.observers&&Me(n))}}function X(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),a=n.observerSlots.pop();s<o.length&&(i.sourceSlots[a]=s,o[s]=i,n.observerSlots[s]=a)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)X(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function at(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ie(e,t=w){throw at(e)}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=le(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function lt(e,t){return function(s){let o;return v(()=>o=E(()=>(w.context={...w.context,[e]:s.value},st(()=>s.children))),void 0),o}}function h(e,t){return E(()=>e(t||{}))}function Z(){return!0}const ce={get(e,t,n){return t===k?n:e.get(t)},has(e,t){return t===k?!0:e.has(t)},set:Z,deleteProperty:Z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Z,deleteProperty:Z}},ownKeys(e){return e.keys()}};function ue(e){return(e=typeof e=="function"?e():e)?e:{}}function ct(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function he(...e){let t=!1;for(let a=0;a<e.length;a++){const r=e[a];t=t||!!r&&k in r,e[a]=typeof r=="function"?(t=!0,C(r)):r}if(t)return new Proxy({get(a){for(let r=e.length-1;r>=0;r--){const l=ue(e[r])[a];if(l!==void 0)return l}},has(a){for(let r=e.length-1;r>=0;r--)if(a in ue(e[r]))return!0;return!1},keys(){const a=[];for(let r=0;r<e.length;r++)a.push(...Object.keys(ue(e[r])));return[...new Set(a)]}},ce);const n={},s=Object.create(null);for(let a=e.length-1;a>=0;a--){const r=e[a];if(!r)continue;const l=Object.getOwnPropertyNames(r);for(let d=l.length-1;d>=0;d--){const c=l[d];if(c==="__proto__"||c==="constructor")continue;const u=Object.getOwnPropertyDescriptor(r,c);if(!s[c])s[c]=u.get?{enumerable:!0,configurable:!0,get:ct.bind(n[c]=[u.get.bind(r)])}:u.value!==void 0?u:void 0;else{const g=n[c];g&&(u.get?g.push(u.get.bind(r)):u.value!==void 0&&g.push(()=>u.value))}}}const o={},i=Object.keys(s);for(let a=i.length-1;a>=0;a--){const r=i[a],l=s[r];l&&l.get?Object.defineProperty(o,r,l):o[r]=l?l.value:void 0}return o}function ze(e,...t){if(k in e){const o=new Set(t.length>1?t.flat():t[0]),i=t.map(a=>new Proxy({get(r){return a.includes(r)?e[r]:void 0},has(r){return a.includes(r)&&r in e},keys(){return a.filter(r=>r in e)}},ce));return i.push(new Proxy({get(a){return o.has(a)?void 0:e[a]},has(a){return o.has(a)?!1:a in e},keys(){return Object.keys(e).filter(a=>!o.has(a))}},ce)),i}const n={},s=t.map(()=>({}));for(const o of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,o),a=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let r=!1,l=0;for(const d of t)d.includes(o)&&(r=!0,a?s[l][o]=i.value:Object.defineProperty(s[l],o,i)),++l;r||(a?n[o]=i.value:Object.defineProperty(n,o,i))}return[...s,n]}const ut=e=>`Stale read from <${e}>.`;function de(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return C(()=>{const s=n();if(s){const o=e.children;return typeof o=="function"&&o.length>0?E(()=>o(t?s:()=>{if(!E(n))throw ut("Show");return e.when})):o}return e.fallback},void 0,void 0)}const ht=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],dt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ht]),ft=new Set(["innerHTML","textContent","innerText","children"]),gt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),wt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function mt(e,t){const n=wt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const pt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),yt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),bt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function qt(e,t,n){let s=n.length,o=t.length,i=s,a=0,r=0,l=t[o-1].nextSibling,d=null;for(;a<o||r<i;){if(t[a]===n[r]){a++,r++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===a){const c=i<s?r?n[r-1].nextSibling:n[i-r]:l;for(;r<i;)e.insertBefore(n[r++],c)}else if(i===r)for(;a<o;)(!d||!d.has(t[a]))&&t[a].remove(),a++;else if(t[a]===n[i-1]&&n[r]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[r++],t[a++].nextSibling),e.insertBefore(n[--i],c),t[o]=n[i]}else{if(!d){d=new Map;let u=r;for(;u<i;)d.set(n[u],u++)}const c=d.get(t[a]);if(c!=null)if(r<c&&c<i){let u=a,g=1,F;for(;++u<o&&u<i&&!((F=d.get(t[u]))==null||F!==c+g);)g++;if(g>c-r){const Ce=t[a];for(;r<c;)e.insertBefore(n[r++],Ce)}else e.replaceChild(n[r++],t[a++])}else a++;else t[a++].remove()}}}const Le="_$DX_DELEGATE";function fe(e,t,n,s={}){let o;return et(i=>{o=i,t===document?e():_(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{o(),t.textContent=""}}function p(e,t,n){let s;const o=()=>{const a=document.createElement("template");return a.innerHTML=e,a.content.firstChild},i=()=>(s||(s=o())).cloneNode(!0);return i.cloneNode=i,i}function ge(e,t=window.document){const n=t[Le]||(t[Le]=new Set);for(let s=0,o=e.length;s<o;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,At))}}function x(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function vt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ne(e,t){t==null?e.removeAttribute("class"):e.className=t}function we(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function _t(e,t,n={}){const s=Object.keys(t||{}),o=Object.keys(n);let i,a;for(i=0,a=o.length;i<a;i++){const r=o[i];!r||r==="undefined"||t[r]||(Oe(e,r,!1),delete n[r])}for(i=0,a=s.length;i<a;i++){const r=s[i],l=!!t[r];!r||r==="undefined"||n[r]===l||!l||(Oe(e,r,!0),n[r]=l)}return n}function kt(e,t,n){if(!t)return n?x(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(s.setProperty(i,o),n[i]=o);return n}function je(e,t={},n,s){const o={};return v(()=>o.children=R(e,t.children,o.children)),v(()=>typeof t.ref=="function"?xt(t.ref,e):t.ref=e),v(()=>St(e,t,n,!0,o,!0)),o}function xt(e,t,n){return E(()=>e(t,n))}function _(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);v(o=>R(e,t(),o,n),s)}function St(e,t,n,s,o={},i=!1){t||(t={});for(const a in o)if(!(a in t)){if(a==="children")continue;o[a]=Fe(e,a,null,o[a],n,i)}for(const a in t){if(a==="children")continue;const r=t[a];o[a]=Fe(e,a,r,o[a],n,i)}}function Wt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Oe(e,t,n){const s=t.trim().split(/\s+/);for(let o=0,i=s.length;o<i;o++)e.classList.toggle(s[o],n)}function Fe(e,t,n,s,o,i){let a,r,l,d,c;if(t==="style")return kt(e,n,s);if(t==="classList")return _t(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),g=pt.has(u);if(!g&&s){const F=Array.isArray(s)?s[0]:s;e.removeEventListener(u,F)}(g||n)&&(we(e,u,n,g),g&&ge([u]))}else if(t.slice(0,5)==="attr:")x(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(l=ft.has(t))||!o&&((d=mt(t,e.tagName))||(r=dt.has(t)))||(a=e.nodeName.includes("-")))c&&(t=t.slice(5),r=!0),t==="class"||t==="className"?Ne(e,n):a&&!r&&!l?e[Wt(t)]=n:e[d||t]=n;else{const u=o&&t.indexOf(":")>-1&&bt[t.split(":")[0]];u?vt(e,u,t,n):x(e,gt[t]||t,n)}return n}function At(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?s.call(n,o,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function R(e,t,n,s,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,a=s!==void 0;if(e=a&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),a){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=D(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=D(e,n,s);else{if(i==="function")return v(()=>{let r=t();for(;typeof r=="function";)r=r();n=R(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[],l=n&&Array.isArray(n);if(me(r,t,n,o))return v(()=>n=R(e,r,n,s,!0)),()=>n;if(r.length===0){if(n=D(e,n,s),a)return n}else l?n.length===0?De(e,r,s):qt(e,n,r):(n&&D(e),De(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(a)return n=D(e,n,s,t);D(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function me(e,t,n,s){let o=!1;for(let i=0,a=t.length;i<a;i++){let r=t[i],l=n&&n[e.length],d;if(!(r==null||r===!0||r===!1))if((d=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=me(e,r,l)||o;else if(d==="function")if(s){for(;typeof r=="function";)r=r();o=me(e,Array.isArray(r)?r:[r],Array.isArray(l)?l:[l])||o}else e.push(r),o=!0;else{const c=String(r);l&&l.nodeType===3&&l.data===c?e.push(l):e.push(document.createTextNode(c))}}return o}function De(e,t,n=null){for(let s=0,o=t.length;s<o;s++)e.insertBefore(t[s],n)}function D(e,t,n,s){if(n===void 0)return e.textContent="";const o=s||document.createTextNode("");if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){const r=t[a];if(o!==r){const l=r.parentNode===e;!i&&!a?l?e.replaceChild(o,r):e.insertBefore(o,n):l&&r.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const Ct="http://www.w3.org/2000/svg";function Tt(e,t=!1){return t?document.createElementNS(Ct,e):document.createElement(e)}function Et(e){const[t,n]=ze(e,["component"]),s=C(()=>t.component);return C(()=>{const o=s();switch(typeof o){case"function":return E(()=>o(n));case"string":const i=yt.has(o),a=Tt(o,i);return je(a,n,i),a}})}const ee=new class{constructor(){f(this,"page");var t;const e=document.querySelector("h2");if((t=e==null?void 0:e.textContent)!=null&&t.trim().toLowerCase().includes("Come Back Tomorrow".trim().toLowerCase())){this.page="end";return}if(document.querySelector(".quizQuestion")){this.page="quiz";return}if(document.querySelector(".thumb")){this.page="searching";return}this.page="results"}get get(){return this.page}},Bt=["Eleventh Grade Vocabulary Trivia","Ninth Grade Vocabulary Trivia","Twelfth Grade Vocabulary Trivia","Tenth Grade Vocabulary Trivia","Texas Facts Trivia","Horse Trivia","Basketball Trivia","Solar System Trivia","Norse Mythology Trivia","Weather Trivia","Famous Poets","State Nicknames Trivia","English Punctuation Trivia","Big Cats Trivia","Ancient Egypt Trivia","Wizard101 Spellbinding Trivia","Soccer Trivia"],I=e=>e.trim().toLowerCase(),te=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),He=[],j=async e=>new Promise(t=>{const n=setTimeout(()=>{t()},e);He.push(n)}),Pt=()=>{He.forEach(e=>{clearTimeout(e)})},pe={done:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345432/mch_uvkd4w.mp3"),error:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686345442/minc_r17thf.mp3"),empty:new Audio("https://res.cloudinary.com/dj86ttepi/video/upload/v1686346114/empty_h74hy6.mp3")};function $t(e){return e===String?"string":e===Boolean?"boolean":e===Number?"number":""}const Mt=e=>Object.keys(e),It=e=>Object.values(e),Ge=e=>{try{return JSON.parse(e)}catch{return e}};class zt{constructor(t,n,s){f(this,"get");f(this,"setValue");this.key=t,this.converter=n,this.defaultValue=s;const[o,i]=Y(this.getDefaultValue());this.get=o,this.setValue=i}getDefaultValue(){const t=localStorage.getItem(this.key);return t?this.converter(t):(localStorage.setItem(this.key,String(this.defaultValue)),this.defaultValue)}set(t){let n;typeof t=="function"?n=t(this.get()):n=t,this.setValue(n),localStorage.setItem(this.key,String(n))}clearValue(){this.get()!==this.defaultValue&&(this.setValue(this.defaultValue),localStorage.removeItem(this.key))}}class H extends zt{constructor(t,n,s){super(n,Ge,s??t())}}class Lt extends H{constructor(n,s,o,i){super(n,s,i);f(this,"type");this.title=o,this.type=$t(n)}}class B extends Lt{constructor(t,n,s=!1){super(Boolean,t,n,s),this.title=n}}const ye={quiz:{pressNextButton:new B("pressNextButton","Press next question button",!0),highlightCorrectAnswer:new B("highlightCorrectAnswer","Highlight correct answer",!0),displayCorrectAnswer:new B("displayCorrectAnswer","Display correct answer under title"),highlightWrongAnswer:new B("highlightWrongAnswer","Highlight the wrong answer when it gets selected",!0)},searcher:{autoClick:new B("autoClick","Automatically search for an available quiz, and click it when found",!0),autoReload:new B("autoReload","Automatically reload the page if no valid trivia was found",!0)},login:{autoLogin:new B("autoLogin","Automatically login to site (using given credentials)",!0),continueWithoutLogin:new B("continueWithoutLogin","Do quiz without login")},others:{attemptToPlaySounds:new B("attemptToPlaySounds","Attempt to play sounds when the trivia is done and when there is an error",!0)}},S=(e,t)=>ye[e][t].get,be=[];for(const e of Mt(ye)){be.push(e);const t=ye[e];be.push(It(t))}const Ve=()=>{M(()=>{S("others","attemptToPlaySounds")()?pe.error.play():pe.error.pause()}),document.title="ERROR"};function b(e,t){const n=t??"Value is null or undefined";if(e==null)throw Ve(),new Error(n)}class Nt{constructor(t){f(this,"title");f(this,"used");f(this,"clickable");const n=t.querySelector("h3");b(n,"Title element not found"),this.title=I(n.innerText),this.used=t.classList.contains("notake");const s=t.querySelector("a");b(s,"Clickable element not found"),this.clickable=s}}function Re(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)+(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}function Ue(e){const t=[];for(let n=0;n<e.length;n++)t.push(e.charCodeAt(n)-(n+1)*3);return t.map(n=>String.fromCharCode(n)).join("")}class qe{constructor(t){f(this,"get");f(this,"set");const[n,s]=Y(t);this.get=n,this.set=s}}const z=new class{constructor(){f(this,"username");f(this,"password");f(this,"loggedIn");this.username=new qe(this.getDefaultUsername()),this.password=new qe(this.getDefaultPassword()),this.loggedIn=new qe(this.getDefaultLoggedIn())}getUsername(){return C(()=>Ue(this.username.get()))}getPassword(){return C(()=>Ue(this.password.get()))}getLoggedIn(){return this.loggedIn.get()}getDefaultLoggedIn(){return JSON.parse(localStorage.getItem("loggedIn")??"false")}getDefaultUsername(){return localStorage.getItem("username")??""}getDefaultPassword(){return localStorage.getItem("password")??""}setIsLoggedIn(e){localStorage.setItem("loggedIn",e.toString()),this.loggedIn.set(e)}useCredentials(e,t){if(!e||!t){alert("Please enter a username and password!");return}const n=Re(e),s=Re(t);localStorage.setItem("username",n),localStorage.setItem("password",s),this.username.set(n),this.password.set(s),this.setIsLoggedIn(!0),this.autoLogin()}clearCredentials(){localStorage.removeItem("username"),localStorage.removeItem("password"),this.username.set(""),this.password.set(""),this.setIsLoggedIn(!1)}autoLogin(){const e=document.querySelector("#loginUserName"),t=document.querySelector("#loginPassword"),n=document.querySelector('input[value="Login"]');if(!e||!t||!n)return;const s=this.getUsername(),o=this.getPassword();return!s()||!o()?void 0:(e.value=s(),t.value=o(),setTimeout(()=>{n.click()},1e3))}},Ke="wrongAnswer",jt=()=>{const e=localStorage.getItem(Ke);return e?Ge(e):!1},Ye=e=>{localStorage.setItem(Ke,e.toString())};async function Ot(){Ye(!1);let e;const t=document.querySelectorAll(".quiz-hub-category");for(const s of t)for(const o of s.querySelectorAll("li")){const i=new Nt(o);if(n(i))break}function n(s){if(s.used)return!1;for(const o of Bt){const i=I(o);if(s.title===i)return e=s,!0}return!1}await j(te(5e3,1e4)),M(()=>{if(!(!S("login","continueWithoutLogin")()&&!z.getLoggedIn())){if(!e){S("searcher","autoReload")()&&window.location.reload();return}S("searcher","autoClick")()&&e.clickable.click()}})}const L=new class{constructor(){f(this,"second",1e3);f(this,"minute",60*this.second);f(this,"hour",60*this.minute);f(this,"day",24*this.hour)}},Ft=async(e,t)=>{let n,s=!1;jt()||Math.floor(Math.random()*100)<=25&&(n=t[Math.floor(Math.random()*t.length)],Ye(!0),s=!0),n||(n=e),M(()=>{if(!S("quiz","highlightWrongAnswer")()){n.parentElement.style.backgroundColor="transparent";return}s&&(n.parentElement.style.backgroundColor="#dc3545")}),await j(te(L.second*5,L.second*8)),n.checkbox.click()},Dt=[{name:"Eleventh Grade Vocabulary Trivia",data:[{question:"Denotation",answers:["a word that names or signifies something specific"]},{question:"Discern",answers:["to recognize the difference "]},{question:"Ambiguity",answers:["doubtfulness or uncertainty of meaning or intention"]},{question:"Conceit",answers:["an excessively favorable opinion of one's own ability, importance or wit"]},{question:"Quandary",answers:["a state of extreme dishonor"]},{question:"Buoyancy",answers:["the power to float or rise in a fluid, the upward pressure exerted by the fluid in which a body is immersed"]},{question:"Annotated",answers:["supplied with or containing explanatory notes and textual comments"]},{question:"Enigma",answers:["a mystery "]},{question:"Allegory",answers:["a representation of an abstract or spiritual meaning through concrete or material forms"]},{question:"Procure",answers:["to obtain "]},{question:"Auspicious",answers:["favorable, noteworthy "]},{question:"Principle",answers:["a fundamental, primary, or general law or truth from which others are derived"]},{question:"Assuage",answers:["to relieve or soothe "]},{question:"Euphemism",answers:["the substitution of a mild, indirect, or vague expression for one thought to be offensive, harsh, or blunt"]},{question:"Conspicuous",answers:["noticeable, obvious "]},{question:"Anecdote",answers:["a short account of a particular incident or event of an interesting or amusing nature, often biographical."]}]},{name:"Ninth Grade Vocabulary Trivia",data:[{question:"Parsimony",answers:["extreme care in spending money"]},{question:"Tangible",answers:["possible to be treated as fact"]},{question:"Eccentric",answers:["a person of a specified kind (usually with many eccentricities)"]},{question:"Inadvertent",answers:["without intention (especially resulting from heedless action)"]},{question:"Verbose",answers:["using or containing too many words"]},{question:"Abstract",answers:["a concept or idea not associated with any specific instance"]},{question:"Belittle",answers:["lessen the authority, dignity, or reputation of"]},{question:"Guile",answers:["shrewdness as demonstrated by being skilled in deception"]},{question:"Heed",answers:["paying particular notice (as to children or helpless people)"]},{question:"Advocate",answers:["a person who pleads for a cause or propounds an idea"]},{question:"Mar",answers:["a mark or flaw that spoils the appearance of something (especially on a person's body)"]},{question:"Comply",answers:["act in accordance with someone's rules, commands, or wishes"]},{question:"Censure",answers:["harsh criticism or disapproval"]},{question:"Deference",answers:["a disposition or tendency to yield to the will of others"]},{question:"Facilitate",answers:["make easier"]},{question:"Recalcitrant",answers:["marked by stubborn resistance to authority"]}]},{name:"Twelfth Grade Vocabulary Trivia",data:[{question:"Peruse",answers:["reading with careful attention"]},{question:"Guru",answers:["religious teacher"]},{question:"Hegemony",answers:["one country/group has leadership over another"]},{question:"Jovial",answers:["happy, cheery"]},{question:"Enervate",answers:["to weaken, or to take energy from"]},{question:"Impetuous",answers:["characterized by undue haste and lack of thought or deliberation"]},{question:"Conundrum",answers:["a difficult problem"]},{question:"Benevolent",answers:["showing or motivated by sympathy and understanding and generosity"]},{question:"Loquacious",answers:["talkative, chatty"]},{question:"Evanescent",answers:["tending to vanish like vapor"]},{question:"Antithesis",answers:["the direct opposite or contrast to a previously given assertion"]},{question:"Fortuitous",answers:["occurring by happy chance"]},{question:"Brazen",answers:["unrestrained by convention or propriety"]},{question:"Deleterious",answers:["harmful to living things"]},{question:"Chicanery",answers:["deceiving someone, scam"]},{question:"Sensuous",answers:["all senses, dealing w/ all senses"]}]},{name:"Tenth Grade Vocabulary Trivia",data:[{question:"Gregarious",answers:["seeking and enjoying the company of others"]},{question:"Injunction",answers:["a formal command or admonition"]},{question:"Malevolent",answers:["wishing or appearing to wish evil to others"]},{question:"Phonetic",answers:["related to the sounds in a language"]},{question:"Malicious",answers:["wishing evil or harm upon others"]},{question:"Junction",answers:["an act of joining or adjoining things"]},{question:"Dialogue",answers:["a conversation between two persons"]},{question:"Segregate",answers:["separating into different groups"]},{question:"Congregate",answers:["To come together in a group, assemble."]},{question:"Soliloquy",answers:["the act of talking to oneself or a dramatic monologue"]},{question:"Eloquent",answers:["expressing yourself readily, clearly, effectively"]},{question:"Adjunct",answers:["something attached to but holding an inferior position"]},{question:"Juncture",answers:["a joining together; the point at which two things are joined; any important point in time"]},{question:"Malcontent",answers:["person dissatisfied with existing state of affairs"]},{question:"Malady",answers:["a sickness, illness, disease, disorder"]}]},{name:"Texas Facts Trivia",data:[{question:"Which Texan city is considered the live music capital of the world?",answers:["Austin"]},{question:"Texas comes from the Caddo word Tejas, which means what?",answers:["Friends or Allies"]},{question:"What is the largest city in Texas population wise?",answers:["Houston"]},{question:"What is the Texas state flower?",answers:["Bluebonnet"]},{question:"Remember the _____.",answers:["Alamo"]},{question:"What is the state bird of Texas?",answers:["Mockingbird"]},{question:"What natural resource gave Texas a large economic boom?",answers:["Oil"]},{question:"What is the capital of Texas?",answers:["Austin"]},{question:"How many cattle are estimated to exist in Texas?",answers:["16 million"]},{question:"What is the only US State with a larger land mass than Texas?",answers:["Alaska"]},{question:"Which popular soft drink originated in Texas?",answers:["Dr Pepper"]},{question:"What large body of water is off the Texas coast?",answers:["Gulf of Mexico"]},{question:"Texas is called the ______ state.",answers:["Lone Star"]},{question:"Texas has the country's largest herd of what kind of animal?",answers:["Whitetail Deer"]},{question:"Which US president was born in Texas?",answers:["Dwight D Eisenhower"]},{question:"What is the only US state with a larger population than Texas?",answers:["California"]},{question:"What is the state plant?",answers:["Prickly Pear Cactus"]},{question:"What is the state dish of Texas?",answers:["Chili"]}]},{name:"Horse Trivia",data:[{question:"Which breed is the fastest horse in the world over short distances?",answers:["American Quarter Horse"]},{question:"Which famous race horse most recently won the Triple Crown?",answers:["Affirmed"]},{question:"Which is a part that both english and western saddles have?",answers:["Cantle"]},{question:"In this equestrian sport the horse is judged on its jumping style and manners:",answers:["Hunters"]},{question:"This American breed is known for its high stepping gaits and showy style.",answers:["American Saddlebred"]},{question:"A hand is how many inches?",answers:["Four"]},{question:"This equestrian sport the horse is judged on its movement and manners in western tack:",answers:["Western Pleasure"]},{question:"Which of the following is not a recognized horse color?",answers:["Red"]},{question:"This special show jumping class is when a horse and rider jump as high as possible over a brick wall.",answers:["Puissance"]},{question:"Which of the following is not a type of Appaloosa color pattern?",answers:["Confetti"]},{question:"What is the oldest breed of horse?",answers:["Arabian"]},{question:"This popular breed is extremely versatile and especially good at endurance racing:",answers:["Arabian"]},{question:"A pony is any equine _____ hands high or below.",answers:["14.2"]},{question:"Which breed of horse performs at the Spanish riding school in Vienna?",answers:["Lipizzaner"]},{question:"Which of the following is not an Olympic equestrian sport?",answers:["Vaulting"]},{question:"How many beats are in the canter?",answers:["Three"]},{question:"When a horse limps, it's called _______.",answers:["Lame"]},{question:"What is the world's smallest breed of horse?",answers:["Falabella"]},{question:"This western sport includes a pattern of galloping, spins, and sliding stops.",answers:["Reining"]},{question:"Which type of horse is popular in high level Dressage competitions?",answers:["Warmbloods"]}]},{name:"Basketball Trivia",data:[{question:"What is the special shot called that is awarded to a player who has been fouled?",answers:["Free Throw"]},{question:"How many players per team can be on the basketball court at one time?",answers:["Five"]},{question:"How many quarters are in a single game of basketball?",answers:["Four"]},{question:"March Madness refers to which basketball tournament?",answers:["NCAA"]},{question:"As of 2014, how many teams are in the NBA?",answers:["30"]},{question:"In what country was basketball founded?",answers:["America"]},{question:"How many points is a field goal outside the three-point line?",answers:["Three"]},{question:"The original hoops were _____________.",answers:["Peach Baskets"]},{question:"What color were the first basketballs made in?",answers:["Brown"]},{question:"How many points is a free throw worth?",answers:["One"]},{question:"How long is each quarter of a basketball game?",answers:["12 Minutes"]},{question:"How tall is a basketball hoop?",answers:["10'"]},{question:"Most basketball courts have ________ flooring.",answers:["Wood"]},{question:"Unsportsmanlike conduct can result in a _____________.",answers:["Technical Foul"]},{question:"What is the diameter of a basketball hoop?",answers:['18"']},{question:"It is illegal to _______ the ball, or move without bouncing it.",answers:["Carry"]},{question:"How many points is a regular field goal?",answers:["Two"]},{question:"When did professional basketball teams start organizing?",answers:["1920s"]},{question:"What year was the NBA formed?",answers:["1949"]},{question:"Basketball was originally created by a gym teacher because ___________.",answers:["It was raining outside"]}]},{name:"Solar System Trivia",data:[{question:"What is the correct term for Pluto?",answers:["Dwarf Planet"]},{question:"Mars is known as the _____ planet.",answers:["Red"]},{question:"Jupiter has a ________ in its atmosphere but no solid surface.",answers:["Hurricane"]},{question:"What are comets made of?",answers:["Dirty Ice"]},{question:"Which is the smallest planet in the solar system?",answers:["Mercury"]},{question:"What man-made objects exist in our solar system?",answers:["Satellites & Space Junk"]},{question:"Saturn is famous for its ________ that rotate around it.",answers:["Rings"]},{question:"What separates the inner and outer solar system?",answers:["Band of asteroids"]},{question:"Uranus has a _______ glow to it.",answers:["Blue"]},{question:"Which planet is closest to the sun?",answers:["Mercury"]},{question:"Venus' atmosphere is primarily made up of what gas?",answers:["Carbon Dioxide"]},{question:`Which two planets are Earth's "neighbors"?`,answers:["Venus & Mars"]},{question:"What is the largest planet in the solar system?",answers:["Jupiter"]},{question:"Every object in our solar system revolves around the _______.",answers:["Sun"]},{question:"Which planet is furthest from the sun?",answers:["Neptune"]},{question:"How many planets are in our solar system?",answers:["Eight"]}]},{name:"Norse Mythology Trivia",data:[{question:'Who was the god of war and the "All Father"?',answers:["Odin"]},{question:"Who was the first Norse god?",answers:["Buri"]},{question:"Who was Odin's father?",answers:["Borr"]},{question:"Who was the goddess of healing?",answers:["Eir"]},{question:"Who was the god of poetry, music and the harp?",answers:["Bragi"]},{question:"Who was the goddess of the sea?",answers:["Ran"]},{question:"Baldr was the god of what?",answers:["Beauty, innocence, peace and rebirth"]},{question:"Who was the goddess of wisdom?",answers:["Vor"]},{question:"Who was the god of the daytime?",answers:["Dagr"]},{question:"Who was the god of thunder and battle?",answers:["Thor"]},{question:"Who was the wife of Thor and goddess of the harvest?",answers:["Sif"]},{question:"Who was the goddess of old age?",answers:["Elli"]},{question:"Who was the goddess of night?",answers:["Nott"]},{question:"Who was the goddess of spring?",answers:["Eostre"]},{question:"Who was the goddess of marriage and motherhood?",answers:["Frigg"]},{question:"Who was the god of mischief?",answers:["Loki"]},{question:"Who was the god of inspiration?",answers:["Kvasir"]},{question:"Who was the goddess of the sun?",answers:["Sol"]},{question:"Who was the god of dawn?",answers:["Delling"]},{question:"Who was the god of revenge?",answers:["Vali"]},{question:"Who was the goddess of joy and peace?",answers:["Nanna"]},{question:"Norse Mythology is the mythology from what group of people?",answers:["North Germanic"]},{question:"Who was the goddess of prudence?",answers:["Snotra"]},{question:"Who was the goddess of consolation and protection?",answers:["Hlin"]},{question:"Who was the god of strength and son of Thor?",answers:["Magni"]},{question:"Who was the god of skiing, winter, hunting and dueling?",answers:["Ullr"]},{question:"Who was the god of justice, peace and truth?",answers:["Forseti"]},{question:"Who was the goddess of fertility and plough?",answers:["Gefjun"]}]},{name:"Weather Trivia",data:[{question:"What is a tornado called before it hits the ground?",answers:["Funnel Cloud"]},{question:"Where do tornadoes come from?",answers:["Thunderstorms"]},{question:"What is the name of the strong radar that helps predict weather?",answers:["Doppler"]},{question:"In which two seasons are thunderstorms most likely to occur?",answers:["Winter & Spring"]},{question:"A waterspout is actually a weak ______ that forms over water.",answers:["Tornado"]},{question:"What type of cloud is between 6,500 feet to 18,000 feet in the atmosphere?",answers:["Alto"]},{question:"What is a monsoon?",answers:["Seasonal wind that often brings rain"]},{question:"What type of cloud usually looks white and puffy?",answers:["Cumulus"]},{question:"What does a Tornado Watch mean?",answers:["Tornadoes are possible in your area."]},{question:"What causes the electric current that result in lightning?",answers:["Ice particles bumping into each other"]},{question:"Which of the following is NOT needed to cause a blizzard?",answers:["Rotating storm clouds"]},{question:"What is sleet?",answers:["Rain that freezes into ice before it hits ground"]},{question:"The ______ is the center of a hurricane and also the calmest part of the storm.",answers:["Eye"]},{question:"Which of the following is not a characteristic of a hurricane?",answers:["Forms over mountains"]},{question:'Which of these states are not in "Tornado Alley"?',answers:["North Carolina"]},{question:"What type of cloud is above 18,000 feet in the atmosphere?",answers:["Cirrus"]},{question:"What type of cloud is below 6,500 feet in the atmosphere?",answers:["Stratus"]},{question:"How fast do raindrops fall?",answers:["7-18 miles per hour"]},{question:"How is snow formed?",answers:["Water vapor changes directly to ice high in the atmosphere"]},{question:"Tornadoes are rated on what kind of scale?",answers:["F Scale"]}]},{name:"Famous Poets",data:[{question:'Who wrote "A Dream Within A Dream"?',answers:["Edgar Allan Poe"]},{question:'Who wrote "The Road Not Taken"?',answers:["Robert Frost"]},{question:'Who wrote "Stopping by the Woods on a Snowy Evening"?',answers:["Robert Frost"]},{question:'Who wrote "Funeral Blues"?',answers:["W.H. Auden"]},{question:'Who wrote "Do Not Go Gentle To That Good Night"?',answers:["Dylan Thomas"]},{question:'Who wrote "If those I loved were lost"?',answers:["Emily Dickinson"]},{question:'Who wrote "Messy Room"?',answers:["Shel Silverstein"]},{question:'Who wrote "Where the Sidewalk Ends"?',answers:["Shel Silverstein"]},{question:'Who wrote "To You"?',answers:["Walt Whitman"]},{question:'Who wrote "Phenomenal Woman"?',answers:["Maya Angelou"]},{question:'Who Wrote "If You Forget Me"?',answers:["Pablo Neruda"]},{question:'Who wrote "A Girl"?',answers:["Ezra Pound"]},{question:'Who wrote "There is Another Sky"?',answers:["Emily Dickinson"]},{question:'Who Wrote "Let America Be America Again"?',answers:["Langston Hughes"]},{question:'Who wrote "Life is Fine"?',answers:["Langston Hughes"]},{question:'Who Wrote "I Carry Your Heart With Me"?',answers:["E.E. Cummings"]}]},{name:"State Nicknames Trivia",data:[{question:'Which state is known as the "Constitution State?"',answers:["Connecticut"]},{question:'Which state is known as the "Ocean State?"',answers:["Rhode Island"]},{question:'Which state is known as the "Garden State?"',answers:["New Jersey"]},{question:'Which state is known as the "Volunteer State?"',answers:["Tennessee"]},{question:'Which state is known as the "Silver State?"',answers:["Nevada"]},{question:'Which state is known as the "Evergreen State?"',answers:["Washington"]},{question:'Which state is known as the "Great Lakes State?"',answers:["Michigan"]},{question:'Which state is known as the "Aloha State?"',answers:["Hawaii"]},{question:'Which state is known as the "First State?"',answers:["Delaware"]},{question:'Which state is known as the "Magnolia State?"',answers:["Mississippi"]},{question:'Which state is known as the "Prairie State?"',answers:["Illinois"]},{question:'Which state is known as the "Bluegrass State?"',answers:["Kentucky"]},{question:'Which state is known as the "Pelican State?"',answers:["Louisiana"]},{question:'Which state is known as the "Pine Tree State?"',answers:["Maine"]},{question:'Which state is known as the "Empire State?"',answers:["New York"]},{question:'Which state is known as the "Lone Star State?"',answers:["Texas"]},{question:'Which state is known as the "Golden State?"',answers:["California"]},{question:'Which state is known as the "Beaver State?"',answers:["Oregon"]},{question:'Which state is known as the "Sunflower State?"',answers:["Kansas"]},{question:'Which state is known as the "Beehive State?"',answers:["Utah"]}]},{name:"English Punctuation Trivia",data:[{question:"Three periods in a row are called _________.",answers:["Ellipses"]},{question:"A semi-colon is primarily used to:",answers:["Join two connected sentences"]},{question:"Where does the period go in a sentence?",answers:["At the end"]},{question:"Which of the following is NOT a reason to use an exclamation mark (!) ?",answers:["Boredom"]},{question:"Which sentence uses a semi-colon correctly?",answers:["I set out on a quest; the enemies looked fierce."]},{question:"Which sentence below uses a comma(s) correctly?",answers:["Megan, who lives next door loves dogs."]},{question:"Quotation marks are used to do what?",answers:["Show speech"]},{question:"Which sentence correctly uses an apostrophe?",answers:["I cant do it, because it is too hard.","The horse's tail is so pretty."]},{question:"What is the apostrophe's main function?",answers:["Show ownership or posession"]},{question:"Which sentence uses quotation marks correctly?",answers:[`Sally said, "It's time to cook dinner."`]},{question:"An exclamation mark is often used to express what?",answers:["Excitement"]},{question:"Which sentence below uses a comma correctly?",answers:["I love to play video games, but they are hard.","Before you begin, let us learn to play."]},{question:"A period is also used to __________ words.",answers:["Abbreviate"]},{question:"Which date below uses a comma correctly?",answers:["January 1st, 2014"]}]},{name:"Big Cats Trivia",data:[{question:"Which big cat is in the genus Uncia?",answers:["Snow Leopard"]},{question:"Which big cat is not in the genus Panthera?",answers:["Cheetah"]},{question:"Which big cat is in the genus Acinonyx?",answers:["Cheetah"]},{question:"Which of these lions are recently extinct?",answers:["Barbary Lion"]},{question:"One common way to determine what is considered a big cat, is a feline that can ________.",answers:["Roar"]},{question:"Which is the best climber of all the big cats?",answers:["Leopard"]},{question:"A cheetah can run up to speeds of ____ miles an hour.",answers:["70"]},{question:"Which of these big cats purrs instead of roars?",answers:["Cheetah"]},{question:"Which type of tiger is extinct?",answers:["Caspian Tiger"]},{question:"Which is the only big cat that lives in groups?",answers:["Lion"]},{question:"How far can a lion's roar be heard from?",answers:["5 miles"]},{question:"Which is the most endangered big cat?",answers:["Amur Leopard"]},{question:"Tigers are often poached for their parts, used in traditional _________ medicine.",answers:["Chinese"]},{question:"Which of the following is not a criteria for an accredited US Fish & Wildlife Service animal sanctuary?",answers:["Must provide enrichment activities for big cats"]},{question:"Which of the following is not considered a big cat?",answers:["Bobcat"]},{question:"The main threats to big cats are ___________.",answers:["poaching and habitat destruction"]},{question:"Big cats are ________.",answers:["Carnivores"]},{question:"Which of these big cats is an excellent swimmer who loves water?",answers:["Tiger"]},{question:"Which big cat is in the genus Puma?",answers:["Cougar"]},{question:'Which big cat is named from the Native American word meaning "he who kills with one leap"?',answers:["Jaguar"]}]},{name:"Ancient Egypt Trivia",data:[{question:"How many pyramids have been discovered in Egypt so far?",answers:["Over 130"]},{question:"What type of animal did Ancient Egyptians not typically keep as a pet?",answers:["Hippo"]},{question:"What did Ancient Egyptians believe made the Nile River overflow every year?",answers:["The tears of Isis"]},{question:"What is the largest pyramid in Egypt?",answers:["Pyramid of Khufu"]},{question:"What is the name of the most popular board game developed by Ancient Egyptians?",answers:["Senet"]},{question:"Which of these animals was considered sacred by Ancient Egyptians?",answers:["Cat"]},{question:"The Egyptian alphabet consisted of more than ______ hieroglyphs.",answers:["700"]},{question:"Which is not considered a phase of the Ancient Egyptian society?",answers:["Glorious Kingdom"]},{question:"When did the Ancient Egyptian Empire begin to weaken?",answers:["700 BC"]},{question:"Which of the following was <b>not</b> invented by the Ancient Egyptians?",answers:["Horse saddles"]},{question:"Who is considered to be the most important Egyptian god?",answers:["Ra"]},{question:"Because they believed in ________, ancient Egyptians mummified bodies.",answers:["the afterlife"]},{question:"Roughly how many different deities did the Ancient Egyptians believe in?",answers:["More than 2,000"]},{question:"The famous Great Sphinx is missing what part?",answers:["Nose"]},{question:"Which empire was the first to conquer the Ancient Egyptians?",answers:["Assyrian Empire"]},{question:"Which of the following was a calendar not followed by the Ancient Egyptians?",answers:["Animal Calendar"]},{question:"The Ancient Egyptians were the first civilization to invent __________.",answers:["Writing"]},{question:"Who is considered to be the first Pharaoh of Egypt?",answers:["King Menes"]},{question:"A Pharaoh never let his ______ be seen.",answers:["Hair"]},{question:"Which of the following was not invented by the Ancient Egyptians?",answers:["Horse saddles"]}]},{name:"Wizard101 Spellbinding Trivia",data:[{question:'Who tells you to speak these words only unto your mentor: "Meena Korio Jajuka!"',answers:["Priya the Dryad"]},{question:"Who grants the first Shadow Magic spell?",answers:["Sophia DarkSide"]},{question:'Who taunts you with: "Prepare to be broken, kid!"',answers:["Clanker"]},{question:"Morganthe got the Horned Crown from the Spriggan:",answers:["Gisela"]},{question:"Who needs the healing potion from Master Yip?",answers:["Binh Hoa"]},{question:"Who is Haraku Yip's apprentice?",answers:["Binh Hoa"]},{question:"What does Silenus name you once you've defeated Hades?",answers:["Glorious Golden Archon"]},{question:'Who tells you: "A shield is just as much a weapon as the sword."',answers:["Mavra Flamewing"]},{question:"Who taunts: Why I oughta knock you to the moon, you pesky little creep!",answers:["Mugsy"]},{question:"Sumner Fieldgold twice asks you to recover what for him?",answers:["Shrubberies "]},{question:"What special plant was Barley developing in his Garden?",answers:["Cultivated Woodsmen"]},{question:"Who tries to raise a Gorgon Army?",answers:["Phorcys"]},{question:"What badge do you earn by defeating 100 Samoorai?",answers:["Yojimbo"]},{question:"Where has Pharenor been imprisoned?",answers:["Skythorn Tower"]},{question:"Who makes the harpsicord for Shelus?",answers:["Gretta Darkkettle"]},{question:'Who taunts you with: "Wizard, you will know the meaning of the word pain after we battle!"',answers:["Aiuchi"]},{question:"In Azteca, Morganthe enlisted the help of the:",answers:["The Black Sun Necromancers"]},{question:"Who thinks you are there to take their precious feathers?",answers:["Takeda Kanryu"]},{question:"The Swallows of Caliburn migrate to Avalon from where each year?",answers:["Zafaria and Marleybone"]},{question:"Who helps Morganthe find the Horn of Huracan?",answers:["Belloq"]}]},{name:"Soccer Trivia",data:[{question:"What is the circumference of an official soccer ball?",answers:["28 in"]},{question:"What is the international football (soccer) body called?",answers:["FIFA"]},{question:"What is the common name for soccer in Europe?",answers:["Football"]},{question:"What is the minimum number of players that can play on one soccer team?",answers:["Seven"]},{question:"How often does the FIFA World Cup take place?",answers:["Every Four Years"]},{question:"A _______ card dismisses a player from the game.",answers:["Red"]},{question:"Which of the following is not a field position in soccer?",answers:["Kicker"]},{question:'In what country did the name "soccer" instead of football originate?',answers:["England"]},{question:"What colors are a typical soccer ball?",answers:["Black and White"]},{question:"A _______ card cautions a player and marks a foul.",answers:["Yellow"]},{question:"When was The Footbal Association founded?",answers:["1863"]},{question:"Which is the only position where a player can use their hands?",answers:["Goalkeeper"]},{question:"What are the only parts of the body you can't use when playing soccer?",answers:["Hands and Arms"]},{question:"What is the main protective gear worn by soccer players?",answers:["Shin Guards"]},{question:"What is the major world soccer competition that takes place every four years?",answers:["FIFA World Cup"]},{question:"One of the earliest versions of soccer was recorded by this ancient civilization?",answers:["Greek"]},{question:'Which countries primarily use the word "soccer" to describe association football?',answers:["US & Canada"]},{question:"How many players are on a soccer team?",answers:["11"]},{question:"How long is a half of a soccer game?",answers:["Forty Five Minutes"]},{question:"Which college wrote early fundamental and influental rules for soccer?",answers:["Cambridge"]}]}];class Ht{constructor(t,n,s){this.answer=t,this.checkbox=n,this.parentElement=s}}const N=class N{constructor(){f(this,"title");f(this,"question");f(this,"answers",[]);f(this,"nextButton");const t=document.querySelector("h1"),n=t==null?void 0:t.textContent;b(n,"Quiz title not found"),this.title=I(n);const s=document.querySelector(".quizQuestion"),o=s==null?void 0:s.textContent;b(o,"Quiz question not found"),this.question=I(o),document.querySelectorAll(".answer").forEach(r=>{const l=r.querySelector(".answerText");b(l,"Answer text not found");const d=l.textContent;b(d,"Answer text not found");const c=r.querySelector("a");this.answers.push(new Ht(I(d),c,r))});const a=document.querySelector("#nextQuestion");b(a,"Next button not found"),this.nextButton=a}getCorrectAnswerBox(){if(N.correctAnswerBox)return N.correctAnswerBox;const t=Dt.find(s=>this.title.includes(I(s.name)));b(t,"Quiz title not found in answers!");const n=t.data.find(s=>this.question.includes(I(s.question)));b(n,"Quiz question not found in answers!");for(const s of this.answers)for(const o of n.answers)if(s.answer===I(o)){N.correctAnswerBox=s;break}if(!N.correctAnswerBox)throw Ve(),new Error("Correct answer not found!");return N.correctAnswerBox}next(){this.nextButton.click()}};f(N,"correctAnswerBox");let ve=N;const _e=new H(Number,"triviaCount"),ke=new H(Number,"questionCount");function Gt(){const e=new ve;ke.set(n=>n+1);const t=e.getCorrectAnswerBox();M(async()=>{t.parentElement.querySelectorAll("span").forEach(n=>{if(S("quiz","highlightCorrectAnswer")()){n.style.backgroundColor="#28a745";return}n.style.backgroundColor="transparent"});try{const n=document.querySelector(".quizQuestion");b(n);const s=`
Correct answer: ${t.answer}`;S("quiz","displayCorrectAnswer")()?n.innerText+=s:n.innerText=n.innerText.replace(s,"")}catch{}!S("login","continueWithoutLogin")()&&!z.getLoggedIn()||(await Ft(t,e.answers),await j(te(L.second,L.second*5)),S("quiz","pressNextButton")()&&e.next())})}let Vt={data:""},Rt=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Vt,Ut=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Kt=/\/\*[^]*?\*\/|  +/g,Qe=/\n+/g,O=(e,t)=>{let n="",s="",o="";for(let i in e){let a=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+a+";":s+=i[1]=="f"?O(a,i):i+"{"+O(a,i[1]=="k"?"":t)+"}":typeof a=="object"?s+=O(a,t?t.replace(/([^,])+/g,r=>i.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,r):r?r+" "+l:l)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=O.p?O.p(i,a):i+":"+a+";")}return n+(t&&o?t+"{"+o+"}":o)+s},P={},Je=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Je(e[n]);return t}return e},Yt=(e,t,n,s,o)=>{let i=Je(e),a=P[i]||(P[i]=(l=>{let d=0,c=11;for(;d<l.length;)c=101*c+l.charCodeAt(d++)>>>0;return"go"+c})(i));if(!P[a]){let l=i!==e?e:(d=>{let c,u,g=[{}];for(;c=Ut.exec(d.replace(Kt,""));)c[4]?g.shift():c[3]?(u=c[3].replace(Qe," ").trim(),g.unshift(g[0][u]=g[0][u]||{})):g[0][c[1]]=c[2].replace(Qe," ").trim();return g[0]})(e);P[a]=O(o?{["@keyframes "+a]:l}:l,n?"":"."+a)}let r=n&&P.g?P.g:null;return n&&(P.g=P[a]),((l,d,c,u)=>{u?d.data=d.data.replace(u,l):d.data.indexOf(l)===-1&&(d.data=c?l+d.data:d.data+l)})(P[a],t,s,r),a},Qt=(e,t,n)=>e.reduce((s,o,i)=>{let a=t[i];if(a&&a.call){let r=a(n),l=r&&r.props&&r.props.className||/^go/.test(r)&&r;a=l?"."+l:r&&typeof r=="object"?r.props?"":O(r,""):r===!1?"":r}return s+o+(a??"")},"");function ne(e){let t=this||{},n=e.call?e(t.p):e;return Yt(n.unshift?n.raw?Qt(n,[].slice.call(arguments,1),t.p):n.reduce((s,o)=>Object.assign(s,o&&o.call?o(t.p):o),{}):n,Rt(t.target),t.g,t.o,t.k)}ne.bind({g:1}),ne.bind({k:1});const Jt=tt();function Xt(e){let t=this||{};return(...n)=>{const s=o=>{const i=nt(Jt),a=he(o,{theme:i}),r=he(a,{get class(){const F=a.class,Ce="class"in a&&/^go[0-9]+/.test(F);let Rn=ne.apply({target:t.target,o:Ce,p:a,g:t.g},n);return[F,Rn].filter(Boolean).join(" ")}}),[l,d]=ze(r,["as","theme"]),c=d,u=l.as||e;let g;return typeof u=="function"?g=u(c):t.g==1?(g=document.createElement(u),je(g,c)):g=Et(he({component:u},c)),g};return s.class=o=>E(()=>ne.apply({target:t.target,p:o,g:t.g},n)),s}}const q=new Proxy(Xt,{get(e,t){return e(t)}}),Zt=q.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-item {
    width: 113px;
  }

  .field {
    padding-left: 3px;
  }
`;var en=p("<span>"),tn=p('<div><input class="override width100">');const nn=q.div`
  * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
`,xe=e=>{const[t,n]=Y(!1),s=()=>{n(!0)},o=()=>{n(!1)},i=()=>t()?"wizardButtonInputHover":"wizardButtonInput";return h(nn,{get class(){return`${i()} ${e.class??""}`},onFocus:s,onBlur:o,onMouseOver:s,onMouseOut:o,onClick:r=>{var l;r.preventDefault(),(l=e.onClick)==null||l.call(e)},tabIndex:0,role:"button",get children(){return[en(),(()=>{var r=tn(),l=r.firstChild;return v(()=>x(l,"type",e.type??"submit")),v(()=>l.value=e.value),r})()]}})};var sn=p('<input class="username field form-item"type=text name=username placeholder=Username>'),on=p('<input class="password field form-item"type=password name=password placeholder=Password>');const rn=()=>{const e=n=>{n.preventDefault();const s=new FormData(n.target),o=s.get("username"),i=s.get("password");z.useCredentials(o,i)},t=()=>{z.clearCredentials()};return h(Zt,{onSubmit:e,get children(){return[sn(),on(),h(xe,{value:"Use Credentials",class:"form-item"}),h(xe,{value:"Clear Credentials",type:"button",onClick:t,class:"form-item"})]}})},an=q.span`
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
`,ln=e=>h(an,{get class(){return e.class},get style(){return{visibility:e.visible?"visible":"hidden"}}}),cn=q("div")`
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
`;var un=p('<div class=content-wrapper role=button><div class=content><div class=left><div class=scroll></div></div><div class=center><div class="text text-content"></div></div><div class=right><div class=scroll>');const Se=e=>h(cn,{get class(){return e.class??""},get children(){var t=un(),n=t.firstChild,s=n.firstChild,o=s.nextSibling,i=o.firstChild;return we(t,"focus",e.onClick),we(t,"click",e.onClick,!0),_(i,()=>e.content),t}});ge(["click"]);var hn=p("<div class=container-wrapper><div class=container>"),dn=p("<div><div class=container>");const Xe=q("div")`
  margin-top: 5px;
  position: relative;

  .container-wrapper {
    margin: 0 10px 7px 25px;

    .container {
      min-width: 121px;
    }
  }
`,We=e=>{if(!e.foldable)return h(Xe,{get class(){return e.class},get children(){return[h(Se,{get content(){return e.titleContent},get class(){return e.titleClass}}),(()=>{var s=hn(),o=s.firstChild;return _(o,()=>e.children),s})()]}});const t=new H(Boolean,e.foldable.localStorageKey,e.foldable.defaultFolded??!1),n=()=>{var s,o;console.log("onFold",t.get()),t.set(i=>!i),(o=(s=e.foldable).onFold)==null||o.call(s)};return h(Xe,{get class(){return e.class},get children(){return[h(Se,{onClick:n,get content(){return e.titleContent},get class(){return e.titleClass}}),h(de,{get when(){return!t.get()},get children(){var s=dn(),o=s.firstChild;return _(o,()=>e.children),v(()=>Ne(s,`container-wrapper ${t.get()?"":"folded"}`)),s}})]}})};var fn=p("<div class=modal><div class=top><div class=left></div><div class=center><div class=title></div><div class=content></div></div><div class=right></div></div><div class=bottom><div class=left><div class=corner><div class=corner-slope></div></div></div><div class=center></div><div class=right><div class=corner><div class=corner-slope>"),gn=p("<h1>");const wn=e=>{const t=q.div`
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
`;return h(t,{get onClick(){return e.onBackdropClick},get class(){return`${e.isOpen?"":"close"}`},id:"w101-trivia-bot-modal",get children(){var n=fn(),s=n.firstChild,o=s.firstChild,i=o.nextSibling,a=i.firstChild,r=a.nextSibling;return _(a,(()=>{var l=C(()=>!!e.title);return()=>l()&&(()=>{var d=gn();return _(d,()=>e.title),d})()})()),_(r,()=>e.children),n}})},mn=e=>{const t=Math.max(e.openTimeMs/2,100),n=q.div`
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
`;return h(n,{get class(){return e.isOpen?"":"close"}})},oe=class oe{constructor(){f(this,"backdropElmt");f(this,"modalElmt");this.backdropElmt=document.createElement("div"),this.backdropElmt.id="backdrop",this.modalElmt=document.createElement("div"),this.modalElmt.id="modal",document.body.appendChild(this.backdropElmt),document.body.appendChild(this.modalElmt)}static getInstance(){return this.instance||(this.instance=new oe),this.instance}};f(oe,"instance");let Ae=oe;const pn=(e,t)=>{const n=Ae.getInstance(),s=(t==null?void 0:t.openTimeMs)??300,o=new H(Boolean,"modalIsOpen"),[i,a]=Y(o.get());fe(()=>h(de,{get when(){return i()},get children(){return h(wn,{get title(){return t==null?void 0:t.title},onBackdropClick:l,get isOpen(){return o.get()},openTimeMs:s,get children(){return e(c)}})}}),n.modalElmt),fe(()=>h(de,{get when(){return i()},get children(){return h(mn,{get opacity(){return t==null?void 0:t.backdropOpacityPercent},get isOpen(){return o.get()},openTimeMs:s})}}),n.backdropElmt),M(()=>{if(i()){document.body.style.overflowY="hidden";return}document.body.style.overflowY="auto"});const r=u=>{o.get()&&u.key==="Escape"&&c()};addEventListener("keydown",r);function l(u){u.currentTarget===u.target&&c()}function d(){o.set(!0),a(!0)}function c(){o.set(!1),setTimeout(()=>{a(!1)},s)}return{openModal:d,closeModal:c}};var yn=p("<input>");const bn=q.div`
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
`,qn=e=>{const t=e.type??"checkbox",n=s=>{var a;const i=s.target.checked;(a=e.onCheck)==null||a.call(e,i)};return h(bn,{get class(){return e.class},get children(){var s=yn();return s.$$click=n,x(s,"type",t),v(()=>x(s,"id",e.id)),v(()=>s.checked=e.checked),s}})};ge(["click"]);const ie=class ie{static getId(){return`w101-trivia-bot-checkbox-${++ie.id}`}};f(ie,"id",0);let se=ie;var vn=p("<label>");const _n=q.div`
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
`,kn=e=>{const t=e.name?e.name:se.getId();return h(_n,{get class(){return e.class},get children(){return[h(qn,{id:t,class:"checkbox",get onCheck(){return e.onCheck},get checked(){return e.checked}}),(()=>{var n=vn();return x(n,"for",t),_(n,()=>e.title),n})()]}})},xn=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();var Sn=p("<input>"),Wn=p("<label>");const An=q.div`
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
`,Cn=e=>{const t=e.name?e.name:se.getId(),n=s=>{var o;(o=e.onChange)==null||o.call(e,s.target.value)};return h(An,{get class(){return e.class},get children(){return[(()=>{var s=Sn();return s.addEventListener("change",n),x(s,"id",t),v(o=>{var i=e.type??"text",a=e.placeholder;return i!==o.e&&x(s,"type",o.e=i),a!==o.t&&x(s,"placeholder",o.t=a),o},{e:void 0,t:void 0}),v(()=>s.value=e.value),s})(),(()=>{var s=Wn();return x(s,"for",t),_(s,()=>e.title),s})()]}})};var Tn=p("<h3>"),En=p("<span class=setting-group>");const Bn=q.div`
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
`,Pn=()=>h(Bn,{get children(){return be.map(e=>typeof e=="string"?(()=>{var t=Tn();return _(t,()=>e.split("_").map(n=>xn(n)).join(" ")),t})():(()=>{var t=En();return _(t,()=>e.map(n=>n.type==="string"?h(Cn,{get title(){return n.title},get value(){return n.get()},onChange:s=>n.set(s)}):h(kn,{get title(){return n.title},get checked(){return n.get()},onCheck:s=>n.set(s)}))),t})())}}),$n=()=>{const e=new H(String,"_grecaptcha",""),t=q.div`
    .clear-captcha input {
      color: ${()=>e.get().length!==0?"#dc3545":"#f5e2a8"};
    }
  `;return h(We,{titleContent:"Actions",foldable:{localStorageKey:"actions-panel"},get children(){return h(t,{get children(){return h(xe,{class:"clear-captcha",value:"Clear Captcha Storage",onClick:()=>e.set("")})}})}})};var Mn=p("<h2>Trivia Q # "),In=p("<h2>Trivia # ");const zn=()=>{const e=q.div`
    h2 {
      margin-left: 10px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  `;return h(e,{get children(){return h(We,{titleContent:"Trivia data",foldable:{localStorageKey:"trivia-data-panel"},get children(){return[(()=>{var t=Mn();return t.firstChild,_(t,()=>ke.get(),null),t})(),(()=>{var t=In();return t.firstChild,_(t,()=>_e.get(),null),t})()]}})}})};var Ln=p("<div>Auto Login");const Nn=q("div")`
  margin-left: 13px;
  margin-right: 13px;

  .logged-in .content {
    filter: hue-rotate(70deg) grayscale(25%);
  }
`,jn=q.div`
  display: grid;
  grid-template-columns: 1fr 20px;
`,On=()=>{const{openModal:e}=pn(()=>h(Pn,{}),{title:"Trivia Bot Settings",backdropOpacityPercent:50}),t=h(jn,{get children(){return[Ln(),h(ln,{get visible(){return z.getLoggedIn()}})]}});return h(Nn,{get children(){return[h(We,{titleContent:t,get titleClass(){return z.getLoggedIn()?"logged-in":""},get children(){return h(rn,{})}}),h(Se,{onClick:e,content:"Trivia Bot Settings"}),h($n,{}),h(zn,{})]}})},Fn=q("span")`
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
`,Dn=()=>h(Fn,{get children(){return h(On,{})}}),Hn=async()=>{ke.clearValue();const e=()=>te(L.second,L.second*2);await j(e());const t=document.querySelector(".kiaccountsbuttongreen");b(t,"Results button not found!"),t.click(),await j(e());const n=document.querySelector("#jPopFrame_content");b(n,"jPopFrame not found!");const s=n.contentWindow;b(s,"Content window not found!");const o=s.document.querySelector("#submit");b(o,"Submit button not found!"),_e.set(i=>i+1),o.click(),await j(L.second*2),M(()=>{S("others","attemptToPlaySounds")()&&pe.done.play()})},Gn=async()=>{_e.clearValue(),await j(L.minute),location.reload()};function Vn(){const e=document.querySelector("dl");b(e,"Could not find parent element");const t=document.querySelector("#subMenu1_lockOpen");b(t,"Could not find before element");const n=document.createElement("div");e.insertBefore(n,t.nextSibling),fe(()=>h(Dn,{}),n),M(()=>{if(!S("login","autoLogin")())return;z.getLoggedIn();const s=z.autoLogin();return()=>{s&&clearTimeout(s)}}),M(()=>{if(Pt(),ee.get==="searching"){Ot();return}if(ee.get==="quiz"){Gt();return}if(ee.get==="results"){Hn();return}ee.get==="end"&&Gn()})}Vn()});
