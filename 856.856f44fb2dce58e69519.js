"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[856],{2856:(Z,i,t)=>{t.r(i),t.d(i,{ProcessorsDocPageModule:()=>g});var l=t(6104),c=t(7169),r=t(5955),u=t(2847),p=t(885),e=t(4788);let m=(()=>{class o{constructor(){this.elementStateDemo=t.e(610).then(t.t.bind(t,1610,17)),this.preprocessorFirstArgDemo=t.e(391).then(t.t.bind(t,2391,17)),this.preprocessorsSecondArgDemo=t.e(245).then(t.t.bind(t,3245,17)),this.preprocessorInActionDemo=t.e(92).then(t.t.bind(t,2092,17)),this.postprocessorInActionDemo=t.e(681).then(t.t.bind(t,7681,17)),this.maskitoPipeDemo=t.e(743).then(t.t.bind(t,9743,17)),this.maskExpressionDocPage="/core-concepts/mask-expression",this.overwriteModeDocPage="/core-concepts/overwrite-mode"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["processors-doc-page"]],decls:124,vars:8,consts:[["header","Processors"],[1,"tui-space_bottom-12"],[1,"tui-space_top-0"],["href","https://github.com/Tinkoff/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event","target","_blank","tuiLink",""],[1,"tui-space_bottom-1"],[1,"tui-list"],[1,"tui-list__item"],["href","https://github.com/Tinkoff/maskito/blob/main/projects/core/src/lib/types/element-state.ts","target","_blank","tuiLink",""],[1,"tui-space_top-1","tui-space_bottom-1",3,"code"],[1,"tui-space_bottom-0"],[1,"tui-space_top-0","tui-space_bottom-0"],[1,"tui-space_bottom-6"],[1,"tui-list","tui-list_ordered"],[1,"tui-space_top-1",3,"code"],[3,"code"],["status","warning",1,"tui-space_bottom-4"],["tuiLink","",3,"routerLink"]],template:function(n,s){1&n&&(e.TgZ(0,"tui-doc-page",0),e.TgZ(1,"section",1),e.TgZ(2,"p",2),e.TgZ(3,"a",3),e.TgZ(4,"code"),e._uU(5,"MaskitoOptions"),e.qZA(),e.qZA(),e._uU(6," have optional parameters "),e.TgZ(7,"code"),e._uU(8,"preprocessors"),e.qZA(),e._uU(9," and "),e.TgZ(10,"code"),e._uU(11,"postprocessors"),e.qZA(),e._uU(12," . They are functions triggered on every user's input ( "),e.TgZ(13,"a",4),e._uU(14," beforeinput "),e.qZA(),e._uU(15," and "),e.TgZ(16,"a",5),e._uU(17," input "),e.qZA(),e._uU(18," events). They provide with an opportunity to modify value before\xa0/\xa0after mask's\xa0operations. "),e.qZA(),e.TgZ(19,"section"),e.TgZ(20,"p",6),e._uU(21," Preprocessors and postprocessors accept different types of arguments but they have two important similarities: "),e.qZA(),e.TgZ(22,"ul",7),e.TgZ(23,"li",8),e._uU(24," The first argument always contains object with all mutable information. Object with the same properties (but not compulsory with the same values!) can be returned from the processor. It means that you can keep all properties untouched (and make function just to return the same object) or you can change any of these properties (or even change everything!). The returned value will be passed into the mask. "),e.qZA(),e.TgZ(25,"li",8),e._uU(26," The further arguments contain immutable information that can be useful to build some complex logic, but you cannot change it. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"section",1),e.TgZ(28,"h2"),e._uU(29,"What is element state?"),e.qZA(),e.TgZ(30,"p"),e._uU(31," Before you learn more about processors, you should learn a single prerequisite \u2013 meaning of term "),e.TgZ(32,"strong"),e._uU(33,'"element\xa0state"'),e.qZA(),e._uU(34," . It describes objects which implements "),e.TgZ(35,"a",9),e.TgZ(36,"code"),e._uU(37,"ElementState"),e.qZA(),e.qZA(),e._uU(38," -interface: "),e._UZ(39,"tui-doc-code",10),e._uU(40," Processors actively use this concept. Developer who writes new processor has direct access to element state of the masked input or textarea. Element state can be read and even changed via processors. "),e.qZA(),e.qZA(),e.TgZ(41,"section",1),e.TgZ(42,"h2"),e._uU(43,"Preprocessor"),e.qZA(),e.TgZ(44,"p",11),e._uU(45," It is a function that is called "),e.TgZ(46,"strong"),e._uU(47,"before"),e.qZA(),e._uU(48," each mask's operation. "),e.qZA(),e.TgZ(49,"p",12),e._uU(50," For example, if user types new character, then the processor will be called first, and only then returned value (from the processor) will be passed into the mask, and finally the mask will accept or reject new typed character and insert it to the element. "),e.qZA(),e.TgZ(51,"section",13),e.TgZ(52,"p"),e._uU(53,"Preprocessor accepts two arguments:"),e.qZA(),e.TgZ(54,"ol",14),e.TgZ(55,"li",8),e.TgZ(56,"strong"),e._uU(57," Object with two properties: "),e.TgZ(58,"code"),e._uU(59,"elementState"),e.qZA(),e._uU(60," and "),e.TgZ(61,"code"),e._uU(62,"data"),e.qZA(),e._uU(63," . "),e.qZA(),e._uU(64," Object with the same properties (but not compulsory with the same values!) can returned from the preprocessor. "),e._UZ(65,"tui-doc-code",15),e.qZA(),e.TgZ(66,"li",8),e._uU(67," Name of action which triggers current execution. It can with the following possible values: "),e._UZ(68,"tui-doc-code",16),e.qZA(),e.qZA(),e.qZA(),e.TgZ(69,"p"),e._uU(70," Preprocessor returns the same objects as the first argument (it can contain other values, but it must implement the same interface). "),e.qZA(),e._UZ(71,"tui-doc-code",16),e.qZA(),e.TgZ(72,"section",1),e.TgZ(73,"h2"),e._uU(74,"Postprocessor"),e.qZA(),e.TgZ(75,"p",11),e._uU(76," It is a function that is called "),e.TgZ(77,"strong"),e._uU(78,"after"),e.qZA(),e._uU(79," each mask's operation. When the preprocessor are already called, all mask operations happened and the input's value is about to be updated. You can change everything manually! "),e.qZA(),e.TgZ(80,"section",13),e.TgZ(81,"p"),e._uU(82,"Postprocessor accepts two arguments:"),e.qZA(),e.TgZ(83,"ol",14),e.TgZ(84,"li",8),e.TgZ(85,"strong"),e._uU(86,"Element state after all mask's operations."),e.qZA(),e._uU(87," Object with the same properties (but not compulsory with the same values!) can returned from the preprocessor. "),e.qZA(),e.TgZ(88,"li",8),e.TgZ(89,"strong"),e._uU(90," Initial element state before preprocessor's executiton and all mask's operations. "),e.qZA(),e._uU(91," It is a readonly argument (of course, you can't change the past!). "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(92,"p"),e._uU(93," Postprocessor returns the same objects as the first argument (it can contain other values, but it must implement the same interface). "),e.qZA(),e.TgZ(94,"tui-notification",17),e.TgZ(95,"p",12),e.TgZ(96,"strong"),e._uU(97,"With great power comes great responsibility!"),e.qZA(),e.qZA(),e.TgZ(98,"p",11),e._uU(99," Postprocessor is the final step before input's value update which gives a lot of flexibility. Use postprocessor wisely and return valid value! "),e.qZA(),e.qZA(),e._UZ(100,"tui-doc-code",16),e.qZA(),e.TgZ(101,"section",1),e.TgZ(102,"h2"),e._uU(103,"maskitoPipe"),e.qZA(),e.TgZ(104,"p"),e._uU(105," The Maskito team likes code decomposition and promotes it! Don't put all complex logic inside the single processor. Break it into the several processors so that each processor implements only a single task. "),e.qZA(),e.TgZ(106,"p"),e._uU(107," Use the built-in "),e.TgZ(108,"code"),e._uU(109,"maskitoPipe"),e.qZA(),e._uU(110," to stack multiple processors of the same type: "),e.qZA(),e._UZ(111,"tui-doc-code",16),e.qZA(),e.TgZ(112,"section"),e.TgZ(113,"h2"),e._uU(114,"Next steps"),e.qZA(),e.TgZ(115,"p"),e._uU(116," The following sections are recommended to explore core concepts further: "),e.qZA(),e.TgZ(117,"ul",7),e.TgZ(118,"li",8),e.TgZ(119,"a",18),e._uU(120," Mask expression "),e.qZA(),e.qZA(),e.TgZ(121,"li",8),e.TgZ(122,"a",18),e._uU(123," Overwrite mode "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(39),e.Q6J("code",s.elementStateDemo),e.xp6(26),e.Q6J("code",s.preprocessorFirstArgDemo),e.xp6(3),e.Q6J("code",s.preprocessorsSecondArgDemo),e.xp6(3),e.Q6J("code",s.preprocessorInActionDemo),e.xp6(29),e.Q6J("code",s.postprocessorInActionDemo),e.xp6(11),e.Q6J("code",s.maskitoPipeDemo),e.xp6(8),e.Q6J("routerLink",s.maskExpressionDocPage),e.xp6(3),e.Q6J("routerLink",s.overwriteModeDocPage))},directives:[r.qo,u.V,r.c0,p.Ls,c.yS],encapsulation:2,changeDetection:0}),o})(),g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,r.fV,u.j,p.Hi,c.Bz.forChild((0,r.Ve)(m))]]}),o})()}}]);