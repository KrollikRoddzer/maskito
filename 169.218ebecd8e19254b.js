"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[169],{169:(H,y,r)=>{r.r(y),r.d(y,{CypressDocPageModule:()=>L});var d=r(8692),l=r(9900),Z=r(3178),J=r(997),j=r(2497),x=r(5974),f=r(1673),t=r(4537),T=r(9439),F=r(3402),h=r(8282),p=r(4555);let U=(()=>{var e;class n{transform(a){const s=(0,p.f8)({postfix:a,precision:2,thousandSeparator:" "});return{...s,plugins:[...s.plugins,(0,h.D2)()]}}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275pipe=t.Yjl({name:"calculateMask",type:e,pure:!0,standalone:!0}),n})(),D=(()=>{var e;class n{constructor(){this.value="1 year",this.pluralize={one:" year",few:" years",many:" years",other:" years"}}get parsedValue(){return(0,p.vZ)(this.value)}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-4"]],standalone:!0,features:[t.jDz],decls:3,vars:7,consts:[["placeholder","Enter number",3,"maskito","ngModel","ngModelChange"]],template:function(a,s){1&a&&(t.TgZ(0,"input",0),t.NdJ("ngModelChange",function(i){return s.value=i}),t.ALo(1,"calculateMask"),t.ALo(2,"i18nPlural"),t.qZA()),2&a&&t.Q6J("maskito",t.lcZ(1,2,t.xi3(2,4,s.parsedValue,s.pluralize)))("ngModel",s.value)},dependencies:[l.u5,l.Fj,l.JJ,l.On,d.Gx,F.ro,U],encapsulation:2,changeDetection:0}),n})();var Q=r(8239),m=r(7258);let S=(()=>{var e;class n{constructor(){this.value={number:"",name:""},this.cardMask={mask:[...new Array(4).fill(/\d/)," ",...new Array(4).fill(/\d/)," ",...new Array(4).fill(/\d/)," ",...new Array(4).fill(/\d/)]},this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessors:[({value:a,selection:s})=>({value:a.toUpperCase(),selection:s})]},this.cardPredicate=a=>a.querySelectorAll("input")[0],this.namePredicate=a=>a.querySelectorAll("input")[1],this.asyncPredicate=function(){var a=(0,Q.Z)(function*(s){return Promise.resolve(s.querySelectorAll("input")[0])});return function(s){return a.apply(this,arguments)}}()}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-1"]],decls:9,vars:7,consts:[["tuiGroup","",3,"maskito","maskitoElement"],[3,"ngModel","ngModelChange"],["card",""],["id","async-predicate","tuiGroup","",3,"maskito","maskitoElement"]],template:function(a,s){if(1&a&&(t.TgZ(0,"div",0)(1,"tui-input",1,2),t.NdJ("ngModelChange",function(i){return s.value.number=i}),t._uU(3," Card number "),t.qZA(),t.TgZ(4,"tui-input",1),t.NdJ("ngModelChange",function(i){return s.value.name=i}),t._uU(5,"Name"),t.qZA()(),t.TgZ(6,"div",3)(7,"tui-input",1),t.NdJ("ngModelChange",function(i){return s.value.number=i}),t._uU(8,"Card number"),t.qZA()()),2&a){const u=t.MAs(2);t.Q6J("maskito",u.focused?s.cardMask:s.nameMask)("maskitoElement",u.focused?s.cardPredicate:s.namePredicate),t.xp6(1),t.Q6J("ngModel",s.value.number),t.xp6(3),t.Q6J("ngModel",s.value.name),t.xp6(2),t.Q6J("maskito",s.cardMask)("maskitoElement",s.asyncPredicate),t.xp6(1),t.Q6J("ngModel",s.value.number)}},dependencies:[l.JJ,l.On,m.r,f.K3,f.wU,x.gZ],encapsulation:2,changeDetection:0}),n})();var g=r(9510);let X=(()=>{var e;class n{constructor(){this.numberMask=(0,p.f8)({thousandSeparator:" "}),this.hexColorMask={mask:/^[A-F\d]*$/gi,overwriteMode:"replace",postprocessors:[({value:a,selection:s})=>({selection:s,value:a.toUpperCase()})]}}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-2"]],decls:2,vars:2,consts:[["maxlength","3",3,"maskito"],["maxlength","6",3,"maskito"]],template:function(a,s){1&a&&t._UZ(0,"input",0)(1,"input",1),2&a&&(t.Q6J("maskito",s.numberMask),t.xp6(1),t.Q6J("maskito",s.hexColorMask))},dependencies:[m.r,g.X],encapsulation:2,changeDetection:0}),n})(),N=(()=>{var e;class n{constructor(){this.numberMask=(0,p.f8)({prefix:"$ ",postfix:" per day"})}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-3"]],decls:1,vars:1,consts:[["value","$ 100 per day",3,"maskito"]],template:function(a,s){1&a&&t._UZ(0,"input",0),2&a&&t.Q6J("maskito",s.numberMask)},dependencies:[m.r,g.X],encapsulation:2,changeDetection:0}),n})();var c=r(9537),R=r(4448),M=r(321),v=r(8139);const C=(0,p.rC)({mode:"HH:MM"}),E={...C,plugins:[...C.plugins,(0,h.D2)()]},P=e=>e.querySelector(".real-input"),z=e=>new Promise(n=>{setTimeout(()=>{n(P(e))},2e3)}),I=e=>new Promise(n=>{setTimeout(()=>n((e=>e.querySelector("input"))(e)),7e3)}),G=e=>new Promise(n=>{setTimeout(()=>n(P(e)),500)}),k={display:"none"},A=(0,v.forwardRef)((e,n)=>(0,c.jsxs)("div",{ref:n,children:[(0,c.jsx)("input",{style:k}),(0,c.jsx)("input",{className:"real-input",...e}),(0,c.jsx)("input",{style:k})]})),O=()=>{const[e,n]=(0,v.useState)(!1),o=(0,M.I)({options:E,elementPredicate:z}),a=(0,M.I)({options:E,elementPredicate:e?G:I});return(0,v.useEffect)(()=>{setTimeout(()=>{n(!0)},2e3)},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{ref:o,id:"async-predicate-2s-resolves",placeholder:"Async predicate (2s)"}),(0,c.jsx)(A,{ref:a,id:"race-condition-check",placeholder:"Race condition check"})]})};let V=(()=>{var e;class n{constructor(a,s){(0,d.NF)(s)&&(0,R.s)(a.nativeElement).render((0,c.jsx)(O,{}))}}return(e=n).\u0275fac=function(a){return new(a||e)(t.Y36(t.SBq),t.Y36(t.Lbi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-5"]],decls:0,vars:0,template:function(a,s){},encapsulation:2,changeDetection:0}),n})(),Y=(()=>{var e;class n{constructor(){this.numberMask=(0,p.f8)({prefix:"EUR "})}}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-6"]],decls:1,vars:1,consts:[["placeholder","Type 'E', 'U' or 'R' character","value","",3,"maskito"]],template:function(a,s){1&a&&t._UZ(0,"input",0),2&a&&t.Q6J("maskito",s.numberMask)},dependencies:[m.r,g.X],encapsulation:2,changeDetection:0}),n})();function $(e,n){1&e&&(t.TgZ(0,"div",2),t._UZ(1,"test-doc-example-1",3)(2,"test-doc-example-2",4)(3,"test-doc-example-3",5)(4,"test-doc-example-4",6)(5,"test-doc-example-5",7)(6,"test-doc-example-6",8),t.qZA())}let B=(()=>{var e;class n{}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cypress-doc-page"]],decls:2,vars:0,consts:[["header","Cypress"],["pageTab","Tests"],[1,"tests-wrapper"],["id","predicate"],["id","maxlength"],["id","mirrored-prefix-postfix"],["id","runtime-postfix-changes"],["id","react-async-predicate"],["id","multi-character-prefix"]],template:function(a,s){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,$,7,0,"ng-template",1),t.qZA())},dependencies:[T.qo,T.nj,D,S,X,N,V,Y],styles:[".tests-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3rem}"],changeDetection:0}),n})(),L=(()=>{var e;class n{}return(e=n).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,l.u5,f.Qf,x.n6,J.TuiAddonDocModule,Z.Bz.forChild((0,j.Ve)(B)),D]}),n})()}}]);