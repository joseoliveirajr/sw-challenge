(this["webpackJsonpnatahouse-challenge"]=this["webpackJsonpnatahouse-challenge"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),s=n.n(c),r=n(7),i=n.n(r),o=(n(26),n(8)),l=(n(27),n(28),n(20)),j=n(9),u=n(16),h=n(12),d=n(18),b=n(17);var p=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),i=Object(o.a)(r,2),p=i[0],O=i[1],f=Object(c.useState)({}),m=Object(o.a)(f,2),x=m[0],g=m[1],v=Object(c.useState)([]),y=Object(o.a)(v,2),k=y[0],C=y[1];Object(c.useEffect)((function(){fetch("https://swapi.dev/api/starships/").then((function(e){return e.json()})).then((function(e){g(e.results),O(!1)}))}),[]);var F=function(){var e=[];x.forEach((function(t){var a=function(e){var t=e.split(" "),n=Object(o.a)(t,2),a=n[0],c=n[1],s=parseFloat(a);return c.includes("year")?8760*s:c.includes("month")?720*s:c.includes("week")?168*s:c.includes("day")?24*s:void 0}(t.consumables),c=parseFloat(t.MGLT)*a;e.push({name:t.name,stops:Math.floor(n/c)})})),C(e)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d.a,{bg:"dark",variant:"dark",children:Object(a.jsx)(d.a.Brand,{href:"\\",children:"nata.house Challenge"})}),p?Object(a.jsx)(u.a,{className:"content",children:Object(a.jsx)("p",{children:"Loading..."})}):Object(a.jsxs)(u.a,{className:"content",children:[Object(a.jsx)(b.a,{children:Object(a.jsxs)(j.a,{md:12,style:{paddingBottom:"30px"},children:[Object(a.jsxs)(h.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(h.a.Label,{children:"Distance:"}),Object(a.jsx)(h.a.Control,{type:"number",onChange:function(e){return s(parseFloat(e.target.value))},onKeyPress:function(e){"Enter"===e.key&&F()}})]}),Object(a.jsx)(l.a,{variant:"primary",onClick:F,children:"Apply"})]})}),Object(a.jsx)(b.a,{children:Object(a.jsx)(j.a,{children:k.map((function(e,t){return Object(a.jsxs)("p",{children:[e.name,": ",e.stops]},e.name)}))})})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),O()}},[[32,1,2]]]);
//# sourceMappingURL=main.24744e9e.chunk.js.map