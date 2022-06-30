<template>
  <div class="painelResumo">
    <div class="resumoCaixa">
      <span class="fraseResumo">Dinheiro em Caixa</span>
      <span class="caixa">R$ {{ dinheiroCaixa }}</span>
    </div>
   <GraficoComportamento/>
  </div>
</template>

<script>
import GraficoComportamento from './GraficoComportamento.vue'
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "PainelResumo",
    components : { GraficoComportamento },
    computed : mapGetters(["dinheiroCaixa"]),
    methods : mapActions(['salvarcaixa']),
    created(){
      this.salvarcaixa();
    }
}
</script>

<style scoped>
.painelResumo {
  width: 60%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
}
.resumoCaixa {
  text-align: right;
  padding: 10px;
}
.resumoCaixa span {
  display: block;
  font-family: "negrito";
  font-weight: bold;
}
.fraseResumo {
  font-size: 200%;
}
.caixa {
  font-size: 350%;
  margin-top: 15px;
}
</style>