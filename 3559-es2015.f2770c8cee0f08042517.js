"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[3559],{23559:function(e,t,n){n.d(t,{tr:function(){return F},n9:function(){return P},H$:function(){return z},f8:function(){return oe},A7:function(){return Z},jX:function(){return W},rC:function(){return ce}});var a=n(73331);const r=new Date("0001-01-01"),l=new Date("9999-12-31"),i={hours:23,minutes:59,seconds:59,milliseconds:999},o="\u2013",s="\u2014",c="-",u=[c,o,s,"\u2212"],d=[","," "],m=[":","."],p={hours:2,minutes:2,seconds:2,milliseconds:3};function g(e,t,n){const a=Math.min(Number(n),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(a):a}function f(e,{day:t,month:n,year:a}={}){const r=new Date(e);return t&&r.setDate(r.getDate()+t),n&&r.setMonth(r.getMonth()+n),a&&r.setFullYear(r.getFullYear()+a),r}function S(e){return{day:String(e.getDate()).padStart(2,"0"),month:String(e.getMonth()+1).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0"),hours:String(e.getHours()).padStart(2,"0"),minutes:String(e.getMinutes()).padStart(2,"0"),seconds:String(e.getSeconds()).padStart(2,"0"),milliseconds:String(e.getMilliseconds()).padStart(3,"0")}}function h(e,t){return!(e.length<t.length)&&e.split(/\D/).every(e=>!e.match(/^0+$/))}function v(e,t,n){const a=t.replace(/\W/g,"").length;return e.replace(n,"").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${a}}`,"g"))||[]}function x(e){return e.reduce((e,[t,n])=>Object.assign(Object.assign({},e),{[t]:n}),{})}function $(e,t){const n=t.replace(/[^dmy]/g,""),a=e.replace(/\D+/g,""),r={day:a.slice(n.indexOf("d"),n.lastIndexOf("d")+1),month:a.slice(n.indexOf("m"),n.lastIndexOf("m")+1),year:a.slice(n.indexOf("y"),n.lastIndexOf("y")+1)};return x(Object.entries(r).filter(([e,t])=>Boolean(t)).sort(([e],[n])=>t.toLowerCase().indexOf(e[0])>t.toLowerCase().indexOf(n[0])?1:-1))}function M(e,t){var n,a,r,l,i,o,s;const c=2===(null===(n=e.year)||void 0===n?void 0:n.length)?`20${e.year}`:e.year,u=new Date(Number(null!=c?c:"0"),Number(null!==(a=e.month)&&void 0!==a?a:"1")-1,Number(null!==(r=e.day)&&void 0!==r?r:"1"),Number(null!==(l=null==t?void 0:t.hours)&&void 0!==l?l:"0"),Number(null!==(i=null==t?void 0:t.minutes)&&void 0!==i?i:"0"),Number(null!==(o=null==t?void 0:t.seconds)&&void 0!==o?o:"0"),Number(null!==(s=null==t?void 0:t.milliseconds)&&void 0!==s?s:"0"));return u.setFullYear(Number(null!=c?c:"0")),u}const y=", ";function b({day:e,month:t,year:n,hours:a,minutes:r,seconds:l,milliseconds:i},o,s){var c;const u=2===(null===(c=o.match(/y/g))||void 0===c?void 0:c.length)?null==n?void 0:n.slice(-2):n;return(o+(s?y+s:"")).replace(/d+/g,null!=e?e:"").replace(/m+/g,null!=t?t:"").replace(/y+/g,null!=u?u:"").replace(/H+/g,null!=a?a:"").replace(/MSS/g,null!=i?i:"").replace(/M+/g,null!=r?r:"").replace(/S+/g,null!=l?l:"").replace(/^\D+/g,"").replace(/\D+$/g,"")}function w(e,t,n=0){return Number(e.padEnd(t.length,"0"))<=Number(t)?{validatedSegmentValue:e,prefixedZeroesCount:n}:e.endsWith("0")?w(`0${e.slice(0,t.length-1)}`,t,n+1):w(`${e.slice(0,t.length-1)}0`,t,n)}const T=e=>{var t,n,a;return{day:(null===(t=e.match(/d/g))||void 0===t?void 0:t.length)||0,month:(null===(n=e.match(/m/g))||void 0===n?void 0:n.length)||0,year:(null===(a=e.match(/y/g))||void 0===a?void 0:a.length)||0}},j={day:31,month:12,year:9999};function O({dateString:e,dateModeTemplate:t,offset:n,selection:[a,r]}){const l=$(e,t),i=Object.entries(l),o={};let s=0;for(const[d,m]of i){const e=b(o,t),l=j[d],i=n+e.length+(e.length&&1)+T(t)[d],c=i>=a&&i<=r;if(c&&Number(m)>Number(l))return{validatedDateString:"",updatedSelection:[a,r]};if(c&&Number(m)<1)return{validatedDateString:"",updatedSelection:[a,r]};const{validatedSegmentValue:u,prefixedZeroesCount:p}=w(m,`${l}`);s+=p,o[d]=u}const c=b(o,t),u=c.length-e.length;return{validatedDateString:c,updatedSelection:[a+s+u,r+s+u]}}const D=/[\\^$.*+?()[\]{}|]/g,N=RegExp(D.source);function E(e){return e&&N.test(e)?e.replace(D,"\\$&"):e}function k(e){return!e||"object"==typeof e&&0===Object.keys(e).length}function R(e,t){const n=T(t);return x(Object.entries(e).map(([e,t])=>{const a=n[e];return[e,t.length===a&&t.match(/^0+$/)?"1".padStart(a,"0"):t]}))}function A({dateModeTemplate:e,min:t=r,max:n=l,datesSeparator:a="",dateSegmentSeparator:i="."}){return({value:r,selection:l})=>{const o=a&&r.endsWith(a),s=v(r,e,a);let c="";for(const u of s){c+=c?a:"";const r=$(u,e);h(u,e)?c+=b(S(g(M(r),t,n)),e):c+=b(R(r,e),e)+(u.endsWith(i)?i:"")}return{selection:l,value:c+(o?a:"")}}}function Z(e){return e?({value:t,selection:n},a)=>t.endsWith(e)||!t&&!a.value.endsWith(e)?{value:t,selection:n}:t.endsWith(e)||a.value.endsWith(e)?{selection:n,value:Array.from(e).reverse().reduce((e,t,n)=>{const a=e.length-1-n;return e[a]!==t?e.slice(0,a+1)+t+e.slice(a+1):e},t)}:{selection:n,value:t+e}:e=>e}function W(e){return e?({value:t,selection:n},a)=>{if(t.startsWith(e)||!t&&!a.value.startsWith(e))return{value:t,selection:n};const[r,l]=n,i=Array.from(e).reduce((e,n,a)=>(e+t)[a]===n?e:e+n,"");return{selection:[r+i.length,l+i.length],value:i+t}}:e=>e}function B({dateModeTemplate:e,dateSegmentsSeparator:t,datesSeparator:n=""}){return({elementState:a,data:r})=>{const{value:l,selection:i}=a;if(r===t)return{elementState:a,data:i[0]===l.length?r:""};if(u.includes(r))return{elementState:a,data:n};const o=r.replace(new RegExp(`[^\\d${E(t)}${n}]`,"g"),"");if(!o)return{elementState:a,data:""};const[s,c]=i;let d=c+r.length;const m=l.slice(0,s)+o+l.slice(d),p=v(m,e,n);let g="";const f=Boolean(n)&&m.includes(n);for(const t of p){const{validatedDateString:r,updatedSelection:l}=O({dateString:t,dateModeTemplate:e,offset:g?g.length+n.length:0,selection:[s,d]});if(t&&!r)return{elementState:a,data:""};d=l[1],g+=f&&g?n+r:r}const S=g.slice(s,d);return{elementState:{selection:i,value:g.slice(0,s)+S.split(t).map(e=>"0".repeat(e.length)).join(t)+g.slice(d)},data:S}}}function F({mode:e,separator:t=".",max:n,min:r}){const l=e.split("/").join(t);return{mask:Array.from(l).map(e=>e===t?e:/\d/),overwriteMode:"replace",preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},B({dateModeTemplate:l,dateSegmentsSeparator:t})),postprocessor:A({min:r,max:n,dateModeTemplate:l,dateSegmentSeparator:t})}}function C({dateModeTemplate:e,datesSeparator:t,minLength:n,maxLength:a,max:r=l}){return k(n)&&k(a)?e=>e:({value:l,selection:i})=>{const o=v(l,e,t);if(2!==o.length||o.some(t=>!h(t,e)))return{value:l,selection:i};const[s,c]=o.map(t=>M($(t,e))),u=f(s,Object.assign(Object.assign({},n),{day:(null==n?void 0:n.day)&&n.day-1})),d=k(a)?r:f(s,Object.assign(Object.assign({},a),{day:(null==a?void 0:a.day)&&a.day-1})),m=g(c,u,r);return{selection:i,value:o[0]+t+b(S(m>d?d:m),e)}}}function L({dateModeTemplate:e,datesSeparator:t}){return({value:n,selection:a})=>{const r=v(n,e,t),l=2===r.length&&r.every(t=>h(t,e)),[i,o]=a;if(!((i>=n.length||0===i&&o>=n.length)&&l))return{value:n,selection:a};const[s,c]=r.map(t=>M($(t,e)));return{selection:a,value:s>c?r.reverse().join(t):n}}}const V=`\xa0${o}\xa0`;function P({mode:e,separator:t=".",min:n,max:r,minLength:l,maxLength:i}){const o=e.split("/").join(t),s=Array.from(o).map(e=>e===t?e:/\d/);return{mask:[...s,...Array.from(V),...s],overwriteMode:"replace",preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},B({dateModeTemplate:o,dateSegmentsSeparator:t,datesSeparator:V})),postprocessor:(0,a.Zu)(A({min:n,max:r,dateModeTemplate:o,datesSeparator:V,dateSegmentSeparator:t}),C({dateModeTemplate:o,minLength:l,maxLength:i,max:r,datesSeparator:V}),L({dateModeTemplate:o,datesSeparator:V}))}}function I(e){return x(Object.entries(e).map(([e,t])=>[e,`${t}`.padEnd(p[e],"0")]))}function Y(e){const t=e.replace(/\D+/g,""),n={hours:t.slice(0,2),minutes:t.slice(2,4),seconds:t.slice(4,6),milliseconds:t.slice(6,9)};return x(Object.entries(n).filter(([e,t])=>Boolean(t)))}function H({hours:e="",minutes:t="",seconds:n="",milliseconds:a=""}){return`${e}${t&&`:${t}`}${n&&`:${n}`}${a&&`.${a}`}`}function X({timeString:e,paddedMaxValues:t,offset:n,selection:[a,r]}){const l=Y(e),i=Object.entries(l),o={};let s=0;for(const[d,m]of i){const e=H(o),l=t[d],i=n+e.length+(e.length&&1)+p[d];if(i>=a&&i<=r&&Number(m)>Number(l))return{validatedTimeString:"",updatedTimeSelection:[a,r]};const{validatedSegmentValue:c,prefixedZeroesCount:u}=w(m,`${l}`);s+=u,o[d]=c}const c=H(o),u=c.length-e.length;return{validatedTimeString:c,updatedTimeSelection:[a+s+u,r+s+u]}}function _(e,t){const n=e.includes(y);return[e.slice(0,t.length),e.slice(n?t.length+y.length:t.length)]}function G({dateModeTemplate:e,timeMode:t,min:n=r,max:a=l}){return({value:r,selection:l})=>{const[i,o]=_(r,e),s=$(i,e),c=Y(o);if(!function(e,t,n){return e.length>=t.length+n.length+y.length&&e.split(y)[0].split(/\D/).every(e=>!e.match(/^0+$/))}(r,e,t)){const n=R(s,e),a=b(Object.assign(Object.assign({},n),c),e,t);return{selection:l,value:a+r.slice(a.length)}}return{selection:l,value:b(S(g(M(s,c),n,a)),e,t)}}}function q({dateModeTemplate:e,dateSegmentsSeparator:t}){return({elementState:n,data:a})=>{const{value:r,selection:l}=n;if(a===t)return{elementState:n,data:l[0]===r.length?a:""};if(d.includes(a))return{elementState:n,data:y};const o=a.replace(new RegExp(`[^\\d${E(t)}]`,"g"),"");if(!o)return{elementState:n,data:""};const[s,c]=l;let u=c+a.length;const m=r.slice(0,s)+o+r.slice(u),[p,g]=_(m,e);let f="";const S=m.includes(y),{validatedDateString:h,updatedSelection:v}=O({dateString:p,dateModeTemplate:e,offset:0,selection:[s,u]});if(p&&!h)return{elementState:n,data:""};u=v[1],f+=h;const x=I(i),{validatedTimeString:$,updatedTimeSelection:M}=X({timeString:g,paddedMaxValues:x,offset:f.length+y.length,selection:[s,u]});if(g&&!$)return{elementState:n,data:""};u=M[1],f+=S?y+$:$;const b=f.slice(s,u);return{elementState:{selection:l,value:f.slice(0,s)+b.split(t).map(e=>"0".repeat(e.length)).join(t)+f.slice(u)},data:b}}}function z({dateMode:e,timeMode:t,dateSeparator:n=".",min:r,max:l}){const i=e.split("/").join(n);return{mask:[...Array.from(i).map(e=>e===n?e:/\d/),...y.split(""),...Array.from(t).map(e=>m.includes(e)?e:/\d/)],overwriteMode:"replace",preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},q({dateModeTemplate:i,dateSegmentsSeparator:n})),postprocessor:G({min:r,max:l,dateModeTemplate:i,timeMode:t})}}function J({decimalSeparator:e,precision:t,decimalZeroPadding:n}){return t<=0||!n?e=>e:({value:n,selection:a})=>{const[r,l=""]=n.split(e);return n.includes(e)||r?{value:r+e+l.padEnd(t,"0"),selection:a}:{value:n,selection:a}}}function K(e,t){const n=e=>{const n=E(t);return e.replace(new RegExp(`^(\\D+)?[0${n}]+(?=0)`),"$1").replace(new RegExp(`^(\\D+)?[0${n}]+(?=[1-9])`),"$1")},a=(e,t)=>{const a=e.slice(0,t),r=e.slice(t).startsWith("0");return a.length-n(a).length+(r?1:0)};return({value:t,selection:r})=>{const[l,i]=r,o=t.includes(e),[s,c=""]=t.split(e),u=n(s);if(s===u)return{value:t,selection:r};const d=l-a(t,l),m=i-a(t,i);return{value:u+(o?e:"")+c,selection:[Math.max(d,0),Math.max(m,0)]}}}function Q({decimalSeparator:e,isNegativeAllowed:t,precision:n,thousandSeparator:a,prefix:r,postfix:l}){const i=U(r),o=t?"\u2212?":"",s=a?`[\\d${E(a)}]*`:"[\\d]*",c=n>0?`(${E(e)}\\d{0,${Number.isFinite(n)?n:""}})?`:"",u=U(l);return new RegExp(`^${i}${o}${s}${c}${u}$`)}function U(e){return e?`${e.split("").map(e=>`${E(e)}?`).join("")}`:""}function ee(e,t){return","===e||"."===e?[".",",","\u0431","\u044e"].filter(n=>n!==t&&n!==e):[]}function te({max:e,decimalSeparator:t}){return({value:n,selection:a})=>{if(function(e,t="."){const n=e.match(new RegExp(`^[\u2212\\${c}${o}${s}]`));return Number((n?c:"")+e.replace(new RegExp(`[^\\d${E(t)}]`,"g"),"").replace(t,"."))}(n,t)>e){const n=`${e}`.replace(".",t);return{value:n,selection:[n.length,n.length]}}return{value:n,selection:a}}}function ne({decimalSeparator:e,thousandSeparator:t,decimalZeroPadding:n}){return({elementState:a,data:r},l)=>{const{value:i,selection:o}=a,[s,c]=o,u=i.slice(s,c),d=n?[e,t]:[t],m=n&&s>i.indexOf(e)&&Boolean(u.match(/^0+$/gi));return"deleteBackward"!==l&&"deleteForward"!==l||!d.includes(u)&&!m?{elementState:a,data:r}:{elementState:{value:i,selection:"deleteForward"===l?[c,c]:[s,s]},data:r}}}function ae({decimalSeparator:e,precision:t}){const n=new RegExp(`^\\D*${E(e)}`);return({elementState:a,data:r})=>{const{value:l,selection:i}=a,[o]=i;return t<=0||l.includes(e)||!r.match(n)?{elementState:a,data:r}:{elementState:a,data:l.slice(0,o).match(/\d+/)?r:`0${r}`}}}function re(e,t){const n=new RegExp(`[${t.join("")}]`,"gi");return({elementState:t,data:a})=>{const{value:r,selection:l}=t;return{elementState:{selection:l,value:r.replace(n,e)},data:a.replace(n,e)}}}function le({thousandSeparator:e,decimalSeparator:t,prefix:n,postfix:a}){if(!e)return e=>e;const r=new RegExp(`^${E(n)}\u2212?`),l=new RegExp(`${E(a)}$`);return({value:n,selection:a})=>{const[i,o=""]=n.split(t),[s,c]=a;let[u,d]=a;const m=i.replace(r,"").replace(l,""),[p=""]=i.match(r)||[],[g=""]=i.match(l)||[];return{value:p+Array.from(m).reduceRight((t,n,a)=>{const r=!(!a&&n===e)&&t.length&&(t.length+1)%4==0;return n===e&&r?n+t:n!==e||r?r?(a<=s&&u++,a<=c&&d++,n+e+t):n+t:(a&&a<=s&&u--,a&&a<=c&&d--,t)},"")+g+(n.includes(t)?t:"")+o,selection:[u,d]}}}function ie(e,t){if(e>0)return e=>e;const n=new RegExp(`${E(t)}.*$`,"g");return({elementState:e,data:t})=>{const{value:a,selection:r}=e,[l,i]=r,o=a.replace(n,"");return{elementState:{selection:[Math.min(l,o.length),Math.min(i,o.length)],value:o},data:t.replace(n,"")}}}function oe({max:e=Number.MAX_SAFE_INTEGER,isNegativeAllowed:t=!0,precision:n=0,thousandSeparator:r="\xa0",decimalSeparator:l=".",decimalPseudoSeparators:i=ee(l,r),decimalZeroPadding:u=!1,prefix:d="",postfix:m=""}={}){const p=[c,o,s].filter(e=>e!==r&&e!==l);return{mask:Q({decimalSeparator:l,precision:n,thousandSeparator:r,isNegativeAllowed:t,prefix:d,postfix:m}),preprocessor:(0,a.Zu)(re("\u2212",p),re(l,i),ae({decimalSeparator:l,precision:n}),ne({decimalSeparator:l,decimalZeroPadding:u,thousandSeparator:r}),ie(n,l)),postprocessor:(0,a.Zu)(K(l,r),te({decimalSeparator:l,max:e}),W(d),Z(m),le({decimalSeparator:l,thousandSeparator:r,prefix:d,postfix:m}),J({decimalSeparator:l,decimalZeroPadding:u,precision:n})),overwriteMode:u?({value:e,selection:[t]})=>t<=e.indexOf(l)?"shift":"replace":"shift"}}function se(e){const t=I(e);return({elementState:e,data:n},a)=>{if("deleteBackward"===a||"deleteForward"===a)return{elementState:e,data:n};const{value:r,selection:l}=e;if("validation"===a){const{validatedTimeString:e,updatedTimeSelection:a}=X({timeString:r,paddedMaxValues:t,offset:0,selection:l});return{elementState:{value:e,selection:a},data:n}}const i=n.replace(/\D+/g,""),[o,s]=l;let c=s+i.length;const u=r.slice(0,o)+i+r.slice(c),{validatedTimeString:d,updatedTimeSelection:m}=X({timeString:u,paddedMaxValues:t,offset:0,selection:[o,c]});if(u&&!d)return{elementState:e,data:""};c=m[1];const p=d.slice(o,c);return{elementState:{selection:l,value:d.slice(0,o)+"0".repeat(p.length)+d.slice(c)},data:p}}}function ce({mode:e,timeSegmentMaxValues:t={}}){const n=Object.assign(Object.assign({},i),t);return{mask:Array.from(e).map(e=>m.includes(e)?e:/\d/),preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},se(n)),overwriteMode:"replace"}}}}]);