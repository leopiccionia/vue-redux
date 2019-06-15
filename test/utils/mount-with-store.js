import { createLocalVue, shallowMount } from '@vue/test-utils'
import { VueRedux } from '../../lib'
import { VueRedux as VueReduxCompat } from '../../lib/compat'

function genericMountWithStore (plugin, store, component) {
  const localVue = createLocalVue()
  localVue.use(plugin)
  const wrapper = shallowMount(component, {
    localVue,
    store
  })
  return wrapper
}

export function mountWithStore (store, component) {
  return genericMountWithStore(VueRedux, store, component)
}

export function mountWithStoreCompat (store, component) {
  return genericMountWithStore(VueReduxCompat, store, component)
}
