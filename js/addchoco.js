let home= document.querySelector(".home")
home.onclick=()=>{
    window.location.href = "../pages/home.html"
}

let add_choco_img= document.querySelector(".add_choco_img")



add_choco_img.onclick= ()=> {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "file");
    document.body.appendChild(x);
  }


  