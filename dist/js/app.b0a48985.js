(function(e){function t(t){for(var r,i,c=t[0],o=t[1],u=t[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},s={app:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"065d":function(e,t,a){},"0fa6":function(e,t,a){"use strict";a("e7b9")},"2bf5":function(e,t,a){"use strict";a("463b")},4078:function(e,t,a){"use strict";a("e342")},"463b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"nav",attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(" Игра ")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/table"}},[e._v(" Таблица результатов ")])],1),a("h1",{staticClass:"title"},[e._v("Rick and MEMOrty")]),a("router-view")],1)},n=[],i=a("5530"),c=a("2f62"),o={methods:Object(i["a"])({},Object(c["b"])(["setScoreTable"])),created:function(){var e=null;try{e=JSON.parse(localStorage.getItem("scoreTable"))}catch(t){e=null}e&&this.setScoreTable(e)}},u=o,d=(a("5c0b"),a("2877")),l=Object(d["a"])(u,s,n,!1,null,null,null),m=l.exports,p=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.testMode,expression:"testMode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.testMode)?e._i(e.testMode,null)>-1:e.testMode},on:{change:function(t){var a=e.testMode,r=t.target,s=!!r.checked;if(Array.isArray(a)){var n=null,i=e._i(a,n);r.checked?i<0&&(e.testMode=a.concat([n])):i>-1&&(e.testMode=a.slice(0,i).concat(a.slice(i+1)))}else e.testMode=s}}}),e._v(" Читы "),a("the-timer",{on:{gameTime:e.addNewEntry}}),a("div",{staticClass:"game"},[a("transition-group",{staticClass:"cards",attrs:{name:"card",tag:"div"}},e._l(e.cardList,(function(t){return a("the-card",{key:t.id,staticClass:"card",attrs:{card:t,shirt:e.shirtСardImage,canFlip:e.canFlip},on:{cardFlipped:e.flipCard}})})),1)],1)],1)},b=[],h=(a("d81d"),a("7db0"),a("4de4"),a("4e82"),a("5db7"),a("73d9"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"game__card",class:{flip:e.card.isFlipped,unvisible:!e.card.isShow},on:{click:e.flipCard}},[a("div",{staticClass:"game__card-image game__card-image_type_face",style:{backgroundImage:"url("+e.card.image+")"}}),a("div",{staticClass:"game__card-image game__card-image_type_shirt",style:{backgroundImage:"url("+e.shirt+")"}})])}),_=[],v={props:{card:{type:Object,require:!0},shirt:{type:String,require:!0},canFlip:{type:Boolean,require:!0}},methods:{flipCard:function(){!this.card.isFlipped&&this.canFlip&&this.$emit("cardFlipped",{id:this.card.id,number:this.card.number})}}},O=v,T=(a("2bf5"),Object(d["a"])(O,h,_,!1,null,"4f14dcef",null)),g=T.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"timer"},[a("div",{staticClass:"timer__wrapper button-wrapper"},["stopped"===e.gameStatus?a("button",{staticClass:"timer__button",attrs:{type:"button"},on:{click:e.startGame}},[e._v("СТАРТ")]):e._e(),"end"===e.gameStatus?a("button",{staticClass:"timer__button",attrs:{type:"button"},on:{click:e.startGame}},[e._v("ЕЩЕ РАЗ")]):e._e(),"started"===e.gameStatus?a("button",{staticClass:"timer__button",attrs:{type:"button"},on:{click:e.stopGame}},[e._v("СТОП")]):e._e()]),a("div",{staticClass:"timer__wrapper timer-wrapper"},["started"===e.gameStatus||"prepare"===e.gameStatus?a("div",{staticClass:"time"},[e._v(" "+e._s(e.numberOfMinutes)+" : "+e._s(e.numberOfSeconds>9?e.numberOfSeconds:"0"+e.numberOfSeconds)+" ")]):e._e(),"end"===e.gameStatus?a("div",{staticClass:"time"},[a("p",[e._v("Игра окончена!")]),a("p",[e._v(" Ваше время: "+e._s(e.numberOfMinutes)+" : "+e._s(e.numberOfSeconds>9?e.numberOfSeconds:"0"+e.numberOfSeconds)+" ")])]):e._e()])])},C=[],y={data:function(){return{numberOfMinutes:0,numberOfSeconds:0,timer:null}},computed:Object(i["a"])({},Object(c["d"])(["gameStatus"])),watch:{gameStatus:function(e){var t=this;"started"===e&&(this.timer=setInterval((function(){59===t.numberOfSeconds?(t.numberOfSeconds=0,t.numberOfMinutes+=1):t.numberOfSeconds+=1}),1e3)),"end"===e&&(clearInterval(this.timer),this.$emit("gameTime",{numberOfMinutes:this.numberOfMinutes,numberOfSeconds:this.numberOfSeconds})),"stopped"===e&&clearInterval(this.timer)}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["setGameStatus"])),{},{startGame:function(){this.setGameStatus("prepare"),this.numberOfMinutes=0,this.numberOfSeconds=0},stopGame:function(){this.setGameStatus("stopped"),this.numberOfMinutes=0,this.numberOfSeconds=0}})},F=y,j=(a("c4ac"),Object(d["a"])(F,S,C,!1,null,"05e8d7e4",null)),M=j.exports,w={name:"Game",components:{TheCard:g,TheTimer:M},data:function(){return{firstFlippedCard:null,secondFlippedCard:null,openPairs:0,canFlip:!1,cardList:[],testMode:!1,firstCardTimerId:null}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(c["c"])(["imageList"])),Object(c["d"])(["shirtСardImage","gameStatus"])),{},{numberOfPairsToAdd:function(){return this.testMode?8:1}}),watch:{gameStatus:function(e){"prepare"===e&&(this.prepareCardsToStartGame(),this.canFlip=!0,setTimeout((function(){}),3e3)),"stopped"===e&&(this.openPairs=0,this.canFlip=!1,this.cardList.map((function(e){e.isShow=!0,e.isFlipped=!1}))),"end"===e&&(this.openPairs=0,this.cardList.map((function(e){e.isShow=!0,e.isFlipped=!0})))}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["setGameStatus","generateRandomNumberList","addNewEntry"])),{},{flipCard:function(e){var t=this,a=e.id,r=e.number,s=this.findCardbyId(a);s.isFlipped=!s.isFlipped,this.firstFlippedCard?(clearTimeout(this.firstCardTimerId),this.secondFlippedCard=r,this.canFlip=!1):(this.firstFlippedCard=r,this.firstCardTimerId=setTimeout((function(){t.resetCardByNumber(t.firstFlippedCard),t.resetCardByNumber(t.secondFlippedCard),t.resetFlippedCard()}),5e3)),setTimeout((function(){t.secondFlippedCard&&(t.firstFlippedCard===t.secondFlippedCard?(t.hideCardsByNumber(t.secondFlippedCard),t.openPairs+=t.numberOfPairsToAdd,t.openPairs>=16&&t.setGameStatus("end")):(t.resetCardByNumber(t.firstFlippedCard),t.resetCardByNumber(t.secondFlippedCard)),t.resetFlippedCard(),t.canFlip=!0)}),1e3)},findCardbyId:function(e){return this.cardList.find((function(t){return t.id===e}))},hideCardsByNumber:function(e){var t=this.cardList.filter((function(t){return t.number===e}));t.map((function(e){e.isShow=!1}))},resetCardByNumber:function(e){var t=this.cardList.filter((function(t){return t.number===e}));t.map((function(e){e.isFlipped=!1}))},resetFlippedCard:function(){this.firstFlippedCard=null,this.secondFlippedCard=null},prepareCardsToStartGame:function(){var e=this;this.generateRandomNumberList(),this.generateCards(),setTimeout((function(){e.cardList.map((function(e){e.isFlipped=!0}))}),0);var t=this.cardList.map((function(e,a){var r=document.createElement("img");r.src=e.image,r.onload=function(){t[a]=!0}})),a=setInterval((function(){t.every((function(e){return!0===e}))&&(setTimeout((function(){e.cardList.map((function(e){e.isFlipped=!1}))}),1e3),e.testMode||setTimeout((function(){e.cardList.sort((function(){return Math.random()-.5}))}),0),setTimeout((function(){e.setGameStatus("started")}),1e3),clearInterval(a)),console.log(t),console.log(a)}),1e3)},generateCards:function(){var e=this.imageList.map((function(e,t){return{isShow:!0,isFlipped:!1,image:e,number:t+1}})).flatMap((function(e){return[e,e]}));this.cardList=e.map((function(e,t){var a=Object.assign({},e,{id:t});return a}))}}),created:function(){this.generateRandomNumberList(),this.generateCards()},mounted:function(){this.setGameStatus("stopped"),this.generateCards()}},E=w,N=(a("4078"),Object(d["a"])(E,f,b,!1,null,"363ddda0",null)),A=N.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"score"},[a("table",{staticClass:"scoreTable"},[e._m(0),a("tbody",{staticClass:"scoreTable__body"},e._l(e.scoreTable,(function(t,r){return a("tr",{key:r,staticClass:"scoreTable__row"},[a("td",{staticClass:"scoreTable__col"},[e._v(e._s(r+1))]),a("td",{staticClass:"scoreTable__col"},[e._v("You")]),a("td",{staticClass:"scoreTable__col"},[e._v(e._s(t))])])})),0)]),a("button",{attrs:{type:"button"},on:{click:e.clearTable}},[e._v("Очистить")])])},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"scoreTable__head"},[a("tr",{staticClass:"scoreTable__row"},[a("th",{staticClass:"scoreTable__col scoreTable__col-head"},[e._v("#")]),a("th",{staticClass:"scoreTable__col scoreTable__col-head"},[e._v("Имя")]),a("th",{staticClass:"scoreTable__col scoreTable__col-head"},[e._v("Время")])])])}],k={computed:Object(i["a"])({},Object(c["d"])(["scoreTable"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["setScoreTable"])),{},{clearTable:function(){this.setScoreTable(null),localStorage.removeItem("scoreTable")}})},G=k,R=(a("0fa6"),Object(d["a"])(G,L,I,!1,null,"a4f4332e",null)),P=R.exports;r["a"].use(p["a"]);var x=[{path:"/",name:"Game",component:A},{path:"/table",name:"Table",component:P}],B=new p["a"]({mode:"history",base:"/",routes:x}),$=B;a("99af");r["a"].use(c["a"]);var D=new c["a"].Store({state:{randomNumberList:[],baseNaumberOfAvalableAvatars:671,numberOfUniqueCard:18,baseUrlToImages:"https://rickandmortyapi.com/api/character/avatar/",baseFileFormat:".jpeg","shirtСardImage":"https://rickandmortyapi.com/api/character/avatar/19.jpeg",gameStatus:"stopped",scoreTable:[],numberOfRecordsInScoreTable:5},getters:{imageList:function(e){return e.randomNumberList.map((function(t){return"".concat(e.baseUrlToImages).concat(t).concat(e.baseFileFormat)}))}},mutations:{SET_AVATAR_LIST:function(e,t){e.randomNumberList=t},SET_GAME_STATUS:function(e,t){e.gameStatus=t},SET_TABLE_OF_RECORDS:function(e,t){e.scoreTable=t},ADD_NEW_ENTRY:function(e,t){e.scoreTable.push(t),e.scoreTable=e.scoreTable.sort(),e.scoreTable.length>e.numberOfRecordsInScoreTable&&(e.scoreTable.length=e.numberOfRecordsInScoreTable),localStorage.setItem("scoreTable",JSON.stringify(e.scoreTable.sort()))}},actions:{generateRandomNumberList:function(e){var t=e.commit,a=e.state,r=[];if(!(a.baseNaumberOfAvalableAvatars<a.numberOfUniqueCard)){while(r.length<18){var s=Math.floor(Math.random()*a.baseNaumberOfAvalableAvatars-1)+2;-1===r.indexOf(s)&&19!==s&&66!==s&&104!==s&&189!==s&&249!==s&&r.push(s)}t("SET_AVATAR_LIST",r.sort((function(e,t){return e-t})))}},setGameStatus:function(e,t){var a=e.commit;a("SET_GAME_STATUS",t)},setScoreTable:function(e,t){var a=e.commit;a("SET_TABLE_OF_RECORDS",t)},addNewEntry:function(e,t){var a=e.commit,r=t.numberOfMinutes,s=t.numberOfSeconds>9?"".concat(t.numberOfSeconds):"0".concat(t.numberOfSeconds);a("ADD_NEW_ENTRY","".concat(r,":").concat(s))}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:$,store:D,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},c4ac:function(e,t,a){"use strict";a("065d")},e342:function(e,t,a){},e7b9:function(e,t,a){}});
//# sourceMappingURL=app.b0a48985.js.map