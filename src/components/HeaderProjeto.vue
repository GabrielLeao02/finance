<template>
  <v-container>
    <div>
      <h1>Finanças</h1>
      <p>Colocando as contas nos eixos!</p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HeaderProjeto",
  props: {},
};
</script>


<style scoped>
div {
  background-image: linear-gradient(to right, #4d13d1, #59abe3);
  color: white;
  padding: 15px;
}
h1{
  font-family: "negrito";
  font-size: 200%;
}
p{
  font-family: "padrao";
  color: white;
  font-size: 100%;
}
</style>
