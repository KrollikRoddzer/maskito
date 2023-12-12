"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[904],{6720:(T,d,e)=>{e.d(d,{TuiAddonDocModule:()=>r});var m=e(4537),a=e(3445);let r=(()=>{class c{}return c.\u0275fac=function(x){return new(x||c)},c.\u0275mod=m.oAB({type:c}),c.\u0275inj=m.cJS({imports:[a.JF,a.mG,a.Lx,a.Lq,a.u4]}),c})()},904:(T,d,e)=>{e.r(d),e.d(d,{PostfixDocModule:()=>O});var m=e(8692),a=e(9900),r=e(3178),h=e(6720),c=e(3056),f=e(2847),x=e(885),u=e(3077),D=e(4707),o=e(4537),v=e(3445);const A={mask:({value:t})=>{const s=Array.from(t.replace(/%/g,"")).map(()=>/\d/);return s.length?[...s,"%"]:[/\d/]}};var M=e(7258),P=e(5640);let E=(()=>{class t{constructor(){this.maskitoOptions=A,this.value=""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["postfix-doc-example-1"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito"]],template:function(n,i){1&n&&(o.TgZ(0,"tui-input",0),o.NdJ("ngModelChange",function(l){return i.value=l}),o._uU(1," Enter percentage amount "),o._UZ(2,"input",1),o.qZA()),2&n&&(o.Udp("max-width",20,"rem"),o.Q6J("ngModel",i.value),o.xp6(2),o.Q6J("maskito",i.maskitoOptions))},dependencies:[a.JJ,a.On,M.r,u.K3,u.wU,P.MB],encapsulation:2,changeDetection:0}),t})();var g=e(8225);const y={mask:/^\$?\d*(\.0{0,2})?$/,postprocessors:[(0,g.jX)("$"),(0,g.A7)(".00")],plugins:[(0,g.nQ)(t=>[1,t.length-3])]},Z=["inputRef"];let U=(()=>{class t{constructor(){this.maskitoOptions=y,this.value=""}onFocus(){this.value||(this.value="$.00")}onBlur(){"$.00"===this.value&&(this.value="")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["postfix-doc-example-2"]],viewQuery:function(n,i){if(1&n&&o.Gf(Z,5,o.SBq),2&n){let p;o.iGM(p=o.CRH())&&(i.inputElement=p.first)}},decls:4,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito","blur","focus"],["inputRef",""]],template:function(n,i){1&n&&(o.TgZ(0,"tui-input",0),o.NdJ("ngModelChange",function(l){return i.value=l}),o._uU(1," Enter price "),o.TgZ(2,"input",1,2),o.NdJ("blur",function(){return i.onBlur()})("focus",function(){return i.onFocus()}),o.qZA()()),2&n&&(o.Udp("max-width",20,"rem"),o.Q6J("ngModel",i.value),o.xp6(2),o.Q6J("maskito",i.maskitoOptions))},dependencies:[a.JJ,a.On,M.r,u.K3,u.wU,P.MB],encapsulation:2,changeDetection:0}),t})();function C(t,s){if(1&t&&(o._uU(0," This example demonstrates how to create postfix via dynamic "),o.TgZ(1,"strong")(2,"a",5),o._uU(3," pattern\xa0mask\xa0expression "),o.qZA()(),o._uU(4," . Percent symbol is a trailing fixed character, which will be automatically added when user enters the first digit. ")),2&t){const n=o.oxw();o.xp6(2),o.Q6J("routerLink",n.maskExpressionDocPage)}}function J(t,s){if(1&t&&(o.TgZ(0,"p",6),o._uU(1," This example demonstrates how to create postfix via "),o.TgZ(2,"strong")(3,"a",5),o._uU(4," postprocessor "),o.qZA()(),o._uU(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),o.TgZ(6,"code"),o._uU(7,"maskitoPostfixPostprocessorGenerator"),o.qZA(),o._uU(8," or create your own. "),o.qZA(),o.TgZ(9,"tui-notification",7),o._uU(10," Don't forget that "),o.TgZ(11,"code"),o._uU(12,"mask"),o.qZA(),o._uU(13," property should be compatible with a new prefix / postfix! "),o.qZA()),2&t){const n=o.oxw();o.xp6(3),o.Q6J("routerLink",n.processorsDocPage)}}let k=(()=>{class t{constructor(){this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.patternMaskApproachExample1={[D.C.MaskitoOptions]:e.e(6988).then(e.t.bind(e,6988,17))},this.postprocessorApproachExample2={[D.C.MaskitoOptions]:e.e(1165).then(e.t.bind(e,1165,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["postfix-doc"]],decls:13,vars:4,consts:[["header","With postfix","package","Recipes"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],[1,"tui-space_top-0"],["status","warning"]],template:function(n,i){if(1&n&&(o.TgZ(0,"tui-doc-page",0),o._uU(1," There are two approaches to add "),o.TgZ(2,"strong"),o._uU(3,"postfix"),o.qZA(),o._uU(4," for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),o.TgZ(5,"tui-doc-example",1),o.YNc(6,C,5,1,"ng-template",null,2,o.W1O),o._UZ(8,"postfix-doc-example-1"),o.qZA(),o.TgZ(9,"tui-doc-example",3),o.YNc(10,J,14,1,"ng-template",null,4,o.W1O),o._UZ(12,"postfix-doc-example-2"),o.qZA()()),2&n){const p=o.MAs(7),l=o.MAs(11);o.xp6(5),o.Q6J("content",i.patternMaskApproachExample1)("description",p),o.xp6(4),o.Q6J("content",i.postprocessorApproachExample2)("description",l)}},dependencies:[v.qo,v.f2,f.V,x.L,r.rH,E,U],encapsulation:2,changeDetection:0}),t})(),O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[m.ez,a.u5,h.TuiAddonDocModule,u.Qf,f.j,x.H,r.Bz.forChild((0,c.Ve)(k))]}),t})()}}]);