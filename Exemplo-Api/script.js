function acessarAPI(link,executarFuncao){
    
    var xhtml =  new XMLHttpRequest();
    xhtml.open('GET', link, true);
    xhtml.send();
    xhtml.onreadystatechange = function(){
      if ( this.readyState == 4 &&
        this.status ==  200 ) {
            console.log(link);
            executarFuncao(this.responseText);

        }
        if ( this.readyState == 4 &&
            this.status == 0) {
             
                

    document.getElementById("logradouro").value = '';
    document.getElementById("complemento").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById("localidade").value = '';

    
            }
    }
    
}
function searchAddress(obj){
    acessarAPI(`https://viacep.com.br/ws/${obj.value}/json/`, fillForm )
}

function fillForm(obj){
obj  = JSON.parse(obj);
document.getElementById("cep").value = obj.cep
document.getElementById("logradouro").value = obj.logradouro
document.getElementById("complemento").value = obj.complemento
document.getElementById("bairro").value = obj.bairro
document.getElementById("localidade").value = obj.localidade





}