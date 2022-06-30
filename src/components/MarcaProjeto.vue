<template>
  <div>
    <v-container>
      <div>
        <img src="../img/LogoJulius.png" alt="Logo Julios" />
        <span>User</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MarcaProjeto",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  background-color: white;
  font-family: "negrito";
  padding: 10px;
}
img{
  width: 40px;
  vertical-align: middle;
  margin-right: 10px;
}
span{
  color: var(--cor-destaque);
  font-size: 120%;
}
</style>
