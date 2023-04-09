let home= document.querySelector(".home")
home.onclick=()=>{
    window.location.href = "../pages/home.html"
}


let u = JSON.parse(window.localStorage.getItem('user'));


let admin_name= document.querySelector(".admin_name");
let admin_email= document.querySelector(".admin_email");
let admin_user_name= document.querySelector(".admin_user_name");

admin_name.value=u.Full_name_u;
admin_email.value=u.email_u;
admin_user_name.value=u.username_u;


let admin_btn= document.querySelector(".admin_btn");

admin_btn.onclick= ()=>{
    
let admin_name_v= document.querySelector(".admin_name").value;
let admin_email_v= document.querySelector(".admin_email").value;
let admin_user_name_v= document.querySelector(".admin_user_name").value;

admin_updates
    [admin_name=admin_name_v,
        admin_email=admin_email_v,
        admin_user_name=admin_user_name_v
]
    let admin_new_u =JSON.stringify(admin_updates);
    localStorage.setItem('users', JSON.stringify(admin_new_u));
     JSON.parse(localStorage.getItem('users'));
}