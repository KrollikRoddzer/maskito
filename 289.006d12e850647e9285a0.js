"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[289],{3289:(J,g,o)=>{o.r(g),o.d(g,{DateRangeMaskDocModule:()=>N});var y=o(6104),u=o(3738),D=o(7169),x=o(2905),m=o(6250),l=o(6117),s=o(1673),C=o(4762),_=o(5656),d=o(3770),h=o(4358),t=o(4788),P=o(1620),f=o(7258);function M(n,a){1&n&&(t._uU(0," This would be the content of a first tab "),t.TgZ(1,"tui-doc-example",2),t._uU(2," TODO "),t.qZA())}function V(n,a){if(1&n&&(t.TgZ(0,"tui-input",8),t._uU(1," Enter dates "),t._UZ(2,"input",9),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("tuiTextfieldFiller",e.getPlaceholder(e.mode,e.separator))("formControl",e.apiPageControl),t.xp6(2),t.Q6J("maskito",e.maskitoOptions)}}function T(n,a){1&n&&t._uU(0," Date format mode ")}function k(n,a){1&n&&t._uU(0," Separator ")}function R(n,a){1&n&&t._uU(0," Minimum date ")}function v(n,a){1&n&&t._uU(0," Maximum date ")}function O(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tui-doc-demo",3),t.YNc(1,V,3,3,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,T,1,0,"ng-template",4),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().mode=i})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateOptions()}),t.YNc(4,k,1,0,"ng-template",5),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().separator=i})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateOptions()}),t.YNc(5,R,1,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().minStr=i})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateDate()}),t.YNc(6,v,1,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(i){return t.CHM(e),t.oxw().maxStr=i})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateDate()}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("control",e.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValues",e.modeOptions)("documentationPropertyValue",e.mode),t.xp6(1),t.Q6J("documentationPropertyValue",e.separator),t.xp6(1),t.Q6J("documentationPropertyValues",e.minMaxOptions)("documentationPropertyValue",e.minStr),t.xp6(1),t.Q6J("documentationPropertyValues",e.minMaxOptions)("documentationPropertyValue",e.maxStr)}}class c{constructor(){this.apiPageControl=new u.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,_.n9)(this)}getPlaceholder(a,e){const r=`${d.f$}${d.F}${d.f$}`;return`${a.replace(/\//g,e)}${r}${a.replace(/\//g,e)}`}updateOptions(){this.maskitoOptions=(0,_.n9)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","basic","heading","Basic usage"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","formControl"],["tuiTextfield","",3,"maskito"]],template:function(a,e){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,M,3,0,"ng-template",1),t.YNc(2,O,7,8,"ng-template",1),t.qZA())},directives:[m.qo,m.nj,m.f2,m.FU,m.zb,m.B7,s.K3,s.wU,l.B7,l.kD,u.JJ,u.oH,P.MB,f.r],encapsulation:2,changeDetection:0}),(0,C.gn)([h.UM],c.prototype,"getPlaceholder",null);let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[y.ez,u.u5,u.UX,x.U5,m.fV,s.Qf,l.cn,D.Bz.forChild((0,m.Ve)(c))]]}),n})()}}]);