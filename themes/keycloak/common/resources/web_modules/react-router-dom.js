import t from"./react.js";import{p as e}from"./common/index-3cf0d11f.js";var n=function(){};function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function r(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,o=n+1,r=t.length;o<r;n+=1,o+=1)t[n]=t[o];t.pop()}function a(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}function c(t,e){if(!t)throw new Error("Invariant failed")}function s(t){return"/"===t.charAt(0)?t:"/"+t}function u(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function l(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function f(t){var e=t.pathname,n=t.search,o=t.hash,r=e||"/";return n&&"?"!==n&&(r+="?"===n.charAt(0)?n:"?"+n),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function h(t,e,n,a){var c;"string"==typeof t?(c=function(t){var e=t||"/",n="",o="",r=e.indexOf("#");-1!==r&&(o=e.substr(r),e=e.substr(0,r));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(c=o({},t)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==e&&void 0===c.state&&(c.state=e));try{c.pathname=decodeURI(c.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(c.key=n),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(t,e){void 0===e&&(e="");var n,o=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&r(t),s=e&&r(e),u=c||s;if(t&&r(t)?a=o:o.length&&(a.pop(),a=a.concat(o)),!a.length)return"/";if(a.length){var p=a[a.length-1];n="."===p||".."===p||""===p}else n=!1;for(var l=0,f=a.length;f>=0;f--){var h=a[f];"."===h?i(a,f):".."===h?(i(a,f),l++):l&&(i(a,f),l--)}if(!u)for(;l--;l)a.unshift("..");!u||""===a[0]||a[0]&&r(a[0])||a.unshift("");var y=a.join("/");return n&&"/"!==y.substr(-1)&&(y+="/"),y}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function y(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every((function(e,o){return t(e,n[o])}));if("object"==typeof e||"object"==typeof n){var o=a(e),r=a(n);return o!==e||r!==n?t(o,r):Object.keys(Object.assign({},e,n)).every((function(o){return t(e[o],n[o])}))}return!1}(t.state,e.state)}function d(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,r){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(t){var n=!0;function o(){n&&t.apply(void 0,arguments)}return e.push(o),function(){n=!1,e=e.filter((function(t){return t!==o}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];e.forEach((function(t){return t.apply(void 0,n)}))}}}var v=!("undefined"==typeof window||!window.document||!window.document.createElement);function m(t,e){e(window.confirm(t))}function b(){try{return window.history.state||{}}catch(t){return{}}}function g(t){void 0===t&&(t={}),v||c(!1);var e,n=window.history,r=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),a=t,u=a.forceRefresh,y=void 0!==u&&u,g=a.getUserConfirmation,w=void 0===g?m:g,O=a.keyLength,x=void 0===O?6:O,P=t.basename?l(s(t.basename)):"";function j(t){var e=t||{},n=e.key,o=e.state,r=window.location,i=r.pathname+r.search+r.hash;return P&&(i=p(i,P)),h(i,o,n)}function E(){return Math.random().toString(36).substr(2,x)}var R=d();function T(t){o(N,t),N.length=n.length,R.notifyListeners(N.location,N.action)}function C(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||S(j(t.state))}function k(){S(j(b()))}var A=!1;function S(t){if(A)A=!1,T();else{R.confirmTransitionTo(t,"POP",w,(function(e){e?T({action:"POP",location:t}):function(t){var e=N.location,n=L.indexOf(e.key);-1===n&&(n=0);var o=L.indexOf(t.key);-1===o&&(o=0);var r=n-o;r&&(A=!0,q(r))}(t)}))}}var _=j(b()),L=[_.key];function M(t){return P+f(t)}function q(t){n.go(t)}var U=0;function W(t){1===(U+=t)&&1===t?(window.addEventListener("popstate",C),i&&window.addEventListener("hashchange",k)):0===U&&(window.removeEventListener("popstate",C),i&&window.removeEventListener("hashchange",k))}var H=!1;var N={length:n.length,action:"POP",location:_,createHref:M,push:function(t,e){var o=h(t,e,E(),N.location);R.confirmTransitionTo(o,"PUSH",w,(function(t){if(t){var e=M(o),i=o.key,a=o.state;if(r)if(n.pushState({key:i,state:a},null,e),y)window.location.href=e;else{var c=L.indexOf(N.location.key),s=L.slice(0,c+1);s.push(o.key),L=s,T({action:"PUSH",location:o})}else window.location.href=e}}))},replace:function(t,e){var o=h(t,e,E(),N.location);R.confirmTransitionTo(o,"REPLACE",w,(function(t){if(t){var e=M(o),i=o.key,a=o.state;if(r)if(n.replaceState({key:i,state:a},null,e),y)window.location.replace(e);else{var c=L.indexOf(N.location.key);-1!==c&&(L[c]=o.key),T({action:"REPLACE",location:o})}else window.location.replace(e)}}))},go:q,goBack:function(){q(-1)},goForward:function(){q(1)},block:function(t){void 0===t&&(t=!1);var e=R.setPrompt(t);return H||(W(1),H=!0),function(){return H&&(H=!1,W(-1)),e()}},listen:function(t){var e=R.appendListener(t);return W(1),function(){W(-1),e()}}};return N}var w={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+u(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:u,decodePath:s},slash:{encodePath:s,decodePath:s}};function O(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function x(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function P(t){window.location.replace(O(window.location.href)+"#"+t)}function j(t){void 0===t&&(t={}),v||c(!1);var e=window.history;window.navigator.userAgent.indexOf("Firefox");var n=t,r=n.getUserConfirmation,i=void 0===r?m:r,a=n.hashType,u=void 0===a?"slash":a,y=t.basename?l(s(t.basename)):"",b=w[u],g=b.encodePath,j=b.decodePath;function E(){var t=j(x());return y&&(t=p(t,y)),h(t)}var R=d();function T(t){o(N,t),N.length=e.length,R.notifyListeners(N.location,N.action)}var C=!1,k=null;function A(){var t,e,n=x(),o=g(n);if(n!==o)P(o);else{var r=E(),a=N.location;if(!C&&(e=r,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(k===f(r))return;k=null,function(t){if(C)C=!1,T();else{R.confirmTransitionTo(t,"POP",i,(function(e){e?T({action:"POP",location:t}):function(t){var e=N.location,n=M.lastIndexOf(f(e));-1===n&&(n=0);var o=M.lastIndexOf(f(t));-1===o&&(o=0);var r=n-o;r&&(C=!0,q(r))}(t)}))}}(r)}}var S=x(),_=g(S);S!==_&&P(_);var L=E(),M=[f(L)];function q(t){e.go(t)}var U=0;function W(t){1===(U+=t)&&1===t?window.addEventListener("hashchange",A):0===U&&window.removeEventListener("hashchange",A)}var H=!1;var N={length:e.length,action:"POP",location:L,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=O(window.location.href)),n+"#"+g(y+f(t))},push:function(t,e){var n=h(t,void 0,void 0,N.location);R.confirmTransitionTo(n,"PUSH",i,(function(t){if(t){var e=f(n),o=g(y+e);if(x()!==o){k=e,function(t){window.location.hash=t}(o);var r=M.lastIndexOf(f(N.location)),i=M.slice(0,r+1);i.push(e),M=i,T({action:"PUSH",location:n})}else T()}}))},replace:function(t,e){var n=h(t,void 0,void 0,N.location);R.confirmTransitionTo(n,"REPLACE",i,(function(t){if(t){var e=f(n),o=g(y+e);x()!==o&&(k=e,P(o));var r=M.indexOf(f(N.location));-1!==r&&(M[r]=e),T({action:"REPLACE",location:n})}}))},go:q,goBack:function(){q(-1)},goForward:function(){q(1)},block:function(t){void 0===t&&(t=!1);var e=R.setPrompt(t);return H||(W(1),H=!0),function(){return H&&(H=!1,W(-1)),e()}},listen:function(t){var e=R.appendListener(t);return W(1),function(){W(-1),e()}}};return N}function E(t,e,n){return Math.min(Math.max(t,e),n)}function R(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,i=void 0===r?["/"]:r,a=e.initialIndex,c=void 0===a?0:a,s=e.keyLength,u=void 0===s?6:s,p=d();function l(t){o(w,t),w.length=w.entries.length,p.notifyListeners(w.location,w.action)}function y(){return Math.random().toString(36).substr(2,u)}var v=E(c,0,i.length-1),m=i.map((function(t){return h(t,void 0,"string"==typeof t?y():t.key||y())})),b=f;function g(t){var e=E(w.index+t,0,w.entries.length-1),o=w.entries[e];p.confirmTransitionTo(o,"POP",n,(function(t){t?l({action:"POP",location:o,index:e}):l()}))}var w={length:m.length,action:"POP",location:m[v],index:v,entries:m,createHref:b,push:function(t,e){var o=h(t,e,y(),w.location);p.confirmTransitionTo(o,"PUSH",n,(function(t){if(t){var e=w.index+1,n=w.entries.slice(0);n.length>e?n.splice(e,n.length-e,o):n.push(o),l({action:"PUSH",location:o,index:e,entries:n})}}))},replace:function(t,e){var o=h(t,e,y(),w.location);p.confirmTransitionTo(o,"REPLACE",n,(function(t){t&&(w.entries[w.index]=o,l({action:"REPLACE",location:o}))}))},go:g,goBack:function(){g(-1)},goForward:function(){g(1)},canGo:function(t){var e=w.index+t;return e>=0&&e<w.entries.length},block:function(t){return void 0===t&&(t=!1),p.setPrompt(t)},listen:function(t){return p.appendListener(t)}};return w}var T=function(t,e,n,o,r,i,a,c){if(!t){var s;if(void 0===e)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,r,i,a,c],p=0;(s=new Error(e.replace(/%s/g,(function(){return u[p++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}},C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var S=function(e){function o(){var t,n;k(this,o);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n=A(this,e.call.apply(e,[this].concat(i))),n.state={match:n.computeMatch(n.props.history.location.pathname)},A(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.getChildContext=function(){return{router:C({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},o.prototype.computeMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}},o.prototype.componentWillMount=function(){var e=this,n=this.props,o=n.children,r=n.history;T(null==o||1===t.Children.count(o),"A <Router> may have only one child element"),this.unlisten=r.listen((function(){e.setState({match:e.computeMatch(r.location.pathname)})}))},o.prototype.componentWillReceiveProps=function(t){n(this.props.history===t.history)},o.prototype.componentWillUnmount=function(){this.unlisten()},o.prototype.render=function(){var e=this.props.children;return e?t.Children.only(e):null},o}(t.Component);S.propTypes={history:e.object.isRequired,children:e.node},S.contextTypes={router:e.object},S.childContextTypes={router:e.object.isRequired};var _=S;function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var q=function(e){function o(){var t,n;L(this,o);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n=M(this,e.call.apply(e,[this].concat(i))),n.history=g(n.props),M(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.componentWillMount=function(){n(!this.props.history)},o.prototype.render=function(){return t.createElement(_,{history:this.history,children:this.props.children})},o}(t.Component);q.propTypes={basename:e.string,forceRefresh:e.bool,getUserConfirmation:e.func,keyLength:e.number,children:e.node};var U=q;function W(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function H(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var N=function(e){function o(){var t,n;W(this,o);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n=H(this,e.call.apply(e,[this].concat(i))),n.history=j(n.props),H(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.componentWillMount=function(){n(!this.props.history)},o.prototype.render=function(){return t.createElement(_,{history:this.history,children:this.props.children})},o}(t.Component);N.propTypes={basename:e.string,getUserConfirmation:e.func,hashType:e.oneOf(["hashbang","noslash","slash"]),children:e.node};var I=N,$=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Y=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},D=function(e){function n(){var t,o;B(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=F(this,e.call.apply(e,[this].concat(i))),o.handleClick=function(t){if(o.props.onClick&&o.props.onClick(t),!t.defaultPrevented&&0===t.button&&!o.props.target&&!Y(t)){t.preventDefault();var e=o.context.router.history,n=o.props,r=n.replace,i=n.to;r?e.replace(i):e.push(i)}},F(o,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.render=function(){var e=this.props;e.replace;var n=e.to,o=e.innerRef,r=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["replace","to","innerRef"]);T(this.context.router,"You should not use <Link> outside a <Router>"),T(void 0!==n,'You must specify the "to" property');var i=this.context.router.history,a="string"==typeof n?h(n,null,null,i.location):n,c=i.createHref(a);return t.createElement("a",$({},r,{onClick:this.handleClick,href:c,ref:o}))},n}(t.Component);D.propTypes={onClick:e.func,target:e.string,replace:e.bool,to:e.oneOfType([e.string,e.object]).isRequired,innerRef:e.oneOfType([e.string,e.func])},D.defaultProps={replace:!1},D.contextTypes={router:e.shape({history:e.shape({push:e.func.isRequired,replace:e.func.isRequired,createHref:e.func.isRequired}).isRequired}).isRequired};var K=D;function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function V(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var G=function(e){function o(){var t,n;J(this,o);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n=V(this,e.call.apply(e,[this].concat(i))),n.history=R(n.props),V(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.componentWillMount=function(){n(!this.props.history)},o.prototype.render=function(){return t.createElement(_,{history:this.history,children:this.props.children})},o}(t.Component);G.propTypes={initialEntries:e.array,initialIndex:e.number,getUserConfirmation:e.func,keyLength:e.number,children:e.node};var z=G,Q=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},X=ft,Z=rt,tt=function(t,e){return at(rt(t,e),e)},et=at,nt=lt,ot=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function rt(t,e){for(var n,o=[],r=0,i=0,a="",c=e&&e.delimiter||"/";null!=(n=ot.exec(t));){var s=n[0],u=n[1],p=n.index;if(a+=t.slice(i,p),i=p+s.length,u)a+=u[1];else{var l=t[i],f=n[2],h=n[3],y=n[4],d=n[5],v=n[6],m=n[7];a&&(o.push(a),a="");var b=null!=f&&null!=l&&l!==f,g="+"===v||"*"===v,w="?"===v||"*"===v,O=n[2]||c,x=y||d;o.push({name:h||r++,prefix:f||"",delimiter:O,optional:w,repeat:g,partial:b,asterisk:!!m,pattern:x?st(x):m?".*":"[^"+ct(O)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&o.push(a),o}function it(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function at(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",pt(e)));return function(e,o){for(var r="",i=e||{},a=(o||{}).pretty?it:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var u,p=i[s.name];if(null==p){if(s.optional){s.partial&&(r+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(Q(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(u=a(p[l]),!n[c].test(u))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===l?s.prefix:s.delimiter)+u}}else{if(u=s.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!n[c].test(u))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+u+'"');r+=s.prefix+u}}else r+=s}return r}}function ct(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function st(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function ut(t,e){return t.keys=e,t}function pt(t){return t&&t.sensitive?"":"i"}function lt(t,e,n){Q(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,r=!1!==n.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=ct(c);else{var s=ct(c.prefix),u="(?:"+c.pattern+")";e.push(c),c.repeat&&(u+="(?:"+s+u+")*"),i+=u=c.optional?c.partial?s+"("+u+")?":"(?:"+s+"("+u+"))?":s+"("+u+")"}}var p=ct(n.delimiter||"/"),l=i.slice(-p.length)===p;return o||(i=(l?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=r?"$":o&&l?"":"(?="+p+"|$)",ut(new RegExp("^"+i,pt(n)),e)}function ft(t,e,n){return Q(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var o=0;o<n.length;o++)e.push({name:o,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return ut(t,e)}(t,e):Q(t)?function(t,e,n){for(var o=[],r=0;r<t.length;r++)o.push(ft(t[r],e,n).source);return ut(new RegExp("(?:"+o.join("|")+")",pt(n)),e)}(t,e,n):function(t,e,n){return lt(rt(t,n),e,n)}(t,e,n)}X.parse=Z,X.compile=tt,X.tokensToFunction=et,X.tokensToRegExp=nt;var ht={},yt=0,dt=function(t,e){var n=""+e.end+e.strict+e.sensitive,o=ht[n]||(ht[n]={});if(o[t])return o[t];var r=[],i={re:X(t,r,e),keys:r};return yt<1e4&&(o[t]=i,yt++),i},vt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];"string"==typeof e&&(e={path:e});var o=e,r=o.path,i=o.exact,a=void 0!==i&&i,c=o.strict,s=void 0!==c&&c,u=o.sensitive,p=void 0!==u&&u;if(null==r)return n;var l=dt(r,{end:a,strict:s,sensitive:p}),f=l.re,h=l.keys,y=f.exec(t);if(!y)return null;var d=y[0],v=y.slice(1),m=t===d;return a&&!m?null:{path:r,url:"/"===r&&""===d?"/":d,isExact:m,params:h.reduce((function(t,e,n){return t[e.name]=v[n],t}),{})}},mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function bt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function gt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var wt=function(e){return 0===t.Children.count(e)},Ot=function(e){function o(){var t,n;bt(this,o);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n=gt(this,e.call.apply(e,[this].concat(i))),n.state={match:n.computeMatch(n.props,n.context.router)},gt(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.getChildContext=function(){return{router:mt({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},o.prototype.computeMatch=function(t,e){var n=t.computedMatch,o=t.location,r=t.path,i=t.strict,a=t.exact,c=t.sensitive;if(n)return n;T(e,"You should not use <Route> or withRouter() outside a <Router>");var s=e.route,u=(o||s.location).pathname;return vt(u,{path:r,strict:i,exact:a,sensitive:c},s.match)},o.prototype.componentWillMount=function(){n(!(this.props.component&&this.props.render)),n(!(this.props.component&&this.props.children&&!wt(this.props.children))),n(!(this.props.render&&this.props.children&&!wt(this.props.children)))},o.prototype.componentWillReceiveProps=function(t,e){n(!(t.location&&!this.props.location)),n(!(!t.location&&this.props.location)),this.setState({match:this.computeMatch(t,e.router)})},o.prototype.render=function(){var e=this.state.match,n=this.props,o=n.children,r=n.component,i=n.render,a=this.context.router,c=a.history,s=a.route,u=a.staticContext,p={match:e,location:this.props.location||s.location,history:c,staticContext:u};return r?e?t.createElement(r,p):null:i?e?i(p):null:"function"==typeof o?o(p):o&&!wt(o)?t.Children.only(o):null},o}(t.Component);Ot.propTypes={computedMatch:e.object,path:e.string,exact:e.bool,strict:e.bool,sensitive:e.bool,component:e.func,render:e.func,children:e.oneOfType([e.func,e.node]),location:e.object},Ot.contextTypes={router:e.shape({history:e.object.isRequired,route:e.object.isRequired,staticContext:e.object})},Ot.childContextTypes={router:e.object.isRequired};var xt=Ot,Pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var Et=function(e){var n=e.to,o=e.exact,r=e.strict,i=e.location,a=e.activeClassName,c=e.className,s=e.activeStyle,u=e.style,p=e.isActive,l=e["aria-current"],f=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),h="object"===(void 0===n?"undefined":jt(n))?n.pathname:n,y=h&&h.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return t.createElement(xt,{path:y,exact:o,strict:r,location:i,children:function(e){var o=e.location,r=e.match,i=!!(p?p(r,o):r);return t.createElement(K,Pt({to:n,className:i?[c,a].filter((function(t){return t})).join(" "):c,style:i?Pt({},u,s):u,"aria-current":i&&l||null},f))}})};Et.propTypes={to:K.propTypes.to,exact:e.bool,strict:e.bool,location:e.object,activeClassName:e.string,className:e.string,activeStyle:e.object,style:e.object,isActive:e.func,"aria-current":e.oneOf(["page","step","location","date","time","true"])},Et.defaultProps={activeClassName:"active","aria-current":"page"};var Rt=Et;function Tt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ct(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var kt=function(t){function e(){return Tt(this,e),Ct(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.enable=function(t){this.unblock&&this.unblock(),this.unblock=this.context.router.history.block(t)},e.prototype.disable=function(){this.unblock&&(this.unblock(),this.unblock=null)},e.prototype.componentWillMount=function(){T(this.context.router,"You should not use <Prompt> outside a <Router>"),this.props.when&&this.enable(this.props.message)},e.prototype.componentWillReceiveProps=function(t){t.when?this.props.when&&this.props.message===t.message||this.enable(t.message):this.disable()},e.prototype.componentWillUnmount=function(){this.disable()},e.prototype.render=function(){return null},e}(t.Component);kt.propTypes={when:e.bool,message:e.oneOfType([e.func,e.string]).isRequired},kt.defaultProps={when:!0},kt.contextTypes={router:e.shape({history:e.shape({block:e.func.isRequired}).isRequired}).isRequired};var At=kt,St={},_t=0,Lt=function(t){var e=t,n=St[e]||(St[e]={});if(n[t])return n[t];var o=X.compile(t);return _t<1e4&&(n[t]=o,_t++),o},Mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===t)return t;var n=Lt(t);return n(e,{pretty:!0})},qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function Ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Wt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Ht=function(t){function e(){return Ut(this,e),Wt(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){T(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=h(t.to),o=h(this.props.to);y(e,o)?n(!1,"You tried to redirect to the same route you're currently on: \""+o.pathname+o.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,n=t.to;return e?"string"==typeof n?Mt(n,e.params):qt({},n,{pathname:Mt(n.pathname,e.params)}):n},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,n=this.computeTo(this.props);e?t.push(n):t.replace(n)},e.prototype.render=function(){return null},e}(t.Component);Ht.propTypes={computedMatch:e.object,push:e.bool,from:e.string,to:e.oneOfType([e.string,e.object]).isRequired},Ht.defaultProps={push:!1},Ht.contextTypes={router:e.shape({history:e.shape({push:e.func.isRequired,replace:e.func.isRequired}).isRequired,staticContext:e.object}).isRequired};var Nt=Ht,It=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};function $t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Bt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Ft=function(t){return"/"===t.charAt(0)?t:"/"+t},Yt=function(t,e){return t?It({},e,{pathname:Ft(t)+e.pathname}):e},Dt=function(t,e){if(!t)return e;var n=Ft(t);return 0!==e.pathname.indexOf(n)?e:It({},e,{pathname:e.pathname.substr(n.length)})},Kt=function(t){return"string"==typeof t?t:f(t)},Jt=function(t){return function(){T(!1,"You cannot %s with <StaticRouter>",t)}},Vt=function(){},Gt=function(e){function o(){var t,n;$t(this,o);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=n=Bt(this,e.call.apply(e,[this].concat(i))),n.createHref=function(t){return Ft(n.props.basename+Kt(t))},n.handlePush=function(t){var e=n.props,o=e.basename,r=e.context;r.action="PUSH",r.location=Yt(o,h(t)),r.url=Kt(r.location)},n.handleReplace=function(t){var e=n.props,o=e.basename,r=e.context;r.action="REPLACE",r.location=Yt(o,h(t)),r.url=Kt(r.location)},n.handleListen=function(){return Vt},n.handleBlock=function(){return Vt},Bt(n,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.getChildContext=function(){return{router:{staticContext:this.props.context}}},o.prototype.componentWillMount=function(){n(!this.props.history)},o.prototype.render=function(){var e=this.props,n=e.basename;e.context;var o=e.location,r=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["basename","context","location"]),i={createHref:this.createHref,action:"POP",location:Dt(n,h(o)),push:this.handlePush,replace:this.handleReplace,go:Jt("go"),goBack:Jt("goBack"),goForward:Jt("goForward"),listen:this.handleListen,block:this.handleBlock};return t.createElement(_,It({},r,{history:i}))},o}(t.Component);Gt.propTypes={basename:e.string,context:e.object.isRequired,location:e.oneOfType([e.string,e.object])},Gt.defaultProps={basename:"",location:"/"},Gt.childContextTypes={router:e.object.isRequired};var zt=Gt;function Qt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Zt=function(e){function o(){return Qt(this,o),Xt(this,e.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),o.prototype.componentWillMount=function(){T(this.context.router,"You should not use <Switch> outside a <Router>")},o.prototype.componentWillReceiveProps=function(t){n(!(t.location&&!this.props.location)),n(!(!t.location&&this.props.location))},o.prototype.render=function(){var e=this.context.router.route,n=this.props.children,o=this.props.location||e.location,r=void 0,i=void 0;return t.Children.forEach(n,(function(n){if(null==r&&t.isValidElement(n)){var a=n.props,c=a.path,s=a.exact,u=a.strict,p=a.sensitive,l=a.from,f=c||l;i=n,r=vt(o.pathname,{path:f,exact:s,strict:u,sensitive:p},e.match)}})),r?t.cloneElement(i,{location:o,computedMatch:r}):null},o}(t.Component);Zt.contextTypes={router:e.shape({route:e.object.isRequired}).isRequired},Zt.propTypes={children:e.node,location:e.object};var te=Zt,ee={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ne={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oe=Object.defineProperty,re=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,ae=Object.getOwnPropertyDescriptor,ce=Object.getPrototypeOf,se=ce&&ce(Object);var ue=function t(e,n,o){if("string"!=typeof n){if(se){var r=ce(n);r&&r!==se&&t(e,r,o)}var i=re(n);ie&&(i=i.concat(ie(n)));for(var a=0;a<i.length;++a){var c=i[a];if(!(ee[c]||ne[c]||o&&o[c])){var s=ae(n,c);try{oe(e,c,s)}catch(t){}}}return e}return e},pe=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};var le=function(n){var o=function(e){var o=e.wrappedComponentRef,r=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(e,["wrappedComponentRef"]);return t.createElement(xt,{children:function(e){return t.createElement(n,pe({},r,e,{ref:o}))}})};return o.displayName="withRouter("+(n.displayName||n.name)+")",o.WrappedComponent=n,o.propTypes={wrappedComponentRef:e.func},ue(o,n)};export{U as BrowserRouter,I as HashRouter,K as Link,z as MemoryRouter,Rt as NavLink,At as Prompt,Nt as Redirect,xt as Route,_ as Router,zt as StaticRouter,te as Switch,Mt as generatePath,vt as matchPath,le as withRouter};
//# sourceMappingURL=react-router-dom.js.map
