"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8930],{38930:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(96234),a=r(32723),u=r(34795),s=r(9249),i=r(87371),c=r(45754),o=r(13820),f=r(29598),p=r(33528),h=r(26131),v=r(16362),l=r(42098),d=r(6556),w=r(4795),Z=function(e){var t=[],r=[];return e.split("\n").map((function(e){return e.trim()})).filter((function(e){return!!e})).forEach((function(e){e.startsWith("#")?t.push(e):e&&r.push(e)})),{header:t.join("\n"),lines:r}};function k(e){return 31===e[0]&&139===e[1]&&8===e[2]}var m=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).vcfFeatures=void 0,e}return(0,i.Z)(r,[{key:"getHeader",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return t=e.sent,r=t.header,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMetadata",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup();case 2:return t=e.sent,r=t.header,n=new d.Z({header:r}),e.abrupt("return",n.getMetadata());case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setupP",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,u,s,i,c,o,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.pluginManager,e.next=3,(0,p.openLocation)(this.getConf("vcfLocation"),t).readFile();case 3:if(!k(r=e.sent)){e.next=10;break}return e.next=7,(0,l.unzip)(r);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=r;case 11:if(!((u=e.t0).length>536870888)){e.next=14;break}throw new Error("Data exceeds maximum string length (512MB)");case 14:return s=(new TextDecoder).decode(u),i=Z(s),c=i.header,o=i.lines,f=o.map((function(e,t){var r,a=e.split("\t"),u=(0,n.Z)(a,8),s=u[0],i=u[1],c=u[3],o=+i-1;return{line:e,refName:s,start:o,end:+((null===(r=u[7].match(/END=(\d+)/))||void 0===r?void 0:r[1].trim())||o+c.length),id:t}})).reduce((function(e,t){var r=t.refName;return e[r]||(e[r]=new v.ZP),e[r].insert([t.start,t.end],t),e}),{}),e.abrupt("return",{header:c,intervalTree:f});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.vcfFeatures||(this.vcfFeatures=this.setupP().catch((function(e){throw t.vcfFeatures=void 0,e}))),e.abrupt("return",this.vcfFeatures);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t,r,n=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.setup();case 3:return t=e.sent,r=t.intervalTree,e.abrupt("return",Object.keys(r));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,h.ObservableCreate)(function(){var r=(0,u.Z)((0,a.Z)().mark((function r(n){var u,s,i,c,o,f,p,h;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=e.start,i=e.end,c=e.refName,r.next=4,t.setup();case 4:o=r.sent,f=o.header,p=o.intervalTree,h=new d.Z({header:f}),null===(u=p[c])||void 0===u||u.search([s,i]).forEach((function(e){return n.next(new w.Z({variant:h.parseLine(e.line),parser:h,id:"".concat(t.id,"-").concat(e.id)}))})),n.complete(),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),n.error(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(f.BaseFeatureDataAdapter);m.capabilities=["getFeatures","getRefNames"]}}]);
//# sourceMappingURL=8930.4e24483b.chunk.js.map