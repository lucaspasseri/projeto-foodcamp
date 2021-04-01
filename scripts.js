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

    let index_principal;
    let index_bebida;
    let index_sobremesa; 

    for(let i = 0; i < principais.length; i++){
        if (!principais[i].classList.contains("desativar-produto")){
            produto_principal_selecionado = true;
            index_principal = i;
        }
    }
    for(let a = 0; a < bebidas.length; a++){
        if (!bebidas[a].classList.contains("desativar-produto")){
           produto_bebida_selecionado = true;
           index_bebida = a;
        }
    }
    for(let b = 0; b < sobremesas.length; b++){
        if (!sobremesas[b].classList.contains("desativar-produto")){
            produto_sobremesa_selecionado = true;
            index_sobremesa = b;
        }
    }
    const botao = document.querySelector("button");
    let saida = [];

    if ((produto_principal_selecionado === true) && (produto_bebida_selecionado === true) && (produto_sobremesa_selecionado === true)){
        botao.classList.remove("desativar-botao");
        botao.innerHTML = "Fechar pedido";
        saida.push(true);
    }else {
        botao.classList.add("desativar-botao");
        saida.push(false);
    }
    
    saida.push(index_principal);
    saida.push(index_bebida);
    saida.push(index_sobremesa);
    return saida;
}
function fechar_pedido(){
    const botao = document.querySelector("button");
    const vetor = finalizar_pedido();
    
    const tudo_pronto = vetor[0];
    const index_principal = vetor[1];
    const index_bebida = vetor[2];
    const index_sobremesa = vetor[3];

    const principal = document.querySelectorAll(".produto-principal");
    const bebida = document.querySelectorAll(".produto-bebida");
    const sobremesa = document.querySelectorAll(".produto-sobremesa");;

    const principal_selecionado = principal[index_principal];
    const bebida_selecionado = bebida[index_bebida];
    const sobremesa_selecionado = sobremesa[index_sobremesa];

    const principal_valor = parseFloat(principal_selecionado.querySelector(".preco span").innerHTML.replace(',', '.'));
    const bebida_valor = parseFloat(bebida_selecionado.querySelector(".preco span").innerHTML.replace(',', '.'));
    const sobremesa_valor = parseFloat(sobremesa_selecionado.querySelector(".preco span").innerHTML.replace(',', '.'));
    const final_valor = (Number(principal_valor.toFixed(2)) + Number(bebida_valor.toFixed(2)) + Number(sobremesa_valor.toFixed(2))).toFixed(2);

    const pedido_linha1 = "Olá, gostaria de fazer o pedido:"; //%0D%0A
    const pedido_linha2 = "- Prato: " + principal_selecionado.querySelector("h3").innerHTML;
    const pedido_linha3 = "- Bebida: " + bebida_selecionado.querySelector("h3").innerHTML;
    const pedido_linha4 = "- Sobremesa: " + sobremesa_selecionado.querySelector("h3").innerHTML;
    const pedido_linha5 = "Total: R$ " + final_valor;

    const mensagem_linha1 = encodeURIComponent(pedido_linha1);
    const mensagem_linha2 = encodeURIComponent(pedido_linha2);
    const mensagem_linha3 = encodeURIComponent(pedido_linha3);
    const mensagem_linha4 = encodeURIComponent(pedido_linha4);
    const mensagem_linha5 = encodeURIComponent(pedido_linha5);

    const mensagem = mensagem_linha1 +  "%0D%0A" + mensagem_linha2 + "%0D%0A" + mensagem_linha3 
    + "%0D%0A" + mensagem_linha4 + "%0D%0A" + mensagem_linha5; 

    if(tudo_pronto){
        window.open("https://wa.me/5521986201196?text=" + mensagem);
    }
}