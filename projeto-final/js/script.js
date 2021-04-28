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

