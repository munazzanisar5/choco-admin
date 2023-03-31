window.onload = async() => {




    // sign in validation

   
    let signup_btn = document.querySelector(".signup_btn");
    let input = document.querySelectorAll(".form-input");

    signup_btn.onclick = async () => {
        let ragexalphabet = /^[A-za-z]+$/;
        let ragexemail = /^\S+@\S+\.\S+$/;
        let ragexusername = /^[A-Za-z]+\d+$/;
        let ragexpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        !(input[0].value.match(ragexalphabet)) ? input[0].style.backgroundColor = "red" : input[0].value.match(ragexalphabet);
        !(input[1].value.match(ragexemail)) ? input[1].style.backgroundColor = "red" : input[1].value.match(ragexemail);
        !(input[2].value.match(ragexusername)) ? input[2].style.backgroundColor = "red" : input[2].value.match(ragexusername);
        !(input[3].value.match(ragexpassword)) ? input[3].style.backgroundColor = "red" : input[3].value.match(ragexpassword);

        let full_name = document.querySelector(".full_name").value;
        let email = document.querySelector(".email").value;
        let password = document.querySelector(".password").value;
        let username = document.querySelector(".user_name").value;


        let user = {
            Full_name_u: full_name,
            email_u: email,
            username_u: username,
            password_u: password,
        }
        let admin = JSON.stringify(user);
        localStorage.setItem("user", admin);
        if ((input[0].value.match(ragexalphabet)) && (input[1].value.match(ragexemail)) && (input[2].value.match(ragexusername)) && (input[3].value.match(ragexusername))) {
            window.location.href = "../index.html"
        }
    };

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
};