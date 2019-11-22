namespace empresa{
    class Pessoa{
         private _nome : string;
         private _idade : number;
         private _cpf : string;

         public getNome() : string{
            return this._nome;
         }

         public setNome(nome: string) : void{
             if(nome != ""){
                this._nome = nome;
             }
         }

         public getIdade() : number{
            return this._idade;
         }

         public setIdade(idade: number) : void{
             if(idade != NaN){
                this._idade = idade;
             }
         }

         public getCpf() : string{
            return this._cpf;
         }

         public setCpf(cpf: string) : void{
             if(cpf != ""){
                this._cpf = cpf;
             }
         }
    }
}