(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6444)}])},6444:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return S},default:function(){return O}});var t=r(5893),i=r(7294),s=r(3295),a=r.n(s),c=function(e){switch(e){case"normal":return"#A8A878";case"fighting":return"#C03028";case"flying":return"#A890F0";case"poison":return"#A040A0";case"ground":return"#E0C068";case"rock":return"#B8A038";case"bug":return"#A8B820";case"ghost":return"#705898";case"steel":return"#B8B8D0";case"fire":return"#F08030";case"water":return"#6890F0";case"grass":return"#78C850";case"electric":return"#F8D030";case"psychic":return"#F85888";case"ice":return"#98D8D8";case"dragon":return"#7038F8";case"dark":return"#705848";case"fairy":return"#EE99AC";default:return"black"}},o=function(e){var n=e.types;return(0,t.jsx)("div",{className:a().container,children:n.map((function(e){return(0,t.jsx)("span",{className:a().tag,style:{backgroundColor:c(e)},children:e},e)}))})},u=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"],g=[4,2,1,.5,.25,0],f=["hp","attack","defense","special-attack","special-defense","speed"],l=r(6487),d=r.n(l),h=r(3435),p=r.n(h),y=function(e){switch(e){case 4:return"#0D6E58";case 2:return"#3FB64F";case 1:return"transparent";case.5:return"#DA9A07";case.25:return"#C32B2D";default:return"black"}},_=function(e){return 1===e?"inherit":"white"},m=function(e){return.25===e?"\xbc":.5===e?"\xbd":e},v=function(e){var n=e.effectiveness;return(0,t.jsx)("div",{className:p().tag,style:{backgroundColor:y(n),color:_(n)},children:m(n)})},k=r(4924),x=r(6042),j=r(9396),w=r(797),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,x.Z)({normal:1,fighting:1,flying:1,poison:1,ground:1,rock:1,bug:1,ghost:1,steel:1,fire:1,water:1,grass:1,electric:1,psychic:1,ice:1,dragon:1,dark:1,fairy:1},e)},N={normal:b({fighting:2,ghost:0}),fighting:b({flying:2,rock:.5,bug:.5,psychic:2,dark:.5,fairy:2}),flying:b({fighting:.5,ground:0,rock:2,bug:.5,grass:.5,electric:2,ice:2}),poison:b({fighting:.5,poison:.5,ground:2,bug:.5,grass:.5,psychic:2,fairy:.5}),ground:b({poison:.5,rock:.5,water:2,grass:2,electric:0,ice:2}),rock:b({normal:.5,fighting:2,flying:.5,poison:.5,ground:2,steel:2,fire:.5,water:2,grass:2}),bug:b({fighting:.5,flying:2,ground:.5,rock:2,fire:2,grass:.5}),ghost:b({normal:0,fighting:0,poison:.5,bug:.5,ghost:2,dark:2}),steel:b({normal:.5,fighting:2,flying:.5,poison:0,ground:2,rock:.5,bug:.5,steel:.5,fire:2,grass:.5,psychic:.5,ice:.5,dragon:.5,fairy:0}),fire:b({ground:2,rock:2,bug:.5,steel:.5,fire:.5,water:2,grass:.5,ice:.5,fairy:.5}),water:b({steel:.5,fire:.5,water:.5,grass:2,electric:2,ice:.5}),grass:b({flying:2,poison:2,ground:.5,bug:2,fire:2,water:.5,grass:.5,electric:.5,ice:2}),electric:b({flying:.5,ground:2,steel:.5,electric:.5}),psychic:b({fighting:.5,bug:2,ghost:2,psychic:.5,dark:2}),ice:b({fighting:2,rock:2,steel:2,fire:2,ice:.5}),dragon:b({fire:.5,water:.5,grass:.5,electric:.5,ice:2,dragon:2,fairy:2}),dark:b({fighting:2,bug:2,ghost:.5,psychic:0,dark:.5,fairy:2}),fairy:b({fighting:.5,poison:2,bug:.5,steel:2,dragon:0,dark:.5})},C=function(e,n){return u.reduce((function(r,t){return(0,j.Z)((0,x.Z)({},r),(0,k.Z)({},t,e[t]*n[t]))}),b())},E=function(e){var n=function(e){return e.map((function(e){return N[e]})).reduce(C,b())}(e);return u.reduce((function(e,r){var t=n[r];return(0,j.Z)((0,x.Z)({},e),(0,k.Z)({},t,(0,w.Z)(e[t]||[]).concat([r])))}),{})},A=function(e){var n=e.types,r=E(n);return(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:d().heading,children:"Type effectiveness:"}),g.map((function(e){var n=r[e];return n?(0,t.jsxs)("div",{className:d().typeEffectiveness,children:[(0,t.jsx)(v,{effectiveness:e}),":",(0,t.jsx)(o,{types:n})]},e):null}))]})},T=r(6318),P=r.n(T),Z=function(e){var n=e.stats;return(0,t.jsx)("div",{className:P().container,children:f.map((function(e){return(0,t.jsxs)("span",{children:[e,": ",n[e]]},e)}))})},B=r(7998),D=r.n(B),F=function(e){var n=e.pokemon;return(0,t.jsxs)("div",{className:D().outer,children:[(0,t.jsx)("img",{src:n.imageUrl,alt:n.name,className:D().image}),(0,t.jsxs)("div",{className:D().inner,children:[(0,t.jsx)("div",{className:D().cell,children:(0,t.jsxs)("div",{className:D().info,children:[(0,t.jsx)("h1",{className:D().heading,children:n.name}),(0,t.jsxs)("div",{style:{display:"flex"},children:["Type: ",(0,t.jsx)(o,{types:n.types})]}),(0,t.jsxs)("div",{children:["Abilities: ",n.abilities.join(", ")]}),(0,t.jsx)(A,{types:n.types})]})}),(0,t.jsx)("div",{className:D().cell,children:(0,t.jsx)(Z,{stats:n.stats})})]})]})},I=r(3374),H=function(e){var n=e.rowCount,r=e.rowHeight,s=e.rowRenderer,a=(0,i.useState)(!0),c=a[0],o=a[1];return(0,i.useEffect)((function(){return o(!1)}),[]),c?(0,t.jsx)("div",{style:{overflow:"auto",height:"100%"},children:Array.from(Array(100).keys()).map((function(e){return s({index:e,key:e+"",style:{height:r}})}))}):(0,t.jsx)(I.qj,{children:function(e){var i=e.width,a=e.height;return(0,t.jsx)(I.aV,{width:i,height:a,rowCount:n,rowHeight:r,rowRenderer:s})}})},S=!0,O=function(e){var n=e.pokemon,r=(0,i.useState)(""),s=r[0],a=r[1],c=(0,i.useMemo)((function(){return n.filter((function(e){return e.name.includes(s.toLowerCase())}))}),[n,s]);return(0,t.jsxs)("div",{style:{height:"90vh",maxWidth:1400,margin:"auto"},children:[(0,t.jsx)("input",{type:"text",value:s,onChange:function(e){var n=e.target;return a(n.value)}}),(0,t.jsx)(H,{rowCount:c.length,rowHeight:292,rowRenderer:function(e){var n=e.index,r=e.key,i=e.style;return(0,t.jsx)("div",{style:i,children:(0,t.jsx)(F,{pokemon:c[n]})},r)}})]})}},3435:function(e){e.exports={tag:"EffectivenessTag_tag__Iay3j"}},7998:function(e){e.exports={outer:"PokemonInfo_outer__2sPyB",inner:"PokemonInfo_inner__0izZv",image:"PokemonInfo_image__GajY5",cell:"PokemonInfo_cell__hvflb",info:"PokemonInfo_info__lA7Pq",heading:"PokemonInfo_heading__0gBIm"}},6318:function(e){e.exports={container:"Stats_container__O4HzC"}},6487:function(e){e.exports={heading:"TypeEffectiveness_heading__tCrkC",typeEffectiveness:"TypeEffectiveness_typeEffectiveness__HCBou"}},3295:function(e){e.exports={container:"TypeTags_container__wDmQM",tag:"TypeTags_tag__OMZd9"}}},function(e){e.O(0,[774,827,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);