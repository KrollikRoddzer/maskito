"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1623],{41623:function(e,t,n){n.r(t),n.d(t,{CypressDocPageModule:function(){return Z}});var a=n(12057),s=n(87862),r=n(2586),i=n(52494),o=n(70997),c=n(44427),u=n(95974),l=n(21673),p=n(74788),d=n(84800),m=n(64762),f=n(47258);let g=(()=>{class e{constructor(){this.value={number:"",name:""},this.cardMask={mask:[...Array(4).fill(/\d/)," ",...Array(4).fill(/\d/)," ",...Array(4).fill(/\d/)," ",...Array(4).fill(/\d/)]},this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessors:[({value:e,selection:t})=>({value:e.toUpperCase(),selection:t})]},this.cardPredicate=e=>e.querySelectorAll("input")[0],this.namePredicate=e=>e.querySelectorAll("input")[1],this.asyncPredicate=e=>(0,m.mG)(this,void 0,void 0,function*(){return Promise.resolve(e.querySelectorAll("input")[0])})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["test-doc-example-1"]],decls:9,vars:7,consts:[["tuiGroup","",3,"maskito","maskitoElement"],[3,"ngModel","ngModelChange"],["card",""],["id","async-predicate","tuiGroup","",3,"maskito","maskitoElement"]],template:function(e,t){if(1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"tui-input",1,2),p.NdJ("ngModelChange",function(e){return t.value.number=e}),p._uU(3," Card number "),p.qZA(),p.TgZ(4,"tui-input",1),p.NdJ("ngModelChange",function(e){return t.value.name=e}),p._uU(5,"Name"),p.qZA(),p.qZA(),p.TgZ(6,"div",3),p.TgZ(7,"tui-input",1),p.NdJ("ngModelChange",function(e){return t.value.number=e}),p._uU(8,"Card number"),p.qZA(),p.qZA()),2&e){const e=p.MAs(2);p.Q6J("maskito",e.focused?t.cardMask:t.nameMask)("maskitoElement",e.focused?t.cardPredicate:t.namePredicate),p.xp6(1),p.Q6J("ngModel",t.value.number),p.xp6(3),p.Q6J("ngModel",t.value.name),p.xp6(2),p.Q6J("maskito",t.cardMask)("maskitoElement",t.asyncPredicate),p.xp6(1),p.Q6J("ngModel",t.value.number)}},directives:[u.gZ,f.r,l.K3,l.wU,s.JJ,s.On],encapsulation:2,changeDetection:0}),e})();var k=n(83281),h=n(49510);let v=(()=>{class e{constructor(){this.numberMask=(0,k.f8)({thousandSeparator:" "}),this.hexColorMask={mask:/^[A-F\d]*$/gi,overwriteMode:"replace",postprocessors:[({value:e,selection:t})=>({selection:t,value:e.toUpperCase()})]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["test-doc-example-2"]],decls:2,vars:2,consts:[["maxlength","3",3,"maskito"],["maxlength","6",3,"maskito"]],template:function(e,t){1&e&&(p._UZ(0,"input",0),p._UZ(1,"input",1)),2&e&&(p.Q6J("maskito",t.numberMask),p.xp6(1),p.Q6J("maskito",t.hexColorMask))},directives:[h.F,f.r],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.numberMask=(0,k.f8)({prefix:"$ ",postfix:" per day"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["test-doc-example-3"]],decls:1,vars:1,consts:[["value","$ 100 per day",3,"maskito"]],template:function(e,t){1&e&&p._UZ(0,"input",0),2&e&&p.Q6J("maskito",t.numberMask)},directives:[h.F,f.r],encapsulation:2,changeDetection:0}),e})();function x(e,t){1&e&&(p.TgZ(0,"div",2),p._UZ(1,"test-doc-example-1",3),p._UZ(2,"test-doc-example-2",4),p._UZ(3,"test-doc-example-3",5),p.qZA())}let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["cypress-doc-page"]],decls:2,vars:0,consts:[["header","Cypress"],["pageTab","Tests"],[1,"tests-wrapper"],["id","predicate"],["id","maxlength"],["id","mirrored-prefix-postfix"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,x,4,0,"ng-template",1),p.qZA())},directives:[d.qo,d.nj,g,v,M],styles:[".tests-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:3rem;gap:3rem}"],changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[a.ez,s.u5,i.U5,l.Qf,u.n6,o.fV,r.Bz.forChild((0,c.Ve)(y))]]}),e})()}}]);