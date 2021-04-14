lsPessoa = [];
function gravar(){
    var pessoa={};

    pessoa.nome= document.getElementById("nome").value;
    pessoa.status= document.getElementById("status").value;
    pessoa.local= document.getElementById("local").value;
    pessoa.horaInicio= document.getElementById("horaInicio").value;
    pessoa.inicioPrevisto= document.getElementById("inicioPrevisto").value;
    pessoa.fimPrevisto= document.getElementById("fimPrevisto").value;
    pessoa.saidaPrevisto= document.getElementById("saidaPrevisto").value;

console.log(pessoa);
lsPessoa.push(pessoa);

localStorage.setItem("lsPessoa" , JSON.stringify(lsPessoa))
uptadeTable()

}
function uptadeTable(){
    console.log(uptadeTable)
var lsPessoa = JSON.parse (localStorage.getItem("lsPessoa"));
var bodyTable = "";
for( i in lsPessoa){
    bodyTable += `<tr>`;
    bodyTable += `<td> ${lsPessoa[i].nome}</td>`;
    bodyTable += `<td> ${lsPessoa[i].status}</td>`;
    bodyTable += `<td> ${lsPessoa[i].local}</td>`;
    bodyTable += `<td> ${lsPessoa[i].horaInicio}</td>`;
    bodyTable += `<td> ${lsPessoa[i].inicioPrevisto}</td>`;
    bodyTable += `<td> ${lsPessoa[i].fimPrevisto}</td>`;
    bodyTable += `<td> ${lsPessoa[i].saidaPrevisto}</td>`;
    bodyTable +=  `</tr>`
   
}
document.getElementById("bodyTable").innerHTML = bodyTable;

}
uptadeTable()