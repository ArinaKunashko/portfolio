import{p as z,m as T,b as B,g as V,u as Se,d as R,a as n,e as ae,f as we,h as x,i as Xe,j as ne,_ as $e,k as D,o as h,c as C,w as g,l as b,t as f,n as k,q as o,s as Je,v as Ze,x as et,I as N,y as Ve,z as Oe,A as te,B as tt,C as Ie,D as se,E as Pt,F as lt,G as at,H as oe,J as Dt,K as Te,L as zt,R as Lt,M as Ae,N as nt,O as Rt,P as st,Q as Pe,S as De,T as jt,U as ot,W as it,X as ze,Y as Nt,Z as ct,$ as rt,a0 as ut,a1 as Bt,a2 as Et,a3 as ke,a4 as H,a5 as ie,a6 as ce,a7 as re,a8 as U,a9 as ue,aa as M,ab as K,ac as W,ad as S,ae as Ft,af as Mt,ag as Ot,ah as Gt,ai as F,aj as Ge,ak as Ht,al as He,am as Ce,an as Ut,ao as Kt,ap as Wt,aq as qt,ar as Yt,as as ee,at as dt,au as Qt,av as J,aw as Xt,ax as Jt,ay as Zt,az as el,aA as Z}from"./index-f5045b40.js";const tl="/assets/PhotoForMobile-ef3ff337.png",ll="/assets/Subject-d519a6f2.png";const al=z({fluid:{type:Boolean,default:!1},...T(),...B()},"VContainer"),nl=V()({name:"VContainer",props:al(),setup(e,s){let{slots:t}=s;const{rtlClasses:l}=Se();return R(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},l.value,e.class],style:e.style},t)),{}}}),ft=(()=>ae.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),vt=(()=>ae.reduce((e,s)=>{const t="offset"+we(s);return e[t]={type:[String,Number],default:null},e},{}))(),mt=(()=>ae.reduce((e,s)=>{const t="order"+we(s);return e[t]={type:[String,Number],default:null},e},{}))(),Ue={col:Object.keys(ft),offset:Object.keys(vt),order:Object.keys(mt)};function sl(e,s,t){let l=e;if(!(t==null||t===!1)){if(s){const i=s.replace(e,"");l+=`-${i}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const ol=["auto","start","end","center","baseline","stretch"],il=z({cols:{type:[Boolean,String,Number],default:!1},...ft,offset:{type:[String,Number],default:null},...vt,order:{type:[String,Number],default:null},...mt,alignSelf:{type:String,default:null,validator:e=>ol.includes(e)},...T(),...B()},"VCol"),le=V()({name:"VCol",props:il(),setup(e,s){let{slots:t}=s;const l=x(()=>{const i=[];let d;for(d in Ue)Ue[d].forEach(u=>{const a=e[u],c=sl(d,u,a);c&&i.push(c)});const r=i.some(u=>u.startsWith("v-col-"));return i.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),i});return()=>{var i;return Xe(e.tag,{class:[l.value,e.class],style:e.style},(i=t.default)==null?void 0:i.call(t))}}}),Le=["start","end","center"],ht=["space-between","space-around","space-evenly"];function Re(e,s){return ae.reduce((t,l)=>{const i=e+we(l);return t[i]=s(),t},{})}const cl=[...Le,"baseline","stretch"],gt=e=>cl.includes(e),yt=Re("align",()=>({type:String,default:null,validator:gt})),rl=[...Le,...ht],_t=e=>rl.includes(e),xt=Re("justify",()=>({type:String,default:null,validator:_t})),ul=[...Le,...ht,"stretch"],bt=e=>ul.includes(e),pt=Re("alignContent",()=>({type:String,default:null,validator:bt})),Ke={align:Object.keys(yt),justify:Object.keys(xt),alignContent:Object.keys(pt)},dl={align:"align",justify:"justify",alignContent:"align-content"};function fl(e,s,t){let l=dl[e];if(t!=null){if(s){const i=s.replace(e,"");l+=`-${i}`}return l+=`-${t}`,l.toLowerCase()}}const vl=z({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:gt},...yt,justify:{type:String,default:null,validator:_t},...xt,alignContent:{type:String,default:null,validator:bt},...pt,...T(),...B()},"VRow"),kt=V()({name:"VRow",props:vl(),setup(e,s){let{slots:t}=s;const l=x(()=>{const i=[];let d;for(d in Ke)Ke[d].forEach(r=>{const u=e[r],a=fl(d,r,u);a&&i.push(a)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return Xe(e.tag,{class:["v-row",l.value,e.class],style:e.style},(i=t.default)==null?void 0:i.call(t))}}}),ml=ne("v-spacer","div","VSpacer"),hl=e=>(Je("data-v-3f6ff3bd"),e=e(),Ze(),e),gl={key:0,class:"text-lg-h3 text-sm-h2 py-4 text-error text-mainTitle"},yl={key:1,class:"d-flex cont"},_l={style:{flex:"1"}},xl={class:"text-lg-h3 text-sm-h4 text-h4 py-4 text-error text-mainTitle"},bl=hl(()=>o("div",{style:{"border-left":"1px solid",width:"100%",flex:"1",display:"flex","align-items":"flex-end"},class:"d-flex"},[o("img",{src:tl,alt:"Arina",class:"half-width-height ml-4"})],-1)),pl={class:"text-lg-h3 text-sm-h4 text-h4 py-lg-4 py-0 pt-sm-10 pt-lg-0 pt-4 text-mainTitle"},kl={class:"text-h5 d-flex py-2 d-flex flex-row flex-wrap"},Cl={class:"text-mainTitle text-lg-h4 text-sm-h4 text-h4 inline"},Sl={class:"ml-lg-2 ml-md-2 ml-sm-2 text-secondary text-lg-h4 text-sm-h4 text-h4 inline"},wl={key:0,src:ll,alt:"Arina",class:"half-width-height"},$l={__name:"MainComponent",setup(e){D(!0);const s=x(()=>window.innerWidth<1030);return(t,l)=>(h(),C(nl,{fluid:"",class:"main-content px-lg-10 px-sm-7 px-2 px-md-5 py-sm-0 pt-xs-15 pt-sm-15 py-md-15 py-lg-0 py-15"},{default:g(()=>[n(kt,{style:{height:"80vh",position:"relative"}},{default:g(()=>[n(le,{cols:"12",md:"12",lg:"6",xl:"6",class:"text-column d-flex flex-column justify-lg-center px-lg-15 px-xs-5 justify-md-start",style:{height:"100%"}},{default:g(()=>[s.value?k("",!0):(h(),b("p",gl,f(t.$t("performanceName")),1)),s.value?(h(),b("div",yl,[o("div",_l,[o("p",xl,f(t.$t("performanceName")),1)]),bl])):k("",!0),o("p",pl,f(t.$t("performanceProfession")),1),o("div",kl,[o("p",Cl,f(t.$t("develop")),1),o("p",Sl,f(t.$t("technologies")),1)])]),_:1}),n(le,{cols:"12",md:"6",class:"photo-column px-15 d-flex flex-column justify-end align-end"},{default:g(()=>[s.value?k("",!0):(h(),b("img",wl))]),_:1})]),_:1})]),_:1}))}},Vl=$e($l,[["__scopeId","data-v-3f6ff3bd"]]);const Ct=V()({name:"VCardActions",props:T(),setup(e,s){let{slots:t}=s;return et({VBtn:{slim:!0,variant:"text"}}),R(()=>{var l;return n("div",{class:["v-card-actions",e.class],style:e.style},[(l=t.default)==null?void 0:l.call(t)])}),{}}}),St=ne("v-card-subtitle"),wt=ne("v-card-title"),Il=z({appendAvatar:String,appendIcon:N,prependAvatar:String,prependIcon:N,subtitle:String,title:String,...T(),...Ve()},"VCardItem"),$t=V()({name:"VCardItem",props:Il(),setup(e,s){let{slots:t}=s;return R(()=>{var c;const l=!!(e.prependAvatar||e.prependIcon),i=!!(l||t.prepend),d=!!(e.appendAvatar||e.appendIcon),r=!!(d||t.append),u=!!(e.title||t.title),a=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[i&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(te,{key:"prepend-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):l&&n(Oe,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[u&&n(wt,{key:"title"},{default:()=>{var m;return[((m=t.title)==null?void 0:m.call(t))??e.title]}}),a&&n(St,{key:"subtitle"},{default:()=>{var m;return[((m=t.subtitle)==null?void 0:m.call(t))??e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),r&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(te,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):d&&n(Oe,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Vt=ne("v-card-text"),Tl=z({appendAvatar:String,appendIcon:N,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:N,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...tt(),...T(),...Ve(),...Ie(),...se(),...Pt(),...lt(),...at(),...oe(),...Dt(),...B(),...Te(),...zt({variant:"elevated"})},"VCard"),It=V()({name:"VCard",directives:{Ripple:Lt},props:Tl(),setup(e,s){let{attrs:t,slots:l}=s;const{themeClasses:i}=Ae(e),{borderClasses:d}=nt(e),{colorClasses:r,colorStyles:u,variantClasses:a}=Rt(e),{densityClasses:c}=st(e),{dimensionStyles:m}=Pe(e),{elevationClasses:_}=De(e),{loaderClasses:A}=jt(e),{locationStyles:w}=ot(e),{positionClasses:p}=it(e),{roundedClasses:E}=ze(e),$=Nt(e,t),de=x(()=>e.link!==!1&&$.isLink.value),L=x(()=>!e.disabled&&e.link!==!1&&(e.link||$.isClickable.value));return R(()=>{const q=de.value?"a":e.tag,Y=!!(l.title||e.title),fe=!!(l.subtitle||e.subtitle),ve=Y||fe,me=!!(l.append||e.appendAvatar||e.appendIcon),he=!!(l.prepend||e.prependAvatar||e.prependIcon),O=!!(l.image||e.image),ge=ve||he||me,ye=!!(l.text||e.text);return ct(n(q,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},i.value,d.value,r.value,c.value,_.value,A.value,p.value,E.value,a.value,e.class],style:[u.value,m.value,w.value,e.style],href:$.href.value,onClick:L.value&&$.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var Q;return[O&&n("div",{key:"image",class:"v-card__image"},[l.image?n(te,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):n(ut,{key:"image-img",cover:!0,src:e.image},null)]),n(Bt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),ge&&n($t,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),ye&&n(Vt,{key:"text"},{default:()=>{var X;return[((X=l.text)==null?void 0:X.call(l))??e.text]}}),(Q=l.default)==null?void 0:Q.call(l),l.actions&&n(Ct,null,{default:l.actions}),Et(L.value,"v-card")]}}),[[rt("ripple"),L.value&&e.ripple]])}),{}}});const Al=z({color:String,...tt(),...T(),...Ie(),...se(),...lt(),...at(),...oe(),...B(),...Te()},"VSheet"),j=V()({name:"VSheet",props:Al(),setup(e,s){let{slots:t}=s;const{themeClasses:l}=Ae(e),{backgroundColorClasses:i,backgroundColorStyles:d}=ke(H(e,"color")),{borderClasses:r}=nt(e),{dimensionStyles:u}=Pe(e),{elevationClasses:a}=De(e),{locationStyles:c}=ot(e),{positionClasses:m}=it(e),{roundedClasses:_}=ze(e);return R(()=>n(e.tag,{class:["v-sheet",l.value,i.value,r.value,a.value,m.value,_.value,e.class],style:[d.value,u.value,c.value,e.style]},t)),{}}}),Pl={id:"about",class:"pa-10 bg-backgroundAbouteMe"},Dl={class:"bg-backgroundResume px-lg-16 mx-lg-9 d-flex py-lg-10 flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-column",height:"100%"},zl={class:"d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height",style:{flex:"1"}},Ll={class:"text-h4 text-blockHeader mb-5"},Rl={class:"d-flex lg:px-16 lg:mx-10 xl:px-16 xl:mx-10 md:px-4 sm:px-4 fill-height flex-column",style:{flex:"1"}},jl={class:"text-body-1"},Nl={class:"d-flex flex-row my-7"},Bl=o("p",{class:"text-h3 text-blockHeader"}," 1,5 ",-1),El={class:"ml-3 text-blockHeader",style:{"border-top":"1px solid #e5e5e5"}},Fl={class:"px-lg-16 mx-lg-9"},Ml={__name:"AboutComponent",setup(e){const s=ie(),{t}=ce(),l=x(()=>s.getters.currentLanguage),i=D([]),d=()=>{i.value=[{title:t("education"),univ:t("univ"),text:t("fac")},{title:t("skills"),techno:t("techno"),libr:t("libr"),languages:t("languages")},{title:t("certificates"),udemy:t("udemy"),linkedIn:t("linkedIn")}]};return re(d),U(l,()=>{d()}),ue(()=>{}),(r,u)=>(h(),b("section",Pl,[o("div",Dl,[o("div",zl,[o("h2",Ll,f(M(t)("aboutTitle")),1)]),o("div",Rl,[o("div",null,[o("p",jl,f(M(t)("aboutContent")),1)]),o("div",Nl,[Bl,o("p",El,f(M(t)("experience")),1)])])]),o("div",Fl,[n(It,{class:"mx-auto bg-white","max-width":"100%",hover:""},{default:g(()=>[n($t,{class:"d-grid"},{default:g(()=>[n(kt,{"no-gutters":""},{default:g(()=>[(h(!0),b(K,null,W(i.value,a=>(h(),C(le,{key:a,cols:"12",sm:"4",class:"pa-5"},{default:g(()=>[n(j,{class:"my-2 mx-1 py-2 bg-white text-secondary text-h6"},{default:g(()=>[S(f(a.title),1)]),_:2},1024),a.techno?(h(),C(j,{key:0,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.techno),1)]),_:2},1024)):k("",!0),a.libr?(h(),C(j,{key:1,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.libr),1)]),_:2},1024)):k("",!0),a.languages?(h(),C(j,{key:2,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.languages),1)]),_:2},1024)):k("",!0),a.univ?(h(),C(j,{key:3,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.univ),1)]),_:2},1024)):k("",!0),a.text?(h(),C(j,{key:4,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.text),1)]),_:2},1024)):k("",!0),a.udemy?(h(),C(j,{key:5,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.udemy),1)]),_:2},1024)):k("",!0),a.linkedIn?(h(),C(j,{key:6,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(f(a.linkedIn),1)]),_:2},1024)):k("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])]))}};function We(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function qe(e){let{selectedElement:s,containerSize:t,contentSize:l,isRtl:i,currentScrollOffset:d,isHorizontal:r}=e;const u=r?s.clientWidth:s.clientHeight,a=r?s.offsetLeft:s.offsetTop,c=i&&r?l-a-u:a,m=t+d,_=u+c,A=u*.4;return c<=d?d=Math.max(c-A,0):m<=_&&(d=Math.min(d-(m-_-A),l-t)),d}function Ol(e){let{selectedElement:s,containerSize:t,contentSize:l,isRtl:i,isHorizontal:d}=e;const r=d?s.clientWidth:s.clientHeight,u=d?s.offsetLeft:s.offsetTop,a=i&&d?l-u-r/2-t/2:u+r/2-t/2;return Math.min(l-t,Math.max(0,a))}const Tt=Symbol.for("vuetify:v-slide-group"),Gl=z({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Tt},nextIcon:{type:N,default:"$next"},prevIcon:{type:N,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...T(),...Ft(),...B(),...Mt({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Hl=V()({name:"VSlideGroup",props:Gl(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isRtl:l}=Se(),{displayClasses:i,mobile:d}=Ot(e),r=Gt(e,e.symbol),u=F(!1),a=F(0),c=F(0),m=F(0),_=x(()=>e.direction==="horizontal"),{resizeRef:A,contentRect:w}=Ge(),{resizeRef:p,contentRect:E}=Ge(),$=x(()=>r.selected.value.length?r.items.value.findIndex(v=>v.id===r.selected.value[0]):-1),de=x(()=>r.selected.value.length?r.items.value.findIndex(v=>v.id===r.selected.value[r.selected.value.length-1]):-1);if(Ht){let v=-1;U(()=>[r.selected.value,w.value,E.value,_.value],()=>{cancelAnimationFrame(v),v=requestAnimationFrame(()=>{if(w.value&&E.value){const y=_.value?"width":"height";c.value=w.value[y],m.value=E.value[y],u.value=c.value+1<m.value}if($.value>=0&&p.value){const y=p.value.children[de.value];$.value===0||!u.value?a.value=0:e.centerActive?a.value=Ol({selectedElement:y,containerSize:c.value,contentSize:m.value,isRtl:l.value,isHorizontal:_.value}):u.value&&(a.value=qe({selectedElement:y,containerSize:c.value,contentSize:m.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:_.value}))}})})}const L=F(!1);let q=0,Y=0;function fe(v){const y=_.value?"clientX":"clientY";Y=(l.value&&_.value?-1:1)*a.value,q=v.touches[0][y],L.value=!0}function ve(v){if(!u.value)return;const y=_.value?"clientX":"clientY",I=l.value&&_.value?-1:1;a.value=I*(Y+q-v.touches[0][y])}function me(v){const y=m.value-c.value;a.value<0||!u.value?a.value=0:a.value>=y&&(a.value=y),L.value=!1}function he(){A.value&&(A.value[_.value?"scrollLeft":"scrollTop"]=0)}const O=F(!1);function ge(v){if(O.value=!0,!(!u.value||!p.value)){for(const y of v.composedPath())for(const I of p.value.children)if(I===y){a.value=qe({selectedElement:I,containerSize:c.value,contentSize:m.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:_.value});return}}}function ye(v){O.value=!1}function Q(v){var y;!O.value&&!(v.relatedTarget&&((y=p.value)!=null&&y.contains(v.relatedTarget)))&&P()}function X(v){p.value&&(_.value?v.key==="ArrowRight"?P(l.value?"prev":"next"):v.key==="ArrowLeft"&&P(l.value?"next":"prev"):v.key==="ArrowDown"?P("next"):v.key==="ArrowUp"&&P("prev"),v.key==="Home"?P("first"):v.key==="End"&&P("last"))}function P(v){var y,I,Ee,Fe,Me;if(p.value)if(!v)(y=Ut(p.value)[0])==null||y.focus();else if(v==="next"){const G=(I=p.value.querySelector(":focus"))==null?void 0:I.nextElementSibling;G?G.focus():P("first")}else if(v==="prev"){const G=(Ee=p.value.querySelector(":focus"))==null?void 0:Ee.previousElementSibling;G?G.focus():P("last")}else v==="first"?(Fe=p.value.firstElementChild)==null||Fe.focus():v==="last"&&((Me=p.value.lastElementChild)==null||Me.focus())}function _e(v){const y=a.value+(v==="prev"?-1:1)*c.value;a.value=Kt(y,0,m.value-c.value)}const At=x(()=>{let v=a.value>m.value-c.value?-(m.value-c.value)+We(m.value-c.value-a.value):-a.value;a.value<=0&&(v=We(-a.value));const y=l.value&&_.value?-1:1;return{transform:`translate${_.value?"X":"Y"}(${y*v}px)`,transition:L.value?"none":"",willChange:L.value?"transform":""}}),xe=x(()=>({next:r.next,prev:r.prev,select:r.select,isSelected:r.isSelected})),be=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return u.value||Math.abs(a.value)>0;case"mobile":return d.value||u.value||Math.abs(a.value)>0;default:return!d.value&&(u.value||Math.abs(a.value)>0)}}),Ne=x(()=>Math.abs(a.value)>0),Be=x(()=>m.value>Math.abs(a.value)+c.value);return R(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!_.value,"v-slide-group--has-affixes":be.value,"v-slide-group--is-overflowing":u.value},i.value,e.class],style:e.style,tabindex:O.value||r.selected.value.length?-1:0,onFocus:Q},{default:()=>{var v,y,I;return[be.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Ne.value}],onClick:()=>Ne.value&&_e("prev")},[((v=t.prev)==null?void 0:v.call(t,xe.value))??n(He,null,{default:()=>[n(Ce,{icon:l.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:A,class:"v-slide-group__container",onScroll:he},[n("div",{ref:p,class:"v-slide-group__content",style:At.value,onTouchstartPassive:fe,onTouchmovePassive:ve,onTouchendPassive:me,onFocusin:ge,onFocusout:ye,onKeydown:X},[(y=t.default)==null?void 0:y.call(t,xe.value)])]),be.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Be.value}],onClick:()=>Be.value&&_e("next")},[((I=t.next)==null?void 0:I.call(t,xe.value))??n(He,null,{default:()=>[n(Ce,{icon:l.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:r.selected,scrollTo:_e,scrollOffset:a,focus:P}}}),Ul=V()({name:"VSlideGroupItem",props:Wt(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const l=qt(e,Tt);return()=>{var i;return(i=t.default)==null?void 0:i.call(t,{isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}}}),Kl={id:"portfolio",class:"bg-backgroundResume pa-lg-10"},Wl={class:"px-lg-16 mx-lg-9 py-lg-10"},ql={class:"d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height",style:{flex:"1"}},Yl={class:"text-h4 text-blockHeader mb-5 pa-sm-10 pa-lg-0 pa-md-10 pa-10"},Ql={__name:"PortfolioComponent",setup(e){const s=ie(),{t}=ce(),l=x(()=>s.getters.currentLanguage),i=D([]),d=()=>{i.value=[{projectName:"AnyQuery",company:"Diginetica",describtion:t("describtionAnyQuery"),imgSrc:new URL("/assets/AlltimeAnyQuery-80b9c37b.png",self.location).href,link:"https://www.alltime.ru/"},{projectName:"Dolyame",company:"Diginetica",describtion:t("describtionDolyame"),imgSrc:new URL("/assets/Dolyame-1bf6e36c.png",self.location).href,link:"https://brandshop.ru/goods/450784/ddrbs/"},{projectName:t("mortgageCalculator"),company:"Deneb",describtion:t("describtionCalcul"),imgSrc:new URL("/assets/mortgageCalculator-074d45a7.png",self.location).href,link:"http://test.deneb23.ru/"},{projectName:"Hilbro",company:"Deneb",describtion:t("describtionHilbro"),imgSrc:new URL("/assets/hilbro-dca5f965.png",self.location).href,link:""},{projectName:"Технокрой",company:"Deneb",describtion:t("describtionTkroi"),imgSrc:new URL("/assets/tkroi-a2efe039.png",self.location).href,link:"https://tehnokroi.ru/"}]};return x(()=>window.innerWidth<768),re(d),U(l,()=>{d()}),ue(()=>{}),(r,u)=>(h(),b("section",Kl,[o("div",Wl,[o("div",ql,[o("h2",Yl,f(r.$t("projects")),1)])]),n(Hl,{"show-arrows":"","selected-class":"bg-success",class:"bg-backgroundResume px-lg-10"},{default:g(()=>[(h(!0),b(K,null,W(i.value,(a,c)=>(h(),C(Ul,{key:c,class:"ma-4"},{default:g(()=>[n(It,{class:"ma-4 bg-white","max-width":"300",height:"590",style:{display:"flex","flex-direction":"column"}},{default:g(()=>[n(ut,{class:"align-end text-white",height:"200",src:a.imgSrc,style:{"max-height":"200px !important"}},null,8,["src"]),n(wt,{class:"text-black bg-grey-lighten-5"},{default:g(()=>[S(f(a.projectName),1)]),_:2},1024),n(St,{class:"pt-4"},{default:g(()=>[S(f(r.$t("inTheCompany"))+" "+f(a.company),1)]),_:2},1024),n(Vt,null,{default:g(()=>[S(f(a.describtion),1)]),_:2},1024),n(ml),n(Ct,null,{default:g(()=>[n(Yt,{color:"secondary",href:a.link,target:"_blank"},{default:g(()=>[S(f(r.$t("goToTheWebsite")),1)]),_:2},1032,["href"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))}},Xl=$e(Ql,[["__scopeId","data-v-f100f587"]]);const Jl=z({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...T(),...Ve(),...B(),...Te()},"VTimeline"),Ye=V()({name:"VTimeline",props:Jl(),setup(e,s){let{slots:t}=s;const{themeClasses:l}=Ae(e),{densityClasses:i}=st(e),{rtlClasses:d}=Se();et({VTimelineDivider:{lineColor:H(e,"lineColor")},VTimelineItem:{density:H(e,"density"),lineInset:H(e,"lineInset")}});const r=x(()=>{const a=e.side?e.side:e.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),u=x(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return R(()=>n(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,u.value,{"v-timeline--inset-line":!!e.lineInset},l.value,i.value,r.value,d.value,e.class],style:[{"--v-timeline-line-thickness":ee(e.lineThickness)},e.style]},t)),{}}}),Zl=z({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:N,iconColor:String,lineColor:String,...T(),...oe(),...dt(),...se()},"VTimelineDivider"),ea=V()({name:"VTimelineDivider",props:Zl(),setup(e,s){let{slots:t}=s;const{sizeClasses:l,sizeStyles:i}=Qt(e,"v-timeline-divider__dot"),{backgroundColorStyles:d,backgroundColorClasses:r}=ke(H(e,"dotColor")),{roundedClasses:u}=ze(e,"v-timeline-divider__dot"),{elevationClasses:a}=De(e),{backgroundColorClasses:c,backgroundColorStyles:m}=ke(H(e,"lineColor"));return R(()=>n("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[n("div",{class:["v-timeline-divider__before",c.value],style:m.value},null),!e.hideDot&&n("div",{key:"dot",class:["v-timeline-divider__dot",a.value,u.value,l.value],style:i.value},[n("div",{class:["v-timeline-divider__inner-dot",r.value,u.value],style:d.value},[t.default?n(te,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},t.default):n(Ce,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),n("div",{class:["v-timeline-divider__after",c.value],style:m.value},null)])),{}}}),ta=z({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:N,iconColor:String,lineInset:[Number,String],...T(),...Ie(),...se(),...oe(),...dt(),...B()},"VTimelineItem"),Qe=V()({name:"VTimelineItem",props:ta(),setup(e,s){let{slots:t}=s;const{dimensionStyles:l}=Pe(e),i=F(0),d=D();return U(d,r=>{var u;r&&(i.value=((u=r.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:u.getBoundingClientRect().width)??0)},{flush:"post"}),R(()=>{var r,u;return n("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":ee(i.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${ee(e.lineInset)})`:ee(0)},e.style]},[n("div",{class:"v-timeline-item__body",style:l.value},[(r=t.default)==null?void 0:r.call(t)]),n(ea,{ref:d,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:t.icon}),e.density!=="compact"&&n("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((u=t.opposite)==null?void 0:u.call(t))])])}),{}}}),la={id:"CV",class:"bg-backgroundResume pa-10"},aa={class:"px-lg-16 mx-lg-9 py-lg-10"},na={class:"d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height",style:{flex:"1"}},sa={class:"text-h4 text-blockHeader mb-5"},oa={style:{width:"100%"}},ia=["textContent"],ca={class:"text-h5 mt-2"},ra={class:"text-subtitle-2 mt-2"},ua={class:"text-body-2"},da={key:0,class:"text-subtitle-2 mt-2"},fa={class:"text-body-2"},va=["textContent"],ma={class:"text-h5 mt-2"},ha={class:"text-subtitle-2 mt-2"},ga={class:"text-body-2"},ya={key:0,class:"text-subtitle-2 mt-2"},_a={class:"text-body-2"},xa={__name:"ResumeComponent",setup(e){const s=ie(),{t}=ce(),l=x(()=>s.getters.currentLanguage),i=D([]),d=()=>{i.value=[{company:"Stocrm",color:"light-blue-darken-1",date:t("dateStocrm"),position:t("position"),role:t("roleStocrm"),achievements:t("achievementsStocrm")},{company:"Deneb",color:"teal-lighten-1",date:t("dateDeneb"),position:t("position"),role:t("roleDeneb"),achievements:t("achievementsDeneb")},{company:"Diginetica",color:"green",date:t("dateDigi"),position:t("position"),role:t("roleDigi"),achievements:t("achievementsDigi")},{company:t("freelance"),color:"pink",date:t("dateFreelance"),position:t("position"),role:t("roleFreelance"),achievements:""}]},r=x(()=>window.innerWidth<768);return re(d),U(l,()=>{d()}),ue(()=>{}),(u,a)=>(h(),b("section",la,[o("div",aa,[o("div",na,[o("h2",sa,f(u.$t("resume")),1)]),o("div",oa,[r.value?k("",!0):(h(),C(Ye,{key:0,align:"start"},{default:g(()=>[(h(!0),b(K,null,W(i.value,(c,m)=>(h(),C(Qe,{key:m,"dot-color":c.color,size:"small"},{opposite:g(()=>[o("div",{class:J(`font-weight-regular text-subtitle-1 pt-1 headline text-${c.color}`),textContent:f(c.date)},null,10,ia)]),default:g(()=>[o("div",null,[o("h2",{class:J(`my-2 font-weight-regular text-h4 mt-n1 headline font-weight-light mb-4 text-${c.color}`)},f(c.company),3),o("p",ca,f(c.position),1),o("p",ra,f(u.$t("responsibilities")),1),o("p",ua,f(c.role),1),c.achievements!==""?(h(),b("p",da,f(u.$t("achievements")),1)):k("",!0),o("p",fa,f(c.achievements),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})),r.value?(h(),C(Ye,{key:1,side:"end",align:"start",class:"px-lg-16 mx-lg-9 px-sm-3"},{default:g(()=>[(h(!0),b(K,null,W(i.value,(c,m)=>(h(),C(Qe,{key:m,"dot-color":c.color,size:"small"},{default:g(()=>[o("template",null,[o("div",{class:J(`font-weight-regular text-subtitle-1 pt-1 headline text-${c.color}`),textContent:f(c.date)},null,10,va)]),o("div",null,[o("h2",{class:J(`my-2 font-weight-regular text-h4 mt-n1 headline font-weight-light mb-4 text-${c.color}`)},f(c.company),3),o("p",ma,f(c.position),1),o("p",ha,f(u.$t("responsibilities")),1),o("p",ga,f(c.role),1),c.achievements!==""?(h(),b("p",ya,f(u.$t("achievements")),1)):k("",!0),o("p",_a,f(c.achievements),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})):k("",!0)])])]))}};const je=e=>(Je("data-v-6a860893"),e=e(),Ze(),e),ba={id:"footer",class:"bg-backgroundFooter d-flex flex-column"},pa={class:"d-flex flex-row"},ka={class:"d-flex flex-column px-lg-16 mx-lg-9 py-lg-10 py-5 px-10"},Ca={class:"text-h5 text-mainTitle mb-5"},Sa={class:"d-flex flex-row my-3 justify-start"},wa={key:0,href:"/Kunashko Arina CV Frontend Developer.pdf",download:"CV_Arina_Kunashko_Frontend_dev.pdf",class:"text-body-1 text-footerText text-decoration-none ml-3"},$a={key:1,href:"/Arina Kunashko  CV Frontend Developer.pdf",download:"CV_Arina_Kunashko_Frontend_dev.pdf",class:"text-body-1 text-footerText text-decoration-none ml-3"},Va={class:"d-flex flex-column px-lg-16 mx-lg-9 py-lg-10 py-5 px-10"},Ia={class:"d-flex justify-start"},Ta={class:"text-h4 text-mainTitle mb-5 d-flex"},Aa=["href"],Pa={class:"px-lg-16 mx-lg-9 d-flex py-lg-10 d-flex flex-column py-5 px-10 flex-lg-column flex-sm-column flex-md-column flex-sm-column flex-column flex-xs-column"},Da={class:"d-flex justify-start"},za={class:"text-h4 text-mainTitle mb-5"},La={class:"pb-5"},Ra={class:"d-flex flex-row my-3 justify-start"},ja=je(()=>o("a",{target:"_blank",href:"https://www.linkedin.com/in/arina-kunashko/",class:"text-body-1 text-footerText text-decoration-none ml-3"}," LinkedIn ",-1)),Na={class:"d-flex flex-row my-3 justify-start"},Ba=je(()=>o("a",{target:"_blank",href:"https://github.com/ArinaKunashko",class:"text-body-1 text-footerText text-decoration-none ml-3"}," GitHub ",-1)),Ea={class:"d-flex flex-row my-3 justify-start"},Fa=["href"],Ma=je(()=>o("strong",null,"Arina Kunashko",-1)),pe="kunashkoa@gmail.com",Oa={__name:"FooterComponent",setup(e){const s=D(Xt),t=D(Jt),l=D(Zt),i=D(el),d=x(()=>`mailto:${pe}`),r=()=>{window.location.href=d.value},u=ie(),{t:a}=ce(),c=x(()=>u.getters.currentLanguage),m=D([]),_=()=>{m.value=[{text:a("start"),href:"#start"},{text:a("aboutMe"),href:"#about"},{text:a("portfolio"),href:"#portfolio"},{text:a("resume"),href:"#CV"}]},A=x(()=>window.innerWidth<768);return re(_),U(c,()=>{_()}),ue(()=>{}),(w,p)=>{const E=rt("scroll-to");return h(),b("div",ba,[o("div",pa,[o("div",ka,[o("h2",Ca,f(w.$t("slogan")),1),o("div",Sa,[n(M(Z),{type:"mdi",path:i.value},null,8,["path"]),w.$t("downloadRes")==="Скачать резюме"?(h(),b("a",wa,f(w.$t("downloadRes")),1)):k("",!0),w.$t("downloadRes")==="Download resume"?(h(),b("a",$a,f(w.$t("downloadRes")),1)):k("",!0)])]),o("div",Va,[o("div",Ia,[o("h2",Ta,f(w.$t("navigate")),1)]),(h(!0),b(K,null,W(m.value,$=>ct((h(),b("a",{key:$,color:"footerText",class:"d-flex justify-start text-body-1 text-footerText text-decoration-none py-2",rounded:"xl",href:$.href},[S(f($.text),1)],8,Aa)),[[E,$.href]])),128))]),o("div",Pa,[o("div",Da,[o("h2",za,f(w.$t("contact")),1)]),o("div",La,[o("div",Ra,[n(M(Z),{type:"mdi",path:s.value},null,8,["path"]),ja]),o("div",Na,[n(M(Z),{type:"mdi",path:l.value},null,8,["path"]),Ba]),o("div",Ea,[n(M(Z),{type:"mdi",path:t.value},null,8,["path"]),A.value?(h(),b("a",{key:1,onClick:r,class:"text-body-1 text-footerText text-decoration-none ml-3"},f(pe))):(h(),b("a",{key:0,target:"_blank",href:d.value,class:"text-body-1 text-footerText text-decoration-none ml-3"},f(pe),8,Fa))])])])]),n(le,{class:"text-center mt-4",cols:"12"},{default:g(()=>[S(f(new Date().getFullYear())+" — ",1),Ma]),_:1})])}}},Ga=$e(Oa,[["__scopeId","data-v-6a860893"]]),Ua={__name:"Home",setup(e){return(s,t)=>(h(),b("div",null,[n(Vl),n(Ml),n(Xl),n(xa),n(Ga)]))}};export{Ua as default};
