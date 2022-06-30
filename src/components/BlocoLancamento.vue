<template>
  <div class="blocoLancamento">
    <div class="botoes">
      <img
        v-if="tipo === 'entrada'"
        src="../img/mais.png"
        alt="Lucro"
        class="imagemLancamento"
      />
      <img
        v-else-if="tipo === 'saida'"
        src="../img/menos.png"
        alt="Gasto"
        class="imagemLancamento"
      />
      <button class="botaoRemover">
        <img src="../img/lixeira.png" alt="Remover Lancamento" />
      </button>
    </div>
    <div id="descricaoLancamento">
      <span v-if="tipo === 'entrada'" class="valor entrada"
        >R$
        {{
          lancamento.valor.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })
        }}</span
      >
      <span v-else-if="tipo === 'saida'" class="valor saida"
        >R$
        {{
          lancamento.valor.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })
        }}</span
      >
      <span>{{
        new Date(lancamento.data).toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        })
      }}</span>
      <span>{{ lancamento.descricao }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlocoLancamento",
  props: {
    tipo: String,
    lancamento: Object,
  },
};
</script>

<style scoped>
.blocoLancamento {
  display: flex;
  background-color: white;
  border-radius: 20px;
  font-family: "padrao";
  padding: 10px;
  margin-bottom: 10px;
}
.botoes {
  width: 50%;
}
.imagemLancamento {
  width: 50px;
  vertical-align: middle;
}
.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  vertical-align: middle;
}
.botaoRemover:hover {
  cursor: pointer;
}
.botaoRemover img {
  width: 40px;
}
.botaoRemover img:active {
  filter: invert(100%);
}
#descricaoLancamento {
  width: 50%;
  float: rigth;
  text-align: right;
}
#descricaoLancamento span {
  display: block;
  font-size: 80%;
}
.valor {
  font-family: "negrito";
  font-size: 200% !important;
  font-weight: bold;
}
.entrada {
  color: #22a7f0;
}
.saida {
  color: red;
}
</style>