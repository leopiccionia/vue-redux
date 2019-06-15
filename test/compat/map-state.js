import { createNestedStore, mountWithStoreCompat, setNested } from '../utils'
import { mapState } from '../../lib/compat'

describe('mapState - default build', () => {
  it('Accepts function', () => {
    const store = createNestedStore()
    const wrapper = mountWithStoreCompat(store, {
      computed: mapState({ fooBar: state => state.foo.bar }),
      template: '<div>{{ fooBar }}</div>'
    })
    expect(wrapper.vm.fooBar).toBe(0)
    expect(wrapper.html()).toBe('<div>0</div>')
    wrapper.vm.$store.dispatch(setNested(10))
    expect(wrapper.vm.fooBar).toBe(10)
    expect(wrapper.html()).toBe('<div>10</div>')
  })

  it('Accepts paths object', () => {
    const store = createNestedStore()
    const wrapper = mountWithStoreCompat(store, {
      computed: mapState({ foo: 'foo', fooBar: 'foo.bar' }),
      template: '<div>{{ foo.bar }} / {{ fooBar }}</div>'
    })
    expect(wrapper.vm.foo).toStrictEqual({ bar: 0 })
    expect(wrapper.vm.fooBar).toBe(0)
    expect(wrapper.html()).toBe('<div>0 / 0</div>')
    wrapper.vm.$store.dispatch(setNested(10))
    expect(wrapper.vm.foo).toStrictEqual({ bar: 10 })
    expect(wrapper.vm.fooBar).toBe(10)
    expect(wrapper.html()).toBe('<div>10 / 10</div>')
  })

  it('Accepts paths array', () => {
    const store = createNestedStore()
    const wrapper = mountWithStoreCompat(store, {
      computed: mapState(['foo', 'foo.bar']),
      template: '<div>{{ foo.bar }} / {{ bar }}</div>'
    })
    expect(wrapper.vm.foo).toStrictEqual({ bar: 0 })
    expect(wrapper.vm.bar).toBe(0)
    expect(wrapper.html()).toBe('<div>0 / 0</div>')
    wrapper.vm.$store.dispatch(setNested(10))
    expect(wrapper.vm.foo).toStrictEqual({ bar: 10 })
    expect(wrapper.vm.bar).toBe(10)
    expect(wrapper.html()).toBe('<div>10 / 10</div>')
  })
})
