"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[562],{7562:(B,_,a)=>{a.r(_),a.d(_,{NumberMaskDocModule:()=>F});var h=a(6104),u=a(3738),Z=a(7169),y=a(2905),c=a(5955),g=a(8681),x=a(885),f=a(6117),p=a(1673),s=a(7350),P=a(185),e=a(4788);const C=(0,s.f8)({isNegativeAllowed:!1,precision:8});var l=a(1620),d=a(7258);let T=(()=>{class t{constructor(){this.maskitoOptions=C}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc-example-1"]],decls:5,vars:3,consts:[[3,"ngModel"],["tuiTextfield","","placeholder","3,141...","inputmode","decimal",3,"maskito"]],template:function(o,r){1&o&&(e.TgZ(0,"tui-input",0),e.TgZ(1,"strong"),e._uU(2,"\u03c0"),e.qZA(),e._uU(3," -value "),e._UZ(4,"input",1),e.qZA()),2&o&&(e.Udp("max-width",30,"rem"),e.xp6(4),e.Q6J("maskito",r.maskitoOptions))},directives:[p.K3,p.wU,u.JJ,u.On,l.MB,d.r],encapsulation:2,changeDetection:0}),t})();const N=(0,s.f8)({decimalSeparator:",",thousandSeparator:".",precision:2});let M=(()=>{class t{constructor(){this.maskitoOptions=N}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc-example-2"]],decls:3,vars:3,consts:[[3,"ngModel"],["tuiTextfield","","placeholder","1.000,42","inputmode","decimal",3,"maskito"]],template:function(o,r){1&o&&(e.TgZ(0,"tui-input",0),e._uU(1," Type number like a German "),e._UZ(2,"input",1),e.qZA()),2&o&&(e.Udp("max-width",30,"rem"),e.xp6(2),e.Q6J("maskito",r.maskitoOptions))},directives:[p.K3,p.wU,u.JJ,u.On,l.MB,d.r],encapsulation:2,changeDetection:0}),t})();const U=(0,s.f8)({decimalZeroPadding:!0,precision:2,decimalSeparator:".",isNegativeAllowed:!1});let k=(()=>{class t{constructor(){this.value="100.00",this.maskitoOptions=U}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc-example-3"]],decls:3,vars:4,consts:[["tuiTextfieldPrefix","$",3,"ngModel"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(o,r){1&o&&(e.TgZ(0,"tui-input",0),e._uU(1," Cost "),e._UZ(2,"input",1),e.qZA()),2&o&&(e.Udp("max-width",30,"rem"),e.Q6J("ngModel",r.value),e.xp6(2),e.Q6J("maskito",r.maskitoOptions))},directives:[p.K3,p.wU,f.A7,u.JJ,u.On,l.MB,d.r],encapsulation:2,changeDetection:0}),t})();function b(t,n){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"precision"),e.qZA(),e._uU(3," -parameter to configure number of digits after decimal separator. "))}function D(t,n){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," and "),e.TgZ(4,"code"),e._uU(5,"thousandSeparator"),e.qZA(),e._uU(6," to get mask with a language\u2011sensitive representation of this number. "))}function A(t,n){1&t&&(e._uU(0," Set "),e.TgZ(1,"code"),e._uU(2,"decimalZeroPadding: true"),e.qZA(),e._uU(3," to always show trailing zeroes. "))}function V(t,n){if(1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"maskitoNumberOptionsGenerator"),e.qZA(),e._uU(3," to create mask to input number. "),e.TgZ(4,"tui-doc-example",2),e.YNc(5,b,4,0,"ng-template",null,3,e.W1O),e._UZ(7,"number-mask-doc-example-1"),e.qZA(),e.TgZ(8,"tui-doc-example",4),e.YNc(9,D,7,0,"ng-template",null,5,e.W1O),e.TgZ(11,"tui-notification",6),e._uU(12," German uses comma as decimal separator and dot for thousands "),e.qZA(),e._UZ(13,"number-mask-doc-example-2"),e.qZA(),e.TgZ(14,"tui-doc-example",7),e.YNc(15,A,4,0,"ng-template",null,8,e.W1O),e._UZ(17,"number-mask-doc-example-3"),e.qZA()),2&t){const o=e.MAs(6),r=e.MAs(10),i=e.MAs(16),m=e.oxw();e.xp6(4),e.Q6J("content",m.highPrecisionExample1)("description",o),e.xp6(4),e.Q6J("content",m.separatorsExample2)("description",r),e.xp6(3),e.Udp("max-width",30,"rem"),e.xp6(3),e.Q6J("content",m.decimalZeroPaddingExample3)("description",i)}}function v(t,n){if(1&t&&(e.TgZ(0,"tui-input",17),e._uU(1," Enter a number "),e._UZ(2,"input",18),e.qZA()),2&t){const o=e.oxw(2);e.Q6J("formControl",o.apiPageControl),e.xp6(2),e.Q6J("maskito",o.maskitoOptions)}}function J(t,n){1&t&&(e._uU(0," Allows to input negative sign (minus). "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e.TgZ(4,"code"),e._uU(5,"true"),e.qZA(),e._uU(6," . "),e.qZA())}function S(t,n){1&t&&(e._uU(0," The greatest permitted value. "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e.TgZ(4,"code"),e._uU(5,"Number.MAX_SAFE_INTEGER"),e.qZA(),e._uU(6," . "),e.qZA())}function O(t,n){1&t&&(e._uU(0," A number of digits after "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," . "),e.TgZ(4,"p"),e.TgZ(5,"strong"),e._uU(6,"Default:"),e.qZA(),e.TgZ(7,"code"),e._uU(8,"0"),e.qZA(),e._uU(9," (decimal part is forbidden). "),e.qZA())}function E(t,n){1&t&&(e._uU(0," Symbol for separating fraction. "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e._uU(4," comma. "),e.qZA())}function w(t,n){1&t&&(e._uU(0," Symbols to be replaced with "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," . "),e.TgZ(4,"p"),e.TgZ(5,"strong"),e._uU(6,"Default:"),e.qZA(),e.TgZ(7,"code"),e._uU(8,"['.', '\u044e', '\u0431']"),e.qZA(),e._uU(9," . "),e.qZA())}function q(t,n){1&t&&(e._uU(0," If number of digits after "),e.TgZ(1,"code"),e._uU(2,"decimalSeparator"),e.qZA(),e._uU(3," is "),e.TgZ(4,"strong"),e._uU(5,"always equal"),e.qZA(),e._uU(6," to the "),e.TgZ(7,"code"),e._uU(8,"precision"),e.qZA(),e._uU(9," . "),e.TgZ(10,"p"),e.TgZ(11,"strong"),e._uU(12,"Default:"),e.qZA(),e.TgZ(13,"code"),e._uU(14,"false"),e.qZA(),e._uU(15," (number of digits can be less than precision) . "),e.qZA())}function H(t,n){1&t&&(e._uU(0," Symbol for separating thousands. "),e.TgZ(1,"p"),e.TgZ(2,"strong"),e._uU(3,"Default:"),e.qZA(),e._uU(4," non-breaking space. "),e.qZA())}function Q(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"tui-doc-demo",9),e.YNc(1,v,3,2,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,J,7,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().isNegativeAllowed=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.YNc(4,S,7,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().max=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.YNc(5,O,10,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().precision=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.YNc(6,E,5,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().decimalSeparator=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.YNc(7,w,10,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().decimalPseudoSeparators=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.YNc(8,q,16,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().decimalZeroPadding=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.YNc(9,H,5,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(o),e.oxw().thousandSeparator=i})("documentationPropertyValueChange",function(){return e.CHM(o),e.oxw().updateOptions()}),e.qZA()}if(2&t){const o=e.oxw();e.Q6J("control",o.apiPageControl),e.xp6(3),e.Q6J("documentationPropertyValue",o.isNegativeAllowed),e.xp6(1),e.Q6J("documentationPropertyValue",o.max),e.xp6(1),e.Q6J("documentationPropertyValue",o.precision),e.xp6(1),e.Q6J("documentationPropertyValue",o.decimalSeparator),e.xp6(1),e.Q6J("documentationPropertyValues",o.decimalPseudoSeparatorsOptions)("documentationPropertyValue",o.decimalPseudoSeparators),e.xp6(1),e.Q6J("documentationPropertyValue",o.decimalZeroPadding),e.xp6(1),e.Q6J("documentationPropertyValue",o.thousandSeparator)}}let Y=(()=>{class t{constructor(){this.highPrecisionExample1={MaskitoOptions:a.e(533).then(a.t.bind(a,3533,17))},this.separatorsExample2={MaskitoOptions:a.e(335).then(a.t.bind(a,1335,17))},this.decimalZeroPaddingExample3={MaskitoOptions:a.e(820).then(a.t.bind(a,820,17))},this.apiPageControl=new u.NI(""),this.maskitoOptions=(0,s.f8)(this),this.decimalPseudoSeparatorsOptions=[[".","\u0431","\u044e"],["."]],this.precision=0,this.isNegativeAllowed=!0,this.max=Number.MAX_SAFE_INTEGER,this.decimalSeparator=",",this.decimalZeroPadding=!1,this.decimalPseudoSeparators=this.decimalPseudoSeparatorsOptions[0],this.thousandSeparator="\xa0"}updateOptions(){this.maskitoOptions=(0,s.f8)(this)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["number-mask-doc"]],features:[e._Bn([(0,P.iL)({min:Number.MIN_SAFE_INTEGER})])],decls:3,vars:0,consts:[["header","Number","package","KIT"],["pageTab",""],["id","high-precision","heading","High precision",3,"content","description"],["precisionDescription",""],["id","separators","heading","Separators",3,"content","description"],["separatorsDescription",""],[1,"tui-space_bottom-4"],["id","decimal-zero-padding","heading","Decimal zero padding",3,"content","description"],["decimalZeroPaddingDescription",""],[3,"control"],["documentationPropertyName","isNegativeAllowed","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalPseudoSeparators","documentationPropertyMode","input","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalZeroPadding","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","thousandSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiHintContent","Only digits (+ decimal separator) are allowed",3,"formControl"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(o,r){1&o&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,V,18,8,"ng-template",1),e.YNc(2,Q,10,9,"ng-template",1),e.qZA())},directives:[c.qo,c.nj,c.f2,T,x.Ls,M,k,c.FU,c.zb,c.B7,p.K3,p.wU,g.bZ,u.JJ,u.oH,l.MB,d.r],encapsulation:2,changeDetection:0}),t})(),F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.ez,u.u5,u.UX,y.U5,c.fV,g.go,p.Qf,x.Hi,f.cn,Z.Bz.forChild((0,c.Ve)(Y))]]}),t})()}}]);