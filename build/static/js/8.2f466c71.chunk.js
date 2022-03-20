(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[8],{139:function(e,a,t){e.exports={page:"AuthForm_page__1vjRI",auth:"AuthForm_auth__jHNee",control:"AuthForm_control__DYzc-",actions:"AuthForm_actions__GAauR"}},351:function(e,a,t){"use strict";var c=t(2),s=t(4),r=t(5),n=t.n(r),l=t(6),o=t.n(l),i=t(0),b=t(138),d=t(136),j=t(78),u=t(9),f=t(1),m=["bsPrefix","className","htmlFor"],O=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.htmlFor,o=Object(s.a)(e,m),b=Object(i.useContext)(j.a).controlId;return t=Object(u.a)(t,"form-check-label"),Object(f.jsx)("label",Object(c.a)(Object(c.a)({},o),{},{ref:a,htmlFor:l||b,className:n()(r,t)}))}));O.displayName="FormCheckLabel";var v=O;var p=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],h=i.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,l=e.bsSwitchPrefix,o=e.inline,m=void 0!==o&&o,O=e.disabled,h=void 0!==O&&O,x=e.isValid,N=void 0!==x&&x,y=e.isInvalid,g=void 0!==y&&y,w=e.feedbackTooltip,P=void 0!==w&&w,I=e.feedback,F=e.feedbackType,k=e.className,C=e.style,R=e.title,S=void 0===R?"":R,_=e.type,L=void 0===_?"checkbox":_,T=e.label,z=e.children,A=e.as,V=void 0===A?"input":A,G=Object(s.a)(e,p);r=Object(u.a)(r,"form-check"),l=Object(u.a)(l,"form-switch");var H=Object(i.useContext)(j.a).controlId,J=Object(i.useMemo)((function(){return{controlId:t||H}}),[H,t]),q=!z&&null!=T&&!1!==T||function(e,a){return i.Children.toArray(e).some((function(e){return i.isValidElement(e)&&e.type===a}))}(z,v),D=Object(f.jsx)(d.a,Object(c.a)(Object(c.a)({},G),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:N,isInvalid:g,disabled:h,as:V}));return Object(f.jsx)(j.a.Provider,{value:J,children:Object(f.jsx)("div",{style:C,className:n()(k,q&&r,m&&"".concat(r,"-inline"),"switch"===L&&l),children:z||Object(f.jsxs)(f.Fragment,{children:[D,q&&Object(f.jsx)(v,{title:S,children:T}),I&&Object(f.jsx)(b.a,{type:F,tooltip:P,children:I})]})})})}));h.displayName="FormCheck";var x=Object.assign(h,{Input:d.a,Label:v}),N=t(208),y=t(20),g=Object(y.a)("form-floating"),w=["controlId","as"],P=i.forwardRef((function(e,a){var t=e.controlId,r=e.as,n=void 0===r?"div":r,l=Object(s.a)(e,w),o=Object(i.useMemo)((function(){return{controlId:t}}),[t]);return Object(f.jsx)(j.a.Provider,{value:o,children:Object(f.jsx)(n,Object(c.a)(Object(c.a)({},l),{},{ref:a}))})}));P.displayName="FormGroup";var I=P,F=(t(137),t(7)),k=["as","bsPrefix","className"],C=["className"],R=["xxl","xl","lg","md","sm","xs"];var S=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,r=e.className,l=Object(s.a)(e,k);t=Object(u.a)(t,"col");var o=[],i=[];return R.forEach((function(e){var a,c,s,r=l[e];delete l[e],"object"===typeof r&&null!=r?(a=r.span,c=r.offset,s=r.order):a=r;var n="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(n):"".concat(t).concat(n,"-").concat(a)),null!=s&&i.push("order".concat(n,"-").concat(s)),null!=c&&i.push("offset".concat(n,"-").concat(c))})),[Object(c.a)(Object(c.a)({},l),{},{className:n.a.apply(void 0,[r].concat(o,i))}),{as:a,bsPrefix:t,spans:o}]}(e),r=Object(F.a)(t,2),l=r[0],o=l.className,i=Object(s.a)(l,C),b=r[1],d=b.as,j=void 0===d?"div":d,m=b.bsPrefix,O=b.spans;return Object(f.jsx)(j,Object(c.a)(Object(c.a)({},i),{},{ref:a,className:n()(o,!O.length&&m)}))}));S.displayName="Col";var _=S,L=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],T=i.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,l=e.bsPrefix,o=e.column,b=e.visuallyHidden,d=e.className,m=e.htmlFor,O=Object(s.a)(e,L),v=Object(i.useContext)(j.a).controlId;l=Object(u.a)(l,"form-label");var p="col-form-label";"string"===typeof o&&(p="".concat(p," ").concat(p,"-").concat(o));var h=n()(d,l,b&&"visually-hidden",o&&p);return m=m||v,o?Object(f.jsx)(_,Object(c.a)({ref:a,as:"label",className:h,htmlFor:m},O)):Object(f.jsx)(r,Object(c.a)({ref:a,className:h,htmlFor:m},O))}));T.displayName="FormLabel",T.defaultProps={column:!1,visuallyHidden:!1};var z=T,A=["bsPrefix","className","id"],V=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.id,o=Object(s.a)(e,A),b=Object(i.useContext)(j.a).controlId;return t=Object(u.a)(t,"form-range"),Object(f.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:n()(r,t),id:l||b}))}));V.displayName="FormRange";var G=V,H=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,l=e.htmlSize,o=e.className,b=e.isValid,d=void 0!==b&&b,m=e.isInvalid,O=void 0!==m&&m,v=e.id,p=Object(s.a)(e,H),h=Object(i.useContext)(j.a).controlId;return t=Object(u.a)(t,"form-select"),Object(f.jsx)("select",Object(c.a)(Object(c.a)({},p),{},{size:l,ref:a,className:n()(o,t,r&&"".concat(t,"-").concat(r),d&&"is-valid",O&&"is-invalid"),id:v||h}))}));J.displayName="FormSelect";var q=J,D=["bsPrefix","className","as","muted"],E=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,o=void 0===l?"small":l,i=e.muted,b=Object(s.a)(e,D);return t=Object(u.a)(t,"form-text"),Object(f.jsx)(o,Object(c.a)(Object(c.a)({},b),{},{ref:a,className:n()(r,t,i&&"text-muted")}))}));E.displayName="FormText";var M=E,Y=i.forwardRef((function(e,a){return Object(f.jsx)(x,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));Y.displayName="Switch";var B=Object.assign(Y,{Input:x.Input,Label:x.Label}),K=["bsPrefix","className","children","controlId","label"],Q=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.children,o=e.controlId,i=e.label,b=Object(s.a)(e,K);return t=Object(u.a)(t,"form-floating"),Object(f.jsxs)(I,Object(c.a)(Object(c.a)({ref:a,className:n()(r,t),controlId:o},b),{},{children:[l,Object(f.jsx)("label",{htmlFor:o,children:i})]}))}));Q.displayName="FloatingLabel";var U=Q,W=["className","validated","as"],X={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},Z=i.forwardRef((function(e,a){var t=e.className,r=e.validated,l=e.as,o=void 0===l?"form":l,i=Object(s.a)(e,W);return Object(f.jsx)(o,Object(c.a)(Object(c.a)({},i),{},{ref:a,className:n()(t,r&&"was-validated")}))}));Z.displayName="Form",Z.propTypes=X;a.a=Object.assign(Z,{Group:I,Control:N.a,Floating:g,Check:x,Switch:B,Label:z,Text:M,Range:G,Select:q,FloatingLabel:U})},357:function(e,a,t){"use strict";t.r(a);var c=t(94),s=t(7),r=t(95),n=t.n(r),l=t(0),o=t(139),i=t.n(o),b=t(3),d=t(25),j=t(351),u=t(1),f=function(){var e=Object(l.useContext)(d.a),a=Object(b.f)(),t=Object(l.useState)(""),r=Object(s.a)(t,2),o=r[0],f=r[1],m=Object(l.useState)(""),O=Object(s.a)(m,2),v=O[0],p=O[1];function h(){return(h=Object(c.a)(n.a.mark((function t(c){var s,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,fetch("".concat("https://react-banks.herokuapp.com","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o,password:v})});case 4:return s=t.sent,t.next=7,s.json();case 7:r=t.sent,e.login(r.userId,r.token),r.userId?(localStorage.setItem("token",r.userId),a("/profile")):alert("Please check your username and password"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}return Object(u.jsx)("section",{className:i.a.page,children:Object(u.jsxs)("div",{className:i.a.auth,children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsxs)(j.a,{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(u.jsxs)(j.a.Group,{className:i.a.control,children:[Object(u.jsx)(j.a.Label,{children:"name"}),Object(u.jsx)(j.a.Control,{value:o,type:"text",onChange:function(e){return f(e.target.value)},required:!0})]}),Object(u.jsxs)(j.a.Group,{className:i.a.control,children:[Object(u.jsx)(j.a.Label,{children:"Password"}),Object(u.jsx)(j.a.Control,{value:v,type:"password",onChange:function(e){return p(e.target.value)},required:!0})]}),Object(u.jsx)("div",{className:i.a.actions,children:Object(u.jsx)("button",{children:"Submit"})})]})]})})};a.default=function(){return Object(u.jsx)(f,{})}}}]);
//# sourceMappingURL=8.2f466c71.chunk.js.map