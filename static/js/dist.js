!function(e){function t(t){for(var n,a,s=t[0],l=t[1],i=t[2],b=0,p=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},c={0:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;o.push([6,1]),r()}([,,,function(e,t,r){var n=r(4),c=r(5);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[e.i,c,""]]);var o={insert:"head",singleton:!1};n(c,o);e.exports=c.locals||{}},,function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n)()(!1);c.push([e.i,":root{--main-color:#bc8f8f;--complement-color:#8fbc8f}.site-search.svelte-dn7485{--placeholderColor:var(--main-color);--border:1px solid var(--main-color);--borderRadius:10px;--borderFocusColor:var(--complement-color);--itemIsActiveBG:var(--main-color);--itemHoverBG:var(--complement-color)}.site-search__title--light.svelte-dn7485{color:var(--main-color)}@media screen and (min-width: 560px){.site-search.svelte-dn7485{width:50%}}",""]),t.default=c},function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1);function o(e){let t,r,c,o,a,s=e[0].label+"";return{c(){t=Object(n.g)("a"),r=Object(n.g)("h3"),c=Object(n.o)(s),o=Object(n.n)(),a=Object(n.g)("span"),Object(n.c)(r,"class","page-snippet__title"),Object(n.c)(a,"class","page-snippet__content-preview"),Object(n.c)(t,"class","page-snippet"),Object(n.c)(t,"href","/")},m(e,s){Object(n.i)(e,t,s),Object(n.b)(t,r),Object(n.b)(r,c),Object(n.b)(t,o),Object(n.b)(t,a)},p(e,[t]){1&t&&s!==(s=e[0].label+"")&&Object(n.m)(c,s)},i:n.k,o:n.k,d(e){e&&Object(n.f)(t)}}}function a(e,t,r){let{item:n}=t;return e.$$set=e=>{"item"in e&&r(0,n=e.item)},[n]}class s extends n.a{constructor(e){super(),Object(n.h)(this,e,a,o,n.l,{item:0})}}var l=s;r(3);function i(e){let t,r,o,a,s;return a=new c.a({props:{placeholder:p,loadOptions:e[0],noOptionsMessage:b,Item:l}}),{c(){t=Object(n.g)("section"),r=Object(n.g)("h1"),r.textContent=""+u,o=Object(n.n)(),Object(n.d)(a.$$.fragment),Object(n.c)(r,"class","site-search__title site-search__title--light svelte-dn7485"),Object(n.c)(t,"class","site-search svelte-dn7485")},m(e,c){Object(n.i)(e,t,c),Object(n.b)(t,r),Object(n.b)(t,o),Object(n.j)(a,t,null),s=!0},p:n.k,i(e){s||(Object(n.p)(a.$$.fragment,e),s=!0)},o(e){Object(n.q)(a.$$.fragment,e),s=!1},d(e){e&&Object(n.f)(t),Object(n.e)(a)}}}const u="HELLO FROM SVELTE",b="Нет результатов",p="Начните вводить текст поиска";function f(e){return[async e=>{const t=({label:t})=>t.toLocaleLowerCase().includes(e.trim().toLocaleLowerCase());try{const e=await fetch("/js/data/items.json"),r=await e.json();return r.byValue.filter(t)}catch(e){return[]}}]}class d extends n.a{constructor(e){super(),Object(n.h)(this,e,f,i,n.l,{})}}const O=new d({target:document.getElementById("header")});t.default=O}]);