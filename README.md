# vue-redux

`vue-redux` is a Redux wrapper for Vue that exposes an API similar to Vuex.

It's a tiny package (~1.5 KB), including some [optional helpers](#helpers).

## When should you use it

It's intended for users already using Redux, or by those that need a way to access the store outside of Vue (e.g. using micro-frontends).

Vuex is an excellent solution, deeply integrated with Vue ecosystem and tooling, that should be carefully considered.

## Installation

### NPM

```bash
npm install --save @leopiccionia/vue-redux
```

### Yarn

```bash
yarn add @leopiccionia/vue-redux
```

## Usage

### Plugin

The package exposes a Vue plugin called `VueRedux`.

```javascript
import Vue from 'vue'
import { VueRedux } from '@leopiccionia/vue-redux'

import App from './App.vue'
import store from './store.js'

Vue.use(VueRedux)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
```

Then you'll be able to use the following **read-only** properties inside your components:

* `this.$store`: The provided store, so you can use `this.$store.dispatch`, `this.$store.subscribe`, etc.
* `this.$state`: The current state. It's tracked by Vue reactivity system, so you can use it inside templates and computed properties.

Just like in vanilla Redux, you should mutate state only via dispatching actions.

For debugging the current state, use [Redux DevTools](https://github.com/reduxjs/redux-devtools).

#### Compat mode

For enhanced compatibility with Vuex API, use the experimental "compat" build. All named exports have the same alias.

For ES modules:

```diff
- import { ... } from '@leopiccionia/vue-redux'
+ import { ... } from '@leopiccionia/vue-redux/dist/compat'
```

For CommonJS:

```diff
- const { ... } = require('@leopiccionia/vue-redux')
+ const { ... } = require('@leopiccionia/vue-redux/dist/compat.umd')
```

In this mode, the Vue-tracked store Redux is available at `this.$store.state` instead of `this.$state`, just like Vuex.

### Helpers

#### mapActions

This function receives an object whose values are the [action creators](https://redux.js.org/glossary#action-creator) that should be dispatched.

Differently from Vuex, Redux actions aren't coupled with the store, so they need to be imported inside the component.

```javascript
import { mapActions } from '@leopiccionia/vue-redux'
import { setName } from '../store/actions'

export default {
  methods: {
    ...mapActions({ setName })
  }
}
```

Is equivalent to:

```javascript
import { setName } from '../store/actions'

export default {
  methods: {
    setName (...args) {
      this.$store.dispatch(setName(...args))
    }
  }
}
```

#### mapState

This function can receive an object, whose values can be functions, that maps the state, or strings, that represent paths in the state tree.

```javascript
import { mapState } from '@leopiccionia/vue-redux'

export default {
  computed: {
    ...mapState({
      fullName: state => state.firstName + ' ' + state.lastName,
      address: 'address'
    })
  }
}
```

Is equivalent to:

```javascript
export default {
  computed: {
    fullName () {
      return this.$state.firstName + ' ' + this.$state.lastName
    },
    address () {
      return this.$state.address
    }
  }
}
```

Alternatively, the function can receive an array of strings.

```javascript
import { mapState } from '@leopiccionia/vue-redux'

export default {
  computed: {
    ...mapState(['name', 'sale.cart'])
  }
}
```

Is equivalent to:

```javascript
export default {
  computed: {
    name () {
      return this.$state.name
    },
    cart () {
      return this.$state.sale.cart
    }
  }
}
```

## Examples

* [TodoMVC](/examples/todomvc): inspired by React-Redux [basic tutorial](https://redux.js.org/basics/usage-with-react).
* [Reddit client](/examples/reddit-client): inspired by React-Redux [advanced tutorial](https://redux.js.org/advanced/example-reddit-api), featuring `redux-thunk`.

## Roadmap

* [ ] Add TypeScript types
* [ ] Add unit tests
