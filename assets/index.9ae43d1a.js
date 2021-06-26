var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(n)for(var r of n(t))l.call(t,r)&&o(e,r,t[r]);return e},c=(e,n)=>t(e,r(n)),i=(e,t)=>{var r={};for(var o in e)a.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))t.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r};import{R as u,a as d,u as m,r as p,c as f,b as g,d as h,s as v,e as x,f as b,g as w,T as E,M as y,D as k,h as N,i as C,S as D,j,k as L,l as R,m as A,K as S,n as z,C as M,t as O,o as H}from"./vendor.81c1f7ca.js";function P({children:e}){return u.createElement("h1",{className:"font-work text-5xl bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-flow motion-reduce:animate-none filter drop-shadow-lg",style:{backgroundSize:200}},e)}const B=d("auth",{token:"",expiresAt:Date.now()}),I=d("dark-mode",void 0);function T(){const[e,t]=m(I),r=function(){const[e,t]=p.exports.useState(window.matchMedia("(prefers-color-scheme: dark)").matches);return p.exports.useEffect((()=>{const e=({matches:e})=>t(e);return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}),[]),e}(),n=void 0===e?r:e;return p.exports.useEffect((()=>{const e=document.documentElement;n?e.classList.add("dark"):e.classList.remove("dark")}),[n]),[n,t]}function V(){const[e,t]=T();return u.createElement("button",{onClick:()=>t(!e),className:f("group relative flex items-center justify-center w-12 h-6 rounded-full focus:outline-none","bg-gray-500 dark:bg-gray-700")},u.createElement("div",{className:f("absolute left-0 h-6 w-6 rounded-full border-2 group-focus:ring-2","transform transition-transform",e?"translate-x-6":"translate-x-0","bg-gray-200 group-hover:bg-gray-300 border-gray-500 ring-blue-400","dark:border-gray-700 dark:ring-blue-500")}),u.createElement("span",{className:"text-md mt-px"},"☀️🌛"))}const W=g(Array(9).fill(null).map(((e,t)=>t.toString()))),$=g(Object.fromEntries(Array(9).fill(null).map(((e,t)=>[t.toString(),null])))),_=g(null,((e,t,r)=>{const n=e(W),a=e($),l=n.find((e=>null===a[e]));void 0!==l&&t($,c(s({},a),{[l]:r}))})),K=g(null,((e,t,{from:r,to:n})=>{const a=e(W),l=a.findIndex((e=>e===r)),o=a.findIndex((e=>e===n)),s=a.slice();s[l]=n,s[o]=r,t(W,s)})),q=g(null,((e,t,r)=>{t($,c(s({},e($)),{[r]:null}))}));function G(e){return h(p.exports.useMemo((()=>v($,(t=>t[e||""]))),[e]))}async function U(){const e=await fetch("https://1pd7ps5dmd.execute-api.ap-southeast-2.amazonaws.com/default/spotifyAuth"),{access_token:t,token_type:r,expires_in:n}=await e.json();return{token:`${r} ${t}`,expiresAt:Date.now()+1e3*(n-100)}}const F=g(""),J=g(0),Q=g((async e=>{const t=e(F),r=e(B);if(t)return X(r,t)})),X=function(e,t){let r;return(...n)=>(clearTimeout(r),new Promise((a=>{r=setTimeout((()=>a(e(...n))),t)})))}((async(e,t)=>await async function(e,t){if(!t)return[];e.token||(e=await U());const r=await fetch(`https://api.spotify.com/v1/search?type=album&limit=5&q=${t}`,{headers:{Authorization:e.token}}),{albums:n}=await r.json();return n.items}(e,t)),300),Y=g(null,((e,t)=>{t(F,""),t(J,0)})),Z=g(null,((e,t,r)=>{t(F,r.target.value),t(J,0)})),ee=g(null,((e,t)=>{t(F,""),t(J,0)})),te=g(null,(async(e,t,r)=>{const n=e(J),a=await e(Q,!0),l=()=>{t(F,""),t(J,0)};switch(r.key){case"ArrowUp":r.preventDefault(),a&&t(J,n<=0?a.length-1:n-1);break;case"ArrowDown":r.preventDefault(),a&&t(J,n>=a.length-1?0:n+1);break;case"Enter":if(r.preventDefault(),!a)return;t(_,a[n]),l();break;case"Escape":r.preventDefault(),l()}})),re=g(null,((e,t,r)=>{t(_,r),t(F,""),t(J,0)}));function ne(e){return p.exports.createElement("svg",s({viewBox:"0 0 16 16"},e),p.exports.createElement("path",{d:"M4.99 13v-3H15V3h-2v5H4.99V5L1 9l3.99 4z"}))}function ae(e){return p.exports.createElement("svg",s({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},e),p.exports.createElement("path",{fillRule:"evenodd",d:"M9.476 10.89a6 6 0 111.414-1.414l4.845 4.845-1.414 1.414-4.845-4.844zM9.818 6a3.818 3.818 0 11-7.636 0 3.818 3.818 0 017.636 0z"}))}function le(e){return p.exports.createElement("svg",s({viewBox:"0 0 16 16"},e),p.exports.createElement("path",{d:"M11.536 12.95L8 9.414 4.465 12.95 3.05 11.536 6.586 8 3.05 4.465 4.465 3.05 8 6.586l3.536-3.536 1.414 1.415L9.414 8l3.536 3.536-1.414 1.414z"}))}function oe(e){return p.exports.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),p.exports.createElement("circle",{style:{opacity:"25%"},cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),p.exports.createElement("path",{style:{opacity:"75%"},fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))}function se(){const e=x(te),t=x(Y),r=p.exports.useRef(null),n=function(e,...t){const r=p.exports.useRef(null);return p.exports.useEffect((()=>{const n=n=>{r.current&&![r,...t].some((e=>{var t;return null==(t=e.current)?void 0:t.contains(n.target)}))&&e(n)};return document.addEventListener("mousedown",n),document.addEventListener("mouseup",n),document.addEventListener("touchstart",n),document.addEventListener("touchend",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("mouseup",n),document.removeEventListener("touchstart",n),document.removeEventListener("touchend",n)}}),[r,e,t]),r}(t,r);return u.createElement("div",{className:"w-full max-w-sm",onKeyDown:e},u.createElement(ce,{inputRef:r}),u.createElement(p.exports.Suspense,{fallback:u.createElement(ue,null,u.createElement("li",{className:"flex items-center justify-center h-12"},u.createElement(oe,{className:"animate-spin h-5 w-5 text-gray-500"})))},u.createElement(ie,{resultsRef:n})))}function ce({inputRef:e}){const t=h(F),r=x(Z),n=x(ee);return u.createElement("div",{className:"relative group"},u.createElement("input",{ref:e,autoCorrect:"off",spellCheck:"false",placeholder:"Search",value:t,onChange:r,className:f("w-full border-2 rounded-lg px-4 py-2 focus:outline-none","bg-purple-100 text-gray-900/90 placeholder-purple-900/50 border-purple-100 caret-purple-600/90","dark:bg-gray-700 dark:text-gray-50 dark:placeholder-purple-200/70 dark:border-gray-700 dark:caret-purple-200/90","hover:border-purple-200 focus:border-purple-200 focus:bg-white","dark:hover:border-gray-500 dark:focus:border-gray-400/30 dark:focus:bg-gray-900",!!t&&"rounded-b-none bg-white border-purple-100 outline-none")}),t?u.createElement("div",{className:"absolute inset-y-0 right-0 rounded-r-lg overflow-hidden py-[2px]"},u.createElement("button",{onClick:n,className:"group h-full w-10 flex items-center justify-center text-purple-600/60 hover:text-purple-600 dark:text-gray-400 dark:hover:text-gray-100"},u.createElement(le,{className:"w-4 h-4 fill-current"}))):u.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center pointer-events-none"},u.createElement(ae,{className:f("w-4 h-4 fill-current mr-4","text-gray-400 group-hover:text-purple-500/80 group-focus-within:text-purple-500/80","dark:text-gray-500 group-hover:text-purple-400 group-focus-within:text-purple-400")})))}function ie({resultsRef:e}){const t=h(J),r=h(Q),n=x(re);return(null==r?void 0:r.length)?u.createElement(ue,{ref:e},r.map(((e,r)=>u.createElement(de,{key:e.id,isHighlighted:r===t,album:e,onClick:()=>n(e)})))):null}const ue=p.exports.forwardRef((function(e,t){return u.createElement("ul",{ref:t,className:f("absolute z-10 w-[calc(100%-32px)] max-w-sm shadow-xl overflow-auto","rounded-b-lg border-2 border-t-0 divide-y-2","bg-white text-gray-900 border-purple-200 divide-purple-200","dark:bg-gray-900 dark:text-white dark:border-gray-400/30 dark:divide-gray-400/30")},e.children)}));function de(e){var t=e,{album:r,isHighlighted:n}=t,a=i(t,["album","isHighlighted"]);return u.createElement("li",null,u.createElement("button",s({className:f("group relative w-full flex items-center justify-between px-2 py-1.5","hover:bg-purple-100 dark:hover:bg-gray-700 overflow-hidden",n&&"bg-purple-100 dark:bg-gray-700")},a),u.createElement("div",{className:"relative w-full flex items-center space-x-2 overflow-hidden"},u.createElement("img",{src:r.images[2].url,className:"w-10 h-10 rounded"}),u.createElement("div",{className:"flex flex-col items-start leading-5"},u.createElement("div",{title:r.name,className:"whitespace-nowrap"},r.name),u.createElement("div",{title:r.artists[0].name,className:"whitespace-nowrap text-gray-900/60 dark:text-purple-200/80"},r.artists[0].name)),!n&&u.createElement("div",{className:"absolute h-full w-4 right-0 bg-gradient-to-l from-white  dark:from-gray-900 group-hover:from-purple-100 dark:group-hover:from-gray-700/30"})),n&&u.createElement("div",{className:"hidden md:flex absolute right-0 h-full items-center pointer-events-none"},u.createElement("div",{className:"w-10 h-full bg-gradient-to-l from-purple-100 dark:from-gray-700"}),u.createElement("div",{className:"h-full flex items-center px-4 bg-purple-100 dark:bg-gray-700"},u.createElement(ne,{className:"w-4 h-4 fill-current text-purple-600/60 dark:text-purple-300/100 flex-shrink-0"})))))}function me({album:e,onCloseClick:t,className:r}){return u.createElement("div",{className:f("group overflow-hidden bg-purple-50 dark:bg-gray-900",r)},u.createElement("div",{className:"relative"},t&&u.createElement(pe,{onClick:e=>{e.stopPropagation(),t()}}),u.createElement("img",{src:e.images[0].url,onDragStart:e=>e.preventDefault()})))}function pe(e){var t=i(e,[]);return u.createElement("button",s({className:"invisible group-hover:visible absolute top-0 right-0 p-2 bg-black/30 rounded-bl-lg text-gray-200 hover:text-white focus:outline-none"},t),u.createElement(le,{className:"w-4 h-4 fill-current"}))}function fe({items:e,onDragEnd:t,children:r}){const[n,a]=p.exports.useState(null),l=b(w(y,{activationConstraint:{distance:15}}),w(E,{activationConstraint:{distance:15}}),w(S,{coordinateGetter:A})),o=G(n);return u.createElement(k,{sensors:l,collisionDetection:N,modifiers:[C],onDragStart:e=>a(e.active.id),onDragEnd:e=>{t(e),a(null)},onDragCancel:()=>a(null)},u.createElement(D,{items:e,strategy:j},r),L.exports.createPortal(u.createElement(R,{adjustScale:!0,zIndex:10},o&&u.createElement(me,{album:o,className:"shadow-xl ring-4 ring-purple-400 opacity-100"})),document.body))}function ge(e){var t=e,{id:r,dragClassNames:n,children:a}=t,l=i(t,["id","dragClassNames","children"]);const{attributes:o,listeners:d,setNodeRef:m,transform:p,transition:g,isDragging:h}=z({id:r,animateLayoutChanges:()=>!1}),v={transform:M.Transform.toString(p),transition:g||void 0};return u.createElement("li",c(s(s(c(s({},l),{ref:m,style:s({touchAction:"none"},v)}),o),d),{className:f(l.className,h&&n)}),a)}function he({exportRef:e}){const t=h(W),r=x(K);return u.createElement("div",{className:"m-0"},u.createElement("div",{ref:e,className:"bg-white"},u.createElement(fe,{items:t,onDragEnd:({active:e,over:t})=>{t&&e.id!==t.id&&r({from:e.id,to:t.id})}},u.createElement("ul",{className:"grid grid-cols-3 grid-rows-3 bg-gray-50 dark:bg-gray-900",style:{lineHeight:0,width:"90vw",height:"90vw",maxWidth:576,maxHeight:576}},t.map((e=>u.createElement(ve,{key:e,id:e})))))))}function ve({id:e}){const t=G(e),r=x(q);return u.createElement(ge,{key:e,id:e,className:"inline-flex overflow-hidden cursor-default focus:outline-none focus:ring-4 focus:relative focus:z-10 ring-purple-300",dragClassNames:"opacity-30 focus:ring-0"},t?u.createElement(me,{album:t,onCloseClick:()=>r(e)}):u.createElement("div",{className:"group flex flex-1 p-2 bg-gray-50 dark:bg-gray-900"},u.createElement("div",{className:"flex-1 rounded-lg border-2 border-dashed border-purple-600/50 group-hover:border-purple-600/90 dark:border-purple-400/60 dark:group-hover:border-purple-400/90"})))}function xe({exportRef:e}){return u.createElement("button",{onClick:async()=>{if(!e.current)return;!function(e,t){const r=document.createElement("a");r.href=e,r.setAttribute("download",t),r.click()}(await O(e.current,{canvasHeight:1920,canvasWidth:1920}),"chart.jpg")},className:f("px-2 py-1 rounded font-work text-lg focus:outline-none focus:ring","hover:shadow-md active:shadow-inner","bg-stripes-light text-purple-900/80  ring-purple-400","dark:bg-stripes-dark dark:text-purple-100/80 dark:ring-purple-600")},"Download")}function be(){!function(){const[e,t]=m(B);p.exports.useEffect((()=>{e.token&&e.expiresAt>Date.now()||async function e(){const r=await U();t(r),setTimeout(e,r.expiresAt-Date.now())}()}),[e.expiresAt,e.token,t])}(),T();const e=p.exports.useRef(null);return u.createElement("div",{className:"relative font-nunito flex flex-col space-y-10 items-center px-4 py-10 text-gray-900 selection:bg-pink-100 dark:selection:bg-pink-200/80 selection:text-purple-900"},u.createElement("div",{className:"absolute top-2 right-2"},u.createElement(V,null)),u.createElement(P,null,"Music List"),u.createElement(se,null),u.createElement(he,{exportRef:e}),u.createElement(xe,{exportRef:e}))}H.render(u.createElement(u.StrictMode,null,u.createElement(be,null)),document.getElementById("root"));
