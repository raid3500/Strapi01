"use strict";(self.webpackChunkproject_6_v_4_20_2=self.webpackChunkproject_6_v_4_20_2||[]).push([[4192],{62482:(ts,p,s)=>{s.d(p,{F:()=>E});var t=s(92132),d=s(21272),P=s(94061),y=s(85963),f=s(51337),T=s(28604),m=s(54894);const E=({displayedFilters:l})=>{const[D,O]=d.useState(!1),{formatMessage:S}=(0,m.A)(),B=d.useRef(null),x=()=>{O(u=>!u)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(P.a,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(y.$,{variant:"tertiary",ref:B,startIcon:(0,t.jsx)(T.A,{}),onClick:x,size:"S",children:S({id:"app.utils.filters",defaultMessage:"Filters"})}),D&&(0,t.jsx)(f.LC,{displayedFilters:l,isVisible:D,onToggle:x,source:B})]}),(0,t.jsx)(f.cZ,{filtersSchema:l})]})}},84192:(ts,p,s)=>{s.d(p,{ProtectedListPage:()=>fs,e:()=>ls});var t=s(92132),d=s(21272),P=s(85963),y=s(61485),f=s(99248),T=s(6239),m=s(83997),E=s(94061),l=s(30893),D=s(90151),O=s(68074),S=s(67030),B=s(25641),x=s(90361),u=s(33363),J=s(50215),g=s(88353),A=s(38413),F=s(55356),X=s(74773),Z=s(4198),e=s(51337),I=s(5409),$=s(54894),q=s(17703),_=s(69580),es=s(62482),h=s(34313),_s=s(41909),ds=s(50612),Es=s(37679),ms=s(60043),Ms=s(61535),b=s(12083),is=s(36224),as=s(97987),Ts=s(15126),Is=s(63299),Us=s(67014),Rs=s(59080),Bs=s(79275),xs=s(14718),us=s(82437),Ws=s(5790),js=s(35223),Ks=s(74930),ps=s(2600),ys=s(48940),Ss=s(41286),Fs=s(51187),$s=s(56336),Ns=s(39404),Vs=s(58692),zs=s(54257),Ys=s(501),Hs=s(57646),Qs=s(23120),Gs=s(44414),Js=s(25962),Xs=s(14664),Zs=s(42588),bs=s(90325),ks=s(62785),ws=s(87443),qs=s(41032),st=s(22957),tt=s(93179),et=s(73055),at=s(15747),nt=s(85306),it=s(77965),ot=s(26509),lt=s(84624),rt=s(71210),_t=s(32058),dt=s(81185),Et=s(82261),mt=s(20296),Mt=s(55151),ct=s(79077);const cs=({onClick:a})=>{const{formatMessage:i}=(0,$.A)();return(0,t.jsx)(P.$,{onClick:a,startIcon:(0,t.jsx)(h.A,{}),size:"S",children:i({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})},Ps=({onToggle:a})=>{const[i,W]=d.useState("create"),[V,z]=d.useState(""),{formatMessage:M}=(0,$.A)(),C=(0,e.hN)(),{lockApp:Y,unlockApp:U}=(0,e.MA)(),{_unstableFormatAPIError:H,_unstableFormatValidationErrors:j}=(0,e.wq)(),n=(0,_.p)(Ds,async()=>(await s.e(9971).then(s.bind(s,79971))).ROLE_LAYOUT,{combine(o,R){return[...o,...R]},defaultValue:[]}),N=(0,_.p)(os,async()=>(await s.e(9971).then(s.bind(s,79971))).FORM_INITIAL_VALUES,{combine(o,R){return{...o,...R}},defaultValue:os}),L=(0,_.p)(is.M,async()=>(await s.e(5182).then(s.bind(s,25182))).MagicLinkEE),[Q]=(0,_.H)(),K=M({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),k=async(o,{setErrors:R})=>{Y();const c=await Q({...o,roles:o.roles??[]});"data"in c?c.data.registrationToken?(z(c.data.registrationToken),ss()):C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}):(C({type:"warning",message:H(c.error)}),(0,_.x)(c.error)&&c.error.name==="ValidationError"&&R(j(c.error))),U()},ss=()=>{r?W(r):a()},{buttonSubmitLabel:w,isDisabled:G,next:r}=As[i];return L?(0,t.jsxs)(y.k,{onClose:a,labelledBy:"title",children:[(0,t.jsx)(f.r,{children:(0,t.jsx)(Es.B,{label:K,children:(0,t.jsx)(ms.m,{isCurrent:!0,children:K})})}),(0,t.jsx)(Ms.l1,{enableReinitialize:!0,initialValues:N??{},onSubmit:k,validationSchema:gs,validateOnChange:!1,children:({errors:o,handleChange:R,values:c,isSubmitting:rs})=>(0,t.jsxs)(e.lV,{children:[(0,t.jsx)(T.c,{children:(0,t.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:6,children:[i!=="create"&&(0,t.jsx)(L,{registrationToken:V}),(0,t.jsxs)(E.a,{children:[(0,t.jsx)(l.o,{variant:"beta",as:"h2",children:M({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,t.jsx)(E.a,{paddingTop:4,children:(0,t.jsx)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,t.jsx)(D.x,{gap:5,children:Os.map(ns=>ns.map(v=>(0,t.jsx)(O.E,{...v.size,children:(0,t.jsx)(e.ah,{...v,disabled:G,error:o[v.name],onChange:R,value:c[v.name]})},v.name)))})})})]}),(0,t.jsxs)(E.a,{children:[(0,t.jsx)(l.o,{variant:"beta",as:"h2",children:M({id:"global.roles",defaultMessage:"User's role"})}),(0,t.jsx)(E.a,{paddingTop:4,children:(0,t.jsxs)(D.x,{gap:5,children:[(0,t.jsx)(O.E,{col:6,xs:12,children:(0,t.jsx)(is.S,{disabled:G,error:o.roles,onChange:R,value:c.roles??[]})}),n.map(ns=>ns.map(v=>(0,t.jsx)(O.E,{...v.size,children:(0,t.jsx)(e.ah,{...v,disabled:G,onChange:R,value:c[v.name]})},v.name)))]})})]})]})}),(0,t.jsx)(S.j,{startActions:(0,t.jsx)(P.$,{variant:"tertiary",onClick:a,type:"button",children:M({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:i==="create"?(0,t.jsx)(P.$,{type:"submit",loading:rs,children:M(w)}):(0,t.jsx)(P.$,{type:"button",loading:rs,onClick:a,children:M(w)})})]})})]}):null},os={firstname:"",lastname:"",email:"",roles:[]},Ds=[],Os=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],gs=b.Ik().shape({firstname:b.Yj().trim().required(e.iW.required),lastname:b.Yj(),email:b.Yj().email(e.iW.email).required(e.iW.required),roles:b.YO().min(1,e.iW.required).required(e.iW.required)}),As={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},hs=({canDelete:a,headers:i=[],entriesToDelete:W=[],onClickDelete:V,onSelectRow:z,withMainAction:M,withBulkActions:C,rows:Y=[]})=>{const{push:U,location:{pathname:H}}=(0,q.W6)(),{formatMessage:j}=(0,$.A)();return(0,t.jsx)(B.N,{children:Y.map(n=>{const N=W.findIndex(L=>L===n.id)!==-1;return(0,t.jsxs)(x.Tr,{...(0,e.qM)({fn:()=>U(`${H}/${n.id}`),condition:C}),children:[M&&(0,t.jsx)(u.Td,{...e.dG,children:(0,t.jsx)(J.J,{"aria-label":j({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,as.g)(n?.firstname??"",n.lastname)}),checked:N,onChange:()=>{z&&z({name:n.id,value:!N})}})}),i.map(({key:L,cellFormatter:Q,name:K,...k})=>(0,t.jsx)(u.Td,{children:typeof Q=="function"?Q(n,{key:L,name:K,formatMessage:j,...k}):(0,t.jsx)(l.o,{textColor:"neutral800",children:n[K]||"-"})},L)),C&&(0,t.jsx)(u.Td,{children:(0,t.jsxs)(m.s,{justifyContent:"end",children:[(0,t.jsx)(g.K,{onClick:()=>U(`${H}/${n.id}`),label:j({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(_s.A,{})}),a&&(0,t.jsx)(E.a,{paddingLeft:1,...e.dG,children:(0,t.jsx)(g.K,{onClick:()=>{V&&V(n.id)},label:j({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,as.g)(n.firstname??"",n.lastname)}),noBorder:!0,icon:(0,t.jsx)(ds.A,{})})})]})})]},n.id)})})},ls=()=>{const{_unstableFormatAPIError:a}=(0,e.wq)(),[i,W]=d.useState(!1),V=(0,_.j)(r=>r.admin_app.permissions),{allowedActions:{canCreate:z,canDelete:M,canRead:C}}=(0,e.ec)(V.settings?.users),Y=(0,e.hN)(),{formatMessage:U}=(0,$.A)(),{search:H}=(0,q.zy)();(0,e.L4)();const{data:j,isError:n,isLoading:N}=(0,_.k)(I.parse(H,{ignoreQueryPrefix:!0}),{skip:!C}),{pagination:L,users:Q}=j??{},K=(0,_.p)(cs,async()=>(await s.e(8011).then(s.bind(s,78011))).CreateActionEE),k=Cs.map(r=>({...r,metadatas:{...r.metadatas,label:U(r.metadatas.label)}})),ss=U({id:"global.users",defaultMessage:"Users"}),w=()=>{W(r=>!r)},[G]=(0,_.J)();return K?(0,t.jsxs)(A.g,{"aria-busy":N,children:[(0,t.jsx)(e.x7,{name:"Users"}),(0,t.jsx)(F.Q,{primaryAction:z&&(0,t.jsx)(K,{onClick:w}),title:ss,subtitle:U({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),C&&(0,t.jsx)(X.B,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.q7,{label:U({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ss})}),(0,t.jsx)(es.F,{displayedFilters:Ls})]})}),(0,t.jsxs)(Z.s,{children:[!C&&(0,t.jsx)(e.UW,{}),n&&(0,t.jsx)("div",{children:"TODO: An error occurred"}),C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.Ee,{contentType:"Users",isLoading:N,onConfirmDeleteAll:async r=>{const o=await G({ids:r});"error"in o&&Y({type:"warning",message:a(o.error)})},onConfirmDelete:async r=>{const o=await G({ids:[r]});"error"in o&&Y({type:"warning",message:a(o.error)})},headers:k,rows:Q,withBulkActions:!0,withMainAction:M,children:(0,t.jsx)(hs,{canDelete:M})}),L&&(0,t.jsx)(E.a,{paddingTop:4,children:(0,t.jsxs)(m.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(e._u,{}),(0,t.jsx)(e.W7,{pagination:L})]})})]})]}),i&&(0,t.jsx)(Ps,{onToggle:w})]}):null},Cs=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:i}){return(0,t.jsx)(l.o,{textColor:"neutral800",children:a.map(W=>i({id:`Settings.permissions.users.${W.code}`,defaultMessage:W.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:i}){return(0,t.jsxs)(m.s,{children:[(0,t.jsx)(e.nW,{variant:a?"success":"danger"}),(0,t.jsx)(l.o,{textColor:"neutral800",children:i({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],Ls=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],vs=()=>{const a=(0,_.p)(ls,async()=>(await s.e(8306).then(s.bind(s,18306))).UserListPageEE);return a?(0,t.jsx)(a,{}):null},fs=()=>{const a=(0,_.j)(i=>i.admin_app.permissions.settings?.users.main);return(0,t.jsx)(e.kz,{permissions:a,children:(0,t.jsx)(vs,{})})}},36224:(ts,p,s)=>{s.d(p,{M:()=>S,S:()=>B,a:()=>O});var t=s(92132),d=s(54894),P=s(69580),y=s(88353),f=s(56654),T=s(51337),m=s(90625),E=s(84795),l=s(63891),D=s(20296);const O=({children:g,target:A})=>{const F=(0,T.hN)(),{formatMessage:X}=(0,d.A)(),{copy:Z}=(0,T.iD)(),e=X({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),I=async()=>{await Z(A)&&F({type:"info",message:{id:"notification.link-copied"}})};return(0,t.jsx)(T.bQ,{endAction:(0,t.jsx)(y.K,{label:e,noBorder:!0,icon:(0,t.jsx)(m.A,{}),onClick:I}),title:A,titleEllipsis:!0,subtitle:g,icon:(0,t.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},S=({registrationToken:g})=>{const{formatMessage:A}=(0,d.A)(),F=`${window.location.origin}${(0,P.K)()}/auth/register?registrationToken=${g}`;return(0,t.jsx)(O,{target:F,children:A({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},B=({disabled:g,error:A,onChange:F,value:X})=>{const{isLoading:Z,roles:e}=(0,D.u)(),{formatMessage:I}=(0,d.A)(),$=A?I({id:A,defaultMessage:A}):"",q=I({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),_=I({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),es=I({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,t.jsx)(f.KF,{id:"roles",disabled:g,error:$,hint:_,label:q,name:"roles",onChange:h=>{F({target:{name:"roles",value:h}})},placeholder:es,startIcon:Z?(0,t.jsx)(J,{}):void 0,value:X.map(h=>h.toString()),withTags:!0,required:!0,children:e.map(h=>(0,t.jsx)(f.fe,{value:h.id.toString(),children:I({id:`global.${h.code}`,defaultMessage:h.name})},h.id))})},x=(0,l.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,u=l.default.div`
  animation: ${x} 2s infinite linear;
`,J=()=>(0,t.jsx)(u,{children:(0,t.jsx)(E.A,{})})},20296:(ts,p,s)=>{s.d(p,{u:()=>f});var t=s(21272),d=s(51337),P=s(54894),y=s(69580);const f=(T={},m)=>{const{locale:E}=(0,P.A)(),l=(0,d.QM)(E,{sensitivity:"base"}),{data:D,error:O,isError:S,isLoading:B,refetch:x}=(0,y.z)(T,m);return{roles:t.useMemo(()=>[...D??[]].sort((J,g)=>l.compare(J.name,g.name)),[D,l]),error:O,isError:S,isLoading:B,refetch:x}}}}]);
