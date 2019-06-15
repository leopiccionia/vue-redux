import { idx } from '../utils/idx'

export default function mapState (props) {
  const computed = {}
  if (Array.isArray(props)) {
    for (const prop of props) {
      const keySet = prop.split('.')
      computed[keySet[keySet.length - 1]] = function () {
        return idx(this.$state, keySet)
      }
    }
  } else {
    for (const key of Object.keys(props)) {
      const prop = props[key]
      if (typeof prop === 'function') {
        computed[key] = function () {
          return prop(this.$state)
        }
      } else {
        const keySet = prop.split('.')
        computed[key] = function () {
          return idx(this.$state, keySet)
        }
      }
    }
  }
  return computed
}
