(this["webpackJsonpprofile-app"]=this["webpackJsonpprofile-app"]||[]).push([[0],{160:function(e,a,t){},161:function(e,a,t){},190:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(13),r=t.n(l),c=(t(160),t(220)),s=t(193),d=t(235),o=(t(161),t(138)),j=t(234),b=t(244),O=t(58),h=t(75),u=t(67),m=t(2);var x=Object(c.a)((function(e){return{root:{"& .MuiFormControl-root":{margin:e.spacing(1,"auto"),width:"100%",padding:e.spacing(2)},"& .MuiFormLabel-root":{padding:e.spacing(2.5)},"& .MuiTypography-root":{margin:e.spacing(0,2)},"& .MuiAvatar-root":{margin:e.spacing(2)},"& .MuiInputBase-root":{color:"rgba(0, 0, 0, 0.87)",fontWeight:"300"},"& .MuiSvgIcon-root":{verticalAlign:"middle",width:"1.2em",height:"1.2em",marginRight:e.spacing(1)}}}}));function g(e){var a=x();return Object(m.jsx)("form",{className:a.root,autoComplete:"off",children:e.children})}var v=t(223),p=Object(c.a)((function(e){return{root:{margin:e.spacing(2)},label:{textTransform:"none"}}}));function C(e){var a=e.text,t=e.size,n=e.color,i=e.variant,l=e.onClick,r=p();return Object(m.jsx)(v.a,{variant:i,size:t,color:n,onClick:l,classes:{root:r.root,label:r.label},startIcon:e.startIcon,children:a})}var y=t(239);function f(e){var a=e.name,t=e.label,n=e.value,i=e.onChange,l=e.type;return Object(m.jsx)(y.a,{variant:"outlined",label:t,name:a,value:n,onChange:i,required:!0,type:l,disabled:e.disabled,readOnly:e.readOnly})}var N=t(227),S=t(241),A=t(237),k=t(242);function F(e){var a=e.name,t=e.label,n=e.value,i=e.onChange,l=e.options;return Object(m.jsxs)(N.a,{variant:"outlined",children:[Object(m.jsx)(S.a,{children:t}),Object(m.jsxs)(A.a,{label:t,name:a,value:n,onChange:i,disabled:e.disabled,children:[Object(m.jsx)(k.a,{value:n,children:n}),l.map((function(e){return Object(m.jsx)(k.a,{value:e.id,children:e.title},e.id)}))]})]})}var D=t(108),M=t(18),I=t(236);function T(e){var a=e.name,t=e.label,n=e.value,i=e.onChange;return Object(m.jsx)(M.a,{utils:D.a,children:Object(m.jsx)(I.a,{disableToolbar:!0,variant:"inline",inputVariant:"outlined",label:t,format:"MM/dd/yyyy",name:a,value:n,disabled:e.disabled,onChange:function(e){return i(function(e,a){return{target:{name:e,value:a}}}(a,e))}})})}var L=t(243),B=Object(c.a)((function(e){return{large:{width:e.spacing(20),height:e.spacing(20)}}}));function w(){var e=B();return Object(m.jsx)(L.a,{alt:"profileImage",src:"#",className:e.large})}var E=t(128),P=t.n(E),z=t(131),R=t.n(z),J=t(133),V=t.n(J),W=t(134),H=t.n(W),q=t(83),Q=t.n(q),U=t(135),Y=t.n(U),G=t(132),K=t.n(G),X=t(130),Z=t.n(X),$=t(238),_=t(232),ee=t(230),ae=t(233),te=t(231);function ne(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)($.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(m.jsx)(_.a,{id:"alert-dialog-title",children:"Info"}),Object(m.jsx)(ee.a,{children:Object(m.jsx)(ae.a,{id:"alert-dialog-description",children:"Changes Successfully Saved"})}),Object(m.jsx)(te.a,{children:Object(m.jsx)(v.a,{onClick:e.onClose,color:"primary",children:"Okay"})})]})})}var ie={id:0,firstName:"John Mario",middleName:"Makiling",lastName:"Dela Cruz",headLine:"A self-proclaimed full-stack developer :)",employmentStatus:"Full-Time",hireDate:new Date,role:"Front-end Developer",birthDate:"01/01/1990",bloodType:"AB-",contactNumber:"09334811200",emailAddress:"john.mario@gmail.com",emergencyContact:"Clara Maria Dela Cruz",relationship:"Spouse",emergencyContactNumber:"09335822300",addressLine:"Unit 404, Ceres Towers",barangay:"Canduman",city:"Cebu City",province:"Cebu",country:"Philippines"};function le(){var e=function(e){var a=Object(n.useState)(e),t=Object(u.a)(a,2),i=t[0],l=t[1],r=Object(n.useState)(!1),c=Object(u.a)(r,2),s=c[0],d=c[1],o=Object(n.useState)(!1),j=Object(u.a)(o,2),b=j[0],m=j[1];return{values:i,setValues:l,handleInputChange:function(e){var a=e.target,t=a.name,n=a.value;l(Object(h.a)(Object(h.a)({},i),{},Object(O.a)({},t,n)))},editMode:s,changeState:function(){d(!s)},resetForms:function(){d(!s),l(e)},open:b,handleClickOpen:function(){m(!0),d(!s)},handleClose:function(){m(!1)}}}(ie),a=e.values,t=e.handleInputChange,i=e.changeState,l=e.editMode,r=e.resetForms,c=e.open,s=e.handleClickOpen,d=e.handleClose,x=Object(m.jsxs)(o.a,{variant:"h4",children:[a.firstName," ",a.middleName," ",a.lastName]}),v=Object(m.jsx)(o.a,{children:a.headLine}),p=Object(m.jsxs)(o.a,{children:[a.addressLine," ",a.barangay,", ",a.city,", ",a.province,", ",a.country]});return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(g,{children:[Object(m.jsxs)(j.a,{justify:"space-between",container:!0,alignItems:"center",children:[Object(m.jsx)(j.a,{container:!0,item:!0,xs:4,children:Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(P.a,{}),"Profile Information"]})}),Object(m.jsx)(j.a,{item:!0,xs:4}),Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{item:!0,xs:4,children:l?Object(m.jsx)("div",{}):Object(m.jsx)(b.a,{title:"Edit",children:Object(m.jsx)(C,{variant:"contained",color:"primary",size:"small",text:"Edit",onClick:i,startIcon:Object(m.jsx)(Z.a,{})})})})})]}),Object(m.jsxs)(j.a,{container:!0,children:[Object(m.jsx)(j.a,{item:!0,xs:3,children:Object(m.jsx)(w,{type:"file"})}),Object(m.jsxs)(j.a,{container:!0,item:!0,xs:9,children:[x,v,p]})]}),Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(R.a,{}),"Full Name"]}),Object(m.jsxs)(j.a,{item:!0,children:[Object(m.jsx)(f,{label:"First Name",name:"firstName",value:a.firstName,onChange:t,disabled:!l,readOnly:!l}),Object(m.jsx)(f,{label:"Middle Name",name:"middleName",value:a.middleName,onChange:t,disabled:!l,readOnly:!l}),Object(m.jsx)(f,{label:"Last Name",name:"lastName",value:a.lastName,onChange:t,disabled:!l,readOnly:!l})]})]}),l?Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(K.a,{}),"Headline"]}),Object(m.jsx)(j.a,{item:!0,children:Object(m.jsx)(f,{label:"Say Something About Yourself",name:"headLine",value:a.headLine,onChange:t,disabled:!l,readOnly:!l})})]}):Object(m.jsx)("div",{}),Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(V.a,{}),"Employment"]}),Object(m.jsxs)(j.a,{container:!0,children:[Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(F,{name:"employmentStatus",label:"Status",value:a.employmentStatus,onChange:t,options:[{id:"1",title:"Full-Time"},{id:"2",title:"Part-Time"},{id:"3",title:"Contractual"},{id:"4",title:"Trainee"}],disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(T,{name:"hireDate",label:"Date Started",value:a.hireDate,onChange:t,disabled:!l,readOnly:!l})})]}),Object(m.jsx)(j.a,{children:Object(m.jsx)(F,{name:"role",label:"Role",value:a.role,onChange:t,options:[{id:"1",title:"Front-end Developer"},{id:"2",title:"Back-end Developer"},{id:"3",title:"QA Tester"},{id:"4",title:"VP for Solutions Development"},{id:"5",title:"Solutions Architect"},{id:"6",title:"Chief Executive Officer (CEO)"},{id:"7",title:"Executive Assistant"},{id:"8",title:"Marketing"}],disabled:!l,readOnly:!l})}),Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(H.a,{}),"Other Info"]}),Object(m.jsxs)(j.a,{container:!0,children:[Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(T,{name:"birthDate",label:"Birth Date",value:a.birthDate,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(F,{name:"bloodType",label:"Blood Type",value:a.bloodType,onChange:t,options:[{id:"1",title:"A+"},{id:"2",title:"A-"},{id:"3",title:"B+"},{id:"4",title:"B-"},{id:"5",title:"O+"},{id:"6",title:"O-"},{id:"7",title:"AB+"},{id:"8",title:"AB-"}],disabled:!l,readOnly:!l})})]}),Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(Q.a,{}),"Contact Info"]}),Object(m.jsxs)(j.a,{container:!0,children:[Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(f,{name:"contactNumber",label:"Contact Number",value:a.contactNumber,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(f,{name:"emailAddress",label:"Email Address",value:a.emailAddress,onChange:t,disabled:!l,readOnly:!l})})]}),Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(Q.a,{}),"Emergency Contact"]}),Object(m.jsx)(j.a,{children:Object(m.jsx)(f,{name:"emergencyContact",label:"Contact Person",value:a.emergencyContact,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsxs)(j.a,{container:!0,children:[Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(f,{name:"relationship",label:"Relationship",value:a.relationship,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{item:!0,xs:6,children:Object(m.jsx)(f,{name:"emergencyContactNumber",label:"Contact Number",value:a.emergencyContactNumber,onChange:t,disabled:!l,readOnly:!l})})]}),Object(m.jsxs)(o.a,{variant:"h6",children:[Object(m.jsx)(Y.a,{}),"Home Address"]}),Object(m.jsx)(j.a,{container:!0,children:Object(m.jsx)(f,{name:"addressLine",label:"Address Line",value:a.addressLine,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{container:!0,children:Object(m.jsx)(f,{name:"barangay",label:"Barangay",value:a.barangay,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{children:Object(m.jsx)(f,{name:"city",label:"City",value:a.city,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{children:Object(m.jsx)(f,{name:"province",label:"Province",value:a.province,onChange:t,disabled:!l,readOnly:!l})}),Object(m.jsx)(j.a,{children:Object(m.jsx)(f,{name:"country",label:"Country",value:a.country,onChange:t,disabled:!l,readOnly:!l})}),l?Object(m.jsxs)(j.a,{container:!0,children:[Object(m.jsx)(j.a,{item:!0,xs:4}),Object(m.jsxs)(j.a,{item:!0,xs:4,children:[Object(m.jsx)(C,{variant:"contained",color:"default",size:"large",text:"Cancel",onClick:r}),Object(m.jsx)(C,{variant:"contained",color:"primary",size:"large",text:"Save",onClick:s})]}),Object(m.jsx)(j.a,{item:!0,xs:4})]}):Object(m.jsx)("div",{}),Object(m.jsx)(ne,{open:c,onClose:d,onClick:d})]})})}function re(){return Object(m.jsx)("div",{children:Object(m.jsx)(le,{})})}var ce=Object(c.a)((function(e){return{paperWrap:{backgroundColor:"#fff",margin:e.spacing(2,"auto"),width:e.spacing(100),borderRadius:e.spacing(2)}}}));var se=function(){var e=ce();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{className:e.paperWrap,children:Object(m.jsx)(re,{})}),Object(m.jsx)(d.a,{})]})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,246)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),n(e),i(e),l(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(se,{})}),document.getElementById("root")),de()}},[[190,1,2]]]);
//# sourceMappingURL=main.9451cc51.chunk.js.map