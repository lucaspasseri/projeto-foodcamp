function selecionar_principal(elemento){

    const produto = document.querySelectorAll(".produto-principal");
    
    if(!elemento.classList.contains("desativado")){
        elemento.classList.toggle("desativado");
    } else {
        for(let i = 0; i < produto.length; i++){
            if (!produto[i].classList.contains("desativado")){
                produto[i].classList.toggle("desativado");
            }
        }
        
        elemento.classList.toggle("desativado");
    }
}
function selecionar_bebida(elemento){

    const produto = document.querySelectorAll(".produto-bebida");
    
    if(!elemento.classList.contains("desativado")){
        elemento.classList.toggle("desativado");
    } else {
        for(let i = 0; i < produto.length; i++){
            if (!produto[i].classList.contains("desativado")){
                produto[i].classList.toggle("desativado");
            }
        }
        
        elemento.classList.toggle("desativado");
    }
} 
function selecionar_sobremesa(elemento){

    const produto = document.querySelectorAll(".produto-sobremesa");
    
    if(!elemento.classList.contains("desativado")){
        elemento.classList.toggle("desativado");
    } else {
        for(let i = 0; i < produto.length; i++){
            if (!produto[i].classList.contains("desativado")){
                produto[i].classList.toggle("desativado");
            }
        }
        
        elemento.classList.toggle("desativado");
    }
}