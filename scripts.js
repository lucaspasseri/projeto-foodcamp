function selecionar_principal(elemento){

    const produtos = document.querySelectorAll(".produto-principal");
    const icones = document.querySelectorAll(".produto-principal ion-icon");

    const produto_icone = elemento.querySelector("ion-icon");

    const elemento_ativado = !elemento.classList.contains("desativar-produto");
    
    if(elemento_ativado){
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
    finalizar_pedido();
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
    finalizar_pedido();
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
    finalizar_pedido();
}
function finalizar_pedido(){
    const principais = document.querySelectorAll(".produto-principal");
    const bebidas = document.querySelectorAll(".produto-bebida");
    const sobremesas = document.querySelectorAll(".produto-sobremesa");

    let produto_principal_selecionado = false;
    let produto_bebida_selecionado = false;
    let produto_sobremesa_selecionado = false;

    for(let i = 0; i < principais.length; i++){
        if (!principais[i].classList.contains("desativar-produto")){
            produto_principal_selecionado = true;
        }
    }
    for(let a = 0; a < bebidas.length; a++){
        if (!bebidas[a].classList.contains("desativar-produto")){
           produto_bebida_selecionado = true;
        }
    }
    for(let b = 0; b < sobremesas.length; b++){
        if (!sobremesas[b].classList.contains("desativar-produto")){
            produto_sobremesa_selecionado = true;
        }
    }
    const botao = document.querySelector("button");

    if ((produto_principal_selecionado === true) && (produto_bebida_selecionado === true) && (produto_sobremesa_selecionado === true)){
        botao.classList.remove("desativar-botao"); 
    }else {
        botao.classList.add("desativar-botao");
    }
} 