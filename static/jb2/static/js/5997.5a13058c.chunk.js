"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5997],{45997:function(e,n,r){r.r(n),r.d(n,{bufferToString:function(){return s},parseCsvBuffer:function(){return p},parseTsvBuffer:function(){return d}});var t=r(32723),u=r(33028),a=r(96234),i=r(34795),o=r(81073);function s(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function c(e){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,t.Z)().mark((function e(n){var a,i,o=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:{},e.next=3,r.e(2745).then(r.t.bind(r,12745,23)).then((function(e){return e.default}));case 3:return i=e.sent,e.abrupt("return",i((0,u.Z)({noheader:!0,output:"csv"},a)).fromString(s(n)));case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e,n,r){var t,u=e.rows[0].cells[n].text||"",a="Text";try{t=(0,o.parseLocString)(u,r)}catch(i){}return t&&t.refName&&"number"===typeof t.start?a="LocString":/^\d+(\.\d+)?$/.test(u)&&(a="Number"),a}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},r=0,t={isLoaded:!0,rows:e.map((function(e,t){var u=t+(n.hasColumnNameLine?0:1);return e.length>r&&(r=e.length),{id:String(u),cells:e.map((function(e,n){return{columnNumber:n,text:e}}))}}))},u={};if(n.hasColumnNameLine&&void 0!==n.columnNameLineNumber){var i=t.rows.splice(n.columnNameLineNumber-1,1),s=(0,a.Z)(i,1),c=s[0];c&&c.cells.forEach((function(e,n){u[n]=e.text||""}))}for(var f=[],l=[],p=function(e){l.push(e);var r=m(t,e,n.isValidRefName);"LocString"===r&&t.rows.forEach((function(r){var t=r.cells[e];t.extendedData=(0,o.parseLocString)(t.text,n.isValidRefName)})),f[e]={name:u[e],dataType:{type:r}}},h=0;h<r;h+=1)p(h);return{rowSet:t,columnDisplayOrder:l,hasColumnNames:!!n.hasColumnNameLine,columns:f,assemblyName:n.selectedAssemblyName}}function p(e){return h.apply(this,arguments)}function h(){return h=(0,i.Z)((0,t.Z)().mark((function e(n){var r,u,a=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,c(n);case 3:return u=e.sent,e.abrupt("return",l(u,r));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function d(e){return N.apply(this,arguments)}function N(){return N=(0,i.Z)((0,t.Z)().mark((function e(n){var r,u,a=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,c(n,{delimiter:"\t"});case 3:return u=e.sent,e.abrupt("return",l(u,r));case 5:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}}}]);
//# sourceMappingURL=5997.5a13058c.chunk.js.map