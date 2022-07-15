<template>
  <div id="app">
    <h1 @click="deactivateScreen" v-if="Active">Fechar</h1>
    <div class="screen">
      <div v-if="!Active">
        <img src="./assets/gigachad.gif" class="chad">
      </div>
      <div v-if="Active" class="troll">
        <component :is="Running" :active="Active"/>
      </div>
    </div>
    
    <div class="parent">
      <div v-for="(comp, index) in compNames" v-bind:key="index" class="item">
        <component @clicked="onClickChild" :is="comp" :show="true"></component>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  props:
  {
    compNames: Array,
  },
  data()
  {
    return {Active: false, Running: "CompExec"};
  },
  methods:
  {
    deactivateScreen()
    {
      this.Active = false
      this.$forceUpdate();
    },
    onClickChild(value) 
    {
      this.Active = false;
      this.$forceUpdate();
      this.Running = value;
      this.Active = true;
    }
  }
}
</script>

<style>
html, body {
  align-items: center;
  justify-content: space-around;
  display: flex;
  
  background-color: #27282c ;

  height: 100vh; /*viewport height*/
  width: 100vw;
}
#app {
  display: flex;

  flex-flow: column nowrap;
  justify-content: space-evenly;

  height: 100%;
  width: 100%;
  align-items: center;

}

.parent {
  height: 20%;
  width: 80%;

  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-flow: row wrap;
}
.item {
  background: #fff;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  width: 25vw;
  transition: 0.5s;
  height: 40%;
  border-radius: 10px;
}

.item div {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item h1 {
  padding: 0.1em 0.3em;
  font-size: 1.2em;
  letter-spacing: 0.1em;
}

.item:hover
{
  letter-spacing: 0.25em;
  box-shadow: 0 0 35px crimson;
  background: crimson;
  padding: 0;
  height: 50%;

  cursor: pointer;
}

.item:hover h1
{
  padding: 0.2em 0.4em; 
}

.screen
{
  background: white;
  text-align: center;
  width: 80%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-shadow: 0 0 35px black;
  border-radius: 10px;
}

.screen div {
  height: 100%;
  width: 100%;
}

.chad{
  height:100%;
}

.troll{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
