(this.webpackJsonpappreact=this.webpackJsonpappreact||[]).push([[0],{10:function(e,t,c){e.exports={contato:"Contato_contato__ut4Ry",dados:"Contato_dados__10o-w"}},14:function(e,t,c){e.exports={footer:"Footer_footer__303NP"}},20:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(13),a=c.n(o),r=(c(20),c(4)),i=c(2),j=c(14),d=c.n(j),l=c(1),u=function(){return Object(l.jsx)("footer",{className:d.a.footer,children:Object(l.jsx)("p",{children:"Alguns direitos reservados"})})},p=c(6),b=c.n(p),x=function(){return Object(l.jsx)("nav",{className:b.a.header,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{activeClassName:b.a.active,className:b.a.link,to:"/",end:!0,children:"Produtos"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{activeClassName:b.a.active,className:b.a.link,to:"contato",children:"Contato"})})]})})},h=c(5),m=c(9),O=c.n(m),f=function(e){return s.a.useEffect((function(){document.title=e.title,document.querySelector('meta[name="description"]').setAttribute("content",e.description)}),[e]),Object(l.jsx)(l.Fragment,{})},_=function(){var e=s.a.useState(null),t=Object(h.a)(e,2),c=t[0],n=t[1];return s.a.useEffect((function(){fetch("https://ranekapi.origamid.dev/json/api/produto").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),null===c?null:Object(l.jsxs)("section",{className:O.a.produtos+" animeLeft",children:[Object(l.jsx)(f,{title:"Ranek",description:"Descri\xe7\xe3o do site Ranek"}),c.map((function(e){return Object(l.jsxs)(r.b,{to:"produto/".concat(e.id),children:[Object(l.jsx)("img",{src:e.fotos[0].src,alt:e.fotos[0].titulo}),Object(l.jsx)("h1",{className:O.a.nome,children:e.nome})]},e.id)}))]})},v=c(10),N=c.n(v),k=c.p+"static/media/contato.1bd9bf2d.jpg",g=function(){return Object(l.jsxs)("section",{className:"".concat(N.a.contato," animeLeft"),children:[Object(l.jsx)(f,{title:"Ranek | Contato",description:"Emtre em contato"}),Object(l.jsx)("img",{src:k,alt:"M\xe1quina de escrever"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Entre em Contato"}),Object(l.jsxs)("ul",{className:N.a.dados,children:[Object(l.jsx)("li",{children:"Guilhermejesuslima@gmail.com"}),Object(l.jsx)("li",{children:"99999-9999"}),Object(l.jsx)("li",{children:"Rua Ali perto, 888"})]})]})]})},R=c(11),C=c.n(R),P=c(15),E=c(7),S=c.n(E),w=function(){var e=s.a.useState(null),t=Object(h.a)(e,2),c=t[0],n=t[1],o=s.a.useState(!1),a=Object(h.a)(o,2),r=a[0],j=a[1],d=s.a.useState(null),u=Object(h.a)(d,2),p=u[0],b=u[1],x=Object(i.h)().id;return s.a.useEffect((function(){function e(){return(e=Object(P.a)(C.a.mark((function e(t){var c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,n(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),b("Um erro ocorreu");case 14:return e.prev=14,j(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("https://ranekapi.origamid.dev/json/api/produto/".concat(x))}),[x]),r?Object(l.jsx)("div",{className:"loading"}):p?Object(l.jsx)("p",{children:p}):null===c?null:Object(l.jsxs)("section",{className:S.a.produto+" animeLeft",children:[Object(l.jsx)(f,{title:"Ranek | ".concat(c.nome),description:"Ranek | Esse \xe9 um produto: ".concat(c.nome)}),Object(l.jsxs)("div",{children:[" ",c.fotos.map((function(e){return Object(l.jsx)("img",{src:e.src,alt:e.titulo},e.src)}))]}),Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("h1",{children:c.nome}),Object(l.jsxs)("span",{className:S.a.preco,children:["R$ ",c.preco]}),Object(l.jsx)("p",{className:S.a.descricao,children:c.descricao})]})]})},y=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",element:Object(l.jsx)(_,{})}),Object(l.jsx)(i.a,{path:"produto/:id",element:Object(l.jsx)(w,{})}),Object(l.jsx)(i.a,{path:"contato",element:Object(l.jsx)(g,{})})]})}),Object(l.jsx)(u,{})]})})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))},6:function(e,t,c){e.exports={header:"Header_header__3hTFG",link:"Header_link__1o4rk",active:"Header_active__1TGjL"}},7:function(e,t,c){e.exports={produto:"Produto_produto__2vX_v",preco:"Produto_preco__3VnuY",descricao:"Produto_descricao__6RJCP"}},9:function(e,t,c){e.exports={produtos:"Produtos_produtos__28tDx",nome:"Produtos_nome__3m1Yf"}}},[[25,1,2]]]);
//# sourceMappingURL=main.0d747b42.chunk.js.map