"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[6415],{6415:(xe,re,F)=>{F.d(re,{tr:()=>ue,n9:()=>ge,H$:()=>De,f8:()=>Re,rC:()=>Oe});var S=F(5666);const H=new Date("0001-01-01"),y=new Date("9999-12-31"),Z={hours:23,minutes:59,seconds:59,milliseconds:999},w="\u2013",C="\u2014",A="-",$="\u2212",oe=[A,w,C,$],ie=[","," "],G=[":","."],L={hours:2,minutes:2,seconds:2,milliseconds:3};function T(e,t,n){const s=Math.min(Number(n),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(s):s}function W(e,{day:t,month:n,year:s}={}){const r=new Date(e);return t&&r.setDate(r.getDate()+t),n&&r.setMonth(r.getMonth()+n),s&&r.setFullYear(r.getFullYear()+s),r}function M(e){return{day:String(e.getDate()).padStart(2,"0"),month:String(e.getMonth()+1).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0"),hours:String(e.getHours()).padStart(2,"0"),minutes:String(e.getMinutes()).padStart(2,"0"),seconds:String(e.getSeconds()).padStart(2,"0"),milliseconds:String(e.getMilliseconds()).padStart(3,"0")}}function B(e,t){return!(e.length<t.length)&&e.split(/\D/).every(n=>!n.match(/^0+$/))}function I(e,t,n){const s=t.replace(/\W/g,"").length;return e.replace(n,"").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${s}}`,"g"))||[]}function R(e){return e.reduce((t,[n,s])=>Object.assign(Object.assign({},t),{[n]:s}),{})}function P(e,t){const n=t.replace(/[^dmy]/g,""),s=e.replace(/\D+/g,""),r=n.indexOf("d"),o=n.indexOf("m"),i=n.indexOf("y"),l={day:s.slice(r,r+2),month:s.slice(o,o+2),year:s.slice(i,n.lastIndexOf("y")+1)};return R(Object.entries(l).filter(([u,c])=>Boolean(c)).sort(([u],[c])=>t.toLowerCase().indexOf(u[0])>t.toLowerCase().indexOf(c[0])?1:-1))}function k(e,t){var n,s,r,o,i,l,u;const c=2===(null===(n=e.year)||void 0===n?void 0:n.length)?`20${e.year}`:e.year,a=new Date(Number(null!=c?c:"0"),Number(null!==(s=e.month)&&void 0!==s?s:"1")-1,Number(null!==(r=e.day)&&void 0!==r?r:"1"),Number(null!==(o=null==t?void 0:t.hours)&&void 0!==o?o:"0"),Number(null!==(i=null==t?void 0:t.minutes)&&void 0!==i?i:"0"),Number(null!==(l=null==t?void 0:t.seconds)&&void 0!==l?l:"0"),Number(null!==(u=null==t?void 0:t.milliseconds)&&void 0!==u?u:"0"));return a.setFullYear(Number(null!=c?c:"0")),a}const m=", ";function b({day:e,month:t,year:n,hours:s,minutes:r,seconds:o,milliseconds:i},l,u){var c;const a=2===(null===(c=l.match(/y/g))||void 0===c?void 0:c.length)?null==n?void 0:n.slice(-2):n;return(l+(u?m+u:"")).replace(/d+/g,null!=e?e:"").replace(/m+/g,null!=t?t:"").replace(/y+/g,null!=a?a:"").replace(/H+/g,null!=s?s:"").replace(/MSS/g,null!=i?i:"").replace(/M+/g,null!=r?r:"").replace(/S+/g,null!=o?o:"").replace(/^\D+/g,"").replace(/\D+$/g,"")}function O(e,t,n=0){return Number(e.padEnd(t.length,"0"))<=Number(t)?{validatedSegmentValue:e,prefixedZeroesCount:n}:e.endsWith("0")?O(`0${e.slice(0,t.length-1)}`,t,n+1):O(`${e.slice(0,t.length-1)}0`,t,n)}const U=e=>{var t,n,s;return{day:(null===(t=e.match(/d/g))||void 0===t?void 0:t.length)||0,month:(null===(n=e.match(/m/g))||void 0===n?void 0:n.length)||0,year:(null===(s=e.match(/y/g))||void 0===s?void 0:s.length)||0}},ce={day:31,month:12,year:9999};function Y({dateString:e,dateModeTemplate:t,offset:n,selection:[s,r]}){const o=P(e,t),i=Object.entries(o),l={};let u=0;for(const[g,f]of i){const d=b(l,t),p=ce[g],D=n+d.length+(d.length&&1)+U(t)[g],h=D>=s&&D<=r;if(h&&Number(f)>Number(p))return{validatedDateString:"",updatedSelection:[s,r]};if(h&&Number(f)<1)return{validatedDateString:"",updatedSelection:[s,r]};const{validatedSegmentValue:E,prefixedZeroesCount:_}=O(f,`${p}`);u+=_,l[g]=E}const c=b(l,t),a=c.length-e.length;return{validatedDateString:c,updatedSelection:[s+u+a,r+u+a]}}function V(e){return!e||"object"==typeof e&&0===Object.keys(e).length}function X(e,t){const n=U(t);return R(Object.entries(e).map(([s,r])=>{const o=n[s];return[s,r.length===o&&r.match(/^0+$/)?"1".padStart(o,"0"):r]}))}function z({dateModeTemplate:e,min:t=H,max:n=y,datesSeparator:s="",dateSegmentSeparator:r="."}){return({value:o,selection:i})=>{const l=s&&o.endsWith(s),u=I(o,e,s);let c="";for(const a of u){c+=c?s:"";const g=P(a,e);B(a,e)?c+=b(M(T(k(g),t,n)),e):c+=b(X(g,e),e)+(a.endsWith(r)?r:"")}return{selection:i,value:c+(l?s:"")}}}function K({dateModeTemplate:e,dateSegmentsSeparator:t,datesSeparator:n=""}){return({elementState:s,data:r})=>{const{value:o,selection:i}=s;if(r===t)return{elementState:s,data:i[0]===o.length?r:""};if(oe.includes(r))return{elementState:s,data:n};const l=r.replace(new RegExp(`[^\\d\\${t}${n}]`,"g"),"");if(!l)return{elementState:s,data:""};const[u,c]=i;let a=c+r.length;const g=o.slice(0,u)+l+o.slice(a),f=I(g,e,n);let d="";const p=Boolean(n)&&g.includes(n);for(const D of f){const{validatedDateString:h,updatedSelection:E}=Y({dateString:D,dateModeTemplate:e,offset:d?d.length+n.length:0,selection:[u,a]});if(D&&!h)return{elementState:s,data:""};a=E[1],d+=p&&d?n+h:h}const v=d.slice(u,a);return{elementState:{selection:i,value:d.slice(0,u)+v.split(t).map(D=>"0".repeat(D.length)).join(t)+d.slice(a)},data:v}}}function ue({mode:e,separator:t=".",max:n,min:s}){const r=e.split("/").join(t);return{mask:Array.from(r).map(o=>o===t?o:/\d/),overwriteMode:"replace",preprocessor:(0,S.Zu)(({elementState:e},t)=>{const{value:n,selection:s}=e;if(!n||function(e,[t,n]){return n===e.length}(n,s))return{elementState:e};const[r,o]=s,i=n.slice(r,o).replace(/\d/g,"0"),l=n.slice(0,r)+i+n.slice(o);return"validation"===t||"insert"===t&&r===o?{elementState:{selection:s,value:l}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[o,o],value:l}}},K({dateModeTemplate:r,dateSegmentsSeparator:t})),postprocessor:z({min:s,max:n,dateModeTemplate:r,dateSegmentSeparator:t})}}function ae({dateModeTemplate:e,datesSeparator:t,minLength:n,maxLength:s,max:r=y}){return V(n)&&V(s)?o=>o:({value:o,selection:i})=>{const l=I(o,e,t);if(2!==l.length||l.some(p=>!B(p,e)))return{value:o,selection:i};const[u,c]=l.map(p=>k(P(p,e))),a=W(u,Object.assign(Object.assign({},n),{day:(null==n?void 0:n.day)&&n.day-1})),g=V(s)?r:W(u,Object.assign(Object.assign({},s),{day:(null==s?void 0:s.day)&&s.day-1})),f=T(c,a,r);return{selection:i,value:l[0]+t+b(M(f>g?g:f),e)}}}const x=`\xa0${w}\xa0`;function ge({mode:e,separator:t=".",min:n,max:s,minLength:r,maxLength:o}){const i=e.split("/").join(t),l=Array.from(i).map(u=>u===t?u:/\d/);return{mask:[...l,...x,...l],overwriteMode:"replace",preprocessor:(0,S.Zu)(({elementState:e},t)=>{const{value:n,selection:s}=e;if(!n||function(e,[t,n]){return n===e.length}(n,s))return{elementState:e};const[r,o]=s,i=n.slice(r,o).replace(/\d/g,"0"),l=n.slice(0,r)+i+n.slice(o);return"validation"===t||"insert"===t&&r===o?{elementState:{selection:s,value:l}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[o,o],value:l}}},K({dateModeTemplate:i,dateSegmentsSeparator:t,datesSeparator:x})),postprocessor:(0,S.Zu)(z({min:n,max:s,dateModeTemplate:i,datesSeparator:x,dateSegmentSeparator:t}),ae({dateModeTemplate:i,minLength:r,maxLength:o,max:s,datesSeparator:x}))}}function J(e){return R(Object.entries(e).map(([t,n])=>[t,`${n}`.padEnd(L[t],"0")]))}function Q(e){const t=e.replace(/\D+/g,""),n={hours:t.slice(0,2),minutes:t.slice(2,4),seconds:t.slice(4,6),milliseconds:t.slice(6,9)};return R(Object.entries(n).filter(([s,r])=>Boolean(r)))}function q({hours:e="",minutes:t="",seconds:n="",milliseconds:s=""}){return`${e}${t&&`:${t}`}${n&&`:${n}`}${s&&`.${s}`}`}function ee({timeString:e,paddedMaxValues:t,offset:n,selection:[s,r]}){const o=Q(e),i=Object.entries(o),l={};let u=0;for(const[g,f]of i){const d=q(l),p=t[g],D=n+d.length+(d.length&&1)+L[g];if(D>=s&&D<=r&&Number(f)>Number(p))return{validatedTimeString:"",updatedTimeSelection:[s,r]};const{validatedSegmentValue:E,prefixedZeroesCount:_}=O(f,`${p}`);u+=_,l[g]=E}const c=q(l),a=c.length-e.length;return{validatedTimeString:c,updatedTimeSelection:[s+u+a,r+u+a]}}function te(e,t){const n=e.includes(m);return[e.slice(0,t.length),e.slice(n?t.length+m.length:t.length)]}function fe({dateModeTemplate:e,timeMode:t,min:n=H,max:s=y}){return({value:r,selection:o})=>{const[i,l]=te(r,e),u=P(i,e),c=Q(l);if(!function(e,t,n){return e.length>=t.length+n.length+m.length&&e.split(m)[0].split(/\D/).every(s=>!s.match(/^0+$/))}(r,e,t)){const d=X(u,e),p=b(Object.assign(Object.assign({},d),c),e,t);return{selection:o,value:p+r.slice(p.length)}}return{selection:o,value:b(M(T(k(u,c),n,s)),e,t)}}}function pe({dateModeTemplate:e,dateSegmentsSeparator:t}){return({elementState:n,data:s})=>{const{value:r,selection:o}=n;if(s===t)return{elementState:n,data:o[0]===r.length?s:""};if(ie.includes(s))return{elementState:n,data:m};const i=s.replace(new RegExp(`[^\\d\\${t}]`,"g"),"");if(!i)return{elementState:n,data:""};const[l,u]=o;let c=u+s.length;const a=r.slice(0,l)+i+r.slice(c),[g,f]=te(a,e);let d="";const p=a.includes(m),{validatedDateString:v,updatedSelection:D}=Y({dateString:g,dateModeTemplate:e,offset:0,selection:[l,c]});if(g&&!v)return{elementState:n,data:""};c=D[1],d+=v;const h=J(Z),{validatedTimeString:E,updatedTimeSelection:_}=ee({timeString:f,paddedMaxValues:h,offset:d.length+m.length,selection:[l,c]});if(f&&!E)return{elementState:n,data:""};c=_[1],d+=p?m+E:E;const se=d.slice(l,c);return{elementState:{selection:o,value:d.slice(0,l)+se.split(t).map(Ne=>"0".repeat(Ne.length)).join(t)+d.slice(c)},data:se}}}function De({dateMode:e,timeMode:t,dateSeparator:n=".",min:s,max:r}){const o=e.split("/").join(n);return{mask:[...Array.from(o).map(i=>i===n?i:/\d/),...m.split(""),...Array.from(t).map(i=>G.includes(i)?i:/\d/)],overwriteMode:"replace",preprocessor:(0,S.Zu)(({elementState:e},t)=>{const{value:n,selection:s}=e;if(!n||function(e,[t,n]){return n===e.length}(n,s))return{elementState:e};const[r,o]=s,i=n.slice(r,o).replace(/\d/g,"0"),l=n.slice(0,r)+i+n.slice(o);return"validation"===t||"insert"===t&&r===o?{elementState:{selection:s,value:l}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[o,o],value:l}}},pe({dateModeTemplate:o,dateSegmentsSeparator:n})),postprocessor:fe({min:s,max:r,dateModeTemplate:o,timeMode:t})}}function ve({decimalSeparator:e,precision:t,decimalZeroPadding:n}){return t<=0||!n?s=>s:({value:s,selection:r})=>{const[o,i=""]=s.split(e);return s.includes(e)||o?{value:o+e+i.padEnd(t,"0"),selection:r}:{value:s,selection:r}}}function me(e){return({value:t,selection:n})=>{const[s,r]=n,o=t.includes(e),[i,l=""]=t.split(e),u=i.replace(/^0+/,"0"),c=u.length>1&&u.startsWith("0")?u.slice(1):u,a=i.length-c.length;return{value:c+(o?e:"")+l,selection:[Math.max(s-a,0),Math.max(r-a,0)]}}}function he({decimalSeparator:e,isNegativeAllowed:t,precision:n,thousandSeparator:s}){const o=t?"\\\u2212?":"",i=s?`[\\d\\${s}]*`:"[\\d]*";return n>0?new RegExp(`^${o}${i}(\\${e}\\d{0,${n}})?$`):new RegExp(`^${o}${i}$`)}function Ee(e,t){return","===e||"."===e?[".",",","\u0431","\u044e"].filter(n=>n!==t&&n!==e):[]}function $e({max:e,decimalSeparator:t}){return({value:n,selection:s})=>{if(function(e,t="."){const n=e.match(new RegExp(`^[\u2212\\${A}${w}${C}]`));return Number((n?A:"")+e.replace(new RegExp(`[^\\d\\${t}]`,"g"),"").replace(t,"."))}(n,t)>e){const r=`${e}`.replace(".",t);return{value:r,selection:[r.length,r.length]}}return{value:n,selection:s}}}function be({decimalSeparator:e,precision:t}){const n=new RegExp(`^\\D*\\${e}`);return({elementState:s,data:r})=>{const{value:o,selection:i}=s,[l]=i;return t<=0||o.includes(e)||!r.match(n)?{elementState:s,data:r}:{elementState:s,data:o.slice(0,l)?r:`0${r}`}}}function ne(e,t){const n=new RegExp(`[${t.join("")}]`,"gi");return({elementState:s,data:r})=>{const{value:o,selection:i}=s;return{elementState:{selection:i,value:o.replace(n,e)},data:r.replace(n,e)}}}function _e({decimalSeparator:e,thousandSeparator:t,decimalZeroPadding:n}){return({elementState:s,data:r},o)=>{const{value:i,selection:l}=s,[u,c]=l,a=i.slice(u,c);return"deleteBackward"!==o&&"deleteForward"!==o||!(n?[e,t]:[t]).includes(a)?{elementState:s,data:r}:{elementState:{value:i,selection:"deleteForward"===o?[c,c]:[u,u]},data:r}}}function we({thousandSeparator:e,decimalSeparator:t}){return e?({value:n,selection:s})=>{const[r,o=""]=n.split(t),[i,l]=s;let[u,c]=s;const a=Array.from(r.replace(new RegExp("^\\\u2212"),"")).reduceRight((g,f,d)=>{const p=g.length&&(g.length+1)%4==0;return f===e&&p?f+g:f!==e||p?p?(d<=i&&u++,d<=l&&c++,f+e+g):f+g:(d<=i&&u--,d<=l&&c--,g)},"");return{value:(n.startsWith($)?$:"")+a+(n.includes(t)?t:"")+o,selection:[u,c]}}:n=>n}function Ae(e,t){if(e>0)return s=>s;const n=new RegExp(`\\${t}.*$`,"g");return({elementState:s,data:r})=>{const{value:o,selection:i}=s,[l,u]=i,c=o.replace(n,"");return{elementState:{selection:[Math.min(l,c.length),Math.min(u,c.length)],value:c},data:r.replace(n,"")}}}function Re({max:e=Number.MAX_SAFE_INTEGER,isNegativeAllowed:t=!0,precision:n=0,thousandSeparator:s="\xa0",decimalSeparator:r=".",decimalPseudoSeparators:o=Ee(r,s),decimalZeroPadding:i=!1}={}){const l=[A,w,C].filter(u=>u!==s&&u!==r);return{mask:he({decimalSeparator:r,precision:n,thousandSeparator:s,isNegativeAllowed:t}),preprocessor:(0,S.Zu)(ne($,l),ne(r,o),be({decimalSeparator:r,precision:n}),_e({decimalSeparator:r,decimalZeroPadding:i,thousandSeparator:s}),Ae(n,r)),postprocessor:(0,S.Zu)(me(r),$e({decimalSeparator:r,max:e}),we({decimalSeparator:r,thousandSeparator:s}),ve({decimalSeparator:r,decimalZeroPadding:i,precision:n})),overwriteMode:i?({value:u,selection:[c]})=>c<=u.indexOf(r)?"shift":"replace":"shift"}}function Pe(e){const t=J(e);return({elementState:n,data:s})=>{const r=s.replace(/\D+/g,"");if(!r)return{elementState:n,data:""};const{value:o,selection:i}=n,[l,u]=i;let c=u+r.length;const a=o.slice(0,l)+r+o.slice(c),{validatedTimeString:g,updatedTimeSelection:f}=ee({timeString:a,paddedMaxValues:t,offset:0,selection:[l,c]});if(a&&!g)return{elementState:n,data:""};c=f[1];const d=g.slice(l,c);return{elementState:{selection:i,value:g.slice(0,l)+"0".repeat(d.length)+g.slice(c)},data:d}}}function Oe({mode:e,timeSegmentMaxValues:t={}}){const n=Object.assign(Object.assign({},Z),t);return{mask:Array.from(e).map(s=>G.includes(s)?s:/\d/),preprocessor:(0,S.Zu)(({elementState:e},t)=>{const{value:n,selection:s}=e;if(!n||function(e,[t,n]){return n===e.length}(n,s))return{elementState:e};const[r,o]=s,i=n.slice(r,o).replace(/\d/g,"0"),l=n.slice(0,r)+i+n.slice(o);return"validation"===t||"insert"===t&&r===o?{elementState:{selection:s,value:l}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[o,o],value:l}}},Pe(n)),overwriteMode:"replace"}}}}]);