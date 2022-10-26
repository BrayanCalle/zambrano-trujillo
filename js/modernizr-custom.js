/*! modernizr 3.6.0 (Custom Build) | MIT *
* https://modernizr.com/download/?-webp-setclasses !*/ !function(A,n,e){function a(A){var n=c.className,e=l._config.classPrefix||"";if(p&&(n=n.baseVal),l._config.enableJSClass){var a=RegExp("(^|\\s)"+e+"no-js(\\s|$)");n=n.replace(a,"$1"+e+"js$2")}l._config.enableClasses&&(n+=" "+e+A.join(" "+e),p?c.className.baseVal=n:c.className=n)}function o(A,n){return typeof A===n}function t(A,n){if("object"==typeof A)for(var e in A)f(A,e)&&t(e,A[e]);else{var o=(A=A.toLowerCase()).split("."),i=l[o[0]];if(2==o.length&&(i=i[o[1]]),void 0!==i)return l;n="function"==typeof n?n():n,1==o.length?l[o[0]]=n:(!l[o[0]]||l[o[0]]instanceof Boolean||(l[o[0]]=new Boolean(l[o[0]])),l[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),l._trigger(A,n)}return l}var i=[],s=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,n){var e=this;setTimeout(function(){n(e[A])},0)},addTest:function(A,n,e){s.push({name:A,fn:n,options:e})},addAsyncTest:function(A){s.push({name:null,fn:A})}},l=function(){};l.prototype=r,l=new l;var f,u,c=n.documentElement,p="svg"===c.nodeName.toLowerCase();f=o(u=({}).hasOwnProperty,"undefined")||o(u.call,"undefined")?function(A,n){return n in A&&o(A.constructor.prototype[n],"undefined")}:function(A,n){return u.call(A,n)},r._l={},r.on=function(A,n){this._l[A]||(this._l[A]=[]),this._l[A].push(n),l.hasOwnProperty(A)&&setTimeout(function(){l._trigger(A,l[A])},0)},r._trigger=function(A,n){if(this._l[A]){var e=this._l[A];setTimeout(function(){var A,a;for(A=0;A<e.length;A++)(a=e[A])(n)},0),delete this._l[A]}},l._q.push(function(){r.addTest=t}),l.addAsyncTest(function(){function A(A,n,e){function a(n){var a=!!n&&"load"===n.type&&1==o.width;t(A,"webp"===A&&a?new Boolean(a):a),e&&e(n)}var o=new Image;o.onerror=a,o.onload=a,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"},],e=n.shift();A(e.name,e.uri,function(e){if(e&&"load"===e.type)for(var a=0;a<n.length;a++)A(n[a].name,n[a].uri)})}),function A(){var n,e,a,t,r,f,u;for(var c in s)if(s.hasOwnProperty(c)){if(n=[],(e=s[c]).name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(a=0;a<e.options.aliases.length;a++)n.push(e.options.aliases[a].toLowerCase());for(t=o(e.fn,"function")?e.fn():e.fn,r=0;r<n.length;r++)1===(u=(f=n[r]).split(".")).length?l[u[0]]=t:(!l[u[0]]||l[u[0]]instanceof Boolean||(l[u[0]]=new Boolean(l[u[0]])),l[u[0]][u[1]]=t),i.push((t?"":"no-")+u.join("-"))}}(),a(i),delete r.addTest,delete r.addAsyncTest;for(var d=0;d<l._q.length;d++)l._q[d]();A.Modernizr=l}(window,document);