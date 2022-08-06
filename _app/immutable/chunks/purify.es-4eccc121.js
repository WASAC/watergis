/*! @license DOMPurify 2.3.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.6/LICENSE */function Dt(a){if(Array.isArray(a)){for(var n=0,o=Array(a.length);n<a.length;n++)o[n]=a[n];return o}else return Array.from(a)}var Nt=Object.hasOwnProperty,Ze=Object.setPrototypeOf,Mt=Object.isFrozen,Lt=Object.getPrototypeOf,wt=Object.getOwnPropertyDescriptor,T=Object.freeze,b=Object.seal,Ct=Object.create,nt=typeof Reflect<"u"&&Reflect,re=nt.apply,Oe=nt.construct;re||(re=function(n,o,s){return n.apply(o,s)});T||(T=function(n){return n});b||(b=function(n){return n});Oe||(Oe=function(n,o){return new(Function.prototype.bind.apply(n,[null].concat(Dt(o))))});var It=E(Array.prototype.forEach),Je=E(Array.prototype.pop),B=E(Array.prototype.push),te=E(String.prototype.toLowerCase),Qe=E(String.prototype.match),N=E(String.prototype.replace),xt=E(String.prototype.indexOf),kt=E(String.prototype.trim),_=E(RegExp.prototype.test),ge=Ft(TypeError);function E(a){return function(n){for(var o=arguments.length,s=Array(o>1?o-1:0),d=1;d<o;d++)s[d-1]=arguments[d];return re(a,n,s)}}function Ft(a){return function(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return Oe(a,o)}}function l(a,n){Ze&&Ze(a,null);for(var o=n.length;o--;){var s=n[o];if(typeof s=="string"){var d=te(s);d!==s&&(Mt(n)||(n[o]=d),s=d)}a[s]=!0}return a}function w(a){var n=Ct(null),o=void 0;for(o in a)re(Nt,a,[o])&&(n[o]=a[o]);return n}function Q(a,n){for(;a!==null;){var o=wt(a,n);if(o){if(o.get)return E(o.get);if(typeof o.value=="function")return E(o.value)}a=Lt(a)}function s(d){return console.warn("fallback value for",d),null}return s}var et=T(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ye=T(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),be=T(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pt=T(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Se=T(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Ut=T(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tt=T(["#text"]),rt=T(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Re=T(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),at=T(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=T(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ht=b(/\{\{[\s\S]*|[\s\S]*\}\}/gm),zt=b(/<%[\s\S]*|[\s\S]*%>/gm),Gt=b(/^data-[\-\w.\u00B7-\uFFFF]/),Bt=b(/^aria-[\-\w]+$/),Wt=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$t=b(/^(?:\w+script|data):/i),Yt=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Vt=b(/^html$/i),W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function y(a){if(Array.isArray(a)){for(var n=0,o=Array(a.length);n<a.length;n++)o[n]=a[n];return o}else return Array.from(a)}var jt=function(){return typeof window>"u"?null:window},qt=function(n,o){if((typeof n>"u"?"undefined":W(n))!=="object"||typeof n.createPolicy!="function")return null;var s=null,d="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(d)&&(s=o.currentScript.getAttribute(d));var $="dompurify"+(s?"#"+s:"");try{return n.createPolicy($,{createHTML:function(Y){return Y}})}catch{return console.warn("TrustedTypes policy "+$+" could not be created."),null}};function it(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jt(),n=function(e){return it(e)};if(n.version="2.3.6",n.removed=[],!a||!a.document||a.document.nodeType!==9)return n.isSupported=!1,n;var o=a.document,s=a.document,d=a.DocumentFragment,$=a.HTMLTemplateElement,C=a.Node,Y=a.Element,ae=a.NodeFilter,De=a.NamedNodeMap,ot=De===void 0?a.NamedNodeMap||a.MozNamedAttrMap:De,lt=a.HTMLFormElement,st=a.DOMParser,ut=a.trustedTypes,V=Y.prototype,ft=Q(V,"cloneNode"),mt=Q(V,"nextSibling"),ct=Q(V,"childNodes"),ne=Q(V,"parentNode");if(typeof $=="function"){var ie=s.createElement("template");ie.content&&ie.content.ownerDocument&&(s=ie.content.ownerDocument)}var O=qt(ut,o),Ne=O?O.createHTML(""):"",j=s,oe=j.implementation,pt=j.createNodeIterator,dt=j.createDocumentFragment,vt=j.getElementsByTagName,ht=o.importNode,Me={};try{Me=w(s).documentMode?s.documentMode:{}}catch{}var g={};n.isSupported=typeof ne=="function"&&oe&&typeof oe.createHTMLDocument<"u"&&Me!==9;var le=Ht,se=zt,Tt=Gt,At=Bt,_t=$t,Le=Yt,ue=Wt,m=null,we=l({},[].concat(y(et),y(ye),y(be),y(Se),y(tt))),c=null,Ce=l({},[].concat(y(rt),y(Re),y(at),y(ee))),f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),H=null,fe=null,Ie=!0,me=!0,xe=!1,I=!1,M=!1,ce=!1,pe=!1,x=!1,q=!1,X=!1,ke=!0,de=!0,z=!1,k={},F=null,Fe=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,Ue=l({},["audio","video","img","source","image","track"]),ve=null,He=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),he="http://www.w3.org/1998/Math/MathML",Te="http://www.w3.org/2000/svg",D="http://www.w3.org/1999/xhtml",K=D,Ae=!1,P=void 0,Et=["application/xhtml+xml","text/html"],gt="text/html",L=void 0,U=null,yt=s.createElement("form"),ze=function(e){return e instanceof RegExp||e instanceof Function},_e=function(e){U&&U===e||((!e||(typeof e>"u"?"undefined":W(e))!=="object")&&(e={}),e=w(e),m="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS):we,c="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR):Ce,ve="ADD_URI_SAFE_ATTR"in e?l(w(He),e.ADD_URI_SAFE_ATTR):He,Pe="ADD_DATA_URI_TAGS"in e?l(w(Ue),e.ADD_DATA_URI_TAGS):Ue,F="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS):Fe,H="FORBID_TAGS"in e?l({},e.FORBID_TAGS):{},fe="FORBID_ATTR"in e?l({},e.FORBID_ATTR):{},k="USE_PROFILES"in e?e.USE_PROFILES:!1,Ie=e.ALLOW_ARIA_ATTR!==!1,me=e.ALLOW_DATA_ATTR!==!1,xe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,I=e.SAFE_FOR_TEMPLATES||!1,M=e.WHOLE_DOCUMENT||!1,x=e.RETURN_DOM||!1,q=e.RETURN_DOM_FRAGMENT||!1,X=e.RETURN_TRUSTED_TYPE||!1,pe=e.FORCE_BODY||!1,ke=e.SANITIZE_DOM!==!1,de=e.KEEP_CONTENT!==!1,z=e.IN_PLACE||!1,ue=e.ALLOWED_URI_REGEXP||ue,K=e.NAMESPACE||D,e.CUSTOM_ELEMENT_HANDLING&&ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),P=Et.indexOf(e.PARSER_MEDIA_TYPE)===-1?P=gt:P=e.PARSER_MEDIA_TYPE,L=P==="application/xhtml+xml"?function(t){return t}:te,I&&(me=!1),q&&(x=!0),k&&(m=l({},[].concat(y(tt))),c=[],k.html===!0&&(l(m,et),l(c,rt)),k.svg===!0&&(l(m,ye),l(c,Re),l(c,ee)),k.svgFilters===!0&&(l(m,be),l(c,Re),l(c,ee)),k.mathMl===!0&&(l(m,Se),l(c,at),l(c,ee))),e.ADD_TAGS&&(m===we&&(m=w(m)),l(m,e.ADD_TAGS)),e.ADD_ATTR&&(c===Ce&&(c=w(c)),l(c,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&l(ve,e.ADD_URI_SAFE_ATTR),e.FORBID_CONTENTS&&(F===Fe&&(F=w(F)),l(F,e.FORBID_CONTENTS)),de&&(m["#text"]=!0),M&&l(m,["html","head","body"]),m.table&&(l(m,["tbody"]),delete H.tbody),T&&T(e),U=e)},Ge=l({},["mi","mo","mn","ms","mtext"]),Be=l({},["foreignobject","desc","title","annotation-xml"]),Z=l({},ye);l(Z,be),l(Z,Pt);var Ee=l({},Se);l(Ee,Ut);var bt=function(e){var t=ne(e);(!t||!t.tagName)&&(t={namespaceURI:D,tagName:"template"});var r=te(e.tagName),u=te(t.tagName);if(e.namespaceURI===Te)return t.namespaceURI===D?r==="svg":t.namespaceURI===he?r==="svg"&&(u==="annotation-xml"||Ge[u]):Boolean(Z[r]);if(e.namespaceURI===he)return t.namespaceURI===D?r==="math":t.namespaceURI===Te?r==="math"&&Be[u]:Boolean(Ee[r]);if(e.namespaceURI===D){if(t.namespaceURI===Te&&!Be[u]||t.namespaceURI===he&&!Ge[u])return!1;var v=l({},["title","style","font","a","script"]);return!Ee[r]&&(v[r]||!Z[r])}return!1},S=function(e){B(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Ne}catch{e.remove()}}},We=function(e,t){try{B(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch{B(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!c[e])if(x||q)try{S(t)}catch{}else try{t.setAttribute(e,"")}catch{}},$e=function(e){var t=void 0,r=void 0;if(pe)e="<remove></remove>"+e;else{var u=Qe(e,/^[\r\n\t ]+/);r=u&&u[0]}P==="application/xhtml+xml"&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var v=O?O.createHTML(e):e;if(K===D)try{t=new st().parseFromString(v,P)}catch{}if(!t||!t.documentElement){t=oe.createDocument(K,"template",null);try{t.documentElement.innerHTML=Ae?"":v}catch{}}var h=t.body||t.documentElement;return e&&r&&h.insertBefore(s.createTextNode(r),h.childNodes[0]||null),K===D?vt.call(t,M?"html":"body")[0]:M?t.documentElement:h},Ye=function(e){return pt.call(e.ownerDocument||e,e,ae.SHOW_ELEMENT|ae.SHOW_COMMENT|ae.SHOW_TEXT,null,!1)},St=function(e){return e instanceof lt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof ot)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function")},G=function(e){return(typeof C>"u"?"undefined":W(C))==="object"?e instanceof C:e&&(typeof e>"u"?"undefined":W(e))==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},R=function(e,t,r){!g[e]||It(g[e],function(u){u.call(n,t,r,U)})},Ve=function(e){var t=void 0;if(R("beforeSanitizeElements",e,null),St(e)||Qe(e.nodeName,/[\u0080-\uFFFF]/))return S(e),!0;var r=L(e.nodeName);if(R("uponSanitizeElement",e,{tagName:r,allowedTags:m}),!G(e.firstElementChild)&&(!G(e.content)||!G(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent)||r==="select"&&_(/<template/i,e.innerHTML))return S(e),!0;if(!m[r]||H[r]){if(!H[r]&&qe(r)&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,r)||f.tagNameCheck instanceof Function&&f.tagNameCheck(r)))return!1;if(de&&!F[r]){var u=ne(e)||e.parentNode,v=ct(e)||e.childNodes;if(v&&u)for(var h=v.length,p=h-1;p>=0;--p)u.insertBefore(ft(v[p],!0),mt(e))}return S(e),!0}return e instanceof Y&&!bt(e)||(r==="noscript"||r==="noembed")&&_(/<\/no(script|embed)/i,e.innerHTML)?(S(e),!0):(I&&e.nodeType===3&&(t=e.textContent,t=N(t,le," "),t=N(t,se," "),e.textContent!==t&&(B(n.removed,{element:e.cloneNode()}),e.textContent=t)),R("afterSanitizeElements",e,null),!1)},je=function(e,t,r){if(ke&&(t==="id"||t==="name")&&(r in s||r in yt))return!1;if(!(me&&!fe[t]&&_(Tt,t))){if(!(Ie&&_(At,t))){if(!c[t]||fe[t]){if(!(qe(e)&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&_(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&_(f.tagNameCheck,r)||f.tagNameCheck instanceof Function&&f.tagNameCheck(r))))return!1}else if(!ve[t]){if(!_(ue,N(r,Le,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&xt(r,"data:")===0&&Pe[e])){if(!(xe&&!_(_t,N(r,Le,"")))){if(r)return!1}}}}}}return!0},qe=function(e){return e.indexOf("-")>0},Xe=function(e){var t=void 0,r=void 0,u=void 0,v=void 0;R("beforeSanitizeAttributes",e,null);var h=e.attributes;if(!!h){var p={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:c};for(v=h.length;v--;){t=h[v];var J=t,A=J.name,Ke=J.namespaceURI;if(r=kt(t.value),u=L(A),p.attrName=u,p.attrValue=r,p.keepAttr=!0,p.forceKeepAttr=void 0,R("uponSanitizeAttribute",e,p),r=p.attrValue,!p.forceKeepAttr&&(We(A,e),!!p.keepAttr)){if(_(/\/>/i,r)){We(A,e);continue}I&&(r=N(r,le," "),r=N(r,se," "));var Ot=L(e.nodeName);if(!!je(Ot,u,r))try{Ke?e.setAttributeNS(Ke,A,r):e.setAttribute(A,r),Je(n.removed)}catch{}}}R("afterSanitizeAttributes",e,null)}},Rt=function i(e){var t=void 0,r=Ye(e);for(R("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)R("uponSanitizeShadowNode",t,null),!Ve(t)&&(t.content instanceof d&&i(t.content),Xe(t));R("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i,e){var t=void 0,r=void 0,u=void 0,v=void 0,h=void 0;if(Ae=!i,Ae&&(i="<!-->"),typeof i!="string"&&!G(i)){if(typeof i.toString!="function")throw ge("toString is not a function");if(i=i.toString(),typeof i!="string")throw ge("dirty is not a string, aborting")}if(!n.isSupported){if(W(a.toStaticHTML)==="object"||typeof a.toStaticHTML=="function"){if(typeof i=="string")return a.toStaticHTML(i);if(G(i))return a.toStaticHTML(i.outerHTML)}return i}if(ce||_e(e),n.removed=[],typeof i=="string"&&(z=!1),z){if(i.nodeName){var p=L(i.nodeName);if(!m[p]||H[p])throw ge("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof C)t=$e("<!---->"),r=t.ownerDocument.importNode(i,!0),r.nodeType===1&&r.nodeName==="BODY"||r.nodeName==="HTML"?t=r:t.appendChild(r);else{if(!x&&!I&&!M&&i.indexOf("<")===-1)return O&&X?O.createHTML(i):i;if(t=$e(i),!t)return x?null:X?Ne:""}t&&pe&&S(t.firstChild);for(var J=Ye(z?i:t);u=J.nextNode();)u.nodeType===3&&u===v||Ve(u)||(u.content instanceof d&&Rt(u.content),Xe(u),v=u);if(v=null,z)return i;if(x){if(q)for(h=dt.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return c.shadowroot&&(h=ht.call(o,h,!0)),h}var A=M?t.outerHTML:t.innerHTML;return M&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&_(Vt,t.ownerDocument.doctype.name)&&(A="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+A),I&&(A=N(A,le," "),A=N(A,se," ")),O&&X?O.createHTML(A):A},n.setConfig=function(i){_e(i),ce=!0},n.clearConfig=function(){U=null,ce=!1},n.isValidAttribute=function(i,e,t){U||_e({});var r=L(i),u=L(e);return je(r,u,t)},n.addHook=function(i,e){typeof e=="function"&&(g[i]=g[i]||[],B(g[i],e))},n.removeHook=function(i){g[i]&&Je(g[i])},n.removeHooks=function(i){g[i]&&(g[i]=[])},n.removeAllHooks=function(){g={}},n}var Kt=it();export{Kt as default};
