qtProduto =0;

function addProduto(i, add){
   p= lsProdutos[i]
   p.qt += add 
    if(p.qt<=0 ) {return;}
   valorAtual = p.qt* p.valor
   document.getElementById(`parcial-${i}`).innerHTML =  `R$  ${(valorAtual).toFixed(1) }   (x${ p.qt}) `;
}



 


var lsProdutos = [
     { qt: 0,cod:"02", valor: 11.20.toFixed(2), grupo:" salshicha na chapa",categoria:"hotdog" ,descricao:"Pão, salsicha"}
  
];

function carregarProdutos(){
    for (i in lsProdutos){
        p = lsProdutos[i];
        var item = document.getElementsByClassName("item")[0].cloneNode(true);
        item.getElementsByClassName("cod-produto")[0].innerHTML= p.cod;
        item.getElementsByClassName("valor-produto")[0].innerHTML= p.valor;
        item.getElementsByClassName("descricao")[0].innerHTML= p.descricao;
        document.getElementById("conteudo").appendChild(item);

        var btMais=produto.getElementsByClassName("bt-soma")[0];
        btMais.setAttribute("onclick", `addPrduto(${i}, 1)`);


        var btMenos = produto.getElementsByClassName("bt-subtrai")[0];
        btMenos.setAttribute("onclick", `addPrduto(${i}, -1)`);
       

        var idParcial = document.createAttribute("id");
        idParcial.valor = `parcial-${i}`;
        produto.getElementsByClassName("parcial")[0].setAttribute("id", `${i}`);



    }
   document.getElementsByClassName("item")[0].setAttribute("style","dispaly:none");

}

carregarProdutos();

var acc = document.getElementsByClassName("item");
for(i  in acc){
acc[i].addEventListener("click" , function(){
 
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display =="block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
})
}
