var A=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(A,e)=>{for(var t in e||(e={}))n.call(e,t)&&l(A,t,e[t]);if(r)for(var t of r(e))a.call(e,t)&&l(A,t,e[t]);return A},s=(A,r)=>e(A,t(r)),i=(A,e)=>{var t={};for(var l in A)n.call(A,l)&&e.indexOf(l)<0&&(t[l]=A[l]);if(null!=A&&r)for(var l of r(A))e.indexOf(l)<0&&a.call(A,l)&&(t[l]=A[l]);return t};import{R as c,a as u,u as d,r as m,c as p,b as g,d as f,e as h,f as v,g as E,T as b,M as y,D as w,h as x,i as k,S as N,j as M,k as L,l as D,s as R,K as C,m as K,C as S,n as F}from"./vendor.05e5ff2f.js";function z({children:A}){return c.createElement("h1",{className:"font-work text-5xl bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-flow motion-reduce:animate-none filter drop-shadow-lg",style:{backgroundSize:200}},A)}const Q=u("auth",{token:"",expiresAt:Date.now()}),j=u("dark-mode",void 0);function U(){const[A,e]=d(j),t=function(){const[A,e]=m.exports.useState(window.matchMedia("(prefers-color-scheme: dark)").matches);return m.exports.useEffect((()=>{const A=({matches:A})=>e(A);return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",A),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",A)}),[]),A}(),r=void 0===A?t:A;return m.exports.useEffect((()=>{const A=document.documentElement;r?A.classList.add("dark"):A.classList.remove("dark")}),[r]),[r,e]}function Z(){const[A,e]=U(),t=new Audio("data:audio/mpeg;base64,SUQzAwAAAAAAFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7TAAAAWdZEj9PYAA0ssa/8fgADO67UxERLbjjjFzQtMD0HAb6HqNXuMNjvhgeRLmCzr/ixY58zkzM0MzMzfw4Eg8TgQER07Es/9gwJ5/iypXEMnoQEwHozg8qSxLEcRCY5CvX3veixZTWztfZf6w8iK4JiO0DcR3ljjZLP4BDJ7+UpOzM7e9/mZnpuvXr77e95YWRHYNCZVe/AYHicGhMiXn7+U6nbe8zMzMzNKdqyk3vNKbTtmaUprFHKBBxRwPnwfP4kOcMffTOS0qTkLCRFlIuJspFsi4KQ3DZH8ZkQbgrp/HOOUcCnL6P06SjYJVjrkt7H83csaqwzfkcd9dj8LRjReWrW5myyz3xJKE1lK7KS7S3bt/9U8NxeVyKHpLJmDPTdvfcu0rK3XaWiu26K6m6AUkcYCvAb1FYC+VJAFN2T03ZGsdl9+MVZ9yBkC7WqM3Z+sWWwbe+nu3rv3LH4b7nnnhhMwdZzkj+4S/vPy13L//f8fi9bsbt2N27FJgymhXbKIy+sGRmMxi9fgHrNN4IdP/0i7Cz0gtASxAAADPQAAt5BkQREREAlEtxJjF/JUd7w7VQ9gp2aDR8rkOgRn0bOGF1bsMSErkOUT86dMUZhinKhqhRJBiFORfjSW1CcqNalEpi5PlFaN2JXE6cl9UKIvyFZewWWzU5MLLBxtFA2g6pVKoW5VMV5VDBXB1F9cS2uMRmwuXTUcyFe2anK0MKdQ17Jd69unkOZk9GnVtV0rVCwsqdbI71lYoyn/+7TATQAZDX07/PeAAfIkYuQ3pbCVWWFlgb8LcLefB1CtZidq1WvZtQn22GbMFlriz58+jSxakZUFcr//////////6rKq3NSikyxyFAINHGFBcZpS1ZL63XFLQZH7gqjRJ8QIn5cDjNUyickqME90ISyhTy5bGNRKfisqlNRQ+KREdIEbmu0ysqku7dyUdiiCoLA8FxIEgyFhCNA6D4MA0CIiGyQ273////lXU8aVTg25pWpwyUanjSqyQeNM39b/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7TAwAA/8AEuAAAAIK4AJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="),r=new Audio("data:audio/mpeg;base64,SUQzAwAAAAAAFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+7TAAAAUZUkP1MeAA/ZA67cfMAOqlnMRESpqmSYhgmA9cAgSCYeNMGDmnZmrKhCzrhKyY/yDiZo9TlvHrLmzD4ByCwGGAQAJg/IrGz7gPFe/vinve+Yb+PInDQUEE5EMZKXfv9wEPV8fEB5Sn9IFMsavc2A0zrc4DyJm795E1m+/7vIms3////97797//3venzfeKUu8eavvFKZeRNZ9IFMvIjlAhdw//WGFh+n/EZ8oCHy75d4P7Ox1JkoBEIkkhFotGIrsW86ScoglqFksIcLQpB2mGeZmk6ISJ0JzIwiQrxFg1cThgRQnRoIieRGIth4qRBMQEDbC6Q4XdBFNMkAuAGRNifAAGHyhqkWpC9PKZXDVBUNw+QU0WwLXQ+EFghdv7BcILAREMBi3gdUg2LDbwsyGqQ5ADGYcwGzybd8tg3eLOE4CeAAABggLhAy0YALgBMoEQBicBYYyVvp4aoLQYkIiQcxNy4TYhcZ0QRMQ+UYwqjPC3kVFt0Lf4sZPm8gAhQZAZNI0EpkHNxCInVkNJoiw1RjiDEWY2V/////0EGQQQT63bf7f/uTKRUb0kSTfFQi0BLEAAAXBAACQVFOmE1A1E0EzKqUSiccstH8ZBPRzuxYE6Pp6Rgoy6E5NlNCwnSSKA3xglrL+tTi68XFYLAEDQHDcpaJYl1LGqXkVvINO45S848z6XOTAbLmfsqZdGX3VtUBW+1EEkVymM+MeZCz5r0ol1yVSymTwjjWC6SjRUNB8HQqSdYNH52X/+7TAQAAdiXdL+PwAAw0vJfee8AEwa3ZtpZLqN+qrBHeykDOuNUg53S8yYTPnLkT9UH00AUtPda2zyKOArp4XaL3LVdmD3IpKeM09JegK/9+npqX6Kjv0z6Nkfijg24+3tyZdKn1pG7Rm9GflL6xqmpvuU1ylpbtz7t29TX7yotquJKSJKJJKcZPyaHQHUAvFjiq1WwWp/WaeSM3SMJun4hTNGxBbky6VKuV0hzKWiFH83rlQNJBVlPSrksLScLtcFyeop/HMk5VclTKsbqNfJ3DUhyJqtlQMaMxRpT9nbx6UJejBLRz79x05KHUVcrNmW7VDXSFGEUyqP5jerotw/lckxbk3EV0rDElYX7Aq2XUFFMbKnobcly4C1QD+Ub5bVLKfpolxaHbNKrW7Ku3Mh01ma1p4ma4npu0KNX31b+8WsHXA/2mu7qVBUIQBg7DYAwpMI5auta+s46dJ0RldlEDYah/EUvK3fdMg6FYwA8PJ4feth7lxykf5hRKcPIlJgFqLiXZD3OkrxmYad8fx6qBCmGaFO9uywr6gti0cq+sKKDTds0iwr1tuK+YWtwZoMR9BpbFs6tnVq5puts6/+N1hXijSqLHIn6KY76gkTOKO/v/3dyX/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7TAfYA0vR0ZJjHtiAAAJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7TAwAA/8AEuAAAAIK4AJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");return c.createElement("button",{onClick:()=>{A?t.play():r.play(),e(!A)},className:p("group relative flex items-center justify-center w-12 h-6 rounded-full focus:outline-none","bg-gray-500 dark:bg-gray-700")},c.createElement("div",{className:p("absolute left-0 h-6 w-6 rounded-full border-2 group-focus:ring-2","transform transition-transform",A?"translate-x-6":"translate-x-0","bg-gray-200 group-hover:bg-gray-300 border-gray-500 ring-blue-400","dark:border-gray-700 dark:ring-blue-500")}),c.createElement("span",{className:"text-md mt-px"},"☀️🌛"))}new(0,window.AudioContext);const T=g(Array(9).fill(null).map(((A,e)=>e.toString()))),q=g(Object.fromEntries(Array(9).fill(null).map(((A,e)=>[e.toString(),null])))),I=g((A=>{const e=A(q);return A(T).map((A=>e[A]))})),B=A=>g((e=>e(q)[A||""])),H=g(null,((A,e,t)=>{const r=A(T),n=A(q),a=r.find((A=>null===n[A]));void 0!==a&&e(q,s(o({},n),{[a]:t}))})),J=g(null,((A,e,{active:t,over:r})=>{if(!r)return;if(t.id===r.id)return;const n=A(T),a=n.findIndex((A=>A===t.id)),l=n.findIndex((A=>A===r.id)),o=n.slice();o[a]=r.id,o[l]=t.id,e(T,o)})),V=g(null,((A,e,t)=>{e(q,s(o({},A(q)),{[t]:null}))}));async function P(){const A=await fetch("https://1pd7ps5dmd.execute-api.ap-southeast-2.amazonaws.com/default/spotifyAuth"),{access_token:e,token_type:t,expires_in:r}=await A.json();return{token:`${t} ${e}`,expiresAt:Date.now()+1e3*(r-100)}}const O=g(""),Y=g(0),W=g((async A=>{const e=A(O),t=A(Q);if(e)return X(t,e)})),X=function(A,e){let t;return(...r)=>(clearTimeout(t),new Promise((n=>{t=setTimeout((()=>n(A(...r))),e)})))}((async(A,e)=>await async function(A,e){if(!e)return[];A.token||(A=await P());const t=await fetch(`https://api.spotify.com/v1/search?type=album&limit=5&q=${e}`,{headers:{Authorization:A.token}}),{albums:r}=await t.json();return r.items}(A,e)),300),G=g(null,((A,e)=>{e(O,""),e(Y,0)})),$=g(null,((A,e,t)=>{e(O,t.target.value),e(Y,0)})),_=g(null,((A,e)=>{e(O,""),e(Y,0)})),AA=g(null,(async(A,e,t)=>{const r=A(Y),n=await A(W,!0),a=()=>{e(O,""),e(Y,0)};switch(t.key){case"ArrowUp":t.preventDefault(),n&&e(Y,r<=0?n.length-1:r-1);break;case"ArrowDown":t.preventDefault(),n&&e(Y,r>=n.length-1?0:r+1);break;case"Enter":if(t.preventDefault(),!n)return;e(H,n[r]),a();break;case"Escape":t.preventDefault(),a()}})),eA=g(null,((A,e,t)=>{e(H,t),e(O,""),e(Y,0)}));function tA(A){return m.exports.createElement("svg",o({viewBox:"0 0 16 16"},A),m.exports.createElement("path",{d:"M4.99 13v-3H15V3h-2v5H4.99V5L1 9l3.99 4z"}))}function rA(A){return m.exports.createElement("svg",o({viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},A),m.exports.createElement("path",{fillRule:"evenodd",d:"M9.476 10.89a6 6 0 111.414-1.414l4.845 4.845-1.414 1.414-4.845-4.844zM9.818 6a3.818 3.818 0 11-7.636 0 3.818 3.818 0 017.636 0z"}))}function nA(A){return m.exports.createElement("svg",o({viewBox:"0 0 16 16"},A),m.exports.createElement("path",{d:"M11.536 12.95L8 9.414 4.465 12.95 3.05 11.536 6.586 8 3.05 4.465 4.465 3.05 8 6.586l3.536-3.536 1.414 1.415L9.414 8l3.536 3.536-1.414 1.414z"}))}function aA(A){return m.exports.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},A),m.exports.createElement("circle",{style:{opacity:"25%"},cx:12,cy:12,r:10,stroke:"currentColor",strokeWidth:4}),m.exports.createElement("path",{style:{opacity:"75%"},fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))}function lA(){const A=f(AA),e=f(G),t=m.exports.useRef(null),r=function(A,...e){const t=m.exports.useRef(null);return m.exports.useEffect((()=>{const r=r=>{t.current&&![t,...e].some((A=>{var e;return null==(e=A.current)?void 0:e.contains(r.target)}))&&A(r)};return document.addEventListener("mousedown",r),document.addEventListener("mouseup",r),document.addEventListener("touchstart",r),document.addEventListener("touchend",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("mouseup",r),document.removeEventListener("touchstart",r),document.removeEventListener("touchend",r)}}),[t,A,e]),t}(e,t);return c.createElement("div",{className:"w-full max-w-sm",onKeyDown:A},c.createElement(oA,{inputRef:t}),c.createElement(m.exports.Suspense,{fallback:c.createElement(iA,null,c.createElement("li",{className:"flex items-center justify-center h-12"},c.createElement(aA,{className:"animate-spin h-5 w-5 text-gray-500"})))},c.createElement(sA,{resultsRef:r})))}function oA({inputRef:A}){const e=h(O),t=f($),r=f(_);return c.createElement("div",{className:"relative group"},c.createElement("input",{ref:A,autoCorrect:"off",spellCheck:"false",placeholder:"Search",value:e,onChange:t,className:p("w-full border-2 rounded-lg px-4 py-2 focus:outline-none","bg-purple-100 text-gray-900/90 placeholder-purple-900/50 border-purple-100 caret-purple-600/90","dark:bg-gray-700 dark:text-gray-50 dark:placeholder-purple-200/70 dark:border-gray-700 dark:caret-purple-200/90","hover:border-purple-200 focus:border-purple-200 focus:bg-white","dark:hover:border-gray-500 dark:focus:border-gray-400/30 dark:focus:bg-gray-900",!!e&&"rounded-b-none bg-white border-purple-100 outline-none")}),e?c.createElement("div",{className:"absolute inset-y-0 right-0 rounded-r-lg overflow-hidden py-[2px]"},c.createElement("button",{onClick:r,className:"group h-full w-10 flex items-center justify-center text-purple-600/60 hover:text-purple-600 dark:text-gray-400 dark:hover:text-gray-100"},c.createElement(nA,{className:"w-4 h-4 fill-current"}))):c.createElement("div",{className:"absolute inset-y-0 right-0 flex items-center pointer-events-none"},c.createElement(rA,{className:p("w-4 h-4 fill-current mr-4","text-gray-400 group-hover:text-purple-500/80 group-focus-within:text-purple-500/80","dark:text-gray-500 group-hover:text-purple-400 group-focus-within:text-purple-400")})))}function sA({resultsRef:A}){const e=h(Y),t=h(W),r=f(eA);return(null==t?void 0:t.length)?c.createElement(iA,{ref:A},t.map(((A,t)=>c.createElement(cA,{key:A.id,isHighlighted:t===e,album:A,onClick:()=>r(A)})))):null}const iA=m.exports.forwardRef((function(A,e){return c.createElement("ul",{ref:e,className:p("absolute z-20 w-[calc(100%-32px)] max-w-sm shadow-xl overflow-auto","rounded-b-lg border-2 border-t-0 divide-y-2","bg-white text-gray-900 border-purple-200 divide-purple-200","dark:bg-gray-900 dark:text-white dark:border-gray-400/30 dark:divide-gray-400/30")},A.children)}));function cA(A){var e=A,{album:t,isHighlighted:r}=e,n=i(e,["album","isHighlighted"]);return c.createElement("li",null,c.createElement("button",o({className:p("group relative w-full flex items-center justify-between px-2 py-1.5","hover:bg-purple-100 dark:hover:bg-gray-700 overflow-hidden",r&&"bg-purple-100 dark:bg-gray-700")},n),c.createElement("div",{className:"relative w-full flex items-center space-x-2 overflow-hidden"},c.createElement("img",{src:t.images[2].url,className:"w-10 h-10 rounded"}),c.createElement("div",{className:"flex flex-col items-start leading-5"},c.createElement("div",{title:t.name,className:"whitespace-nowrap"},t.name),c.createElement("div",{title:t.artists[0].name,className:"whitespace-nowrap text-gray-900/60 dark:text-purple-200/80"},t.artists[0].name)),!r&&c.createElement("div",{className:"absolute h-full w-4 right-0 bg-gradient-to-l from-white  dark:from-gray-900 group-hover:from-purple-100 dark:group-hover:from-gray-700/30"})),r&&c.createElement("div",{className:"hidden md:flex absolute right-0 h-full items-center pointer-events-none"},c.createElement("div",{className:"w-10 h-full bg-gradient-to-l from-purple-100 dark:from-gray-700"}),c.createElement("div",{className:"h-full flex items-center px-4 bg-purple-100 dark:bg-gray-700"},c.createElement(tA,{className:"w-4 h-4 fill-current text-purple-600/60 dark:text-purple-300/100 flex-shrink-0"})))))}function uA({album:A,onCloseClick:e,className:t}){return c.createElement("div",{className:p("group overflow-hidden bg-purple-50 dark:bg-gray-900 select-none",t)},c.createElement("div",{className:"relative"},e&&c.createElement(dA,{onClick:A=>{A.stopPropagation(),e()}}),c.createElement("img",{style:{WebkitTouchCallout:"none"},src:A.images[1].url,onDragStart:A=>A.preventDefault()})))}function dA(A){var e=i(A,[]);return c.createElement("button",o({className:"invisible group-hover:visible absolute top-0 right-0 p-2 bg-black/30 rounded-bl-lg text-gray-200 hover:text-white focus:outline-none"},e),c.createElement(nA,{className:"w-4 h-4 fill-current"}))}function mA({items:A,onDragEnd:e,children:t}){const[r,n]=m.exports.useState(null),a=v(E(y,{activationConstraint:{distance:15}}),E(b,{activationConstraint:{delay:100,tolerance:5}}),E(C,{coordinateGetter:R})),l=h(m.exports.useMemo((()=>B(r)),[r]));return c.createElement(w,{sensors:a,collisionDetection:x,modifiers:[k],onDragStart:A=>n(A.active.id),onDragEnd:A=>{e(A),n(null)},onDragCancel:()=>n(null)},c.createElement(N,{items:A,strategy:M},t),L.exports.createPortal(c.createElement(D,{adjustScale:!0,zIndex:10},l&&c.createElement(uA,{album:l,className:"shadow-xl ring-4 ring-purple-400 dark:ring-purple-400 opacity-100"})),document.body))}function pA(A){var e=A,{id:t,dragClassNames:r,children:n}=e,a=i(e,["id","dragClassNames","children"]);const{attributes:l,listeners:u,setNodeRef:d,transform:m,transition:g,isDragging:f}=K({id:t,animateLayoutChanges:()=>!1}),h={transform:S.Transform.toString(m),transition:g||void 0};return c.createElement("li",s(o(o(s(o({},a),{ref:d,style:o({},h)}),l),u),{className:p(a.className,f&&r)}),n)}function gA({exportRef:A}){const e=h(T),t=f(J);return c.createElement("div",{className:"m-0"},c.createElement("div",{ref:A},c.createElement(mA,{items:e,onDragEnd:t},c.createElement("ul",{className:"grid grid-cols-3 grid-rows-3 bg-gray-50 dark:bg-gray-900 select-none",style:{lineHeight:0,width:"90vw",height:"90vw",maxWidth:576,maxHeight:576}},e.map((A=>c.createElement(fA,{key:A,id:A})))))))}function fA({id:A}){const e=h(m.exports.useMemo((()=>B(A)),[A])),t=f(V);return c.createElement(pA,{key:A,id:A,className:"inline-flex overflow-hidden cursor-default focus:outline-none md:focus:ring focus:relative focus:z-10 ring-purple-300 dark:ring-purple-500",dragClassNames:"opacity-30 focus:ring-0"},e?c.createElement(uA,{album:e,onCloseClick:()=>t(A)}):c.createElement("div",{className:"group flex flex-1 p-2 bg-gray-50 dark:bg-gray-900"},c.createElement("div",{className:"flex-1 rounded-lg border-2 border-dashed border-purple-600/50 group-hover:border-purple-600/90 dark:border-purple-400/60 dark:group-hover:border-purple-400/90"})))}function hA(A){return new Promise((e=>{if(!A)return e(null);const t=new Image;t.onload=()=>{e(t)},t.src=A,t.crossOrigin="anonymous"}))}function vA({exportRef:A}){const e=h(I).map((A=>null==A?void 0:A.images[0].url));return c.createElement("button",{onClick:async()=>{A.current&&async function(A,e,t){const r=document.createElement("canvas");r.width=640*t,r.height=640*e;const n=r.getContext("2d");if(!n)return;(await Promise.all(A.map(hA))).forEach(((A,r)=>{A&&n.drawImage(A,r%t*640,Math.floor(r/3)%e*640,640,640)}));const a=document.createElement("a");a.href=r.toDataURL("image/png;base64;"),a.setAttribute("download","chart"),a.click()}(e,3,3)},className:p("px-2 py-1 rounded font-work text-lg focus:outline-none focus:ring","hover:shadow-md active:shadow-inner","bg-stripes-light text-purple-900/80  ring-purple-400","dark:bg-stripes-dark dark:text-purple-100/80 dark:hover:text-purple-100 dark:ring-purple-600")},"Download")}function EA(){!function(){const[A,e]=d(Q);m.exports.useEffect((()=>{A.token&&A.expiresAt>Date.now()||async function A(){const t=await P();e(t),setTimeout(A,t.expiresAt-Date.now())}()}),[A.expiresAt,A.token,e])}(),U();const A=m.exports.useRef(null);return c.createElement("div",{className:"relative font-nunito flex flex-col space-y-10 items-center px-4 py-10 text-gray-900 selection:bg-pink-100 dark:selection:bg-pink-200/80 selection:text-purple-900"},c.createElement(z,null,"Music List"),c.createElement(lA,null),c.createElement(gA,{exportRef:A}),c.createElement(vA,{exportRef:A}),c.createElement("div",{className:"absolute bottom-4 right-4"},c.createElement(Z,null)))}F.render(c.createElement(c.StrictMode,null,c.createElement(EA,null)),document.getElementById("root"));
