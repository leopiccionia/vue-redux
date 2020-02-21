import { createCounterStore, incrementCounter, mountWithStore, setCounter } from './utils'
import { mapActions } from '../lib'

describe('mapActions', () => {
  it('Maps to action dispatcher', () => {
    const store = createCounterStore()
    const incrementCounterSpy = jest.fn(incrementCounter)
    const wrapper = mountWithStore(store, {
      methods: mapActions({ incrementCounter: incrementCounterSpy }),
      template: '<div></div>'
    })
    expect(wrapper.vm.$state).toBe(0)
    expect(typeof wrapper.vm.incrementCounter).toBe('function')

    wrapper.vm.incrementCounter()

    expect(incrementCounterSpy).toHaveBeenCalled()
    expect(wrapper.vm.$state).toBe(1)
  })

  it('Passes arguments to action dispatcher', () => {
    const store = createCounterStore()
    const setCounterSpy = jest.fn(setCounter)
    const wrapper = mountWithStore(store, {
      methods: mapActions({ setCounter: setCounterSpy }),
      template: '<div></div>'
    })
    expect(wrapper.vm.$state).toBe(0)

    wrapper.vm.setCounter(10)

    expect(setCounterSpy).toHaveBeenCalledWith(10)
    expect(wrapper.vm.$state).toBe(10)
  })
})
