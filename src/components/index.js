import VButton from './button/VButton.vue'
import Vue from 'vue'
import CSelect from './common/CSelect'
const components = [
  VButton,
  CSelect
]
components.forEach(component => {
  Vue.component(component.name, component);
});
export default components
