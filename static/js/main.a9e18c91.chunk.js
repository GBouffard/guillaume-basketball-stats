(this["webpackJsonpguillaume-basketball-stats"]=this["webpackJsonpguillaume-basketball-stats"]||[]).push([[0],{10:function(e,s,t){},12:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t.n(n),i=t(3),c=t.n(i),r=(t(9),t(4)),l=(t(10),"/guillaume-basketball-stats"),d={boubou:"".concat(l,"/images/Boubou.jpg"),flag:"".concat(l,"/images/France.png")},j=t(0),o=Object(j.jsx)("img",{alt:"Boubou",className:"french-flag",src:d.flag}),u=function(){return Object(j.jsxs)("div",{className:"app-grid__player-box",children:[Object(j.jsx)("img",{alt:"Boubou",className:"boubou-image",src:d.boubou}),Object(j.jsxs)("div",{className:"player-info",children:[Object(j.jsxs)("div",{children:["Name: ",Object(j.jsx)("strong",{children:"BOUFFARD Guillaume"})]}),Object(j.jsxs)("div",{children:["D.O.B: ",Object(j.jsx)("strong",{children:"09/04/1980"})]}),Object(j.jsxs)("div",{children:["Height: ",Object(j.jsx)("strong",{children:"169cm"})]}),Object(j.jsxs)("div",{children:["Weight: ",Object(j.jsx)("strong",{children:"63 Kgs"})]}),Object(j.jsxs)("div",{className:"nationality",children:["Nationality: ",o]}),Object(j.jsxs)("div",{children:["Position: ",Object(j.jsx)("strong",{children:"Point Guard"})]})]})]})},b=function(e){var s,t=e.onChange,n=e.value,a=e.seasonsList;return Object(j.jsx)("select",{onChange:t,value:n,defaultValue:a[a.length-1],children:(s=a,s.map((function(e,s){return Object(j.jsx)("option",{value:e,children:e},s)})))})},g=function(e){var s=e.seasonStats.points.length;return Object(j.jsx)("div",{className:"app-grid__games-counter",children:"".concat(s," games")})},h=function(e){e.seasonStats;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"app-grid__points header",children:"POINTS"}),Object(j.jsx)("div",{className:"app-grid__rebounds header",children:"REBOUNDS"}),Object(j.jsx)("div",{className:"app-grid__assists header",children:"ASSISTS"})]})},O=function(e){var s=e.seasonStats;return Object(j.jsx)("div",{className:"app-grid__games-table",children:s.points.map((function(e,t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"app-grid__points",children:s.points[t]}),Object(j.jsx)("div",{className:"app-grid__rebounds",children:s.rebounds?s.rebounds[t]:"-"}),Object(j.jsx)("div",{className:"app-grid__assists",children:s.assists?s.assists[t]:"-"})]})}))})},p=function(e){return e.reduce((function(e,s){return"-"!==s?e+s:e}),0)},x=function(e){return e?p(e):"-"},v=function(e){return e?(p(e)/function(e){var s;return s=e.filter((function(e){return"-"===e})).length,e.length-s}(e)).toFixed(2):"-"},m=function(e){var s=e.seasonStats;return Object(j.jsxs)("div",{className:"app-grid__header",children:[Object(j.jsx)("div",{className:"app-grid__totals-and-average",children:"TOTALS & AVERAGE"}),Object(j.jsxs)("div",{className:"app-grid__totals",children:[Object(j.jsx)("div",{children:x(s.points)}),Object(j.jsx)("div",{children:x(s.rebounds)}),Object(j.jsx)("div",{children:x(s.assists)})]}),Object(j.jsxs)("div",{className:"app-grid__average",children:[Object(j.jsx)("div",{children:v(s.points)}),Object(j.jsx)("div",{children:v(s.rebounds)}),Object(j.jsx)("div",{children:v(s.assists)})]})]})},f={"2020-2021":{points:[8,4,10,34,7],rebounds:null,assists:null},"2021-2022":{points:[19,9,9,18,25,9,8,8,10,15,14,18,20,4],rebounds:["-","-","-",1,7,5,5,6,4,3,9,8,5,4],assists:["-","-",6,5,13,7,5,9,8,4,9,4,5,8]}},_=Object.keys(f),N=function(){var e=Object(n.useState)(_[_.length-1]),s=Object(r.a)(e,2),t=s[0],a=s[1],i=f[t];return Object(j.jsxs)("div",{className:"app-grid",children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{onChange:function(e){a(e.target.value)},value:t,seasonsList:_}),Object(j.jsx)(g,{seasonStats:i}),Object(j.jsx)(h,{seasonStats:i}),Object(j.jsx)(O,{seasonStats:i}),Object(j.jsx)(m,{seasonStats:i})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),S()},9:function(e,s,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.a9e18c91.chunk.js.map