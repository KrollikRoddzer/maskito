!function(){"use strict";function e(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,o(i.key),i)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[3355],{63355:function(t,o,r){r.r(o),r.d(o,{PhoneDocModule:function(){return P}});var a=r(12057),u=r(87862),s=r(2586),c=r(52494),p=r(70997),l=r(44427),f=r(61824),m=r(82847),d=r(79588),h=r(21673),g=r(14707),k=r(74788),v=r(84800),Z={mask:["+","1"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]},x=r(94853),b=r(49510),U=r(47258);function T(e,t){1&e&&(k._UZ(0,"img",3),k.ALo(1,"tuiFlag")),2&e&&k.Q6J("src",k.lcZ(1,1,"US"),k.LSH)}var w,_=((w=n(function e(){i(this,e),this.maskitoOptions=Z,this.value="+1 (212) 555-2368"})).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=k.Xpm({type:w,selectors:[["phone-doc-example-1"]],decls:5,vars:5,consts:[[3,"tuiTextfieldCustomContent","ngModel","ngModelChange"],["tuiTextfield","","inputmode","tel",3,"maskito"],["usFlag",""],["width","28","alt","Flag of the United States",3,"src"]],template:function(e,t){if(1&e&&(k.TgZ(0,"tui-input",0),k.NdJ("ngModelChange",function(e){return t.value=e}),k._uU(1," Enter a phone number "),k._UZ(2,"input",1),k.YNc(3,T,2,3,"ng-template",null,2,k.W1O),k.qZA()),2&e){var n=k.MAs(4);k.Udp("max-width",20,"rem"),k.Q6J("tuiTextfieldCustomContent",n)("ngModel",t.value),k.xp6(2),k.Q6J("maskito",t.maskitoOptions)}},directives:[h.K3,h.wU,d.B7,u.JJ,u.On,x.MB,b.F,U.r],pipes:[f.T],encapsulation:2,changeDetection:0}),w),y={mask:["+","7"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/],postprocessors:[(0,r(93943).jX)("+7 ")],preprocessors:[function(){var e=function(e){return e.replace(/^(\+?7?\s?8?)\s?/,"")},t=function(e){return e.replace(/\D/g,"").length};return function(n){var o=n.elementState,i=n.data,r=o.value;return{elementState:{selection:o.selection,value:t(r)>11?e(r):r},data:t(i)>=11?e(i):i}}}()]};function A(e,t){1&e&&(k._UZ(0,"img",3),k.ALo(1,"tuiFlag")),2&e&&k.Q6J("src",k.lcZ(1,1,"KZ"),k.LSH)}var C=function(){var e=function(){function e(){i(this,e),this.maskitoOptions=y,this.control=new u.NI("")}return n(e,[{key:"onFocus",value:function(){this.control.value||this.control.patchValue("+7 ")}},{key:"onBlur",value:function(){"+7 "===this.control.value&&this.control.patchValue("")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=k.Xpm({type:e,selectors:[["phone-doc-example-2"]],decls:5,vars:5,consts:[[3,"tuiTextfieldCustomContent","formControl"],["tuiTextfield","","autocomplete","tel","inputmode","tel",3,"maskito","focus","blur"],["kzFlag",""],["width","28","alt","Flag of Kazakhstan",3,"src"]],template:function(e,t){if(1&e&&(k.TgZ(0,"tui-input",0),k._uU(1," Enter a phone number "),k.TgZ(2,"input",1),k.NdJ("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),k.qZA(),k.qZA(),k.YNc(3,A,2,3,"ng-template",null,2,k.W1O)),2&e){var n=k.MAs(4);k.Udp("max-width",20,"rem"),k.Q6J("tuiTextfieldCustomContent",n)("formControl",t.control),k.xp6(2),k.Q6J("maskito",t.maskitoOptions)}},directives:[h.K3,h.wU,d.B7,u.JJ,u.oH,x.MB,b.F,U.r],pipes:[f.T],encapsulation:2,changeDetection:0}),e}();function q(e,t){if(1&e&&(k.TgZ(0,"p",1),k._uU(1," The following example demonstrates a more complex mask. It shows how to make the country prefix non-removable. It is achieved by built-in "),k.TgZ(2,"strong"),k._uU(3,"postprocessor"),k.qZA(),k._uU(4," from "),k.TgZ(5,"code"),k._uU(6,"@maskito/kit"),k.qZA(),k._uU(7," . "),k.qZA(),k.TgZ(8,"p"),k._uU(9," Read more about it in "),k.TgZ(10,"a",7),k._uU(11,' "With prefix" '),k.qZA(),k._uU(12," section. "),k.qZA()),2&e){var n=k.oxw();k.xp6(10),k.Q6J("routerLink",n.prefixDocPage)}}var J=function(){var t=n(function t(){i(this,t),this.maskExpressionDocPage="/core-concepts/mask-expression",this.prefixDocPage="/recipes/prefix",this.usPhoneExample1=e({},g.C.MaskitoOptions,r.e(793).then(r.t.bind(r,10793,17))),this.kzPhoneExample2=e({},g.C.MaskitoOptions,r.e(8644).then(r.t.bind(r,88644,17)))});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=k.Xpm({type:t,selectors:[["phone-doc"]],decls:20,vars:4,consts:[["header","Phone","package","Recipes"],[1,"tui-space_top-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_bottom-0"],["id","us","heading","United States",3,"content"],["id","kz","heading","Kazakhstan",3,"content","description"],["kzMaskDescription",""],["tuiLink","","fragment","by-postprocessor",3,"routerLink"]],template:function(e,t){if(1&e&&(k.TgZ(0,"tui-doc-page",0),k.TgZ(1,"p",1),k._uU(2," Creating mask for a phone number is simple. The only required knowledge is the "),k.TgZ(3,"strong"),k._uU(4,"pattern\xa0mask\xa0expression"),k.qZA(),k._uU(5," with "),k.TgZ(6,"strong"),k._uU(7,"fixed\xa0characters"),k.qZA(),k._uU(8," . Read more about it in "),k.TgZ(9,"a",2),k._uU(10,' "Mask\xa0expression" '),k.qZA(),k._uU(11," section. "),k.qZA(),k.TgZ(12,"p",3),k._uU(13," This page demonstrates some examples for different countries. "),k.qZA(),k.TgZ(14,"tui-doc-example",4),k._UZ(15,"phone-doc-example-1"),k.qZA(),k.TgZ(16,"tui-doc-example",5),k.YNc(17,q,13,1,"ng-template",null,6,k.W1O),k._UZ(19,"phone-doc-example-2"),k.qZA(),k.qZA()),2&e){var n=k.MAs(18);k.xp6(9),k.Q6J("routerLink",t.maskExpressionDocPage),k.xp6(5),k.Q6J("content",t.usPhoneExample1),k.xp6(2),k.Q6J("content",t.kzPhoneExample2)("description",n)}},directives:[v.qo,m.V,s.yS,v.f2,_,C],encapsulation:2,changeDetection:0}),t}(),P=function(){var e=n(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k.oAB({type:e}),e.\u0275inj=k.cJS({imports:[[a.ez,u.u5,u.UX,c.U5,p.fV,f.I,h.Qf,m.j,d.cn,s.Bz.forChild((0,l.Ve)(J))]]}),e}()}}])}();