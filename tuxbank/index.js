 import { Cliente } from "./class/Cliente.js";
import { ContaCorrente } from "./class/ContaCorrente.js";

//------------------------- cliente 2 ----------------------------
console.log("Cliente Jośe");
console.log(" ");

const cliente1 = new Cliente();
cliente1.nome = "Jose Arante"
cliente1.cpf = 123456789;


const contaCorrentecliente1 = new ContaCorrente(); 
contaCorrentecliente1.cliente = cliente1;
contaCorrentecliente1.agencia = 102;
contaCorrentecliente1.numeroConta = 1001;
contaCorrentecliente1.depositar(200);
contaCorrentecliente1.sacar(250);

console.log(contaCorrentecliente1);

console.log(" ");
//------------------ *///------- cliente 2 ----------------------------
 console.log("Cliente Maria");
console.log(" ");

const cliente2 = new Cliente();
cliente2.nome = "Maria Arante"
cliente2.cpf = 1234567800;


const contaCorrentecliente2 = new ContaCorrente(); 
contaCorrentecliente2.cliente = cliente2;
contaCorrentecliente2.agencia = 102;
contaCorrentecliente2.numeroConta = 1002;
contaCorrentecliente2.depositar(300);

contaCorrentecliente1.transferir(100, contaCorrentecliente2);

console.log(contaCorrentecliente2);
console.log(contaCorrentecliente1); 

import { Cliente } from "./class/Cliente.js";
import { ContaCorrente } from "./class/ContaCorrente.js";


const cliente1  = new Cliente("Maria Silva","09090909090");
const contaCliente1 = new ContaCorrente("102","100021",cliente1);

console.log(contaCliente1.cliente.cpfCliente);
