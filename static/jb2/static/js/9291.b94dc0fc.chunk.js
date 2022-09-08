"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9291],{9291:function(n,t,e){e.r(t),e.d(t,{default:function(){return X},getSkeletonUtilityClass:function(){return p},skeletonClasses:function(){return S}});var a=e(71171),i=e(31461),r=e(7896),o=e(30969),s=e(81856),h=e(54470),l=e(26540),d=e(72879),u=e(74262),c=e(45971),f=e(17363),m=e(2975);function p(n){return(0,m.Z)("MuiSkeleton",n)}var g,v,w,b,k,C,y,Z,S=(0,e(62746).Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),R=e(37574),x=["animation","className","component","height","style","variant","width"],M=(0,h.keyframes)(k||(k=g||(g=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),_=(0,h.keyframes)(C||(C=v||(v=(0,a.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),A=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,a=(0,d.Wy)(t.shape.borderRadius)||"px",i=(0,d.YL)(t.shape.borderRadius);return(0,r.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,u.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(a,"/").concat(Math.round(i/.6*10)/10).concat(a),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,h.css)(y||(y=w||(w=(0,a.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),M)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,h.css)(Z||(Z=b||(b=(0,a.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),_,(e.vars||e).palette.action.hover)})),X=o.forwardRef((function(n,t){var e=(0,f.Z)({props:n,name:"MuiSkeleton"}),a=e.animation,o=void 0===a?"pulse":a,h=e.className,d=e.component,u=void 0===d?"span":d,c=e.height,m=e.style,g=e.variant,v=void 0===g?"text":g,w=e.width,b=(0,i.Z)(e,x),k=(0,r.Z)({},e,{animation:o,component:u,variant:v,hasChildren:Boolean(b.children)}),C=function(n){var t=n.classes,e=n.variant,a=n.animation,i=n.hasChildren,r=n.width,o=n.height,s={root:["root",e,a,i&&"withChildren",i&&!r&&"fitContent",i&&!o&&"heightAuto"]};return(0,l.Z)(s,p,t)}(k);return(0,R.jsx)(A,(0,r.Z)({as:u,ref:t,className:(0,s.default)(C.root,h),ownerState:k},b,{style:(0,r.Z)({width:w,height:c},m)}))}))}}]);
//# sourceMappingURL=9291.b94dc0fc.chunk.js.map