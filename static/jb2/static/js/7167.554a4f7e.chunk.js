"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7167],{17167:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(59740),a=r(68079),u=r(32723),s=r(33028),i=r(34795),c=r(9249),o=r(87371),p=r(45754),f=r(13820),l=r(29598),d=r(26131),v=r(81073),h=r(23288),Z=r(84040),m=["dataAdapter","source","name"];function b(e){var t=e.slice(e.lastIndexOf("/")+1);return t.slice(0,t.lastIndexOf("."))}var g=function(e){(0,p.Z)(r,e);var t=(0,f.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getAdapters",value:function(){var e=(0,i.Z)((0,u.Z)().mark((function e(){var t,r,n,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.getSubAdapter){e.next=3;break}throw new Error("no getSubAdapter available");case 3:return n=this.getConf("subadapters"),null!==(t=n)&&void 0!==t&&t.length||(a=this.getConf("bigWigs"),n=a.map((function(e){return{type:"BigWigAdapter",source:b(e),bigWigLocation:{uri:e}}}))),e.abrupt("return",Promise.all(n.map(function(){var e=(0,i.Z)((0,u.Z)().mark((function e(t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:return n=e.sent.dataAdapter,e.abrupt("return",(0,s.Z)((0,s.Z)({source:t.name||n.id},t),{},{dataAdapter:n}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,i.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAdapters();case 2:return r=e.sent,e.next=5,Promise.all(r.map((function(e){return e.dataAdapter.getRefNames(t)})));case 5:return n=e.sent,e.abrupt("return",(0,a.Z)(new Set(n.flat())));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGlobalStats",value:function(){var e=(0,i.Z)((0,u.Z)().mark((function e(t){var r,n,s,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAdapters();case 2:return r=e.sent,e.next=5,Promise.all(r.map((function(e){var r,n;return null===(r=(n=e.dataAdapter).getGlobalStats)||void 0===r?void 0:r.call(n,t)})));case 5:return n=e.sent.filter((function(e){return!!e})),s=Math.min.apply(Math,(0,a.Z)(n.map((function(e){return e.scoreMin})))),i=Math.max.apply(Math,(0,a.Z)(n.map((function(e){return e.scoreMax})))),e.abrupt("return",{scoreMin:s,scoreMax:i});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,d.ObservableCreate)(function(){var n=(0,i.Z)((0,u.Z)().mark((function n(i){var c;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getAdapters();case 2:c=n.sent,h.T.apply(void 0,(0,a.Z)(c.map((function(t){return t.dataAdapter.getFeatures(e,r).pipe((0,Z.U)((function(e){return e.get("source")?e:new v.SimpleFeature((0,s.Z)((0,s.Z)({},e.toJSON()),{},{uniqueId:t.source+"-"+e.id(),source:t.source}))})))})))).subscribe(i);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),r.signal)}},{key:"estimateRegionsStats",value:function(){var e=(0,i.Z)((0,u.Z)().mark((function e(t){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{featureDensity:0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSources",value:function(){var e=(0,i.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAdapters();case 2:return t=e.sent,e.abrupt("return",t.map((function(e){e.dataAdapter;var t=e.source,r=e.name,a=(0,n.Z)(e,m);return(0,s.Z)({name:t,__name:r},a)})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}}]),r}(l.BaseFeatureDataAdapter);g.capabilities=["hasResolution","hasLocalStats","hasGlobalStats"]}}]);
//# sourceMappingURL=7167.554a4f7e.chunk.js.map