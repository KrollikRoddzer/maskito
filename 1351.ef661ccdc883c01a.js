"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1351],{6720:(f,c,e)=>{e.d(c,{TuiAddonDocModule:()=>d});var l=e(4537),u=e(3445);let d=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[u.JF,u.mG,u.Lx,u.Lq,u.u4]}),i})()},1351:(f,c,e)=>{e.r(c),e.d(c,{PluginsDocPageModule:()=>y});var l=e(8692),u=e(9900),d=e(3178),p=e(6720),i=e(3056),m=e(2847),r=e(885),g=e(3077),P=e(3805),h=e(4707),t=e(4537),D=e(6119),v=e(3445),M=e(8225);const j={mask:/^\d{0,3}$/,plugins:[n=>{const a=()=>{const o=n.value;n.addEventListener("beforeinput",s=>{s.defaultPrevented&&o===n.value&&n.dispatchEvent(new CustomEvent("maskitoReject",{bubbles:!0}))},{once:!0})};return n.addEventListener("beforeinput",a,!0),()=>n.removeEventListener("beforeinput",a,!0)}]};var x=e(7258),C=e(5640);let E=(()=>{class n{constructor(){this.maskitoOptions=Object.assign(Object.assign({},j),{plugins:[M.Bb]}),this.value="",this.reject=-1}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["plugins-reject-doc-example-1"]],decls:3,vars:4,consts:[[1,"input",3,"ngModel","ngModelChange","maskitoReject"],["tuiTextfield","",3,"maskito"]],template:function(o,s){1&o&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(O){return s.value=O})("maskitoReject",function(){return s.reject=s.reject+1}),t._uU(1," CVC "),t._UZ(2,"input",1),t.qZA()),2&o&&(t.Udp("animation-name","reject-"+s.reject%2),t.Q6J("ngModel",s.value),t.xp6(2),t.Q6J("maskito",s.maskitoOptions))},dependencies:[u.JJ,u.On,x.r,g.K3,g.wU,C.MB],styles:["@keyframes _ngcontent-%COMP%_reject-0{0%{box-shadow:0 0 var(--tui-error-fill)}to{box-shadow:0 0 1rem var(--tui-error-bg)}}@keyframes _ngcontent-%COMP%_reject-1{0%{box-shadow:0 0 var(--tui-error-fill)}to{box-shadow:0 0 1rem var(--tui-error-bg)}}.input[_ngcontent-%COMP%]{max-width:20rem;animation:.3s 1}"],changeDetection:0}),n})(),T=(()=>{class n{constructor(){this.rejectExample={[h.C.MaskitoOptions]:e.e(3360).then(e.t.bind(e,3360,17))}}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["plugins-mode-doc-page"]],decls:15,vars:1,consts:[["header","Plugins"],[1,"tui-space_top-0"],["id","reject","heading","Visualize rejected characters",3,"content"],[1,"tui-space_bottom-3"]],template:function(o,s){1&o&&(t.TgZ(0,"tui-doc-page",0)(1,"p",1)(2,"strong"),t._uU(3,"Plugins"),t.qZA(),t._uU(4," are functions that are called with input/textarea element and mask options as arguments upon mask initialization. They can optionally return cleanup logic and allow you to extend mask with arbitrary additional behavior. "),t.qZA(),t.TgZ(5,"tui-doc-example",2)(6,"tui-notification",3),t._uU(7," This plugin is available as "),t.TgZ(8,"code"),t._uU(9,"maskitoRejectEvent"),t.qZA(),t._uU(10," in "),t.TgZ(11,"code"),t._uU(12,"@maskito/kit"),t.qZA()(),t._UZ(13,"plugins-reject-doc-example-1"),t.qZA(),t._UZ(14,"next-steps"),t.qZA()),2&o&&(t.xp6(5),t.Q6J("content",s.rejectExample))},dependencies:[r.L,D.R,v.qo,v.f2,E],encapsulation:2,changeDetection:0}),n})(),y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,u.u5,m.j,g.Qf,r.H,P.L,p.TuiAddonDocModule,d.Bz.forChild((0,i.Ve)(T))]}),n})()}}]);