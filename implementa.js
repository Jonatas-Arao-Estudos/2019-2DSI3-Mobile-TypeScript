///<reference path="pessoa.ts"/>
var empresa;
(function (empresa) {
    //Instancia de Classe
    var p = new empresa.Pessoa();
    p.setNome("Maria");
    p.setIdade(18);
    p.setCpf("000.000.000-00");
    document.getElementById("nome").textContent = p.getNome();
})(empresa || (empresa = {}));
