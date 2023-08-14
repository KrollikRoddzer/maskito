"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5380],{70997:function(e,t,n){n.d(t,{fV:function(){return a}});var o=n(74788),i=n(41823);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[i.JF,i.mG,i.Lx,i.Lq,i.u4]}),e})()},45380:function(e,t,n){n.r(t),n.d(t,{NumberMaskDocModule:function(){return le}});var o=n(12057),i=n(87862),a=n(2586),r=n(52494),u=n(70997),s=n(44427),c=n(74788),p=n(12130),l=n(79456),d=n(89570);const m=["tuiLabel",""];function g(e,t){1&e&&c._UZ(0,"span",3),2&e&&c.Q6J("textContent",t.polymorpheusOutlet)}const f=["*"];let h=(()=>{class e{constructor(e){this.mode$=e,this.context={$implicit:null}}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(l.Au))},e.\u0275cmp=c.Xpm({type:e,selectors:[["label","tuiLabel",""]],contentQueries:function(e,t,n){if(1&e&&c.Suo(n,i.a5,5),2&e){let e;c.iGM(e=c.CRH())&&(t.control=e.first)}},hostVars:2,hostBindings:function(e,t){1&e&&c.NdJ("$.data-mode.attr",function(){return t.mode$}),2&e&&c.ekj("_control",t.control)},inputs:{tuiLabel:"tuiLabel",context:"context"},features:[c._Bn([p.CV])],attrs:m,ngContentSelectors:f,decls:4,vars:2,consts:[[1,"t-label"],["class","t-text",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-content"],[1,"t-text",3,"textContent"]],template:function(e,t){1&e&&(c.F$t(),c.TgZ(0,"span",0),c.YNc(1,g,1,1,"span",1),c.qZA(),c.TgZ(2,"span",2),c.Hsn(3),c.qZA()),2&e&&(c.xp6(1),c.Q6J("polymorpheusOutlet",t.tuiLabel)("polymorpheusOutletContext",t.context))},directives:[d.Li],styles:['[_nghost-%COMP%]{display:flex;min-height:2.75rem;justify-content:space-between;flex-direction:column;pointer-events:none}.t-label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);max-width:100%;align-self:inherit;overflow:inherit;pointer-events:auto}._control[_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{margin-bottom:.25rem}.t-text[_ngcontent-%COMP%]{display:block;overflow:inherit;text-overflow:ellipsis}[_nghost-%COMP%]:not(._control)   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02)}[data-mode="onDark"][_nghost-%COMP%]   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-content[_ngcontent-%COMP%]{line-height:1.5rem;overflow:inherit;text-overflow:ellipsis;pointer-events:auto}'],changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[d.wq]]}),e})();var x=n(60885),y=n(79588),P=n(21673),_=n(72935),U=n(14707),T=n(41282),C=n(11927);const b={icons:{up:"tuiIconPlus",down:"tuiIconMinus"},appearance:"textfield",hideButtons:!1,min:0,max:Number.MAX_SAFE_INTEGER,step:1,postfix:""},A=(0,C.jH)(b);function M(e){return(0,C.vK)(A,e,b)}var q=n(41823),v=n(94853),w=(0,T.f8)({precision:8,min:0}),N=n(49510),O=n(25518);let k=(()=>{class e{constructor(){this.value="",this.maskitoOptions=w}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["number-mask-doc-example-1"]],decls:5,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","3,141...","inputmode","decimal",3,"maskito"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input",0),c.NdJ("ngModelChange",function(e){return t.value=e}),c.TgZ(1,"strong"),c._uU(2,"\u03c0"),c.qZA(),c._uU(3," -value "),c._UZ(4,"input",1),c.qZA()),2&e&&(c.Udp("max-width",30,"rem"),c.Q6J("ngModel",t.value),c.xp6(4),c.Q6J("maskito",t.maskitoOptions))},directives:[P.K3,P.wU,i.JJ,i.On,v.MB,N.F,O.r],encapsulation:2,changeDetection:0}),e})();var J=(0,T.f8)({decimalSeparator:",",thousandSeparator:".",precision:2});let V=(()=>{class e{constructor(){this.maskitoOptions=J,this.value=""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["number-mask-doc-example-2"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","placeholder","1.000,42","inputmode","decimal",3,"maskito"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input",0),c.NdJ("ngModelChange",function(e){return t.value=e}),c._uU(1," Type number like a German "),c._UZ(2,"input",1),c.qZA()),2&e&&(c.Udp("max-width",30,"rem"),c.Q6J("ngModel",t.value),c.xp6(2),c.Q6J("maskito",t.maskitoOptions))},directives:[P.K3,P.wU,i.JJ,i.On,v.MB,N.F,O.r],encapsulation:2,changeDetection:0}),e})();const S=(0,T.f8)({postfix:"%",min:0,max:100,precision:2}),{plugins:Q}=S,E=(0,_._T)(S,["plugins"]);var D=Object.assign(Object.assign({},E),{plugins:[...Q,(0,T.nQ)(e=>[0,e.length-1])]});const H=["nativeInput"];let B=(()=>{class e{constructor(){this.postfix="%",this.value=`97${this.postfix}`,this.maskitoOptions=D}onFocus(){this.value||(this.value=this.postfix)}onBlur(){this.value===this.postfix&&(this.value=`0${this.postfix}`)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["number-mask-doc-example-3"]],viewQuery:function(e,t){if(1&e&&c.Gf(H,5,c.SBq),2&e){let e;c.iGM(e=c.CRH())&&(t.inputRef=e.first)}},decls:3,vars:5,consts:[[3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito","focus","blur"],["nativeInput",""]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input",0),c.NdJ("ngModelChange",function(e){return t.value=e}),c.TgZ(1,"input",1,2),c.NdJ("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),c.qZA(),c.qZA()),2&e&&(c.Udp("max-width",30,"rem"),c.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.value),c.xp6(1),c.Q6J("maskito",t.maskitoOptions))},directives:[P.K3,P.wU,y.xT,i.JJ,i.On,v.MB,N.F,O.r],encapsulation:2,changeDetection:0}),e})();var I=(0,T.f8)({decimalZeroPadding:!0,precision:2,decimalSeparator:".",min:0,prefix:"$"});let F=(()=>{class e{constructor(){this.value="$100.00",this.maskitoOptions=I}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["number-mask-doc-example-4"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input",0),c.NdJ("ngModelChange",function(e){return t.value=e}),c._uU(1," Cost "),c._UZ(2,"input",1),c.qZA()),2&e&&(c.Udp("max-width",30,"rem"),c.Q6J("ngModel",t.value),c.xp6(2),c.Q6J("maskito",t.maskitoOptions))},directives:[P.K3,P.wU,i.JJ,i.On,v.MB,N.F,O.r],encapsulation:2,changeDetection:0}),e})();var Y=n(44358);class G{constructor(){this.value="42",this.decimalZeroPadding=this.value.includes(".")}getMaskOptions(e){return(0,T.f8)({decimalZeroPadding:e,precision:2,decimalSeparator:".",min:0})}handleBeforeInput(e){const{inputType:t,target:n,data:o}=e;if(t.includes("delete")){const e=n,[o,i]=this.getNotEmptySelection([e.selectionStart||0,e.selectionEnd||0],t.includes("Forward")),a=this.value.slice(o,i).includes(".");this.decimalZeroPadding=this.decimalZeroPadding&&!a}else this.decimalZeroPadding=[".",",","\u0431","\u044e"].some(e=>(null==o?void 0:o.includes(e))||this.value.includes(e))}getNotEmptySelection([e,t],n){return e!==t?[e,t]:n?[e,t+1]:[Math.max(e-1,0),t]}}G.\u0275fac=function(e){return new(e||G)},G.\u0275cmp=c.Xpm({type:G,selectors:[["number-mask-doc-example-5"]],decls:3,vars:5,consts:[["tuiLabel","Enable decimal zero padding by typing dot"],[3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito","beforeinput.capture"]],template:function(e,t){1&e&&(c.TgZ(0,"label",0),c.TgZ(1,"tui-input",1),c.NdJ("ngModelChange",function(e){return t.value=e}),c.TgZ(2,"input",2),c.NdJ("beforeinput.capture",function(e){return t.handleBeforeInput(e)}),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(1),c.Udp("max-width",30,"rem"),c.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.value),c.xp6(1),c.Q6J("maskito",t.getMaskOptions(t.decimalZeroPadding)))},directives:[h,P.K3,P.wU,y.xT,i.JJ,i.On,v.MB,N.F,O.r],encapsulation:2,changeDetection:0}),(0,_.gn)([Y.UM],G.prototype,"getMaskOptions",null);const L=["apiPageInput"];function j(e,t){1&e&&(c._uU(0," Use "),c.TgZ(1,"code"),c._uU(2,"precision"),c.qZA(),c._uU(3," parameter to configure the number of digits after decimal separator. "))}function X(e,t){1&e&&(c._uU(0," Use "),c.TgZ(1,"code"),c._uU(2,"decimalSeparator"),c.qZA(),c._uU(3," and "),c.TgZ(4,"code"),c._uU(5,"thousandSeparator"),c.qZA(),c._uU(6," to get mask with locale specific representation of numbers. "))}function R(e,t){1&e&&(c.TgZ(0,"div"),c._uU(1," Use "),c.TgZ(2,"code"),c._uU(3,"postfix"),c.qZA(),c._uU(4," parameter to set non-removable text after the number. "),c.qZA(),c.TgZ(5,"div"),c._uU(6," Additionally you can use "),c.TgZ(7,"code"),c._uU(8,"maskitoCaretGuard"),c.qZA(),c._uU(9," to clamp caret inside allowable range. "),c.qZA(),c.TgZ(10,"div",2),c._uU(11," This example also shows how to restrict the greatest permitted value via "),c.TgZ(12,"code"),c._uU(13,"max"),c.qZA(),c._uU(14," parameter. "),c.qZA())}function z(e,t){1&e&&(c.TgZ(0,"p",15),c._uU(1," Set "),c.TgZ(2,"code"),c._uU(3,"decimalZeroPadding: true"),c.qZA(),c._uU(4," to always show trailing zeroes. "),c.qZA(),c.TgZ(5,"p"),c._uU(6," Non removable dollar sign is achieved by using "),c.TgZ(7,"code"),c._uU(8,"prefix"),c.qZA(),c._uU(9," parameter. "),c.qZA())}function $(e,t){1&e&&(c.TgZ(0,"div"),c._uU(1," You can change options on the fly to build complex logic. "),c.qZA(),c.TgZ(2,"div"),c._uU(3," This example shows how to initially disable "),c.TgZ(4,"code"),c._uU(5,"decimalZeroPadding"),c.qZA(),c._uU(6," and enable it only after user inserts decimal separator. "),c.qZA())}function K(e,t){if(1&e&&(c._uU(0," Use "),c.TgZ(1,"code"),c._uU(2,"maskitoNumberOptionsGenerator"),c.qZA(),c._uU(3," to create a mask for entering a formatted number. "),c.TgZ(4,"tui-notification",2),c._uU(5," Despite the name of the mask, element's raw value is still string. "),c.TgZ(6,"p"),c._uU(7," Use "),c.TgZ(8,"code"),c._uU(9,"maskitoParseNumber"),c.qZA(),c._uU(10," to get number-type value. "),c.qZA(),c._UZ(11,"tui-doc-code",3),c.qZA(),c.TgZ(12,"tui-doc-example",4),c.YNc(13,j,4,0,"ng-template",null,5,c.W1O),c._UZ(15,"number-mask-doc-example-1"),c.qZA(),c.TgZ(16,"tui-doc-example",6),c.YNc(17,X,7,0,"ng-template",null,7,c.W1O),c.TgZ(19,"tui-notification",8),c._uU(20," In Germany people use comma as decimal separator and dot for thousands "),c.qZA(),c._UZ(21,"number-mask-doc-example-2"),c.qZA(),c.TgZ(22,"tui-doc-example",9),c.YNc(23,R,15,0,"ng-template",null,10,c.W1O),c._UZ(25,"number-mask-doc-example-3"),c.qZA(),c.TgZ(26,"tui-doc-example",11),c.YNc(27,z,10,0,"ng-template",null,12,c.W1O),c._UZ(29,"number-mask-doc-example-4"),c.qZA(),c.TgZ(30,"tui-doc-example",13),c.YNc(31,$,7,0,"ng-template",null,14,c.W1O),c._UZ(33,"number-mask-doc-example-5"),c.qZA()),2&e){const e=c.MAs(14),t=c.MAs(18),n=c.MAs(24),o=c.MAs(28),i=c.MAs(32),a=c.oxw();c.xp6(11),c.Q6J("code",a.maskitoParseNumberDemo),c.xp6(1),c.Q6J("content",a.highPrecisionExample1)("description",e),c.xp6(4),c.Q6J("content",a.separatorsExample2)("description",t),c.xp6(3),c.Udp("max-width",30,"rem"),c.xp6(3),c.Q6J("content",a.postfixExample3)("description",n),c.xp6(4),c.Q6J("content",a.decimalZeroPaddingExample4)("description",o),c.xp6(4),c.Q6J("content",a.dynamicDecimalZeroPaddingExample5)("description",i)}}function W(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-input",26),c._uU(1," Enter a number "),c.TgZ(2,"input",27,28),c.NdJ("focus",function(){return c.CHM(e),c.oxw(2).onFocus()})("blur",function(){return c.CHM(e),c.oxw(2).onBlur()}),c.qZA(),c.qZA()}if(2&e){const e=c.oxw(2);c.Q6J("formControl",e.apiPageControl),c.xp6(2),c.Q6J("maskito",e.maskitoOptions)}}function ee(e,t){1&e&&(c._uU(0," A number of digits after "),c.TgZ(1,"code"),c._uU(2,"decimalSeparator"),c.qZA(),c._uU(3," . "),c.TgZ(4,"p"),c._uU(5," Use "),c.TgZ(6,"code"),c._uU(7,"Infinity"),c.qZA(),c._uU(8," for an untouched decimal part. "),c.qZA(),c.TgZ(9,"p"),c.TgZ(10,"strong"),c._uU(11,"Default:"),c.qZA(),c.TgZ(12,"code"),c._uU(13,"0"),c.qZA(),c._uU(14," (decimal part is forbidden). "),c.qZA())}function te(e,t){1&e&&(c._uU(0," Symbol for separating fraction. "),c.TgZ(1,"p"),c.TgZ(2,"strong"),c._uU(3,"Default:"),c.qZA(),c._uU(4," dot. "),c.qZA())}function ne(e,t){1&e&&(c._uU(0," Symbols to be replaced with "),c.TgZ(1,"code"),c._uU(2,"decimalSeparator"),c.qZA(),c._uU(3," . "),c.TgZ(4,"p"),c.TgZ(5,"strong"),c._uU(6,"Default:"),c.qZA(),c.TgZ(7,"code"),c._uU(8,"['.', '\u044e', '\u0431']"),c.qZA(),c._uU(9," . "),c.qZA())}function oe(e,t){1&e&&(c._uU(0," If number of digits after "),c.TgZ(1,"code"),c._uU(2,"decimalSeparator"),c.qZA(),c._uU(3," is "),c.TgZ(4,"strong"),c._uU(5,"always equal"),c.qZA(),c._uU(6," to the "),c.TgZ(7,"code"),c._uU(8,"precision"),c.qZA(),c._uU(9," . "),c.TgZ(10,"p"),c.TgZ(11,"strong"),c._uU(12,"Default:"),c.qZA(),c.TgZ(13,"code"),c._uU(14,"false"),c.qZA(),c._uU(15," (number of digits can be less than precision) . "),c.qZA())}function ie(e,t){1&e&&(c._uU(0," Symbol for separating thousands. "),c.TgZ(1,"p"),c.TgZ(2,"strong"),c._uU(3,"Default:"),c.qZA(),c._uU(4," non-breaking space. "),c.qZA())}function ae(e,t){1&e&&(c._uU(0," The lowest permitted value. "),c.TgZ(1,"p"),c.TgZ(2,"strong"),c._uU(3,"Default:"),c.qZA(),c.TgZ(4,"code"),c._uU(5,"Number.MIN_SAFE_INTEGER"),c.qZA(),c._uU(6," . "),c.qZA())}function re(e,t){1&e&&(c._uU(0," The greatest permitted value. "),c.TgZ(1,"p"),c.TgZ(2,"strong"),c._uU(3,"Default:"),c.qZA(),c.TgZ(4,"code"),c._uU(5,"Number.MAX_SAFE_INTEGER"),c.qZA(),c._uU(6," . "),c.qZA())}function ue(e,t){1&e&&(c._uU(0," A prefix symbol, like currency. "),c.TgZ(1,"p"),c.TgZ(2,"strong"),c._uU(3,"Default:"),c.qZA(),c._uU(4," empty string (no prefix). "),c.qZA())}function se(e,t){1&e&&(c._uU(0," A postfix symbol, like currency. "),c.TgZ(1,"p"),c.TgZ(2,"strong"),c._uU(3,"Default:"),c.qZA(),c._uU(4," empty string (no postfix). "),c.qZA())}function ce(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo",16),c.YNc(1,W,4,2,"ng-template"),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,ee,15,0,"ng-template",17),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().precision=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(4,te,5,0,"ng-template",18),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().decimalSeparator=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(5,ne,10,0,"ng-template",19),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().decimalPseudoSeparators=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(6,oe,16,0,"ng-template",20),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().decimalZeroPadding=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(7,ie,5,0,"ng-template",21),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().thousandSeparator=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(8,ae,7,0,"ng-template",22),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().min=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(9,re,7,0,"ng-template",23),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().max=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(10,ue,5,0,"ng-template",24),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().prefix=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.YNc(11,se,5,0,"ng-template",25),c.NdJ("documentationPropertyValueChange",function(t){return c.CHM(e),c.oxw().postfix=t})("documentationPropertyValueChange",function(){return c.CHM(e),c.oxw().updateOptions()}),c.qZA()}if(2&e){const e=c.oxw();c.Q6J("control",e.apiPageControl),c.xp6(3),c.Q6J("documentationPropertyValues",e.precisionOptions)("documentationPropertyValue",e.precision),c.xp6(1),c.Q6J("documentationPropertyValue",e.decimalSeparator),c.xp6(1),c.Q6J("documentationPropertyValues",e.decimalPseudoSeparatorsOptions)("documentationPropertyValue",e.decimalPseudoSeparators),c.xp6(1),c.Q6J("documentationPropertyValue",e.decimalZeroPadding),c.xp6(1),c.Q6J("documentationPropertyValue",e.thousandSeparator),c.xp6(1),c.Q6J("documentationPropertyValue",e.min),c.xp6(1),c.Q6J("documentationPropertyValue",e.max),c.xp6(1),c.Q6J("documentationPropertyValue",e.prefix),c.xp6(1),c.Q6J("documentationPropertyValue",e.postfix)}}let pe=(()=>{class e{constructor(){this.maskitoParseNumberDemo=n.e(8507).then(n.t.bind(n,68507,17)),this.highPrecisionExample1={[U.C.MaskitoOptions]:n.e(3533).then(n.t.bind(n,13533,17))},this.separatorsExample2={[U.C.MaskitoOptions]:n.e(1335).then(n.t.bind(n,31335,17))},this.postfixExample3={[U.C.MaskitoOptions]:n.e(7792).then(n.t.bind(n,27792,17))},this.decimalZeroPaddingExample4={[U.C.MaskitoOptions]:n.e(9057).then(n.t.bind(n,99057,17))},this.dynamicDecimalZeroPaddingExample5={[U.C.MaskitoOptions]:n.e(4947).then(n.t.bind(n,94947,17)),[U.C.Angular]:n.e(8929).then(n.t.bind(n,38929,17))},this.apiPageControl=new i.NI(""),this.decimalPseudoSeparatorsOptions=[[".",",","\u0431","\u044e"],["."],[","]],this.precisionOptions=[0,1,2,5,10,1/0],this.precision=0,this.max=Number.MAX_SAFE_INTEGER,this.min=Number.MIN_SAFE_INTEGER,this.decimalSeparator=".",this.decimalZeroPadding=!1,this.decimalPseudoSeparators=this.decimalPseudoSeparatorsOptions[0],this.thousandSeparator="\xa0",this.prefix="",this.postfix="",this.maskitoOptions=this.calculateMask(this)}updateOptions(){this.maskitoOptions=this.calculateMask(this)}onFocus(){let e=this.apiPageControl.value;e||(e=this.prefix+this.postfix,this.apiPageControl.patchValue(e))}onBlur(){const e=this.apiPageControl.value;e&&e===this.prefix+this.postfix&&this.apiPageControl.patchValue("")}calculateMask(e){const{prefix:t,postfix:n}=e,o=(0,T.f8)(e),{plugins:i}=o,a=(0,_._T)(o,["plugins"]);return Object.assign(Object.assign({},a),{plugins:[...i,(0,T.nQ)(e=>[t.length,e.length-n.length])]})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["number-mask-doc"]],viewQuery:function(e,t){if(1&e&&c.Gf(L,5,c.SBq),2&e){let e;c.iGM(e=c.CRH())&&(t.apiPageInput=e.first)}},features:[c._Bn([M({min:Number.MIN_SAFE_INTEGER})])],decls:3,vars:0,consts:[["header","Number","package","KIT"],["pageTab",""],[1,"tui-space_top-4"],[3,"code"],["id","high-precision","heading","High precision",3,"content","description"],["precisionDescription",""],["id","separators","heading","Separators",3,"content","description"],["separatorsDescription",""],[1,"tui-space_bottom-4"],["id","postfix","heading","Postfix",3,"content","description"],["postfixDescription",""],["id","decimal-zero-padding","heading","Decimal zero padding",3,"content","description"],["decimalZeroPaddingDescription",""],["id","dynamic-decimal-zero-padding","heading","Dynamic decimal zero padding",3,"content","description"],["dynamicDecimalZeroPaddingDescription",""],[1,"tui-space_top-0"],[3,"control"],["documentationPropertyName","precision","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalPseudoSeparators","documentationPropertyMode","input","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","decimalZeroPadding","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","thousandSeparator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiHintContent","Only digits (+ decimal separator) are allowed",3,"formControl"],["tuiTextfield","","inputmode","decimal",3,"maskito","focus","blur"],["apiPageInput",""]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,K,34,13,"ng-template",1),c.YNc(2,ce,12,12,"ng-template",1),c.qZA())},directives:[q.qo,q.nj,x.L,q.c0,q.f2,k,V,B,F,G,q.FU,q.zb,q.B7,P.K3,P.wU,i.JJ,i.oH,v.MB,N.F,O.r],encapsulation:2,changeDetection:0}),e})(),le=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[o.ez,i.u5,i.UX,r.U5,u.fV,P.Qf,Z,x.H,y.cn,a.Bz.forChild((0,s.Ve)(pe))]]}),e})()}}]);