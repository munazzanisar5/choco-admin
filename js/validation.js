





let signup_btn= document.querySelector(".signup_btn");
let input= document.querySelectorAll(".form-input");

signup_btn.onclick = function(){
    let ragexalphabet= /^[A-za-z]+$/;
    let ragexemail=/^\S+@\S+\.\S+$/;
    let ragexusername= /^[A-Za-z]+\d+$/;
    let ragexpassword= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16} $/;
    !(input[0].value.match(ragexalphabet)) ? input[0].style.backgroundColor="red" : input[0].value.match(ragexalphabet);
    !(input[1].value.match(ragexemail)) ? input[1].style.backgroundColor="red" : input[1].value.match(ragexemail);
    !(input[2].value.match(ragexusername)) ? input[2].style.backgroundColor="red" : input[2].value.match(ragexusername);
    !(input[3].value.match(ragexpassword)) ? input[3].style.backgroundColor="red" : input[3].value.match(ragexpassword);
   
    let full_name=document.querySelector(".full_name").value;
    let email=document.querySelector(".email").value;
    let password=document.querySelector(".password").value;
    let username=document.querySelector(".user_name").value;
    

    let user ={
        Full_name_u: full_name,
        email_u: email,
        username_u: username,
        password_u: password,
 }
    let admin = JSON.stringify(user);
    localStorage.setItem("user", admin);
   if( (input[0].value.match(ragexalphabet)) && (input[1].value.match(ragexemail)) && (input[2].value.match(ragexusername)) && (input[3].value.match(ragexusername))) {
    window.location.href = "../index.html"
}
};



// sign in validation




let signin_btn= document.querySelector(".signin_btn");
let input_form= document.querySelectorAll(".input_form");

signin_btn.onclick= function(){


    let signin_username= document.querySelector(".signin_username").value;
    let signin_password= document.querySelector(".signin_password").value;
    console.log(signin_username);
    console.log(signin_password);

    if(signin_username === user.username_u && signin_password === user.password_u){
        alert("successfully login");
    }
    else{
        alert("not login");
    }
   
}








// console.log((password));

// let admin1 = localStorage.getItem("user");
// let myObject = JSON.parse(admin1);


// localStorage.clear();

/*
signin_btn.onclick= function(){
if(!(input_form[0]===input[2] )){
    input_form[0].style.backgroundColor="red"
};

if(!(input_form[1]=== input[3])){
    input_form[1].style.backgroundColor="red"
};
}; */
