"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[3506],{70997:function(t,e,n){n.d(e,{fV:function(){return r}});var o=n(74788),i=n(68159);let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[i.JF,i.mG,i.Lx,i.Lq,i.u4]}),t})()},82296:function(t,e,n){n.d(e,{FC:function(){return T},Bq:function(){return A},Mu:function(){return V}});var o=n(12057),i=n(74788),r=n(87862),a=n(13633),s=n(76480),l=n(57179),c=n(99434),d=n(91489),u=n(80134),h=n(54789),p=n(1515),g=n(94853),_=n(66640),m=n(79456),C=n(79588),O=n(90022),f=n(12130),b=n(43631),M=n(89570);const x=["focusableElement"];function P(t,e){1&t&&i.GkF(0)}function v(t,e){if(1&t&&(i.TgZ(0,"div",19),i._uU(1),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.AsE(" ",t.value.length,"/",t.maxLength," ")}}function w(t,e){if(1&t&&(i.TgZ(0,"div",20),i.Hsn(1,1),i.qZA()),2&t){const t=i.oxw();i.ekj("t-placeholder_raised",t.placeholderRaised)}}function z(t,e){1&t&&i._UZ(0,"tui-svg",23),2&t&&i.Q6J("src",e.polymorpheusOutlet)}const y=function(t){return{$implicit:t}};function k(t,e){if(1&t&&(i.TgZ(0,"div",21),i.YNc(1,z,1,1,"tui-svg",22),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("polymorpheusOutlet",t.iconLeftContent)("polymorpheusOutletContext",i.VKq(2,y,t.size))}}function Z(t,e){1&t&&i._UZ(0,"tui-svg",25),2&t&&i.Q6J("src",e.polymorpheusOutlet)}function J(t,e){if(1&t&&(i.ynx(0),i.YNc(1,Z,1,1,"tui-svg",24),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("polymorpheusOutlet",t.controller.customContent)}}function Q(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tui-svg",27),i.NdJ("click.stop",function(){return i.CHM(t),i.oxw(2).onValueChange("")}),i.qZA()}2&t&&i.Q6J("src",e.polymorpheusOutlet)}function F(t,e){if(1&t&&(i.ynx(0),i.YNc(1,Q,1,1,"tui-svg",26),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("polymorpheusOutlet",t.iconCleaner)("polymorpheusOutletContext",i.VKq(2,y,t.size))}}function q(t,e){if(1&t&&i._UZ(0,"tui-tooltip",28),2&t){const t=i.oxw();i.Q6J("content",null==t.hintOptions?null:t.hintOptions.content)("describeId",t.id)}}function I(t,e){1&t&&i._UZ(0,"tui-svg",23),2&t&&i.Q6J("src",e.polymorpheusOutlet)}function Y(t,e){if(1&t&&(i.TgZ(0,"div",29),i.YNc(1,I,1,1,"tui-svg",22),i.qZA()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("polymorpheusOutlet",t.iconContent)("polymorpheusOutletContext",i.VKq(2,y,t.size))}}const D=[[["textarea"]],"*"],E=["textarea","*"];let T=(()=>{class t extends s.M${constructor(t,e,n,o,i,r){super(t,e),this.isIOS=n,this.mode$=o,this.controller=i,this.hintOptions=r,this.rows=20,this.maxLength=null,this.expandable=!1}get labelOutside(){return this.controller.labelOutside}get nativeFocusableElement(){var t,e;return this.computedDisabled?null:(null===(t=this.textfield)||void 0===t?void 0:t.nativeElement)||(null===(e=this.focusableElement)||void 0===e?void 0:e.nativeElement)||null}get focused(){return(0,l.V8)(this.nativeFocusableElement)}get appearance(){return this.controller.appearance}get size(){return this.controller.size}get borderStart(){return this.iconLeftContent?g.iQ[this.size]:0}get borderEnd(){return(0,_._X)(!!this.iconContent,this.hasCleaner,this.hasTooltip,this.hasCustomContent,this.size)}get hasCleaner(){return this.controller.cleaner&&this.hasValue&&this.interactive}get hasTooltip(){var t;return!!(null===(t=this.hintOptions)||void 0===t?void 0:t.content)&&(this.controller.options.hintOnDisabled||!this.computedDisabled)}get hasValue(){return""!==this.value}get hasCounter(){return!!this.maxLength&&this.interactive}get hasPlaceholder(){return this.placeholderRaisable||!this.hasValue&&!this.hasExampleText}get hasCustomContent(){return!!this.controller.customContent}get iconLeftContent(){return this.controller.iconLeft}get iconContent(){return this.controller.icon}get iconCleaner(){return this.controller.options.iconCleaner}get hasExampleText(){var t;return!!(null===(t=this.textfield)||void 0===t?void 0:t.nativeElement.placeholder)&&this.focused&&!this.hasValue&&!this.readOnly}get computeMaxHeight(){return this.expandable?this.rows*this.lineHeight:null}get placeholderRaised(){return this.placeholderRaisable&&(this.computedFocused&&!this.readOnly||this.hasValue)}get fittedContent(){return this.value.slice(0,this.maxLength||1/0)}get extraContent(){return this.value.slice(this.maxLength||1/0)}onFocused(t){this.updateFocused(t)}onValueChange(t){this.value=t}onMouseDown(t){t.target!==this.nativeFocusableElement&&(t.preventDefault(),this.nativeFocusableElement&&this.nativeFocusableElement.focus())}getFallbackValue(){return""}get lineHeight(){return"m"===this.controller.size?20:24}get placeholderRaisable(){return"s"!==this.size&&!this.controller.labelOutside}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.a5,10),i.Y36(i.sBO),i.Y36(c.FA),i.Y36(m.Au),i.Y36(C.Cs),i.Y36(O.bZ,8))},t.\u0275cmp=i.Xpm({type:t,selectors:[["tui-textarea"]],contentQueries:function(t,e,n){if(1&t&&i.Suo(n,g.MB,5,i.SBq),2&t){let t;i.iGM(t=i.CRH())&&(e.textfield=t.first)}},viewQuery:function(t,e){if(1&t&&i.Gf(x,5),2&t){let t;i.iGM(t=i.CRH())&&(e.focusableElement=t.first)}},hostVars:17,hostBindings:function(t,e){1&t&&i.NdJ("$.data-mode.attr",function(){return e.mode$})("focusin",function(){return e.onFocused(!0)})("focusout",function(){return e.onFocused(!1)}),2&t&&(i.uIk("data-size",e.size),i.Udp("--border-start",e.borderStart,"rem")("--border-end",e.borderEnd,"rem"),i.ekj("_ios",e.isIOS)("_expandable",e.expandable)("_label-outside",e.labelOutside)("_has-tooltip",e.hasTooltip)("_has-value",e.hasValue)("_has-counter",e.hasCounter))},inputs:{rows:"rows",maxLength:"maxLength",expandable:"expandable"},features:[i._Bn([(0,c.FT)(t),(0,s.wB)(t),C.Y0,f.CV]),i.qOj],ngContentSelectors:E,decls:23,vars:25,consts:[[4,"ngIf"],["automation-id","tui-text-area__wrapper","tuiWrapper","",1,"t-outline",3,"appearance","disabled","focus","hover","invalid","readOnly"],["automation-id","tui-text-area__counter","class","t-counter",4,"ngIf"],[1,"t-content",3,"mousedown"],[1,"t-wrapper"],["automation-id","tui-text-area__placeholder","class","t-placeholder",3,"t-placeholder_raised",4,"ngIf"],["automation-id","tui-text-area__scrollbar",1,"t-box"],[1,"t-input-wrapper"],[1,"t-relative"],["aria-hidden","true",1,"t-pseudo-content"],[3,"textContent"],[1,"t-pseudo-content__extra",3,"textContent"],[1,"t-caret"],["automation-id","tui-text-area__native",1,"t-input",3,"disabled","id","readOnly","tuiFocusable","ngModel","ngModelChange"],["focusableElement",""],[1,"t-icons"],["class","t-icon t-icon_left t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__tooltip",3,"content","describeId",4,"ngIf"],["class","t-icon t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__counter",1,"t-counter"],["automation-id","tui-text-area__placeholder",1,"t-placeholder"],[1,"t-icon","t-icon_left","t-textfield-icon"],["appearance","icon","tuiWrapper","",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",3,"src"],[3,"src",4,"polymorpheusOutlet"],[3,"src"],["appearance","icon","tuiWrapper","","class","t-cleaner",3,"src","click.stop",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",1,"t-cleaner",3,"src","click.stop"],["automation-id","tui-text-area__tooltip",3,"content","describeId"],[1,"t-icon","t-textfield-icon"]],template:function(t,e){1&t&&(i.F$t(D),i.YNc(0,P,1,0,"ng-container",0),i.ALo(1,"async"),i.TgZ(2,"div",1),i.YNc(3,v,2,2,"div",2),i.TgZ(4,"label",3),i.NdJ("mousedown",function(t){return e.onMouseDown(t)}),i.TgZ(5,"div",4),i.YNc(6,w,2,2,"div",5),i.TgZ(7,"tui-scrollbar",6),i.TgZ(8,"div",7),i.TgZ(9,"div",8),i.TgZ(10,"div",9),i._UZ(11,"span",10),i._UZ(12,"span",11),i._UZ(13,"span",12),i.qZA(),i.TgZ(14,"textarea",13,14),i.NdJ("ngModelChange",function(t){return e.value=t}),i.qZA(),i.Hsn(16),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(17,"div",15),i.YNc(18,k,2,4,"div",16),i.YNc(19,J,2,1,"ng-container",0),i.YNc(20,F,2,4,"ng-container",0),i.YNc(21,q,1,2,"tui-tooltip",17),i.YNc(22,Y,2,4,"div",18),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.Q6J("ngIf",i.lcZ(1,23,null==e.hintOptions?null:e.hintOptions.change$)),i.xp6(2),i.Q6J("appearance",e.appearance)("disabled",e.disabled)("focus",e.computedFocused)("hover",e.pseudoHover)("invalid",e.computedInvalid)("readOnly",e.readOnly),i.xp6(1),i.Q6J("ngIf",e.hasCounter),i.xp6(3),i.Q6J("ngIf",e.hasPlaceholder),i.xp6(1),i.Udp("max-height",e.computeMaxHeight,"px"),i.xp6(4),i.Q6J("textContent",e.fittedContent||(null==e.nativeFocusableElement?null:e.nativeFocusableElement.placeholder)),i.xp6(1),i.Q6J("textContent",e.extraContent),i.xp6(2),i.Q6J("disabled",e.computedDisabled)("id",e.id)("readOnly",e.readOnly)("tuiFocusable",e.computedFocusable)("ngModel",e.value),i.xp6(4),i.Q6J("ngIf",e.iconLeftContent),i.xp6(1),i.Q6J("ngIf",e.hasCustomContent),i.xp6(1),i.Q6J("ngIf",e.hasCleaner),i.xp6(1),i.Q6J("ngIf",e.hasTooltip),i.xp6(1),i.Q6J("ngIf",e.iconContent))},directives:[o.O5,d.o,u.IB,r.Fj,a.t,r.JJ,r.On,M.Li,h.PN,p.w],pipes:[o.Ov],styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-height:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-01)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}.t-outline[_ngcontent-%COMP%]{min-height:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-height:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-height:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-height:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-height:inherit;width:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-height:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-height:calc(100% - 1rem);width:100%}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{height:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{height:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word;pointer-events:none;color:transparent;overflow:hidden;border:solid transparent;border-top:0;border-bottom:0;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-error-bg-night)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03-night)}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:-moz-read-only)::placeholder{opacity:1}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-width:100%;border:solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;height:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:auto;margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;height:1rem;width:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:right;color:var(--tui-text-03)}[data-mode=onDark][_nghost-%COMP%]   .t-counter[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}"],changeDetection:0}),t})(),A=(()=>{class t extends b.D1{onValueChange(t){this.host.onValueChange(t)}}return t.\u0275fac=function(){let e;return function(n){return(e||(e=i.n5z(t)))(n||t)}}(),t.\u0275dir=i.lG2({type:t,selectors:[["tui-textarea"]],features:[i._Bn([(0,m.cp)(t)]),i.qOj]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,r.u5,a.u,u.Jy,p.Q,d.W,h.EI,g.KW,M.wq]]}),t})()}}]);