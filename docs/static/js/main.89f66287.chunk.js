(this["webpackJsonpevolution-teams"]=this["webpackJsonpevolution-teams"]||[]).push([[0],{169:function(e,t,a){e.exports=a(385)},174:function(e,t,a){},175:function(e,t,a){},191:function(e,t){},193:function(e,t){},224:function(e,t){},225:function(e,t){},269:function(e,t){},271:function(e,t){},294:function(e,t){},385:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),c=a(162),s=a.n(c),r=(a(174),a(175),a(163)),i=a(164),o=a(167),m=a(165),u=a(168),d=a(166),E=a.n(d),h=function(e){var t=e.index,a=e.player,n=e.currentLastPlayer;return n.name!==a.name?l.a.createElement("div",{className:"column is-3 message"},l.a.createElement("div",{className:"message-header"},l.a.createElement("span",{className:"is-pulled-left"},"Team ",t+1),l.a.createElement("span",{className:"is-pulled-right"},(a.kd+n.kd).toFixed(1)," combined")),l.a.createElement("div",{className:"message-body has-text-centered"},l.a.createElement("h3",{className:"title"},a.name," & ",n.name))):l.a.createElement("div",{className:"column is-3 message"},l.a.createElement("div",{className:"message-header"},l.a.createElement("p",null,"Team ",t+1)),l.a.createElement("div",{className:"message-body has-text-centered"},l.a.createElement("h3",{className:"title"},a.name)))},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={players:[{name:"Loading...",kd:0}]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){E.a.init({key:"2PACX-1vQ2LywYv9ZCcEj-BbFUtsn9DEQF5MxwDl5oUEADMHxEl2KhzqiqZRX6gua6NAv2Y7zrQ_j2ohtu-q9v",simpleSheet:!0}).then((function(e,t){this.setState({players:e})}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.state.players.sort((function(e,t){return t.kd-e.kd})),t=e.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.kd))})),a=e.map((function(t,a){var n=e[e.length-1];return e.pop(),l.a.createElement(h,{index:a,player:t,currentLastPlayer:n})}));return l.a.createElement("div",{className:"App"},l.a.createElement("section",{class:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"columns is-centered"},l.a.createElement("div",{className:"column is-7-tablet is-6-desktop"},l.a.createElement("h2",{className:"title"},"Players"),l.a.createElement("table",{class:"table is-bordered is-fullwidth"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Player"),l.a.createElement("th",null,"KD"))),l.a.createElement("tbody",null,t)))))),l.a.createElement("section",{class:"section teams-section"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"title"},"Teams"),l.a.createElement("div",{class:"columns is-multiline"},a))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.89f66287.chunk.js.map