(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{70:function(e,a,t){e.exports=t(81)},75:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),i=(t(75),t(9)),o=t(38),m=t(20),s=t(3),d=(t(76),t(13)),u=t(144),p=t(145),h=t(124),g=t(148),b=t(152),E=t(116),f=t(43),x=t(140),w=function(){return[{id:0,checked:!1,fullname:"Admin User",about:"I am Admin Of the App",image:"",email:"admin@gmail.com",phone:"1231234567",company:"Work at Work",address:"Gotham City"},{id:1,checked:!1,fullname:"Karan Parmar",about:"Intern At Zuru Tech India pvt ltd",image:"brokenLink.png",email:"k123parmar@gmail",phone:"+91 8511918322",company:"ZURU Tech India",address:"Jivrajpark, Ahmedabad, Gujarat"},{id:2,checked:!1,fullname:"Elon Musk",about:"I build cool stuff",image:"https://i1.wp.com/smestreet.in/wp-content/uploads/2018/05/Elon-Musk-Tesla.gif?fit=300%2C225&ssl=1",email:"musk@tesla.com",phone:"124 421 8055",company:"Tesla Inc",address:"Mars nearby Earth"},{id:3,checked:!1,fullname:"Jeff Bezos",about:"I am that rich guy",image:"https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/dceff8665e34a7857ec00b211f98cd9f.png&quality=70&width=720",email:"bezos@amazon.com",phone:"",company:"Amazon Inc",address:"Washington"},{id:4,checked:!1,fullname:"Vrajpal Jhala",about:"Intern At ZURU Tech India pvt ltd",image:"",email:"vrajpaljhala@gmail.com",phone:"+91 1234512345",company:"ZURU Tech India",address:"Navrangpura, Ahmedabad, Gujarat"}]},k=t(47),v=t(119),C=t(121),y=t(118),j=t(150),O=t(120),N=t(113),S=function(e){var a,t={root:{display:"flex"},large:Object(i.a)({width:e.spacing(6),height:e.spacing(6),marginRight:e.spacing(2)},e.breakpoints.down("xs"),{marginRight:0}),larger:{width:e.spacing(10),height:e.spacing(10),margin:e.spacing(2)},backdrop:Object(i.a)({},e.breakpoints.down("sm"),{zIndex:e.zIndex.drawer-1,color:"black"}),active:{boxShadow:"inset 5px 0 0 0 white",background:"rgba(240,240,240,0.1)",color:"rgba(255,255,255,1)"},button:Object(i.a)({minWidth:"80px",maxWidth:"120px",textTransform:"none",fontSize:"110%",whiteSpace:"nowrap",minHeight:"48px"},e.breakpoints.down("sm"),{minWidth:"44px",maxWidth:"44px",minHeight:"44px",borderRadius:"50%"}),Checkbox:Object(i.a)({},e.breakpoints.down("xs"),{minWidth:"24px"}),btnEdit:{color:"black",position:"absolute",border:"3px solid white",right:"8%"},basicInfo:Object(i.a)({flex:"1 0 auto"},e.breakpoints.down(320),{overflow:"scroll",maxWidth:"130px",overflowWrap:"anywhere"}),contactField:{background:"transparent",position:"relative",top:"-4px",color:"black !important",padding:"0px 3px",fontSize:"larger"},detailCard:Object(i.a)({textAlign:"left",padding:"32px"},e.breakpoints.up("lg"),{marginLeft:"32px"}),searchbar:{background:"rgb(230, 230, 230)",display:"flex",borderRadius:25,padding:"0 12px 0",minWidth:"120px"},input:{marginLeft:e.spacing(1),flex:1},textWhite:{color:"rgba(255,255,255,0.9)"},bgSilver:{background:"rgb(230, 230, 230)",color:"rgb(128, 128, 128)"},bgGradient:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white",fontWeight:"bold"},appBar:{transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"white"},appBarShift:{marginLeft:220,width:"calc(100% - ".concat(220,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:29},hide:{display:"none"},drawer:{width:220,flexShrink:0,whiteSpace:"nowrap",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"},drawerOpen:{width:220,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"},drawerClose:Object(i.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:0,border:0},e.breakpoints.up("sm"),{width:e.spacing(8)+1}),toolbar:Object(k.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",paddingLeft:"90px",padding:e.spacing(0,1)},e.mixins.toolbar),mainContent:Object(i.a)({},e.breakpoints.down("xs"),{position:"absolute"}),removePadding:Object(i.a)({},e.breakpoints.down("xs"),{padding:"20px 0px !important"}),innerContent:(a={padding:"auto 0px"},Object(i.a)(a,e.breakpoints.up("sm"),{paddingLeft:"32px"}),Object(i.a)(a,e.breakpoints.down("sm"),{padding:"auto 0px auto"}),a),content:Object(i.a)({flexGrow:1,padding:e.spacing(3),margin:"20px"},e.breakpoints.down("xs"),{margin:"0px"})};return Object(N.a)((function(e){return t}))()};function W(e){var a=0,t=0,n="#";for(t=0;t<e.length;t+=1)a=e.charCodeAt(t)+((a<<5)-a);for(t=0;t<3;t+=1){n+="00".concat((a>>8*t&255).toString(16)).substr(-2)}return n}var A=function(e){var a=e.contact,t=e.editable,n=e.handleEdit,l=e.handleSave,c=Object(d.a)(),o=S(c),s=r.a.useState(a),u=Object(m.a)(s,2),p=u[0],h=u[1],g=function(e){console.log(p),h(Object(k.a)({},p,Object(i.a)({},e.target.name,e.target.value)))};return r.a.useEffect((function(){console.log(a.fullname)})),void 0!==a.id&&null!==a.id?r.a.createElement(E.a,{container:!0,item:!0,xs:12,justify:"center",className:"".concat(o.detailCard," ").concat(o.bgSilver)},t?r.a.createElement(r.a.Fragment,null):r.a.createElement(E.a,{item:!0,xs:12,style:{color:"red",textAlign:"right"}},r.a.createElement(y.a,{size:"medium",className:o.btnEdit,onClick:function(){return n()}},r.a.createElement(v.a,null))),r.a.createElement(E.a,{container:!0,item:!0,spacing:3},r.a.createElement(E.a,{container:!0,item:!0,xs:12,justify:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(j.a,{src:a.image,className:o.larger,style:{background:W(a.fullname)}},a.fullname.split(" ").map((function(e,a){return a<2?e[0]:""})))),r.a.createElement(E.a,{container:!0,item:!0,style:{textAlign:"center"}},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement("h1",{style:{lineHeight:1,color:"black",maxWidth:"100%",overflowWrap:"anywhere"}},a.fullname)),r.a.createElement(E.a,{item:!0,xs:12,style:{minHeight:"100px"}},a.about))),r.a.createElement(E.a,{container:!0,item:!0,xs:12},r.a.createElement(E.a,{item:!0,xs:4},"Full Name"),r.a.createElement(E.a,{item:!0,xs:8,className:"text-black"},r.a.createElement(O.a,{disableUnderline:!t,type:"text",className:o.contactField,value:a.fullname,name:"fullname",onChange:g,disabled:!t}))),r.a.createElement(E.a,{container:!0,item:!0,xs:12},r.a.createElement(E.a,{item:!0,xs:4},"Email"),r.a.createElement(E.a,{item:!0,xs:8,className:"text-black"},r.a.createElement(O.a,{disableUnderline:!t,type:"text",className:o.contactField,value:a.email,name:"email",onChange:g,disabled:!t}))),r.a.createElement(E.a,{container:!0,item:!0,xs:12},r.a.createElement(E.a,{item:!0,xs:4},"Phone"),r.a.createElement(E.a,{item:!0,xs:8,className:"text-black"},function(e){if(void 0!==e)return e.length>0?e:"No Informarion Provided"}(a.phone))),r.a.createElement(E.a,{container:!0,item:!0,xs:12},r.a.createElement(E.a,{item:!0,xs:4},"Company"),r.a.createElement(E.a,{item:!0,xs:8,className:"text-black"},a.company)),r.a.createElement(E.a,{container:!0,item:!0,xs:12},r.a.createElement(E.a,{item:!0,xs:4},"Address"),r.a.createElement(E.a,{item:!0,xs:8,className:"text-black"},a.address))),t?r.a.createElement(E.a,{item:!0,style:{margin:"24px auto 0px"}},r.a.createElement(y.a,{variant:"extended",size:"medium",color:"primary",onClick:function(){return l(p)}},r.a.createElement(C.a,null)," \xa0Save ")):r.a.createElement(r.a.Fragment,null)):r.a.createElement(r.a.Fragment,null)},I=t(122),z=t(123),F=t(127),B=t(128),D=t(146),U=t(130),L=t(132),P=t(134),R=t(149),G=t(125),T=t(126),H=t(129),J=t(131),M=t(133);function Z(e){var a=0,t=0,n="#";for(t=0;t<e.length;t+=1)a=e.charCodeAt(t)+((a<<5)-a);for(t=0;t<3;t+=1){n+="00".concat((a>>8*t&255).toString(16)).substr(-2)}return n}var q=function(e){var a=Object(d.a)(),t=S(a),n=r.a.useState(!1),l=Object(m.a)(n,2),c=l[0],o=l[1],s=r.a.useState(""),u=Object(m.a)(s,2),p=u[0],b=u[1];return r.a.useEffect((function(){o(e.data.every((function(e){return e.checked})))})),r.a.createElement(I.a,{style:{flexGrow:1},disablePadding:!0},r.a.createElement(z.a,{className:"bg-silver"},r.a.createElement(h.a,{edge:"start",disabled:e.wannaCreateNew,onClick:function(){e.handleSelectAll(!c),o(!c)}},c?r.a.createElement(G.a,null):r.a.createElement(T.a,null)),r.a.createElement(F.a,{primary:"Basic Info",style:{marginLeft:"32px"}}),r.a.createElement(g.a,{smDown:!0}," ",r.a.createElement(F.a,{primary:"Email",style:{display:"flex",justifyContent:"center"}})," ")),e.wannaCreateNew?r.a.createElement(z.a,null,r.a.createElement(B.a,null,r.a.createElement(y.a,{color:"primary",size:"medium",onClick:function(){e.addNewContact({id:e.data.length?e.data.reduce((function(e,a){return Math.max(e,a.id)}),e.data[0].id)+1:e.data.length,fullname:p,checked:!1}),b("")},disabled:!p.trim().length},r.a.createElement(H.a,null))),r.a.createElement(F.a,{primary:r.a.createElement(D.a,Object(i.a)({required:!0,value:p,label:"Full Name",InputProps:{startAdornment:r.a.createElement(U.a,{position:"start"},r.a.createElement(J.a,null))},onChange:function(e){b(e.target.value)},onKeyDown:function(a){13===a.keyCode&&p.trim().length&&(e.addNewContact({id:e.data.length?e.data.reduce((function(e,a){return Math.max(e,a.id)}),e.data[0].id)+1:e.data.length,fullname:p,checked:!1}),b(""))},placeholder:"Peter Parker",autoFocus:!0},"required",!0)),style:{margin:"10px 20px"}}),r.a.createElement(L.a,null,r.a.createElement(y.a,{color:"secondary",size:"medium",onClick:function(){return e.handleAdd(!1)}},r.a.createElement(M.a,null)))):r.a.createElement(r.a.Fragment,null),e.data.length?e.data.map((function(a,n){return r.a.createElement(r.a.Fragment,{key:n},r.a.createElement(z.a,{selected:e.activeContact.id===a.id,disabled:e.wannaCreateNew,onClick:function(){e.handleContactClick(a)},dense:!0,button:!0,key:n},r.a.createElement(P.a,{className:t.Checkbox},r.a.createElement(R.a,{edge:"start",disableRipple:!0,color:"primary",checked:a.checked,onClick:function(t){e.handleCheckedChange(a),t.stopPropagation()}})),r.a.createElement(B.a,null,r.a.createElement(j.a,{src:a.image,alt:a.fullname,className:t.large,style:{background:Z(a.fullname)}},a.fullname.split(" ").map((function(e,a){return a<2?e[0]:""})))),r.a.createElement(F.a,{primary:r.a.createElement("h3",{style:{lineHeight:"1",margin:"6px 0px",maxWidth:"10em",overflowWrap:"anywhere"}},a.fullname),secondary:r.a.createElement(g.a,{mdUp:!0},a.email?r.a.createElement("small",{style:{fontWeight:"600"}},a.email):r.a.createElement("small",null,"\xa0")),className:t.basicInfo}),r.a.createElement(g.a,{smDown:!0},r.a.createElement(F.a,{primary:r.a.createElement("h4",null,a.email)})," ")),e.activeContact.id===a.id?r.a.createElement(g.a,{lgUp:!0},r.a.createElement(A,{contact:e.activeContact,editable:e.editable,handleEdit:e.handleEdit,handleSave:e.handleSave})):r.a.createElement(r.a.Fragment,null))})):r.a.createElement("h3",{style:{color:"red"}},"NO CONTACTS FOUND !"))},K=t(84),X=t(136),V=t(135),$=t(137),Q=t(138),Y=function(e){var a=Object(d.a)(),t=S(a);return r.a.createElement(E.a,{container:!0,item:!0,xs:12,lg:6,className:Object(s.a)(t.removePadding)},r.a.createElement(E.a,{item:!0,xs:8,lg:!0},r.a.createElement("div",{className:t.searchbar},r.a.createElement(K.a,{className:t.input,type:"search",value:e.search,placeholder:"Search Contacts",onChange:e.onChange,disabled:e.wannaCreateNew,style:e.data.length?{}:{color:"red"}}),r.a.createElement(h.a,{type:"submit","aria-label":"search"},r.a.createElement(V.a,null)))),r.a.createElement(E.a,{container:!0,justify:"center",item:!0,xs:4,lg:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(X.a,{variant:"contained",className:Object(s.a)(t.button,t.bgGradient),size:"large",fullWidth:!0,disabled:e.wannaCreateNew,onClick:function(){return e.handleAdd(!0)}},r.a.createElement($.a,null),r.a.createElement(g.a,{smDown:!0}," \xa0Add "))),r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(X.a,{variant:"contained",className:Object(s.a)(t.button,t.bgGradient),size:"large",fullWidth:!0,onClick:e.handleDelete,disabled:!e.data.some((function(e){return e.checked}))||e.wannaCreateNew}," ",r.a.createElement(Q.a,null),r.a.createElement(g.a,{smDown:!0}," \xa0Delete \xa0 ")))))},_=t(151),ee=t(139),ae=t(141),te=t(142),ne=t(143),re=function(e){var a,t,n=e.open,l=Object(d.a)(),c=S(l);return r.a.createElement(_.a,{variant:"permanent",className:Object(s.a)(c.drawer,(a={},Object(i.a)(a,c.drawerOpen,n),Object(i.a)(a,c.drawerClose,!n),a)),classes:{paper:Object(s.a)(c.drawer,(t={},Object(i.a)(t,c.drawerOpen,n),Object(i.a)(t,c.drawerClose,!n),t))}},r.a.createElement("div",{className:c.toolbar},r.a.createElement(h.a,{onClick:e.handleDrawerClose},r.a.createElement(ee.a,{fontSize:"large"})),r.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",onClick:e.handleDrawerOpen,edge:"start",className:Object(s.a)(c.menuButton,c.textWhite,Object(i.a)({},c.hide,n))},r.a.createElement(x.a,{fontSize:"large"}))),r.a.createElement(I.a,{className:c.textWhite},r.a.createElement(z.a,{button:!0,className:c.active},r.a.createElement(P.a,{className:c.textWhite},r.a.createElement(ae.a,{fontSize:"large"})),r.a.createElement(F.a,{primary:"Local"})),r.a.createElement(z.a,{button:!0},r.a.createElement(P.a,{className:c.textWhite},r.a.createElement(te.a,{fontSize:"large"})),r.a.createElement(F.a,{primary:"Twitter"})),r.a.createElement(z.a,{button:!0},r.a.createElement(P.a,{className:c.textWhite},r.a.createElement(ne.a,{fontSize:"large"})),r.a.createElement(F.a,{primary:"GitHub"}))))},le=w();function ce(){var e=Object(d.a)(),a=S(e),t=r.a.useState(!1),n=Object(m.a)(t,2),l=n[0],c=n[1],w=r.a.useState(!1),k=Object(m.a)(w,2),v=k[0],C=k[1],y=r.a.useState({}),j=Object(m.a)(y,2),O=j[0],N=j[1],W=r.a.useState(le),I=Object(m.a)(W,2),z=I[0],F=I[1],B=r.a.useState(""),D=Object(m.a)(B,2),U=D[0],L=D[1],P=r.a.useState(!1),R=Object(m.a)(P,2),G=R[0],T=R[1],H=function(){c(!0)},J=function(e){var a=z;a.forEach((function(a){a.checked=e})),F(Object(o.a)(a))},M=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];N({}),J(!1),L(""),Z(""),T(e)},Z=function(e){F(Object(o.a)(le.filter(function(e){return function(a){return a.fullname.toLowerCase().includes(e.toLowerCase())}}(e))))},K=function(){C(!0)},X=function(e){console.dir(e),C(!1)};return r.a.useEffect((function(){console.log("Rendered")})),r.a.createElement("div",{className:a.root},r.a.createElement(re,{open:l,handleDrawerOpen:H,handleDrawerClose:function(){c(!1)}}),"}",r.a.createElement(u.a,{className:Object(s.a)(a.appBar,Object(i.a)({},a.appBarShift,l))},r.a.createElement(p.a,null,r.a.createElement(h.a,{"aria-label":"open drawer",onClick:H,edge:"start",className:Object(s.a)(a.menuButton,Object(i.a)({},a.hide,l))},r.a.createElement(x.a,{fontSize:"large"})))),r.a.createElement(g.a,{smUp:!0},r.a.createElement(b.a,{className:a.backdrop,open:l,onClick:function(){return c(!1)}})),r.a.createElement("main",{className:Object(s.a)(Object(i.a)({},a.mainContent,l),a.content)},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(E.a,{container:!0,spacing:5},r.a.createElement(E.a,{container:!0,item:!0,xs:12,alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:3,sm:2,md:1,style:{maxWidth:"48px",marginRight:"16px"}},r.a.createElement("i",{className:"fa fa-address-book fa-flip-horizontal fa-3x icon-gradient"})),r.a.createElement(E.a,{item:!0,xs:9,sm:10,md:11,className:"text-left"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"h4",component:"span"},"Contacts ")),r.a.createElement(g.a,{xsDown:!0},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(f.a,{variant:"subtitle1",component:"span",className:"text-silver"}," Welcome to InstaConnect"))))),r.a.createElement(E.a,{container:!0,item:!0,xs:12,justify:"center"},r.a.createElement(E.a,{container:!0,item:!0,xs:12,spacing:6,className:a.innerContent},r.a.createElement(Y,{data:z,search:U,onChange:function(e){N({}),Z(e.target.value),L(e.target.value)},handleDelete:function(){le=le.filter((function(e){return!e.checked})),F(Object(o.a)(le)),O.checked&&N({}),L("")},handleAdd:M,wannaCreateNew:G}),r.a.createElement(E.a,{container:!0,item:!0,xs:12,className:Object(s.a)(a.removePadding)},r.a.createElement(E.a,{item:!0,xs:12,lg:!0},r.a.createElement(q,{data:z,activeContact:O,editable:v,handleContactClick:function(e){N(e),C(!!v&&e.id===O.id)},handleCheckedChange:function(e){var a=z;a.forEach((function(a){a.checked=a.id===e.id?!e.checked:a.checked})),F(Object(o.a)(a))},handleSelectAll:J,handleAdd:M,handleEdit:K,handleSave:X,wannaCreateNew:G,addNewContact:function(e){le.push(e),F(Object(o.a)(le)),T(!1),N(e)}})),r.a.createElement(g.a,{mdDown:!0},r.a.createElement(E.a,{container:!0,item:!0,xs:12,lg:!0},r.a.createElement(A,{contact:O,editable:v,handleEdit:K,handleSave:X})))))))))}t(80);var ie=function(){return r.a.createElement("div",{className:"App",style:{fontFamily:'"Lucida Sans Unicode", "Lucida Grande", "sans-serif"'}},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.2ce35ff9.chunk.js.map