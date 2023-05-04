"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[3684],{23684:function(e,t,o){o.r(t),o.d(t,{PrefixDocModule:function(){return y}});var s=o(12057),n=o(23738),r=o(55358),i=o(42905),a=o(70997),c=o(44427),p=o(82847),u=o(60885),l=o(21673),d=o(14707),m=o(74788),h=o(75453),f={mask:({value:e})=>{const t=e.replace(/\D/g,"").length;return["$",...new Array(t||1).fill(/\d/)]}},g=o(81620),x=o(49510),Z=o(47258);let k=(()=>{class e{constructor(){this.maskitoOptions=f,this.value=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["prefix-doc-example-1"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","tel",3,"maskito"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-input",0),m.NdJ("ngModelChange",function(e){return t.value=e}),m._uU(1," Enter price "),m._UZ(2,"input",1),m.qZA()),2&e&&(m.Udp("max-width",20,"rem"),m.Q6J("ngModel",t.value),m.xp6(2),m.Q6J("maskito",t.maskitoOptions))},directives:[l.K3,l.wU,n.JJ,n.On,g.MB,x.F,Z.r],encapsulation:2,changeDetection:0}),e})();var A={mask:/^\$?\d*$/,postprocessor:(0,o(81929).jX)("$")};let v=(()=>{class e{constructor(){this.maskitoOptions=A,this.value=""}onFocus(){this.value||(this.value="$")}onBlur(){"$"===this.value&&(this.value="")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["prefix-doc-example-2"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","tel",3,"maskito","focus","blur"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-input",0),m.NdJ("ngModelChange",function(e){return t.value=e}),m._uU(1," Enter price "),m.TgZ(2,"input",1),m.NdJ("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),m.qZA(),m.qZA()),2&e&&(m.Udp("max-width",20,"rem"),m.Q6J("ngModel",t.value),m.xp6(2),m.Q6J("maskito",t.maskitoOptions))},directives:[l.K3,l.wU,n.JJ,n.On,g.MB,x.F,Z.r],encapsulation:2,changeDetection:0}),e})();function w(e,t){if(1&e&&(m._uU(0," This example demonstrates how to create prefix via dynamic "),m.TgZ(1,"strong"),m.TgZ(2,"a",7),m._uU(3," \xa0pattern\xa0mask\xa0expression "),m.qZA(),m.qZA(),m._uU(4," . Dollar symbol is a fixed character, which will be automatically added when user forgets to type it or deleted when user erase all digits. ")),2&e){const e=m.oxw();m.xp6(2),m.Q6J("routerLink",e.maskExpressionDocPage)}}function U(e,t){if(1&e&&(m.TgZ(0,"p",1),m._uU(1," This example demonstrates how to create prefix via "),m.TgZ(2,"strong"),m.TgZ(3,"a",7),m._uU(4," postprocessor "),m.qZA(),m.qZA(),m._uU(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),m.TgZ(6,"code"),m._uU(7,"maskitoPrefixPostprocessorGenerator"),m.qZA(),m._uU(8," or create your own. "),m.qZA(),m.TgZ(9,"tui-notification",8),m._uU(10," Don't forget that "),m.TgZ(11,"code"),m._uU(12,"mask"),m.qZA(),m._uU(13," property should be compatible with a new prefix! "),m.qZA()),2&e){const e=m.oxw();m.xp6(3),m.Q6J("routerLink",e.processorsDocPage)}}let T=(()=>{class e{constructor(){this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.patternMaskApproachExample1={[d.C.MaskitoOptions]:o.e(2830).then(o.t.bind(o,4774,17))},this.postprocessorApproachExample2={[d.C.MaskitoOptions]:o.e(9328).then(o.t.bind(o,9328,17))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["prefix-doc"]],decls:14,vars:4,consts:[["header","With prefix","package","Recipes"],[1,"tui-space_top-0"],[1,"tui-space_bottom-0"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],["status","warning"]],template:function(e,t){if(1&e&&(m.TgZ(0,"tui-doc-page",0),m.TgZ(1,"section"),m.TgZ(2,"p",1),m._uU(3," Use prefixes to indicate things like currencies, area / phone country codes and etc. "),m.qZA(),m.TgZ(4,"p",2),m._uU(5," There are two approaches to add prefix for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),m.qZA(),m.qZA(),m.TgZ(6,"tui-doc-example",3),m.YNc(7,w,5,1,"ng-template",null,4,m.W1O),m._UZ(9,"prefix-doc-example-1"),m.qZA(),m.TgZ(10,"tui-doc-example",5),m.YNc(11,U,14,1,"ng-template",null,6,m.W1O),m._UZ(13,"prefix-doc-example-2"),m.qZA(),m.qZA()),2&e){const e=m.MAs(8),o=m.MAs(12);m.xp6(6),m.Q6J("content",t.patternMaskApproachExample1)("description",e),m.xp6(4),m.Q6J("content",t.postprocessorApproachExample2)("description",o)}},directives:[h.qo,h.f2,k,v,p.V,r.yS,u.Ls],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[s.ez,n.u5,i.U5,a.fV,l.Qf,p.j,u.Hi,r.Bz.forChild((0,c.Ve)(T))]]}),e})()}}]);