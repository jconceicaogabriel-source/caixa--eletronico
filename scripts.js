//definindo classe
class contaBancaria{
    //propriedade privada para saldo
    #saldo = 0;
    //métodos
    //deposita valor a propriedade privada
    deposito(valor){
        this.#saldo += valor;
    }
    //saca valor da propriedade privada
    saque(valor){
        this.#saldo -= valor;
    }
    //verifica saldo da propriedade privada
    verificaSaldo(valor){
        return this.#saldo >= valor;
    }
    //método getter permite acessar o saldo da propriedade privada
    get saldo(){
        return this.#saldo;
    }
}
//cria uma classe
class caixaEletronico{
    constructor(conta){
        //
        this.conta = conta;
    }
    depositar(){
        const valorDps = Number(document.getElementById("valorDeposito").value);
        if(valorDps > 0){
            this.conta.deposito(valorDps);
            this.mostrarSaldo(this.conta.saldo);
        }
    }
    sacar(){
        const valorScr = Number(document.getElementById("valorSaque").value);
        if(valorScr > 0){
            if(this.conta.verificaSaldo(valorScr)){
            this.conta.saque(valorScr);
            this.mostrarSaldo(this.conta.saldo);
            }else{
            document.getElementById("erro").textContent = "Saldo insuficiente!";
        }
    }
}
    mostrarSaldo(saldo){
        document.getElementById("saldo").textContent = `SALDO R$: ${saldo}`;
        document.getElementById("valorDeposito").value = '';
        document.getElementById("valorSaque").value = '';
    }
    }
    const minhaConta = new contaBancaria();
    const meuCaixa = new caixaEletronico(minhaConta);