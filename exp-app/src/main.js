import { createApp } from 'vue'
import { defineAsyncComponent } from "vue";
import App from './App.vue'

const compNames = [];
const rootProps = 
{
  compNames
}


const app = createApp(App, rootProps);

const ComponentContext = require.context('./components/', true, /index.vue/i, "lazy");


ComponentContext.keys().forEach((componentFilePath) => 
{
  const componentName = componentFilePath.split('/')[1];
  compNames.push(componentName);
  app.component(componentName, defineAsyncComponent(() => ComponentContext(componentFilePath.default || componentFilePath)));
});

app.mount('#app');
