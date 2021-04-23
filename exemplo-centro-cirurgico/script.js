var lsPessoa = JSON.parse (localStorage.getItem("lsPessoa"));
if (lsPessoa == null) {
    lsPessoa = [];
}
function gravar(){

    var pessoa={};

    pessoa.nome= document.getElementById("nome").value.toUpperCase();;
    pessoa.status= document.getElementById("status").value;
    pessoa.local= document.getElementById("local").value;
    pessoa.horaInicio= document.getElementById("horaInicio").value;
    pessoa.inicioPrevisto= document.getElementById("inicioPrevisto").value;
    pessoa.fimPrevisto= document.getElementById("fimPrevisto").value;
    pessoa.saidaPrevisto= document.getElementById("saidaPrevisto").value;

     var id= document.getElementById("id").value;

    if (id == ""){
        lsPessoa.push(pessoa);
    }else {
        lsPessoa[id]=pessoa;
    }



localStorage.setItem("lsPessoa" , JSON.stringify(lsPessoa))
uptadeTable()
novo();
}
function uptadeTable(){

var lsPessoa = JSON.parse (localStorage.getItem("lsPessoa"));
var bodyTable = "";
for( i in lsPessoa){
    bodyTable += `<tr onclick="editar(${i})"> `;
    bodyTable += `<td> ${lsPessoa[i].nome}</td>`;
    bodyTable += colunaStatus(lsPessoa[i].status, lsPessoa[i].local);
    bodyTable += `<td> ${lsPessoa[i].horaInicio}</td>`;
    bodyTable += `<td> ${lsPessoa[i].inicioPrevisto}</td>`;
    bodyTable += `<td> ${lsPessoa[i].fimPrevisto}</td>`;
    bodyTable += `<td> ${lsPessoa[i].saidaPrevisto}</td>`;
    bodyTable +=  `</tr>`
   
}
document.getElementById("bodyTable").innerHTML = bodyTable;

}

function colunaStatus(status, local) {
    var retorno = "<td &class>&status &local</td>";
    local = (local == "") ? "" : `(${local})`;
    retorno = retorno.replace("&local", local);
    switch (status) {
        case "operatorio": {
            retorno = retorno.replace("&class", "class='table-warning'")
                .replace("&status", "Pré Operatório");
            break;
        }
        case "sala-cirurgia": {
            retorno = retorno.replace("&class", "class='table-danger'")
                .replace("&status", "Em sala de Cirurgia");
            break;
        }
        case "recuperacao": {
            retorno = retorno.replace("&class", "class='table-success'")
                .replace("&status", "Sala de Recuperação");
            break;
        }
        case "transferido": {
            retorno = retorno.replace("&class", "class='table-primary'")
                .replace("&status", "Transferido");
            break;
        }
    }
    return retorno;
}




function editar(id){

    document.getElementById('nome').value=lsPessoa[id].nome ;
    document.getElementById("status").value=lsPessoa[id].status ;
    document.getElementById("local").value=lsPessoa[id].local ;
    document.getElementById("horaInicio").value=lsPessoa[id].horaInicio ;
    document.getElementById("inicioPrevisto").value=lsPessoa[id].inicioPrevisto ;
    document.getElementById("fimPrevisto").value=lsPessoa[id].fimPrevisto;
    document.getElementById("saidaPrevisto").value=lsPessoa[id].saidaPrevisto;
    document.getElementById("id").value=id; 



}

function apagar() {
    var id = document.getElementById("id").value;
    if (id == '') {
        return;
    }
    if (confirm("Você realmente deseja apagar esse registro?")) {
        lsPessoa.splice(id, 1);
        localStorage.setItem("lsPessoa", JSON.stringify(lsPessoa));
        uptadeTable();
        novo();
    }
}

    


function novo(){
document.getElementById("formulario").reset();
document.getElementById("id").value = "";
}


uptadeTable()


