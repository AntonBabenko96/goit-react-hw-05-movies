"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{122:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),o=r(196),i=r(993),f=r(87),p="SearchBar_btn__PKGSc",h="SearchBar_input__bIy50",l=r(184),v=function(e){var t=e.onSubmit,r=(0,u.useState)(""),n=(0,a.Z)(r,2),c=n[0],s=n[1],o=function(){s("")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("header",{children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),o()},children:[(0,l.jsx)("button",{type:"submit",className:p,children:(0,l.jsx)("span",{children:"Search"})}),(0,l.jsx)("input",{name:"search",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",className:h})]})})})},m="SearchMovies_moviesList__Ye5rj",d="SearchMovies_moviesItem__5KuiV",x="SearchMovies_posterList__GKitp",_="SearchMovies_poster__QXJnf",b=r(689),w=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],p=(0,u.useState)(!1),h=(0,a.Z)(p,2),w=h[0],S=h[1],g=(0,f.lr)(),j=(0,a.Z)(g,2),k=j[0],Z=j[1],M=k.get("search"),y=(0,b.TH)();(0,u.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,i.b.fetchSearchMovie(M);case 4:t=e.sent,c(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,S(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})))).apply(this,arguments)}M&&function(){e.apply(this,arguments)}()}),[M]);return(0,l.jsxs)("div",{className:"section",children:[(0,l.jsx)(v,{onSubmit:function(e){Z({search:e})}}),w&&(0,l.jsx)(o.a,{}),M?!w&&0===r.length&&(0,l.jsxs)("p",{children:['There are no results for the request "',M,'". Enter the correct one value.']}):"",(0,l.jsx)("ul",{className:m,children:r.map((function(e){var t=e.title,r=e.id,n=e.poster_path;return t&&n?(0,l.jsx)("li",{className:x,children:(0,l.jsxs)(f.rU,{to:"/movies/".concat(r),className:d,state:{from:y},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t,className:_}),t]})},r):null}))})]})}},993:function(e,t,r){r.d(t,{b:function(){return i}});var n=r(861),a=r(757),c=r.n(a),s=r(243),u="api_key=f2276557f452d5e4f3dac26aab188cd0",o="https://api.themoviedb.org/3",i={fetchTrendingMovies:function(){return(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("".concat(o,"/trending/all/week?").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"?").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchSearchMovie:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/search/movie?query=").concat(e,"&").concat(u,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))()},fetchActorsCredits:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"/credits?").concat(u));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"/reviews?").concat(u,"&language=en-US&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=122.1b4ca1d3.chunk.js.map