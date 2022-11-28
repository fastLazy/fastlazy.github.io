"use strict";(self.webpackChunkfastlazy_github_io=self.webpackChunkfastlazy_github_io||[]).push([[904],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,y=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(4250),a=(n(9496),n(9613));const o={},i="other",c={unversionedId:"npm/other",id:"npm/other",title:"other",description:"",source:"@site/docs/npm/other.md",sourceDirName:"npm",slug:"/npm/other",permalink:"/docs/npm/other",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"npm",previous:{title:"package",permalink:"/docs/npm/package"}},p={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"other"},"other"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u83b7\u53d6\u65e5\u671f\u533a\u95f4\u6570\u7ec4\n * @param start\n * @param end\n */\nexport function getAllDate(start, end) {\n  const result: string[] = [];\n  const startTime: any = new Date(start);\n  const endTime: any = new Date(end);\n  while (endTime - startTime >= 0) {\n    const year = startTime.getFullYear();\n    let month: string | number = startTime.getMonth() + 1;\n    if (month < 9) {\n      month = `0${month}`;\n    }\n    const day = startTime.getDate().toString().length == 1 ? `0${startTime.getDate()}` : startTime.getDate();\n    result.push(`${year}-${month}-${day}`);\n    startTime.setDate(startTime.getDate() + 1);\n  }\n  return result;\n}\n")))}u.isMDXComponent=!0}}]);