qtProduto = 0;

function addProduto(i, add) {
  p = lsProdutos[i]
  p.qt += add
  if (p.qt < 0) { return; }
  valorAtual = p.qt * p.valor
  document.getElementById(`parcial-${i} `).innerHTML = `R$  ${valorAtual.toFixed(2)} (x${p.qt}) `;
}





//var lsProdutos = [
  //{ qt: 0, cod: "02", valor: 11.2, grupo: " salshicha ", categoria: "hotdog", descricao: "Pão, salsicha" }
 // , { qt: 0, cod: "50", valor: 11.5, grupo: " salshicha na chapa", categoria: "hamburguer", descricao: "Pão, salsicha" }
  //, { qt: 0, cod: "30", valor: 11.5, grupo: " salshicha na chapa", categoria: "hamburguer", descricao: "Pão, salsicha" }
//];

//if (localStorage.getItem('listaProdutos') == null) {
  //localStorage.setItem("listaProdutos", JSON.stringify(lsProdutos))
//}
//lsProdutos = JSON.parse(localStorage.getItem('listaProdutos'));

lsProdutos = carregarItens();
function carregarProdutos() {
  grupoAtual = ''

  for (i in lsProdutos) {
    p = lsProdutos[i];

    if (grupoAtual != p.grupo) {
      grupoAtual = p.grupo
      h2 = document.createElement("h2")
      h2.innerHTML = `${p.grupo} <span>${p.tipo}</span>`
      document.getElementById("conteudo").appendChild(h2);
    }

    var item = document.getElementsByClassName("item-produto")[0].cloneNode(true);
    p = lsProdutos[i];
    if (p.cod != '') {
      item.getElementsByClassName("cod-produto")[0].innerHTML = p.cod;


      item.getElementsByClassName("adicionais")[0].remove();
    } else {
      item.getElementsByClassName("item")[0].remove();
      item.getElementsByClassName("pasta")[0].remove();



    }
    item.getElementsByClassName("descricao")[0].innerHTML = p.descricao;
    item.getElementsByClassName("valor-produto")[0].innerHTML = `R$ ${p.valor}`
    document.getElementById("conteudo").appendChild(item);

    var btMais = item.getElementsByClassName("bt-soma")[0];
    btMais.setAttribute("onclick", `addProduto(${i},1 )`);


    var btMenos = item.getElementsByClassName("bt-subtrai")[0];
    btMenos.setAttribute("onclick", `addProduto(${i}, -1 )`);



    item.getElementsByClassName("valor-parcial")[0].setAttribute("id", `parcial-${i} `)


  }
  document.getElementsByClassName("item")[0].setAttribute("style", "display:none")
  document.getElementsByClassName("adicionais")[0].setAttribute("style", "display:none")
}


carregarProdutos();

function carregaEvento(acc) {
  for (i = 0; i < acc.length; i++) {
    itemTemp = acc[i];
    itemTemp.addEventListener("click", function () {
      var panel = this.nextElementSibling;
      if (panel.style.display == "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

acc = document.getElementsByClassName("adicionais");
carregaEvento(acc);
acc = document.getElementsByClassName("item");
carregaEvento(acc);
