import { createCounterStore, incrementCounter, mountWithStore } from '../utils'

describe('VueRedux - default build', () => {
  it('Exposes vm.$store', () => {
    const store = createCounterStore()
    const wrapper = mountWithStore(store, {
      template: '<div></div>'
    })
    expect(wrapper.vm.$store).toBeDefined()
    expect(wrapper.vm.$store).toBe(store)
    expect(wrapper.vm.$store.dispatch).toBeDefined()
  })

  it('Exposes vm.$state', () => {
    const store = createCounterStore()
    const wrapper = mountWithStore(store, {
      template: '<div>{{ $state }}</div>'
    })
    expect(wrapper.vm.$state).toBeDefined()
    expect(wrapper.vm.$state).toBe(0)
    expect(wrapper.html()).toBe('<div>0</div>')
  })

  it('vm.$state is reactive', () => {
    const store = createCounterStore()
    const wrapper = mountWithStore(store, {
      computed: {
        counter () {
          return this.$state
        }
      },
      template: '<div>{{ $state }} / {{ counter }}</div>'
    })
    expect(wrapper.vm.$state).toBe(0)
    expect(wrapper.html()).toBe('<div>0 / 0</div>')
    wrapper.vm.$store.dispatch(incrementCounter())
    expect(wrapper.vm.$state).toBe(1)
    expect(wrapper.html()).toBe('<div>1 / 1</div>')
  })
})
