// Pegando o ano atual e colocando no footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Seleção de Filtro do cardápio
const list = document.querySelectorAll(".list");
const card = document.querySelectorAll(".card");

// Adicionando e removendo classes para o filtro de produtos
for(let i = 0; i < list.length; i++){
    list[i].addEventListener("click", function(){
        for(let j = 0; j < list.length; j++){
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        const dataFilter = this.getAttribute("data-filter");

        for(let k = 0; k < card.length; k++){
            card[k].classList.remove("active");
            card[k].classList.add("hide");

            if(card[k].getAttribute("data-item") == dataFilter || dataFilter == "all"){
                card[k].classList.remove("hide");
                card[k].classList.add("active");
            }
        }
    })
}