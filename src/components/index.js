import VButton from './button/VButton.vue'
import Vue from 'vue'
import CSelect from './common/CMultipleSelect'
import CSingleSelect from './common/CSingleSelect'
import VIcon from './icon/VIcon'
const components = [
  VButton,
  CSelect,
  CSingleSelect,
  VIcon
]
components.forEach(component => {
  Vue.component(component.name, component);
});
export default components
