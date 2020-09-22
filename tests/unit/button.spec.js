import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import VButton from '../../src/components/button/VButton'
import CIcon from '../../src/components/common/CIcon'
describe('VButton.vue,CIcon.vue', () => {
  it('renders props.msg when passed', () => {
    const icon = 'setup'
    const wrapper = shallowMount(CIcon, {
      propsData: { icon }
    })
    expect(wrapper.text()).to.include(icon)
  })
})
