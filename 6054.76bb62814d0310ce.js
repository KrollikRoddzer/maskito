"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6054],{997:(A,C,r)=>{r.d(C,{TuiAddonDocModule:()=>M});var T=r(4537),s=r(9439);let M=(()=>{class p{}return p.\u0275fac=function(v){return new(v||p)},p.\u0275mod=T.oAB({type:p}),p.\u0275inj=T.cJS({imports:[s.JF,s.mG,s.Lx,s.Lq,s.u4]}),p})()},6054:(A,C,r)=>{r.r(C),r.d(C,{NumberMaskDocModule:()=>Tt});var T=r(8692),s=r(9900),M=r(3178),N=r(997),p=r(2497),t=r(4537),v=r(2130),O=r(6060),D=r(9570);const V=["tuiLabel",""];function E(n,a){1&n&&t._UZ(0,"span",3),2&n&&t.Q6J("textContent",a.polymorpheusOutlet)}const w=["*"];let F=(()=>{class n{constructor(e){this.mode$=e,this.context={$implicit:null}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(O.Au))},n.\u0275cmp=t.Xpm({type:n,selectors:[["label","tuiLabel",""]],contentQueries:function(e,i,o){if(1&e&&t.Suo(o,s.a5,5),2&e){let u;t.iGM(u=t.CRH())&&(i.control=u.first)}},hostVars:2,hostBindings:function(e,i){1&e&&t.NdJ("$.data-mode.attr",function(){return i.mode$}),2&e&&t.ekj("_control",i.control)},inputs:{tuiLabel:"tuiLabel",context:"context"},features:[t._Bn([v.CV])],attrs:V,ngContentSelectors:w,decls:4,vars:2,consts:[[1,"t-label"],["class","t-text",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-content"],[1,"t-text",3,"textContent"]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"span",0),t.YNc(1,E,1,1,"span",1),t.qZA(),t.TgZ(2,"span",2),t.Hsn(3),t.qZA()),2&e&&(t.xp6(1),t.Q6J("polymorpheusOutlet",i.tuiLabel)("polymorpheusOutletContext",i.context))},dependencies:[D.Li],styles:['[_nghost-%COMP%]{display:flex;min-height:2.75rem;justify-content:space-between;flex-direction:column;pointer-events:none}.t-label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);max-width:100%;align-self:inherit;overflow:inherit;pointer-events:auto}._control[_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{margin-bottom:.25rem}.t-text[_ngcontent-%COMP%]{display:block;overflow:inherit;text-overflow:ellipsis}[_nghost-%COMP%]:not(._control)   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02)}[data-mode="onDark"][_nghost-%COMP%]   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-content[_ngcontent-%COMP%]{line-height:1.5rem;overflow:inherit;text-overflow:ellipsis;pointer-events:auto}'],changeDetection:0}),n})(),J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[D.wq]]}),n})();var Z=r(885),y=r(8940),c=r(1673),P=r(4911),_=r(3139),m=r(4555),U=r(1927);const k={icons:{up:"tuiIconPlus",down:"tuiIconMinus"},appearance:"textfield",hideButtons:!1,min:0,max:Number.MAX_SAFE_INTEGER,step:1,postfix:""},B=(0,U.JN)(k);function Q(n){return(0,U.vK)(B,n,k)}var g=r(7258),d=r(9439),f=r(5640);const H=(0,m.f8)({precision:8,min:0});let L=(()=>{class n{constructor(){this.value="",this.maskitoOptions=H}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["number-mask-doc-example-1"]],decls:5,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","decimal","placeholder","3,141...","tuiTextfield","",3,"maskito"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t.TgZ(1,"strong"),t._uU(2,"\u03c0"),t.qZA(),t._uU(3," -value "),t._UZ(4,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("ngModel",i.value),t.xp6(4),t.Q6J("maskito",i.maskitoOptions))},dependencies:[s.JJ,s.On,g.r,c.K3,c.wU,f.MB],encapsulation:2,changeDetection:0}),n})();const G=(0,m.f8)({decimalSeparator:",",thousandSeparator:".",precision:2});let K=(()=>{class n{constructor(){this.maskitoOptions=G,this.value=""}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["number-mask-doc-example-2"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","decimal","placeholder","1.000,42","tuiTextfield","",3,"maskito"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t._uU(1," Type number like a German "),t._UZ(2,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("ngModel",i.value),t.xp6(2),t.Q6J("maskito",i.maskitoOptions))},dependencies:[s.JJ,s.On,g.r,c.K3,c.wU,f.MB],encapsulation:2,changeDetection:0}),n})();const I=(0,m.f8)({postfix:"%",min:0,max:100,precision:2}),{plugins:q}=I,R=(0,P._T)(I,["plugins"]),j=Object.assign(Object.assign({},R),{plugins:[...q,(0,m.nQ)(n=>[0,n.length-1])]}),Y=["nativeInput"];let $=(()=>{class n{constructor(){this.postfix="%",this.value=`97${this.postfix}`,this.maskitoOptions=j}onFocus(){this.value||(this.value=this.postfix)}onBlur(){this.value===this.postfix&&(this.value=`0${this.postfix}`)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["number-mask-doc-example-3"]],viewQuery:function(e,i){if(1&e&&t.Gf(Y,5,t.SBq),2&e){let o;t.iGM(o=t.CRH())&&(i.inputRef=o.first)}},decls:3,vars:5,consts:[[3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito","blur","focus"],["nativeInput",""]],template:function(e,i){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t.TgZ(1,"input",1,2),t.NdJ("blur",function(){return i.onBlur()})("focus",function(){return i.onFocus()}),t.qZA()()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",i.value),t.xp6(1),t.Q6J("maskito",i.maskitoOptions))},dependencies:[s.JJ,s.On,g.r,c.K3,c.wU,f.MB,y.xT],encapsulation:2,changeDetection:0}),n})();const z=(0,m.f8)({decimalZeroPadding:!0,precision:2,decimalSeparator:".",min:0,prefix:"$"});let X=(()=>{class n{constructor(){this.value="$100.00",this.maskitoOptions=z}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["number-mask-doc-example-4"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(u){return i.value=u}),t._uU(1," Cost "),t._UZ(2,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("ngModel",i.value),t.xp6(2),t.Q6J("maskito",i.maskitoOptions))},dependencies:[s.JJ,s.On,g.r,c.K3,c.wU,f.MB],encapsulation:2,changeDetection:0}),n})();var W=r(4358);class h{constructor(){this.value="42",this.decimalZeroPadding=this.value.includes(".")}getMaskOptions(a){return function tt(n){return(0,m.f8)({decimalZeroPadding:n,precision:2,decimalSeparator:".",min:0})}(a)}handleBeforeInput(a){const{inputType:e,target:i,data:o}=a;if(e.includes("delete")){const u=i,[x,l]=this.getNotEmptySelection([u.selectionStart||0,u.selectionEnd||0],e.includes("Forward")),b=this.value.slice(x,l).includes(".");this.decimalZeroPadding=this.decimalZeroPadding&&!b}else this.decimalZeroPadding=[".",",","\u0431","\u044e"].some(u=>(null==o?void 0:o.includes(u))||this.value.includes(u))}getNotEmptySelection([a,e],i){return a!==e?[a,e]:i?[a,e+1]:[Math.max(a-1,0),e]}}h.\u0275fac=function(a){return new(a||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["number-mask-doc-example-5"]],decls:3,vars:5,consts:[["tuiLabel","Enable decimal zero padding by typing dot"],[3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito","beforeinput.capture"]],template:function(a,e){1&a&&(t.TgZ(0,"label",0)(1,"tui-input",1),t.NdJ("ngModelChange",function(o){return e.value=o}),t.TgZ(2,"input",2),t.NdJ("beforeinput.capture",function(o){return e.handleBeforeInput(o)}),t.qZA()()()),2&a&&(t.xp6(1),t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",e.value),t.xp6(1),t.Q6J("maskito",e.getMaskOptions(e.decimalZeroPadding)))},dependencies:[s.JJ,s.On,g.r,c.K3,c.wU,f.MB,F,y.xT],encapsulation:2,changeDetection:0}),(0,P.gn)([W.UM],h.prototype,"getMaskOptions",null);const et=["apiPageInput"];function nt(n,a){1&n&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"precision"),t.qZA(),t._uU(3," parameter to configure the number of digits after decimal separator. "))}function ot(n,a){1&n&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"thousandSeparator"),t.qZA(),t._uU(6," to get mask with locale specific representation of numbers. "))}function it(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1," Use "),t.TgZ(2,"code"),t._uU(3,"postfix"),t.qZA(),t._uU(4," parameter to set non-removable text after the number. "),t.qZA(),t.TgZ(5,"div"),t._uU(6," Additionally you can use "),t.TgZ(7,"code"),t._uU(8,"maskitoCaretGuard"),t.qZA(),t._uU(9," to clamp caret inside allowable range. "),t.qZA(),t.TgZ(10,"div",2),t._uU(11," This example also shows how to restrict the greatest permitted value via "),t.TgZ(12,"code"),t._uU(13,"max"),t.qZA(),t._uU(14," parameter. "),t.qZA())}function at(n,a){1&n&&(t.TgZ(0,"p",15),t._uU(1," Set "),t.TgZ(2,"code"),t._uU(3,"decimalZeroPadding: true"),t.qZA(),t._uU(4," to always show trailing zeroes. "),t.qZA(),t.TgZ(5,"p"),t._uU(6," Non removable dollar sign is achieved by using "),t.TgZ(7,"code"),t._uU(8,"prefix"),t.qZA(),t._uU(9," parameter. "),t.qZA())}function ut(n,a){1&n&&(t.TgZ(0,"div"),t._uU(1,"You can change options on the fly to build complex logic."),t.qZA(),t.TgZ(2,"div"),t._uU(3," This example shows how to initially disable "),t.TgZ(4,"code"),t._uU(5,"decimalZeroPadding"),t.qZA(),t._uU(6," and enable it only after user inserts decimal separator. "),t.qZA())}function rt(n,a){if(1&n&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"maskitoNumberOptionsGenerator"),t.qZA(),t._uU(3," to create a mask for entering a formatted number. "),t.TgZ(4,"tui-notification",2),t._uU(5," Despite the name of the mask, element's raw value is still string. "),t.TgZ(6,"p"),t._uU(7," Use "),t.TgZ(8,"code"),t._uU(9,"maskitoParseNumber"),t.qZA(),t._uU(10," to get number-type value. "),t.qZA(),t._UZ(11,"tui-doc-code",3),t.qZA(),t.TgZ(12,"tui-doc-example",4),t.YNc(13,nt,4,0,"ng-template",null,5,t.W1O),t._UZ(15,"number-mask-doc-example-1"),t.qZA(),t.TgZ(16,"tui-doc-example",6),t.YNc(17,ot,7,0,"ng-template",null,7,t.W1O),t.TgZ(19,"tui-notification",8),t._uU(20," In Germany people use comma as decimal separator and dot for thousands "),t.qZA(),t._UZ(21,"number-mask-doc-example-2"),t.qZA(),t.TgZ(22,"tui-doc-example",9),t.YNc(23,it,15,0,"ng-template",null,10,t.W1O),t._UZ(25,"number-mask-doc-example-3"),t.qZA(),t.TgZ(26,"tui-doc-example",11),t.YNc(27,at,10,0,"ng-template",null,12,t.W1O),t._UZ(29,"number-mask-doc-example-4"),t.qZA(),t.TgZ(30,"tui-doc-example",13),t.YNc(31,ut,7,0,"ng-template",null,14,t.W1O),t._UZ(33,"number-mask-doc-example-5"),t.qZA()),2&n){const e=t.MAs(14),i=t.MAs(18),o=t.MAs(24),u=t.MAs(28),x=t.MAs(32),l=t.oxw();t.xp6(11),t.Q6J("code",l.maskitoParseNumberDemo),t.xp6(1),t.Q6J("content",l.highPrecisionExample1)("description",e),t.xp6(4),t.Q6J("content",l.separatorsExample2)("description",i),t.xp6(3),t.Udp("max-width",30,"rem"),t.xp6(3),t.Q6J("content",l.postfixExample3)("description",o),t.xp6(4),t.Q6J("content",l.decimalZeroPaddingExample4)("description",u),t.xp6(4),t.Q6J("content",l.dynamicDecimalZeroPaddingExample5)("description",x)}}function st(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tui-input",26),t._uU(1," Enter a number "),t.TgZ(2,"input",27,28),t.NdJ("blur",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onBlur())})("focus",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onFocus())}),t.qZA()()}if(2&n){const e=t.oxw(2);t.Q6J("formControl",e.apiPageControl),t.xp6(2),t.Q6J("maskito",e.maskitoOptions)}}function ct(n,a){1&n&&(t._uU(0," A number of digits after "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," . "),t.TgZ(4,"p"),t._uU(5," Use "),t.TgZ(6,"code"),t._uU(7,"Infinity"),t.qZA(),t._uU(8," for an untouched decimal part. "),t.qZA(),t.TgZ(9,"p")(10,"strong"),t._uU(11,"Default:"),t.qZA(),t.TgZ(12,"code"),t._uU(13,"0"),t.qZA(),t._uU(14," (decimal part is forbidden). "),t.qZA())}function lt(n,a){1&n&&(t._uU(0," Symbol for separating fraction. "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t._uU(4," dot. "),t.qZA())}function pt(n,a){1&n&&(t._uU(0," Symbols to be replaced with "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," . "),t.TgZ(4,"p")(5,"strong"),t._uU(6,"Default:"),t.qZA(),t.TgZ(7,"code"),t._uU(8,"['.', '\u044e', '\u0431']"),t.qZA(),t._uU(9," . "),t.qZA())}function mt(n,a){1&n&&(t._uU(0," If number of digits after "),t.TgZ(1,"code"),t._uU(2,"decimalSeparator"),t.qZA(),t._uU(3," is "),t.TgZ(4,"strong"),t._uU(5,"always equal"),t.qZA(),t._uU(6," to the "),t.TgZ(7,"code"),t._uU(8,"precision"),t.qZA(),t._uU(9," . "),t.TgZ(10,"p")(11,"strong"),t._uU(12,"Default:"),t.qZA(),t.TgZ(13,"code"),t._uU(14,"false"),t.qZA(),t._uU(15," (number of digits can be less than precision) . "),t.qZA())}function dt(n,a){1&n&&(t._uU(0," Symbol for separating thousands. "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t._uU(4," non-breaking space. "),t.qZA())}function _t(n,a){1&n&&(t._uU(0," The lowest permitted value. "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"Number.MIN_SAFE_INTEGER"),t.qZA(),t._uU(6," . "),t.qZA())}function gt(n,a){1&n&&(t._uU(0," The greatest permitted value. "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"Number.MAX_SAFE_INTEGER"),t.qZA(),t._uU(6," . "),t.qZA())}function ft(n,a){1&n&&(t._uU(0," A prefix symbol, like currency. "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t._uU(4," empty string (no prefix). "),t.qZA())}function ht(n,a){1&n&&(t._uU(0," A postfix symbol, like currency. "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t._uU(4," empty string (no postfix). "),t.qZA())}function xt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tui-doc-demo",16),t.YNc(1,st,4,2,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,ct,15,0,"ng-template",17),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.precision=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(4,lt,5,0,"ng-template",18),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.decimalSeparator=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(5,pt,10,0,"ng-template",19),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.decimalPseudoSeparators=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(6,mt,16,0,"ng-template",20),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.decimalZeroPadding=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(7,dt,5,0,"ng-template",21),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.thousandSeparator=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(8,_t,7,0,"ng-template",22),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.min=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(9,gt,7,0,"ng-template",23),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.max=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(10,ft,5,0,"ng-template",24),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.prefix=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.YNc(11,ht,5,0,"ng-template",25),t.NdJ("documentationPropertyValueChange",function(o){t.CHM(e);const u=t.oxw();return t.KtG(u.postfix=o)})("documentationPropertyValueChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.updateOptions())}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("control",e.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValues",e.precisionOptions)("documentationPropertyValue",e.precision),t.xp6(1),t.Q6J("documentationPropertyValue",e.decimalSeparator),t.xp6(1),t.Q6J("documentationPropertyValues",e.decimalPseudoSeparatorsOptions)("documentationPropertyValue",e.decimalPseudoSeparators),t.xp6(1),t.Q6J("documentationPropertyValue",e.decimalZeroPadding),t.xp6(1),t.Q6J("documentationPropertyValue",e.thousandSeparator),t.xp6(1),t.Q6J("documentationPropertyValue",e.min),t.xp6(1),t.Q6J("documentationPropertyValue",e.max),t.xp6(1),t.Q6J("documentationPropertyValue",e.prefix),t.xp6(1),t.Q6J("documentationPropertyValue",e.postfix)}}let Ct=(()=>{class n{constructor(){this.maskitoParseNumberDemo=r.e(8507).then(r.t.bind(r,8507,17)),this.highPrecisionExample1={[_.C.MaskitoOptions]:r.e(3533).then(r.t.bind(r,3533,17))},this.separatorsExample2={[_.C.MaskitoOptions]:r.e(1335).then(r.t.bind(r,1335,17))},this.postfixExample3={[_.C.MaskitoOptions]:r.e(7792).then(r.t.bind(r,7792,17))},this.decimalZeroPaddingExample4={[_.C.MaskitoOptions]:r.e(9057).then(r.t.bind(r,9057,17))},this.dynamicDecimalZeroPaddingExample5={[_.C.MaskitoOptions]:r.e(4947).then(r.t.bind(r,4947,17)),[_.C.Angular]:r.e(8929).then(r.t.bind(r,8929,17))},this.apiPageControl=new s.NI(""),this.decimalPseudoSeparatorsOptions=[[".",",","\u0431","\u044e"],["."],[","]],this.precisionOptions=[0,1,2,5,10,1/0],this.precision=0,this.max=Number.MAX_SAFE_INTEGER,this.min=Number.MIN_SAFE_INTEGER,this.decimalSeparator=".",this.decimalZeroPadding=!1,this.decimalPseudoSeparators=this.decimalPseudoSeparatorsOptions[0],this.thousandSeparator="\xa0",this.prefix="",this.postfix="",this.maskitoOptions=this.calculateMask(this)}updateOptions(){this.maskitoOptions=this.calculateMask(this)}onFocus(){this.apiPageControl.value||this.apiPageControl.patchValue(this.prefix+this.postfix)}onBlur(){const e=this.apiPageControl.value;e&&e===this.prefix+this.postfix&&this.apiPageControl.patchValue("")}calculateMask(e){const{prefix:i,postfix:o}=e,u=(0,m.f8)(e),{plugins:x}=u,l=(0,P._T)(u,["plugins"]);return Object.assign(Object.assign({},l),{plugins:[...x,(0,m.nQ)(b=>[i.length,b.length-o.length])]})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["number-mask-doc"]],viewQuery:function(e,i){if(1&e&&t.Gf(et,5,t.SBq),2&e){let o;t.iGM(o=t.CRH())&&(i.apiPageInput=o.first)}},features:[t._Bn([Q({min:Number.MIN_SAFE_INTEGER})])],decls:3,vars:0,consts:[["header","Number","package","KIT"],["pageTab",""],[1,"tui-space_top-4"],[3,"code"],["id","high-precision","heading","High precision",3,"content","description"],["precisionDescription",""],["id","separators","heading","Separators",3,"content","description"],["separatorsDescription",""],[1,"tui-space_bottom-4"],["id","postfix","heading","Postfix",3,"content","description"],["postfixDescription",""],["id","decimal-zero-padding","heading","Decimal zero padding",3,"content","description"],["decimalZeroPaddingDescription",""],["id","dynamic-decimal-zero-padding","heading","Dynamic decimal zero padding",3,"content","description"],["dynamicDecimalZeroPaddingDescription",""],[1,"tui-space_top-0"],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","precision","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","decimalSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","decimalPseudoSeparators","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","decimalZeroPadding","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","thousandSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","prefix","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","postfix","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["tuiHintContent","Only digits (+ decimal separator) are allowed",3,"formControl"],["inputmode","decimal","tuiTextfield","",3,"maskito","blur","focus"],["apiPageInput",""]],template:function(e,i){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,rt,34,13,"ng-template",1),t.YNc(2,xt,12,12,"ng-template",1),t.qZA())},dependencies:[s.JJ,s.oH,g.r,d.c0,d.FU,d.zb,d.B7,d.qo,d.nj,d.f2,c.K3,c.wU,f.MB,Z.L,L,K,$,X,h],encapsulation:2,changeDetection:0}),n})(),Tt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[T.ez,s.u5,s.UX,N.TuiAddonDocModule,c.Qf,J,Z.H,y.cn,M.Bz.forChild((0,p.Ve)(Ct))]}),n})()}}]);