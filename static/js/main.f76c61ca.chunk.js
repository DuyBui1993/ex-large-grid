(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);for(var o=n(0),a=n.n(o),i=n(1),r=n.n(i),c=(n(14),n(3)),s=n(4),u=n(6),d=n(5),p=n(7),l=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"updateAttributes",value:function(t){var e=this;Object.keys(this.props).forEach(function(n){t&&e.props[n]===t[n]||(void 0!==e.grid.attributes[n]?e.grid.attributes[n]=t?t[n]:e.props[n]:e.grid[n]=t?t[n]:e.props[n])})}},{key:"componentWillReceiveProps",value:function(t){this.updateAttributes(t)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"componentWillUnmount",value:function(){this.grid.dispose()}},{key:"componentDidMount",value:function(){this.grid=r.a.findDOMNode(this),this.updateAttributes()}},{key:"render",value:function(){return a.a.createElement("canvas-datagrid",{})}}]),e}(a.a.Component),h=[],m=[],v=0;v<1e3;v++)m.push({name:"col_".concat(v+1)});h.length=1e6;var f=h,b=m;n(15);var w=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l,{style:{width:"100%",height:"100vh"},data:f,schema:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.f76c61ca.chunk.js.map