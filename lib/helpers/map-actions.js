export default function mapActions (actions) {
  const methods = {}
  for (const key of Object.keys(actions)) {
    methods[key] = function (...args) {
      this.$store.dispatch(actions[key](...args))
    }
  }
  return methods
}
