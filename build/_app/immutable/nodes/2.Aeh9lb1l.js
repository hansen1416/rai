import{t as n,a as p}from"../chunks/DJ2UrDb2.js";import"../chunks/Q0CP5IRQ.js";import{N as f,g as c,h as d,b as _,f as v,d as h,r as g,n as m}from"../chunks/DZ3MYY1K.js";import{b as u}from"../chunks/C4BmQePq.js";const N=Symbol("is custom element"),S=Symbol("is html");function E(t,r,s,o){var a=M(t);d&&(a[r]=t.getAttribute(r),t.nodeName==="LINK")||a[r]!==(a[r]=s)&&(s==null?t.removeAttribute(r):typeof s!="string"&&b(t).includes(r)?t[r]=s:t.setAttribute(r,s))}function M(t){return t.__attributes??(t.__attributes={[N]:t.nodeName.includes("-"),[S]:t.namespaceURI===f})}var e=new Map;function b(t){var r=e.get(t.nodeName);if(r)return r;e.set(t.nodeName,r=[]);for(var s,o=t,a=Element.prototype;a!==o;){s=_(o);for(var i in s)s[i].set&&r.push(i);o=c(o)}return r}var y=n(`<nav><a>Home</a></nav> <h1>Welcome to SvelteKit</h1> <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
	documentation</p>`,1);function w(t){var r=y(),s=v(r),o=h(s);E(o,"href",`${u??""}/`),g(s),m(4),p(t,r)}export{w as component};
