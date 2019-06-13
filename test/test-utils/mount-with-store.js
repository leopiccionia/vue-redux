import { createLocalVue, shallowMount } from '@vue/test-utils'
import { VueRedux } from '../../dist/index'
import { VueRedux as VueReduxCompat } from '../../dist/compat'

export function mountWithStore (store, component) {
  const localVue = createLocalVue()
  localVue.use(VueRedux)
  const wrapper = shallowMount(component, {
    localVue,
    store
  })
  return wrapper
}

export function mountWithStoreCompat (store, component) {
  const localVue = createLocalVue()
  localVue.use(VueReduxCompat)
  const wrapper = shallowMount(component, {
    localVue,
    store
  })
  return wrapper
}
