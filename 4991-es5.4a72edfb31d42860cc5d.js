!function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(n=i.key,r=void 0,"symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?r:String(r)),i)}var n,r}function t(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[4991],{70997:function(e,i,n){n.d(i,{fV:function(){return c}});var r,u=n(74788),a=n(41823),c=((r=t(function e(){o(this,e)})).\u0275fac=function(e){return new(e||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[a.JF,a.mG,a.Lx,a.Lq,a.u4]}),r)},94991:function(e,i,n){n.r(i),n.d(i,{ReactDocPageModule:function(){return h}});var r,u=n(12057),a=n(87862),c=n(2586),s=n(52494),p=n(70997),d=n(44427),Z=n(82847),g=n(60885),f=n(74788),l=n(41823),m=((r=t(function e(){o(this,e),this.coreConceptsOverviewDocPage="/core-concepts/overview",this.useMaskitoBasicUsage=n.e(6347).then(n.t.bind(n,26347,17)),this.queryNestedInputDemo=n.e(2951).then(n.t.bind(n,2951,17)),this.controlledInputDemo=n.e(269).then(n.t.bind(n,70269,17)),this.bestBadPractice=n.e(6976).then(n.t.bind(n,16976,17))})).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f.Xpm({type:r,selectors:[["react-doc-page"]],decls:69,vars:5,consts:[["header","React","path","react"],[1,"tui-space_top-0"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],["code","npm install @maskito/{core,react}"],[3,"code"],[1,"tui-space_bottom-4"],["href","https://react.dev/reference/react-dom/components/input#props","rel","noreferrer","target","_blank","tuiLink",""]],template:function(e,t){1&e&&(f.TgZ(0,"tui-doc-page",0),f.TgZ(1,"p",1),f.TgZ(2,"code"),f._uU(3,"@maskito/react"),f.qZA(),f._uU(4," is a light-weighted library to use "),f.TgZ(5,"strong"),f._uU(6,"Maskito"),f.qZA(),f._uU(7," in an React-way. "),f.qZA(),f.TgZ(8,"tui-notification",2),f.TgZ(9,"strong"),f._uU(10,"Prerequisites"),f.qZA(),f.TgZ(11,"p",3),f._uU(12," To get the most out of this guide, you should review the topic "),f.TgZ(13,"a",4),f._uU(14,' "Core\xa0Concepts" '),f.qZA(),f._uU(15," first. "),f.qZA(),f.qZA(),f.TgZ(16,"section",5),f.TgZ(17,"h2"),f._uU(18,"Getting Started"),f.qZA(),f.TgZ(19,"p"),f._uU(20,"Install libraries"),f.qZA(),f._UZ(21,"tui-doc-code",6),f.TgZ(22,"p"),f._uU(23," and use "),f.TgZ(24,"strong"),f._uU(25,"Maskito"),f.qZA(),f.qZA(),f._UZ(26,"tui-doc-code",7),f.qZA(),f.TgZ(27,"section",5),f.TgZ(28,"h2"),f._uU(29,"Query nested input element"),f.qZA(),f.TgZ(30,"p"),f._uU(31," Pass a predicate to "),f.TgZ(32,"strong"),f._uU(33,"elementPredicate"),f.qZA(),f._uU(34," to find input element for you, if you do not have a direct access to it. For example, you use component from some UI Kit library. "),f.qZA(),f.TgZ(35,"tui-notification",8),f._uU(36," By default "),f.TgZ(37,"strong"),f._uU(38,"Maskito"),f.qZA(),f._uU(39," will try to find input/textarea by querying its host: "),f.TgZ(40,"code"),f._uU(41,"host.querySelector('input,textarea')"),f.qZA(),f._uU(42," so that might be sufficient. Use custom predicate if you need custom logic. "),f.qZA(),f._UZ(43,"tui-doc-code",7),f.qZA(),f.TgZ(44,"section",5),f.TgZ(45,"h2"),f._uU(46,"Controlled masked input"),f.qZA(),f.TgZ(47,"p"),f.TgZ(48,"strong"),f._uU(49,"Maskito"),f.qZA(),f._uU(50," core is developed as framework-agnostic library. It does not depend on any JS-framework's peculiarities. It uses only native browser API. That is why you should use native "),f.TgZ(51,"code"),f._uU(52,"onInput"),f.qZA(),f._uU(53," instead of React-specific "),f.TgZ(54,"code"),f._uU(55,"onChange"),f.qZA(),f._uU(56," event. Do not worry, both events works similarly! Read more about it in the "),f.TgZ(57,"a",9),f._uU(58," official\xa0React\xa0documentation. "),f.qZA(),f.qZA(),f._UZ(59,"tui-doc-code",7),f.qZA(),f.TgZ(60,"section",5),f.TgZ(61,"h2"),f._uU(62,"Best practices & Anti-Patterns"),f.qZA(),f.TgZ(63,"p"),f._uU(64," Pass named variables to avoid unnecessary hook runs with "),f.TgZ(65,"strong"),f._uU(66,"Maskito"),f.qZA(),f._uU(67," recreation: "),f.qZA(),f._UZ(68,"tui-doc-code",7),f.qZA(),f.qZA()),2&e&&(f.xp6(13),f.Q6J("routerLink",t.coreConceptsOverviewDocPage),f.xp6(13),f.Q6J("code",t.useMaskitoBasicUsage),f.xp6(17),f.Q6J("code",t.queryNestedInputDemo),f.xp6(16),f.Q6J("code",t.controlledInputDemo),f.xp6(9),f.Q6J("code",t.bestBadPractice))},directives:[l.qo,g.L,Z.V,c.yS,l.c0],encapsulation:2,changeDetection:0}),r),h=function(){var e=t(function e(){o(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[u.ez,a.u5,a.UX,s.U5,p.fV,Z.j,g.H,c.Bz.forChild((0,d.Ve)(m))]]}),e}()}}])}();