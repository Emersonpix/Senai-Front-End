var lsPessoa = JSON.parse (localStorage.getItem("lsPessoa"));
function gravar(){
    var pessoa={};

    pessoa.nome= document.getElementById("nome").value;
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

document.getElementById("formulario").reset();


}
function uptadeTable(){
    console.log(uptadeTable)

var lsPessoa = JSON.parse (localStorage.getItem("lsPessoa"));
var bodyTable = "";
for( i in lsPessoa){
    bodyTable += `<tr onclick="editar(${i})"> `;
    bodyTable += `<td> ${lsPessoa[i].nome}</td>`;
    bodyTable += `<td> ${lsPessoa[i].status}</td>`;
   // bodyTable += `<td> ${lsPessoa[i].local}</td>`;
    bodyTable += `<td> ${lsPessoa[i].horaInicio}</td>`;
    bodyTable += `<td> ${lsPessoa[i].inicioPrevisto}</td>`;
    bodyTable += `<td> ${lsPessoa[i].fimPrevisto}</td>`;
    bodyTable += `<td> ${lsPessoa[i].saidaPrevisto}</td>`;
    bodyTable +=  `</tr>`
   
}
document.getElementById("bodyTable").innerHTML = bodyTable;

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

function apagar (){
    var id= document.getElementById("id").value;

    lsPessoa.splice(id,1);

}
uptadeTable()