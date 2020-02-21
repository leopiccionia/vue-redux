import { createNestedStore, mountWithStore, setNested } from './utils'
import { mapState } from '../lib'

describe('mapState', () => {
  it('Accepts function', async () => {
    const store = createNestedStore()
    const wrapper = mountWithStore(store, {
      computed: mapState({ fooBar: state => state.foo.bar }),
      template: '<div>{{ fooBar }}</div>'
    })
    expect(wrapper.vm.fooBar).toBe(0)
    expect(wrapper.html()).toBe('<div>0</div>')

    wrapper.vm.$store.dispatch(setNested(10))
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.fooBar).toBe(10)
    expect(wrapper.html()).toBe('<div>10</div>')
  })

  it('Accepts paths object', async () => {
    const store = createNestedStore()
    const wrapper = mountWithStore(store, {
      computed: mapState({ foo: 'foo', fooBar: 'foo.bar' }),
      template: '<div>{{ foo.bar }} / {{ fooBar }}</div>'
    })
    expect(wrapper.vm.foo).toStrictEqual({ bar: 0 })
    expect(wrapper.vm.fooBar).toBe(0)
    expect(wrapper.html()).toBe('<div>0 / 0</div>')

    wrapper.vm.$store.dispatch(setNested(10))
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.foo).toStrictEqual({ bar: 10 })
    expect(wrapper.vm.fooBar).toBe(10)
    expect(wrapper.html()).toBe('<div>10 / 10</div>')
  })

  it('Accepts paths array', async () => {
    const store = createNestedStore()
    const wrapper = mountWithStore(store, {
      computed: mapState(['foo', 'foo.bar']),
      template: '<div>{{ foo.bar }} / {{ bar }}</div>'
    })
    expect(wrapper.vm.foo).toStrictEqual({ bar: 0 })
    expect(wrapper.vm.bar).toBe(0)
    expect(wrapper.html()).toBe('<div>0 / 0</div>')

    wrapper.vm.$store.dispatch(setNested(10))
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.foo).toStrictEqual({ bar: 10 })
    expect(wrapper.vm.bar).toBe(10)
    expect(wrapper.html()).toBe('<div>10 / 10</div>')
  })
})
