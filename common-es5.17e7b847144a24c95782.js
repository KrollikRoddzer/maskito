!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),r)}var i,o}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[8592],{61824:function(e,r,i){i.d(r,{T:function(){return l},I:function(){return g}});var o,a=i(74788),s=i(54789),c=i(18269),u=i(31081),l=((o=function(){function e(n){t(this,e),this.svgOptions=n,this.staticPath=this.svgOptions.path("tuiIcon").replace("tuiIcon.svg#tuiIcon","").replace("tuiIcon.svg".concat(c.uJ,"#tuiIcon"),"")}return n(e,[{key:"transform",value:function(t){if(!t)return null;switch(t){case u.X.BL:case u.X.BQ:case u.X.CW:case u.X.GF:case u.X.GP:case u.X.MF:case u.X.MQ:case u.X.NC:case u.X.RE:case u.X.YT:return"".concat(this.staticPath).concat(u.X.FR,".png");case u.X.SX:return"".concat(this.staticPath).concat(u.X.NL,".png");default:return"".concat(this.staticPath).concat(t,".png")}}}]),e}()).\u0275fac=function(t){return new(t||o)(a.Y36(s.$E,16))},o.\u0275pipe=a.Yjl({name:"tuiFlag",type:o,pure:!0}),o),g=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({}),e}()},46841:function(e,r,i){i.d(r,{h:function(){return u},y:function(){return l}});var o,a=i(74788),s=i(12057),c=["*"],u=((o=function(){function e(){t(this,e),this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1}return n(e,[{key:"sizeS",get:function(){return"s"===this.size}},{key:"sizeM",get:function(){return"m"===this.size}},{key:"sizeL",get:function(){return"l"===this.size}},{key:"textAlignLeft",get:function(){return"left"===this.textAlign}},{key:"textAlignCenter",get:function(){return"center"===this.textAlign}},{key:"textAlignRight",get:function(){return"right"===this.textAlign}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(t,e){2&t&&a.ekj("tui-island_hoverable",e.hoverable)("tui-island_transparent",e.transparent)("tui-island_size_s",e.sizeS)("tui-island_size_m",e.sizeM)("tui-island_size_l",e.sizeL)("tui-island_text-align_left",e.textAlignLeft)("tui-island_text-align_center",e.textAlignCenter)("tui-island_text-align_right",e.textAlignRight)},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:c,decls:1,vars:0,template:function(t,e){1&t&&(a.F$t(),a.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),o),l=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.ez]]}),e}()},45019:function(e,r,i){i.d(r,{B:function(){return h},z:function(){return d}});var o,a=i(74788),s=i(27103),c=i(54789),u=i(79456),l=i(12130),g=i(12057),h=((o=n(function e(n){t(this,e),this.mode$=n,this.mode=null,this.size="m",this.src=""})).\u0275fac=function(t){return new(t||o)(a.Y36(u.Au))},o.\u0275cmp=a.Xpm({type:o,selectors:[["tui-marker-icon"],["a","tuiMarkerIcon",""],["button","tuiMarkerIcon",""]],hostVars:2,hostBindings:function(t,e){1&t&&a.NdJ("$.data-mode.attr",function(){return e.mode$}),2&t&&a.uIk("data-marker-mode",e.mode)("data-size",e.size)},inputs:{mode:"mode",size:"size",src:"src"},features:[a._Bn([s.a3,l.CV])],decls:1,vars:1,consts:[[1,"t-icon",3,"src"]],template:function(t,e){1&t&&a._UZ(0,"tui-svg",0),2&t&&a.Q6J("src",e.src)},directives:[c.PN],styles:["[_nghost-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;border-radius:100%;color:var(--tui-text-03);background-color:var(--tui-base-02);background-size:cover!important;transition-property:color,background-color}[data-size=xs][_nghost-%COMP%]{width:2rem;height:2rem}[data-size=s][_nghost-%COMP%]{width:3rem;height:3rem}[data-size=m][_nghost-%COMP%]{width:4rem;height:4rem}[data-size=l][_nghost-%COMP%]{width:6rem;height:6rem}[data-size=xl][_nghost-%COMP%]{width:8rem;height:8rem}[new][data-size=xxs][_nghost-%COMP%]{width:1.5rem;height:1.5rem}[new][data-size=xxs][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.58)}[new][data-size=xs][_nghost-%COMP%]{width:2rem;height:2rem}[new][data-size=xs][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.83)}[new][data-size=s][_nghost-%COMP%]{width:2.5rem;height:2.5rem}[new][data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1)}[new][data-size=m][_nghost-%COMP%]{width:3rem;height:3rem}[new][data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1)}[new][data-size=l][_nghost-%COMP%]{width:4rem;height:4rem}[new][data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1.33)}[new][data-size=xl][_nghost-%COMP%]{width:6rem;height:6rem}[new][data-size=xl][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(2.33)}[new][data-size=xxl][_nghost-%COMP%]{width:8rem;height:8rem}[new][data-size=xxl][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(3.33)}[data-mode=onDark][_nghost-%COMP%]:not([data-marker-mode]){color:var(--tui-base-01);background-color:var(--tui-clear-inverse)}[data-marker-mode=primary][_nghost-%COMP%]{color:var(--tui-primary-text);background-color:var(--tui-primary)}[data-marker-mode=white][_nghost-%COMP%]{color:var(--tui-text-03);background-color:var(--tui-base-01)}[data-marker-mode=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background-color:var(--tui-warning-bg)}[data-marker-mode=secondary][_nghost-%COMP%]{color:var(--tui-base-01);background-color:var(--tui-info-fill)}[data-marker-mode=error][_nghost-%COMP%]{color:var(--tui-error-fill);background-color:var(--tui-error-bg)}[data-marker-mode=success][_nghost-%COMP%]{color:var(--tui-success-fill);background-color:var(--tui-success-bg)}[data-marker-mode=link][_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);background-color:var(--tui-secondary)}a[data-marker-mode=link][_nghost-%COMP%], button[data-marker-mode=link][_nghost-%COMP%]{cursor:pointer}a[data-marker-mode=link][_nghost-%COMP%]:hover, button[data-marker-mode=link][_nghost-%COMP%]:hover{color:var(--tui-link-hover);background-color:var(--tui-secondary-hover)}a[data-marker-mode=link][_nghost-%COMP%]:active, button[data-marker-mode=link][_nghost-%COMP%]:active{color:var(--tui-link-hover);background-color:var(--tui-secondary-active)}.t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}[data-size=xs][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1)}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1)}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(1.33)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(2)}[data-size=xl][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(2.67)}"],changeDetection:0}),o),d=function(){var e=n(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[g.ez,c.EI]]}),e}()},56119:function(e,r,i){i.d(r,{R:function(){return u}});var o,a=i(74788),s=i(2586),c=i(82847),u=((o=n(function e(){t(this,e),this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.pluginsDocPage="/core-concepts/plugins",this.overwriteModeDocPage="/core-concepts/overwrite-mode"})).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["next-steps"]],decls:18,vars:4,consts:[[1,"tui-space_top-12"],[1,"tui-list"],["routerLinkActive","_hidden",1,"tui-list__item"],["tuiLink","",3,"routerLink"]],template:function(t,e){1&t&&(a.TgZ(0,"section",0),a.TgZ(1,"h2"),a._uU(2,"Next steps"),a.qZA(),a.TgZ(3,"p"),a._uU(4," The following sections are recommended to explore core concepts further: "),a.qZA(),a.TgZ(5,"ul",1),a.TgZ(6,"li",2),a.TgZ(7,"a",3),a._uU(8," Mask expression "),a.qZA(),a.qZA(),a.TgZ(9,"li",2),a.TgZ(10,"a",3),a._uU(11," Processors "),a.qZA(),a.qZA(),a.TgZ(12,"li",2),a.TgZ(13,"a",3),a._uU(14," Plugins "),a.qZA(),a.qZA(),a.TgZ(15,"li",2),a.TgZ(16,"a",3),a._uU(17," Overwrite mode "),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("routerLink",e.maskExpressionDocPage),a.xp6(3),a.Q6J("routerLink",e.processorsDocPage),a.xp6(3),a.Q6J("routerLink",e.pluginsDocPage),a.xp6(3),a.Q6J("routerLink",e.overwriteModeDocPage))},directives:[s.Od,c.V,s.yS],styles:["._hidden[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),o)},13805:function(e,r,i){i.d(r,{L:function(){return u}});var o,a=i(2586),s=i(82847),c=i(74788),u=((o=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({imports:[[s.j,a.Bz]]}),o)}}])}();