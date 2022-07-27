import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar'
import parentView from '@/views/parentView'

describe('Navbar.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Navbar, {
      props: { msg }
    })
    //expect(wrapper.text()).toMatch(msg)
  })
})

describe('parentView', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof parentView.data).toBe('function')
    
  })
})
