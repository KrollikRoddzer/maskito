"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[55],{70997:function(e,t,o){o.d(t,{fV:function(){return a}});var s=o(74788),i=o(84800);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[i.JF,i.mG,i.Lx,i.Lq,i.u4]}),e})()},30055:function(e,t,o){o.r(t),o.d(t,{MaskExpressionDocPageModule:function(){return Z}});var s=o(12057),i=o(2586),a=o(70997),n=o(44427),r=o(82847),c=o(60885),u=o(74788),p=o(84800);let g=(()=>{class e{constructor(){this.regExpMaskExpDemo=o.e(4992).then(o.t.bind(o,96429,17)),this.basicTimeDemo=o.e(7891).then(o.t.bind(o,17891,17)),this.dynamicMaskExpDemo=o.e(5539).then(o.t.bind(o,75539,17)),this.elementStateDocPage="/core-concepts/element-state",this.processorsDocPage="/core-concepts/processors",this.overwriteModeDocPage="/core-concepts/overwrite-mode"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["mask-expression-doc-page"]],decls:111,vars:8,consts:[["header","Mask expression"],["href","https://github.com/Tinkoff/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","target","_blank","tuiLink",""],[1,"tui-space_top-8"],[1,"tui-list"],[1,"tui-list__item"],[1,"tui-space_top-0"],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions","target","_blank","tuiLink",""],[3,"code"],["status","warning",1,"tui-space_top-3"],["status","info"],["status","info",1,"tui-space_bottom-3"],["tuiLink","",3,"routerLink"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],[1,"tui-space_top-12"]],template:function(e,t){1&e&&(u.TgZ(0,"tui-doc-page",0),u.TgZ(1,"div"),u.TgZ(2,"strong"),u._uU(3,"Mask expression"),u.qZA(),u._uU(4," is the the main concept of Maskito core library. It provides the developer with opportunity to predefine format of user's input. For example, you can set mask expression to accept only digits, only Latin letters or you can configure more complex patterns like a date string. "),u.qZA(),u.TgZ(5,"p"),u._uU(6," You can set mask expression using "),u.TgZ(7,"code"),u._uU(8,"mask"),u.qZA(),u._uU(9," parameter of "),u.TgZ(10,"a",1),u.TgZ(11,"code"),u._uU(12,"MaskitoOptions"),u.qZA(),u.qZA(),u._uU(13," . "),u.qZA(),u.TgZ(14,"section",2),u.TgZ(15,"h2"),u._uU(16,"Types of mask expression"),u.qZA(),u.TgZ(17,"ul",3),u.TgZ(18,"li",4),u.TgZ(19,"strong"),u._uU(20,"RegExp mask expression"),u.qZA(),u.TgZ(21,"p",5),u._uU(22," The most basic and comprehensible type. The only required knowledge is understanding of native JavaScript "),u.TgZ(23,"a",6),u._uU(24," Regular\xa0expression "),u.qZA(),u._uU(25," . "),u.qZA(),u.TgZ(26,"p"),u._uU(27,"See the following example:"),u.qZA(),u._UZ(28,"tui-doc-code",7),u.TgZ(29,"tui-notification",8),u._uU(30," Make sure that mask expression works with any of intermediate states, not just the final value. "),u.TgZ(31,"p"),u._uU(32," For example, imagine that you have to create mask for 4-digits PIN code. "),u.qZA(),u.TgZ(33,"p"),u.TgZ(34,"code"),u._uU(35),u.qZA(),u._uU(36," is a wrong mask expression. It does not match intermediate states (you cannot complete 4-digit string without possibility to type 1-, 2- or 3-digit string). "),u.qZA(),u.TgZ(37,"p"),u.TgZ(38,"code"),u._uU(39),u.qZA(),u._uU(40," is the right solution for our example. "),u.qZA(),u.qZA(),u.qZA(),u.TgZ(41,"li",4),u.TgZ(42,"strong"),u._uU(43,"Pattern mask expression"),u.qZA(),u.TgZ(44,"p",5),u._uU(45," It is a good choice for more complex masks that are fixed in size. This type of mask expression is presented as array. Each element in the array has to be either a string or a regular expression. Each string is a "),u.TgZ(46,"em"),u._uU(47,"fixed character"),u.qZA(),u._uU(48," and each regular expression is validator of character at the same index. "),u.qZA(),u.TgZ(49,"tui-notification",9),u.TgZ(50,"strong"),u._uU(51,"Fixed character"),u.qZA(),u._uU(52," \u2014 a predefined character at a certain position (the same as its index inside mask expression array). It is automatically added when user forgets to type it. It cannot be erased or replaced with another character. "),u.qZA(),u.TgZ(53,"p"),u._uU(54," For example, imagine that you have to create mask for a time-string with "),u.TgZ(55,"code"),u._uU(56,"HH:MM"),u.qZA(),u._uU(57," format. It consists of 4 digits and 1 fixed-character separator "),u.TgZ(58,"code"),u._uU(59,":"),u.qZA(),u._uU(60," . "),u.qZA(),u._UZ(61,"tui-doc-code",7),u.TgZ(62,"p"),u._uU(63," This mask expression forbids anything excepts digits and limits length of the value to 5 characters. "),u.qZA(),u.TgZ(64,"p"),u._uU(65,"Also, it manages user interactions with fixed character."),u.qZA(),u.TgZ(66,"p"),u._uU(67," For example, user can just type four digits "),u.TgZ(68,"code"),u._uU(69,"1159"),u.qZA(),u._uU(70," and the value becomes "),u.TgZ(71,"code"),u._uU(72,"11:59"),u.qZA(),u.qZA(),u.TgZ(73,"p"),u._uU(74," Another example, if caret position is after the colon and user presses "),u.TgZ(75,"kbd"),u._uU(76,"Backspace"),u.qZA(),u._uU(77," , the input's value will not change but caret will be moved to the left of the colon. "),u.qZA(),u.qZA(),u.TgZ(78,"li",4),u.TgZ(79,"strong"),u._uU(80,"Dynamic mask expression"),u.qZA(),u.TgZ(81,"p",5),u.TgZ(82,"code"),u._uU(83,"mask"),u.qZA(),u._uU(84," parameter can also accepts function which generates mask expression. This function will be called "),u.TgZ(85,"strong"),u._uU(86,"every\xa0time\xa0before"),u.qZA(),u._uU(87," input changes to generate a new version of mask expression. "),u.qZA(),u.TgZ(88,"tui-notification",10),u._uU(89," An "),u.TgZ(90,"a",11),u._uU(91,' "Element\xa0state" '),u.qZA(),u._uU(92," object with raw value and current selection is passed as an argument to the function. "),u.qZA(),u._UZ(93,"tui-doc-code",7),u.TgZ(94,"tui-notification",12),u.TgZ(95,"div"),u._uU(96," Be careful! It can be not performance-friendly to generate new mask expression on every input change. "),u.qZA(),u.TgZ(97,"p",13),u._uU(98," Think about optimization and memoization of the such function. "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(99,"section",14),u.TgZ(100,"h2"),u._uU(101,"Next steps"),u.qZA(),u.TgZ(102,"p"),u._uU(103," The following sections are recommended to explore core concepts further: "),u.qZA(),u.TgZ(104,"ul",3),u.TgZ(105,"li",4),u.TgZ(106,"a",11),u._uU(107," Processors "),u.qZA(),u.qZA(),u.TgZ(108,"li",4),u.TgZ(109,"a",11),u._uU(110," Overwrite mode "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(28),u.Q6J("code",t.regExpMaskExpDemo),u.xp6(7),u.Oqu("/^\\d{4}$/"),u.xp6(4),u.Oqu("/^\\d{0,4}$/"),u.xp6(22),u.Q6J("code",t.basicTimeDemo),u.xp6(29),u.Q6J("routerLink",t.elementStateDocPage),u.xp6(3),u.Q6J("code",t.dynamicMaskExpDemo),u.xp6(13),u.Q6J("routerLink",t.processorsDocPage),u.xp6(3),u.Q6J("routerLink",t.overwriteModeDocPage))},directives:[p.qo,r.V,p.c0,c.Ls,i.yS],encapsulation:2,changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[s.ez,a.fV,r.j,c.Hi,i.Bz.forChild((0,n.Ve)(g))]]}),e})()}}]);