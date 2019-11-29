///<reference path="pessoa.ts"/>
namespace empresa{
    //Instancia de Classe
    let p = new Pessoa();
    p.setNome("Maria");
    p.setIdade(18);
    p.setCpf("000.000.000-00");

    document.getElementById("nome").textContent = p.getNome();
}