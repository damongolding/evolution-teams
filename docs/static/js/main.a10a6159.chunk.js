(this["webpackJsonpevolution-teams"]=this["webpackJsonpevolution-teams"]||[]).push([[0],{169:function(e,a,t){e.exports=t(385)},174:function(e,a,t){},175:function(e,a,t){},191:function(e,a){},193:function(e,a){},224:function(e,a){},225:function(e,a){},269:function(e,a){},271:function(e,a){},294:function(e,a){},385:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),s=t(162),c=t.n(s),r=(t(174),t(175),t(163)),m=t(164),i=t(167),o=t(165),u=t(168),d=t(166),E=t.n(d),h=function(e){var a=e.index,t=e.player,n=e.currentLastPlayer,s=t.kd+n.kd;return n.name!==t.name?l.a.createElement("div",{className:"column is-3 message"},l.a.createElement("div",{className:"message-header"},l.a.createElement("span",{className:"is-pulled-left"},"Team ",a+1),l.a.createElement("span",{className:"is-pulled-right"},s)),l.a.createElement("div",{className:"message-body has-text-centered"},l.a.createElement("h3",{className:"title"},t.name," & ",n.name))):l.a.createElement("div",{className:"column is-3 message"},l.a.createElement("div",{className:"message-header"},l.a.createElement("span",{className:"is-pulled-left"},"Team ",a+1),l.a.createElement("span",{className:"is-pulled-right"},t.kd)),l.a.createElement("div",{className:"message-body has-text-centered"},l.a.createElement("h3",{className:"title"},t.name)))},p=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={players:[{name:"Loading...",kd:0},{name:"Loading...",kd:0}]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.init({key:"10-zhbCvKemVlKJrqHGwjzBXVMylWLEQ6mGZOuFH38Kk",simpleSheet:!0}).then((function(a,t){console.log(a),e.setState({players:a})}))}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state.players.sort((function(e,a){return a.kd-e.kd})),a=e.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.kd))})),t=e.map((function(a,t){var n=e[e.length-1];return e.pop(),l.a.createElement(h,{index:t,player:a,currentLastPlayer:n,key:t})}));return l.a.createElement("div",{className:"App"},l.a.createElement("section",{className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-7-tablet is-6-desktop"},l.a.createElement("h2",{className:"title"},"Players"),l.a.createElement("table",{className:"table is-bordered is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Player"),l.a.createElement("th",null,"KD"))),l.a.createElement("tbody",null,a)))))),l.a.createElement("section",{className:"section teams-section"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"title"},"Teams"),l.a.createElement("div",{className:"columns is-multiline"},t))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.a10a6159.chunk.js.map