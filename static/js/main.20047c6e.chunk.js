(this["webpackJsonpcorona-chart"]=this["webpackJsonpcorona-chart"]||[]).push([[0],{199:function(e,n,t){"use strict";t.r(n);var r,a,c,o,i,s,d,l,h,b,j,x,f,p=t(0),u=t.n(p),O=t(72),g=t.n(O),m=t(4),v=t(21),y=t(2),k={bgColor:"#19CE60",SecondBg:"#F2ECEE",GraphBar:"#34495e",Confirm:"#FF6384",Recover:"#36A2EB",Death:"#2c3e50"},w=t(1),C=y.d.div(r||(r=Object(m.a)(["\n  background-color: ",";\n"])),k.bgColor),N=y.d.nav(a||(a=Object(m.a)(["\n  padding: 20px 15% 20px 15%;\n  background-color: ",";\n  display: flex;\n  align-items: flex-end;\n"])),k.bgColor),B=y.d.h1(c||(c=Object(m.a)(["\n  font-size: 50px;\n  font-weight: 800;\n  color: white;\n"]))),S=y.d.span(o||(o=Object(m.a)(["\n  font-size: 15px;\n  font-weight: 800;\n  color: white;\n  padding-left: 30px;\n"]))),D=function(){return Object(w.jsx)(C,{children:Object(w.jsxs)(N,{children:[Object(w.jsx)(B,{children:"Covid-19"}),Object(w.jsx)(v.b,{to:"/corona-chart",children:Object(w.jsx)(S,{children:"\ud655\uc9c4\uc790\ud604\ud669"})}),Object(w.jsx)(v.b,{to:"/table",children:Object(w.jsx)(S,{children:"\ucf54\ub85c\ub098\ubc31\uc2e0\uc13c\ud130"})})]})})},E=t(3),z=t(16),R=t.n(z),T=t(29),F=t(12),L=t(46),M=t(31),P=t.n(M);function A(){return Object(w.jsx)("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsx)("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})}var U,G,I=y.d.div(i||(i=Object(m.a)(["\n  padding: 20px 15% 20px 15%;\n"]))),J=y.d.h1(s||(s=Object(m.a)(["\n  font-size: 30px;\n  font-weight: 600;\n  display: block;\n  margin-bottom: 20px;\n  margin-top: 30px;\n"]))),H=y.d.div(d||(d=Object(m.a)(["\n  width: 100%;\n"]))),K=y.d.div(l||(l=Object(m.a)(["\n  margin: 40px 0 40px 0;\n  padding: 0 20% 0 20%;\n"]))),W=y.d.div(h||(h=Object(m.a)(["\n  margin: 30px 0 30px;\n  font-size: 20px;\n  font-weight: 800;\n  display: grid;\n  grid-template: 1fr / repeat(3, 1fr);\n"]))),Y=y.d.div.attrs({className:"flex-box"})(b||(b=Object(m.a)(["\n  color: ",";\n"])),k.Confirm),q=y.d.div.attrs({className:"flex-box"})(j||(j=Object(m.a)(["\n  color: ",";\n"])),k.Recover),Q=y.d.div.attrs({className:"flex-box"})(x||(x=Object(m.a)(["\n  color: ",";\n"])),k.Death),V=y.d.div.attrs({className:"flex-box"})(f||(f=Object(m.a)([""]))),X="2020 ~ 2021 \ub144\ub3c4 \ud655\uc9c4\uc790 \uc218",Z="/kr",$=P.a.create({baseURL:"https://api.covid19api.com/dayone/country/"}),_=function(e){var n=Object(p.useState)({}),t=Object(F.a)(n,2),r=t[0],a=t[1],c=Object(p.useState)({}),o=Object(F.a)(c,2),i=o[0],s=o[1],d=Object(p.useState)(""),l=Object(F.a)(d,2),h=l[0],b=l[1],j=Object(p.useState)(!1),x=Object(F.a)(j,2),f=x[0],u=x[1];return Object(p.useEffect)((function(){Object(T.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,$.get(Z).then((function(e){var n=e.data.map((function(e){var n=new Date(e.Date);return{year:n.getFullYear(),month:n.getMonth(),date:n.getDate(),active:e.Active,confirmed:e.Confirmed,country:e.Country,deaths:e.Deaths,recovered:e.Recovered}})),t=n.reduce((function(e,n){var t=n.year,r=n.month,a=n.date,c=n.confirmed,o=e.find((function(e){return e.year===t&&e.month===r}));return o||e.push({year:t,month:r,date:a,confirmed:c}),o&&o.date<a&&(o.year=t,o.month=r,o.data=a,o.confirmed=c),e}),[]),r={year:n[n.length-1].year,month:n[n.length-1].month,date:n[n.length-1].date,active:n[n.length-2].active-n[n.length-3].active,confirmed:n[n.length-2].confirmed-n[n.length-3].confirmed,deaths:n[n.length-2].deaths-n[n.length-3].deaths,recovered:n[n.length-2].recovered-n[n.length-3].recovered};a({labels:t.map((function(e){return"".concat(e.year-2e3,"/").concat(e.month+1)})),datasets:[{label:X,data:t.map((function(e){return e.confirmed})),barPercentage:.5,barThickness:25,maxBarThickness:60,minBarLength:2,backgroundColor:k.GraphBar}]}),s({labels:["\ud655\uc9c4\uc790 \uc218","\uaca9\ub9ac\ud574\uc81c \ud658\uc790 \uc218","\uc0ac\ub9dd\uc790 \uc218"],datasets:[{data:[r.confirmed,r.recovered,r.deaths],barPercentage:.5,barThickness:50,maxBarThickness:60,minBarLength:30,backgroundColor:[k.Confirm,k.Recover,k.Death]}]}),b({title:"".concat(r.year,"\ub144 ").concat(r.month+1,"\uc6d4 ").concat(r.date-1,"\uc77c \ud655\uc9c4\uc790 \ud604\ud669"),confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths}),u(!1)})).catch((function(e){return console.error(e)}));case 3:case"end":return e.stop()}}),e)})))()}),[]),Object(w.jsxs)(I,{children:[Object(w.jsx)(J,{children:h.title}),Object(w.jsxs)(W,{children:[Object(w.jsxs)(Y,{children:["\ud655\uc9c4\uc790 \uc218 ",Object(w.jsx)("div",{children:h.confirmed})]}),Object(w.jsxs)(q,{children:["\uaca9\ub9ac\ud574\uc81c\uc790 \uc218 ",Object(w.jsx)("div",{children:h.recovered})]}),Object(w.jsxs)(Q,{children:["\uc0ac\ub9dd\uc790 \uc218 ",Object(w.jsx)("div",{children:h.deaths})]})]}),Object(w.jsxs)(H,{children:[Object(w.jsx)(V,{children:f&&Object(w.jsx)(A,{})}),Object(w.jsx)(K,{children:Object(w.jsx)(L.Doughnut,{data:i})}),Object(w.jsx)(K,{children:Object(w.jsx)(L.Bar,{data:r})})]})]})},ee=t(77),ne=P.a.create({baseURL:"https://api.odcloud.kr/api"}),te=y.d.div(U||(U=Object(m.a)(["\n  margin: 30px 15% 30px 15%;\n"]))),re=y.d.div.attrs({className:"flex-box"})(G||(G=Object(m.a)([""]))),ae=function(){var e=Object(p.useState)([]),n=Object(F.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(!1),c=Object(F.a)(a,2),o=c[0],i=c[1];return Object(p.useEffect)((function(){Object(T.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,ne.get("/15077586/v1/centers?page=1&perPage=10&serviceKey=data-portal-test-key").then((function(e){var n=e.data.data.map((function(e){return{id:e.id,address:e.address,centerType:e.centerType,centerName:e.centerName,facilityName:e.facilityName}}));r(Object(ee.a)(n)),i(!1)})).catch((function(e){return console.error(e)}));case 3:case"end":return e.stop()}}),e)})))()}),[]),Object(w.jsxs)(te,{children:[o&&Object(w.jsx)(re,{children:Object(w.jsx)(A,{})}),Object(w.jsxs)("table",{className:"table table-cart",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{width:"15%",children:"\uc911\uc559 \uad8c\uc5ed"}),Object(w.jsx)("th",{width:"20%",children:"\uc13c\ud130 \uc774\ub984"}),Object(w.jsx)("th",{width:"40%",children:"\uc8fc\uc18c"}),Object(w.jsx)("th",{width:"25%",children:"\uc0c1\uc138 \uc8fc\uc18c"})]})}),Object(w.jsx)("tbody",{children:t.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.centerType}),Object(w.jsx)("td",{children:e.centerName}),Object(w.jsx)("td",{children:e.address}),Object(w.jsx)("td",{children:e.facilityName})]},e.id)}))})]})]})};var ce,oe=function(){return Object(w.jsx)(y.a,{theme:k,children:Object(w.jsxs)(v.a,{children:[Object(w.jsx)(D,{}),Object(w.jsxs)(E.c,{children:[Object(w.jsx)(E.a,{exact:!0,path:"/corona-chart",children:Object(w.jsx)(_,{})}),Object(w.jsx)(E.a,{exact:!0,path:"/table",children:Object(w.jsx)(ae,{})})]})]})})},ie=t(76),se=Object(y.b)(ce||(ce=Object(m.a)(["\n    ",'\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-size:14px;\n    \n        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n    }\n    a{\n        text-decoration:none;\n        color:inherit;\n        cursor: pointer;\n    }\n    ol, ul, li {\n        list-style: none;\n    }\n    img {\n        display: block;\n        width: 100%;\n        height: 100%;\n    }\n    input, button {\n        background-color: transparent;\n    }\n    h1, h2, h3, h4, h5, h6 {\n    font-family:\'Maven Pro\', sans-serif;\n  }\n  .flex-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  \n\n\n.table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n  \n  .table thead {\n    background-color: ',";\n    color: white;\n    border: 1px solid white;\n    border-top: 0;\n  }\n  .table.table-cart thead {\n    background-color: ",";\n  }\n  .table th {\n    padding: 15px;\n  }\n  .table td {\n    padding: 10px;\n  }\n  \n  .table tbody {\n    font-size: 18px;\n    border: 1px solid white;\n  }\n  \n  .table-cart {\n    text-align: center;\n  }\n  .table-cart tbody td:first-child {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    padding-left: 20px;\n  }\n  \n  .table-nutrition tbody td:last-child {\n    text-align: center;\n  }\n  \n  .table tbody tr:nth-child(2n) {\n    background-color: white;\n  }\n  \n  .table tbody tr:nth-child(2n + 1) {\n    background-color: ",";\n  }\n  \n  .th-product {\n    text-align: left;\n    padding-left: 25px;\n  }\n  \n  .cart-highlight {\n    background-color: ",";\n    color: white;\n  }\n\n\n  .spinner {\n    animation: rotator 1.4s linear infinite;\n  }\n  \n  @keyframes rotator {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(270deg);\n    }\n  }\n  .path {\n    stroke-dasharray: 187;\n    stroke-dashoffset: 0;\n    transform-origin: center;\n    animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;\n  }\n  \n  @keyframes colors {\n    0% {\n      stroke: #4285f4;\n    }\n    25% {\n      stroke: #de3e35;\n    }\n    50% {\n      stroke: #f7c223;\n    }\n    75% {\n      stroke: #1b9a59;\n    }\n    100% {\n      stroke: #4285f4;\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dashoffset: 187;\n    }\n    50% {\n      stroke-dashoffset: 46.75;\n      transform: rotate(135deg);\n    }\n    100% {\n      stroke-dashoffset: 187;\n      transform: rotate(450deg);\n    }\n  \n"])),ie.a,k.bgColor,k.bgColor,k.SecondBg,k.bgColor);g.a.render(Object(w.jsxs)(u.a.StrictMode,{children:[Object(w.jsx)(se,{}),Object(w.jsx)(oe,{})]}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.20047c6e.chunk.js.map