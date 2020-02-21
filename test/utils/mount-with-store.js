import { createLocalVue, shallowMount } from '@vue/test-utils'
import { VueRedux } from '../../lib'

export function mountWithStore (store, component) {
  const localVue = createLocalVue()
  localVue.use(VueRedux)
  const wrapper = shallowMount(component, {
    localVue,
    store
  })
  return wrapper
}
