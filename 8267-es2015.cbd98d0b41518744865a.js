"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[8267],{48267:function(t,e,n){n.r(e),n.d(e,{DateRangeMaskDocModule:function(){return Y}});var o=n(12057),a=n(87862),i=n(2586),r=n(52494),u=n(70997),m=n(44427),d=n(90022),l=n(82847),c=n(79588),s=n(21673),p=n(64762),g=n(14707),h=n(23559),y=n(33770),x=n(44358),f=n(74788),P=n(84800),C=(0,h.n9)({mode:"mm/dd/yyyy",separator:"/"}),M=n(94853),U=n(49510),T=n(47258);let Z=(()=>{class t{constructor(){this.usDateFormatter=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),this.value="09/20/2020\xa0\u2013\xa002/06/2023",this.filler="mm/dd/yyyy\xa0\u2013\xa0mm/dd/yyyy",this.mask=C}get hint(){return this.value.length<this.filler.length?"Complete the date range!":this.value.split("\xa0\u2013\xa0").map(t=>this.usDateFormatter.format(new Date(t))).join("\xa0\u2013\xa0")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["date-range-mask-doc-example-1"]],decls:3,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiHintContent","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(f.TgZ(0,"tui-input",0),f.NdJ("ngModelChange",function(t){return e.value=t}),f._uU(1," US format "),f._UZ(2,"input",1),f.qZA()),2&t&&(f.Udp("max-width",30,"rem"),f.Q6J("tuiTextfieldFiller",e.filler)("tuiHintContent",e.hint)("ngModel",e.value),f.xp6(2),f.Q6J("maskito",e.mask))},directives:[s.K3,s.wU,c.B7,c.kD,d.bZ,a.JJ,a.On,M.MB,U.F,T.r],encapsulation:2,changeDetection:0}),t})();var k=(0,h.n9)({mode:"dd/mm/yyyy",min:new Date("1711-11-19"),max:new Date("1765-04-15")});let V=(()=>{class t{constructor(){this.value="19.11.1711\xa0\u2013\xa015.04.1765",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=k}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["date-range-mask-doc-example-2"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(f.TgZ(0,"tui-input",0),f.NdJ("ngModelChange",function(t){return e.value=t}),f._UZ(1,"input",1),f.qZA()),2&t&&(f.Udp("max-width",30,"rem"),f.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",e.filler)("ngModel",e.value),f.xp6(1),f.Q6J("maskito",e.mask))},directives:[s.K3,s.wU,c.B7,c.xT,c.kD,a.JJ,a.On,M.MB,U.F,T.r],encapsulation:2,changeDetection:0}),t})();var w=(0,h.n9)({mode:"dd/mm/yyyy",minLength:{day:3},maxLength:{month:1}});let _=(()=>{class t{constructor(){this.value="01.01.2023\xa0\u2013\xa005.01.2023",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=w,this.hint="The right date must be at least 3 days after the left one.\nAlso, the difference between the dates must not exceed 1 month."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=f.Xpm({type:t,selectors:[["date-range-mask-doc-example-3"]],decls:2,vars:7,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(f.TgZ(0,"tui-input",0),f.NdJ("ngModelChange",function(t){return e.value=t}),f._UZ(1,"input",1),f.qZA()),2&t&&(f.Udp("max-width",30,"rem"),f.Q6J("tuiHintContent",e.hint)("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",e.filler)("ngModel",e.value),f.xp6(1),f.Q6J("maskito",e.mask))},directives:[s.K3,s.wU,c.B7,d.bZ,c.xT,c.kD,a.JJ,a.On,M.MB,U.F,T.r],encapsulation:2,changeDetection:0}),t})();function D(t,e){1&t&&(f._uU(0," Use "),f.TgZ(1,"code"),f._uU(2,"mode"),f.qZA(),f._uU(3," and "),f.TgZ(4,"code"),f._uU(5,"separator"),f.qZA(),f._uU(6," parameters to get a mask with a locale specific representation of dates. "))}function J(t,e){1&t&&(f._uU(0," Parameters "),f.TgZ(1,"code"),f._uU(2,"min"),f.qZA(),f._uU(3," and "),f.TgZ(4,"code"),f._uU(5,"max"),f.qZA(),f._uU(6," allow you to set the earliest and the latest available dates. They accept native "),f.TgZ(7,"a",8),f._uU(8," Date "),f.qZA(),f._uU(9," . "))}function O(t,e){1&t&&(f._uU(0," Use "),f.TgZ(1,"code"),f._uU(2,"minLength"),f.qZA(),f._uU(3," and "),f.TgZ(4,"code"),f._uU(5,"maxLength"),f.qZA(),f._uU(6," parameters to set minimal and maximal length of the date range. "))}function L(t,e){if(1&t&&(f._uU(0," Use "),f.TgZ(1,"code"),f._uU(2,"maskitoDateRangeOptionsGenerator"),f.qZA(),f._uU(3," to create a mask to input a range of dates. "),f.TgZ(4,"tui-doc-example",2),f.YNc(5,D,7,0,"ng-template",null,3,f.W1O),f._UZ(7,"date-range-mask-doc-example-1"),f.qZA(),f.TgZ(8,"tui-doc-example",4),f.YNc(9,J,10,0,"ng-template",null,5,f.W1O),f._UZ(11,"date-range-mask-doc-example-2"),f.qZA(),f.TgZ(12,"tui-doc-example",6),f.YNc(13,O,7,0,"ng-template",null,7,f.W1O),f._UZ(15,"date-range-mask-doc-example-3"),f.qZA()),2&t){const t=f.MAs(6),e=f.MAs(10),n=f.MAs(14),o=f.oxw();f.xp6(4),f.Q6J("content",o.dateLocalizationExample1)("description",t),f.xp6(4),f.Q6J("description",e)("content",o.minMaxExample2),f.xp6(4),f.Q6J("description",n)("content",o.minMaxLengthExample3)}}function N(t,e){if(1&t&&(f.TgZ(0,"tui-input",16),f._uU(1," Enter dates "),f._UZ(2,"input",17),f.qZA()),2&t){const t=f.oxw(2);f.Q6J("tuiTextfieldFiller",t.getPlaceholder(t.mode,t.separator))("formControl",t.apiPageControl),f.xp6(2),f.Q6J("maskito",t.maskitoOptions)}}function v(t,e){1&t&&f._uU(0," Date format mode ")}function A(t,e){1&t&&(f._uU(0," Separator "),f.TgZ(1,"p"),f.TgZ(2,"strong"),f._uU(3,"Default:"),f.qZA(),f.TgZ(4,"code"),f._uU(5,"."),f.qZA(),f._uU(6," (dot). "),f.qZA())}function b(t,e){1&t&&f._uU(0," Earliest date ")}function q(t,e){1&t&&f._uU(0," Latest date ")}function Q(t,e){1&t&&f._uU(0," Minimal length of the range ")}function F(t,e){1&t&&f._uU(0," Maximal length of the range ")}function S(t,e){if(1&t){const t=f.EpF();f.TgZ(0,"tui-doc-demo",9),f.YNc(1,N,3,3,"ng-template"),f.qZA(),f.TgZ(2,"tui-doc-documentation"),f.YNc(3,v,1,0,"ng-template",10),f.NdJ("documentationPropertyValueChange",function(e){return f.CHM(t),f.oxw().mode=e})("documentationPropertyValueChange",function(){return f.CHM(t),f.oxw().updateOptions()}),f.YNc(4,A,7,0,"ng-template",11),f.NdJ("documentationPropertyValueChange",function(e){return f.CHM(t),f.oxw().separator=e})("documentationPropertyValueChange",function(){return f.CHM(t),f.oxw().updateOptions()}),f.YNc(5,b,1,0,"ng-template",12),f.NdJ("documentationPropertyValueChange",function(e){return f.CHM(t),f.oxw().minStr=e})("documentationPropertyValueChange",function(){return f.CHM(t),f.oxw().updateDate()}),f.YNc(6,q,1,0,"ng-template",13),f.NdJ("documentationPropertyValueChange",function(e){return f.CHM(t),f.oxw().maxStr=e})("documentationPropertyValueChange",function(){return f.CHM(t),f.oxw().updateDate()}),f.YNc(7,Q,1,0,"ng-template",14),f.NdJ("documentationPropertyValueChange",function(e){return f.CHM(t),f.oxw().minLength=e})("documentationPropertyValueChange",function(){return f.CHM(t),f.oxw().updateOptions()}),f.YNc(8,F,1,0,"ng-template",15),f.NdJ("documentationPropertyValueChange",function(e){return f.CHM(t),f.oxw().maxLength=e})("documentationPropertyValueChange",function(){return f.CHM(t),f.oxw().updateOptions()}),f.qZA()}if(2&t){const t=f.oxw();f.Q6J("control",t.apiPageControl),f.xp6(3),f.Q6J("documentationPropertyValues",t.modeOptions)("documentationPropertyValue",t.mode),f.xp6(1),f.Q6J("documentationPropertyValue",t.separator),f.xp6(1),f.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.minStr),f.xp6(1),f.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.maxStr),f.xp6(1),f.Q6J("documentationPropertyValues",t.minLengthOptions)("documentationPropertyValue",t.minLength),f.xp6(1),f.Q6J("documentationPropertyValues",t.maxLengthOptions)("documentationPropertyValue",t.maxLength)}}class H{constructor(){this.dateLocalizationExample1={[g.C.MaskitoOptions]:n.e(2049).then(n.t.bind(n,82049,17))},this.minMaxExample2={[g.C.MaskitoOptions]:n.e(6901).then(n.t.bind(n,16901,17))},this.minMaxLengthExample3={[g.C.MaskitoOptions]:n.e(6880).then(n.t.bind(n,6880,17))},this.apiPageControl=new a.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minLengthOptions=[{day:3},{day:15}],this.maxLengthOptions=[{day:5},{month:1},{year:1}],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.minLength={},this.maxLength={},this.maskitoOptions=(0,h.n9)(this)}getPlaceholder(t,e){const n=`${y.f$}${y.F}${y.f$}`;return`${t.replace(/\//g,e)}${n}${t.replace(/\//g,e)}`}updateOptions(){this.maskitoOptions=(0,h.n9)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}H.\u0275fac=function(t){return new(t||H)},H.\u0275cmp=f.Xpm({type:H,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min and max dates",3,"description","content"],["minMaxDescription",""],["id","min-max-length","heading","Min and max length of range",3,"description","content"],["minMaxLengthDescription",""],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","target","_blank"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","formControl"],["tuiTextfield","","inputmode","numeric",3,"maskito"]],template:function(t,e){1&t&&(f.TgZ(0,"tui-doc-page",0),f.YNc(1,L,16,6,"ng-template",1),f.YNc(2,S,9,12,"ng-template",1),f.qZA())},directives:[P.qo,P.nj,P.f2,Z,V,_,l.V,P.FU,P.zb,P.B7,s.K3,s.wU,c.B7,c.kD,a.JJ,a.oH,M.MB,U.F,T.r],encapsulation:2,changeDetection:0}),(0,p.gn)([x.UM],H.prototype,"getPlaceholder",null);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[o.ez,a.u5,a.UX,r.U5,u.fV,d.go,s.Qf,l.j,c.cn,i.Bz.forChild((0,m.Ve)(H))]]}),t})()}}]);