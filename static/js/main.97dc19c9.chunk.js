(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{16:function(e,t,n){e.exports={tags:"Tags_tags__33cad",tag:"Tags_tag__1DkF9","-checked":"Tags_-checked__2JlTc"}},17:function(e,t,n){e.exports={"event-days":"Nav_event-days__3gjk_","-active":"Nav_-active__3hA8p"}},18:function(e,t,n){e.exports={location:"EventDetail_location__WlgXF"}},29:function(e,t,n){e.exports={events:"EventList_events___LJlq"}},30:function(e,t,n){e.exports={"event-dialog":"Dialog_event-dialog__2sWkN"}},40:function(e,t,n){"use strict";n.r(t);n(63);var r=n(0),a=n.n(r),o=n(34),c=n.n(o),i=n(12),l=(n(49),"EVENTS::REQUEST");function u(){return{type:l}}var s="EVENTS::RECIEVED";function f(){return function(e){return e(u),fetch("https://jimmerz28.github.io/fantasy-schedule/events.json").then(function(e){return e.json()},function(e){return console.error(e)}).then(function(t){e({type:s,events:t})})}}var v="TAG::ADD";var p="TAG::REMOVE";var d="FAVORITE::ADD";var y="FAVORITE::REMOVE";var m="FAVORITES::FILTER";var h="EVENT::SELECTED";var g=n(6),b=n(31),E=["#d7f2cc","#88aee1","#e6d3a5","#cec9f3","#b9cda1","#dfbbe3","#96bfad","#e8a9a5","#90d3e0","#f3d7b6","#a5cbeb","#ccb295","#b9aace","#c1e2d3","#dfb9be","#c7dfee","#ead9c9","#a9b6cc","#e5d1e3"],w="MM/dd/yyyy hh:mm aaa",O="M/dd/yyyy",D="eeee, LLL d",_="MMM d",S=n(8),j=n(9),T=n(70);function k(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?w:O;return Object(j.a)(e,t,new Date)}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){N(e,t,n[t])})}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var C={tags:[],onlyFavs:!1};var I=Object(g.c)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.events;switch(n){case s:return function(e){return e.reduce(function(e,t){t["Start Date & Time"]=k(t["Start Date & Time"]);var n=Object(S.a)(t["Start Date & Time"],D),r=e.find(function(e){return e.day===n});return r?r.events.push(t):e.push({day:n,events:[]}),e},[]).sort(function(e,t){var n=Object(j.a)(e.day,D,new Date),r=Object(j.a)(t.day,D,new Date);return Object(T.a)(n,r)})}(r);default:return e}},tags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.events;switch(n){case s:return A(new Set(r.map(function(e){return e["Event Type"]}))).sort().map(function(e,t){return{tag:e,color:E[t]}});default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.eventID;switch(n){case d:return A(e).concat([r]);case y:return e.filter(function(e){return e!==r});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.tag,a=t.checked,o=void 0!==a&&a;switch(n){case v:return F({},e,{tags:A(e.tags).concat([r])});case p:return F({},e,{tags:e.tags.filter(function(e){return e!==r})});case m:return F({},e,{onlyFavs:o});default:return e}},selectedEvent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.id;switch(n){case h:return r;default:return e}}}),M=n(19),R=Object(b.createLogger)(),L=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.d)(Object(g.a)(M.a,R));L=Object(g.a)(M.a);var x=Object(g.e)(I,L),P=n(30),V=n.n(P),G=n(18),W=n.n(G),J=function(e){var t=e.event,n=e.relatedEvents;if(!t)return null;var r=n.map(function(e){return a.a.createElement("li",{key:e["Game ID"]},e["Start Date & Time"].toString())});return a.a.createElement("div",{className:W.a["event-detail"]},a.a.createElement("h1",null,t.Title),a.a.createElement("p",null,function(e){var t=k(e["End Date & Time"]);return"".concat(Object(S.a)(e["Start Date & Time"],"EEE. MMM d, h:mm aaa")," - ").concat(Object(S.a)(t,"h:mm aaa"))}(t)),a.a.createElement("p",{className:W.a.location},a.a.createElement("span",null,t.Location),a.a.createElement("span",null,t["Room Name"]),a.a.createElement("span",null,t["Table Number"])),a.a.createElement("p",null,t["Short Description"]),a.a.createElement("p",null,t["Long Description"]),a.a.createElement("p",null,t["Event Type"].slice(6)),a.a.createElement("h2",null,"Related Events"),a.a.createElement("ul",null,r))},U=function(e){e.show;var t=e.event,n=e.onClose,r=e.relatedEvents;return a.a.createElement("dialog",{className:V.a["event-dialog"]},a.a.createElement("section",null,a.a.createElement("button",{type:"button",onClick:n},"Close"),a.a.createElement(J,{event:t,relatedEvents:r})))},X=n(29),q=n.n(X),B=function(e){var t=e.events,n=e.onFav,r=e.favs,o=e.showDialog,c=t.map(function(e){var t,c,i=e.day,l=e.events.map(function(e){var t=e["Game ID"],c=r.includes(t);return a.a.createElement("li",{key:t,onClick:o.bind(void 0,t)},a.a.createElement("p",null,e.Title),a.a.createElement("p",null,e["Event Type"]),a.a.createElement("label",{htmlFor:t},"Favorite"),a.a.createElement("input",{type:"checkbox",name:t,id:t,onChange:n,checked:c}))});return a.a.createElement("div",{key:i,id:(t=i,c=D,Object(S.a)(Object(j.a)(t,c,new Date),_).replace(" ","-"))},a.a.createElement("h2",null,i),a.a.createElement("ul",null,l))});return a.a.createElement("div",{className:q.a.events},a.a.createElement("ul",null,c))},H=n(28),Q=n.n(H),z=n(17),$=n.n(z);function K(e){return(K="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return!t||"object"!==K(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ne=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return ee(r,(n=r=ee(this,(e=te(t)).call.apply(e,[this].concat(o))),r.state={activeDay:""},r.onClick=function(e){var t=e.target.hash;r.setState({activeDay:t})},n))}var n,r,o;return n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.days.map(function(t){var n=t.value,r=t.formatted,o="#".concat(r).replace(" ","-"),c=Q()(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},$.a["-active"],o===e.state.activeDay));return a.a.createElement("li",{key:n,className:c},a.a.createElement("a",{href:o,onClick:e.onClick},r))});return a.a.createElement("nav",{className:$.a["event-days"]},a.a.createElement("ul",null,t))}}])&&Z(n.prototype,r),o&&Z(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Y(e.prototype,t&&t.prototype),t&&Y(e,t)}(t,e),t}(r.Component),re=n(27),ae=n.n(re),oe=n(16),ce=n.n(oe),ie=ae.a.bind(ce.a),le=function(e){var t=e.tags,n=e.selectedTags,r=e.onTagSelection,o=t.map(function(e){var t=e.tag,o=e.color,c=n.includes(t),i=ie({"-checked":c,tag:!0});return a.a.createElement("div",{key:t,className:i,style:{"--tag-color":o}},a.a.createElement("label",{htmlFor:t},a.a.createElement("span",null,t.slice(6))),a.a.createElement("input",{type:"checkbox",name:t,id:t,onChange:r,checked:c}))});return a.a.createElement("div",{className:ce.a.tags},a.a.createElement("form",null,o))},ue=n(26),se=n(7);function fe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ve=function(e){return e.events},pe=Object(se.createSelector)([function(e){return e.filter.tags},function(e){return e.filter.onlyFavs},function(e){return e.favorites},ve],function(e,t,n,r){var a=r;return e.length&&(a=a.map(function(t){return{day:t.day,events:t.events.filter(function(t){return e.includes(t["Event Type"])})}})),t&&(a=a.map(function(e){return{day:e.day,events:e.events.filter(function(e){return n.includes(e["Game ID"])})}})),a}),de=Object(se.createSelector)([ve],function(e){return e.reduce(function(e,t){return e.push({value:t.day,formatted:Object(S.a)(Object(j.a)(t.day,D,new Date),_)}),e},[])}),ye=Object(se.createSelector)([pe,function(e){return e.selectedEvent}],function(e,t){var n=null;return e.some(function(e){e.day;var r=e.events;return n=r.find(function(e){return e["Game ID"]===t})}),n}),me=Object(se.createSelector)([pe,ye],function(e,t){return t?e.reduce(function(e,n){n.day;var r=n.events.filter(function(e){return e.Title===t.Title&&e["Game ID"]!==t["Game ID"]});return e.push.apply(e,fe(r)),e},[]):[]});function he(e){return(he="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function be(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(e,t){return!t||"object"!==he(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function we(e){return(we=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Oe=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return Ee(r,(n=r=Ee(this,(e=we(t)).call.apply(e,[this].concat(o))),r.onTagSelection=function(e){var t=e.target,n=t.name;t.checked?x.dispatch({type:v,tag:n}):x.dispatch(function(e){return{type:p,tag:e}}(n))},r.onFav=function(e){var t=e.target,n=t.id;t.checked?x.dispatch({type:d,eventID:n}):x.dispatch(function(e){return{type:y,eventID:e}}(n))},r.onFilterFavs=function(e){var t=e.target.checked;x.dispatch(function(e){return{type:m,checked:e}}(t))},r.onShowDialog=function(e){x.dispatch(function(e){return{type:h,id:e}}(e)),r.eventDialog.showModal()},r.onHideDialog=function(){r.eventDialog.close()},n))}var n,r,o;return n=t,(r=[{key:"componentDidMount",value:function(){x.dispatch(f()),ue.registerDialog(this.eventDialog)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(U,{show:this.props.showDialog,event:this.props.dialogEvent,relatedEvents:this.props.relatedEvents,onClose:this.onHideDialog}),a.a.createElement("main",{className:"app"},a.a.createElement("div",{className:"tag -fav"},a.a.createElement("label",{htmlFor:"only-favs"},"Show Only Favorites"),a.a.createElement("input",{type:"checkbox",name:"favs",id:"only-favs",onChange:this.onFilterFavs})),a.a.createElement(le,{tags:this.props.tags,onTagSelection:this.onTagSelection,selectedTags:this.props.filter.tags}),a.a.createElement(ne,{days:this.props.days}),a.a.createElement(B,{events:this.props.events,onFav:this.onFav,favs:this.props.favorites,showDialog:this.onShowDialog})))}},{key:"eventDialog",get:function(){return document.querySelector("dialog")}}])&&be(n.prototype,r),o&&be(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ge(e.prototype,t&&t.prototype),t&&ge(e,t)}(t,e),t}(r.Component),De=Object(i.b)(function(e){return{tags:e.tags,favorites:e.favorites,filter:e.filter,dialogEvent:ye(e),events:pe(e),relatedEvents:me(e),days:de(e)}},null)(Oe),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(a.a.createElement(i.a,{store:x},a.a.createElement(De,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/fantasy-schedule",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/fantasy-schedule","/service-worker.js");_e?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Se(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Se(e)})}}()},49:function(e,t,n){},63:function(e,t,n){},69:function(e,t,n){n(68),e.exports=n(40)}},[[69,0,1]]]);
//# sourceMappingURL=main.97dc19c9.chunk.js.map