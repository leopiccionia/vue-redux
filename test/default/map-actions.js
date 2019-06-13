import { createCounterStore, incrementCounter, mountWithStore } from '../test-utils'
import { mapActions } from '../../dist/index'

describe('mapActions', () => {
  it('Maps to action dispatcher', () => {
    const store = createCounterStore()
    const incrementCounterSpy = jest.fn(incrementCounter)
    const wrapper = mountWithStore(store, {
      methods: {
        ...mapActions({ incrementCounter: incrementCounterSpy })
      },
      template: '<div></div>'
    })
    expect(wrapper.vm.$state).toBe(0)
    expect(typeof wrapper.vm.incrementCounter).toBe('function')
    wrapper.vm.incrementCounter()
    expect(incrementCounterSpy).toHaveBeenCalled()
    expect(wrapper.vm.$state).toBe(1)
  })
})
