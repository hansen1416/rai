import{p as P,s as O,q as R,t as V,v as k,w as I,x as b,y as C,H as Y,z as j,A as T,B as g,C as A,D as q,o as v,F as B,G as $,I as z,J as F,K as G,L as J,M as K,j as W,O as Q,c as U,h as E,P as X}from"./DZ3MYY1K.js";import{b as Z}from"./DJ2UrDb2.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var N;var e=this,s=e.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],t=i[0]||r.target,u=0,_=r.__root;if(_){var d=i.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=i[u]||r.target,t!==e){P(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=k,o=I;O(null),R(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!=null&&(!t.disabled||r.target===t))if(V(l)){var[H,...M]=l;H.apply(t,[r,...M])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,O(w),R(o)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,e){return L(r,e)}function or(r,e){b(),e.intro=e.intro??!1;const s=e.target,c=E,i=v;try{for(var t=C(s);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw T;g(!0),A(t),q();const u=L(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==B)throw $(),T;return g(!1),u}catch(u){if(u===T)return e.recover===!1&&z(),b(),F(s),g(!1),tr(r,e);throw u}finally{g(c),A(i)}}const p=new Map;function L(r,{target:e,anchor:s,props:c={},events:i,context:t,intro:u=!0}){b();var _=new Set,d=o=>{for(var a=0;a<o.length;a++){var n=o[a];if(!_.has(n)){_.add(n);var f=rr(n);e.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};d(G(er)),D.add(d);var h=void 0,w=J(()=>{var o=s??e.appendChild(K());return W(()=>{if(t){Q({});var a=U;a.c=t}i&&(c.$$events=i),E&&Z(o,null),h=r(o,c)||{},E&&(I.nodes_end=v),t&&X()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}D.delete(d),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function ir(r,e){const s=S.get(r);return s?(S.delete(r),s(e)):Promise.resolve()}export{or as h,tr as m,nr as s,ir as u};
