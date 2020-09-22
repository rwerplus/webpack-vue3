import VButton from './button/VButton.vue'
import Vue from 'vue'
import CSelect from './common/CMultipleSelect'
import CSingleSelect from './common/CSingleSelect'
import CIcon from './common/CIcon'
import CButtonGroup from './common/CButtonGroup'
const components = [
  VButton,
  CSelect,
  CSingleSelect,
  CIcon,
  CButtonGroup
]
const component = {
  install: function (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}
export default component
