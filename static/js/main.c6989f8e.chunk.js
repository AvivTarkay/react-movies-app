(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(9),i=n.n(s),o=(n(15),n(3)),u=n.n(o),j=n(4),l=n(2),b="1241f3581f3481e4a98c83e83079d1e8",h="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=".concat(b,"&page="),d="https://api.themoviedb.org/3/search/movie?&api_key=".concat(b,"&query="),p="https://api.themoviedb.org/3/search/tv?api_key=".concat(b,"&&query="),v="https://api.themoviedb.org/3/tv/popular?api_key=".concat(b,"&language=en-US&page="),f=Object(r.createContext)(),O=function(e){var t=e.children,n=Object(r.useState)(!0),a=Object(l.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(1),O=Object(l.a)(o,2),x=O[0],g=O[1],m=Object(r.useState)("Popular-Movies"),w=Object(l.a)(m,2),y=w[0],S=w[1],k=Object(r.useState)([]),N=Object(l.a)(k,2),P=N[0],C=N[1],M=Object(r.useState)([]),T=Object(l.a)(M,2),L=T[0],_=T[1],H=Object(r.useState)(""),E=Object(l.a)(H,2),A=E[0],F=E[1],I=Object(r.useState)(""),B=Object(l.a)(I,2),K=B[0],R=B[1],U=Object(r.useState)(!0),q=Object(l.a)(U,2),D=q[0],G=q[1],J=Object(r.useState)(!0),Y=Object(l.a)(J,2),z=Y[0],Q=Y[1],V=Object(r.useState)([]),W=Object(l.a)(V,2),X=W[0],Z=W[1],$=Object(r.useState)([]),ee=Object(l.a)($,2),te=ee[0];ee[1];function ne(){return(ne=Object(j.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==A.trim()&&""!==K.trim()){e.next=3;break}return e.abrupt("return");case 3:if("Popular-Movies"!==y){e.next=9;break}return e.next=6,fetch("".concat(d).concat(A));case 6:n=e.sent,e.next=12;break;case 9:return e.next=11,fetch("".concat(p).concat(K));case 11:n=e.sent;case 12:return e.next=14,n.json();case 14:c=e.sent,"Popular-Movies"===y?C(c.results):_(c.results);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h).concat(x));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,"https://api.themoviedb.org/3/movie/",n="/videos?api_key=".concat(b,"&language=en-US"),t.results.forEach(function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t.id).concat(n));case 2:return e.next=4,e.sent.json();case 4:c=e.sent,t.trailer=c.results;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),""===A.trim()&&(C(t.results),Q(!0));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A,x]),Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(x));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,"https://api.themoviedb.org/3/tv/",n="/season/1/videos?api_key=".concat(b,"&language=en-US"),t.results.forEach(function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3/tv/").concat(t.id).concat(n));case 2:return e.next=4,e.sent.json();case 4:c=e.sent,t.trailer=c.results;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),""===K.trim()&&(_(t.results),Q(!0));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[K,x]),Object(r.useEffect)((function(){var e=setTimeout((function(){G(!1)}),1300);return function(){clearTimeout(e)}}),[P,L,x]);return Object(c.jsx)(f.Provider,{value:{hiddenMenu:s,setHiddenMenu:i,activeLink:y,setActiveLink:S,popularMovies:P,currentPage:x,setCurrentPage:g,searchMovie:A,searchTvShow:K,setSearchMovie:F,HandleOnSubmit:function(e){return ne.apply(this,arguments)},HandlerOnChange:function(e){F(e.target.value)||R(e.target.value)},popularTvShow:L,pageLoading:D,setPageLoading:G,showPagination:z,setShowPagination:Q,newPage:function(e){"next"===e?(g((function(e){return e+1})),G(!0)):"previous"===e&&1!==x&&g((function(e){return e-1}))},trailersKey:X,setTrailersKey:Z,seriesTrailer:te},children:t})},x=function(e){var t=e.btnText,n=Object(r.useContext)(f),a=n.setHiddenMenu,s=n.activeLink,i=n.setActiveLink;return Object(c.jsx)("button",{onClick:function(){i(t),a(!0)},style:{color:s===t?"#024edd":"#fff"},className:"btnStyle",children:t})},g=function(){var e=Object(r.useContext)(f).hiddenMenu;return Object(c.jsxs)("div",{className:(e?"hidden":"")+"SiteNavMenu",children:[Object(c.jsx)(x,{btnText:"Popular-Movies"}),Object(c.jsx)(x,{btnText:"Popular-TvShows"})]})};function m(){var e=Object(r.useContext)(f),t=e.searchTvShow,n=e.HandleOnSubmit,a=e.HandlerOnChange;return Object(c.jsx)("form",{onSubmit:n,className:"formSubmit",children:Object(c.jsx)("input",{className:"searchNav",type:"text",placeholder:"search...",value:t,onChange:a})})}var w=function(){var e=Object(r.useContext)(f),t=e.hiddenMenu,n=e.setHiddenMenu;return Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(g,{}),Object(c.jsx)(m,{}),Object(c.jsx)("i",{onClick:function(){return n(!t)},id:"burgerMenu",className:t?"fa fa-bars":"fa fa-times"})]})})},y=function(e){var t=e.children;return Object(c.jsx)("div",{className:"container",children:t})},S=n(5);function k(e){var t,n,r=e.overview,a=e.poster_path,s=e.title,i=e.vote_average,o=e.name,u=e.trailer;return console.log(u),Object(c.jsxs)("div",{className:"movies",children:[Object(c.jsx)("img",{src:a?"".concat("https://images.tmdb.org/t/p/w1280").concat(a):"./defaultIMG.jpeg",alt:s||o,className:"mainImg"}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("h4",{children:s||o}),Object(c.jsx)("span",{className:"tag ".concat((n=i,n>=8?"Green":n>=6?"Orange":"Red")),children:i})]}),Object(c.jsxs)("div",{className:"movie_review",children:[Object(c.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(null===(t=u[0])||void 0===t?void 0:t.key),target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{src:"./youtube.png",alt:"Youtube",className:"youtube"})}),Object(c.jsx)("p",{children:r})]})]})}var N=function(){return Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("img",{src:"../loading_12.gif",alt:"Loading"})})};function P(){var e=Object(r.useContext)(f),t=e.popularMovies,n=(e.trailersKey,e.pageLoading);return Object(c.jsxs)(y,{children:[0===t.length&&Object(c.jsx)("h1",{className:"error",children:"Results not found"}),n?Object(c.jsx)(N,{}):t.length>0&&a.a.Children.toArray(t.map((function(e){return Object(c.jsx)(k,Object(S.a)({},e))})))]})}function C(){var e=Object(r.useContext)(f),t=e.popularTvShow,n=e.pageLoading,s=e.seriesTrailer;return console.log("TvPopular =>seriesTrailer ",s),Object(c.jsx)("div",{className:"popularTvShows",children:Object(c.jsxs)(y,{children:[0===t.length&&Object(c.jsx)("h1",{className:"error",children:"Results not found"}),n?Object(c.jsx)(N,{}):t.length>0&&a.a.Children.toArray(t.map((function(e){return Object(c.jsx)(k,Object(S.a)({},e))})))]})})}var M=function(){var e=Object(r.useContext)(f),t=e.newPage,n=e.currentPage,a=e.showPagination;return Object(c.jsx)("div",{className:"moviePagination",children:a&&Object(c.jsxs)(y,{children:[Object(c.jsx)("button",{className:"directionBtn",style:{cursor:1!==n?"pointer":"not-allowed",background:1!==n?"#024edd":"#303847"},onClick:function(){return t("previous")},children:"Prev Page"}),Object(c.jsx)("button",{onClick:function(){return t("next")},children:"Next Page"})]})})};function T(){var e=Object(r.useContext)(f).activeLink;return Object(c.jsxs)("div",{className:"outputApi",children:["Popular-Movies"===e&&Object(c.jsxs)(y,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(M,{})]}),"Popular-TvShows"===e&&Object(c.jsxs)(y,{children:[Object(c.jsx)(C,{}),Object(c.jsx)(M,{})]})]})}var L=function(){return Object(c.jsxs)("section",{className:"MySite",children:[Object(c.jsx)(w,{}),Object(c.jsx)(T,{})]})};n(17);function _(){return Object(c.jsx)(O,{children:Object(c.jsx)(L,{})})}n(7).config();var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(7).config(),i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),H()}},[[20,1,2]]]);
//# sourceMappingURL=main.c6989f8e.chunk.js.map