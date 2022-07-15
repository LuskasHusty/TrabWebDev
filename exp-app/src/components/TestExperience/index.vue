<template>
  <div v-on:click="activate">   
    <h1>{{expName}}</h1>
  </div>
</template>

<script>

import exec from './exec.vue';

export default {
  name: "ExperienciaTeste1",
  methods:
  {
    activate()
    {
      this.$emit('clicked', exec);
    }
  },
  props: 
  {
    expName: 
    {
      type: String,
      default: "Experiencia De Teste 1"
    },
    msg: String,
    show: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
