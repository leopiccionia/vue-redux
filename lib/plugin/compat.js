export default {
  install (Vue) {
    Vue.mixin({
      beforeCreate () {
        if (this.$options.store) {
          const store = this.$options.store
          this._storeRoot = this
          this._store = store
          Vue.util.defineReactive(store, 'state', store.getState())
          this.$options._storeUnsubscribe = store.subscribe(() => {
            store.state = store.getState()
          })
        } else {
          this._storeRoot = (this.$parent && this.$parent._storeRoot) || this
        }
      },
      destroyed () {
        if (this.$options._storeUnsubscribe) {
          this.$options._storeUnsubscribe()
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$store', {
      get () {
        return this._storeRoot._store
      }
    })
  }
}
