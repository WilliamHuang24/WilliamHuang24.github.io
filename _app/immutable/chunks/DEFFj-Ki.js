import{S as D,Q as G,R as V,T as h,U as z,N as w,V as x,W as v,A as b,r as C,X as H,Y as Q,Z as W,_ as X,$ as J,a0 as Z,a1 as k,x as U,a2 as Y,a3 as A,a4 as $,a5 as ee,a6 as re,a7 as j,a8 as ne,K as ie,a9 as te,aa as se,C as q,ab as ae,ac as fe,ad as ue}from"./CC_zDywQ.js";function I(e,r=null,f){if(typeof e!="object"||e===null||D in e)return e;const u=Q(e);if(u!==G&&u!==V)return e;var t=new Map,o=W(e),P=h(0);o&&t.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&z();var a=t.get(n);return a===void 0?(a=h(i.value),t.set(n,a)):w(a,I(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(v));else{if(o&&typeof n=="string"){var a=t.get("length"),s=Number(n);Number.isInteger(s)&&s<a.v&&w(a,s)}w(i,v),F(P)}return!0},get(l,n,i){var c;if(n===D)return e;var a=t.get(n),s=n in l;if(a===void 0&&(!s||(c=x(l,n))!=null&&c.writable)&&(a=h(I(s?l[n]:v,g)),t.set(n,a)),a!==void 0){var d=b(a);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var a=t.get(n);a&&(i.value=b(a))}else if(i===void 0){var s=t.get(n),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===D)return!0;var i=t.get(n),a=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||C!==null&&(!a||(d=x(l,n))!=null&&d.writable)){i===void 0&&(i=h(a?I(l[n],g):v),t.set(n,i));var s=b(i);if(s===v)return!1}return a},set(l,n,i,a){var R;var s=t.get(n),d=n in l;if(o&&n==="length")for(var c=i;c<s.v;c+=1){var y=t.get(c+"");y!==void 0?w(y,v):c in l&&(y=h(v),t.set(c+"",y))}s===void 0?(!d||(R=x(l,n))!=null&&R.writable)&&(s=h(void 0),w(s,I(i,g)),t.set(n,s)):(d=s.v!==v,w(s,I(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(a,i),!d){if(o&&typeof n=="string"){var O=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=O.v&&w(O,S+1)}F(P)}return!0},ownKeys(l){b(P);var n=Reflect.ownKeys(l).filter(s=>{var d=t.get(s);return d===void 0||d.v!==v});for(var[i,a]of t)a.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){H()}})}function F(e,r=1){w(e,e.v+r)}let N=!1;function le(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=oe({get[r](){return e.props[r]}},r,Z)),e.special[r](f),Y(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),Y(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},de)}const _e={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(A(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let t=e.props[u];A(t)&&(t=t());const o=x(t,r);if(o&&o.set)return o.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(A(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=x(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===D||r===$)return!1;for(let f of e.props)if(A(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){A(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},_e)}function M(e){for(var r=C,f=C;r!==null&&!(r.f&(ee|re));)r=r.parent;try{return j(r),e()}finally{j(f)}}function oe(e,r,f,u){var B;var t=(f&ne)!==0,o=!ie||(f&te)!==0,P=(f&se)!==0,g=(f&fe)!==0,l=!1,n;P?[n,l]=le(()=>e[r]):n=e[r];var i=D in e||$ in e,a=P&&(((B=x(e,r))==null?void 0:B.set)??(i&&r in e&&(_=>e[r]=_)))||void 0,s=u,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?s=U(u):s=u),s);n===void 0&&u!==void 0&&(a&&o&&X(),n=y(),a&&a(n));var p;if(o)p=()=>{var _=e[r];return _===void 0?y():(d=!0,c=!1,_)};else{var O=M(()=>(t?q:ae)(()=>e[r]));O.f|=J,p=()=>{var _=b(O);return _!==void 0&&(s=void 0),_===void 0?s:_}}if(!(f&Z))return p;if(a){var S=e.$$legacy;return function(_,m){return arguments.length>0?((!o||!m||S||l)&&a(m?p():_),_):p()}}var R=!1,K=!1,T=ue(n),E=M(()=>q(()=>{var _=p(),m=b(T);return R?(R=!1,K=!0,m):(K=!1,T.v=_)}));return t||(E.equals=k),function(_,m){if(arguments.length>0){const L=m?b(E):o&&P?I(_):_;return E.equals(L)||(R=!0,w(T,L),c&&s!==void 0&&(s=L),U(()=>b(E))),_}return b(E)}}export{oe as a,ce as l,I as p,pe as s};
