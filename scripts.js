function selecionar_principal(elemento){

    const produtos = document.querySelectorAll(".produto-principal");
    const icones = document.querySelectorAll(".produto-principal ion-icon");

    const produto_icone = elemento.querySelector("ion-icon");

    if(!elemento.classList.contains("desativar-produto")){
        elemento.classList.toggle("desativar-produto");
        produto_icone.classList.toggle("desativar-icone");
    } else {
        
        for(let i = 0; i < produtos.length; i++){
            if (!produtos[i].classList.contains("desativar-produto")){
                produtos[i].classList.toggle("desativar-produto");
                icones[i].classList.toggle("desativar-icone");
            }
        }
        
        elemento.classList.toggle("desativar-produto");
        produto_icone.classList.toggle("desativar-icone");
    }
}
function selecionar_bebida(elemento){

    const produtos = document.querySelectorAll(".produto-bebida");
    const icones = document.querySelectorAll(".produto-bebida ion-icon");

    const produto_icone = elemento.querySelector("ion-icon");

    if(!elemento.classList.contains("desativar-produto")){
        elemento.classList.toggle("desativar-produto");
        produto_icone.classList.toggle("desativar-icone");
    } else {
        
        for(let i = 0; i < produtos.length; i++){
            if (!produtos[i].classList.contains("desativar-produto")){
                produtos[i].classList.toggle("desativar-produto");
                icones[i].classList.toggle("desativar-icone");
            }
        }
        
        elemento.classList.toggle("desativar-produto");
        produto_icone.classList.toggle("desativar-icone");
    }
}
function selecionar_sobremesa(elemento){

    const produtos = document.querySelectorAll(".produto-sobremesa");
    const icones = document.querySelectorAll(".produto-sobremesa ion-icon");

    const produto_icone = elemento.querySelector("ion-icon");

    if(!elemento.classList.contains("desativar-produto")){
        elemento.classList.toggle("desativar-produto");
        produto_icone.classList.toggle("desativar-icone");
    } else {
        
        for(let i = 0; i < produtos.length; i++){
            if (!produtos[i].classList.contains("desativar-produto")){
                produtos[i].classList.toggle("desativar-produto");
                icones[i].classList.toggle("desativar-icone");
            }
        }
        
        elemento.classList.toggle("desativar-produto");
        produto_icone.classList.toggle("desativar-icone");
    }
}