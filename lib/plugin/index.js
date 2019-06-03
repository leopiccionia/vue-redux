export default {
  install (Vue) {
    Vue.mixin({
      beforeCreate () {
        if (this.$options.store) {
          const store = this.$options.store
          this._storeRoot = this
          this._store = store
          Vue.util.defineReactive(this, '_state', store.getState())
          this.$options._storeUnsubscribe = store.subscribe(() => {
            this._state = store.getState()
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
    Object.defineProperties(Vue.prototype, {
      $state: {
        get () {
          return this._storeRoot._state
        }
      },
      $store: {
        get () {
          return this._storeRoot._store
        }
      }
    })
  }
}
