(this.webpackJsonpvoyagesid=this.webpackJsonpvoyagesid||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){e.exports=a(67)},34:function(e,t,a){},35:function(e,t,a){},53:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/Copenhague.5120e473.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/prague.590a5b39.jpg"},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),l=(a(34),a(35),a(1)),c=a(2),o=a(4),d=a(3),m=a(28),u=a.n(m),p=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={city:"",Merci:"",type:"submit",disabled:!1},e.handleChange=function(t){e.setState({city:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a={city:e.state.city};u.a.post("https://voyagesid.firebaseio.com/city.json",a).then((function(t){console.log(t),e.setState({Merci:"Merci",type:"hidden",disabled:!0})})).catch((function(e){console.log(e)}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement("h2",{style:{textAlign:"center",color:"black",display:"flex",justifyContent:"center",fontFamily:"Lobster"}},"Quelle est votre destination pr\xe9f\xe9r\xe9e?"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form",style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("input",{style:{marginBottom:"1vh"},value:this.state.value,onChange:this.handleChange,className:"options",type:"text",placeholder:"ville"}),this.state.city?r.a.createElement("input",{type:this.state.type,value:"Envoyer",disabled:this.state.disabled,style:{color:"black",backgroundColor:"#0077ff",height:"5vh",borderRadius:"2vw",opacity:"0.9",marginTop:"1vh"}}):r.a.createElement("input",{type:this.state.type,value:"Envoyer",disabled:!this.state.disabled,style:{color:"black",opacity:"0.9",backgroundColor:"white",height:"5vh",borderRadius:"1vw",marginTop:"1vh"}})),r.a.createElement("p",{style:{display:"flex",justifyContent:"center",textAlign:"center",fontFamily:"Lobster",fontSize:"8vw",marginTop:"2vw"}},this.state.Merci?"Merci":null))}}]),a}(n.Component),h=(a(53),a(23).scroller),v=function(e){return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"VID"},r.a.createElement("h2",{className:"BigTitle"},"Voyages ID"),r.a.createElement("div",{className:"airplane"})),r.a.createElement("h1",{className:"Title",value:""},"Vous ne savez pas o\xf9 aller ?",r.a.createElement("br",null),"Vous avez un budget restreint ? ",r.a.createElement("br",null),"On vous informe de vols pas chers au d\xe9part de Paris et Marseille ! 1 offre par jour !"),r.a.createElement("div",{className:""},r.a.createElement("div",{className:"cont"},e.listRef.map((function(e,t){return r.a.createElement("span",{className:"cities",style:e.css,key:t,onClick:function(){return t=e.name,void h.scrollTo(t,{duration:1500,delay:100,smooth:!0});var t}},e.title)}))),r.a.createElement("div",{className:"contLink"},r.a.createElement("p",{className:"followUs"},"Suivez-nous sur "),r.a.createElement("a",{href:"https://www.instagram.com/voyagesid/?igshid=s0491mkenn9",className:"link"},"p")),r.a.createElement(p,null)))},f=(a(27),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"city"},"Destination: ",this.props.destination),r.a.createElement("p",{className:"date"},"Ville de D\xe9part : ",this.props.vd),r.a.createElement("p",{className:"date"},"A\xe9roport de D\xe9part : ",this.props.ad),r.a.createElement("p",{className:"date"},"A\xe9roport de Retour : ",this.props.ar),r.a.createElement("p",{className:"date"},"Vol Aller : ",this.props.dd," || Horaire : ",this.props.hd),r.a.createElement("p",{className:"date"},"Vol Retour : ",this.props.dr," || Horaire : ",this.props.hr),r.a.createElement("p",{className:"prix"},"PRIX: ",this.props.prix),r.a.createElement("a",{href:this.props.link,className:"linkToSky"},"J'y vais"))}}]),a}(n.Component)),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{style:this.props.style,className:"card-header"},r.a.createElement("h4",{className:"card-header--title"},"Voyages ID"))}}]),a}(n.Component),b=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={destination:"Copenhague",vd:"Paris",ad:"CDG",ar:"CDG",dd:"08/01/21",dr:"11/01/21",hd:"18h05",hr:"09h30",prix:"68\u20ac",image:a(64),link:"https://www.skyscanner.fr/transport/vols/pari/cope/210108/210111/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009141952*D*CDG*CPH*20210108*t2fr*EZY%7C202009141952*D*CPH*CDG*20210111*t2fr*EZY&qp_prevCurrency=EUR&qp_prevPrice=71&qp_prevProvider=ins_month&rtn=1"},e}return Object(c.a)(n,[{key:"render",value:function(){var e={backgroundImage:"url("+this.state.image+")"};return r.a.createElement("article",{className:"card"},r.a.createElement(y,{style:e}),r.a.createElement(f,{destination:this.state.destination,vd:this.state.vd,ad:this.state.ad,ar:this.state.ar,dd:this.state.dd,hd:this.state.hd,dr:this.state.dr,hr:this.state.hr,prix:this.state.prix,link:this.state.link}))}}]),n}(n.Component),E=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={destination:"Prague",vd:"Marseille",ad:"MRS",ar:"MRS",dd:"15/10/20",dr:"18/10/20",hd:"06h00",hr:"21h55",prix:"42\u20ac",image:a(65),link:"https://www.skyscanner.fr/transport/vols/mrs/prag/201015/201018/?adultsv2=1&cabinclass=economy&childrenv2=&inboundaltsenabled=false&outboundaltsenabled=false&preferdirects=false&priceSourceId=&priceTrace=202009161433*D*MRS*PRG*20201015*volo*V7%7C202009160648*D*PRG*MRS*20201018*volo*V7&qp_prevCurrency=EUR&qp_prevPrice=42&qp_prevProvider=ins_month&rtn=1"},e}return Object(c.a)(n,[{key:"render",value:function(){var e={backgroundImage:"url("+this.state.image+")"};return r.a.createElement("article",{className:"card"},r.a.createElement(y,{style:e}),r.a.createElement(f,{destination:this.state.destination,vd:this.state.vd,ad:this.state.ad,ar:this.state.ar,dd:this.state.dd,hd:this.state.hd,dr:this.state.dr,hr:this.state.hr,prix:this.state.prix,link:this.state.link}))}}]),n}(n.Component),g=(a(66),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"voyagesID"},"Voyages ID"),r.a.createElement("div",{className:"airplane"}),r.a.createElement("div",null,r.a.createElement("div",{className:"planeAnimation"})))}}]),a}(n.Component)),j=a(23).Element,k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={listRef:[{name:"Paris",title:"Paris"},{name:"Marseille",title:"Marseille"}]},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(v,{listRef:this.state.listRef}),r.a.createElement(j,{name:"Paris",className:"PRS"},r.a.createElement(b,null)),r.a.createElement(j,{name:"Marseille",className:"PRS"},r.a.createElement(E,null)))}}]),a}(n.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e315f788.chunk.js.map