(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2821],{62821:function(i){i.exports=n;var t=null;try{t=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(B){}function n(i,t,n){this.low=0|i,this.high=0|t,this.unsigned=!!n}function h(i){return!0===(i&&i.__isLong__)}n.prototype.__isLong__,Object.defineProperty(n.prototype,"__isLong__",{value:!0}),n.isLong=h;var s={},e={};function r(i,t){var n,h,r;return t?(r=0<=(i>>>=0)&&i<256)&&(h=e[i])?h:(n=o(i,(0|i)<0?-1:0,!0),r&&(e[i]=n),n):(r=-128<=(i|=0)&&i<128)&&(h=s[i])?h:(n=o(i,i<0?-1:0,!1),r&&(s[i]=n),n)}function u(i,t){if(isNaN(i))return t?m:v;if(t){if(i<0)return m;if(i>=d)return p}else{if(i<=-w)return _;if(i+1>=w)return y}return i<0?u(-i,t).neg():o(i%a|0,i/a|0,t)}function o(i,t,h){return new n(i,t,h)}n.fromInt=r,n.fromNumber=u,n.fromBits=o;var g=Math.pow;function f(i,t,n){if(0===i.length)throw Error("empty string");if("NaN"===i||"Infinity"===i||"+Infinity"===i||"-Infinity"===i)return v;if("number"===typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");var h;if((h=i.indexOf("-"))>0)throw Error("interior hyphen");if(0===h)return f(i.substring(1),t,n).neg();for(var s=u(g(n,8)),e=v,r=0;r<i.length;r+=8){var o=Math.min(8,i.length-r),l=parseInt(i.substring(r,r+o),n);if(o<8){var a=u(g(n,o));e=e.mul(a).add(u(l))}else e=(e=e.mul(s)).add(u(l))}return e.unsigned=t,e}function l(i,t){return"number"===typeof i?u(i,t):"string"===typeof i?f(i,t):o(i.low,i.high,"boolean"===typeof t?t:i.unsigned)}n.fromString=f,n.fromValue=l;var a=4294967296,d=a*a,w=d/2,c=r(1<<24),v=r(0);n.ZERO=v;var m=r(0,!0);n.UZERO=m;var b=r(1);n.ONE=b;var N=r(1,!0);n.UONE=N;var E=r(-1);n.NEG_ONE=E;var y=o(-1,2147483647,!1);n.MAX_VALUE=y;var p=o(-1,-1,!0);n.MAX_UNSIGNED_VALUE=p;var _=o(0,-2147483648,!1);n.MIN_VALUE=_;var q=n.prototype;q.toInt=function(){return this.unsigned?this.low>>>0:this.low},q.toNumber=function(){return this.unsigned?(this.high>>>0)*a+(this.low>>>0):this.high*a+(this.low>>>0)},q.toString=function(i){if((i=i||10)<2||36<i)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(_)){var t=u(i),n=this.div(t),h=n.mul(t).sub(this);return n.toString(i)+h.toInt().toString(i)}return"-"+this.neg().toString(i)}for(var s=u(g(i,6),this.unsigned),e=this,r="";;){var o=e.div(s),f=(e.sub(o.mul(s)).toInt()>>>0).toString(i);if((e=o).isZero())return f+r;for(;f.length<6;)f="0"+f;r=""+f+r}},q.getHighBits=function(){return this.high},q.getHighBitsUnsigned=function(){return this.high>>>0},q.getLowBits=function(){return this.low},q.getLowBitsUnsigned=function(){return this.low>>>0},q.getNumBitsAbs=function(){if(this.isNegative())return this.eq(_)?64:this.neg().getNumBitsAbs();for(var i=0!=this.high?this.high:this.low,t=31;t>0&&0==(i&1<<t);t--);return 0!=this.high?t+33:t+1},q.isZero=function(){return 0===this.high&&0===this.low},q.eqz=q.isZero,q.isNegative=function(){return!this.unsigned&&this.high<0},q.isPositive=function(){return this.unsigned||this.high>=0},q.isOdd=function(){return 1===(1&this.low)},q.isEven=function(){return 0===(1&this.low)},q.equals=function(i){return h(i)||(i=l(i)),(this.unsigned===i.unsigned||this.high>>>31!==1||i.high>>>31!==1)&&(this.high===i.high&&this.low===i.low)},q.eq=q.equals,q.notEquals=function(i){return!this.eq(i)},q.neq=q.notEquals,q.ne=q.notEquals,q.lessThan=function(i){return this.comp(i)<0},q.lt=q.lessThan,q.lessThanOrEqual=function(i){return this.comp(i)<=0},q.lte=q.lessThanOrEqual,q.le=q.lessThanOrEqual,q.greaterThan=function(i){return this.comp(i)>0},q.gt=q.greaterThan,q.greaterThanOrEqual=function(i){return this.comp(i)>=0},q.gte=q.greaterThanOrEqual,q.ge=q.greaterThanOrEqual,q.compare=function(i){if(h(i)||(i=l(i)),this.eq(i))return 0;var t=this.isNegative(),n=i.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?i.high>>>0>this.high>>>0||i.high===this.high&&i.low>>>0>this.low>>>0?-1:1:this.sub(i).isNegative()?-1:1},q.comp=q.compare,q.negate=function(){return!this.unsigned&&this.eq(_)?_:this.not().add(b)},q.neg=q.negate,q.add=function(i){h(i)||(i=l(i));var t=this.high>>>16,n=65535&this.high,s=this.low>>>16,e=65535&this.low,r=i.high>>>16,u=65535&i.high,g=i.low>>>16,f=0,a=0,d=0,w=0;return d+=(w+=e+(65535&i.low))>>>16,a+=(d+=s+g)>>>16,f+=(a+=n+u)>>>16,f+=t+r,o((d&=65535)<<16|(w&=65535),(f&=65535)<<16|(a&=65535),this.unsigned)},q.subtract=function(i){return h(i)||(i=l(i)),this.add(i.neg())},q.sub=q.subtract,q.multiply=function(i){if(this.isZero())return v;if(h(i)||(i=l(i)),t)return o(t.mul(this.low,this.high,i.low,i.high),t.get_high(),this.unsigned);if(i.isZero())return v;if(this.eq(_))return i.isOdd()?_:v;if(i.eq(_))return this.isOdd()?_:v;if(this.isNegative())return i.isNegative()?this.neg().mul(i.neg()):this.neg().mul(i).neg();if(i.isNegative())return this.mul(i.neg()).neg();if(this.lt(c)&&i.lt(c))return u(this.toNumber()*i.toNumber(),this.unsigned);var n=this.high>>>16,s=65535&this.high,e=this.low>>>16,r=65535&this.low,g=i.high>>>16,f=65535&i.high,a=i.low>>>16,d=65535&i.low,w=0,m=0,b=0,N=0;return b+=(N+=r*d)>>>16,m+=(b+=e*d)>>>16,b&=65535,m+=(b+=r*a)>>>16,w+=(m+=s*d)>>>16,m&=65535,w+=(m+=e*a)>>>16,m&=65535,w+=(m+=r*f)>>>16,w+=n*d+s*a+e*f+r*g,o((b&=65535)<<16|(N&=65535),(w&=65535)<<16|(m&=65535),this.unsigned)},q.mul=q.multiply,q.divide=function(i){if(h(i)||(i=l(i)),i.isZero())throw Error("division by zero");var n,s,e;if(t)return this.unsigned||-2147483648!==this.high||-1!==i.low||-1!==i.high?o((this.unsigned?t.div_u:t.div_s)(this.low,this.high,i.low,i.high),t.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?m:v;if(this.unsigned){if(i.unsigned||(i=i.toUnsigned()),i.gt(this))return m;if(i.gt(this.shru(1)))return N;e=m}else{if(this.eq(_))return i.eq(b)||i.eq(E)?_:i.eq(_)?b:(n=this.shr(1).div(i).shl(1)).eq(v)?i.isNegative()?b:E:(s=this.sub(i.mul(n)),e=n.add(s.div(i)));if(i.eq(_))return this.unsigned?m:v;if(this.isNegative())return i.isNegative()?this.neg().div(i.neg()):this.neg().div(i).neg();if(i.isNegative())return this.div(i.neg()).neg();e=v}for(s=this;s.gte(i);){n=Math.max(1,Math.floor(s.toNumber()/i.toNumber()));for(var r=Math.ceil(Math.log(n)/Math.LN2),f=r<=48?1:g(2,r-48),a=u(n),d=a.mul(i);d.isNegative()||d.gt(s);)d=(a=u(n-=f,this.unsigned)).mul(i);a.isZero()&&(a=b),e=e.add(a),s=s.sub(d)}return e},q.div=q.divide,q.modulo=function(i){return h(i)||(i=l(i)),t?o((this.unsigned?t.rem_u:t.rem_s)(this.low,this.high,i.low,i.high),t.get_high(),this.unsigned):this.sub(this.div(i).mul(i))},q.mod=q.modulo,q.rem=q.modulo,q.not=function(){return o(~this.low,~this.high,this.unsigned)},q.and=function(i){return h(i)||(i=l(i)),o(this.low&i.low,this.high&i.high,this.unsigned)},q.or=function(i){return h(i)||(i=l(i)),o(this.low|i.low,this.high|i.high,this.unsigned)},q.xor=function(i){return h(i)||(i=l(i)),o(this.low^i.low,this.high^i.high,this.unsigned)},q.shiftLeft=function(i){return h(i)&&(i=i.toInt()),0===(i&=63)?this:i<32?o(this.low<<i,this.high<<i|this.low>>>32-i,this.unsigned):o(0,this.low<<i-32,this.unsigned)},q.shl=q.shiftLeft,q.shiftRight=function(i){return h(i)&&(i=i.toInt()),0===(i&=63)?this:i<32?o(this.low>>>i|this.high<<32-i,this.high>>i,this.unsigned):o(this.high>>i-32,this.high>=0?0:-1,this.unsigned)},q.shr=q.shiftRight,q.shiftRightUnsigned=function(i){if(h(i)&&(i=i.toInt()),0===(i&=63))return this;var t=this.high;return i<32?o(this.low>>>i|t<<32-i,t>>>i,this.unsigned):o(32===i?t:t>>>i-32,0,this.unsigned)},q.shru=q.shiftRightUnsigned,q.shr_u=q.shiftRightUnsigned,q.toSigned=function(){return this.unsigned?o(this.low,this.high,!1):this},q.toUnsigned=function(){return this.unsigned?this:o(this.low,this.high,!0)},q.toBytes=function(i){return i?this.toBytesLE():this.toBytesBE()},q.toBytesLE=function(){var i=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&i,i>>>8&255,i>>>16&255,i>>>24]},q.toBytesBE=function(){var i=this.high,t=this.low;return[i>>>24,i>>>16&255,i>>>8&255,255&i,t>>>24,t>>>16&255,t>>>8&255,255&t]},n.fromBytes=function(i,t,h){return h?n.fromBytesLE(i,t):n.fromBytesBE(i,t)},n.fromBytesLE=function(i,t){return new n(i[0]|i[1]<<8|i[2]<<16|i[3]<<24,i[4]|i[5]<<8|i[6]<<16|i[7]<<24,t)},n.fromBytesBE=function(i,t){return new n(i[4]<<24|i[5]<<16|i[6]<<8|i[7],i[0]<<24|i[1]<<16|i[2]<<8|i[3],t)}}}]);
//# sourceMappingURL=2821.ddb7d572.chunk.js.map