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
document.getElementById("parcial").innerHTML = resultado;
}
 
var acc = document.getElementsByClassName("conteudo");
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
    {cod:"02", valor:11, grupo:" salshicha na chapa",categoria:"hotdog" ,descricao:"Pão, salsicha"}
    ,{cod:"03", valor:11,5,categoria:"hamburguer" ,descricao:"Pão, salsicha"}
]
