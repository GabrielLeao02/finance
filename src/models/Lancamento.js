export default class Lancamento{

    constructor (valor, descricao, data){
        this.id = Math.random().toString(36).substring(2, 5);
        this.valor = valor;
        this.descricao = descricao;
        this.data = data;
    }

}