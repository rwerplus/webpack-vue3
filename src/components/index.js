import VButton from './VButton.vue'
import Vue from 'vue'
const components = [
  VButton
]
components.forEach(component => {
  Vue.component(component.name, component);
});
export default components
