import { createCounterStore, incrementCounter, mountWithStoreCompat } from '../utils'

describe('VueRedux - default build', () => {
  it('Exposes vm.$store', () => {
    const store = createCounterStore()
    const wrapper = mountWithStoreCompat(store, {
      template: '<div></div>'
    })
    expect(wrapper.vm.$store).toBeDefined()
    expect(wrapper.vm.$store).toBe(store)
    expect(wrapper.vm.$store.dispatch).toBeDefined()
  })

  it('Exposes vm.$store.state', () => {
    const store = createCounterStore()
    const wrapper = mountWithStoreCompat(store, {
      template: '<div>{{ $store.state }}</div>'
    })
    expect(wrapper.vm.$store.state).toBeDefined()
    expect(wrapper.vm.$store.state).toBe(0)
    expect(wrapper.html()).toBe('<div>0</div>')
  })

  it('vm.$state is reactive', () => {
    const store = createCounterStore()
    const wrapper = mountWithStoreCompat(store, {
      computed: {
        counter () {
          return this.$store.state
        }
      },
      template: '<div>{{ $store.state }} / {{ counter }}</div>'
    })
    expect(wrapper.vm.$store.state).toBe(0)
    expect(wrapper.html()).toBe('<div>0 / 0</div>')
    wrapper.vm.$store.dispatch(incrementCounter())
    expect(wrapper.vm.$store.state).toBe(1)
    expect(wrapper.html()).toBe('<div>1 / 1</div>')
  })
})
