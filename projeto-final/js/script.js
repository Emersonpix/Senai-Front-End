qtProduto =0;

function addProduto(){
qtProduto++;
atualizarParcial()
}


function removeProduto(){
    if (qtProduto ==0) return ; 
    qtProduto--;
    atualizarParcial()
}

function atualizarParcial(){
resultado = `R$  ${(9.0 * qtProduto).toFixed(1) }   (x${qtProduto}) `
document.getElementById("valor-parcial").innerHTML = resultado;
}
 
var acc = document.getElementsByClassName("item");
acc[0].addEventListener("click" , function(){
 
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
})

var lsProdutos = [
    {cod:"02", valor:11.20.toFixed(2), grupo:" salshicha",categoria:"hotdog" ,descricao:"Pão, salsicha"}
    ,{cod:"50", valor:11.50.toFixed(2), grupo:" salshicha na chapa", categoria:"hamburguer" ,descricao:"Pão, salsicha"}
];

function carregarProdutos(){
    for (i in lsProdutos){
        p = lsProdutos[i];
        var item = document.getElementsByClassName("item")[0].cloneNode(true);
        item.getElementsByClassName("cod-produto")[0].innerHTML= p.cod;
        item.getElementsByClassName("valor-produto")[0].innerHTML= p.valor;
        item.getElementsByClassName("descricao")[0].innerHTML= p.descricao;
        item.getElementById("conteudo").appendChild(item);
        
    }
}

carregarProdutos();