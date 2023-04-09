let home= document.querySelector(".home");


home.onclick=()=>{
    window.location.href = "../pages/home.html"
}

let cardData =[
    {
        name: "Viennetta",
        price: "100",
        card_img: "../images/choco1.png",
        id : 1  
    },
    {
        name: "Viennetta",
        price: "100",
        card_img: "../images/choco2.png",
        id: 2
    },
    {
        name: "Viennetta",
        price: "100",
        card_img: "../images/choco3.png",
        id: 3
    },
    {
        name: "Viennetta",
        price: "100",
        card_img: "../images/choco4.png",
        id: 4
    },
    {
        name: "Viennetta",
        price: "100",
        card_img: "../images/choco5.png",
        id: 5
    },
    {
        name: "Viennetta",
        price: "100",
        card_img: "../images/choco6.png",
        id: 6
    }

];

let card_container= document.querySelector(".card_container");

let addData = () =>{
    cardData.map((key,id)=>{
        let cardAdd = document.createElement("div");
        cardAdd.classList.add("my_card")
        cardAdd.innerHTML= `
        <div class="card1 ">
        <div class="choco_img ">
            <div class="image">
                <img src=${key.card_img} alt="">
            </div>
        </div>
        <div class="choco_deatils ">
                <h3>${key.name}</h3>
                <p>${key.price}</p>
                <div class="icon">
                    <button class="edit"></button>
                    <button class="del"></button>
                </div>
        </div>  
</div>
        `
        card_container.appendChild(cardAdd)
    });
 
    
    let edit= document.querySelector(".edit");
    edit.onclick=()=>{
        window.location.href = "../pages/edit_choco.html"
    };

    let del=document.querySelector(".del");
    del.onclick=()=>{
        let my_card= document.querySelector(".my_card");
        my_card.remove();
    };
  
   
    console.log(cardData)

    
};
addData();

let add_item= document.querySelector(".add_item");

add_item.onclick= ()=>{
    window.location.href = "../pages/add_choco.html"
}

let admin_account= document.querySelector(".admin_account");
admin_account.onclick= ()=>{
    window.location.href = "../pages/admin_account.html"
}

let choco_img=document.querySelector(".choco_img")
choco_img.onclick= ()=>{
    window.location.href = "../pages/show_choco.html"
}

let logout= document.querySelector(".logout");

logout.onclick=()=>{
    localStorage.clear();
    window.location.href = "../pages/signup.html"
    // logout.style.border="2px solid red";
}


