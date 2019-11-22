var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            if (nome != "") {
                this._nome = nome;
            }
        };
        Pessoa.prototype.getIdade = function () {
            return this._idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            if (idade != NaN) {
                this._idade = idade;
            }
        };
        Pessoa.prototype.getCpf = function () {
            return this._cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            if (cpf != "") {
                this._cpf = cpf;
            }
        };
        return Pessoa;
    }());
})(empresa || (empresa = {}));
