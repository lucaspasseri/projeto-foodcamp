function selecionar(categoria, index){
    
    const selecionarCategoria = document.querySelector(categoria);
    const selecionarProdutos = selecionarCategoria.querySelectorAll(" li > div"); 
    const selecionarProduto = selecionarProdutos[index];

    const selecionarIcones = selecionarCategoria.querySelectorAll(" li > div ion-icon");
    const selecionarIcone = selecionarIcones[index];

    if (selecionarProduto.classList.contains("desativar-produto")){
        for(let i = 0; i < selecionarProdutos.length; i++){
            if(!selecionarProdutos[i].classList.contains("desativar-produto")){
                selecionarProdutos[i].classList.toggle("desativar-produto");
                selecionarIcones[i].classList.toggle("desativar-icone")
            } 
        }
        selecionarProduto.classList.toggle("desativar-produto");
        selecionarIcone.classList.toggle("desativar-icone");
    } else {
        selecionarProduto.classList.toggle("desativar-produto");
        selecionarIcone.classList.toggle("desativar-icone");
    }
    
    finalizarPedido();
}

function finalizarPedido(){
    
    const principais = document.querySelectorAll(".principal li > div");
    const bebidas = document.querySelectorAll(".bebida li > div");
    const sobremesas = document.querySelectorAll(".sobremesa li > div");
   
    let produtoPrincipalSelecionado = false;
    let produtoBebidaSelecionado = false;
    let produtoSobremesaSelecionado = false;

    let indexPrincipal;
    let indexBebida;
    let indexSobremesa; 

    for(let i = 0; i < principais.length; i++){
        if (!principais[i].classList.contains("desativar-produto")){
            produtoPrincipalSelecionado = true;
            indexPrincipal = i;
        }
    }
    for(let a = 0; a < bebidas.length; a++){
        if (!bebidas[a].classList.contains("desativar-produto")){
           produtoBebidaSelecionado = true;
           indexBebida = a;
        }
    }
    for(let b = 0; b < sobremesas.length; b++){
        if (!sobremesas[b].classList.contains("desativar-produto")){
            produtoSobremesaSelecionado = true;
            indexSobremesa = b;
        }
    }

    const botao = document.querySelector("button");
    let saida = [];

    if ( (produtoPrincipalSelecionado === true) && (produtoBebidaSelecionado === true) && 
    (produtoSobremesaSelecionado === true) ){
        botao.classList.remove("desativar-botao");
        botao.innerHTML = "Fechar pedido";
        botao.style.fontWeight = "700";
        saida.push(true);
    }else {
        botao.classList.add("desativar-botao");
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
        botao.style.fontWeight = "400";
        saida.push(false);
    }
    
    saida.push(indexPrincipal);
    saida.push(indexBebida);
    saida.push(indexSobremesa);
    console.log(saida);
    return saida;
}

function fecharPedido(){
    const vetor = finalizarPedido();
    
    const tudoCerto = vetor[0];  // as três categorias do cardápio foram selecionadas
    const indexPrincipal = vetor[1];
    const indexBebida = vetor[2];
    const indexSobremesa = vetor[3];

    const principal = document.querySelectorAll(".principal li > div");
    const bebida = document.querySelectorAll(".bebida li > div");
    const sobremesa = document.querySelectorAll(".sobremesa li > div");;

    const principalSelecionado = principal[indexPrincipal];
    const bebidaSelecionado = bebida[indexBebida];
    const sobremesaSelecionado = sobremesa[indexSobremesa];

    const principalValor = parseFloat(principalSelecionado.querySelector(".preco span").innerHTML.replace(',', '.'));   
    const bebidaValor = parseFloat(bebidaSelecionado.querySelector(".preco span").innerHTML.replace(',', '.'));
    const sobremesaValor = parseFloat(sobremesaSelecionado.querySelector(".preco span").innerHTML.replace(',', '.'));
    const totalValor = ( Number(principalValor.toFixed(2)) + Number(bebidaValor.toFixed(2)) + 
    Number(sobremesaValor.toFixed(2)) ).toFixed(2);

    const principalNome = principalSelecionado.querySelector("h3").innerHTML;
    const bebidaNome = bebidaSelecionado.querySelector("h3").innerHTML;
    const sobremesaNome = sobremesaSelecionado.querySelector("h3").innerHTML;

    const pedidoLinha1 = "Olá, gostaria de fazer o pedido:";
    const pedidoLinha2 = "- Prato: " + principalNome;
    const pedidoLinha3 = "- Bebida: " + bebidaNome;
    const pedidoLinha4 = "- Sobremesa: " + sobremesaNome;
    const pedidoLinha5 = "Total: R$ " + totalValor;

    const mensagemLinha1 = encodeURIComponent(pedidoLinha1);
    const mensagemLinha2 = encodeURIComponent(pedidoLinha2);
    const mensagemLinha3 = encodeURIComponent(pedidoLinha3);
    const mensagemLinha4 = encodeURIComponent(pedidoLinha4);
    const mensagemLinha5 = encodeURIComponent(pedidoLinha5);

    const mensagem = mensagemLinha1 +  "%0D%0A" + mensagemLinha2 + "%0D%0A" + mensagemLinha3 
    + "%0D%0A" + mensagemLinha4 + "%0D%0A" + mensagemLinha5; 

    if(tudoCerto){
        const seletorConfirmacao = document.querySelector(".confirmar-pedido");
        seletorConfirmacao.classList.toggle("esconder");
        const principalConfirmacaoNome = seletorConfirmacao.querySelector("li:first-of-type span:first-of-type");
        const principalConfirmacaoValor = seletorConfirmacao.querySelector("li:first-of-type span:last-of-type");
        const bebidaConfirmacaoNome = seletorConfirmacao.querySelector("li:nth-of-type(2) span:first-of-type");
        const bebidaConfirmacaoValor = seletorConfirmacao.querySelector("li:nth-of-type(2) span:last-of-type");
        const sobremesaConfirmacaoNome = seletorConfirmacao.querySelector("li:nth-of-type(3) span:first-of-type");
        const sobremesaConfirmacaoValor = seletorConfirmacao.querySelector("li:nth-of-type(3) span:last-of-type");
        const totalValorConfirmacao = seletorConfirmacao.querySelector("li:nth-of-type(4) span:last-of-type");

        principalConfirmacaoNome.innerHTML = principalNome;
        principalConfirmacaoValor.innerHTML = principalValor.toFixed(2);
        bebidaConfirmacaoNome.innerHTML = bebidaNome;
        bebidaConfirmacaoValor.innerHTML = bebidaValor.toFixed(2);
        sobremesaConfirmacaoNome.innerHTML = sobremesaNome;
        sobremesaConfirmacaoValor.innerHTML = sobremesaValor.toFixed(2);
        totalValorConfirmacao.innerHTML = totalValor;
    }

    return mensagem;
}

function finalizarConfirmar(){
    const mensagem = fecharPedido();
    window.open("https://wa.me/5521986201196?text=" + mensagem);
}

function finalizarCancelar(){
    const seletorConfirmacao = document.querySelector(".confirmar-pedido");
    seletorConfirmacao.classList.toggle("esconder");
}