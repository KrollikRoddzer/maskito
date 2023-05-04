"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2577],{32577:function(e,t,o){o.r(t),o.d(t,{AngularDocPageModule:function(){return y}});var i=o(12057),n=o(23738),a=o(55358),s=o(42905),c=o(70997),u=o(44427),r=o(82847),l=o(60885),p=o(21673),d=o(12963),m=o(74788),g=o(75453),Z=o(47258);let h=(()=>{class e{constructor(){this.value="",this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessor:({value:e,selection:t})=>({value:e.toUpperCase(),selection:t})},this.predicate=e=>e.querySelector("tui-input input")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["nested-doc-example-1"]],decls:2,vars:2,consts:[[3,"maskito","ngModel","ngModelChange"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-input",0),m.NdJ("ngModelChange",function(e){return t.value=e}),m._uU(1," Name on the card\n"),m.qZA()),2&e&&m.Q6J("maskito",t.nameMask)("ngModel",t.value)},directives:[p.K3,p.wU,Z.r,n.JJ,n.On],encapsulation:2,changeDetection:0}),e})(),f=(()=>{class e{constructor(){this.show=!1,this.value=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["nested-doc-example-2"]],decls:4,vars:3,consts:[[1,"tui-space_bottom-3",3,"ngModel","ngModelChange"],[3,"disabled","ngModel","ngModelChange"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-checkbox-labeled",0),m.NdJ("ngModelChange",function(e){return t.show=e}),m._uU(1," Add card holder name\n"),m.qZA(),m.TgZ(2,"tui-input",1),m.NdJ("ngModelChange",function(e){return t.value=e}),m._uU(3," Name on the card\n"),m.qZA()),2&e&&(m.Q6J("ngModel",t.show),m.xp6(2),m.Q6J("disabled",!t.show)("ngModel",t.value))},directives:[d.p,n.JJ,n.On,p.K3,p.wU],encapsulation:2,changeDetection:0}),e})();var _=o(81929),U=o(49510);let A=(()=>{class e{constructor(){this.control=new n.NI,this.maskito=(0,_.f8)({precision:2})}setValue(){this.control.setValue(12345.67)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["cva-doc-example-3"]],decls:3,vars:2,consts:[[3,"formControl","maskito"],[3,"click"]],template:function(e,t){1&e&&(m._UZ(0,"input",0),m.TgZ(1,"button",1),m.NdJ("click",function(){return t.setValue()}),m._uU(2,"Set 12345.67"),m.qZA()),2&e&&m.Q6J("formControl",t.control)("maskito",t.maskito)},directives:[n.Fj,U.F,n.JJ,n.oH,Z.r],encapsulation:2,changeDetection:0}),e})();var v=o(40635);let T=(()=>{class e{constructor(){this.value=12345.67,this.options=(0,_.f8)({precision:2})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["pipe-doc-example-4"]],decls:2,vars:4,template:function(e,t){1&e&&(m._uU(0),m.ALo(1,"maskito")),2&e&&m.hij("Balance: $",m.xi3(1,1,t.value,t.options),"\n")},pipes:[v.c],encapsulation:2,changeDetection:0}),e})();function q(e,t){if(1&e&&(m.TgZ(0,"code"),m._uU(1,"@maskito/angular"),m.qZA(),m._uU(2," is a light-weighted library to use "),m.TgZ(3,"strong"),m._uU(4,"Maskito"),m.qZA(),m._uU(5," in an Angular-way. "),m.TgZ(6,"tui-notification",3),m.TgZ(7,"strong"),m._uU(8,"Prerequisites"),m.qZA(),m.TgZ(9,"p",4),m._uU(10," To get the most out of this guide, you should review the topic "),m.TgZ(11,"a",5),m._uU(12,' "Core\xa0Concepts" '),m.qZA(),m._uU(13," first. "),m.qZA(),m.qZA(),m.TgZ(14,"section",6),m.TgZ(15,"h2"),m._uU(16,"Write less code"),m.qZA(),m.TgZ(17,"ul",7),m.TgZ(18,"li",8),m.TgZ(19,"strong"),m._uU(20,"No need to query element from DOM."),m.qZA(),m._uU(21," Just pass all required options to "),m.TgZ(22,"code"),m._uU(23,"[maskito]"),m.qZA(),m._uU(24," directive. "),m.qZA(),m.TgZ(25,"li",8),m.TgZ(26,"strong"),m._uU(27,"No need to worry about clean-ups."),m.qZA(),m._uU(28," All created event listeners are automatically removed after element is detached from DOM. "),m.qZA(),m.qZA(),m.qZA(),m.TgZ(29,"section",6),m.TgZ(30,"h2"),m._uU(31,"Basic directive approach"),m.qZA(),m.TgZ(32,"p"),m._uU(33,"Use it when you have direct access to native input element."),m.qZA(),m._UZ(34,"tui-doc-code",9),m.qZA(),m.TgZ(35,"section",6),m.TgZ(36,"h2"),m._uU(37,"Nested input element"),m.qZA(),m.TgZ(38,"p"),m._uU(39," Pass a predicate to "),m.TgZ(40,"strong"),m._uU(41,"maskito"),m.qZA(),m._uU(42," to find input element for you, if you do not have a direct access to it. "),m.qZA(),m.TgZ(43,"tui-notification"),m._uU(44," By default "),m.TgZ(45,"strong"),m._uU(46,"maskito"),m.qZA(),m._uU(47," will try to find input/textarea by querying its host: "),m.TgZ(48,"code"),m._uU(49,"host.querySelector('input,textarea')"),m.qZA(),m._uU(50," so that might be sufficient. Use custom predicate if you need custom logic. "),m.qZA(),m._UZ(51,"tui-doc-code",9),m.qZA(),m.TgZ(52,"tui-doc-example",10),m.TgZ(53,"tui-notification",11),m._uU(54," Default behavior is enough for "),m.TgZ(55,"a",12),m._uU(56," Taiga UI "),m.qZA(),m._uU(57," inputs "),m.qZA(),m._UZ(58,"nested-doc-example-1",13,14),m.TgZ(60,"tui-notification",15),m._uU(61," Custom predicate is required if target input is not the first on in the DOM "),m.qZA(),m._UZ(62,"nested-doc-example-2",16),m.qZA(),m.TgZ(63,"tui-doc-example",17),m._UZ(64,"cva-doc-example-3"),m.qZA(),m.TgZ(65,"tui-doc-example",18),m._UZ(66,"pipe-doc-example-4"),m.qZA()),2&e){const e=m.MAs(59),t=m.oxw();m.xp6(11),m.Q6J("routerLink",t.coreConceptsOverviewDocPage),m.xp6(23),m.Q6J("code",t.basicDirectiveApproach),m.xp6(17),m.Q6J("code",t.customInputExample),m.xp6(1),m.Q6J("content",t.nestedInputExample),m.xp6(10),m.Q6J("maskito",e.nameMask)("maskitoElement",e.predicate),m.xp6(1),m.Q6J("content",t.cvaExample),m.xp6(2),m.Q6J("content",t.pipeExample)}}function x(e,t){if(1&e&&(m.TgZ(0,"section"),m.TgZ(1,"ol",19),m.TgZ(2,"li",8),m._uU(3," Install libraries "),m._UZ(4,"tui-doc-code",20),m.qZA(),m.TgZ(5,"li",21),m._uU(6," Import "),m.TgZ(7,"code"),m._uU(8,"MaskitoModule"),m.qZA(),m._uU(9," to your module "),m._UZ(10,"tui-doc-code",22),m.qZA(),m.qZA(),m.qZA()),2&e){const e=m.oxw();m.xp6(10),m.Q6J("code",e.importMaskitoModuleExample)}}let k=(()=>{class e{constructor(){this.coreConceptsOverviewDocPage="/core-concepts/overview",this.importMaskitoModuleExample=o.e(5722).then(o.t.bind(o,75722,17)),this.basicDirectiveApproach=o.e(2691).then(o.t.bind(o,2691,17)),this.customInputExample=o.e(4158).then(o.t.bind(o,4158,17)),this.nestedInputExample={TypeScript:o.e(7003).then(o.t.bind(o,67003,17)),Default:o.e(4474).then(o.t.bind(o,24474,17)),Custom:o.e(8507).then(o.t.bind(o,18507,17))},this.cvaExample={TypeScript:o.e(3228).then(o.t.bind(o,53228,17)),HTML:o.e(5684).then(o.t.bind(o,55684,17))},this.pipeExample={TypeScript:o.e(637).then(o.t.bind(o,637,17)),HTML:o.e(7011).then(o.t.bind(o,57011,17))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Xpm({type:e,selectors:[["angular-doc-page"]],decls:3,vars:0,consts:[["header","Angular","path","angular"],["pageTab","Overview"],["pageTab","Setup"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],[1,"tui-list"],[1,"tui-list__item"],["filename","your.component.ts",3,"code"],["heading","Custom input","description","See querying nested input in action",3,"content"],[1,"example","tui-space_bottom-3"],["tuiLink","","href","https://github.com/Tinkoff/taiga-ui"],[1,"example"],["example",""],[1,"example","tui-space_vertical-3"],[1,"example",3,"maskito","maskitoElement"],["heading","Form controls","description","When directly on native input/textarea tag, maskito directive formats value set programmatically with Angular forms.",3,"content"],["heading","Pipe","description","Format arbitrary value with the same options",3,"content"],[1,"tui-list","tui-list_ordered"],["code","npm install @maskito/{core,angular}","filename","/your/project/path>"],[1,"tui-list__item","tui-space_top-8"],["filename","your.module.ts",3,"code"]],template:function(e,t){1&e&&(m.TgZ(0,"tui-doc-page",0),m.YNc(1,q,67,8,"ng-template",1),m.YNc(2,x,11,1,"ng-template",2),m.qZA())},directives:[g.qo,g.nj,l.Ls,r.V,a.yS,g.c0,g.f2,h,f,Z.r,A,T],styles:[".example[_ngcontent-%COMP%]{display:block;width:20rem}"],changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[i.ez,n.u5,n.UX,s.U5,p.Qf,r.j,l.Hi,d.s,c.fV,a.Bz.forChild((0,u.Ve)(k))]]}),e})()}}]);