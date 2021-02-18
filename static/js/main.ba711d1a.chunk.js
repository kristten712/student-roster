(this["webpackJsonpstudent-roster"]=this["webpackJsonpstudent-roster"]||[]).push([[0],{122:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(10),c=a.n(s),i=(a(122),a(34)),l=a(13),o=a(166),u=a(21),j=a(12),d=a(33),m=[{id:"1",firstName:"Harry",lastName:"Potter",email:"hpotter@gmail.com",highSchool:"Hogwarts High School",grade:12,major:"Neuroscience",early:!0,progress:"Started",collegeList:[{id:1,collegeName:"Harvard",cycle:"Regular Decision"},{id:2,collegeName:"Brown",cycle:"Early Action"}],payment:{amountDue:100,amountPaid:200,expectedRevenue:300},psat:{readingWriting:520,math:510},sat:{math:800,verbal:800,essay:8},act:{stem:19,ela:24},aps:[{id:1234231,type:"AP Physics",score:4},{id:2432423,type:"AP Biology",score:5}],satSubjectTests:[{id:1,type:"Math Level II",score:800},{id:2,type:"Biology M",score:750}]},{id:"2",firstName:"Hermione",lastName:"Granger",email:"hgranger@gmail.com",highSchool:"Hogwarts High School",grade:12,major:"Mathematics",early:!0,progress:"Started",collegeList:[{id:1,collegeName:"UC Berkeley",cycle:"Regular Decision"},{id:2,collegeName:"Harvard",cycle:"Early Action"}],payment:{amountDue:50,amountPaid:100,expectedRevenue:150},psat:{readingWriting:520,math:510},sat:{math:750,verbal:750,essay:8},act:{stem:30,ela:30},aps:[{id:4324321,type:"AP Latin",score:5},{id:2243232,type:"AP Chemistry",score:5}],satSubjectTests:[{id:1,type:"Math Level II",score:800},{id:2,type:"US History",score:750}]}],b=a(184),h={id:Object(b.a)(),firstName:"",lastName:"",email:"",highSchool:"",grade:0,major:"",early:!0,progress:"Started",collegeList:[{id:Object(b.a)(),collegeName:"",cycle:""}],payment:{amountDue:0,amountPaid:0,expectedRevenue:0},psat:{readingWriting:0,math:0},sat:{math:0,verbal:0,essay:0},act:{stem:0,ela:0},aps:[{id:Object(b.a)(),type:"",score:0}],satSubjectTests:[{id:Object(b.a)(),type:"",score:0}]},x=a(1),g=n.a.createContext();function p(){return Object(r.useContext)(g)}function O(e){var t=e.children,a=Object(r.useState)(m),n=Object(d.a)(a,2),s=n[0],c=n[1],i=Object(r.useState)(),l=Object(d.a)(i,2),o=l[0],p=l[1],O=Object(r.useState)(h),v=Object(d.a)(O,2),f=v[0],y=v[1],S=s.find((function(e){return e.id===o}));var N={students:s,selectedStudent:S,newStudent:f,handleStudentSelect:function(e){p(e)},handleStudentAdd:function(){c([].concat(Object(j.a)(s),[f]))},handleStudentChange:function(e,t){var a=Object(j.a)(s),r=a.findIndex((function(t){return t.id===e}));a[r]=t,c(a)},findStudent:function(e){return s.find((function(t){return t.id===e}))},handleResetNewStudent:function(){y(Object(u.a)(Object(u.a)({},h),{id:Object(b.a)()}))},handleAppendNewStudent:function(e){var t=s;t.push(e),c(t)},handleDeleteStudent:function(e){var t=Object(j.a)(s);t=t.filter((function(t){return t.id!==e})),c(t)},replaceStudents:function(e){c(e)}};return Object(x.jsx)(g.Provider,{value:N,children:t})}var v=a(159),f=a(165),y=a(163),S=a(133),N=a(164),T=a(162),A=a(98),R=a(183),V=a(99),C=a.n(V);function I(e){var t=e.appBarHeight,a=k(),r=Object(l.f)();return Object(x.jsx)(v.a,{position:"fixed",className:a.appbar,style:{height:t+"px"},children:Object(x.jsxs)(T.a,{children:[Object(x.jsx)(R.a,{display:"flex",flexGrow:1,children:z.map((function(e,t){return Object(x.jsx)(y.a,{component:"nav",children:Object(x.jsx)(S.a,{button:!0,onClick:function(){return t=e.path,void r.push(t);var t},children:Object(x.jsx)(N.a,{primary:e.name,className:a.listItemText})})},t)}))}),Object(x.jsx)(f.a,{onClick:function(){return e=w.url,void window.open(e,"_blank").focus();var e},children:w.icon})]})})}var k=Object(o.a)((function(e){return{appbar:{background:Object(A.fade)("#abdbe3",.9),justifyContent:"center"},listItemText:{color:"black"}}})),w={url:"https://github.com/kristten712/",icon:Object(x.jsx)(C.a,{})},z=[{name:"Student Overview",path:"/student-roster"},{name:"Add New Student",path:"/student-roster/new"}],F=a(173),E=a(76),L=a(22),M=a.n(L),P=a(170),q=a(172),W=a(168),H=a(169),D=a(171),B=a(167),G=a(103);function Z(){var e=_(),t=Object(l.f)(),a=p(),r=a.students,n=a.handleStudentSelect;return Object(x.jsx)(x.Fragment,{children:r.map((function(a){return Object(x.jsxs)(B.a,{onClick:function(){return function(e){n(e.id),t.push("/students/view/".concat(e.id))}(a)},className:e.tr,children:[Object(x.jsx)(W.a,{children:a.firstName+" "+a.lastName}),Object(x.jsx)(W.a,{align:"center",children:a.highSchool}),Object(x.jsx)(W.a,{align:"center",children:a.major}),Object(x.jsx)(W.a,{align:"center",children:a.sat.math+a.sat.verbal}),Object(x.jsx)(W.a,{align:"center",children:a.early?"Yes":"No"}),Object(x.jsx)(W.a,{align:"center",children:a.progress})]},a.id)}))})}var _=Object(o.a)((function(e){return{tr:{"&:hover":{background:"aliceblue",cursor:"pointer"}}}}));function J(){return Object(x.jsx)(H.a,{component:G.a,children:Object(x.jsxs)(P.a,{className:"student-table","aria-label":"student table",children:[Object(x.jsx)(D.a,{children:Object(x.jsxs)(B.a,{children:[Object(x.jsx)(W.a,{children:"Name"}),Object(x.jsx)(W.a,{align:"center",children:"High School"}),Object(x.jsx)(W.a,{align:"center",children:"Intended Major"}),Object(x.jsx)(W.a,{align:"center",children:"SAT"}),Object(x.jsx)(W.a,{align:"center",children:"EA/ED?"}),Object(x.jsx)(W.a,{align:"center",children:"Common App"})]})}),Object(x.jsx)(q.a,{children:Object(x.jsx)(Z,{})})]})})}function U(){var e=$(),t=Object(l.f)();return Object(x.jsxs)("div",{children:[Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"small",className:e.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){t.push("/student-roster/new")},children:"Add Student"}),Object(x.jsx)(E.a,{color:"textSecondary",style:{display:"inline-block"},children:"Click on a row to view student details and edit or delete the student."}),Object(x.jsx)(J,{})]})}var $=Object(o.a)((function(e){return{button:{marginBottom:e.spacing(2),marginRight:e.spacing(2)}}})),Y=a(14),K=a(177);function Q(e){var t=e.title,a=e.size;return Object(x.jsx)(E.a,{variant:a,children:t})}var X=a(186);function ee(e){var t=e.register,a=e.errors,r=e.student;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(X.a,{label:"First Name",name:"firstName",variant:"outlined",type:"text",defaultValue:r.firstName,inputRef:t({required:"Required"}),error:!!a.firstName,helperText:a.firstName&&a.firstName.message}),Object(x.jsx)(X.a,{label:"Last Name",name:"lastName",variant:"outlined",type:"text",defaultValue:r.lastName,inputRef:t({required:"Required"}),error:!!a.lastName,helperText:a.lastName&&a.lastName.message}),Object(x.jsx)(X.a,{label:"Email",name:"email",variant:"outlined",type:"text",defaultValue:r.email,inputRef:t({required:"required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Entered value does not match email format"}}),error:!!a.email,helperText:a.email&&a.email.message}),Object(x.jsx)(X.a,{label:"High School",name:"highSchool",variant:"outlined",type:"text",defaultValue:r.highSchool,inputRef:t({required:"Required"}),error:!!a.highSchool,helperText:a.highSchool&&a.highSchool.message}),Object(x.jsx)(X.a,{label:"Grade",name:"grade",variant:"outlined",type:"number",defaultValue:r.grade,inputRef:t({required:"Required",max:{value:14,message:"Grade must be less than 14."},min:{value:1,message:"Grade must be greater than 0."}}),error:!!a.grade,helperText:a.grade&&a.grade.message}),Object(x.jsx)(X.a,{label:"Prospective Major",name:"major",variant:"outlined",type:"text",defaultValue:r.major,inputRef:t()})]})}function te(e){var t=e.register,a=e.errors,r=e.psat;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{title:"PSAT",size:"h6"}),Object(x.jsx)(X.a,{label:"Math",name:"psat.math",variant:"outlined",type:"number",defaultValue:r.math,inputRef:t({valueAsNumber:!0,max:{value:760,message:"Score must be 760 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.psat||!a.psat.math),helperText:a.psat&&a.psat.math&&a.psat.math.message}),Object(x.jsx)(X.a,{label:"Reading & Writing",name:"psat.readingWriting",variant:"outlined",type:"number",defaultValue:r.readingWriting,inputRef:t({valueAsNumber:!0,max:{value:760,message:"Score must be 760 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.psat||!a.psat.readingWriting),helperText:a.psat&&a.psat.readingWriting&&a.psat.readingWriting.message})]})}function ae(e){var t=e.register,a=e.errors,r=e.sat;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{title:"SAT",size:"h6"}),Object(x.jsx)(X.a,{label:"Math",variant:"outlined",name:"sat.math",type:"number",defaultValue:r.math,inputRef:t({valueAsNumber:!0,max:{value:800,message:"Score must be 800 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.sat||!a.sat.math),helperText:a.sat&&a.sat.math&&a.sat.math.message}),Object(x.jsx)(X.a,{label:"Verbal",variant:"outlined",name:"sat.verbal",type:"number",defaultValue:r.verbal,inputRef:t({valueAsNumber:!0,max:{value:800,message:"Score must be 800 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.sat||!a.sat.verbal),helperText:a.sat&&a.sat.verbal&&a.sat.verbal.message}),Object(x.jsx)(X.a,{label:"Essay",variant:"outlined",name:"sat.essay",type:"number",defaultValue:r.essay,inputRef:t({valueAsNumber:!0,max:{value:8,message:"Score must be 8 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.sat||!a.sat.essay),helperText:a.sat&&a.sat.essay&&a.sat.essay.message})]})}function re(e){var t=e.register,a=e.errors,r=e.act;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{title:"ACT",size:"h6"}),Object(x.jsx)(X.a,{label:"STEM",variant:"outlined",name:"act.stem",type:"number",defaultValue:r.stem,inputRef:t({valueAsNumber:!0,max:{value:36,message:"Score must be 36 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.act||!a.act.stem),helperText:a.act&&a.act.stem&&a.act.stem.message}),Object(x.jsx)(X.a,{label:"ELA",variant:"outlined",name:"act.ela",type:"number",defaultValue:r.ela,inputRef:t({valueAsNumber:!0,max:{value:36,message:"Score must be 36 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.act||!a.act.ela),helperText:a.act&&a.act.ela&&a.act.ela.message})]})}var ne=a(26),se=a.n(ne);function ce(e){var t=e.control,a=e.register,r=(e.errors,ie()),n=Object(Y.b)({control:t,name:"satSubjectTests",keyName:"react-hook-id"}),s=n.fields,c=n.remove,i=n.append;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{title:"SAT Subject Tests",size:"h6"}),s.map((function(e,t){return Object(x.jsxs)("div",{className:r.container,children:[Object(x.jsx)(X.a,{label:"Test Type",variant:"outlined",type:"text",name:"satSubjectTests[".concat(t,"].type"),defaultValue:"".concat(e.type),inputRef:a()}),Object(x.jsx)(X.a,{label:"Test Score",variant:"outlined",type:"text",name:"satSubjectTests[".concat(t,"].score"),defaultValue:"".concat(e.score),inputRef:a({valueAsNumber:!0})}),Object(x.jsx)("input",{type:"hidden",name:"satSubjectTests[".concat(t,"].id"),ref:a(),defaultValue:"".concat(e.id)},e.id),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",className:r.button,startIcon:Object(x.jsx)(se.a,{}),onClick:function(){return c(t)},children:"Remove Subject Test"})]},e.id)})),Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",className:r.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){return i({id:Object(b.a)(),type:"",score:0})},children:"Add Subject Test"})]})}var ie=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},container:{display:"flex",alignItems:"center"},button:{height:"35px"}}}));function le(e){var t=e.control,a=e.register,r=(e.errors,oe()),n=Object(Y.b)({control:t,name:"aps",keyName:"react-hook-id"}),s=n.fields,c=n.remove,i=n.append;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q,{title:"AP Exams",size:"h6"}),s.map((function(e,t){return Object(x.jsxs)("div",{className:r.container,children:[Object(x.jsx)(X.a,{label:"Test Type",variant:"outlined",type:"text",name:"aps[".concat(t,"].type"),defaultValue:"".concat(e.type),inputRef:a()}),Object(x.jsx)(X.a,{label:"Test Score",variant:"outlined",type:"text",name:"aps[".concat(t,"].score"),defaultValue:"".concat(e.score),inputRef:a({valueAsNumber:!0})}),Object(x.jsx)("input",{type:"hidden",name:"aps[".concat(t,"].id"),ref:a(),defaultValue:"".concat(e.id)},e.id),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",className:r.button,startIcon:Object(x.jsx)(se.a,{}),onClick:function(){return c(t)},children:"Remove AP Exam"})]},e.id)})),Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",className:r.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){return i({id:Object(b.a)(),type:"",score:0})},children:"Add AP Exam"})]})}var oe=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},container:{display:"flex",alignItems:"center"},button:{height:"35px"}}}));function ue(e){var t=e.register,a=e.errors,r=e.student,n=e.control;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(te,{register:t,errors:a,psat:r.psat})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(ae,{register:t,errors:a,sat:r.sat})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(re,{register:t,errors:a,act:r.act})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(ce,{register:t,errors:a,control:n})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(le,{register:t,errors:a,control:n})})]})}var je=a(178),de=a(75),me=a(176),be=a(188),he=a(182),xe=function(e){var t=e.name,a=e.label,r=e.control,n=e.defaultValue,s=e.children,c=(e.formClassName,Object(de.a)(e,["name","label","control","defaultValue","children","formClassName"])),i="".concat(t,"-label"),l=ge();return Object(x.jsxs)(me.a,Object(u.a)(Object(u.a)({},c),{},{variant:"outlined",className:l.formControl,children:[Object(x.jsx)(be.a,{id:i,children:a}),Object(x.jsx)(Y.a,{as:Object(x.jsx)(he.a,{labelId:i,label:a,children:s}),name:t,control:r,defaultValue:n})]}))},ge=Object(o.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:180}}}));function pe(e){var t=e.control,a=e.register,r=ve(),n=Object(Y.b)({control:t,name:"collegeList",keyName:"react-hook-id"}),s=n.fields,c=n.remove,i=n.append;return Object(x.jsxs)(x.Fragment,{children:[s.map((function(e,n){return Object(x.jsxs)("div",{className:r.container,children:[Object(x.jsx)(X.a,{label:"College",variant:"outlined",type:"text",name:"collegeList[".concat(n,"].collegeName"),defaultValue:"".concat(e.collegeName),inputRef:a()}),Object(x.jsx)(xe,{name:"collegeList[".concat(n,"].cycle"),label:"Cycle",defaultValue:"".concat(e.cycle),control:t,children:Oe.map((function(e){return Object(x.jsx)(je.a,{value:e,children:e},e)}))}),Object(x.jsx)("input",{type:"hidden",name:"collegeList[".concat(n,"].id"),ref:a(),defaultValue:"".concat(e.id)},e.id),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",className:r.button,startIcon:Object(x.jsx)(se.a,{}),onClick:function(){return c(n)},children:"Remove College"})]},e.id)})),Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",className:r.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){return i({id:Object(b.a)(),collegeName:"",cycle:""})},children:"Add College"})]})}var Oe=["Early Action","Early Decision","Regular Decision"],ve=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},container:{display:"flex",alignItems:"center"},button:{height:"35px"}}}));function fe(){var e=ye(),t=Object(l.f)(),a=p(),r=a.handleResetNewStudent,n=a.newStudent,s=a.handleAppendNewStudent,c=Object(Y.c)({defaultValues:{sat:n.sat,aps:n.aps,collegeList:n.collegeList}}),i=c.register,o=c.control,j=c.handleSubmit,d=c.errors;return Object(x.jsxs)("form",{className:e.root,onSubmit:j((function(e){s(Object(u.a)(Object(u.a)({},n),e)),r(),t.push("/student-roster/")})),children:[Object(x.jsxs)(R.a,{mb:3,mt:2,children:[Object(x.jsx)(Q,{title:"Basic Information",size:"h5"}),Object(x.jsx)(ee,{register:i,errors:d,student:n})]}),Object(x.jsx)(K.a,{}),Object(x.jsxs)(R.a,{mb:3,mt:2,children:[Object(x.jsx)(Q,{title:"Test Scores",size:"h5"}),Object(x.jsx)(ue,{register:i,errors:d,student:n,control:o})]}),Object(x.jsx)(K.a,{}),Object(x.jsxs)(R.a,{mb:3,mt:2,children:[Object(x.jsx)(Q,{title:"College List ",size:"h5"}),Object(x.jsx)(pe,{register:i,errors:d,control:o})]}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",type:"submit",children:"Submit"})})]})}var ye=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"}}}})),Se=Object(o.a)((function(e){return{root:{fontSize:".9em"},item:{padding:0}}}));function Ne(e){var t=e.testType,a=Se();return Object(x.jsx)(S.a,{classes:{root:a.item},children:Object(x.jsx)(N.a,{classes:{primary:a.root,secondary:a.root},primary:t})})}function Te(e){var t=e.aps;return Object(x.jsx)(y.a,{children:t.map((function(e){return Object(x.jsx)(Ne,{testType:"".concat(e.type,": ").concat(e.score)},e.id)}))})}function Ae(e){var t=e.satSubjectTests;return Object(x.jsx)(y.a,{children:t.map((function(e,t){return Object(x.jsx)(Ne,{testType:"SAT II ".concat(e.type,": ").concat(e.score)},e.id)}))})}function Re(e){var t=e.student,a=t.psat,r=t.sat,n=t.act,s=t.aps,c=t.satSubjectTests;function i(e){return"psat"===e?a.readingWriting+a.math:"sat"===e?r.math+r.verbal:"act"===e?(n.stem+n.ela)/2:"Error in computing the sum of the score."}function l(e){return"psat"===e?"Math: ".concat(a.math,"; Reading and Writing: ").concat(a.readingWriting):"sat"===e?"Math: ".concat(r.math,"; Reading and Writing: ").concat(r.verbal,"; Essay: ").concat(r.essay):"act"===e?"STEM: ".concat(n.stem,"; ELA: ").concat(n.ela):"Error in computing score breakdown."}return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(E.a,{variant:"h6",children:"Test Scores"}),Object(x.jsx)(y.a,{children:Object(x.jsx)(Ne,{testType:"PSAT: ".concat(i("psat")),testScores:l("psat")})}),Object(x.jsx)(K.a,{}),Object(x.jsx)(y.a,{children:Object(x.jsx)(Ne,{testType:"SAT: ".concat(i("sat")),testScores:l("sat")})}),Object(x.jsx)(K.a,{}),Object(x.jsx)(y.a,{children:Object(x.jsx)(Ne,{testType:"ACT: ".concat(i("act")),testScores:l("act")})}),Object(x.jsx)(K.a,{}),Object(x.jsx)(Te,{aps:s}),Object(x.jsx)(K.a,{}),Object(x.jsx)(Ae,{satSubjectTests:c})]})}var Ve=a(102);function Ce(e){var t=e.collegeList;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(E.a,{variant:"h6",children:"College List"}),Object(x.jsx)(H.a,{children:Object(x.jsxs)(P.a,{size:"small","aria-label":"a dense table",children:[Object(x.jsx)(D.a,{children:Object(x.jsxs)(B.a,{children:[Object(x.jsx)(W.a,{children:"College"}),Object(x.jsx)(W.a,{align:"center",children:"Category"}),Object(x.jsx)(W.a,{align:"center",children:"Acceptance Rate"}),Object(x.jsx)(W.a,{align:"center",children:"Application Cycle"}),Object(x.jsx)(W.a,{align:"center",children:"Middle 50% SAT"})]})}),Object(x.jsx)(q.a,{children:t.map((function(e){return Object(x.jsxs)(B.a,{children:[Object(x.jsx)(W.a,{component:"th",scope:"row",children:e.collegeName}),Object(x.jsx)(W.a,{align:"center",children:"todo: collegescorecard API"}),Object(x.jsx)(W.a,{align:"center",children:"todo: collegescorecard API"}),Object(x.jsx)(W.a,{align:"center",children:e.cycle}),Object(x.jsx)(W.a,{align:"center",children:"todo: collegescorecard API"})]},e.id)}))})]})})]})}var Ie=a(179),ke=a(180),we=a(181),ze=a(100),Fe=a.n(ze),Ee=a(101),Le=a.n(Ee);function Me(){var e=Pe(),t=Object(l.f)(),a=p(),r=a.handleStudentSelect,n=a.findStudent,s=a.handleDeleteStudent,c=n(Object(l.g)().studentId);return Object(x.jsxs)(Ie.a,{container:!0,spacing:3,justify:"space-between",children:[Object(x.jsx)(Ie.a,{item:!0,xs:2,children:Object(x.jsx)(E.a,{variant:"h5",children:"".concat(c.firstName," ").concat(c.lastName)})}),Object(x.jsx)(Ie.a,{item:!0,xs:5}),Object(x.jsx)(Ie.a,{item:!0,xs:5,children:Object(x.jsxs)(Ie.a,{container:!0,justify:"flex-end",children:[Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"small",className:e.button,startIcon:Object(x.jsx)(Fe.a,{}),onClick:function(){return e=c.id,r(e),void t.push("/student-roster/students/edit/".concat(e));var e},children:"Edit Student"}),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",onClick:function(){return e=c.id,s(e),void t.push("/student-roster/");var e},startIcon:Object(x.jsx)(Le.a,{}),children:"Delete Student"})]})}),Object(x.jsx)(Ie.a,{item:!0,xs:12,sm:4,children:Object(x.jsx)(ke.a,{children:Object(x.jsx)(we.a,{children:Object(x.jsx)(Re,{student:c})})})}),Object(x.jsx)(Ie.a,{item:!0,xs:12,sm:4,children:Object(x.jsx)(ke.a,{children:Object(x.jsxs)(we.a,{children:[Object(x.jsx)(E.a,{variant:"h6",children:"Calendar (todo: add scheduling)"}),Object(x.jsx)(Ve.a,{})]})})}),Object(x.jsx)(Ie.a,{item:!0,xs:12,children:Object(x.jsx)(ke.a,{children:Object(x.jsx)(we.a,{children:Object(x.jsx)(Ce,{collegeList:c.collegeList})})})})]})}var Pe=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"}},button:{marginRight:e.spacing(2)}}}));function qe(e){var t=e.title,a=e.size;return Object(x.jsx)(E.a,{variant:a,children:t})}function We(e){var t=e.register,a=e.errors,r=e.student;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(X.a,{label:"First Name",name:"firstName",variant:"outlined",type:"text",defaultValue:r.firstName,inputRef:t({required:"Required"}),error:!!a.firstName,helperText:a.firstName&&a.firstName.message}),Object(x.jsx)(X.a,{label:"Last Name",name:"lastName",variant:"outlined",type:"text",defaultValue:r.lastName,inputRef:t({required:"Required"}),error:!!a.lastName,helperText:a.lastName&&a.lastName.message}),Object(x.jsx)(X.a,{label:"Email",name:"email",variant:"outlined",type:"text",defaultValue:r.email,inputRef:t({required:"required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Entered value does not match email format"}}),error:!!a.email,helperText:a.email&&a.email.message}),Object(x.jsx)(X.a,{label:"High School",name:"highSchool",variant:"outlined",type:"text",defaultValue:r.highSchool,inputRef:t({required:"Required"}),error:!!a.highSchool,helperText:a.highSchool&&a.highSchool.message}),Object(x.jsx)(X.a,{label:"Grade",name:"grade",variant:"outlined",type:"number",defaultValue:r.grade,inputRef:t({required:"Required",max:{value:14,message:"Grade must be less than 14."},min:{value:1,message:"Grade must be greater than 0."}}),error:!!a.grade,helperText:a.grade&&a.grade.message}),Object(x.jsx)(X.a,{label:"Prospective Major",name:"major",variant:"outlined",type:"text",defaultValue:r.major,inputRef:t({required:"Required"}),error:!!a.major,helperText:a.major&&a.major.message})]})}function He(e){var t=e.register,a=e.errors,r=e.psat;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(qe,{title:"PSAT",size:"h6"}),Object(x.jsx)(X.a,{label:"Math",name:"psat.math",variant:"outlined",type:"number",defaultValue:r.math,inputRef:t({valueAsNumber:!0,max:{value:760,message:"Score must be 760 or less."},min:{value:160,message:"Score cannot be less than 160."}}),error:!(!a.psat||!a.psat.math),helperText:a.psat&&a.psat.math&&a.psat.math.message}),Object(x.jsx)(X.a,{label:"Reading & Writing",name:"psat.readingWriting",variant:"outlined",type:"number",defaultValue:r.readingWriting,inputRef:t({valueAsNumber:!0,max:{value:760,message:"Score must be 760 or less."},min:{value:160,message:"Score cannot be less than 160."}}),error:!(!a.psat||!a.psat.readingWriting),helperText:a.psat&&a.psat.readingWriting&&a.psat.readingWriting.message})]})}function De(e){var t=e.register,a=e.errors,r=e.sat;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(qe,{title:"SAT",size:"h6"}),Object(x.jsx)(X.a,{label:"Math",variant:"outlined",name:"sat.math",type:"number",defaultValue:r.math,inputRef:t({valueAsNumber:!0,max:{value:800,message:"Score must be 800 or less."},min:{value:200,message:"Score cannot be less than 200."}}),error:!(!a.sat||!a.sat.math),helperText:a.sat&&a.sat.math&&a.sat.math.message}),Object(x.jsx)(X.a,{label:"Verbal",variant:"outlined",name:"sat.verbal",type:"number",defaultValue:r.verbal,inputRef:t({valueAsNumber:!0,max:{value:800,message:"Score must be 800 or less."},min:{value:200,message:"Score cannot be less than 200."}}),error:!(!a.sat||!a.sat.verbal),helperText:a.sat&&a.sat.verbal&&a.sat.verbal.message}),Object(x.jsx)(X.a,{label:"Essay",variant:"outlined",name:"sat.essay",type:"number",defaultValue:r.essay,inputRef:t({valueAsNumber:!0,max:{value:8,message:"Score must be 8 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.sat||!a.sat.essay),helperText:a.sat&&a.sat.essay&&a.sat.essay.message})]})}function Be(e){var t=e.register,a=e.errors,r=e.act;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(qe,{title:"ACT",size:"h6"}),Object(x.jsx)(X.a,{label:"STEM",variant:"outlined",name:"act.stem",type:"number",defaultValue:r.stem,inputRef:t({valueAsNumber:!0,max:{value:36,message:"Score must be 36 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.act||!a.act.stem),helperText:a.act&&a.act.stem&&a.act.stem.message}),Object(x.jsx)(X.a,{label:"ELA",variant:"outlined",name:"act.ela",type:"number",defaultValue:r.ela,inputRef:t({valueAsNumber:!0,max:{value:36,message:"Score must be 36 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!a.act||!a.act.ela),helperText:a.act&&a.act.ela&&a.act.ela.message})]})}function Ge(e){var t=e.control,a=e.register,r=e.errors,n=Ze(),s=Object(Y.b)({control:t,name:"satSubjectTests",keyName:"react-hook-id"}),c=s.fields,i=s.remove,l=s.append;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(qe,{title:"SAT Subject Tests",size:"h6"}),c.map((function(e,t){return Object(x.jsxs)("div",{className:n.container,children:[Object(x.jsx)(X.a,{label:"Test Type",variant:"outlined",type:"text",name:"satSubjectTests[".concat(t,"].type"),defaultValue:"".concat(e.type),inputRef:a()}),Object(x.jsx)(X.a,{label:"Test Score",variant:"outlined",type:"text",name:"satSubjectTests[".concat(t,"].score"),defaultValue:"".concat(e.score),inputRef:a({valueAsNumber:!0,max:{value:800,message:"Score must be 800 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!r.satSubjectTests||!r.satSubjectTests[t]),helperText:r.satSubjectTests&&r.satSubjectTests[t]&&r.satSubjectTests["".concat(t)].score.message}),Object(x.jsx)("input",{type:"hidden",name:"satSubjectTests[".concat(t,"].id"),ref:a(),defaultValue:"".concat(e.id)},e.id),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",className:n.button,startIcon:Object(x.jsx)(se.a,{}),onClick:function(){return i(t)},children:"Remove Subject Test"})]},t)})),Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",className:n.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){return l({id:Object(b.a)(),type:"",score:0})},children:"Add Subject Test"})]})}var Ze=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},container:{display:"flex",alignItems:"center"},button:{height:"35px"}}}));function _e(e){var t=e.control,a=e.register,r=e.errors,n=Je(),s=Object(Y.b)({control:t,name:"aps",keyName:"react-hook-id"}),c=s.fields,i=s.remove,l=s.append;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(qe,{title:"AP Exams",size:"h6"}),c.map((function(e,t){return Object(x.jsxs)("div",{className:n.container,children:[Object(x.jsx)(X.a,{label:"Test Type",variant:"outlined",type:"text",name:"aps[".concat(t,"].type"),defaultValue:"".concat(e.type),inputRef:a()}),Object(x.jsx)(X.a,{label:"Test Score",variant:"outlined",type:"text",name:"aps[".concat(t,"].score"),defaultValue:"".concat(e.score),inputRef:a({valueAsNumber:!0,max:{value:5,message:"Score must be 5 or less."},min:{value:0,message:"Score cannot be negative."}}),error:!(!r.aps||!r.aps[t]),helperText:r.aps&&r.aps[t]&&r.aps["".concat(t)].score.message}),Object(x.jsx)("input",{type:"hidden",name:"aps[".concat(t,"].id"),ref:a(),defaultValue:"".concat(e.id)},e.id),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",className:n.button,startIcon:Object(x.jsx)(se.a,{}),onClick:function(){return i(t)},children:"Remove AP Exam"})]},t)})),Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",className:n.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){return l({id:Object(b.a)(),type:"",score:0})},children:"Add AP Exam"})]})}var Je=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},container:{display:"flex",alignItems:"center"},button:{height:"35px"}}}));function Ue(e){var t=e.register,a=e.errors,r=e.student,n=e.control;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(He,{register:t,errors:a,psat:r.psat})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(De,{register:t,errors:a,sat:r.sat})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(Be,{register:t,errors:a,act:r.act})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(Ge,{register:t,errors:a,control:n})}),Object(x.jsx)(K.a,{variant:"middle"}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(_e,{register:t,errors:a,control:n})})]})}var $e=function(e){var t=e.name,a=e.label,r=e.control,n=e.defaultValue,s=e.children,c=(e.formClassName,Object(de.a)(e,["name","label","control","defaultValue","children","formClassName"])),i="".concat(t,"-label"),l=Ye();return Object(x.jsxs)(me.a,Object(u.a)(Object(u.a)({},c),{},{variant:"outlined",className:l.formControl,children:[Object(x.jsx)(be.a,{id:i,children:a}),Object(x.jsx)(Y.a,{as:Object(x.jsx)(he.a,{labelId:i,label:a,children:s}),name:t,control:r,defaultValue:n})]}))},Ye=Object(o.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:180}}}));function Ke(e){var t=e.control,a=e.register,r=Xe(),n=Object(Y.b)({control:t,name:"collegeList",keyName:"react-hook-id"}),s=n.fields,c=n.remove,i=n.append;return Object(x.jsxs)(x.Fragment,{children:[s.map((function(e,n){return Object(x.jsxs)("div",{className:r.container,children:[Object(x.jsx)(X.a,{label:"College",variant:"outlined",type:"text",name:"collegeList[".concat(n,"].collegeName"),defaultValue:"".concat(e.collegeName),inputRef:a()}),Object(x.jsx)($e,{name:"collegeList[".concat(n,"].cycle"),label:"Cycle",defaultValue:"".concat(e.cycle),control:t,children:Qe.map((function(e){return Object(x.jsx)(je.a,{value:e,children:e},e)}))}),Object(x.jsx)("input",{type:"hidden",name:"collegeList[".concat(n,"].id"),ref:a(),defaultValue:"".concat(e.id)},e.id),Object(x.jsx)(F.a,{variant:"contained",color:"secondary",size:"small",className:r.button,startIcon:Object(x.jsx)(se.a,{}),onClick:function(){return c(n)},children:"Remove College"})]},n)})),Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",className:r.button,startIcon:Object(x.jsx)(M.a,{}),onClick:function(){return i({id:Object(b.a)(),collegeName:"",cycle:""})},children:"Add College"})]})}var Qe=["Early Action","Early Decision","Regular Decision"],Xe=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},container:{display:"flex",alignItems:"center"},button:{height:"35px"}}}));function et(){var e=tt(),t=Object(l.f)(),a=p(),r=a.handleStudentChange,n=(0,a.findStudent)(Object(l.g)().studentId),s=Object(Y.c)({defaultValues:{sat:n.sat,aps:n.aps,collegeList:n.collegeList}}),c=s.register,i=s.control,o=s.handleSubmit,j=s.errors;return Object(x.jsxs)("form",{className:e.root,onSubmit:o((function(e){r(n.id,Object(u.a)(Object(u.a)({},n),e)),t.push("/student-roster/students/view/".concat(n.id))})),children:[Object(x.jsxs)(R.a,{mb:3,mt:2,children:[Object(x.jsx)(qe,{title:"Basic Information",size:"h5"}),Object(x.jsx)(We,{register:c,errors:j,student:n})]}),Object(x.jsx)(K.a,{}),Object(x.jsxs)(R.a,{mb:3,mt:2,children:[Object(x.jsx)(qe,{title:"Test Scores",size:"h5"}),Object(x.jsx)(Ue,{register:c,errors:j,student:n,control:i})]}),Object(x.jsx)(K.a,{}),Object(x.jsxs)(R.a,{mb:3,mt:2,children:[Object(x.jsx)(qe,{title:"College List ",size:"h5"}),Object(x.jsx)(Ke,{register:c,errors:j,control:i})]}),Object(x.jsx)(R.a,{mb:3,mt:2,children:Object(x.jsx)(F.a,{variant:"contained",color:"primary",size:"large",type:"submit",children:"Submit"})})]})}var tt=Object(o.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(2),width:"25ch"}}}}));function at(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/student-roster",component:U}),Object(x.jsx)(l.a,{path:"/student-roster/new",component:fe}),Object(x.jsx)(l.a,{exact:!0,path:"/student-roster/students/view/:studentId",component:Me}),Object(x.jsx)(l.a,{exact:!0,path:"/student-roster/students/edit/:studentId",component:et})]})}function rt(){var e=nt();return Object(x.jsx)(O,{children:Object(x.jsx)(i.a,{children:Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)(I,{appBarHeight:50}),Object(x.jsxs)("main",{className:e.content,children:[Object(x.jsx)("div",{style:{height:"50px"}}),Object(x.jsx)(l.c,{children:Object(x.jsx)(at,{})})]})]})})})}var nt=Object(o.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{width:"100%",margin:e.spacing(3)}}}));var st=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(rt,{})})};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(st,{})}),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.ba711d1a.chunk.js.map