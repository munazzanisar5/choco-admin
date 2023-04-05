let u = JSON.parse(window.localStorage.getItem('user'));




let signin_btn = document.querySelector(".signin_btn");
let input_form = document.querySelectorAll(".input_form");

signin_btn.onclick = async () => {
    let signin_username = document.querySelector(".signin_username").value;
    let signin_password = document.querySelector(".signin_password").value;
    // console.log(signin_username);
    // console.log(signin_password);

    if (signin_username === u.username_u && signin_password === u.password_u) {
        window.location.href = "./pages/home.html"
    }
    else if(!(signin_username === u.username_u) ){
        input_form[0].style.border= "2px solid red";
    }
    else if(!(signin_password === u.password_u)){
        input_form[1].style.border= "2px solid red";

    }
    else{
        input_form[0].style.border= "none";
        input_form[1].style.border= "none";
    }

}





