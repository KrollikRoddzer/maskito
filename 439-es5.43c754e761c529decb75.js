!function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,r=void 0,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"))?r:String(r)),a)}var o,r}function t(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[439],{70997:function(e,a,o){o.d(a,{fV:function(){return u}});var r,n=o(74788),c=o(84800),u=((r=t(function e(){i(this,e)})).\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[c.JF,c.mG,c.Lx,c.Lq,c.u4]}),r)},70439:function(e,a,o){o.r(a),o.d(a,{MaskitoLibrariesDocPageModule:function(){return f}});var r,n=o(12057),c=o(2586),u=o(70997),s=o(44427),p=o(82847),l=o(60885),g=o(74788),Z=o(84800),m=((r=t(function e(){i(this,e),this.numberMaskDocPage="/kit/number",this.timeMaskDocPage="/kit/time",this.coreConceptsOverviewDocPage="/core-concepts/overview",this.angularDocPage="/javascript-frameworks/angular",this.reactDocPage="/javascript-frameworks/react"})).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=g.Xpm({type:r,selectors:[["maskito-libraries-doc-page"]],decls:74,vars:5,consts:[["header","Maskito libraries"],[1,"tui-space_top-0"],[1,"tui-list"],[1,"tui-list__item","tui-space_bottom-8"],["code","npm install @maskito/core","filename","/your/project/path>"],["tuiLink","",3,"routerLink"],["status","warning"],["code","npm install @maskito/kit","filename","/your/project/path>"],[1,"tui-list__item"],["code","npm install @maskito/angular","filename","/your/project/path>"],["code","npm install @maskito/react","filename","/your/project/path>"]],template:function(e,t){1&e&&(g.TgZ(0,"tui-doc-page",0),g.TgZ(1,"p",1),g.TgZ(2,"strong"),g._uU(3,"Maskito"),g.qZA(),g._uU(4," is a collection of libraries. Explore them and learn how to install and use them. "),g.qZA(),g.TgZ(5,"ul",2),g.TgZ(6,"li",3),g.TgZ(7,"strong"),g._uU(8,"@maskito/core"),g.qZA(),g.TgZ(9,"p",1),g._uU(10," It is the main zero-dependency and framework-agnostic package. It can be used alone in vanilla JavaScript project. It listens to "),g.TgZ(11,"code"),g._uU(12,"beforeinput"),g.qZA(),g._uU(13," and "),g.TgZ(14,"code"),g._uU(15,"input"),g.qZA(),g._uU(16," events to validate and calibrate text field value. "),g.qZA(),g._UZ(17,"tui-doc-code",4),g.TgZ(18,"p"),g._uU(19," Learn more about this library in "),g.TgZ(20,"a",5),g._uU(21,' "Core\xa0Concepts" '),g.qZA(),g._uU(22," section. "),g.qZA(),g.qZA(),g.TgZ(23,"li",3),g.TgZ(24,"strong"),g._uU(25,"@maskito/kit"),g.qZA(),g.TgZ(26,"p",1),g._uU(27," The optional framework-agnostic package. It contains ready-to-use masks with configurable parameters. "),g.qZA(),g.TgZ(28,"tui-notification",6),g._uU(29," This package requires "),g.TgZ(30,"code"),g._uU(31,"@maskito/core"),g.qZA(),g._uU(32," as peer-dependency. "),g.qZA(),g._UZ(33,"tui-doc-code",7),g.TgZ(34,"p"),g._uU(35," See examples: "),g.TgZ(36,"a",5),g._uU(37," Number "),g.qZA(),g._uU(38," or "),g.TgZ(39,"a",5),g._uU(40," Time "),g.qZA(),g._uU(41," . "),g.qZA(),g.qZA(),g.TgZ(42,"li",8),g.TgZ(43,"strong"),g._uU(44,"@maskito/angular"),g.qZA(),g.TgZ(45,"p",1),g._uU(46," The Angular-specific library. It provides a convenient way to use Maskito as a directive. "),g.qZA(),g.TgZ(47,"tui-notification",6),g._uU(48," This package requires "),g.TgZ(49,"code"),g._uU(50,"@maskito/core"),g.qZA(),g._uU(51," as peer-dependency. "),g.qZA(),g._UZ(52,"tui-doc-code",9),g.TgZ(53,"p"),g._uU(54," Learn more about this library in "),g.TgZ(55,"a",5),g._uU(56,' "Angular" '),g.qZA(),g._uU(57," section. "),g.qZA(),g.qZA(),g.TgZ(58,"li",8),g.TgZ(59,"strong"),g._uU(60,"@maskito/react"),g.qZA(),g.TgZ(61,"p",1),g._uU(62," The React-specific library. It provides a convenient way to use Maskito as a hook. "),g.qZA(),g.TgZ(63,"tui-notification",6),g._uU(64," This package requires "),g.TgZ(65,"code"),g._uU(66,"@maskito/core"),g.qZA(),g._uU(67," as peer-dependency. "),g.qZA(),g._UZ(68,"tui-doc-code",10),g.TgZ(69,"p"),g._uU(70," Learn more about this library in "),g.TgZ(71,"a",5),g._uU(72,' "React" '),g.qZA(),g._uU(73," section. "),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e&&(g.xp6(20),g.Q6J("routerLink",t.coreConceptsOverviewDocPage),g.xp6(16),g.Q6J("routerLink",t.numberMaskDocPage),g.xp6(3),g.Q6J("routerLink",t.timeMaskDocPage),g.xp6(16),g.Q6J("routerLink",t.angularDocPage),g.xp6(16),g.Q6J("routerLink",t.reactDocPage))},directives:[Z.qo,Z.c0,p.V,c.yS,l.Ls],encapsulation:2,changeDetection:0}),r),f=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[n.ez,u.fV,p.j,l.Hi,c.Bz.forChild((0,s.Ve)(m))]]}),e}()}}])}();