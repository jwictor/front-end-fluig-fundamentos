function externo(){
    var pessoa = {
        Nome            : "João",
        Sobrenome       : "Wictor",
        Departamento    : "fluig"
    };

    document.getElementById("local").innerHTML = 
    pessoa.Nome + " trabalha no " + pessoa.Departamento + "<br />" + pessoa.Nome + " " + pessoa.Sobrenome;
}