(function(N,I){typeof exports=="object"&&typeof module<"u"?I(require("yargs"),require("util"),require("path"),require("fs"),require("assert"),require("url"),require("@vue/compiler-sfc")):typeof define=="function"&&define.amd?define(["yargs","util","path","fs","assert","url","@vue/compiler-sfc"],I):(N=typeof globalThis<"u"?globalThis:N||self,I(N.yargs,N.util,N.path,N.fs,N.assert,N.url,N.compilerSfc))})(this,function(N,I,w,R,Ae,Ue,Ge){"use strict";var Oe=typeof document<"u"?document.currentScript:null;class D extends Error{constructor(t){super(t||"yargs error"),this.name="YError",Error.captureStackTrace&&Error.captureStackTrace(this,D)}}function we(){return De()?0:1}function De(){return Qe()&&!process.defaultApp}function Qe(){return!!process.versions.electron}function Ye(n){return n.slice(we()+1)}function Ve(){return process.argv[we()]}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */function Q(n){if(n!==n.toLowerCase()&&n!==n.toUpperCase()||(n=n.toLowerCase()),n.indexOf("-")===-1&&n.indexOf("_")===-1)return n;{let r="",c=!1;const l=n.match(/^-+/);for(let u=l?l[0].length:0;u<n.length;u++){let p=n.charAt(u);c&&(c=!1,p=p.toUpperCase()),u!==0&&(p==="-"||p==="_")?c=!0:p!=="-"&&p!=="_"&&(r+=p)}return r}}function $e(n,t){const r=n.toLowerCase();t=t||"-";let c="";for(let l=0;l<n.length;l++){const u=r.charAt(l),p=n.charAt(l);u!==p&&l>0?c+=`${t}${r.charAt(l)}`:c+=p}return c}function je(n){return n==null?!1:typeof n=="number"||/^0x[0-9a-f]+$/i.test(n)?!0:/^0[^.]/.test(n)?!1:/^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n)}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */function He(n){if(Array.isArray(n))return n.map(p=>typeof p!="string"?p+"":p);n=n.trim();let t=0,r=null,c=null,l=null;const u=[];for(let p=0;p<n.length;p++){if(r=c,c=n.charAt(p),c===" "&&!l){r!==" "&&t++;continue}c===l?l=null:(c==="'"||c==='"')&&!l&&(l=c),u[t]||(u[t]=""),u[t]+=c}return u}/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */var S;(function(n){n.BOOLEAN="boolean",n.STRING="string",n.NUMBER="number",n.ARRAY="array"})(S||(S={}));/**
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */let v;class Ke{constructor(t){v=t}parse(t,r){const c=Object.assign({alias:void 0,array:void 0,boolean:void 0,config:void 0,configObjects:void 0,configuration:void 0,coerce:void 0,count:void 0,default:void 0,envPrefix:void 0,narg:void 0,normalize:void 0,string:void 0,number:void 0,__:void 0,key:void 0},r),l=He(t),u=typeof t=="string",p=Je(Object.assign(Object.create(null),c.alias)),m=Object.assign({"boolean-negation":!0,"camel-case-expansion":!0,"combine-arrays":!1,"dot-notation":!0,"duplicate-arguments-array":!0,"flatten-duplicate-arrays":!0,"greedy-arrays":!0,"halt-at-non-option":!1,"nargs-eats-options":!1,"negation-prefix":"no-","parse-numbers":!0,"parse-positional-numbers":!0,"populate--":!1,"set-placeholder-key":!1,"short-option-groups":!0,"strip-aliased":!1,"strip-dashed":!1,"unknown-options-as-args":!1},c.configuration),E=Object.assign(Object.create(null),c.default),C=c.configObjects||[],_=c.envPrefix,T=m["populate--"],z=T?"--":"_",re=Object.create(null),Be=Object.create(null),q=c.__||v.format,a={aliases:Object.create(null),arrays:Object.create(null),bools:Object.create(null),strings:Object.create(null),numbers:Object.create(null),counts:Object.create(null),normalize:Object.create(null),configs:Object.create(null),nargs:Object.create(null),coercions:Object.create(null),keys:[]},W=/^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,be=new RegExp("^--"+m["negation-prefix"]+"(.+)");[].concat(c.array||[]).filter(Boolean).forEach(function(e){const i=typeof e=="object"?e.key:e,f=Object.keys(e).map(function(o){return{boolean:"bools",string:"strings",number:"numbers"}[o]}).filter(Boolean).pop();f&&(a[f][i]=!0),a.arrays[i]=!0,a.keys.push(i)}),[].concat(c.boolean||[]).filter(Boolean).forEach(function(e){a.bools[e]=!0,a.keys.push(e)}),[].concat(c.string||[]).filter(Boolean).forEach(function(e){a.strings[e]=!0,a.keys.push(e)}),[].concat(c.number||[]).filter(Boolean).forEach(function(e){a.numbers[e]=!0,a.keys.push(e)}),[].concat(c.count||[]).filter(Boolean).forEach(function(e){a.counts[e]=!0,a.keys.push(e)}),[].concat(c.normalize||[]).filter(Boolean).forEach(function(e){a.normalize[e]=!0,a.keys.push(e)}),typeof c.narg=="object"&&Object.entries(c.narg).forEach(([e,i])=>{typeof i=="number"&&(a.nargs[e]=i,a.keys.push(e))}),typeof c.coerce=="object"&&Object.entries(c.coerce).forEach(([e,i])=>{typeof i=="function"&&(a.coercions[e]=i,a.keys.push(e))}),typeof c.config<"u"&&(Array.isArray(c.config)||typeof c.config=="string"?[].concat(c.config).filter(Boolean).forEach(function(e){a.configs[e]=!0}):typeof c.config=="object"&&Object.entries(c.config).forEach(([e,i])=>{(typeof i=="boolean"||typeof i=="function")&&(a.configs[e]=i)})),It(c.key,p,c.default,a.arrays),Object.keys(E).forEach(function(e){(a.aliases[e]||[]).forEach(function(i){E[i]=E[e]})});let L=null;Gt();let oe=[];const A=Object.assign(Object.create(null),{_:[]}),Ie={};for(let e=0;e<l.length;e++){const i=l[e],f=i.replace(/^-{3,}/,"---");let o,s,d,h,g,O;if(i!=="--"&&/^-/.test(i)&&fe(i))ye(i);else if(f.match(/^---+(=|$)/)){ye(i);continue}else if(i.match(/^--.+=/)||!m["short-option-groups"]&&i.match(/^-.+=/))h=i.match(/^--?([^=]+)=([\s\S]*)$/),h!==null&&Array.isArray(h)&&h.length>=3&&(b(h[1],a.arrays)?e=ae(e,h[1],l,h[2]):b(h[1],a.nargs)!==!1?e=ce(e,h[1],l,h[2]):y(h[1],h[2],!0));else if(i.match(be)&&m["boolean-negation"])h=i.match(be),h!==null&&Array.isArray(h)&&h.length>=2&&(s=h[1],y(s,b(s,a.arrays)?[!1]:!1));else if(i.match(/^--.+/)||!m["short-option-groups"]&&i.match(/^-[^-]+/))h=i.match(/^--?(.+)/),h!==null&&Array.isArray(h)&&h.length>=2&&(s=h[1],b(s,a.arrays)?e=ae(e,s,l):b(s,a.nargs)!==!1?e=ce(e,s,l):(g=l[e+1],g!==void 0&&(!g.match(/^-/)||g.match(W))&&!b(s,a.bools)&&!b(s,a.counts)||/^(true|false)$/.test(g)?(y(s,g),e++):y(s,G(s))));else if(i.match(/^-.\..+=/))h=i.match(/^-([^=]+)=([\s\S]*)$/),h!==null&&Array.isArray(h)&&h.length>=3&&y(h[1],h[2]);else if(i.match(/^-.\..+/)&&!i.match(W))g=l[e+1],h=i.match(/^-(.\..+)/),h!==null&&Array.isArray(h)&&h.length>=2&&(s=h[1],g!==void 0&&!g.match(/^-/)&&!b(s,a.bools)&&!b(s,a.counts)?(y(s,g),e++):y(s,G(s)));else if(i.match(/^-[^-]+/)&&!i.match(W)){d=i.slice(1,-1).split(""),o=!1;for(let $=0;$<d.length;$++){if(g=i.slice($+2),d[$+1]&&d[$+1]==="="){O=i.slice($+3),s=d[$],b(s,a.arrays)?e=ae(e,s,l,O):b(s,a.nargs)!==!1?e=ce(e,s,l,O):y(s,O),o=!0;break}if(g==="-"){y(d[$],g);continue}if(/[A-Za-z]/.test(d[$])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(g)&&b(g,a.bools)===!1){y(d[$],g),o=!0;break}if(d[$+1]&&d[$+1].match(/\W/)){y(d[$],g),o=!0;break}else y(d[$],G(d[$]))}s=i.slice(-1)[0],!o&&s!=="-"&&(b(s,a.arrays)?e=ae(e,s,l):b(s,a.nargs)!==!1?e=ce(e,s,l):(g=l[e+1],g!==void 0&&(!/^(-|--)[^-]/.test(g)||g.match(W))&&!b(s,a.bools)&&!b(s,a.counts)||/^(true|false)$/.test(g)?(y(s,g),e++):y(s,G(s))))}else if(i.match(/^-[0-9]$/)&&i.match(W)&&b(i.slice(1),a.bools))s=i.slice(1),y(s,G(s));else if(i==="--"){oe=l.slice(e+1);break}else if(m["halt-at-non-option"]){oe=l.slice(e);break}else ye(i)}ze(A,!0),ze(A,!1),Wt(A),vt(),qe(A,a.aliases,E,!0),Tt(A),m["set-placeholder-key"]&&Bt(A),Object.keys(a.counts).forEach(function(e){te(A,e.split("."))||y(e,0)}),T&&oe.length&&(A[z]=[]),oe.forEach(function(e){A[z].push(e)}),m["camel-case-expansion"]&&m["strip-dashed"]&&Object.keys(A).filter(e=>e!=="--"&&e.includes("-")).forEach(e=>{delete A[e]}),m["strip-aliased"]&&[].concat(...Object.keys(p).map(e=>p[e])).forEach(e=>{m["camel-case-expansion"]&&e.includes("-")&&delete A[e.split(".").map(i=>Q(i)).join(".")],delete A[e]});function ye(e){const i=le("_",e);(typeof i=="string"||typeof i=="number")&&A._.push(i)}function ce(e,i,f,o){let s,d=b(i,a.nargs);if(d=typeof d!="number"||isNaN(d)?1:d,d===0)return B(o)||(L=Error(q("Argument unexpected for: %s",i))),y(i,G(i)),e;let h=B(o)?0:1;if(m["nargs-eats-options"])f.length-(e+1)+h<d&&(L=Error(q("Not enough arguments following: %s",i))),h=d;else{for(s=e+1;s<f.length&&(!f[s].match(/^-[^0-9]/)||f[s].match(W)||fe(f[s]));s++)h++;h<d&&(L=Error(q("Not enough arguments following: %s",i)))}let g=Math.min(h,d);for(!B(o)&&g>0&&(y(i,o),g--),s=e+1;s<g+e+1;s++)y(i,f[s]);return e+g}function ae(e,i,f,o){let s=[],d=o||f[e+1];const h=b(i,a.nargs);if(b(i,a.bools)&&!/^(true|false)$/.test(d))s.push(!0);else if(B(d)||B(o)&&/^-/.test(d)&&!W.test(d)&&!fe(d)){if(E[i]!==void 0){const g=E[i];s=Array.isArray(g)?g:[g]}}else{B(o)||s.push(Ee(i,o,!0));for(let g=e+1;g<f.length&&!(!m["greedy-arrays"]&&s.length>0||h&&typeof h=="number"&&s.length>=h||(d=f[g],/^-/.test(d)&&!W.test(d)&&!fe(d)));g++)e=g,s.push(Ee(i,d,u))}return typeof h=="number"&&(h&&s.length<h||isNaN(h)&&s.length===0)&&(L=Error(q("Not enough arguments following: %s",i))),y(i,s),e}function y(e,i,f=u){if(/-/.test(e)&&m["camel-case-expansion"]){const d=e.split(".").map(function(h){return Q(h)}).join(".");Pe(e,d)}const o=Ee(e,i,f),s=e.split(".");ne(A,s,o),a.aliases[e]&&a.aliases[e].forEach(function(d){const h=d.split(".");ne(A,h,o)}),s.length>1&&m["dot-notation"]&&(a.aliases[s[0]]||[]).forEach(function(d){let h=d.split(".");const g=[].concat(s);g.shift(),h=h.concat(g),(a.aliases[e]||[]).includes(h.join("."))||ne(A,h,o)}),b(e,a.normalize)&&!b(e,a.arrays)&&[e].concat(a.aliases[e]||[]).forEach(function(h){Object.defineProperty(Ie,h,{enumerable:!0,get(){return i},set(g){i=typeof g=="string"?v.normalize(g):g}})})}function Pe(e,i){a.aliases[e]&&a.aliases[e].length||(a.aliases[e]=[i],re[i]=!0),a.aliases[i]&&a.aliases[i].length||Pe(i,e)}function Ee(e,i,f){f&&(i=Xe(i)),(b(e,a.bools)||b(e,a.counts))&&typeof i=="string"&&(i=i==="true");let o=Array.isArray(i)?i.map(function(s){return le(e,s)}):le(e,i);return b(e,a.counts)&&(B(o)||typeof o=="boolean")&&(o=ue()),b(e,a.normalize)&&b(e,a.arrays)&&(Array.isArray(i)?o=i.map(s=>v.normalize(s)):o=v.normalize(i)),o}function le(e,i){return!m["parse-positional-numbers"]&&e==="_"||!b(e,a.strings)&&!b(e,a.bools)&&!Array.isArray(i)&&(je(i)&&m["parse-numbers"]&&Number.isSafeInteger(Math.floor(parseFloat(`${i}`)))||!B(i)&&b(e,a.numbers))&&(i=Number(i)),i}function Wt(e){const i=Object.create(null);qe(i,a.aliases,E),Object.keys(a.configs).forEach(function(f){const o=e[f]||i[f];if(o)try{let s=null;const d=v.resolve(v.cwd(),o),h=a.configs[f];if(typeof h=="function"){try{s=h(d)}catch(g){s=g}if(s instanceof Error){L=s;return}}else s=v.require(d);_e(s)}catch(s){s.name==="PermissionDenied"?L=s:e[f]&&(L=Error(q("Invalid JSON config file: %s",o)))}})}function _e(e,i){Object.keys(e).forEach(function(f){const o=e[f],s=i?i+"."+f:f;typeof o=="object"&&o!==null&&!Array.isArray(o)&&m["dot-notation"]?_e(o,s):(!te(A,s.split("."))||b(s,a.arrays)&&m["combine-arrays"])&&y(s,o)})}function vt(){typeof C<"u"&&C.forEach(function(e){_e(e)})}function ze(e,i){if(typeof _>"u")return;const f=typeof _=="string"?_:"",o=v.env();Object.keys(o).forEach(function(s){if(f===""||s.lastIndexOf(f,0)===0){const d=s.split("__").map(function(h,g){return g===0&&(h=h.substring(f.length)),Q(h)});(i&&a.configs[d.join(".")]||!i)&&!te(e,d)&&y(d.join("."),o[s])}})}function Tt(e){let i;const f=new Set;Object.keys(e).forEach(function(o){if(!f.has(o)&&(i=b(o,a.coercions),typeof i=="function"))try{const s=le(o,i(e[o]));[].concat(a.aliases[o]||[],o).forEach(d=>{f.add(d),e[d]=s})}catch(s){L=s}})}function Bt(e){return a.keys.forEach(i=>{~i.indexOf(".")||typeof e[i]>"u"&&(e[i]=void 0)}),e}function qe(e,i,f,o=!1){Object.keys(f).forEach(function(s){te(e,s.split("."))||(ne(e,s.split("."),f[s]),o&&(Be[s]=!0),(i[s]||[]).forEach(function(d){te(e,d.split("."))||ne(e,d.split("."),f[s])}))})}function te(e,i){let f=e;m["dot-notation"]||(i=[i.join(".")]),i.slice(0,-1).forEach(function(s){f=f[s]||{}});const o=i[i.length-1];return typeof f!="object"?!1:o in f}function ne(e,i,f){let o=e;m["dot-notation"]||(i=[i.join(".")]),i.slice(0,-1).forEach(function(O){O=xe(O),typeof o=="object"&&o[O]===void 0&&(o[O]={}),typeof o[O]!="object"||Array.isArray(o[O])?(Array.isArray(o[O])?o[O].push({}):o[O]=[o[O],{}],o=o[O][o[O].length-1]):o=o[O]});const s=xe(i[i.length-1]),d=b(i.join("."),a.arrays),h=Array.isArray(f);let g=m["duplicate-arguments-array"];!g&&b(s,a.nargs)&&(g=!0,(!B(o[s])&&a.nargs[s]===1||Array.isArray(o[s])&&o[s].length===a.nargs[s])&&(o[s]=void 0)),f===ue()?o[s]=ue(o[s]):Array.isArray(o[s])?g&&d&&h?o[s]=m["flatten-duplicate-arrays"]?o[s].concat(f):(Array.isArray(o[s][0])?o[s]:[o[s]]).concat([f]):!g&&!!d==!!h?o[s]=f:o[s]=o[s].concat([f]):o[s]===void 0&&d?o[s]=h?f:[f]:g&&!(o[s]===void 0||b(s,a.counts)||b(s,a.bools))?o[s]=[o[s],f]:o[s]=f}function It(...e){e.forEach(function(i){Object.keys(i||{}).forEach(function(f){a.aliases[f]||(a.aliases[f]=[].concat(p[f]||[]),a.aliases[f].concat(f).forEach(function(o){if(/-/.test(o)&&m["camel-case-expansion"]){const s=Q(o);s!==f&&a.aliases[f].indexOf(s)===-1&&(a.aliases[f].push(s),re[s]=!0)}}),a.aliases[f].concat(f).forEach(function(o){if(o.length>1&&/[A-Z]/.test(o)&&m["camel-case-expansion"]){const s=$e(o,"-");s!==f&&a.aliases[f].indexOf(s)===-1&&(a.aliases[f].push(s),re[s]=!0)}}),a.aliases[f].forEach(function(o){a.aliases[o]=[f].concat(a.aliases[f].filter(function(s){return o!==s}))}))})})}function b(e,i){const f=[].concat(a.aliases[e]||[],e),o=Object.keys(i),s=f.find(d=>o.includes(d));return s?i[s]:!1}function Me(e){const i=Object.keys(a);return[].concat(i.map(o=>a[o])).some(function(o){return Array.isArray(o)?o.includes(e):o[e]})}function Pt(e,...i){return[].concat(...i).some(function(o){const s=e.match(o);return s&&Me(s[1])})}function zt(e){if(e.match(W)||!e.match(/^-[^-]+/))return!1;let i=!0,f;const o=e.slice(1).split("");for(let s=0;s<o.length;s++){if(f=e.slice(s+2),!Me(o[s])){i=!1;break}if(o[s+1]&&o[s+1]==="="||f==="-"||/[A-Za-z]/.test(o[s])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(f)||o[s+1]&&o[s+1].match(/\W/))break}return i}function fe(e){return m["unknown-options-as-args"]&&qt(e)}function qt(e){return e=e.replace(/^-{3,}/,"--"),e.match(W)||zt(e)?!1:!Pt(e,/^-+([^=]+?)=[\s\S]*$/,be,/^-+([^=]+?)$/,/^-+([^=]+?)-$/,/^-+([^=]+?\d+)$/,/^-+([^=]+?)\W+.*$/)}function G(e){return!b(e,a.bools)&&!b(e,a.counts)&&`${e}`in E?E[e]:Mt(Ut(e))}function Mt(e){return{[S.BOOLEAN]:!0,[S.STRING]:"",[S.NUMBER]:void 0,[S.ARRAY]:[]}[e]}function Ut(e){let i=S.BOOLEAN;return b(e,a.strings)?i=S.STRING:b(e,a.numbers)?i=S.NUMBER:b(e,a.bools)?i=S.BOOLEAN:b(e,a.arrays)&&(i=S.ARRAY),i}function B(e){return e===void 0}function Gt(){Object.keys(a.counts).find(e=>b(e,a.arrays)?(L=Error(q("Invalid configuration: %s, opts.count excludes opts.array.",e)),!0):b(e,a.nargs)?(L=Error(q("Invalid configuration: %s, opts.count excludes opts.narg.",e)),!0):!1)}return{aliases:Object.assign({},a.aliases),argv:Object.assign(Ie,A),configuration:m,defaulted:Object.assign({},Be),error:L,newAliases:Object.assign({},re)}}}function Je(n){const t=[],r=Object.create(null);let c=!0;for(Object.keys(n).forEach(function(l){t.push([].concat(n[l],l))});c;){c=!1;for(let l=0;l<t.length;l++)for(let u=l+1;u<t.length;u++)if(t[l].filter(function(m){return t[u].indexOf(m)!==-1}).length){t[l]=t[l].concat(t[u]),t.splice(u,1),c=!0;break}}return t.forEach(function(l){l=l.filter(function(p,m,E){return E.indexOf(p)===m});const u=l.pop();u!==void 0&&typeof u=="string"&&(r[u]=l)}),r}function ue(n){return n!==void 0?n+1:1}function xe(n){return n==="__proto__"?"___proto___":n}function Xe(n){return typeof n=="string"&&(n[0]==="'"||n[0]==='"')&&n[n.length-1]===n[0]?n.substring(1,n.length-1):n}/**
 * @fileoverview Main entrypoint for libraries using yargs-parser in Node.js
 * CJS and ESM environments.
 *
 * @license
 * Copyright (c) 2016, Contributors
 * SPDX-License-Identifier: ISC
 */var he,de,pe;const Ce=process&&process.env&&process.env.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12,Ne=(de=(he=process==null?void 0:process.versions)===null||he===void 0?void 0:he.node)!==null&&de!==void 0?de:(pe=process==null?void 0:process.version)===null||pe===void 0?void 0:pe.slice(1);if(Ne&&Number(Ne.match(/^([^.]+)/)[1])<Ce)throw Error(`yargs parser supports a minimum Node.js version of ${Ce}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);const Ze=process?process.env:{},Se=new Ke({cwd:process.cwd,env:()=>Ze,format:I.format,normalize:w.normalize,resolve:w.resolve,require:n=>{if(typeof require<"u")return require(n);if(n.match(/\.json$/))return JSON.parse(R.readFileSync(n,"utf8"));throw Error("only .json config files are supported in ESM")}}),Y=function(t,r){return Se.parse(t.slice(),r).argv};Y.detailed=function(n,t){return Se.parse(n.slice(),t)},Y.camelCase=Q,Y.decamelize=$e,Y.looksLikeNumber=je;const ke={right:rt,center:ot},et=0,se=1,tt=2,ie=3;class nt{constructor(t){var r;this.width=t.width,this.wrap=(r=t.wrap)!==null&&r!==void 0?r:!0,this.rows=[]}span(...t){const r=this.div(...t);r.span=!0}resetOutput(){this.rows=[]}div(...t){if(t.length===0&&this.div(""),this.wrap&&this.shouldApplyLayoutDSL(...t)&&typeof t[0]=="string")return this.applyLayoutDSL(t[0]);const r=t.map(c=>typeof c=="string"?this.colFromString(c):c);return this.rows.push(r),r}shouldApplyLayoutDSL(...t){return t.length===1&&typeof t[0]=="string"&&/[\t\n]/.test(t[0])}applyLayoutDSL(t){const r=t.split(`
`).map(l=>l.split("	"));let c=0;return r.forEach(l=>{l.length>1&&x.stringWidth(l[0])>c&&(c=Math.min(Math.floor(this.width*.5),x.stringWidth(l[0])))}),r.forEach(l=>{this.div(...l.map((u,p)=>({text:u.trim(),padding:this.measurePadding(u),width:p===0&&l.length>1?c:void 0})))}),this.rows[this.rows.length-1]}colFromString(t){return{text:t,padding:this.measurePadding(t)}}measurePadding(t){const r=x.stripAnsi(t);return[0,r.match(/\s*$/)[0].length,0,r.match(/^\s*/)[0].length]}toString(){const t=[];return this.rows.forEach(r=>{this.rowToString(r,t)}),t.filter(r=>!r.hidden).map(r=>r.text).join(`
`)}rowToString(t,r){return this.rasterize(t).forEach((c,l)=>{let u="";c.forEach((p,m)=>{const{width:E}=t[m],C=this.negatePadding(t[m]);let _=p;if(C>x.stringWidth(p)&&(_+=" ".repeat(C-x.stringWidth(p))),t[m].align&&t[m].align!=="left"&&this.wrap){const z=ke[t[m].align];_=z(_,C),x.stringWidth(_)<C&&(_+=" ".repeat((E||0)-x.stringWidth(_)-1))}const T=t[m].padding||[0,0,0,0];T[ie]&&(u+=" ".repeat(T[ie])),u+=Fe(t[m],_,"| "),u+=_,u+=Fe(t[m],_," |"),T[se]&&(u+=" ".repeat(T[se])),l===0&&r.length>0&&(u=this.renderInline(u,r[r.length-1]))}),r.push({text:u.replace(/ +$/,""),span:t.span})}),r}renderInline(t,r){const c=t.match(/^ */),l=c?c[0].length:0,u=r.text,p=x.stringWidth(u.trimRight());return r.span?this.wrap?l<p?t:(r.hidden=!0,u.trimRight()+" ".repeat(l-p)+t.trimLeft()):(r.hidden=!0,u+t):t}rasterize(t){const r=[],c=this.columnWidths(t);let l;return t.forEach((u,p)=>{u.width=c[p],this.wrap?l=x.wrap(u.text,this.negatePadding(u),{hard:!0}).split(`
`):l=u.text.split(`
`),u.border&&(l.unshift("."+"-".repeat(this.negatePadding(u)+2)+"."),l.push("'"+"-".repeat(this.negatePadding(u)+2)+"'")),u.padding&&(l.unshift(...new Array(u.padding[et]||0).fill("")),l.push(...new Array(u.padding[tt]||0).fill(""))),l.forEach((m,E)=>{r[E]||r.push([]);const C=r[E];for(let _=0;_<p;_++)C[_]===void 0&&C.push("");C.push(m)})}),r}negatePadding(t){let r=t.width||0;return t.padding&&(r-=(t.padding[ie]||0)+(t.padding[se]||0)),t.border&&(r-=4),r}columnWidths(t){if(!this.wrap)return t.map(p=>p.width||x.stringWidth(p.text));let r=t.length,c=this.width;const l=t.map(p=>{if(p.width)return r--,c-=p.width,p.width}),u=r?Math.floor(c/r):0;return l.map((p,m)=>p===void 0?Math.max(u,st(t[m])):p)}}function Fe(n,t,r){return n.border?/[.']-+[.']/.test(t)?"":t.trim().length!==0?r:"  ":""}function st(n){const t=n.padding||[],r=1+(t[ie]||0)+(t[se]||0);return n.border?r+4:r}function it(){return typeof process=="object"&&process.stdout&&process.stdout.columns?process.stdout.columns:80}function rt(n,t){n=n.trim();const r=x.stringWidth(n);return r<t?" ".repeat(t-r)+n:n}function ot(n,t){n=n.trim();const r=x.stringWidth(n);return r>=t?n:" ".repeat(t-r>>1)+n}let x;function ct(n,t){return x=t,new nt({width:n?.width||it(),wrap:n?.wrap})}const Le=new RegExp("\x1B(?:\\[(?:\\d+[ABCDEFGJKSTm]|\\d+;\\d+[Hfm]|\\d+;\\d+;\\d+m|6n|s|u|\\?25[lh])|\\w)","g");function Re(n){return n.replace(Le,"")}function at(n,t){const[r,c]=n.match(Le)||["",""];n=Re(n);let l="";for(let u=0;u<n.length;u++)u!==0&&u%t===0&&(l+=`
`),l+=n.charAt(u);return r&&c&&(l=`${r}${l}${c}`),l}function lt(n){return ct(n,{stringWidth:t=>[...t].length,stripAnsi:Re,wrap:at})}function ft(n,t){let r=w.resolve(".",n),c;for(R.statSync(r).isDirectory()||(r=w.dirname(r));;){if(c=t(r,R.readdirSync(r)),c)return w.resolve(r,c);if(r=w.dirname(c=r),c===r)break}}const ut={fs:{readFileSync:R.readFileSync,writeFile:R.writeFile},format:I.format,resolve:w.resolve,exists:n=>{try{return R.statSync(n).isFile()}catch{return!1}}};let F;class ht{constructor(t){t=t||{},this.directory=t.directory||"./locales",this.updateFiles=typeof t.updateFiles=="boolean"?t.updateFiles:!0,this.locale=t.locale||"en",this.fallbackToLanguage=typeof t.fallbackToLanguage=="boolean"?t.fallbackToLanguage:!0,this.cache=Object.create(null),this.writeQueue=[]}__(...t){if(typeof arguments[0]!="string")return this._taggedLiteral(arguments[0],...arguments);const r=t.shift();let c=function(){};return typeof t[t.length-1]=="function"&&(c=t.pop()),c=c||function(){},this.cache[this.locale]||this._readLocaleFile(),!this.cache[this.locale][r]&&this.updateFiles?(this.cache[this.locale][r]=r,this._enqueueWrite({directory:this.directory,locale:this.locale,cb:c})):c(),F.format.apply(F.format,[this.cache[this.locale][r]||r].concat(t))}__n(){const t=Array.prototype.slice.call(arguments),r=t.shift(),c=t.shift(),l=t.shift();let u=function(){};typeof t[t.length-1]=="function"&&(u=t.pop()),this.cache[this.locale]||this._readLocaleFile();let p=l===1?r:c;this.cache[this.locale][r]&&(p=this.cache[this.locale][r][l===1?"one":"other"]),!this.cache[this.locale][r]&&this.updateFiles?(this.cache[this.locale][r]={one:r,other:c},this._enqueueWrite({directory:this.directory,locale:this.locale,cb:u})):u();const m=[p];return~p.indexOf("%d")&&m.push(l),F.format.apply(F.format,m.concat(t))}setLocale(t){this.locale=t}getLocale(){return this.locale}updateLocale(t){this.cache[this.locale]||this._readLocaleFile();for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(this.cache[this.locale][r]=t[r])}_taggedLiteral(t,...r){let c="";return t.forEach(function(l,u){const p=r[u+1];c+=l,typeof p<"u"&&(c+="%s")}),this.__.apply(this,[c].concat([].slice.call(r,1)))}_enqueueWrite(t){this.writeQueue.push(t),this.writeQueue.length===1&&this._processWriteQueue()}_processWriteQueue(){const t=this,r=this.writeQueue[0],c=r.directory,l=r.locale,u=r.cb,p=this._resolveLocaleFile(c,l),m=JSON.stringify(this.cache[l],null,2);F.fs.writeFile(p,m,"utf-8",function(E){t.writeQueue.shift(),t.writeQueue.length>0&&t._processWriteQueue(),u(E)})}_readLocaleFile(){let t={};const r=this._resolveLocaleFile(this.directory,this.locale);try{F.fs.readFileSync&&(t=JSON.parse(F.fs.readFileSync(r,"utf-8")))}catch(c){if(c instanceof SyntaxError&&(c.message="syntax error in "+r),c.code==="ENOENT")t={};else throw c}this.cache[this.locale]=t}_resolveLocaleFile(t,r){let c=F.resolve(t,"./",r+".json");if(this.fallbackToLanguage&&!this._fileExistsSync(c)&&~r.lastIndexOf("_")){const l=F.resolve(t,"./",r.split("_")[0]+".json");this._fileExistsSync(l)&&(c=l)}return c}_fileExistsSync(t){return F.exists(t)}}function dt(n,t){F=t;const r=new ht(n);return{__:r.__.bind(r),__n:r.__n.bind(r),setLocale:r.setLocale.bind(r),getLocale:r.getLocale.bind(r),updateLocale:r.updateLocale.bind(r),locale:r.locale}}const pt=n=>dt(n,ut),gt="require is not supported by ESM",We="loading a directory of commands is not supported yet for ESM";let V;try{V=Ue.fileURLToPath(typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:Oe&&Oe.src||new URL("vue-mess-detector.umd.js",document.baseURI).href)}catch{V=process.cwd()}const mt=V.substring(0,V.lastIndexOf("node_modules"));Ae.notStrictEqual,Ae.strictEqual,I.inspect,mt||process.cwd(),w.basename,w.dirname,w.extname,w.relative,w.resolve,process.cwd,process.exit,process.nextTick,typeof process.stdout.columns<"u"&&process.stdout.columns,R.readFileSync,pt({directory:w.resolve(V,"../../../locales"),updateFiles:!1});const ge="\x1B[44m",H="\x1B[43m",P="\x1B[41m",bt="\x1B[42m",j="\x1B[0m",M="\x1B[33m",U="\x1B[0m",me=50,K=[],yt=(n,t)=>{const r=n.content.split(`
`);r.length>me&&K.push({fileName:t,scriptLength:r.length})},Et=()=>(K.length>0&&(console.log(`
${P}Long <script> blocks${j} in ${K.length} files.`),console.log(`👉 ${M}Try to refactor out the logic into composable functions or other files and keep the script block's length under ${me} lines.${U}`),K.forEach(n=>{console.log(`- ${n.fileName} ${n.scriptLength>me*2?P:H}(${n.scriptLength} lines)${j}`)})),K.length),J=[],_t=n=>{J.push(n)},At=()=>(J.length>0&&(console.log(`
${H}Plain <script> blocks${j} in ${J.length} files.`),console.log(`👉 ${M} Consider using <script setup> to leverage the new SFC <script> syntax.${U}`),J.forEach(n=>{console.log(`- ${n}`)})),J.length),X=[],Ot=(n,t)=>{const r=/\belse\b/gi,c=n.content.match(r);c?.length&&X.push({fileName:t,elseCount:c.length})},wt=()=>(X.length>0&&(console.log(`
${H}else conditions${j} are used in ${X.length} files.`),console.log(`👉 ${M}Try to rewrite the conditions in a way that the else clause is not necessary.${U}`),X.forEach(n=>{console.log(`- ${n.fileName} ${H}(${n.elseCount})${j}`)})),X.length),$t=5,jt=10,Z=[],xt=(n,t)=>{const r=/\bif\b/gi,c=/\belse\b/gi,l=/\bfor\b/gi,u=/\bwhile\b/gi,p=/\bcase\b/gi,m=n.content.match(r),E=n.content.match(c),C=n.content.match(l),_=n.content.match(u),T=n.content.match(p),z=(m?.length||0)+(E?.length||0)+(C?.length||0)+(_?.length||0)+(T?.length||0);z>$t&&Z.push({fileName:t,cyclomaticComplexity:z})},Ct=()=>(Z.length>0&&(console.log(`
${ge}cyclomaticComplexity${j} is above moderate in ${Z.length} files.`),console.log(`👉 ${M}Try to reduce complexity.${U}`),Z.forEach(n=>{console.log(`- ${n.fileName} ${n.cyclomaticComplexity>jt?P:H}(${n.cyclomaticComplexity})${j}`)})),Z.length),k=[],Nt=n=>{if(n.includes("pages"))return;const t=w.basename(n);if(t==="App.vue")return;const r=/[A-Z]/;t.slice(1).match(r)?.length||k.push({fileName:n})},St=()=>(k.length>0&&(console.log(`
${P}single name component${j} is used in ${k.length} files.`),console.log(`👉 ${M}Rename the component to use multi-word name.${U} See: https://vuejs.org/style-guide/rules-essential.html#use-multi-word-component-names`),k.forEach(n=>{console.log(`- ${P}${n.fileName}${j}`)})),k.length),ee=[],Ft=(n,t)=>{n.scoped||ee.push({fileName:t})},Lt=()=>(ee.length>0&&(console.log(`
${P}Global style ${j} is used in ${ee.length} files.`),console.log(`👉 ${M}Use <style scoped>.${U} See: https://vuejs.org/style-guide/rules-essential.html#use-component-scoped-styling`),ee.forEach(n=>{console.log(`- ${P}${n.fileName}${j}`)})),ee.length);let ve=0;const Te=(n,t)=>{const r=R.readdirSync(n);ve+=r.length;for(const c of r){const l=w.join(n,c);R.statSync(l).isDirectory()?Te(l,t):c.endsWith(".vue")&&t(l)}},Rt=n=>{console.log(`

${ge}Analyzing Vue files in ${n}${j}`);let t=0;Te(n,r=>{const c=R.readFileSync(r,"utf-8"),{descriptor:l}=Ge.parse(c);l.script&&_t(r);const u=l.scriptSetup||l.script;u&&(yt(u,r),Nt(r),xt(u,r),Ot(u,r)),l.styles.forEach(p=>{Ft(p,r)})}),console.log(`Found ${ge}${ve}${j} Vue files`),t+=Et(),t+=At(),t+=Ct(),t+=St(),t+=wt(),t+=Lt(),t||console.log(`${bt}No code smells detected!${j}`)};N(Ye(process.argv)).command("analyze [path]","Analyze Vue files for code smells",n=>n.positional("path",{describe:"path to the Vue files",type:"string",default:"./src"}),n=>{Rt(n.path)}).help().argv});