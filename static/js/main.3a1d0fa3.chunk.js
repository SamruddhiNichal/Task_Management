(this.webpackJsonpminiproject_1=this.webpackJsonpminiproject_1||[]).push([[0],{39:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),s=c(14),b=c.n(s),a=(c(39),c(12)),r=c(3),i=c(10),l=c(7),o=c(9),d=c(33),O=c.n(d).a.create({baseURL:"http://localhost:8080",headers:{"Content-type":"application/json"}}),u=function(e){return O.post("/saveUser",e)},x=function(e){return O.post("/login",e)},h=c(0);var p=function(){var e=Object(r.f)(),t=Object(n.useState)({name:"",email:"",password:"",mobileNo:""}),c=Object(o.a)(t,2),j=c[0],s=c[1],b=function(e){s(Object(l.a)(Object(l.a)({},j),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{id:"regdiv",children:Object(h.jsxs)("center",{children:[Object(h.jsx)("h1",{children:"Register"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(j),u(j).then((function(c){if(console.log(c.data),""!=c.data){document.getElementById("id1").innerHTML="Click here to login...";var n=document.createElement("button");n.innerHTML="login",document.getElementById("id2").appendChild(n),n.addEventListener("click",(function(){e.push("/")}))}t.target.reset()}))},children:[Object(h.jsx)("label",{className:"reglabel",htmlFor:"name",children:"Name : "}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"reginput",type:"text",name:"name",onChange:b,required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"reglabel",htmlFor:"email",children:"Email : "}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"reginput",type:"text",name:"email",onChange:b,required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"reglabel",htmlFor:"password",children:"Password : "}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"reginput",type:"password",name:"password",onChange:b,required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"reglabel",htmlFor:"mobileNo",children:"Mobile No : "}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"reginput",type:"text",name:"mobileNo",onChange:b,required:!0}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"regsubmit",type:"submit",value:"Submit"}),Object(h.jsx)("h2",{id:"id1"}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{id:"id2"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})]})})};var m=function(){var e=Object(r.f)(),t=Object(n.useState)({email:"",password:""}),c=Object(o.a)(t,2),j=c[0],s=c[1],b=function(e){e.preventDefault(),s(Object(l.a)(Object(l.a)({},j),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{className:"logindiv",children:Object(h.jsxs)("center",{children:[Object(h.jsx)("img",{id:"loginimg",src:"./images/user0.png",alt:""}),Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"loginlabel",htmlFor:"user_id",children:"Email Id"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"loginInput",type:"text",name:"email",onChange:b}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{className:"loginlabel",htmlFor:"password",children:"Password"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"loginInput",type:"password",name:"password",onChange:b}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{id:"loginbutton",type:"button",onClick:function(t){t.preventDefault(),console.log(j),x(j).then((function(t){console.log(t.data),""!=t.data?e.push({pathname:"/user",state:{userName:t.data.name}}):document.getElementById("p1id1").innerHTML="Invalid Credentials"}))},children:"Login"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{id:"p1id1"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{id:"loginanchor",href:"/register",children:"Register"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})})},g=function(e){return O.post("/addTask",e)},f=function(){return O.get("/getAllTask")},v=function(e){return O.get("/findTask/".concat(e))},k=function(e,t){return O.put("/updateTask/".concat(e),t)},N=function(e){return O.put("/deleteTask/".concat(e))},y=c(34);var C=function(){var e=Object(r.f)(),t=Object(r.g)();console.log(t.state.userName);var c=j.a.useState([]),s=Object(o.a)(c,2),b=s[0],a=s[1];Object(n.useEffect)((function(){f().then((function(e){return e.data})).then((function(e){console.log(e),a(e)}))}),[]);var i=Object(n.useState)([]),l=Object(o.a)(i,2),d=l[0],O=l[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("center",{children:[Object(h.jsxs)("h2",{id:"u1",children:[" Welcome , ",t.state.userName," "]}),Object(h.jsx)("right",{children:Object(h.jsx)("button",{type:"button",id:"btnlog",onClick:function(){e.replace("/")},children:"LogOut"})}),Object(h.jsx)("h1",{children:" Tasks"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{id:"user1",type:"button",onClick:function(){e.push({pathname:"/addtask",state:{userName:t.state.userName}})},children:"Add Task"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(y.a,{options:d,onInputChange:function(e){console.log(e),v(e).then((function(e){O(e.data),console.log(e.data)}))}}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Sr.No."}),Object(h.jsx)("th",{children:"Task"}),Object(h.jsx)("th",{children:"Task Info"}),Object(h.jsx)("th",{children:"Date"}),Object(h.jsx)("th",{children:"Action"})]}),b.map((function(c){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:c.id},c.id),Object(h.jsx)("td",{children:c.taskName}),Object(h.jsx)("td",{children:c.taskInfo}),Object(h.jsx)("td",{children:c.date}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{id:"btn5",type:"button",onClick:function(){return n=c.id,void e.push({pathname:"/updatetask",state:{id:n,userName:t.state.userName}});var n},children:"Update"}),"\xa0 \xa0 \xa0 \xa0",Object(h.jsx)("button",{id:"btn6",type:"button",onClick:function(){return e=c.id,N(e),void window.location.reload(!1);var e},children:"Delete"})]})]})}))]})]})})};var I=function(){var e=Object(r.f)(),t=Object(r.g)(),c=Object(n.useState)({taskName:"",taskInfo:"",date:""}),j=Object(o.a)(c,2),s=j[0],b=j[1],a=function(e){b(Object(l.a)(Object(l.a)({},s),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{children:Object(h.jsxs)("center",{children:[Object(h.jsx)("h2",{children:"Add Task"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(s).then((function(t){console.log(t.data),document.getElementById("ide1").innerHTML=t.data,e.target.reset()}))},children:[Object(h.jsx)("label",{id:"labl1",children:"Task Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"intput1",type:"text",name:"taskName",onChange:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{id:"labl1",children:"Task Info"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"intput1",type:"text",name:"taskInfo",onChange:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{id:"labl1",children:"Date"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"intput1",type:"date",name:"date",onChange:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{id:"i1",type:"submit",children:"Add"}),"\xa0 \xa0",Object(h.jsx)("button",{onClick:function(){e.push({pathname:"/user",state:{userName:t.state.userName}})},children:"Back"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{id:"ide1"})]})})};var T=function(){var e=Object(r.g)(),t=Object(r.f)(),c=Object(n.useState)({taskName:"",taskInfo:"",date:""}),j=Object(o.a)(c,2),s=j[0],b=j[1],a=function(e){e.preventDefault(),b(Object(l.a)(Object(l.a)({},s),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(h.jsx)("div",{children:Object(h.jsx)("center",{children:Object(h.jsxs)("form",{onSubmit:function(){k(e.state.id,s),t.push({pathname:"/user",state:{userName:e.state.userName}}),window.location.reload(!1)},children:[Object(h.jsx)("label",{id:"labl1",children:"Task Name"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"intput1",type:"text",name:"taskName",onChange:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{id:"labl1",children:"Task Info"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"intput1",type:"text",name:"taskInfo",onChange:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{id:"labl1",children:"Date"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"intput1",type:"date",name:"date",onChange:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{id:"i1",type:"submit",children:"Update"}),"\xa0 \xa0"]})})})};c(74),c(75),c(76),c(77);var w=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(a.a,{children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsx)(m,{})}),Object(h.jsx)(r.a,{path:"/register",children:Object(h.jsx)(p,{})}),Object(h.jsx)(r.a,{path:"/user",children:Object(h.jsx)(C,{})}),Object(h.jsx)(r.a,{path:"/addtask",children:Object(h.jsx)(I,{})}),Object(h.jsx)(r.a,{path:"/updatetask",children:Object(h.jsx)(T,{})})]})})})};b.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.3a1d0fa3.chunk.js.map