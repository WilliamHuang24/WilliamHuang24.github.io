import{ae as j,Y as C,q as h,af as I,ag as V}from"./CC_zDywQ.js";import{f as q,g as B,e as E,j as M,n as Y,k as z,m as D}from"./DCWuKN7w.js";function N(s){var r,t,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var o=s.length;for(r=0;r<o;r++)s[r]&&(t=N(s[r]))&&(i&&(i+=" "),i+=t)}else for(t in s)s[t]&&(i&&(i+=" "),i+=t);return i}function G(){for(var s,r,t=0,i="",o=arguments.length;t<o;t++)(s=arguments[t])&&(r=N(s))&&(i&&(i+=" "),i+=r);return i}function K(s){return typeof s=="object"?G(s):s??""}function H(s){if(h){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;n(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var o=s.checked;n(s,"checked",null),s.checked=o}}};s.__on_r=t,V(t),z()}}function P(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function n(s,r,t,i){var o=s.__attributes??(s.__attributes={});h&&(o[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||o[r]!==(o[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[j]=t),t==null?s.removeAttribute(r):typeof t!="string"&&$(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function J(s,r,t,i,o=!1,v=!1,R=!1){var c=r||{},y=s.tagName==="OPTION";for(var g in r)g in t||(t[g]=null);t.class&&(t.class=K(t.class));var w=$(s),L=s.__attributes??(s.__attributes={});for(const f in t){let e=t[f];if(y&&f==="value"&&e==null){s.value=s.__value="",c[f]=e;continue}var p=c[f];if(e!==p){c[f]=e;var A=f[0]+f[1];if(A!=="$$"){if(A==="on"){const u={},_="$$"+f;let l=f.slice(2);var d=D(l);if(q(l)&&(l=l.slice(0,-7),u.capture=!0),!d&&p){if(e!=null)continue;s.removeEventListener(l,c[_],u),c[_]=null}if(e!=null)if(d)s[`__${l}`]=e,E([l]);else{let O=function(T){c[f].call(this,T)};c[_]=B(l,s,O,u)}else d&&(s[`__${l}`]=void 0)}else if(f==="style"&&e!=null)s.style.cssText=e+"";else if(f==="autofocus")M(s,!!e);else if(f==="__value"||f==="value"&&e!=null)s.value=s[f]=s.__value=e;else if(f==="selected"&&y)P(s,e);else{var a=f;o||(a=Y(a));var k=a==="defaultValue"||a==="defaultChecked";if(e==null&&!v&&!k)if(L[f]=null,a==="value"||a==="checked"){let u=s;if(a==="value"){let _=u.defaultValue;u.removeAttribute(a),u.defaultValue=_}else{let _=u.defaultChecked;u.removeAttribute(a),u.defaultChecked=_}}else s.removeAttribute(f);else k||w.includes(a)&&(v||typeof e!="string")?s[a]=e:typeof e!="function"&&(h&&(a==="src"||a==="href"||a==="srcset")||n(s,a,e))}f==="style"&&"__styles"in s&&(s.__styles={})}}}return c}var b=new Map;function $(s){var r=b.get(s.nodeName);if(r)return r;b.set(s.nodeName,r=[]);for(var t,i=s,o=Element.prototype;o!==i;){t=I(i);for(var v in t)t[v].set&&r.push(v);i=C(i)}return r}export{J as a,H as r,n as s};
