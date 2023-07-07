/*! js-cookie v3.0.5 | MIT */function l(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var c in o)e[c]=o[c]}return e}var g={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function p(e,t){function o(r,i,n){if(!(typeof document>"u")){n=l({},t,n),typeof n.expires=="number"&&(n.expires=new Date(Date.now()+n.expires*864e5)),n.expires&&(n.expires=n.expires.toUTCString()),r=encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var d in n)n[d]&&(s+="; "+d,n[d]!==!0&&(s+="="+n[d].split(";")[0]));return document.cookie=r+"="+e.write(i,r)+s}}function c(r){if(!(typeof document>"u"||arguments.length&&!r)){for(var i=document.cookie?document.cookie.split("; "):[],n={},s=0;s<i.length;s++){var d=i[s].split("="),h=d.slice(1).join("=");try{var u=decodeURIComponent(d[0]);if(n[u]=e.read(h,u),r===u)break}catch{}}return r?n[r]:n}}return Object.create({set:o,get:c,remove:function(r,i){o(r,"",l({},i,{expires:-1}))},withAttributes:function(r){return p(this.converter,l({},this.attributes,r))},withConverter:function(r){return p(l({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var w=p(g,{path:"/"});new TextEncoder;const f=new TextDecoder,y=e=>{const t=atob(e),o=new Uint8Array(t.length);for(let c=0;c<t.length;c++)o[c]=t.charCodeAt(c);return o},O=e=>{let t=e;t instanceof Uint8Array&&(t=f.decode(t)),t=t.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");try{return y(t)}catch{throw new TypeError("The input to be decoded is not correctly encoded.")}};class E extends Error{static get code(){return"ERR_JOSE_GENERIC"}constructor(t){var o;super(t),this.code="ERR_JOSE_GENERIC",this.name=this.constructor.name,(o=Error.captureStackTrace)===null||o===void 0||o.call(Error,this,this.constructor)}}class a extends E{constructor(){super(...arguments),this.code="ERR_JWT_INVALID"}static get code(){return"ERR_JWT_INVALID"}}function v(e){return typeof e=="object"&&e!==null}function _(e){if(!v(e)||Object.prototype.toString.call(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}const m=O;function C(e){if(typeof e!="string")throw new a("JWTs must use Compact JWS serialization, JWT must be a string");const{1:t,length:o}=e.split(".");if(o===5)throw new a("Only JWTs using Compact JWS serialization can be decoded");if(o!==3)throw new a("Invalid JWT");if(!t)throw new a("JWTs must contain a payload");let c;try{c=m(t)}catch{throw new a("Failed to parse the base64url encoded payload")}let r;try{r=JSON.parse(f.decode(c))}catch{throw new a("Failed to parse the decoded payload as JSON")}if(!_(r))throw new a("Invalid JWT Claims Set");return r}const T="__roadmapsh_jt__";function J(e){return C(e)}function R(){return!!w.get(T)}export{T,w as a,J as d,R as i};