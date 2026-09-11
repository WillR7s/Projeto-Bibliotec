const menu = document.getElementById("menu"); /*pegando o elemento pelo id*/ 

//Estamos pegando o elemento de forma genérica - pode ser classe (precisa trazer o ponto) ou pode ser ID (precisa ter a hashtag),
const NavMenu= document.querySelector(".navegacao");

console.log(menu);

menu.addEventListener("click", function(){
    if(NavMenu.className == "navegacao"){
        NavMenu.className = "navegacao ativo"
    }
    else{
        NavMenu.className="navegacao";
    }
        


})

//opção com arrow function -> função lambda
//manu.addEventListener("click", () =>{})
