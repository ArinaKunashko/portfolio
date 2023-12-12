import{p as z,m as T,b as B,g as V,u as Ce,d as R,a as n,e as ae,f as we,h as x,i as Xe,j as ne,_ as Je,k as D,o as h,c as k,w as g,l as c,t as v,n as $e,q as Ze,I as N,s as Ve,v as Me,x as te,y as et,z as Ie,A as se,B as Tt,C as tt,D as lt,E as oe,F as At,G as Te,H as Pt,R as Dt,J as Ae,K as at,L as zt,M as nt,N as Pe,O as De,P as Lt,Q as st,S as ot,T as ze,U as Rt,W as it,X as ct,Y as jt,Z as Nt,$ as ke,a0 as H,a1 as ie,a2 as ce,a3 as ue,a4 as U,a5 as re,a6 as b,a7 as O,a8 as K,a9 as W,aa as S,ab as w,ac as Bt,ad as Et,ae as Ft,af as Ot,ag as F,ah as Ge,ai as Mt,aj as He,ak as Se,al as Gt,am as Ht,an as Ut,ao as Kt,ap as Wt,aq as ee,ar as ut,as as qt,at as J,au as Yt,av as Qt,aw as Xt,ax as Jt,ay as Z,az as Zt,aA as el}from"./index-ec54e21a.js";const tl="/portfolio/assets/Subject-d519a6f2.png";const ll=z({fluid:{type:Boolean,default:!1},...T(),...B()},"VContainer"),al=V()({name:"VContainer",props:ll(),setup(e,s){let{slots:t}=s;const{rtlClasses:l}=Ce();return R(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},l.value,e.class],style:e.style},t)),{}}}),rt=(()=>ae.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),dt=(()=>ae.reduce((e,s)=>{const t="offset"+we(s);return e[t]={type:[String,Number],default:null},e},{}))(),vt=(()=>ae.reduce((e,s)=>{const t="order"+we(s);return e[t]={type:[String,Number],default:null},e},{}))(),Ue={col:Object.keys(rt),offset:Object.keys(dt),order:Object.keys(vt)};function nl(e,s,t){let l=e;if(!(t==null||t===!1)){if(s){const o=s.replace(e,"");l+=`-${o}`}return e==="col"&&(l="v-"+l),e==="col"&&(t===""||t===!0)||(l+=`-${t}`),l.toLowerCase()}}const sl=["auto","start","end","center","baseline","stretch"],ol=z({cols:{type:[Boolean,String,Number],default:!1},...rt,offset:{type:[String,Number],default:null},...dt,order:{type:[String,Number],default:null},...vt,alignSelf:{type:String,default:null,validator:e=>sl.includes(e)},...T(),...B()},"VCol"),le=V()({name:"VCol",props:ol(),setup(e,s){let{slots:t}=s;const l=x(()=>{const o=[];let r;for(r in Ue)Ue[r].forEach(d=>{const a=e[d],i=nl(r,d,a);i&&o.push(i)});const u=o.some(d=>d.startsWith("v-col-"));return o.push({"v-col":!u||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return Xe(e.tag,{class:[l.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),Le=["start","end","center"],ft=["space-between","space-around","space-evenly"];function Re(e,s){return ae.reduce((t,l)=>{const o=e+we(l);return t[o]=s(),t},{})}const il=[...Le,"baseline","stretch"],mt=e=>il.includes(e),ht=Re("align",()=>({type:String,default:null,validator:mt})),cl=[...Le,...ft],gt=e=>cl.includes(e),yt=Re("justify",()=>({type:String,default:null,validator:gt})),ul=[...Le,...ft,"stretch"],_t=e=>ul.includes(e),xt=Re("alignContent",()=>({type:String,default:null,validator:_t})),Ke={align:Object.keys(ht),justify:Object.keys(yt),alignContent:Object.keys(xt)},rl={align:"align",justify:"justify",alignContent:"align-content"};function dl(e,s,t){let l=rl[e];if(t!=null){if(s){const o=s.replace(e,"");l+=`-${o}`}return l+=`-${t}`,l.toLowerCase()}}const vl=z({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:mt},...ht,justify:{type:String,default:null,validator:gt},...yt,alignContent:{type:String,default:null,validator:_t},...xt,...T(),...B()},"VRow"),bt=V()({name:"VRow",props:vl(),setup(e,s){let{slots:t}=s;const l=x(()=>{const o=[];let r;for(r in Ke)Ke[r].forEach(u=>{const d=e[u],a=dl(r,u,d);a&&o.push(a)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return Xe(e.tag,{class:["v-row",l.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),fl=ne("v-spacer","div","VSpacer"),ml={class:"text-h3 py-4 text-error text-mainTitle"},hl={class:"text-h5 d-flex py-2 d-flex flex-row flex-wrap"},gl={class:"text-mainTitle"},yl={class:"ml-lg-2 text-secondary"},_l={__name:"MainComponent",setup(e){return D(!0),(s,t)=>(h(),k(al,{fluid:"",class:"main-content px-10"},{default:g(()=>[n(bt,null,{default:g(()=>[n(le,{cols:"12",md:"6",class:"text-column d-flex flex-column justify-lg-center px-lg-15 justify-md-start"},{default:g(()=>[c("p",ml,v(s.$t("performance")),1),c("div",hl,[c("p",gl,v(s.$t("develop")),1),c("p",yl,v(s.$t("technologies")),1)])]),_:1}),n(le,{cols:"12",md:"6",class:"photo-column px-15 d-flex"},{default:g(()=>[n($e,{src:tl,alt:"Arina",class:"half-width-height"})]),_:1})]),_:1})]),_:1}))}},xl=Je(_l,[["__scopeId","data-v-e58eb045"]]);const pt=V()({name:"VCardActions",props:T(),setup(e,s){let{slots:t}=s;return Ze({VBtn:{slim:!0,variant:"text"}}),R(()=>{var l;return n("div",{class:["v-card-actions",e.class],style:e.style},[(l=t.default)==null?void 0:l.call(t)])}),{}}}),kt=ne("v-card-subtitle"),St=ne("v-card-title"),bl=z({appendAvatar:String,appendIcon:N,prependAvatar:String,prependIcon:N,subtitle:String,title:String,...T(),...Ve()},"VCardItem"),Ct=V()({name:"VCardItem",props:bl(),setup(e,s){let{slots:t}=s;return R(()=>{var i;const l=!!(e.prependAvatar||e.prependIcon),o=!!(l||t.prepend),r=!!(e.appendAvatar||e.appendIcon),u=!!(r||t.append),d=!!(e.title||t.title),a=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(te,{key:"prepend-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):l&&n(Me,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[d&&n(St,{key:"title"},{default:()=>{var m;return[((m=t.title)==null?void 0:m.call(t))??e.title]}}),a&&n(kt,{key:"subtitle"},{default:()=>{var m;return[((m=t.subtitle)==null?void 0:m.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),u&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(te,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):r&&n(Me,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),wt=ne("v-card-text"),pl=z({appendAvatar:String,appendIcon:N,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:N,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...et(),...T(),...Ve(),...Ie(),...se(),...Tt(),...tt(),...lt(),...oe(),...At(),...B(),...Te(),...Pt({variant:"elevated"})},"VCard"),$t=V()({name:"VCard",directives:{Ripple:Dt},props:pl(),setup(e,s){let{attrs:t,slots:l}=s;const{themeClasses:o}=Ae(e),{borderClasses:r}=at(e),{colorClasses:u,colorStyles:d,variantClasses:a}=zt(e),{densityClasses:i}=nt(e),{dimensionStyles:m}=Pe(e),{elevationClasses:_}=De(e),{loaderClasses:A}=Lt(e),{locationStyles:C}=st(e),{positionClasses:p}=ot(e),{roundedClasses:E}=ze(e),$=Rt(e,t),de=x(()=>e.link!==!1&&$.isLink.value),L=x(()=>!e.disabled&&e.link!==!1&&(e.link||$.isClickable.value));return R(()=>{const q=de.value?"a":e.tag,Y=!!(l.title||e.title),ve=!!(l.subtitle||e.subtitle),fe=Y||ve,me=!!(l.append||e.appendAvatar||e.appendIcon),he=!!(l.prepend||e.prependAvatar||e.prependIcon),M=!!(l.image||e.image),ge=fe||he||me,ye=!!(l.text||e.text);return it(n(q,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":L.value},o.value,r.value,u.value,i.value,_.value,A.value,p.value,E.value,a.value,e.class],style:[d.value,m.value,C.value,e.style],href:$.href.value,onClick:L.value&&$.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var Q;return[M&&n("div",{key:"image",class:"v-card__image"},[l.image?n(te,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):n($e,{key:"image-img",cover:!0,src:e.image},null)]),n(jt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:l.loader}),ge&&n(Ct,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:l.item,prepend:l.prepend,title:l.title,subtitle:l.subtitle,append:l.append}),ye&&n(wt,{key:"text"},{default:()=>{var X;return[((X=l.text)==null?void 0:X.call(l))??e.text]}}),(Q=l.default)==null?void 0:Q.call(l),l.actions&&n(pt,null,{default:l.actions}),Nt(L.value,"v-card")]}}),[[ct("ripple"),L.value&&e.ripple]])}),{}}});const kl=z({color:String,...et(),...T(),...Ie(),...se(),...tt(),...lt(),...oe(),...B(),...Te()},"VSheet"),j=V()({name:"VSheet",props:kl(),setup(e,s){let{slots:t}=s;const{themeClasses:l}=Ae(e),{backgroundColorClasses:o,backgroundColorStyles:r}=ke(H(e,"color")),{borderClasses:u}=at(e),{dimensionStyles:d}=Pe(e),{elevationClasses:a}=De(e),{locationStyles:i}=st(e),{positionClasses:m}=ot(e),{roundedClasses:_}=ze(e);return R(()=>n(e.tag,{class:["v-sheet",l.value,o.value,u.value,a.value,m.value,_.value,e.class],style:[r.value,d.value,i.value,e.style]},t)),{}}}),Sl={id:"about",class:"pa-10 bg-backgroundAbouteMe"},Cl={class:"bg-backgroundResume px-lg-16 mx-lg-9 d-flex py-lg-10 flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-column",height:"100%"},wl={class:"d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height",style:{flex:"1"}},$l={class:"text-h4 text-blockHeader mb-5"},Vl={class:"d-flex lg:px-16 lg:mx-10 xl:px-16 xl:mx-10 md:px-4 sm:px-4 fill-height flex-column",style:{flex:"1"}},Il={class:"text-body-1"},Tl={class:"d-flex flex-row my-7"},Al=c("p",{class:"text-h3 text-blockHeader"}," 1,5 ",-1),Pl={class:"ml-3 text-blockHeader",style:{"border-top":"1px solid #e5e5e5"}},Dl={class:"px-lg-16 mx-lg-9"},zl={__name:"AboutComponent",setup(e){const s=ie(),{t}=ce(),l=x(()=>s.getters.currentLanguage),o=D([]),r=()=>{o.value=[{title:t("education"),univ:t("univ"),text:t("fac")},{title:t("skills"),techno:t("techno"),libr:t("libr"),languages:t("languages")},{title:t("certificates"),udemy:t("udemy"),linkedIn:t("linkedIn")}]};return ue(r),U(l,()=>{r()}),re(()=>{}),(u,d)=>(h(),b("section",Sl,[c("div",Cl,[c("div",wl,[c("h2",$l,v(O(t)("aboutTitle")),1)]),c("div",Vl,[c("div",null,[c("p",Il,v(O(t)("aboutContent")),1)]),c("div",Tl,[Al,c("p",Pl,v(O(t)("experience")),1)])])]),c("div",Dl,[n($t,{class:"mx-auto bg-white","max-width":"100%",hover:""},{default:g(()=>[n(Ct,{class:"d-grid"},{default:g(()=>[n(bt,{"no-gutters":""},{default:g(()=>[(h(!0),b(K,null,W(o.value,a=>(h(),k(le,{key:a,cols:"12",sm:"4",class:"pa-5"},{default:g(()=>[n(j,{class:"my-2 mx-1 py-2 bg-white text-secondary text-h6"},{default:g(()=>[S(v(a.title),1)]),_:2},1024),a.techno?(h(),k(j,{key:0,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.techno),1)]),_:2},1024)):w("",!0),a.libr?(h(),k(j,{key:1,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.libr),1)]),_:2},1024)):w("",!0),a.languages?(h(),k(j,{key:2,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.languages),1)]),_:2},1024)):w("",!0),a.univ?(h(),k(j,{key:3,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.univ),1)]),_:2},1024)):w("",!0),a.text?(h(),k(j,{key:4,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.text),1)]),_:2},1024)):w("",!0),a.udemy?(h(),k(j,{key:5,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.udemy),1)]),_:2},1024)):w("",!0),a.linkedIn?(h(),k(j,{key:6,class:"ma-1 bg-white text-black text-body-2"},{default:g(()=>[S(v(a.linkedIn),1)]),_:2},1024)):w("",!0)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])]))}};function We(e){const t=Math.abs(e);return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function qe(e){let{selectedElement:s,containerSize:t,contentSize:l,isRtl:o,currentScrollOffset:r,isHorizontal:u}=e;const d=u?s.clientWidth:s.clientHeight,a=u?s.offsetLeft:s.offsetTop,i=o&&u?l-a-d:a,m=t+r,_=d+i,A=d*.4;return i<=r?r=Math.max(i-A,0):m<=_&&(r=Math.min(r-(m-_-A),l-t)),r}function Ll(e){let{selectedElement:s,containerSize:t,contentSize:l,isRtl:o,isHorizontal:r}=e;const u=r?s.clientWidth:s.clientHeight,d=r?s.offsetLeft:s.offsetTop,a=o&&r?l-d-u/2-t/2:d+u/2-t/2;return Math.min(l-t,Math.max(0,a))}const Vt=Symbol.for("vuetify:v-slide-group"),Rl=z({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Vt},nextIcon:{type:N,default:"$next"},prevIcon:{type:N,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...T(),...Bt(),...B(),...Et({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),jl=V()({name:"VSlideGroup",props:Rl(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isRtl:l}=Ce(),{displayClasses:o,mobile:r}=Ft(e),u=Ot(e,e.symbol),d=F(!1),a=F(0),i=F(0),m=F(0),_=x(()=>e.direction==="horizontal"),{resizeRef:A,contentRect:C}=Ge(),{resizeRef:p,contentRect:E}=Ge(),$=x(()=>u.selected.value.length?u.items.value.findIndex(f=>f.id===u.selected.value[0]):-1),de=x(()=>u.selected.value.length?u.items.value.findIndex(f=>f.id===u.selected.value[u.selected.value.length-1]):-1);if(Mt){let f=-1;U(()=>[u.selected.value,C.value,E.value,_.value],()=>{cancelAnimationFrame(f),f=requestAnimationFrame(()=>{if(C.value&&E.value){const y=_.value?"width":"height";i.value=C.value[y],m.value=E.value[y],d.value=i.value+1<m.value}if($.value>=0&&p.value){const y=p.value.children[de.value];$.value===0||!d.value?a.value=0:e.centerActive?a.value=Ll({selectedElement:y,containerSize:i.value,contentSize:m.value,isRtl:l.value,isHorizontal:_.value}):d.value&&(a.value=qe({selectedElement:y,containerSize:i.value,contentSize:m.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:_.value}))}})})}const L=F(!1);let q=0,Y=0;function ve(f){const y=_.value?"clientX":"clientY";Y=(l.value&&_.value?-1:1)*a.value,q=f.touches[0][y],L.value=!0}function fe(f){if(!d.value)return;const y=_.value?"clientX":"clientY",I=l.value&&_.value?-1:1;a.value=I*(Y+q-f.touches[0][y])}function me(f){const y=m.value-i.value;a.value<0||!d.value?a.value=0:a.value>=y&&(a.value=y),L.value=!1}function he(){A.value&&(A.value[_.value?"scrollLeft":"scrollTop"]=0)}const M=F(!1);function ge(f){if(M.value=!0,!(!d.value||!p.value)){for(const y of f.composedPath())for(const I of p.value.children)if(I===y){a.value=qe({selectedElement:I,containerSize:i.value,contentSize:m.value,isRtl:l.value,currentScrollOffset:a.value,isHorizontal:_.value});return}}}function ye(f){M.value=!1}function Q(f){var y;!M.value&&!(f.relatedTarget&&((y=p.value)!=null&&y.contains(f.relatedTarget)))&&P()}function X(f){p.value&&(_.value?f.key==="ArrowRight"?P(l.value?"prev":"next"):f.key==="ArrowLeft"&&P(l.value?"next":"prev"):f.key==="ArrowDown"?P("next"):f.key==="ArrowUp"&&P("prev"),f.key==="Home"?P("first"):f.key==="End"&&P("last"))}function P(f){var y,I,Ee,Fe,Oe;if(p.value)if(!f)(y=Gt(p.value)[0])==null||y.focus();else if(f==="next"){const G=(I=p.value.querySelector(":focus"))==null?void 0:I.nextElementSibling;G?G.focus():P("first")}else if(f==="prev"){const G=(Ee=p.value.querySelector(":focus"))==null?void 0:Ee.previousElementSibling;G?G.focus():P("last")}else f==="first"?(Fe=p.value.firstElementChild)==null||Fe.focus():f==="last"&&((Oe=p.value.lastElementChild)==null||Oe.focus())}function _e(f){const y=a.value+(f==="prev"?-1:1)*i.value;a.value=Ht(y,0,m.value-i.value)}const It=x(()=>{let f=a.value>m.value-i.value?-(m.value-i.value)+We(m.value-i.value-a.value):-a.value;a.value<=0&&(f=We(-a.value));const y=l.value&&_.value?-1:1;return{transform:`translate${_.value?"X":"Y"}(${y*f}px)`,transition:L.value?"none":"",willChange:L.value?"transform":""}}),xe=x(()=>({next:u.next,prev:u.prev,select:u.select,isSelected:u.isSelected})),be=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return d.value||Math.abs(a.value)>0;case"mobile":return r.value||d.value||Math.abs(a.value)>0;default:return!r.value&&(d.value||Math.abs(a.value)>0)}}),Ne=x(()=>Math.abs(a.value)>0),Be=x(()=>m.value>Math.abs(a.value)+i.value);return R(()=>n(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!_.value,"v-slide-group--has-affixes":be.value,"v-slide-group--is-overflowing":d.value},o.value,e.class],style:e.style,tabindex:M.value||u.selected.value.length?-1:0,onFocus:Q},{default:()=>{var f,y,I;return[be.value&&n("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Ne.value}],onClick:()=>Ne.value&&_e("prev")},[((f=t.prev)==null?void 0:f.call(t,xe.value))??n(He,null,{default:()=>[n(Se,{icon:l.value?e.nextIcon:e.prevIcon},null)]})]),n("div",{key:"container",ref:A,class:"v-slide-group__container",onScroll:he},[n("div",{ref:p,class:"v-slide-group__content",style:It.value,onTouchstartPassive:ve,onTouchmovePassive:fe,onTouchendPassive:me,onFocusin:ge,onFocusout:ye,onKeydown:X},[(y=t.default)==null?void 0:y.call(t,xe.value)])]),be.value&&n("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Be.value}],onClick:()=>Be.value&&_e("next")},[((I=t.next)==null?void 0:I.call(t,xe.value))??n(He,null,{default:()=>[n(Se,{icon:l.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:u.selected,scrollTo:_e,scrollOffset:a,focus:P}}}),Nl=V()({name:"VSlideGroupItem",props:Ut(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const l=Kt(e,Vt);return()=>{var o;return(o=t.default)==null?void 0:o.call(t,{isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}}}),Bl={id:"portfolio",class:"bg-backgroundResume pa-lg-10"},El={class:"px-lg-16 mx-lg-9 py-lg-10"},Fl={class:"d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height",style:{flex:"1"}},Ol={class:"text-h4 text-blockHeader mb-5 pa-sm-10 pa-lg-0 pa-md-10 pa-10"},Ml={__name:"PortfolioComponent",setup(e){const s=ie(),{t}=ce(),l=x(()=>s.getters.currentLanguage),o=D([]),r=()=>{o.value=[{projectName:"AnyQuery",company:"Diginetica",describtion:t("describtionAnyQuery"),imgSrc:new URL("/portfolio/assets/AlltimeAnyQuery-80b9c37b.png",self.location).href,link:"https://www.alltime.ru/"},{projectName:"Dolyame",company:"Diginetica",describtion:t("describtionDolyame"),imgSrc:new URL("/portfolio/assets/Dolyame-1bf6e36c.png",self.location).href,link:"https://brandshop.ru/goods/450784/ddrbs/"},{projectName:t("mortgageCalculator"),company:"Deneb",describtion:t("describtionCalcul"),imgSrc:new URL("/portfolio/assets/mortgageCalculator-074d45a7.png",self.location).href,link:"http://test.deneb23.ru/"},{projectName:"Hilbro",company:"Deneb",describtion:t("describtionHilbro"),imgSrc:new URL("/portfolio/assets/hilbro-dca5f965.png",self.location).href,link:""},{projectName:"Технокрой",company:"Deneb",describtion:t("describtionTkroi"),imgSrc:new URL("/portfolio/assets/tkroi-a2efe039.png",self.location).href,link:"https://tehnokroi.ru/"}]};return x(()=>window.innerWidth<768),ue(r),U(l,()=>{r()}),re(()=>{}),(u,d)=>(h(),b("section",Bl,[c("div",El,[c("div",Fl,[c("h2",Ol,v(u.$t("projects")),1)])]),n(jl,{"show-arrows":"","selected-class":"bg-success",class:"bg-backgroundResume px-lg-10"},{default:g(()=>[(h(!0),b(K,null,W(o.value,(a,i)=>(h(),k(Nl,{key:i,class:"ma-4"},{default:g(()=>[n($t,{class:"ma-4 bg-white","max-width":"300",height:"580",style:{display:"flex","flex-direction":"column"}},{default:g(()=>[n($e,{class:"align-end text-white",height:"200",src:a.imgSrc,cover:""},null,8,["src"]),n(St,{class:"text-black bg-grey-lighten-5"},{default:g(()=>[S(v(a.projectName),1)]),_:2},1024),n(kt,{class:"pt-4"},{default:g(()=>[S(v(u.$t("inTheCompany"))+" "+v(a.company),1)]),_:2},1024),n(wt,null,{default:g(()=>[S(v(a.describtion),1)]),_:2},1024),n(fl),n(pt,null,{default:g(()=>[n(Wt,{color:"secondary",href:a.link,target:"_blank"},{default:g(()=>[S(v(u.$t("goToTheWebsite")),1)]),_:2},1032,["href"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]))}};const Gl=z({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...T(),...Ve(),...B(),...Te()},"VTimeline"),Ye=V()({name:"VTimeline",props:Gl(),setup(e,s){let{slots:t}=s;const{themeClasses:l}=Ae(e),{densityClasses:o}=nt(e),{rtlClasses:r}=Ce();Ze({VTimelineDivider:{lineColor:H(e,"lineColor")},VTimelineItem:{density:H(e,"density"),lineInset:H(e,"lineInset")}});const u=x(()=>{const a=e.side?e.side:e.density!=="default"?"end":null;return a&&`v-timeline--side-${a}`}),d=x(()=>{const a=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return a;case"start":return a[0];case"end":return a[1];default:return null}});return R(()=>n(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,d.value,{"v-timeline--inset-line":!!e.lineInset},l.value,o.value,u.value,r.value,e.class],style:[{"--v-timeline-line-thickness":ee(e.lineThickness)},e.style]},t)),{}}}),Hl=z({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:N,iconColor:String,lineColor:String,...T(),...oe(),...ut(),...se()},"VTimelineDivider"),Ul=V()({name:"VTimelineDivider",props:Hl(),setup(e,s){let{slots:t}=s;const{sizeClasses:l,sizeStyles:o}=qt(e,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:u}=ke(H(e,"dotColor")),{roundedClasses:d}=ze(e,"v-timeline-divider__dot"),{elevationClasses:a}=De(e),{backgroundColorClasses:i,backgroundColorStyles:m}=ke(H(e,"lineColor"));return R(()=>n("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[n("div",{class:["v-timeline-divider__before",i.value],style:m.value},null),!e.hideDot&&n("div",{key:"dot",class:["v-timeline-divider__dot",a.value,d.value,l.value],style:o.value},[n("div",{class:["v-timeline-divider__inner-dot",u.value,d.value],style:r.value},[t.default?n(te,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},t.default):n(Se,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),n("div",{class:["v-timeline-divider__after",i.value],style:m.value},null)])),{}}}),Kl=z({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:N,iconColor:String,lineInset:[Number,String],...T(),...Ie(),...se(),...oe(),...ut(),...B()},"VTimelineItem"),Qe=V()({name:"VTimelineItem",props:Kl(),setup(e,s){let{slots:t}=s;const{dimensionStyles:l}=Pe(e),o=F(0),r=D();return U(r,u=>{var d;u&&(o.value=((d=u.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:d.getBoundingClientRect().width)??0)},{flush:"post"}),R(()=>{var u,d;return n("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":ee(o.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${ee(e.lineInset)})`:ee(0)},e.style]},[n("div",{class:"v-timeline-item__body",style:l.value},[(u=t.default)==null?void 0:u.call(t)]),n(Ul,{ref:r,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:t.icon}),e.density!=="compact"&&n("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((d=t.opposite)==null?void 0:d.call(t))])])}),{}}}),Wl={id:"CV",class:"bg-backgroundResume pa-10"},ql={class:"px-lg-16 mx-lg-9 py-lg-10"},Yl={class:"d-flex lg:px-16 xl:px-16 md:px-4 sm:px-4 ld:mx-9 xl:mx-9 fill-height",style:{flex:"1"}},Ql={class:"text-h4 text-blockHeader mb-5"},Xl={style:{width:"100%"}},Jl=["textContent"],Zl={class:"text-h5 mt-2"},ea={class:"text-subtitle-2 mt-2"},ta={class:"text-body-2"},la={key:0,class:"text-subtitle-2 mt-2"},aa={class:"text-body-2"},na=["textContent"],sa={class:"text-h5 mt-2"},oa=c("p",{class:"text-subtitle-2 mt-2"},"Обязанности",-1),ia={class:"text-body-2"},ca={key:0,class:"text-subtitle-2 mt-2"},ua={class:"text-body-2"},ra={__name:"ResumeComponent",setup(e){const s=ie(),{t}=ce(),l=x(()=>s.getters.currentLanguage),o=D([]),r=()=>{o.value=[{company:"Stocrm",color:"light-blue-darken-1",date:t("dateStocrm"),position:t("position"),role:t("roleStocrm"),achievements:t("achievementsStocrm")},{company:"Deneb",color:"teal-lighten-1",date:t("dateDeneb"),position:t("position"),role:t("roleDeneb"),achievements:t("achievementsDeneb")},{company:"Diginetica",color:"green",date:t("dateDigi"),position:t("position"),role:t("roleDigi"),achievements:t("achievementsDigi")},{company:t("freelance"),color:"pink",date:t("dateFreelance"),position:t("position"),role:t("roleFreelance"),achievements:""}]},u=x(()=>window.innerWidth<768);return ue(r),U(l,()=>{r()}),re(()=>{}),(d,a)=>(h(),b("section",Wl,[c("div",ql,[c("div",Yl,[c("h2",Ql,v(d.$t("resume")),1)]),c("div",Xl,[u.value?w("",!0):(h(),k(Ye,{key:0,align:"start"},{default:g(()=>[(h(!0),b(K,null,W(o.value,(i,m)=>(h(),k(Qe,{key:m,"dot-color":i.color,size:"small"},{opposite:g(()=>[c("div",{class:J(`font-weight-regular text-subtitle-1 pt-1 headline text-${i.color}`),textContent:v(i.date)},null,10,Jl)]),default:g(()=>[c("div",null,[c("h2",{class:J(`my-2 font-weight-regular text-h4 mt-n1 headline font-weight-light mb-4 text-${i.color}`)},v(i.company),3),c("p",Zl,v(i.position),1),c("p",ea,v(d.$t("responsibilities")),1),c("p",ta,v(i.role),1),i.achievements!==""?(h(),b("p",la,v(d.$t("achievements")),1)):w("",!0),c("p",aa,v(i.achievements),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})),u.value?(h(),k(Ye,{key:1,side:"end",align:"start",class:"px-lg-16 mx-lg-9 px-sm-3"},{default:g(()=>[(h(!0),b(K,null,W(o.value,(i,m)=>(h(),k(Qe,{key:m,"dot-color":i.color,size:"small"},{default:g(()=>[c("template",null,[c("div",{class:J(`font-weight-regular text-subtitle-1 pt-1 headline text-${i.color}`),textContent:v(i.date)},null,10,na)]),c("div",null,[c("h2",{class:J(`my-2 font-weight-regular text-h4 mt-n1 headline font-weight-light mb-4 text-${i.color}`)},v(i.company),3),c("p",sa,v(i.position),1),oa,c("p",ia,v(i.role),1),i.achievements!==""?(h(),b("p",ca,"Достижения")):w("",!0),c("p",ua,v(i.achievements),1)])]),_:2},1032,["dot-color"]))),128))]),_:1})):w("",!0)])])]))}};const je=e=>(Zt("data-v-6a860893"),e=e(),el(),e),da={id:"footer",class:"bg-backgroundFooter d-flex flex-column"},va={class:"d-flex flex-row"},fa={class:"d-flex flex-column px-lg-16 mx-lg-9 py-lg-10 py-5 px-10"},ma={class:"text-h5 text-mainTitle mb-5"},ha={class:"d-flex flex-row my-3 justify-start"},ga={key:0,href:"/Kunashko Arina CV Frontend Developer.pdf",download:"CV_Arina_Kunashko_Frontend_dev.pdf",class:"text-body-1 text-footerText text-decoration-none ml-3"},ya={key:1,href:"/Arina Kunashko  CV Frontend Developer.pdf",download:"CV_Arina_Kunashko_Frontend_dev.pdf",class:"text-body-1 text-footerText text-decoration-none ml-3"},_a={class:"d-flex flex-column px-lg-16 mx-lg-9 py-lg-10 py-5 px-10"},xa={class:"d-flex justify-start"},ba={class:"text-h4 text-mainTitle mb-5 d-flex"},pa=["href"],ka={class:"px-lg-16 mx-lg-9 d-flex py-lg-10 d-flex flex-column py-5 px-10 flex-lg-column flex-sm-column flex-md-column flex-sm-column flex-column flex-xs-column"},Sa={class:"d-flex justify-start"},Ca={class:"text-h4 text-mainTitle mb-5"},wa={class:"pb-5"},$a={class:"d-flex flex-row my-3 justify-start"},Va=je(()=>c("a",{target:"_blank",href:"https://www.linkedin.com/in/arina-kunashko/",class:"text-body-1 text-footerText text-decoration-none ml-3"}," LinkedIn ",-1)),Ia={class:"d-flex flex-row my-3 justify-start"},Ta=je(()=>c("a",{target:"_blank",href:"https://github.com/ArinaKunashko",class:"text-body-1 text-footerText text-decoration-none ml-3"}," GitHub ",-1)),Aa={class:"d-flex flex-row my-3 justify-start"},Pa=["href"],Da=je(()=>c("strong",null,"Arina Kunashko",-1)),pe="kunashkoa@gmail.com",za={__name:"FooterComponent",setup(e){const s=D(Yt),t=D(Qt),l=D(Xt),o=D(Jt),r=x(()=>`mailto:${pe}`),u=()=>{window.location.href=r.value},d=ie(),{t:a}=ce(),i=x(()=>d.getters.currentLanguage),m=D([]),_=()=>{m.value=[{text:a("start"),href:"#start"},{text:a("aboutMe"),href:"#about"},{text:a("portfolio"),href:"#portfolio"},{text:a("resume"),href:"#CV"}]},A=x(()=>window.innerWidth<768);return ue(_),U(i,()=>{_()}),re(()=>{}),(C,p)=>{const E=ct("scroll-to");return h(),b("div",da,[c("div",va,[c("div",fa,[c("h2",ma,v(C.$t("slogan")),1),c("div",ha,[n(O(Z),{type:"mdi",path:o.value},null,8,["path"]),C.$t("downloadRes")==="Скачать резюме"?(h(),b("a",ga,v(C.$t("downloadRes")),1)):w("",!0),C.$t("downloadRes")==="Download resume"?(h(),b("a",ya,v(C.$t("downloadRes")),1)):w("",!0)])]),c("div",_a,[c("div",xa,[c("h2",ba,v(C.$t("navigate")),1)]),(h(!0),b(K,null,W(m.value,$=>it((h(),b("a",{key:$,color:"footerText",class:"d-flex justify-start text-body-1 text-footerText text-decoration-none py-2",rounded:"xl",href:$.href},[S(v($.text),1)],8,pa)),[[E,$.href]])),128))]),c("div",ka,[c("div",Sa,[c("h2",Ca,v(C.$t("contact")),1)]),c("div",wa,[c("div",$a,[n(O(Z),{type:"mdi",path:s.value},null,8,["path"]),Va]),c("div",Ia,[n(O(Z),{type:"mdi",path:l.value},null,8,["path"]),Ta]),c("div",Aa,[n(O(Z),{type:"mdi",path:t.value},null,8,["path"]),A.value?(h(),b("a",{key:1,onClick:u,class:"text-body-1 text-footerText text-decoration-none ml-3"},v(pe))):(h(),b("a",{key:0,target:"_blank",href:r.value,class:"text-body-1 text-footerText text-decoration-none ml-3"},v(pe),8,Pa))])])])]),n(le,{class:"text-center mt-4",cols:"12"},{default:g(()=>[S(v(new Date().getFullYear())+" — ",1),Da]),_:1})])}}},La=Je(za,[["__scopeId","data-v-6a860893"]]),ja={__name:"Home",setup(e){return(s,t)=>(h(),b("div",null,[n(xl),n(zl),n(Ml),n(ra),n(La)]))}};export{ja as default};
