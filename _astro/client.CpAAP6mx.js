import{d as v,r as o}from"./index.BJs6S9uu.js";var h,N,p=v;N=p.createRoot,h=p.hydrateRoot;const c=({value:t,name:r,hydrate:e=!0})=>{if(!t)return null;const a=e?"astro-slot":"astro-static-slot";return o.createElement(a,{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};c.shouldComponentUpdate=()=>!1;function O(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}function A(t){let r={};for(const e of t.attributes)r[e.name]=e.value;return t.firstChild===null?o.createElement(t.localName,r):o.createElement(t.localName,r,Array.from(t.childNodes).map(e=>e.nodeType===Node.TEXT_NODE?e.data:e.nodeType===Node.ELEMENT_NODE?A(e):void 0).filter(e=>!!e))}function R(t,r){if(r&&t){let e=[],a=document.createElement("template");a.innerHTML=t;for(let i of a.content.children)e.push(A(i));return e}else return t?o.createElement(c,{value:t}):void 0}let m=new WeakMap;const y=(t,r)=>{let e=m.get(t);return e||(e=r(),m.set(t,e)),e},_=t=>(r,e,{default:a,...i},{client:T})=>{if(!t.hasAttribute("ssr"))return;const d=t.getAttribute("data-action-key"),f=t.getAttribute("data-action-name"),l=t.getAttribute("data-action-result"),b=d&&f&&l?[JSON.parse(l),d,f]:void 0,g={identifierPrefix:t.getAttribute("prefix"),formState:b};for(const[s,n]of Object.entries(i))e[s]=o.createElement(c,{value:n,name:s});const u=o.createElement(r,e,R(a,t.hasAttribute("data-react-children"))),E=O(t);if(E&&delete t[E],T==="only")return o.startTransition(()=>{y(t,()=>{const n=N(t);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(u)});o.startTransition(()=>{y(t,()=>{const n=h(t,u,g);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(u)})};export{_ as default};
