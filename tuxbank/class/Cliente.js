export class Cliente{
    //Atributo da classe
    nome;
    cpf;
    agencia;
    saldo; 

    
    constructor(nome, cpf){
        this.nome = nome;        
        this.cpfCliente = cpf;
    }

    set cpfCliente(cpf){
        this._cpf = cpf;
    }

    get cpfCliente(){
        return this._cpf;
    }

}

const cliente1 = new Cliente("José Carlos","3232332323");
cliente1.cpfCliente = "0000540000000";

console.log(cliente1.cpfCliente.cpfCliente);

