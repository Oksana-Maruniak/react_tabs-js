(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),b=n.n(s),o=n(0),r=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,i=e.find((function(t){return t.id===n}))||e[0],a=function(t){return function(){t.id!==i.id&&c(t)}};return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)("li",{className:b()({"is-active":i.id===t.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{onClick:a(t),href:"#".concat(t.id),"data-cy":"TabLink",children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:i.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(d.useState)(l[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1],i=l.find((function(t){return t.id===n}))||l[0];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(l.find((function(t){return t.id===i.id})).title)}),Object(o.jsx)(r,{tabs:l,selectedTabId:n,onTabSelected:function(t){c(t.id)}})]})};i.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.16af6572.chunk.js.map