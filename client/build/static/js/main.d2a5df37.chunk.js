(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},39:function(e,n,t){},41:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t.n(a),i=t(30),l=t.n(i),c=(t(37),t(8)),r=t(9),o=t(2),d=t(11),u=t(10),h=(t(38),t(39),t(21),t(0));var g=function(e){return""===e.user?Object(h.jsx)("div",{children:Object(h.jsx)("a",{className:"ButtonUser",onClick:e.handleSignin,children:"Sign in"})}):Object(h.jsxs)("div",{children:[Object(h.jsx)("a",{className:"ButtonUser",children:e.user}),Object(h.jsx)("a",{className:"ButtonUser",onClick:e.handleSignout,children:"Sign out"})]})};var j=function(e){return Object(h.jsxs)("ul",{id:"NavbarContainer",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"NavbarItem",href:"/",children:"Logo"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"NavbarItem",href:"/YourDictionary",children:"YourDictionary"})}),Object(h.jsx)("li",{id:"Login",children:Object(h.jsx)(g,{user:e.user,handleSignin:e.handleSignin,handleSignout:e.handleSignout})})]})},b=t(31),p=t(3);t(41);var m=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Ch\u1ecdn ng\xf4n ng\u1eef:"}),Object(h.jsxs)("select",{"data-width":"fit",onChange:e.handleChange,children:[Object(h.jsx)("option",{value:"English",selected:"English"===e.language,children:"Ti\u1ebfng Anh"}),Object(h.jsx)("option",{value:"Vietnamese",selected:"Vietnamese"===e.language,children:"Ti\u1ebfng Vi\u1ec7t"}),Object(h.jsx)("option",{value:"Korean",selected:"Korean"===e.language,children:"Ti\u1ebfng H\xe0n"}),Object(h.jsx)("option",{value:"Japanese",selected:"Japanese"===e.language,children:"Ti\u1ebfng Nh\u1eadt"}),Object(h.jsx)("option",{value:"Chinese",selected:"Chinese"===e.language,children:"Ti\u1ebfng Trung"})]})]})};var O=function(e){return console.log(e.language),Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{language:e.language,handleChange:e.handleChangeLanguage}),Object(h.jsx)("p",{children:"T\u1eeb:"}),Object(h.jsx)("input",{type:"text",value:e.content,onChange:e.handleChangeContent})]})},S=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={language1:"English",language2:"Vietnamese",contentLanguage1:"",contentLanguage2:""},a.handleChangeLanguage2=a.handleChangeLanguage2.bind(Object(o.a)(a)),a.handleChangeLanguage2=a.handleChangeLanguage2.bind(Object(o.a)(a)),a.handleChangeContentLanguage2=a.handleChangeContentLanguage2.bind(Object(o.a)(a)),a.handleChangeContentLanguage1=a.handleChangeContentLanguage1.bind(Object(o.a)(a)),a}return Object(r.a)(t,[{key:"handleChangeLanguage1",value:function(e){e.preventDefault(),this.setState({language1:e.target.value})}},{key:"handleChangeLanguage2",value:function(e){e.preventDefault(),this.setState({language2:e.target.value})}},{key:"handleChangeContentLanguage1",value:function(e){e.preventDefault(),this.setState({contentLanguage1:e.target.value})}},{key:"handleChangeContentLanguage2",value:function(e){e.preventDefault(),this.setState({contentLanguage2:e.target.value})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{id:"AddWordWrapper",children:[Object(h.jsx)("h3",{children:"Th\xeam t\u1eeb"}),Object(h.jsx)(O,{language:this.state.language1,handleChangeLanguage:this.handleChangeLanguage1,content:this.state.contentLanguage1,handleChangeContent:this.handleChangeContentLanguage1}),Object(h.jsx)(O,{language:this.state.language2,handleChangeLanguage:this.handleChangeLanguage2,content:this.state.contentLanguage2,handleChangeContent:this.handleChangeContentLanguage2}),Object(h.jsx)("button",{onClick:function(){return e.props.handleAddWord(e.state.language1,e.state.language2,e.state.contentLanguage1,e.state.contentLanguage2)},children:"Th\xeam t\u1eeb"})]})}}]),t}(s.a.Component),x=t(14),f=t.n(x);t(60);var v=function(e){return Object(h.jsx)("div",{className:"popup-box",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),e.children]})})};var C=function(e){return Object(h.jsx)("div",{children:e.isOpen&&Object(h.jsx)(v,{handleClose:e.handleClose,children:Object(h.jsxs)("div",{children:["Th\xe0nh c\xf4ng !!!",Object(h.jsx)("br",{}),"B\u1ea1n \u0111\xe3 th\xeam:",Object(h.jsx)("br",{}),"Ng\xf4n ng\u1eef: ",e.language1,", T\u1eeb: ",e.word1,Object(h.jsx)("br",{}),"Ng\xf4n ng\u1eef: ",e.language2,", T\u1eeb: ",e.word2,Object(h.jsx)("br",{})]})})})},y=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={addWordSuccess:!1,language1:"",language2:"",word1:"",word2:""},a.handleAddWord=a.handleAddWord.bind(Object(o.a)(a)),a.handleCloseAddWordSuccess=a.handleCloseAddWordSuccess.bind(Object(o.a)(a)),a}return Object(r.a)(t,[{key:"handleCloseAddWordSuccess",value:function(){this.setState({addWordSuccess:!1})}},{key:"handleAddWord",value:function(e,n,t,a){var s=this;if(""===this.props.user)alert("C\u1ea7n \u0111\u0103ng nh\u1eadp \u0111\u1ec3 ti\u1ebfp t\u1ee5c");else{var i={user:this.props.user,ngon_ngu_1:e,ngon_ngu_2:n,tu_1:t,tu_2:a};f.a.post("api/word/addWord",i).then((function(i){alert("Success"),s.setState({addWordSuccess:!0,language1:e,language2:n,word1:t,word2:a})})).catch((function(e){alert("Failed")}))}}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"HomeWrapper",children:[Object(h.jsx)(S,{handleAddWord:this.handleAddWord}),Object(h.jsx)(C,{isOpen:this.state.addWordSuccess,language1:this.state.language1,language2:this.state.language2,word1:this.state.word1,word2:this.state.word2,handleClose:this.handleCloseAddWordSuccess})]})}}]),t}(s.a.Component),w=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(h.jsx)("div",{children:"Tu dien cua ban"})}}]),t}(s.a.Component),k=t(16),W=(t(61),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={userName:"",passWord:""},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a}return Object(r.a)(t,[{key:"handleWrongPassword",value:function(){console.log("Wrong password");var e=document.getElementsByClassName("inputText");e[0].style.border="1px solid red",e[1].style.border="1px solid red",document.getElementById("WrongPassword").style.display="block"}},{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(this.state.userName,this.state.passWord,this.handleWrongPassword)}},{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{htmlFor:"userName",children:"User name:"}),Object(h.jsx)("input",{type:"text",value:this.state.userName,id:"userName",name:"userName",onChange:this.handleChange,autoComplete:"off",className:"inputText"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(h.jsx)("input",{type:"text",value:this.state.passWord,id:"password",name:"passWord",onChange:this.handleChange,autoComplete:"off",className:"inputText"}),Object(h.jsx)("div",{id:"WrongPassword",children:"Sai t\xean t\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u"}),Object(h.jsx)("input",{type:"submit",id:"SubmitButton"})]})}}]),t}(s.a.Component));var L=function(e){return Object(h.jsx)("div",{children:e.isOpen&&Object(h.jsxs)(v,{handleClose:e.handleCloseSignin,children:[Object(h.jsx)(W,{handleSubmit:e.handleSubmit}),Object(h.jsxs)("p",{children:["Chua co tai khoan ? ",Object(h.jsx)("a",{href:"/createAccount",children:"Tao tai khoan"})]})]})})};t(62),t(63);var T=function(e){return Object(h.jsx)("div",{children:e.isOpen&&Object(h.jsxs)(v,{handleClose:e.handleClose,children:[Object(h.jsx)("h3",{children:"\u0110\u0103ng k\xfd th\xe0nh c\xf4ng !!!"}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"/",id:"Link",children:"Quay l\u1ea1i trang ch\u1ee7"})]})})},N=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={username:"",password:"",confirm:"",WrongMessage:"",successSignup:!1},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleSignupSuccess=a.handleSignupSuccess.bind(Object(o.a)(a)),a.handleSignupUnsuccess=a.handleSignupUnsuccess.bind(Object(o.a)(a)),a.handleCloseSuccessSignup=a.handleCloseSuccessSignup.bind(Object(o.a)(a)),a}return Object(r.a)(t,[{key:"handleSignupSuccess",value:function(){this.setState({successSignup:!0}),localStorage.setItem("user",this.state.username),localStorage.setItem("password",this.state.password)}},{key:"handleCloseSuccessSignup",value:function(){this.setState({successSignup:!1})}},{key:"handleSignupUnsuccess",value:function(){document.getElementById("new_username").style.border="1px solid red",document.getElementById("SomethingWrong").style.display="block",this.setState({WrongMessage:"T\xean t\xe0i kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i"})}},{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var n=this;if(e.preventDefault(),this.reset(),this.isValid()){var t={username:this.state.username,password:this.state.password};f.a.post("/api/user/signup",t).then((function(e){n.handleSignupSuccess()})).catch((function(e){n.handleSignupUnsuccess()}))}}},{key:"handleConfirmDifferentFromPassword",value:function(){console.log("handleConfirmDifferentFromPassword() called"),document.getElementById("SomethingWrong").style.display="block";var e=document.getElementById("new_password"),n=document.getElementById("confirm_password");e.style.border="1px solid red",n.style.border="1px solid red",this.setState({WrongMessage:"M\u1eadt kh\u1ea9u x\xe1c nh\u1eadn l\u1ea1i kh\xf4ng gi\u1ed1ng m\u1eadt kh\u1ea9u ban \u0111\u1ea7u"})}},{key:"handleStringLengthTooShort",value:function(e){var n;document.getElementById("new_".concat(e)).style.border="1px solid red","username"===e?n="T\xean ng\u01b0\u1eddi d\xf9ng qu\xe1 ng\u1eafn":"password"===e&&(n="M\u1eadt kh\u1ea9u qu\xe1 ng\u1eafn"),document.getElementById("SomethingWrong").style.display="block",this.setState({WrongMessage:n})}},{key:"reset",value:function(){var e=document.getElementById("new_username");e.style.border="1px solid black",(e=document.getElementById("new_password")).style.border="1px solid black",(e=document.getElementById("confirm_password")).style.border="1px solid black"}},{key:"isValid",value:function(){return this.state.confirm!=this.state.password?(this.handleConfirmDifferentFromPassword(),!1):this.state.username.length<5?(this.handleStringLengthTooShort("username"),!1):!(this.state.password.length<5)||(this.handleStringLengthTooShort("password"),!1)}},{key:"render",value:function(){return console.log(this.props.handleSubmit),Object(h.jsxs)("div",{id:"CreateAccountWrapper",children:[Object(h.jsx)("br",{}),Object(h.jsx)(T,{handleClose:this.handleCloseSuccessSignup,isOpen:this.state.successSignup}),Object(h.jsx)("h3",{children:"T\u1ea1o t\xe0i kho\u1ea3n m\u1edbi"}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,id:"FormCreateAccount",children:[Object(h.jsx)("label",{htmlFor:"new_username",children:"T\xean ng\u01b0\u1eddi d\xf9ng:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"new_username",type:"text",value:this.state.username,name:"username",autoComplete:"off",onChange:this.handleChange}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"new_password",children:"M\u1eadt kh\u1ea9u:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"new_password",type:"password",value:this.state.password,name:"password",autoComplete:"off",onChange:this.handleChange}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"confirm_password",children:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u:"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{id:"confirm_password",type:"password",value:this.state.confirm,name:"confirm",onChange:this.handleChange}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{id:"SomethingWrong",children:this.state.WrongMessage}),Object(h.jsx)("input",{type:"submit",value:"Submit",id:"SubmitSignup"})]})]})}}]),t}(s.a.Component),I=function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={user:"",signinOn:!1},a.handleSignin=a.handleSignin.bind(Object(o.a)(a)),a.handleSignout=a.handleSignout.bind(Object(o.a)(a)),a.handleCloseSignin=a.handleCloseSignin.bind(Object(o.a)(a)),a.handleSubmitSignin=a.handleSubmitSignin.bind(Object(o.a)(a)),a}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user"),n=localStorage.getItem("password");null!=e&&null!=n&&this.handleSubmitSignin(e,n,null)}},{key:"handleSignin",value:function(){this.setState({signinOn:!0})}},{key:"handleSignout",value:function(){localStorage.removeItem("user"),localStorage.removeItem("password"),this.setState({user:""})}},{key:"handleSubmitSignin",value:function(e,n,t){var a=this,s={user_name:e,password:n};f.a.post("/api/user/login",s).then((function(e){0!=e.data.length?(a.setState({user:e.data[0].ten_nguoi_dung}),localStorage.setItem("user",a.state.user),localStorage.setItem("password",e.data[0].mat_khau),a.handleCloseSignin()):null!=t&&t()}))}},{key:"handleCloseSignin",value:function(){this.setState({signinOn:!1})}},{key:"render",value:function(){return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{children:Object(h.jsx)(j,{user:this.state.user,handleSignin:this.handleSignin,handleSignout:this.handleSignout})}),Object(h.jsx)(L,{isOpen:this.state.signinOn,handleCloseSignin:this.handleCloseSignin,handleSubmit:this.handleSubmitSignin}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",children:Object(h.jsx)(y,{user:this.state.user})}),Object(h.jsx)(p.a,{exact:!0,path:"/YourDictionary",children:Object(h.jsx)(w,{})}),Object(h.jsx)(p.a,{exact:!0,path:"/createAccount",children:Object(h.jsx)(N,{handleSubmit:this.handleSubmitSignup})})]})]})})}}]),t}(s.a.Component),_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,i=n.getLCP,l=n.getTTFB;t(e),a(e),s(e),i(e),l(e)}))};l.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),_()}},[[72,1,2]]]);
//# sourceMappingURL=main.d2a5df37.chunk.js.map