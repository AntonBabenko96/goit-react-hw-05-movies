"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[943],{943:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(993),o=n(791),i=n(87),f=n(689),p=n(196),d="Trending_moviesList__leRja",v="Trending_moviesItem__JzWS0",h="Trending_posterList__ezIjJ",l="Trending_poster__ZNW7Q",m=n(184),w=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],w=(0,o.useState)(!1),x=(0,a.Z)(w,2),_=x[0],g=x[1],k=(0,f.TH)();return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,u.b.fetchTrendingMovies();case 4:t=e.sent,c(t.results),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:return e.prev=10,g(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,m.jsxs)("ul",{className:d,children:[_&&(0,m.jsx)(p.a,{}),n.map((function(e){var t=e.title,n=e.id,r=e.poster_path;return t?(0,m.jsx)("li",{className:h,children:(0,m.jsxs)(i.rU,{to:"/movies/".concat(n),className:v,state:{from:k},children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:t,className:l}),t]})},n):null}))]})},x=function(){return(0,m.jsxs)("div",{className:"section",children:[(0,m.jsx)("h2",{children:"Tranding for a week"}),(0,m.jsx)(w,{})]})}},993:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s=n(243),u="api_key=f2276557f452d5e4f3dac26aab188cd0",o="https://api.themoviedb.org/3",i={fetchTrendingMovies:function(){return(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("".concat(o,"/trending/all/week?").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"?").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},fetchSearchMovie:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/search/movie?query=").concat(e,"&").concat(u,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))()},fetchActorsCredits:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"/credits?").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("".concat(o,"/movie/").concat(e,"/reviews?").concat(u,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=943.25ba3a76.chunk.js.map