(function(e){function t(t){for(var n,r,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/practicafinal/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1182:function(e,t,a){},"12b2":function(e,t,a){},1689:function(e,t,a){"use strict";a("b83a")},"34ba":function(e,t,a){"use strict";a("1182")},"4e7e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var n=a("2b0e"),i=(a("d3b7"),a("bc3a")),s=a.n(i),r={},o=s.a.create(r);o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["default"].use(Plugin);Plugin;var l=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(l["a"]);var c=a("ecee"),u=a("c074"),d=a("ad3d");c["c"].add(u["a"]),n["default"].component("font-awesome-icon",d["a"]);var m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavBar",{attrs:{isNotHome:e.isNotHome}}),a("router-view")],1)},f=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"nav-bar"},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{attrs:{role:"list"}},[a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/animals"}},[e._v("Animals")])],1),a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/veins"}},[e._v("Villagers")])],1),a("li",[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("About")])],1)])],1),e.isNotHome?a("router-link",{staticClass:"homeButton",attrs:{to:"/","aria-label":"Go to Home Page"}},[a("font-awesome-icon",{attrs:{icon:"home"}})],1):e._e()],1)],1)])},b=[],h={name:"NavBar",props:["isNotHome"]},v=h,g=(a("34ba"),a("2877")),w=Object(g["a"])(v,p,b,!1,null,null,null),_=w.exports,y={components:{NavBar:_},data:function(){return{isNotHome:!1}},mounted:function(){var e=window.location.pathname;this.isNotHome="/"!=e&&"/practicafinal"!=e&&"/practicafinal/"!=e},updated:function(){var e=window.location.pathname;this.isNotHome="/"!=e&&"/practicafinal"!=e&&"/practicafinal/"!=e}},C=y,k=(a("034f"),Object(g["a"])(C,m,f,!1,null,null,null)),P=k.exports,A=a("8c4f"),x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"home"},[a("div",{staticClass:"container"},[a("h1",[e._v("Animal Crossing New Horizons Guide")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},e._l(e.items,(function(e){return a("ul",{key:e.id,staticClass:"list-unstyled"},[a("MediaHome",{attrs:{item:e}})],1)})),0)])])])},j=[],N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-media",{staticClass:"row content",attrs:{tag:"li","no-body":""}},[a("b-media-aside",{staticClass:"media-aside align-self-start col-lg-5 col-12"},[a("b-img",{attrs:{src:e.item.img,alt:e.item.alt}})],1),a("b-media-body",{staticClass:"col-lg-7 col-12"},[a("h2",{staticClass:"mt-0 mb-1"},[e._v(e._s(e.item.name))]),a("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.item.text)+" ")]),a("router-link",{staticClass:"btn btn-AC",attrs:{to:e.item.link}},[e._v(e._s(e.item.boto))])],1)],1)},H=[],O={name:"MediaHome",props:["item"]},S=O,T=(a("e015"),Object(g["a"])(S,N,H,!1,null,null,null)),$=T.exports,E={name:"Home",components:{MediaHome:$},data:function(){return{items:[{id:"animals",name:"Animals",alt:"Image animals section",text:"What can I capture in Animal Crossing: New Horizons? Where can I find the different fish? And the bugs? Here you will find all the information.",img:"https://as.com/meristation/imagenes/2020/04/05/guia_pagina/1586118065_969678_1588266493_sumario_normal.jpg",boto:"Show the animals",link:"/animals"},{id:"veins",name:"Villagers",alt:"Image villagers section",text:"Do you want to meet the different neighbors that you can invite to your island? There are more than 300!!",img:"https://www.nintenderos.com/wp-content/uploads/2021/02/animal-crossing.jpg",boto:"Show the villagers",link:"/veins"},{id:"about",name:"About",alt:"Image about section",text:"If you want to know who made that website, why this 'thematic' and what is Animal Crossing:New Horizons, enter here.",img:"https://i.blogs.es/e96baf/animal-crossing-new-horizons/840_560.jpeg",boto:"Go to About",link:"/about"}]}}},F=E,I=Object(g["a"])(F,x,j,!1,null,null,null),B=I.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"about container"},[a("h1",[e._v("About")]),a("p",[a("strong",[e._v("Author:")]),e._v(" Laura Baena Chamizo")]),a("p",[a("strong",[e._v("Work for:")]),e._v(" Curs UdLEstiu: Creació de Webs Dinàmiques Accessibles amb Frameworks JS i CSS")]),a("p",[a("strong",[e._v("Why I choose this 'thematic':")]),e._v(" I'm a lover of this game and I want to have an app made by me, only for fun and practice my skills.")]),a("p",[a("strong",[e._v("But, what is 'Animal Crossing: New Horizons?")]),e._v("Animal Crossing: New Horizons (あつまれ どうぶつの森 Atsumare Dōbutsu no Mori?, Animal Forest: Gather) is a real-time social simulation video game developed by Nintendo. It was released on March 20, 2020, and is the eighth (and so far the newest) main-series game in the Animal Crossing series, after New Leaf. The story starts with the player living on a deserted island as part of Nook Inc. Getaway Package.*")]),a("p",{staticClass:"legend"},[e._v("*Reference: "),a("a",{attrs:{href:"https://animalcrossing.fandom.com/wiki/Animal_Crossing:_New_Horizons",target:"_blank",rel:"noopener noreferrer"}},[e._v(" Animal Crossing: New Horizons Wikia "),a("span",{staticClass:"sr-only"},[e._v("Go to wikia")])])])])}],V=(a("e76e"),{}),G=Object(g["a"])(V,z,M,!1,null,null,null),U=G.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"animals"},[a("div",{staticClass:"container"},[a("h1",[e._v("Animals")]),a("b-tabs",{attrs:{justified:"",tabindex:"0"}},[a("b-tab",{attrs:{title:"Fish",active:""}},[a("TableAnimals",{attrs:{taula:e.fishes,files:e.fishesFields,color:"primary",id:"fishesTable",perPage:e.perPage,currentPage:e.currentPage,rows:e.rowsFishes}})],1),a("b-tab",{attrs:{title:"Sea Creatures"}},[a("TableAnimals",{attrs:{taula:e.seaC,files:e.seaCFields,color:"danger",id:"seaCTable",perPage:e.perPage,currentPage:e.currentPage,rows:e.rowsSeaC}})],1),a("b-tab",{attrs:{title:"Bugs"}},[a("TableAnimals",{attrs:{taula:e.bugs,files:e.bugsFields,color:"success",id:"bugsTable",perPage:e.perPage,currentPage:e.currentPage,rows:e.rowsBugs}})],1)],1)],1)])},L=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.id},[a("b-table",{attrs:{stacked:"md",striped:"",hover:"",items:e.taula,fields:e.files,id:e.id,"per-page":e.perPage,"current-page":e.currentPage,borderless:"borderless","head-variant":"dark","table-variant":e.color}}),a("b-pagination",{attrs:{pills:"","total-rows":e.rows,"per-page":e.perPage,"aria-controls":e.id},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},J=[],R={name:"TableAnimals",props:["taula","files","color","id","perPage","currentPage","rows"]},q=R,K=(a("9ce4"),Object(g["a"])(q,D,J,!1,null,null,null)),Q=K.exports,X={name:"Animals",components:{TableAnimals:Q},mounted:function(){var e=this;s.a.get("https://acnhapi.com/v1/fish").then((function(t){for(var a in t.data)e.fishes.push(t.data[a])})),s.a.get("https://acnhapi.com/v1/sea").then((function(t){for(var a in t.data)e.seaC.push(t.data[a])})),s.a.get("https://acnhapi.com/v1/bugs").then((function(t){for(var a in t.data)e.bugs.push(t.data[a])}))},data:function(){return{fishesFields:[{key:"name.name-USen",label:"Name"},{key:"availability.location",label:"Location"},{key:"availability.rarity",label:"Rarity"},{key:"price",label:"Price"}],fishes:[],seaC:[],seaCFields:[{key:"name.name-USen",label:"Name"},{key:"speed",label:"Speed"},{key:"shadow",label:"Shadow"},{key:"price",label:"Price"}],bugs:[],bugsFields:[{key:"name.name-USen",label:"Name"},{key:"availability.location",label:"Location"},{key:"availability.rarity",label:"Rarity"},{key:"price",label:"Price"}],perPage:10,currentPage:1}},computed:{rowsFishes:function(){return this.fishes.length},rowsSeaC:function(){return this.seaC.length},rowsBugs:function(){return this.bugs.length}}},Y=X,Z=(a("1689"),Object(g["a"])(Y,W,L,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"veins"},[a("div",{staticClass:"container"},[a("h1",[e._v("Villagers")]),a("label",{staticClass:"label",attrs:{for:"selector-especies"}},[e._v("Choose an specie")]),a("b-form-select",{attrs:{id:"selector-especies",options:e.especies},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),a("div",{staticClass:"row m-4 row-veins"},e._l(e.especies.filter((function(t){return t==e.selected})),(function(t){return a("div",{key:t,staticClass:"col-12"},[a("div",{staticClass:"row"},e._l(e.veins.filter((function(e){return e.species==t})),(function(e){return a("div",{key:e.id,staticClass:"col-lg-6 col-12 p-4 card-container"},[a("CardVeins",{attrs:{vei:e}})],1)})),0)])})),0)],1)])},ae=[],ne=(a("caad"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":"",tabindex:"0"}},[a("b-row",[a("b-col",{staticClass:"col-img",attrs:{md:"5"}},[a("b-card-img",{staticClass:"rounded-0 animals",attrs:{src:e.vei.icon_uri,alt:e.vei.name["name-USen"]}})],1),a("b-col",{staticClass:"col-content",attrs:{md:"7"}},[a("b-card-body",{attrs:{title:e.vei.name["name-USen"],"title-tag":"h2"}},[a("b-card-text",[a("p",[e._v("Personality: "+e._s(e.vei.personality))]),a("p",[e._v("Birthday: "+e._s(e.vei["birthday-string"]))]),a("p",[e._v("Gender: "+e._s(e.vei.gender))])])],1)],1)],1)],1)}),ie=[],se={name:"CardVeins",props:["vei"]},re=se,oe=(a("e257"),Object(g["a"])(re,ne,ie,!1,null,null,null)),le=oe.exports,ce={name:"Veins",components:{CardVeins:le},mounted:function(){var e=this;s.a.get("https://acnhapi.com/v1/villagers").then((function(t){for(var a in t.data)e.veins.push(t.data[a])}))},data:function(){return{veins:[],selected:"Anteater"}},computed:{especies:function(){var e=[];for(var t in this.veins)e.includes(this.veins[t].species)||e.push(this.veins[t].species);return e}}},ue=ce,de=(a("ee85"),Object(g["a"])(ue,te,ae,!1,null,null,null)),me=de.exports;n["default"].use(A["a"]);var fe=[{path:"/",name:"Home",component:B},{path:"/about",name:"About",component:U},{path:"/animals",name:"Animals",component:ee},{path:"/veins",name:"Veins",component:me}],pe=new A["a"]({mode:"history",base:"/practicafinal/",routes:fe}),be=pe;n["default"].config.productionTip=!1,new n["default"]({router:be,render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,a){},8914:function(e,t,a){},"91aa":function(e,t,a){},"9ce4":function(e,t,a){"use strict";a("8914")},b83a:function(e,t,a){},e015:function(e,t,a){"use strict";a("12b2")},e257:function(e,t,a){"use strict";a("e5f2")},e5f2:function(e,t,a){},e76e:function(e,t,a){"use strict";a("91aa")},ee85:function(e,t,a){"use strict";a("4e7e")}});
//# sourceMappingURL=app.559114f6.js.map