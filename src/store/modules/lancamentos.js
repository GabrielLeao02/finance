const moduloLancamentos = {
    state: {
        lancamentos: [
            {
                id: Math.random().toString(36).substring(2, 5),
                valor: 50,
                descricao: "Compras no mercado",
                data: "2022-07-24"
            },
            {
                id: Math.random().toString(36).substring(2, 5),
                valor: 20,
                descricao: "Gorjeta",
                data: "2022-07-25"
            },
            {
                id: Math.random().toString(36).substring(2, 5),
                valor: -70,
                descricao: "Gasolina",
                data: "2022-07-26 "
            }
        ],
        caixa: 0,

    },
    getters: {
        todosLancamentos: state => state.lancamentos,
        dinheiroCaixa: state => state.caixa
    },
    actions: {
     
        salvarLancamento: ({ commit }, lancamento) => {
            commit("adicionarLancamento", lancamento);
            commit("calcularCaixa");
        },
        salvarcaixa: ({ commit }) => commit("calcularCaixa")
        
    },
    mutations: {
        adicionarLancamento:
            (state, lancamento) => state.lancamentos.unshift(lancamento),
        calcularCaixa: state => {
            const caixa =
                state.lancamentos.length > 0
                    ? state.lancamentos
                        .map(lancamento => lancamento.valor)
                        .reduce((soma, valor) => soma + valor)
                    : 0;
            state.caixa = caixa;
        }

    }
};

export default moduloLancamentos;