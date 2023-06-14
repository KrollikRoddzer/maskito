!function(){"use strict";function e(e,t,n){return(t=o(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[7989],{77989:function(t,o,a){a.r(o),a.d(o,{PostfixDocModule:function(){return O}});var s,u=a(12057),c=a(87862),p=a(2586),l=a(52494),f=a(70997),m=a(44427),d=a(82847),h=a(60885),g=a(21673),v=a(14707),y=a(74788),x=a(84800),b={mask:function(e){var t=e.value,n=Array.from(t.replace(/%/g,"")).map(function(){return/\d/});return n.length?[].concat(i(n),["%"]):[/\d/]}},k=a(94853),w=a(49510),A=a(47258),Z=((s=n(function e(){r(this,e),this.maskitoOptions=b,this.value=""})).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=y.Xpm({type:s,selectors:[["postfix-doc-example-1"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","tel",3,"maskito"]],template:function(e,t){1&e&&(y.TgZ(0,"tui-input",0),y.NdJ("ngModelChange",function(e){return t.value=e}),y._uU(1," Enter percentage amount "),y._UZ(2,"input",1),y.qZA()),2&e&&(y.Udp("max-width",20,"rem"),y.Q6J("ngModel",t.value),y.xp6(2),y.Q6J("maskito",t.maskitoOptions))},directives:[g.K3,g.wU,c.JJ,c.On,k.MB,w.F,A.r],encapsulation:2,changeDetection:0}),s),U=a(93943),T={mask:/^\$?\d*(\.0{0,2})?$/,postprocessors:[(0,U.jX)("$"),(0,U.A7)(".00")]},M=["inputRef"],_=function(){var e=function(){function e(){r(this,e),this.maskitoOptions=T,this.value=""}return n(e,[{key:"onFocus",value:function(){var e=this;this.value||(this.value="$.00",setTimeout(function(){e.inputElement.nativeElement.setSelectionRange(1,1)}))}},{key:"onBlur",value:function(){"$.00"===this.value&&(this.value="")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y.Xpm({type:e,selectors:[["postfix-doc-example-2"]],viewQuery:function(e,t){var n;(1&e&&y.Gf(M,5,y.SBq),2&e)&&(y.iGM(n=y.CRH())&&(t.inputElement=n.first))},decls:4,vars:4,consts:[[3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","numeric",3,"maskito","focus","blur"],["inputRef",""]],template:function(e,t){1&e&&(y.TgZ(0,"tui-input",0),y.NdJ("ngModelChange",function(e){return t.value=e}),y._uU(1," Enter price "),y.TgZ(2,"input",1,2),y.NdJ("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),y.qZA(),y.qZA()),2&e&&(y.Udp("max-width",20,"rem"),y.Q6J("ngModel",t.value),y.xp6(2),y.Q6J("maskito",t.maskitoOptions))},directives:[g.K3,g.wU,c.JJ,c.On,k.MB,w.F,A.r],encapsulation:2,changeDetection:0}),e}();function q(e,t){if(1&e&&(y._uU(0," This example demonstrates how to create postfix via dynamic "),y.TgZ(1,"strong"),y.TgZ(2,"a",5),y._uU(3," \xa0pattern\xa0mask\xa0expression "),y.qZA(),y.qZA(),y._uU(4," . Percent symbol is a trailing fixed character, which will be automatically added when user enters the first digit. ")),2&e){var n=y.oxw();y.xp6(2),y.Q6J("routerLink",n.maskExpressionDocPage)}}function J(e,t){if(1&e&&(y.TgZ(0,"p",6),y._uU(1," This example demonstrates how to create postfix via "),y.TgZ(2,"strong"),y.TgZ(3,"a",5),y._uU(4," postprocessor "),y.qZA(),y.qZA(),y._uU(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),y.TgZ(6,"code"),y._uU(7,"maskitoPostfixPostprocessorGenerator"),y.qZA(),y._uU(8," or create your own. "),y.qZA(),y.TgZ(9,"tui-notification",7),y._uU(10," Don't forget that "),y.TgZ(11,"code"),y._uU(12,"mask"),y.qZA(),y._uU(13," property should be compatible with a new postfix! "),y.qZA()),2&e){var n=y.oxw();y.xp6(3),y.Q6J("routerLink",n.processorsDocPage)}}var E=function(){var t=n(function t(){r(this,t),this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.patternMaskApproachExample1=e({},v.C.MaskitoOptions,a.e(6988).then(a.t.bind(a,36988,17))),this.postprocessorApproachExample2=e({},v.C.MaskitoOptions,a.e(1165).then(a.t.bind(a,71165,17)))});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Xpm({type:t,selectors:[["postfix-doc"]],decls:13,vars:4,consts:[["header","With postfix","package","Recipes"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],[1,"tui-space_top-0"],["status","warning"]],template:function(e,t){if(1&e&&(y.TgZ(0,"tui-doc-page",0),y._uU(1," There are two approaches to add "),y.TgZ(2,"strong"),y._uU(3,"postfix"),y.qZA(),y._uU(4," for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),y.TgZ(5,"tui-doc-example",1),y.YNc(6,q,5,1,"ng-template",null,2,y.W1O),y._UZ(8,"postfix-doc-example-1"),y.qZA(),y.TgZ(9,"tui-doc-example",3),y.YNc(10,J,14,1,"ng-template",null,4,y.W1O),y._UZ(12,"postfix-doc-example-2"),y.qZA(),y.qZA()),2&e){var n=y.MAs(7),o=y.MAs(11);y.xp6(5),y.Q6J("content",t.patternMaskApproachExample1)("description",n),y.xp6(4),y.Q6J("content",t.postprocessorApproachExample2)("description",o)}},directives:[x.qo,x.f2,Z,_,d.V,p.yS,h.Ls],encapsulation:2,changeDetection:0}),t}(),O=function(){var e=n(function e(){r(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y.oAB({type:e}),e.\u0275inj=y.cJS({imports:[[u.ez,c.u5,l.U5,f.fV,g.Qf,d.j,h.Hi,p.Bz.forChild((0,m.Ve)(E))]]}),e}()}}])}();