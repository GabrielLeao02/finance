

<template>
  <MarcaProjeto />
  <HeaderProjeto />
  <div id="container">
    <PainelLancamentos/>
    <PainelResumo/>
  </div>
</template>

<script>
import HeaderProjeto from "./components/HeaderProjeto.vue";

import MarcaProjeto from "./components/MarcaProjeto.vue";
import PainelLancamentos from "./components/PainelLancamentos.vue";
import PainelResumo from "./components/PainelResumo.vue";
export default {
  name: "App",
  components: {
    MarcaProjeto,
    HeaderProjeto,
    PainelLancamentos,
    PainelResumo
},
};
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}
@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

:root {
  --cor-destaque: #5333ed;
}

body {
  margin: 0;
  background-color: #dddddd;
}
#container{
  display: flex;
  padding: 20px;
}
</style>