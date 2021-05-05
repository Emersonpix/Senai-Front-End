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
    item.getElementsByClassName("pst")[0].setAttribute('onclick', ` escolherPasta(${i},this.value)`)
    item.getElementsByClassName("pst")[1].setAttribute('onclick', ` escolherPasta(${i},this.value)`)
    item.getElementsByClassName("pst")[2].setAttribute('onclick', ` escolherPasta(${i},this.value)`)
    item.getElementsByClassName("pst")[3].setAttribute('onclick', ` escolherPasta(${i},this.value)`)
    if (p.cod != '') {
      item.getElementsByClassName("cod-produto")[0].innerHTML = p.cod;


      item.getElementsByClassName("adicionais")[0].remove();
    } else {
      item.getElementsByClassName("item")[0].remove();
      item.getElementsByClassName("pasta")[0].remove()



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
btEnviar = document.getElementById("enviar")
btEnviar.addEventListener("click", function () {
  modal = document.getElementById("modal-enviar")
  msg = ''
  total = 0
  for (i in lsProdutos) {
    p = lsProdutos[i]
    if (p.qt > 0) {
      totalP = (p.qt * p.valor).toFixed(2)
      total += Number(totalP)
      msg += (p.cod == '')? `${p.descricao} `: `COD  ${p.cod}`
      msg += ` (${p.qt}x ${p.valor} )  =${totalP}<br> `

    }


  }
  if (total == 0) {
    msg = 'Escolha pelo menos um produto.'
    rodape = document.getElementById("rodape-modal")
    rodape.innerHTML =""
  } else {
  
  msg += `Total dos Produtos =R$ ${total.toFixed(2)}<br> `
  msg += ` <div id="complemento-envio">
  <input type="text" id="endereco" placeholder="Digite seu endereço:">
  <input type="text" id="nome" placeholder="Digite o seu nome:">
  <span> Clique em "CONTINUAR" para enviar seu pedido via Whatsapp!</span>
  </div>`
  rodape = document.getElementById("rodape-modal")
    rodape.innerHTML =`<button type="button" onclick="continuar()"><i class="fab fa-whatsapp"></i>Continuar</button>`
}
  document.getElementsByClassName("corpo-modal")[0].innerHTML = msg
  modal.style.display = "block"


})

function continuar(){
  nome=document.getElementById("nome")
  if(nome.value=="" )
  {
    alert("Digite seu nome")
  }
}


btFecharModal = document.getElementById("fechar-modal")
btFecharModal.addEventListener("click", function () {
  modal = document.getElementById("modal-enviar")
  modal.style.display = "none"
})


function escolherPasta(i, pasta) {
  lsProdutos[i].pasta = pasta
  console.log("escolher-pasta" + i, pasta)


}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
carregarProdutos();
acc = document.getElementsByClassName("adicionais");
carregaEvento(acc);
acc = document.getElementsByClassName("item");
carregaEvento(acc);
