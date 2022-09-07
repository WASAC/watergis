var Ge=Object.defineProperty;var He=(a,e,t)=>e in a?Ge(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ge=(a,e,t)=>(He(a,typeof e!="symbol"?e+"":e,t),t);import{_ as re}from"./chunks/preload-helper-aa6bc0ce.js";import{S as Me,i as We,s as Xe,a as Ye,e as z,c as Qe,b as H,g as ie,t as J,d as le,f as K,h as x,j as Ze,o as be,k as et,l as tt,m as nt,n as we,p as q,q as at,r as rt,u as st,v as M,w as Re,x as W,y as X,z as Ce}from"./chunks/index-b92bc20f.js";import{g as Ve,f as Be,s as G,a as ve,b as ot,i as it}from"./chunks/singletons-ee6ea232.js";class se{constructor(e,t){ge(this,"name","HttpError");ge(this,"stack");this.status=e,this.message=t!=null?t:`Error: ${e}`}toString(){return this.message}}class ze{constructor(e,t){this.status=e,this.location=t}}function lt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ct(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(a,e){const t=new URL(a);for(const c of ft){let i=t[c];Object.defineProperty(t,c,{get(){return e(),i},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,i,d)=>d(a,i),dt(t),t}function dt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function pt(a){let e=5381,t=a.length;if(typeof a=="string")for(;t;)e=e*33^a.charCodeAt(--t);else for(;t;)e=e*33^a[--t];return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;oe.delete(c)}return Se(a,e)};const oe=new Map;function ht(a,e,t){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof a=="string"?a:a.url)}]`;t&&typeof t.body=="string"&&(i+=`[data-hash="${pt(t.body)}"]`);const d=document.querySelector(i);if(d!=null&&d.textContent){const{body:n,...f}=JSON.parse(d.textContent),b=d.getAttribute("data-ttl");return b&&oe.set(e,{body:n,init:f,ttl:1e3*Number(b)}),Promise.resolve(new Response(n,f))}return Se(a,t)}function mt(a,e){const t=oe.get(a);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(a)}return Se(a,e)}const _t=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function gt(a){const e=[],t=[];let c=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(wt).map((d,n,f)=>{const b=decodeURIComponent(d),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(b);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const v=n===f.length-1;return b&&"/"+b.split(/\[(.+?)\]/).map(($,S)=>{if(S%2){const T=_t.exec($);if(!T)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,D,C]=T;return e.push(D),t.push(C),O?"(.*?)":"([^/]+?)"}return v&&$.includes(".")&&(c=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function wt(a){return!/^\([^)]+\)$/.test(a)}function yt(a,e,t,c){const i={};for(let d=0;d<e.length;d+=1){const n=e[d],f=t[d],b=a[d+1]||"";if(f){const m=c[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(b))return}i[n]=b}return i}function bt(a,e,t,c){const i=new Set(e);return Object.entries(t).map(([f,[b,m,v]])=>{const{pattern:$,names:S,types:T}=gt(f),O={id:f,exec:D=>{const C=$.exec(D);if(C)return yt(C,S,T,c)},errors:[1,...v||[]].map(D=>a[D]),layouts:[0,...m||[]].map(n),leaf:d(b)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function d(f){const b=f<0;return b&&(f=~f),[b,a[f]]}function n(f){return f===void 0?f:[i.has(f),a[f]]}}function vt(a,e){return new se(a,e)}function kt(a){let e,t,c;var i=a[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return i&&(e=new i(d(a))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Re(e.$$.fragment,n),t=z()},m(n,f){e&&W(e,n,f),H(n,t,f),c=!0},p(n,f){const b={};if(f&4&&(b.data=n[2]),f&2&&(b.form=n[1]),i!==(i=n[0][0])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{X(m,1)}),le()}i?(e=new i(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(b)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Et(a){let e,t,c;var i=a[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Rt]},$$scope:{ctx:n}}}}return i&&(e=new i(d(a))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Re(e.$$.fragment,n),t=z()},m(n,f){e&&W(e,n,f),H(n,t,f),c=!0},p(n,f){const b={};if(f&4&&(b.data=n[2]),f&523&&(b.$$scope={dirty:f,ctx:n}),i!==(i=n[0][0])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{X(m,1)}),le()}i?(e=new i(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(b)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Rt(a){let e,t,c;var i=a[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return i&&(e=new i(d(a))),{c(){e&&M(e.$$.fragment),t=z()},l(n){e&&Re(e.$$.fragment,n),t=z()},m(n,f){e&&W(e,n,f),H(n,t,f),c=!0},p(n,f){const b={};if(f&8&&(b.data=n[3]),f&2&&(b.form=n[1]),i!==(i=n[0][1])){if(e){ie();const m=e;J(m.$$.fragment,1,0,()=>{X(m,1)}),le()}i?(e=new i(d(n)),M(e.$$.fragment),K(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else i&&e.$set(b)},i(n){c||(e&&K(e.$$.fragment,n),c=!0)},o(n){e&&J(e.$$.fragment,n),c=!1},d(n){n&&x(t),e&&X(e,n)}}}function Je(a){let e,t=a[5]&&Ke(a);return{c(){e=et("div"),t&&t.c(),this.h()},l(c){e=tt(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=nt(e);t&&t.l(i),i.forEach(x),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(c,i){H(c,e,i),t&&t.m(e,null)},p(c,i){c[5]?t?t.p(c,i):(t=Ke(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&x(e),t&&t.d()}}}function Ke(a){let e;return{c(){e=at(a[6])},l(t){e=rt(t,a[6])},m(t,c){H(t,e,c)},p(t,c){c&64&&st(e,t[6])},d(t){t&&x(e)}}}function St(a){let e,t,c,i,d;const n=[Et,kt],f=[];function b(v,$){return v[0][1]?0:1}e=b(a),t=f[e]=n[e](a);let m=a[4]&&Je(a);return{c(){t.c(),c=Ye(),m&&m.c(),i=z()},l(v){t.l(v),c=Qe(v),m&&m.l(v),i=z()},m(v,$){f[e].m(v,$),H(v,c,$),m&&m.m(v,$),H(v,i,$),d=!0},p(v,[$]){let S=e;e=b(v),e===S?f[e].p(v,$):(ie(),J(f[S],1,1,()=>{f[S]=null}),le(),t=f[e],t?t.p(v,$):(t=f[e]=n[e](v),t.c()),K(t,1),t.m(c.parentNode,c)),v[4]?m?m.p(v,$):(m=Je(v),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null)},i(v){d||(K(t),d=!0)},o(v){J(t),d=!1},d(v){f[e].d(v),v&&x(c),m&&m.d(v),v&&x(i)}}}function $t(a,e,t){let{stores:c}=e,{page:i}=e,{components:d}=e,{form:n}=e,{data_0:f=null}=e,{data_1:b=null}=e;Ze(c.page.notify);let m=!1,v=!1,$=null;return be(()=>{const S=c.page.subscribe(()=>{m&&(t(5,v=!0),t(6,$=document.title||"untitled page"))});return t(4,m=!0),S}),a.$$set=S=>{"stores"in S&&t(7,c=S.stores),"page"in S&&t(8,i=S.page),"components"in S&&t(0,d=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,b=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&c.page.set(i)},[d,n,f,b,m,v,$,c,i]}class Lt extends Me{constructor(e){super(),We(this,e,$t,St,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Pt={},ce=[()=>re(()=>import("./chunks/0-17740ea7.js"),["chunks/0-17740ea7.js","components/layout.svelte-7d20b4b2.js","chunks/index-b92bc20f.js"],import.meta.url),()=>re(()=>import("./chunks/1-fc24d41b.js"),["chunks/1-fc24d41b.js","components/error.svelte-8892c2b6.js","chunks/index-b92bc20f.js","chunks/stores-11f3aec3.js","chunks/singletons-ee6ea232.js"],import.meta.url),()=>re(()=>import("./chunks/2-45c5b1ae.js"),["chunks/2-45c5b1ae.js","chunks/_page-802cc2a3.js","chunks/_page-d134af06.js","assets/_page-7afceba0.css","chunks/index-b92bc20f.js","chunks/singletons-ee6ea232.js","chunks/preload-helper-aa6bc0ce.js","chunks/stores-11f3aec3.js"],import.meta.url)],jt=[],Ot={"":[2]},Ut="/__data.js",Fe="sveltekit:scroll",B="sveltekit:index",te=bt(ce,jt,Ot,Pt),ke=ce[0],Ee=ce[1];ke();Ee();let Z={};try{Z=JSON.parse(sessionStorage[Fe])}catch{}function ye(a){Z[a]=ve()}function At({target:a,base:e,trailing_slash:t}){var Te;const c=[],i={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,session_id:0,url:null},f=!1,b=!0,m=!1,v=1,$=null,S=!1,T,O=(Te=history.state)==null?void 0:Te[B];O||(O=Date.now(),history.replaceState({...history.state,[B]:O},"",location.href));const D=Z[O];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let C=!1,V,$e;function Le(){if(!$){const r=new URL(location.href);$=Promise.resolve().then(async()=>{const o=pe(r,!0);await je(o,r,[]),$=null,S=!1})}return $}async function fe(r,{noscroll:o=!1,replaceState:u=!1,keepfocus:s=!1,state:l={}},p){return typeof r=="string"&&(r=new URL(r,Ve(document))),he({url:r,scroll:o?ve():null,keepfocus:s,redirect_chain:p,details:{state:l,replaceState:u},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(r){const o=pe(r,!1);if(!o)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i.promise=Ae(o),i.id=o.id,i.promise}async function je(r,o,u,s,l){var k,E;const p=$e={};let h=r&&await Ae(r);if(!h&&o.origin===location.origin&&o.pathname===location.pathname&&(h=await ee({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!h)return await Q(o),!1;if(o=(r==null?void 0:r.url)||o,$e!==p)return!1;if(c.length=0,h.type==="redirect")if(u.length>10||u.includes(o.pathname))h=await ee({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return fe(new URL(h.location,o).href,{},[...u,o.pathname]),!1;else((E=(k=h.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await G.updated.check()&&await Q(o);if(m=!0,s&&s.details){const{details:y}=s,_=y.replaceState?0:1;y.state[B]=O+=_,history[y.replaceState?"replaceState":"pushState"](y.state,"",o)}if(f){n=h.state,h.props.page&&(h.props.page.url=o);const y=ae();T.$set(h.props),y()}else Oe(h);if(s){const{scroll:y,keepfocus:_}=s;if(!_){const R=document.body,I=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?R.setAttribute("tabindex",I):R.removeAttribute("tabindex")}if(await Ce(),b){const R=o.hash&&document.getElementById(o.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ce();i.promise=null,i.id=null,b=!0,h.props.page&&(V=h.props.page),l&&l(),m=!1}function Oe(r){var l,p;n=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),V=r.props.page;const u=ae();T=new Lt({target:a,props:{...r.props,stores:G},hydrate:!0}),u();const s={from:null,to:ne("to",{params:n.params,routeId:(p=(l=n.route)==null?void 0:l.id)!=null?p:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(h=>h(s)),f=!0}async function Y({url:r,params:o,branch:u,status:s,error:l,route:p,form:h}){var I;const k=u.filter(Boolean),E={type:"loaded",state:{url:r,params:o,branch:u,error:l,route:p,session_id:v},props:{components:k.map(L=>L.node.component)}};h!==void 0&&(E.props.form=h);let y={},_=!V;for(let L=0;L<k.length;L+=1){const U=k[L];y={...y,...U.data},(_||!n.branch.some(A=>A===U))&&(E.props[`data_${L}`]=y,_=_||Object.keys((I=U.data)!=null?I:{}).length>0)}if(_||(_=Object.keys(V.data).length!==Object.keys(y).length),!n.url||r.href!==n.url.href||n.error!==l||_){E.props.page={error:l,params:o,routeId:p&&p.id,status:s,url:r,data:_?y:V.data};const L=(U,A)=>{Object.defineProperty(E.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${A}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function ue({loader:r,parent:o,url:u,params:s,routeId:l,server_data_node:p}){var y,_,R,I,L;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await r();if((y=E.shared)!=null&&y.load){let U=function(...g){for(const j of g){const{href:P}=new URL(j,u);k.dependencies.add(P)}};const A={};for(const g in s)Object.defineProperty(A,g,{get(){return k.params.add(g),s[g]},enumerable:!0});const w={routeId:l,params:A,data:(_=p==null?void 0:p.data)!=null?_:null,url:ut(u,()=>{k.url=!0}),async fetch(g,j){let P;typeof g=="string"?P=g:(P=g.url,j={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...j});const N=new URL(P,u).href;return U(N),f?mt(N,j):ht(P,N,j)},setHeaders:()=>{},depends:U,parent(){return k.parent=!0,o()}};Object.defineProperties(w,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(R=await E.shared.load.call(null,w))!=null?R:null}return{node:E,loader:r,server:p,shared:(I=E.shared)!=null&&I.load?{type:"data",data:h,uses:k}:null,data:(L=h!=null?h:p==null?void 0:p.data)!=null?L:null}}function Ue(r,o,u){if(S)return!0;if(!u)return!1;if(u.parent&&o||r.url&&u.url)return!0;for(const s of r.params)if(u.params.has(s))return!0;for(const s of u.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(r,o){var u,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&o!=null?o:null}async function Ae({id:r,invalidating:o,url:u,params:s,route:l}){if(i.id===r&&i.promise)return i.promise;const{errors:p,layouts:h,leaf:k}=l,E=n.url&&{url:r!==n.url.pathname+n.url.search,params:Object.keys(s).filter(w=>n.params[w]!==s[w])},y=[...h,k];p.forEach(w=>w==null?void 0:w().catch(()=>{})),y.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let _=null;const R=y.reduce((w,g,j)=>{var F;const P=n.branch[j],N=!!(g!=null&&g[0])&&((P==null?void 0:P.loader)!==g[1]||Ue(E,w.some(Boolean),(F=P.server)==null?void 0:F.uses));return w.push(N),w},[]);if(R.some(Boolean)){try{_=await xe(u,R)}catch(w){return ee({status:500,error:w,url:u,routeId:l.id})}if(_.type==="redirect")return _}const I=_==null?void 0:_.nodes;let L=!1;const U=y.map(async(w,g)=>{var me,De;if(!w)return;const j=n.branch[g],P=(me=I==null?void 0:I[g])!=null?me:null;if((!P||P.type==="skip")&&w[1]===(j==null?void 0:j.loader)&&!Ue(E,L,(De=j.shared)==null?void 0:De.uses))return j;if(L=!0,(P==null?void 0:P.type)==="error")throw P.httperror?vt(P.httperror.status,P.httperror.message):P.error;return ue({loader:w[1],url:u,params:s,routeId:l.id,parent:async()=>{var qe;const Ne={};for(let _e=0;_e<g;_e+=1)Object.assign(Ne,(qe=await U[_e])==null?void 0:qe.data);return Ne},server_data_node:de(P,j==null?void 0:j.server)})});for(const w of U)w.catch(()=>{});const A=[];for(let w=0;w<y.length;w+=1)if(y[w])try{A.push(await U[w])}catch(g){const j=g;if(j instanceof ze)return{type:"redirect",location:j.location};const P=g instanceof se?g.status:500;for(;w--;)if(p[w]){let N,F=w;for(;!A[F];)F-=1;try{return N={node:await p[w](),loader:p[w],data:{},server:null,shared:null},await Y({url:u,params:s,branch:A.slice(0,F+1).concat(N),status:P,error:j,route:l})}catch{continue}}await Q(u);return}else A.push(void 0);return await Y({url:u,params:s,branch:A,status:200,error:null,route:l,form:o?void 0:null})}async function ee({status:r,error:o,url:u,routeId:s}){var y;const l={},p=await ke();let h=null;if(p.server)try{const _=await xe(u,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;h=(y=_.nodes[0])!=null?y:null}catch{await Q(u);return}const k=await ue({loader:ke,url:u,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(h)}),E={node:await Ee(),loader:Ee,shared:null,server:null,data:null};return await Y({url:u,params:l,branch:[k,E],status:r,error:o,route:null})}function pe(r,o){if(Ie(r))return;const u=decodeURI(r.pathname.slice(e.length)||"/");for(const s of te){const l=s.exec(u);if(l){const p=new URL(r.origin+lt(r.pathname,t)+r.search+r.hash);return{id:p.pathname+p.search,invalidating:o,route:s,params:ct(l),url:p}}}}function Ie(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function he({url:r,scroll:o,keepfocus:u,redirect_chain:s,details:l,type:p,delta:h,accepted:k,blocked:E}){var L,U,A,w;let y=!1;const _=pe(r,!1),R={from:ne("from",{params:n.params,routeId:(U=(L=n.route)==null?void 0:L.id)!=null?U:null,url:n.url}),to:ne("to",{params:(A=_==null?void 0:_.params)!=null?A:null,routeId:(w=_==null?void 0:_.route.id)!=null?w:null,url:r}),type:p};h!==void 0&&(R.delta=h);const I={...R,cancel:()=>{y=!0}};if(d.before_navigate.forEach(g=>g(I)),y){E();return}ye(O),k(),f&&G.navigating.set(R),await je(_,r,s,{scroll:o,keepfocus:u,details:l},()=>{d.after_navigate.forEach(g=>g(R)),G.navigating.set(null)})}function Q(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{be(()=>(d.after_navigate.push(r),()=>{const o=d.after_navigate.indexOf(r);d.after_navigate.splice(o,1)}))},before_navigate:r=>{be(()=>(d.before_navigate.push(r),()=>{const o=d.before_navigate.indexOf(r);d.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(m||!f)&&(b=!1)},goto:(r,o={})=>fe(r,o,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")c.push(r);else{const{href:o}=new URL(r,location.href);c.push(u=>u.href===o)}return Le()},invalidateAll:()=>(S=!0,Le()),prefetch:async r=>{const o=new URL(r,Ve(document));await Pe(o)},prefetch_routes:async r=>{const u=(r?te.filter(s=>r.some(l=>s.exec(l))):te).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(u)},apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:u,route:s}=n;if(!s)return;let l=n.branch.length;for(;l--;)if(s.errors[l]){let p,h=l;for(;!u[h];)h-=1;try{p={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const k=await Y({url:o,params:n.params,branch:u.slice(0,h+1).concat(p),status:500,error:r.error,route:s});n=k.state;const E=ae();T.$set(k.props),E();return}catch{continue}}}else if(r.type==="redirect")fe(r.location,{},[]);else{const o={form:r.data};r.status!==V.status&&(o.page={...V,status:r.status});const u=ae();T.$set(o),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,k;let l=!1;const p={from:ne("from",{params:n.params,routeId:(k=(h=n.route)==null?void 0:h.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(E=>E(p)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(O);try{sessionStorage[Fe]=JSON.stringify(Z)}catch{}}});const r=s=>{const{url:l,options:p}=Be(s);if(l&&p.prefetch){if(Ie(l))return;Pe(l)}};let o;const u=s=>{clearTimeout(o),o=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:p,options:h}=Be(s);if(!l||!p)return;const k=l instanceof SVGAElement;if(!k&&!(p.protocol==="https:"||p.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||h.reload||(k?l.target.baseVal:l.target))return;const[y,_]=p.href.split("#");if(_!==void 0&&y===location.href.split("#")[0]){C=!0,ye(O),G.page.set({...V,url:p}),G.page.notify();return}he({url:p,scroll:h.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[B]===O)return;const l=s.state[B]-O;he({url:new URL(location.href),scroll:Z[s.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[B]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[B]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&G.navigating.set(null)})},_hydrate:async({status:r,error:o,node_ids:u,params:s,routeId:l,data:p,form:h})=>{var y;const k=new URL(location.href);let E;try{const _=u.map(async(R,I)=>{const L=p[I];return ue({loader:ce[R],url:k,params:s,routeId:l,parent:async()=>{const U={};for(let A=0;A<I;A+=1)Object.assign(U,(await _[A]).data);return U},server_data_node:de(L)})});E=await Y({url:k,params:s,branch:await Promise.all(_),status:r,error:o!=null&&o.__is_http_error?new se(o.status,o.message):o,form:h,route:(y=te.find(R=>R.id===l))!=null?y:null})}catch(_){const R=_;if(R instanceof ze){await Q(new URL(_.location,location.href));return}E=await ee({status:R instanceof se?R.status:500,error:R,url:k,routeId:l})}Oe(E)}}}let It=1;async function xe(a,e){const t=new URL(a);t.pathname=a.pathname.replace(/\/$/,"")+Ut,t.searchParams.set("__invalid",e.map(i=>i?"y":"n").join("")),t.searchParams.set("__id",String(It++)),await re(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}const Tt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ne(a,e){for(const t of Tt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)}});return e}function ae(){return()=>{}}async function Vt({env:a,hydrate:e,paths:t,target:c,trailing_slash:i}){ot(t);const d=At({target:c,base:t.base,trailing_slash:i});it({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Vt as start};
