(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,7,8,9,15],{107:function(t,e,n){"use strict";n.r(e);var s=n(72),a=n(88),i=n(89),r=n(87),o={components:{Header:s.default,Index:a.default,Page:i.default,Post:r.default},computed:{type:function(){return this.$page.frontmatter.type},year:function(){return(new Date).getFullYear()}}},c=(n(85),n(0)),u=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Header"),this._v(" "),e("div",{staticClass:"container"},["index"===this.type?e("Index"):"post"===this.type?e("Post"):e("Page")],1),this._v(" "),e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[this._v("\n            Copyright © 2006 - "+this._s(this.year)+" Ivan Dokov. All rights reserved.\n        ")])])],1)}),[],!1,null,null,null);e.default=u.exports},11:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return l}));n(60),n(61),n(15),n(20),n(25),n(62),n(63),n(47);var s=n(18),a=function(t,e){var n=new Date(t.frontmatter.date).getTime();return new Date(e.frontmatter.date).getTime()-n};function i(t){return t.filter((function(t){return"post"===t.frontmatter.type}))}function r(t){return i(t).sort(a)}function o(t){var e={};return t.forEach((function(t){var n=t.path.match(/(\/[^\/]+\/)(.+)?$/);if(n&&t.frontmatter.type&&!(["index","post"].indexOf(t.frontmatter.type)<0)){var s=n[1];void 0===n[2]?(e[s]=e[s]||{pages:[]},e[s].page=t):(e[s]=e[s]||{pages:[]},e[s].pages.push(t)),e[s].pages.sort(a)}})),e}function c(t){var e=t.path.match(/^(\/([^\/]+)\/)/i),n=e[1],a=Object(s.b)(e[2]||"");return n[1]&&e[2]?{path:n,title:a}:null}function u(t,e){return r(t).find((function(t){return t.path===e}))}function l(t,e,n){var s=r(t),a=s.findIndex((function(t){return t.path===e.path}));return s[a+n]||null}},18:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));n(43),n(44);function s(t){var e=t.split(" ");return(e=e.map((function(t){return t[0].toUpperCase()+t.substr(1)}))).join(" ")}function a(){for(var t="6976616e406a6574737061726b2e696f",e=[],n=0;n<t.length;n+=2)e.push(String.fromCharCode(parseInt(t.substr(n,2),16)));return e.join("")}},19:function(t,e){e.f={}.propertyIsEnumerable},24:function(t,e,n){var s=n(9),a=n(31),i=n(16).f,r=n(34).f,o=n(45),c=n(46),u=s.RegExp,l=u,f=u.prototype,h=/a/g,p=/a/g,v=new u(h)!==h;if(n(7)&&(!v||n(13)((function(){return p[n(8)("match")]=!1,u(h)!=h||u(p)==p||"/a/i"!=u(h,"i")})))){u=function(t,e){var n=this instanceof u,s=o(t),i=void 0===e;return!n&&s&&t.constructor===u&&i?t:a(v?new l(s&&!i?t.source:t,e):l((s=t instanceof u)?t.source:t,s&&i?c.call(t):e),n?this:f,u)};for(var d=function(t){t in u||i(u,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},g=r(l),_=0;g.length>_;)d(g[_++]);f.constructor=u,u.prototype=f,n(21)(s,"RegExp",u)}n(35)("RegExp")},28:function(t,e,n){"use strict";n.r(e);n(15),n(59);var s=n(11),a={data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return!0},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.themeConfig,n=Object(s.f)(this.$site.pages),a=e.searchMaxSuggestions||5,i=this.$localePath,r=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},o=[],c=0;c<n.length&&!(o.length>=a);c++){var u=n[c];if(this.getPageLocalePath(u)===i)if(r(u))o.push(u);else if(u.headers)for(var l=0;l<u.headers.length&&!(o.length>=a);l++){var f=u.headers[l];r(f)&&o.push(Object.assign({},u,{path:u.path+"#"+f.slug,header:f}))}}return o}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},i=n(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box",class:{"has-suggestions":t.showSuggestions}},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false",placeholder:"Search ..."},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,s){return n("li",{staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"suggestion-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"suggestion-header"},[t._v(t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.default=r.exports},31:function(t,e,n){var s=n(10),a=n(32).set;t.exports=function(t,e,n){var i,r=e.constructor;return r!==n&&"function"==typeof r&&(i=r.prototype)!==n.prototype&&s(i)&&a&&a(t,i),t}},32:function(t,e,n){var s=n(10),a=n(14),i=function(t,e){if(a(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{(s=n(26)(Function.call,n(33).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:s(t,n),t}}({},!1):void 0),check:i}},33:function(t,e,n){var s=n(19),a=n(29),i=n(17),r=n(40),o=n(23),c=n(39),u=Object.getOwnPropertyDescriptor;e.f=n(7)?u:function(t,e){if(t=i(t),e=r(e,!0),c)try{return u(t,e)}catch(t){}if(o(t,e))return a(!s.f.call(t,e),t[e])}},34:function(t,e,n){var s=n(58),a=n(52).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return s(t,a)}},35:function(t,e,n){"use strict";var s=n(9),a=n(16),i=n(7),r=n(8)("species");t.exports=function(t){var e=s[t];i&&e&&!e[r]&&a.f(e,r,{configurable:!0,get:function(){return this}})}},36:function(t,e,n){var s=n(12),a=n(37)(!1);s(s.S,"Object",{values:function(t){return a(t)}})},37:function(t,e,n){var s=n(7),a=n(53),i=n(17),r=n(19).f;t.exports=function(t){return function(e){for(var n,o=i(e),c=a(o),u=c.length,l=0,f=[];u>l;)n=c[l++],s&&!r.call(o,n)||f.push(t?[n,o[n]]:o[n]);return f}}},38:function(t,e,n){"use strict";n.r(e);n(24),n(20),n(25),n(36);var s=n(28),a=n(11),i={components:{SearchBox:s.default},data:function(){return{smallScreen:!1,showNav:!0}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},computed:{allPostsCount:function(){return Object(a.e)(this.$site.pages).length},categories:function(){return Object.values(Object(a.a)(this.$site.pages))}},methods:{handleResize:function(){this.smallScreen=window.innerWidth<1100,this.showNav=!this.smallScreen},isActive:function(t){return this.$page.path.match(new RegExp("^".concat(t,".*")))}}},r=n(0),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar"},[n("div",{staticClass:"search-box-wrapper"},[n("SearchBox"),t._v(" "),t.smallScreen?n("div",{staticClass:"nav-button",on:{click:function(e){t.showNav=!t.showNav}}}):t._e()],1),t._v(" "),t.showNav?n("nav",{staticClass:"nav-links"},[n("div",{staticClass:"nav-item"},[n("router-link",{attrs:{to:"/"}},[n("span",[t._v("All posts")]),t._v(" "),n("span",{staticClass:"item-count"},[t._v(t._s(t.allPostsCount))])])],1),t._v(" "),t._l(t.categories,(function(e){return n("div",{key:e.page.path,staticClass:"nav-item"},[n("router-link",{class:{"router-link-exact-active":t.isActive(e.page.path)},attrs:{to:e.page.path}},[n("span",[t._v(t._s(e.page.title))]),t._v(" "),n("span",{staticClass:"item-count"},[t._v(t._s(e.pages.length))])])],1)}))],2):t._e()])}),[],!1,null,null,null);e.default=o.exports},54:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);n(15);var s=n(18),a={data:function(){return{emailHref:"#"}},mounted:function(){var t=this;setTimeout((function(){t.emailHref="mailto:".concat(Object(s.a)())}))},computed:{isViewingBlog:function(){return["index","post"].indexOf(this.$page.frontmatter.type)>=0}}},i=n(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 199.6 55.5"}},[n("path",{attrs:{fill:"#4385ef",d:"M15.2 55.5c-3.7-1-6.3-2.7-7.9-5S5 45.5 5 42.3v-5.8c0-1.9-.4-3.3-1.2-4.4-.8-1-2.1-1.6-3.8-1.6v-5.7c1.7 0 3-.5 3.8-1.5.8-1 1.2-2.4 1.2-4.3v-5.8c0-3.2.8-6 2.4-8.2 1.6-2.3 4.2-3.9 7.9-5l1.6 4.5c-1.6.6-2.7 1.6-3.4 3.1-.7 1.5-1 3.4-1 5.6V19c0 2-.4 3.7-1.3 5.2-.8 1.5-2.1 2.7-3.8 3.6 1.7.9 3 2.1 3.8 3.6.8 1.5 1.3 3.2 1.3 5.2v5.8c0 2.2.3 4.1 1 5.6s1.8 2.5 3.4 3.1l-1.7 4.4z"}}),n("path",{attrs:{fill:"#3F454C",d:"M21.7 48.3V7h14.2c5 0 9.2 1.6 12.5 4.8 3.3 3.2 4.9 7.4 4.9 12.4V31c0 5.1-1.6 9.2-4.9 12.4-3.3 3.2-7.4 4.8-12.5 4.8H21.7zM30 13.4v28.5h5.5c3 0 5.3-1 7-3 1.7-2 2.5-4.6 2.5-7.9v-6.9c0-3.2-.8-5.8-2.5-7.8s-4-3-7-3H30zM57.8 32.7c0-4.6 1.3-8.3 3.8-11.2 2.6-2.9 6.1-4.4 10.6-4.4s8.1 1.5 10.7 4.4 3.9 6.7 3.9 11.3v.6c0 4.6-1.3 8.4-3.8 11.3-2.6 2.9-6.1 4.4-10.6 4.4s-8.1-1.5-10.7-4.4c-2.6-2.9-3.8-6.7-3.8-11.3v-.7zm8.2.6c0 2.8.5 5 1.5 6.7 1 1.7 2.6 2.5 4.8 2.5 2.1 0 3.7-.9 4.7-2.5 1-1.7 1.5-3.9 1.5-6.7v-.6c0-2.7-.5-4.9-1.5-6.7-1-1.7-2.6-2.6-4.7-2.6s-3.7.9-4.7 2.6c-1 1.7-1.5 3.9-1.5 6.6v.7zM102.4 35.5h-2.3v12.9h-8.3V4h8.3v25.1h2l7.1-11.5h9.6L109 31.5l11.3 16.8h-9.5l-8.4-12.8zM121.7 32.7c0-4.6 1.3-8.3 3.8-11.2 2.6-2.9 6.1-4.4 10.6-4.4s8.1 1.5 10.7 4.4 3.9 6.7 3.9 11.3v.6c0 4.6-1.3 8.4-3.8 11.3-2.6 2.9-6.1 4.4-10.6 4.4s-8.1-1.5-10.7-4.4c-2.6-2.9-3.8-6.7-3.8-11.3v-.7zm8.3.6c0 2.8.5 5 1.5 6.7 1 1.7 2.6 2.5 4.8 2.5 2.1 0 3.7-.9 4.7-2.5 1-1.7 1.5-3.9 1.5-6.7v-.6c0-2.7-.5-4.9-1.5-6.7-1-1.7-2.6-2.6-4.7-2.6s-3.7.9-4.7 2.6c-1 1.7-1.5 3.9-1.5 6.6v.7zM166.4 36.9l.5 2.8h.2l.6-2.8 5-19.3h8.7L171 48.3h-8l-10.4-30.7h8.7l5.1 19.3z"}}),n("path",{attrs:{fill:"#4385ef",d:"M182.8 51c1.6-.6 2.7-1.6 3.4-3.1.7-1.5 1-3.4 1-5.6v-5.8c0-2 .4-3.7 1.3-5.2s2.2-2.7 4-3.5c-1.8-.9-3.1-2-4-3.6-.9-1.5-1.3-3.3-1.3-5.3v-5.8c0-2.2-.3-4.1-1-5.6s-1.8-2.5-3.4-3.1l1.6-4.5c3.7 1 6.3 2.7 7.9 5 1.6 2.3 2.4 5 2.4 8.2V19c0 1.9.4 3.4 1.2 4.4.8 1 2.1 1.5 3.8 1.5v5.7c-1.7 0-3 .5-3.8 1.6-.8 1-1.2 2.5-1.2 4.4v5.8c0 3.2-.8 6-2.4 8.3-1.6 2.3-4.2 3.9-7.9 5l-1.6-4.7z"}})])]),t._v(" "),n("router-link",{staticClass:"nav-link",class:{"router-link-exact-active":t.isViewingBlog},attrs:{to:"/"}},[t._v("Blog")]),t._v(" "),n("router-link",{staticClass:"nav-link",class:{"router-link-exact-active":"/about/"===t.$page.path},attrs:{to:"/about/"}},[t._v("About")]),t._v(" "),n("a",{staticClass:"nav-link icon",attrs:{href:"https://github.com/ivandokov",target:"_blank"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])]),t._v(" "),n("a",{staticClass:"nav-link icon",attrs:{href:"https://twitter.com/ivandokov",target:"_blank"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"}})])]),t._v(" "),n("a",{staticClass:"nav-link icon",attrs:{href:t.emailHref}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"}})])]),t._v(" "),n("a",{staticClass:"nav-link icon",attrs:{href:"/rss.xml"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.374 17c-.897 0-1.626-.727-1.626-1.624s.729-1.624 1.626-1.624 1.626.727 1.626 1.624-.729 1.624-1.626 1.624zm3.885 0c-.03-3.022-2.485-5.474-5.511-5.504v-2.406c4.361.03 7.889 3.555 7.92 7.91h-2.409zm4.081 0c-.016-5.297-4.303-9.571-9.592-9.594v-2.406c6.623.023 11.985 5.384 12 12h-2.408z"}})])])],1)])}),[],!1,null,null,null);e.default=r.exports},85:function(t,e,n){"use strict";var s=n(54);n.n(s).a},87:function(t,e,n){"use strict";n.r(e);var s=n(38),a=n(11),i={components:{Sidebar:s.default},computed:{category:function(){return Object(a.d)(this.$page)},prev:function(){var t=this.$page.frontmatter.prev;if(!1!==t)return t?Object(a.c)(this.$site.pages,t):Object(a.b)(this.$site.pages,this.$page,-1)},next:function(){var t=this.$page.frontmatter.next;if(!1!==t)return t?Object(a.c)(this.$site.pages,t):Object(a.b)(this.$site.pages,this.$page,1)}}},r=n(0),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-grid"},[n("Sidebar"),t._v(" "),n("main",{staticClass:"main"},[n("div",{staticClass:"content-body"},[n("Content")],1),t._v(" "),n("div",{staticClass:"post-meta"},[n("span",{staticClass:"post-category"},[t._v("In "),n("router-link",{attrs:{to:t.category.path}},[t._v(t._s(t.category.title))])],1),t._v(" "),n("span",{staticClass:"post-date"},[t._v(t._s(t.$page.frontmatter.date))])]),t._v(" "),t.prev||t.next?n("div",{staticClass:"prev-next"},[t.prev?n("div",{staticClass:"prev"},[n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[n("strong",[t._v(t._s(t.prev.title))])])],1):t._e(),t._v(" "),t.next?n("div",{staticClass:"next"},[n("router-link",{attrs:{to:t.next.path}},[n("strong",[t._v(t._s(t.next.title))])])],1):t._e()]):t._e()])],1)}),[],!1,null,null,null);e.default=o.exports},88:function(t,e,n){"use strict";n.r(e);n(24),n(20),n(47);var s=n(38),a=n(11),i={components:{Sidebar:s.default},data:function(){return{title:null}},computed:{items:function(){var t=this,e=Object(a.f)(this.$site.pages);return"/"!==this.$page.path&&(this.title=this.$page.title),e.filter((function(e){return e.path.match(new RegExp("^".concat(t.$page.path)))}))}},methods:{category:function(t){return Object(a.d)(t)}}},r=n(0),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-grid"},[n("Sidebar"),t._v(" "),n("main",{staticClass:"main"},[n("div",{staticClass:"content"},[n("div",{staticClass:"post-items"},t._l(t.items,(function(e,s){return n("section",{key:s,staticClass:"post-item"},[n("div",{staticClass:"post-item-info"},[n("h2",{staticClass:"post-title"},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("div",{staticClass:"post-meta"},[n("span",{staticClass:"post-category"},[t._v("In "),n("router-link",{attrs:{to:t.category(e).path}},[t._v(t._s(t.category(e).title))])],1),t._v(" "),n("span",{staticClass:"post-date"},[t._v(t._s(e.frontmatter.date))])]),t._v(" "),n("div",{staticClass:"post-excerpt",domProps:{innerHTML:t._s(e.frontmatter.excerpt)}})])])})),0)])])],1)}),[],!1,null,null,null);e.default=o.exports},89:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-grid"},[e("main",{staticClass:"main"},[e("div",{staticClass:"content-body"},[e("Content")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);