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
    cardData.map(( id)=>{
        let cardAdd = document.createElement("div");
        cardAdd.classList.add("my_card")
        cardAdd.innerHTML= `
        <div class="card1 ">
        <div class="choco_img ">
            <div class="image">
                <img src=${id.card_img} alt="">
            </div>
        </div>
        <div class="choco_deatils ">
                <h3>${id.name}</h3>
                <p>${id.price}</p>
                <div class="icon">
                    <button></button>
                    <button></button>
                </div>
        </div>  
</div>
        `
        card_container.appendChild(cardAdd)
    })

    console.log(cardData)
};
addData();

let add_item= document.querySelector(".add_item");

add_item.onclick= ()=>{
    window.location.href = "../pages/add_choco.html"
}


