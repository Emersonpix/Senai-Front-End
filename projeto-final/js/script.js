function addProduto(i, qt) {
    produto = lsProduto[i];
    produto.qt += qt;
    (produto.qt < 0) ? produto.qt = 0 : "";
    document.getElementById("cod-" + i).innerHTML = `R$ ${(produto.valor * produto.qt).toFixed(1)} (x${produto.qt})`;
}
var pedido = '';

function setEvents(produto) {
    var btSoma = produto.getElementsByClassName("bt-soma")[0];
    addP = document.createAttribute("onclick");
    addP.value = `addProduto(${i}, 1)`;
    btSoma.setAttributeNode(addP)

    var btSubtrai = produto.getElementsByClassName("bt-subtrai")[0];
    addS = document.createAttribute("onclick");
    addS.value = `addProduto(${i}, -1)`;
    btSubtrai.setAttributeNode(addS)

    var idValor = document.createAttribute("id");
    idValor.value = `cod-${i}`;
    produto.getElementsByClassName("parcial")[0].setAttributeNode(idValor);
}