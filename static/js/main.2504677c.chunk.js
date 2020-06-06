(this.webpackJsonpss2_planner=this.webpackJsonpss2_planner||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),l=(n(17),n(18),n(6)),u=n(2),o=n(4);function s(e,t){return e-t}var E=Object(o.a)({name:"Breakpoints",initialState:[],reducers:{add:function(e,t){return e.includes(t.payload)?e:e.concat(t.payload).sort(s)},remove:function(e,t){return e.filter((function(e){return e!==t.payload}))}}});function m(){var e=Object(u.c)((function(e){return e.breakpoints})),t=Object(u.b)(),n=Object(a.useState)(0),c=Object(l.a)(n,2),i=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Breakpoints"),e.map((function(e){return r.a.createElement("div",{key:e},e,r.a.createElement("button",{onClick:function(){return t(E.actions.remove(e))}},"-"))})),r.a.createElement("input",{value:i,onChange:function(e){return o(+e.target.value)},type:"number"}),r.a.createElement("button",{onClick:function(){return t(E.actions.add(i))}},"Add"))}var d,b,f=[["Psycho-Reflective Screen","Neuro-Reflex Dampening","Kinetic Redirection","Psychogenic Agility","Psychogenic Cyber Affinity","Projected Cryokinesis","Remote Electron Tampering"],["Anti-Entropic Field","Adrenaline Overproduction","Neural Decontamination","Cerebro-Stimulated Regeneration","Psychogenic Strength","Recursive Psionic Amplification","Localized Pyrokinesis"],["Molecular Duplication","Electron Cascade","Energy Reflection","Neural Toxin-Blocker","Enhanced Motion Sensitivity","Projected Pyrokinesis","Psionic Hypnogenesis"],["Photonic Redirection","Remote Pattern Detection","Electron Suppression","Psychogenic Endurance","Molecular Transmutation","Remote Circuitry Manipulation","Cerebro-Energetic Extension"],["Advanced Cerebro-Stimulated Regeneration","Soma Transference","Instantaneous Quantum Relocation","Imposed Neural Restructuring","Metacreative Barrier","External Psionic Detonation","Psycho-Reflective Aura"]],v=n(1);!function(e){e.EASY="Easy",e.NORMAL="Normal",e.HARD="Hard",e.IMPOSSIBLE="Impossible"}(d||(d={}));var O,y=(b={},Object(v.a)(b,d.EASY,[8,17,25,42,63]),Object(v.a)(b,d.NORMAL,[10,20,30,50,75]),Object(v.a)(b,d.HARD,[13,27,41,69,104]),Object(v.a)(b,d.IMPOSSIBLE,[17,35,53,89,134]),b),p=Object(o.a)({name:"PsiTiers",initialState:new Array(y[d.EASY].length).fill({enabled:!1,abilities:[]}),reducers:{activateTier:function(e,t){e[t.payload].enabled=!0},deactivateTier:function(e,t){var n=t.payload;e[n].enabled=!1,e[n].abilities=[]},activateAbility:function(e,t){var n=t.payload,a=f.findIndex((function(e){return e.includes(n)}));if(-1===a)throw new Error('could not find ability named "'.concat(n));e[a].enabled&&!e[a].abilities.includes(n)&&e[a].abilities.push(n)},deactivateAbility:function(e,t){var n=t.payload,a=f.findIndex((function(e){return e.includes(n)}));if(-1===a)throw new Error('could not find ability named "'.concat(n));e[a].abilities=e[a].abilities.filter((function(e){return e!==n}))}}}),A=(O={},Object(v.a)(O,d.EASY,[2,4,6,10,17]),Object(v.a)(O,d.NORMAL,[3,5,8,12,20]),Object(v.a)(O,d.HARD,[4,6,11,16,27]),Object(v.a)(O,d.IMPOSSIBLE,[5,8,14,21,35]),O);function j(){var e=Object(u.c)((function(e){return e.tiers})),t=Object(u.c)((function(e){return e.difficulty})),n=Object(u.b)();return r.a.createElement("div",null,e.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement("h2",null,"Tier ",a+1),r.a.createElement("div",null,r.a.createElement("label",null,e.enabled?r.a.createElement("button",{onClick:function(){return n(p.actions.deactivateTier(a))}},"Disable"):r.a.createElement("button",{onClick:function(){return n(p.actions.activateTier(a))}},"Enable"),y[t][a])),f[a].map((function(c){return r.a.createElement("div",{key:c},c,r.a.createElement("label",null,e.abilities.includes(c)?r.a.createElement("button",{onClick:function(){return n(p.actions.deactivateAbility(c))}},"Disable"):r.a.createElement("button",{disabled:!e.enabled,onClick:function(){return n(p.actions.activateAbility(c))}},"Enable"),A[t][a]))})))})))}var C,R=Object(o.a)({name:"Difficulty",initialState:d.NORMAL,reducers:{setDifficulty:function(e,t){return t.payload}}});function S(){var e=Object(u.c)((function(e){return e.difficulty})),t=Object(u.b)();return r.a.createElement("div",null,e,Object.entries(d).map((function(e){var n=Object(l.a)(e,2),a=n[0],c=n[1];return r.a.createElement("button",{key:a,onClick:function(){return t(R.actions.setDifficulty(c))}},c)})))}var h,g,I,N,M=(C={},Object(v.a)(C,d.EASY,[2,6,12,25,42]),Object(v.a)(C,d.NORMAL,[3,8,15,30,50]),Object(v.a)(C,d.HARD,[4,11,20,41,69]),Object(v.a)(C,d.IMPOSSIBLE,[5,14,26,53,89]),C),T=(h={},Object(v.a)(h,d.EASY,[10,5,6,12,30,42]),Object(v.a)(h,d.NORMAL,[12,6,8,15,36,50]),Object(v.a)(h,d.HARD,[16,8,11,20,50,69]),Object(v.a)(h,d.IMPOSSIBLE,[21,10,14,26,64,89]),h),D=(g={},Object(v.a)(g,d.EASY,[8,4,6,10,21,42]),Object(v.a)(g,d.NORMAL,[10,5,8,12,25,50]),Object(v.a)(g,d.HARD,[13,6,11,16,34,69]),Object(v.a)(g,d.IMPOSSIBLE,[17,8,14,21,44,89]),g);function P(){var e=Object(u.c)((function(e){return e.difficulty})),t=Object(u.c)((function(e){return e.stats})),n=Object(u.c)((function(e){return e.weapons})),c=Object(u.c)((function(e){return e.tiers})),i=Object(u.c)((function(e){return e.techs})),l=Object(a.useMemo)((function(){return c.reduce((function(t,n,a){return t+(n.enabled?y[e][a]:0)+n.abilities.length*A[e][a]}),0)+Object.values(t).reduce((function(t,n){return t+M[e].slice(0,n-1).reduce((function(e,t){return e+t}),0)}),0)+Object.values(n).reduce((function(t,n){return t+T[e].slice(0,n).reduce((function(e,t){return e+t}),0)}),0)+Object.values(i).reduce((function(t,n){return t+D[e].slice(0,n).reduce((function(e,t){return e+t}),0)}),0)}),[c,e,t,n,i]);return r.a.createElement("div",null,l)}!function(e){e.STRENGTH="Strength",e.ENDURANCE="Endurance",e.PSIONICS="Psionics",e.AGILITY="Agility",e.CYBER="Cybernetic Affinity"}(I||(I={}));var k,Y,H=Object(o.a)({name:"Stats",initialState:(N={},Object(v.a)(N,I.STRENGTH,1),Object(v.a)(N,I.ENDURANCE,1),Object(v.a)(N,I.PSIONICS,1),Object(v.a)(N,I.AGILITY,1),Object(v.a)(N,I.CYBER,1),N),reducers:{setStat:function(e,t){var n=t.payload,a=n.stat,r=n.value;e[a]=Math.floor(Math.max(1,Math.min(6,r)))}}});function w(e){var t=e.stat,n=e.value,a=Object(u.b)(),c=Object(u.c)((function(e){return e.difficulty}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{gridColumn:1}},t),r.a.createElement("span",{style:{gridColumn:2}},r.a.createElement("input",{value:n,min:1,max:6,type:"number",onChange:function(e){return a(H.actions.setStat({stat:t,value:+e.target.value}))}})),r.a.createElement("span",{style:{gridColumn:3}},6!==n?M[c][n-1]:"max"))}function L(){var e=Object(u.c)((function(e){return e.stats}));return r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("h2",null,"Stats"),r.a.createElement("span",{style:{gridColumn:1}},"Skill"),r.a.createElement("span",{style:{gridColumn:2}},"Level"),r.a.createElement("span",{style:{gridColumn:3}},"Cost"),r.a.createElement(w,{stat:I.STRENGTH,value:e[I.STRENGTH]}),r.a.createElement(w,{stat:I.ENDURANCE,value:e[I.ENDURANCE]}),r.a.createElement(w,{stat:I.PSIONICS,value:e[I.PSIONICS]}),r.a.createElement(w,{stat:I.AGILITY,value:e[I.AGILITY]}),r.a.createElement(w,{stat:I.CYBER,value:e[I.CYBER]}))}!function(e){e.STANDARD="Standard",e.ENERGY="Energy",e.HEAVY="Heavy",e.EXOTIC="Exotic"}(k||(k={}));var x,B,G=Object(o.a)({name:"Weapons",initialState:(Y={},Object(v.a)(Y,k.STANDARD,0),Object(v.a)(Y,k.ENERGY,0),Object(v.a)(Y,k.HEAVY,0),Object(v.a)(Y,k.EXOTIC,0),Y),reducers:{setWeapon:function(e,t){var n=t.payload,a=n.weapon,r=n.value;e[a]=Math.floor(Math.max(0,Math.min(6,r)))}}});function F(e){var t=e.weapon,n=e.value,a=Object(u.b)(),c=Object(u.c)((function(e){return e.difficulty}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{gridColumn:1}},t),r.a.createElement("span",{style:{gridColumn:2}},r.a.createElement("input",{value:n,min:0,max:6,type:"number",onChange:function(e){return a(G.actions.setWeapon({weapon:t,value:+e.target.value}))}})),r.a.createElement("span",{style:{gridColumn:3}},6!==n?T[c][n]:"max"))}function W(){var e=Object(u.c)((function(e){return e.weapons}));return r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("h2",null,"Weapons"),r.a.createElement("span",{style:{gridColumn:1}},"Skill"),r.a.createElement("span",{style:{gridColumn:2}},"Level"),r.a.createElement("span",{style:{gridColumn:3}},"Cost"),r.a.createElement(F,{weapon:k.STANDARD,value:e[k.STANDARD]}),r.a.createElement(F,{weapon:k.ENERGY,value:e[k.ENERGY]}),r.a.createElement(F,{weapon:k.HEAVY,value:e[k.HEAVY]}),r.a.createElement(F,{weapon:k.EXOTIC,value:e[k.EXOTIC]}))}!function(e){e.HACKING="Hacking",e.REPAIR="Repair",e.MODIFY="Modify",e.MAINTENANCE="Maintenance",e.RESEARCH="Research"}(x||(x={}));var K=Object(o.a)({name:"Techs",initialState:(B={},Object(v.a)(B,x.HACKING,0),Object(v.a)(B,x.REPAIR,0),Object(v.a)(B,x.MODIFY,0),Object(v.a)(B,x.MAINTENANCE,0),Object(v.a)(B,x.RESEARCH,0),B),reducers:{setTech:function(e,t){var n=t.payload,a=n.tech,r=n.value;e[a]=Math.floor(Math.max(0,Math.min(6,r)))}}});function U(e){var t=e.tech,n=e.value,a=Object(u.b)(),c=Object(u.c)((function(e){return e.difficulty}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{gridColumn:1}},t),r.a.createElement("span",{style:{gridColumn:2}},r.a.createElement("input",{value:n,min:0,max:6,type:"number",onChange:function(e){return a(K.actions.setTech({tech:t,value:+e.target.value}))}})),r.a.createElement("span",{style:{gridColumn:3}},6!==n?D[c][n]:"max"))}function V(){var e=Object(u.c)((function(e){return e.techs}));return r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("h2",null,"Techs"),r.a.createElement("span",{style:{gridColumn:1}},"Skill"),r.a.createElement("span",{style:{gridColumn:2}},"Level"),r.a.createElement("span",{style:{gridColumn:3}},"Cost"),r.a.createElement(U,{tech:x.HACKING,value:e[x.HACKING]}),r.a.createElement(U,{tech:x.REPAIR,value:e[x.REPAIR]}),r.a.createElement(U,{tech:x.MODIFY,value:e[x.MODIFY]}),r.a.createElement(U,{tech:x.MAINTENANCE,value:e[x.MAINTENANCE]}),r.a.createElement(U,{tech:x.RESEARCH,value:e[x.RESEARCH]}))}var X=function(){return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(S,null),r.a.createElement(L,null),r.a.createElement(W,null),r.a.createElement(V,null),r.a.createElement(j,null),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(3),_=Object(J.c)({breakpoints:E.reducer,tiers:p.reducer,difficulty:R.reducer,stats:H.reducer,weapons:G.reducer,techs:K.reducer}),z=Object(J.e)(_);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:z},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2504677c.chunk.js.map