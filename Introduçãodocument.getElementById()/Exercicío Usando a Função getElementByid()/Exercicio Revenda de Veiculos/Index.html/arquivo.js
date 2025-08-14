function mostrarPromocao(){
        //cria referencias aos elementos da pagina
    var inVeiculos = document.getElementById("inVeiculos");
    var inPreco = document.getElementById("inPreco");
    var outVeiculos = document.getElementById("outVeiculos");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");
        //obtém conteúdos dos campos de entrada
    var Veiculo= inVeiculos.value;
    var Preco= Number(inPreco.value);
       //calcula valor de entrada e das parcelas
    var entrada = Preco * 0.50;
    var parcela = (Preco * 0.50)/12;
        //altera o conteúdo dos parágrafos de resposta
    outVeiculos.textContent = "Promoção: " + Veiculo;
    outEntrada.textContent = "Entrada: R$ " + entrada.toFixed(2);   
    outParcela.textContent = "12x de R$ " + parcela.toFixed(2);
    }
    //cria uma referencia ao elemento btnVerPromocao (botão)
    var btnVerPromocao=document.getElementById("btnVerPromocao");
    //registra um evento associado ao botão, para carregar uma função
    btnVerPromocao.addEventListener("click", mostrarPromocao);
